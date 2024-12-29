const { ImageProcessor } = require('../');
const fs = require('fs').promises;
const path = require('path');

jest.mock('fs').promises;
jest.mock('child_process');

describe('ImageProcessor', () => {
    let processor;
    const mockFile = {
        path: '/tmp/mock-image.jpg',
        originalname: 'test-image.jpg'
    };

    beforeEach(() => {
        processor = new ImageProcessor();
        jest.clearAllMocks();
    });

    it('should process an image file successfully', async () => {
        const mockText = 'Extracted text from image';
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
            expect.stringContaining('tesseract')
        );
    });

    it('should handle processing errors', async () => {
        const mockError = new Error('Processing failed');
        jest.spyOn(processor, 'execPromise')
            .mockRejectedValue(mockError);

        fs.unlink.mockResolvedValue();

        await expect(processor.process(mockFile))
            .rejects
            .toThrow('Image OCR processing failed');
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