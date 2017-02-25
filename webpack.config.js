const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/js/index.js',
	output: {
		filename: './dist/js/bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: './dist/css/[name].css',
			allChunks: true
		})
	]
}
