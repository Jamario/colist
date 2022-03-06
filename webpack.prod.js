const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = merge(common, {
    mode: 'production',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});

module.exports = config;
