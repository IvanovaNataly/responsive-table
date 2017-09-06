var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },

    devtool: "source-map",

    module: {
        rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader"]
            })
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ["css-loader", "sass-loader"]
            })
        }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
                template: "index.html"
        })

        // new CopyWebpackPlugin([
        //   { from: 'index.html' }//,
          //{ from: 'src/static/icons' , to: 'static/icons'},
          //{ from: 'src/static/data' , to: 'static/data'}
      //])
      
    ]

};
