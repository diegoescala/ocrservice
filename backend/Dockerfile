# Use Node.js base image
FROM node:18-slim

# Install Tesseract OCR, OCRmyPDF, poppler-utils and their dependencies
RUN apt-get update && \
    apt-get install -y tesseract-ocr ocrmypdf poppler-utils && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Create uploads directory
RUN mkdir -p uploads

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]
