const path = require('path');


module.exports = {
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]-[local]-[hash:base64:8]',
                            },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: true,
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
};
