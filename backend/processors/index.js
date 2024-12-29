const ImageProcessor = require('./image-processor');
const PdfProcessor = require('./pdf-processor');

// Configure common OCR settings that can be used across processors
const ocrConfig = {
  // Tesseract configuration
  tesseractConfig: {
    lang: 'eng',
    psm: 3,      // Page segmentation mode: 3 is usually best for normal text
    oem: 3,      // OCR Engine mode: 3 uses LSTM neural net mode
    // Configure variables that help with bold text
    tessedit_char_blacklist: '|', // Remove common misrecognition
    textord_heavy_nr: 1,          // Better bold text recognition
    tessedit_write_images: true   // Helpful for debugging
  },
  
  // OCRmyPDF configuration
  ocrMyPdfConfig: {
    // Set this to true if you're processing PDFs that already have OCR
    redo_ocr: false,          // Choose between redo mode and initial OCR mode
    
    // Enhancement options (used in initial OCR mode)
    deskew: true,
    clean: true,
    
    // Common options (used in both modes)
    rotate_pages: true,
    optimize: 1,
    force_ocr: true,
    skip_big: 100,
    oversample: 300
  }
};

module.exports = {
    ImageProcessor,
    PdfProcessor,
    ocrConfig
}; 