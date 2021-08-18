const HtmlWebpackPlugin = require("html-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            template: "./src/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin(),
    ],
};