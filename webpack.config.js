const path = require('path')
module.exports = {
  entry: {
    member: path.resolve(__dirname, './src/entry/member.jsx'),
  },
  output: {
    path: path.join(__dirname, './static/build'),
    filename: '[name].js',
    sourceMapFilename: '[name].map'
  },
  devtool: '#source-map',
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, './src')
        ],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2'],
            plugins: [
              ["import", {
                "libraryName": "antd",
                "style": "css"
              }],
              ["transform-runtime", {
                "polyfill": false,
                "regenerator": true
              }]
            ]
          }
        }
      },
      {
        test: /.css$/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
}