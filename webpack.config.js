const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}
module.exports = {
    mode: 'development',
    entry: './src/ficha.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle2.js'
    },
    watch: true
}