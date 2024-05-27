const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './JS/scripts.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'SITECLIMA'),
    },
    plugins: [
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'SITECLIMA'),
        compress: true,
        port: 9000,
        open: true,
    }
};
