const request = require('supertest');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const { ImageProcessor, PdfProcessor } = require('../processors');

// Mock the processors
jest.mock('../processors');

// Create a test instance of the app
const app = require('../index');

describe('OCR API', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return 400 when no file is uploaded', async () => {
        const response = await request(app)
            .post('/ocr')
            .expect(400);

        expect(response.body).toEqual({
            error: 'No file uploaded'
        });
    });

    it('should process PDF files with PdfProcessor', async () => {
        const mockResult = { text: 'Extracted PDF text' };
        PdfProcessor.mockImplementation(() => ({
            process: jest.fn().mockResolvedValue(mockResult)
        }));

        const response = await request(app)
            .post('/ocr')
            .attach('file', path.join(__dirname, 'fixtures/test.pdf'))
            .expect(200);

        expect(response.body).toEqual({
            text: mockResult.text
        });
    });

    it('should process image files with ImageProcessor', async () => {
        const mockResult = { text: 'Extracted image text' };
        ImageProcessor.mockImplementation(() => ({
            process: jest.fn().mockResolvedValue(mockResult)
        }));

        const response = await request(app)
            .post('/ocr')
            .attach('file', path.join(__dirname, 'fixtures/test.jpg'))
            .expect(200);

        expect(response.body).toEqual({
            text: mockResult.text
        });
    });

    it('should handle processing errors', async () => {
        ImageProcessor.mockImplementation(() => ({
            process: jest.fn().mockRejectedValue(new Error('Processing failed'))
        }));

        const response = await request(app)
            .post('/ocr')
            .attach('file', path.join(__dirname, 'fixtures/test.jpg'))
            .expect(500);

        expect(response.body).toEqual({
            error: 'Server error'
        });
    });
}); 