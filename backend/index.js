const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

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

        const filePath = req.file.path;
        const outputPath = path.join('uploads', `output_${Date.now()}.txt`);
        
        // Check file mimetype
        const isPDF = req.file.mimetype === 'application/pdf';
        
        if (isPDF) {
            // Use OCRmyPDF for PDF files
            const pdfOutputPath = outputPath.replace('.txt', '.pdf');
            exec(`ocrmypdf ${filePath} ${pdfOutputPath} && pdftotext ${pdfOutputPath} ${outputPath}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error}`);
                    return res.status(500).json({ error: 'PDF OCR processing failed' });
                }

                // Read the output file
                fs.readFile(outputPath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading output: ${err}`);
                        return res.status(500).json({ error: 'Error reading OCR output' });
                    }

                    // Clean up files
                    fs.unlink(filePath, () => {});
                    fs.unlink(outputPath, () => {});
                    fs.unlink(pdfOutputPath, () => {});

                    // Send the extracted text
                    res.json({ text: data });
                });
            });
        } else {
            // Use Tesseract for image files
            exec(`tesseract ${filePath} ${outputPath.replace('.txt', '')}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error: ${error}`);
                    return res.status(500).json({ error: 'OCR processing failed' });
                }

                // Read the output file
                fs.readFile(outputPath, 'utf8', (err, data) => {
                    if (err) {
                        console.error(`Error reading output: ${err}`);
                        return res.status(500).json({ error: 'Error reading OCR output' });
                    }

                    // Clean up files
                    fs.unlink(filePath, () => {});
                    fs.unlink(outputPath, () => {});

                    // Send the extracted text
                    res.json({ text: data });
                });
            });
        }
    } catch (error) {
        console.error(`Server error: ${error}`);
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
