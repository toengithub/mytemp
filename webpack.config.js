const path = require('path');
module.exports = {
    entry:{
        login:'./app/compile/login.js',
        index:'./app/compile/index.js'
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.coffee','.js']
    }

};
