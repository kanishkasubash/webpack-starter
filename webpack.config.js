const path = require("path");

module.exports = {
    mode: 'development', // Set to mode wether "development" or "production"
    entry: './src/index.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'main.js', // Output bundle filename
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Match JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel for JavaScript files
                    options: {
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
        },
        compress: true,
        port: 3000, // Port for development server
    },
};
