const { spawn } = require('child_process');

class PdfProcessor {
  constructor(config) {
    this.config = config.ocrMyPdfConfig;
  }

  async extractText(pdfPath) {
    return new Promise((resolve, reject) => {
      const process = spawn('pdftotext', [pdfPath, '-']);
      let text = '';
      let error = '';

      process.stdout.on('data', (data) => {
        text += data.toString();
      });

      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve(text.trim());
        } else {
          reject(new Error(`pdftotext process failed: ${error}`));
        }
      });
    });
  }

  async processPdf(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      const args = [];
      
      // Core OCR options
      if (this.config.redo_ocr) {
        args.push('--redo-ocr');
      }
      args.push('--force-ocr');
      
      // Essential image processing options
      if (this.config.deskew) args.push('--deskew');
      if (this.config.rotate_pages) args.push('--rotate-pages');
      if (this.config.oversample) args.push('--oversample', this.config.oversample);
      if (this.config.optimize !== undefined) args.push('--optimize', this.config.optimize);
      
      // Add input and output paths
      args.push(inputPath, outputPath);

      console.log('OCRmyPDF command:', 'ocrmypdf', args.join(' ')); // Debug log

      const process = spawn('ocrmypdf', args);
      let error = '';

      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      process.on('close', async (code) => {
        if (code === 0) {
          try {
            const text = await this.extractText(outputPath);
            console.log('Extracted text:', text); // Debug log
            resolve({
              path: outputPath,
              text: text
            });
          } catch (err) {
            reject(new Error(`Text extraction failed: ${err.message}`));
          }
        } else {
          reject(new Error(`OCRmyPDF process failed: ${error}`));
        }
      });
    });
  }
}

module.exports = PdfProcessor; 