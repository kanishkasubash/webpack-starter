const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development', // Set to mode wether "development" or "production"
    target: 'web',
    entry: './src/main.js', // Entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'main.js', // Output bundle filename
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Match CSS files
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], // Use for CSS file per JS file which contains CSS
            },
            {
                test: /\.(js|jsx)$/, // Match both .js and .jsx files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel for JavaScript files
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow importing .jsx files without specifying the extension
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool: 'source-map', // Source maps for debugging
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Serve content from the 'dist' directory
        },
        compress: true,
        port: 3000, // Port for development server
        hot: true, // Enable webpack's Hot Module Replacement feature
    },
};
