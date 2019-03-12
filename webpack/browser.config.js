module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'browser.bundle.js',
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
