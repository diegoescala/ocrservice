const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { ImageProcessor, PdfProcessor, ocrConfig } = require('./processors');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Ensure uploads directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// File upload endpoint
app.post('/ocr', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        if (req.file.mimetype === 'application/pdf') {
            const pdfProcessor = new PdfProcessor(ocrConfig);
            const outputPath = `uploads/${req.file.filename}_processed.pdf`;
            
            const result = await pdfProcessor.processPdf(req.file.path, outputPath);
            res.json({ 
                success: true,
                message: 'PDF processed successfully',
                outputPath: result.path,
                text: result.text
            });
        } else {
            const imageProcessor = new ImageProcessor(ocrConfig);
            const text = await imageProcessor.processImage(req.file.path);
            res.json({ 
                success: true,
                text 
            });
        }
    } catch (error) {
        console.error(`Processing error: ${error}`);
        res.status(500).json({ error: 'Processing failed', details: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
