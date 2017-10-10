module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    analyze: true, // 可通过 nuxt build --analyze 或 nuxt build -a 命令来启用该分析器进行编译构建，分析结果可在 http://localhost:8888 上查看。
    babel: { // 自定义babel的配置, stage-0需要通过 npm i -D babel-preset-stage-0 来安装
      presets: ['vue-app', 'es2015', 'stage-0']
    },
    /*
    ** Run ESLint on save
    */
    /*
    为客户端和服务端的构建配置进行手工的扩展处理。
    该扩展方法会被调用两次，一次在服务端打包构建的时候，另外一次是在客户端打包构建的时候。该方法的参数如下：
    Webpack 配置对象
    构建环境对象，包括这些属性（全部为布尔类型）： dev， isClient， isServer
    */
    extend (config, ctx) {
      // 为客户端打包进行扩展配置
      if (ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    filenames: {
      vendor: 'vendor.[hash].js',
      app: 'app.[chunkhash].js'
    },
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
}
