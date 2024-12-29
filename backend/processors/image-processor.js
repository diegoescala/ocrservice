const { spawn } = require('child_process');

class ImageProcessor {
  constructor(config) {
    this.config = config.tesseractConfig;
  }

  async processImage(imagePath) {
    return new Promise((resolve, reject) => {
      const args = [
        imagePath,
        'stdout',
        '-l', this.config.lang,
        '--psm', this.config.psm,
        '--oem', this.config.oem,
        '-c', `tessedit_char_blacklist=${this.config.tessedit_char_blacklist}`,
        '-c', `textord_heavy_nr=${this.config.textord_heavy_nr}`
      ];

      const process = spawn('tesseract', args);
      let output = '';
      let error = '';

      process.stdout.on('data', (data) => {
        output += data.toString();
      });

      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      process.on('close', (code) => {
        if (code === 0) {
          resolve(output.trim());
        } else {
          reject(new Error(`Tesseract process failed: ${error}`));
        }
      });
    });
  }
}

module.exports = ImageProcessor; 