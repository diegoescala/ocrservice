const fs = require('fs').promises;
const { exec } = require('child_process');
const util = require('util');

class BaseProcessor {
    constructor() {
        this.execPromise = util.promisify(exec);
    }

    async cleanup(files) {
        for (const file of files) {
            try {
                await fs.unlink(file);
            } catch (error) {
                console.error(`Error cleaning up file ${file}:`, error);
            }
        }
    }
}

module.exports = BaseProcessor; 