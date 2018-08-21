const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CssoWebpackPlugin = require('csso-webpack-plugin').default;

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.less$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: ['css-loader','autoprefixer-loader','group-css-media-queries-loader','less-loader']
          })
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin('./css/[name]_01.css'),
      new CssoWebpackPlugin({ pluginOutputPostfix: 'min' })
    ]

  };
};