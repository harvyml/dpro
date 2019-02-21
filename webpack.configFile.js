var glob = require("glob")
const ref = "./public/teachers/server/"

module.exports = {
    mode: "production",
    entry: [
        ref+"config.js"
    ],
    module: {
        rules: [//These are the loaders
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }           
        ]
    },
    output: {
        filename: 'config_bundle.js',
        path: __dirname + '/public/teachers',
        publicPath: '/public/teachers/'
    }
}