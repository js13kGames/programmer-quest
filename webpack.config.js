const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const glob = require('glob');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Offline Shooter',
            filename: path.join(__dirname, 'dist', 'index.html'),
            template: path.join(__dirname, 'src', 'index.html'),
            minify: false
        }),
        // new ImageminPlugin({
        //     externalImages: {
        //         context: 'src/assets',
        //         sources: glob.sync('src/assets/*.png'),
        //         destination: 'dist/assets'
        //     }
        // }),
        // new BundleAnalyzerPlugin() // Utile per vedere cosa si può fare per snellire il bundle
    ]
};