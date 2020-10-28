const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    //打包配置
    publicPath: "./",
    outputDir: './dist/xiushi_app',
    assetsDir:'static',

    // 本地启动配置
    devServer: {
        open: false,  //自动打开
        // host: '192.168.11.35',  
        // host: 'localhost',
        port: 8081,  
        https: false,  
        hotOnly: false,  
        proxy: null,
    },

    // 自定义路径
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('_js', resolve('src/customJs'))
    //         .set('_c', resolve('src/components'))
    //         .set('_bj', resolve('src/img/bjImg'))
    //         .set('_icon', resolve('src/img/icon_img'))
    //         .set('_imgList', resolve('src/img/imgList'))
    // },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },
}
