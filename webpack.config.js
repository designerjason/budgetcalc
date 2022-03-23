const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/assets/js/main.js',
    output: {
        filename: 'scripts.min.js',
        path: path.resolve(__dirname, 'docs/assets/js')
    }
};
