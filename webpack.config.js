const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
var UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: {
        'coh-content-db-homecoming': './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'coh-content-db-homecoming',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: {
        'coh-content-db': 'coh-content-db'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            },
            {
                test: /\.(jpe?g|png|)(\?[a-z0-9=&.]+)?$/,
                use: 'base64-inline-loader?name=[name].[ext]'
            }
        ]
    },
    plugins: [
        new UnminifiedWebpackPlugin(),
        new CleanWebpackPlugin()
    ],
    performance: {
        hints: false
    }
};
