const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',

    entry: './src/server.ts',

    output: {
        filename: 'server.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    },

    externals: [
        nodeExternals()
    ]
}