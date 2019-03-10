module.exports = {
    entry: './src/browser/index.js',
    output: {
        filename: 'bundle.js',
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
