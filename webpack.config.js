const path = require('path')

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: './src/app/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
}