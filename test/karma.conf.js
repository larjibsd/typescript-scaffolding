var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'src/test.ts'
		],
		preprocessors: {
			'src/test.ts': ['webpack']
		},
		webpack: webpackConfig,
		webpackMiddleware: {
			stats: {
				colors: true
			}
		},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false,
		concurrency: Infinity
	})
}
