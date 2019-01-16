const webpack = require('webpack');
const path = require('path');

console.log(`NODE_ENV: ${process.env.NODE_ENV || 'dev (fallback)'}`);

const env = require('./src/env.json');

module.exports = {
	resolve: {
		extensions: ['.js', '.json', '.ts'],
		alias: {
			app: path.resolve(__dirname, 'src/app')
		},
		modules: ['node_modules']
	},
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].js',
		path: path.join(__dirname, 'www')
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: 'tslint-loader',
				options: {
					emitErrors: true,
					failOnHint: true
				}
			},
			{
				test: /\.(html|md)$/,
				use: [{
					loader: 'html-loader',
					options: {
						attrs: ['img:src', ':md-svg-src']
					}
				}]
			},
			{
				test: /(\.js|\.tsx?)$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					experimentalFileCaching: true
				}
			},
			{
				test: /\.(jpe?g|png|gif|woff2?|ttf|eot|svg|ogg|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[hash:6].[ext]',
						outputPath: 'assets',
						publicPath: '/assets'
					}
				}]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__ENVCONST__: JSON.stringify(env[process.env.NODE_ENV || 'dev'])
		})
	]
}
