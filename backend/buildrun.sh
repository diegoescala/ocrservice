#!/bin/sh
docker build -t ocr-backend .
docker run -p 3000:3000 ocr-backend