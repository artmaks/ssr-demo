var nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: './src/server/index.js',
    output: {
        filename: 'ssr.bundle.js',
        libraryTarget: 'commonjs2',
        path: __dirname + '/../public',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
};
