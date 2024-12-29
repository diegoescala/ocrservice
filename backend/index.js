const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { ImageProcessor, PdfProcessor } = require('./processors');

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

        const processor = req.file.mimetype === 'application/pdf' 
            ? new PdfProcessor()
            : new ImageProcessor();

        const result = await processor.process(req.file);
        res.json({ text: result.text });

    } catch (error) {
        console.error(`Server error: ${error}`);
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
