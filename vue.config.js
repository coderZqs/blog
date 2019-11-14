const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
    publicPath: './',
    devServer: {
/*         historyApiFallback: {
            rewrites: [
                {
                    from: /./,
                    to: '/index.html'
                }
            ]
        }, */
        proxy: {
            '/api': {
                target: 'http://localhost:3002/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: config => {
        if (isProduction) {
            //gzip压缩
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            }))
            //代码分割
            /*             config.externals = {
                            'vue': 'Vue',
                            'vue-router': 'VueRouter',
                            'moment': 'moment'
              } */
        }
    },
    /*     chainWebpack: config => {
            const imagesRule = config.module.rule('images')
            imagesRule
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    bypassOnDebug: true
                })
                .end()
        }, */
    /*     configureWebpack: {
            devServer: {
                historyApiFallback: {
                    verbose: true,
                    rewrites: [{
                            from: /^\/index\/.*$/,
                            to: '/index.html'
                        },
                        {
                            from: /^\/print\/.*$/,
                            to: '/print.html'
                        }
                    ]
                }
            }
        } */
}