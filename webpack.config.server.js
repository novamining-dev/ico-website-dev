const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')
module.exports = {
    entry: [
        'webpack/hot/poll?1000',
        './server/index'
    ],
    watch: true,
    node: {
        __filename: true,
        __dirname: true
      },
    target: 'node',
    externals: [nodeExternals({
        whitelist: ['webpack/hot/poll?1000']
    })],
    module: {
        rules: [{
            test: /\.(js|ejs)?$/,
            use: 'babel-loader',
            exclude: /node_modules/
            ,include: [
                path.join(__dirname, "./server/public"),
                path.join(__dirname, "./server/public/javascripts/build"),
              ],
              
        }]
    },
    plugins: [
        //new StartServerPlugin('server.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
    ],
    output: {
        path: path.join(__dirname, '.build'),
        filename: 'server.js',
       
    }
}