var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    //using alias
    resolve: {
        alias: {
            Vendor: path.resolve(__dirname, './app/vendor/')
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}