const { spawn } = require('child_process');

/**
 * Handles PDF processing using OCRmyPDF and text extraction using pdftotext
 */
class PdfProcessor {
  /**
   * Initialize the processor with configuration
   * @param {Object} config - Configuration object containing OCRmyPDF settings
   */
  constructor(config) {
    this.config = config.ocrMyPdfConfig;
  }

  /**
   * Extract text from a PDF file using pdftotext
   * @param {string} pdfPath - Path to the PDF file
   * @returns {Promise<string>} - Extracted text content
   */
  async extractText(pdfPath) {
    return new Promise((resolve, reject) => {
      // Spawn pdftotext process, output to stdout (-)
      const process = spawn('pdftotext', [pdfPath, '-']);
      let text = '';
      let error = '';

      // Collect stdout data
      process.stdout.on('data', (data) => {
        text += data.toString();
      });

      // Collect stderr data
      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      // Handle process completion
      process.on('close', (code) => {
        if (code === 0) {
          resolve(text.trim());
        } else {
          reject(new Error(`pdftotext process failed: ${error}`));
        }
      });
    });
  }

  /**
   * Process a PDF file with OCR and extract its text
   * @param {string} inputPath - Path to the input PDF file
   * @param {string} outputPath - Path where the processed PDF should be saved
   * @returns {Promise<Object>} - Object containing the output path and extracted text
   */
  async processPdf(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
      const args = [];
      
      // Configure OCR mode
      if (this.config.redo_ocr) {
        args.push('--redo-ocr');  // Redo OCR on already OCR'd PDFs
      }
      args.push('--force-ocr');   // Force OCR even if text is present
      
      // Add image processing options from config
      if (this.config.deskew) args.push('--deskew');           // Straighten text
      if (this.config.rotate_pages) args.push('--rotate-pages'); // Fix page rotation
      if (this.config.oversample) args.push('--oversample', this.config.oversample); // Set DPI
      if (this.config.optimize !== undefined) args.push('--optimize', this.config.optimize); // PDF optimization level
      
      // Add input and output paths
      args.push(inputPath, outputPath);

      // Log the complete command for debugging
      console.log('OCRmyPDF command:', 'ocrmypdf', args.join(' '));

      // Spawn OCRmyPDF process
      const process = spawn('ocrmypdf', args);
      let error = '';

      // Collect error output
      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      // Handle process completion
      process.on('close', async (code) => {
        if (code === 0) {
          try {
            // Extract text from the processed PDF
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