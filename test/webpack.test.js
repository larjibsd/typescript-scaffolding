const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../webpack.config');

module.exports = merge(config, {
	mode: 'none',
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ['null-loader']
			}
		]
	}
});
