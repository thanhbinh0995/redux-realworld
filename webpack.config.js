var path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 2 versions'],
            },
            { test: /\.(jpg|png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?name=style/img/[name].[ext]' }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 3000
    }
}