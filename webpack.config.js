const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Добавьте CopyWebpackPlugin 

module.exports = {
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
  }, 
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Добавьте правило для обработки картинок
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // Имя файла будет сохранено, как есть
              outputPath: 'images/', // Картинки будут копироваться в папку 'images'
            },
          },
    ],
  }
]
  },
  plugins: [   
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      inject: true,
      chunks: ['index'],
      filename: 'projects.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/task.html',
      inject: true,
      chunks: ['index'],
      filename: 'task.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      inject: true,
      chunks: ['index'],
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/add-task.html',
      inject: true,
      chunks: ['index'],
      filename: 'add-task.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: 'cat404' },
        { from: './src/images', to: 'images1' },
        { from: './src/images', to: 'Start' }
      ]
    })
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true, 
  },
  mode: 'development',
}; 
