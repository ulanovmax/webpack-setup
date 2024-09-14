const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/main.js',
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'src/assets/images/[name].[ext]',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    'html-loader',
                    {
                        loader: 'posthtml-loader',
                        options: {
                            plugins: [
                                require('posthtml-include')({
                                    root: path.resolve(__dirname, 'src')
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: 'asset/resource'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "postcss-loader",
                ],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./src/html/pages/index.html",
        }),
    ],

    resolve: {
        alias: {
            "src": path.resolve(__dirname, 'src/'),
            "root": path.resolve(__dirname, '/'),
            "public": path.resolve(__dirname, 'src/public/'),
        },
    },

    optimization: {
        runtimeChunk: 'single',
    },
};