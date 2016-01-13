'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');


module.exports = {
 	entry: './home',
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "bild.js",
        library: "home"
    },

	watch: NODE_ENV == 'development',

    watchOptions:{
    	aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : null,

    plugins: [
    	new webpack.DefinePlugin({
    		NODE_ENV: JSON.stringify(NODE_ENV),
    	})
    ],

	module: {
	  loaders: [
	    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
	  ]
	},

	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['','.js']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ["*-loader", "*"],
		extensions: ['','.js']
	}
};

if (NODE_ENV == "production") {
	module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress:{
			warnings: false,
			drop_console: true,
			unsafe: true
		}
	}));
}