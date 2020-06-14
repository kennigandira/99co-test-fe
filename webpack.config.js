const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				],
				exclude: [/\.module.scss$/, /node_modules/]
			},
			{
				test: /\.module.scss$/,
				loaders: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]--[hash:base64:5]'
							}
						}
					},
					'resolve-url-loader',
					'sass-loader?sourceMap'
				],
				exclude: /node_modules/
			},
			{
				test: /\.(ttf|eot|woff|woff2|png|jpg|svg|gif)?$/,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js'],
		modules: [path.resolve('./src'), 'node_modules']
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		})
	]
};