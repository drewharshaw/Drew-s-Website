const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    
    module: {
        rules: [
        { 
            test: /\.tsx?$/,
            loader: 'ts-loader'
        },
        { 
            enforce: "pre", 
            test: /\.js$/, 
            loader: "source-map-loader" },
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        native: true,
                    },
                },
                ], 
        },
        {
            test: /\.(pdf|jpg|png|gif|ico)$/,
            use: [
                {
                    loader: 'url-loader'
                },
            ]
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
