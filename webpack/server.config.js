module.exports = {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        filename: 'server.bundle.js',
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
