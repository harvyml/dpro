var glob = require("glob")

module.exports = {
    mode: "production",
    entry: [
        
    ],
    module: {
        rules: [//These are the loaders
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }           
        ]
    },
    output: {
        filename: 'client_bundle.js',
        path: __dirname + '/public',
        publicPath: '/public'
    }
}