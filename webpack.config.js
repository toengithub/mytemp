const path = require('path');
module.exports = {
    entry:{
        login:'./app/compile/login.js',
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
            }
        ]
    },
    resolve: {
        extensions: ['.coffee','.js']
    }

};