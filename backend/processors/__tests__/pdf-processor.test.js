const { PdfProcessor } = require('../');
const fs = require('fs').promises;
const path = require('path');

jest.mock('fs').promises;
jest.mock('child_process');

describe('PdfProcessor', () => {
    let processor;
    const mockFile = {
        path: '/tmp/mock-file.pdf',
        originalname: 'test.pdf'
    };

    beforeEach(() => {
        processor = new PdfProcessor();
        jest.clearAllMocks();
    });

    it('should process a PDF file successfully', async () => {
        const mockText = 'Extracted text from PDF';
        const execPromise = jest.spyOn(processor, 'execPromise')
            .mockResolvedValue({ stdout: '', stderr: '' });
        
        fs.readFile.mockResolvedValue(mockText);
        fs.unlink.mockResolvedValue();

        const result = await processor.process(mockFile);

        expect(result).toEqual({
            text: mockText,
            originalFile: mockFile.originalname
        });
        expect(execPromise).toHaveBeenCalledWith(
            expect.stringContaining('ocrmypdf')
        );
        expect(execPromise).toHaveBeenCalledWith(
            expect.stringContaining('pdftotext')
        );
    });

    it('should handle processing errors', async () => {
        const mockError = new Error('Processing failed');
        jest.spyOn(processor, 'execPromise')
            .mockRejectedValue(mockError);

        fs.unlink.mockResolvedValue();

        await expect(processor.process(mockFile))
            .rejects
            .toThrow('PDF OCR processing failed');
    });

    it('should clean up files even when processing fails', async () => {
        const mockError = new Error('Processing failed');
        jest.spyOn(processor, 'execPromise')
            .mockRejectedValue(mockError);

        fs.unlink.mockResolvedValue();

        try {
            await processor.process(mockFile);
        } catch (error) {
            // Expected error
        }

        expect(fs.unlink).toHaveBeenCalled();
    });
}); 