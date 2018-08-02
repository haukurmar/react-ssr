const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
	// Inform webpack that we're building a bundle for nodeJS, rather than the browser
	target: 'node',

	entry: './src/index.js',

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	// Tell webpack to not bundle any libraries into to output bundle if the library exists in node_modules
	externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
