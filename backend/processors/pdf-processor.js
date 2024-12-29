const path = require('path');
const fs = require('fs').promises;
const BaseProcessor = require('./base-processor');

class PdfProcessor extends BaseProcessor {
    async process(file) {
        const outputPath = path.join('uploads', `output_${Date.now()}.txt`);
        const pdfOutputPath = outputPath.replace('.txt', '.pdf');
        
        try {
            await this.execPromise(`ocrmypdf ${file.path} ${pdfOutputPath}`);
            await this.execPromise(`pdftotext ${pdfOutputPath} ${outputPath}`);
            
            const data = await fs.readFile(outputPath, 'utf8');
            
            await this.cleanup([file.path, outputPath, pdfOutputPath]);
            
            return {
                text: data,
                originalFile: file.originalname
            };
        } catch (error) {
            await this.cleanup([file.path, outputPath, pdfOutputPath]);
            throw new Error(`PDF OCR processing failed: ${error.message}`);
        }
    }
}

module.exports = PdfProcessor; 