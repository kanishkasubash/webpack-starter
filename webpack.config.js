const path = require("path");

module.exports = {
    mode: "development", // Set to "development" mode
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'main.js', // Output bundle filename
    },

    devtool: false,
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
    },
};
