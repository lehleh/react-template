const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/i,
				loader: 'css-loader'
			}
		]
	},
	output: {
		path: path.join(__dirname, 'bundle'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 8080,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new webpack.ProvidePlugin({
			Raphael: 'raphael'
		})
	]
}