const { spawn } = require('child_process');

/**
 * Handles image processing and text extraction using Tesseract OCR
 */
class ImageProcessor {
  /**
   * Initialize the processor with configuration
   * @param {Object} config - Configuration object containing Tesseract settings
   */
  constructor(config) {
    this.config = config.tesseractConfig;
  }

  /**
   * Process an image file and extract text using Tesseract OCR
   * @param {string} imagePath - Path to the input image file
   * @returns {Promise<string>} - Extracted text content
   */
  async processImage(imagePath) {
    return new Promise((resolve, reject) => {
      // Build tesseract command arguments
      const args = [
        imagePath,           // Input image path
        'stdout',           // Output to stdout instead of file
        '-l', this.config.lang,  // Language(s) to use
        '--psm', this.config.psm, // Page segmentation mode
        '--oem', this.config.oem  // OCR Engine mode
      ];

      // Add custom configurations for better text recognition
      if (this.config.tessedit_char_blacklist) {
        args.push('-c', `tessedit_char_blacklist=${this.config.tessedit_char_blacklist}`);
      }
      if (this.config.textord_heavy_nr) {
        args.push('-c', `textord_heavy_nr=${this.config.textord_heavy_nr}`);
      }

      // Log the complete command for debugging
      console.log('Tesseract command:', 'tesseract', args.join(' '));

      // Spawn Tesseract process
      const process = spawn('tesseract', args);
      let text = '';
      let error = '';

      // Collect stdout data (extracted text)
      process.stdout.on('data', (data) => {
        text += data.toString();
      });

      // Collect stderr data (errors and warnings)
      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      // Handle process completion
      process.on('close', (code) => {
        if (code === 0) {
          console.log('Extracted text:', text); // Debug log
          resolve(text.trim());
        } else {
          reject(new Error(`Tesseract process failed: ${error}`));
        }
      });
    });
  }
}

module.exports = ImageProcessor; 