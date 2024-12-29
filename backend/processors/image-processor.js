const path = require('path');
const fs = require('fs').promises;
const BaseProcessor = require('./base-processor');

class ImageProcessor extends BaseProcessor {
    async process(file) {
        const outputPath = path.join('uploads', `output_${Date.now()}.txt`);
        
        try {
            await this.execPromise(`tesseract ${file.path} ${outputPath.replace('.txt', '')}`);
            const data = await fs.readFile(outputPath, 'utf8');
            
            await this.cleanup([file.path, outputPath]);
            
            return {
                text: data,
                originalFile: file.originalname
            };
        } catch (error) {
            await this.cleanup([file.path, outputPath]);
            throw new Error(`Image OCR processing failed: ${error.message}`);
        }
    }
}

module.exports = ImageProcessor; 