const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const development = process.env.NODE_ENV === 'development';
function getDevTool() {
    if (development) {
        return 'source-map'; // enables source map
    }
    return false;
}

function getProductionPlugins() {
    if (development) {
        return [];
    }
    return [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        })
    ];
}


module.exports = {
    devtool: getDevTool(),
    entry: [
        './src/index.js'
    ],
    output: {
        path: `${__dirname}/scripts`,
        publicPath: '/scripts',
        filename: 'main.js',
    },
    module: {
      rules: [
        { test: /\.js$/, use: 'babel-loader' }
      ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 8081,
    },
    plugins: [
        // for production
        new webpack.DefinePlugin({
            __DEV__: development
        }),
        ...getProductionPlugins()
    ],
};
