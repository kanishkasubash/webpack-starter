const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set to mode wether "development" or "production"
    target: 'web',
    entry: {
        bundle: path.resolve(__dirname, 'src/main.jsx'), // Entry point of your application
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: '[name][contenthash].js', // Output bundle filename
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
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
                            '@babel/preset-env',
                            ['@babel/preset-react', { runtime: 'automatic' }]
                        ],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Allow importing .jsx files without specifying the extension
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Starter Template',
            filename: 'index.html',
            template: './index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'source-map', // Source maps for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Serve content from the 'dist' directory
        },
        port: 3000, // Port for development server
        open: true,
        hot: true, // Enable webpack's Hot Module Replacement feature
        compress: true,
        historyApiFallback: true,        
    },
};
