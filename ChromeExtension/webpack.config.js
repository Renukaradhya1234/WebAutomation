import { resolve as _resolve } from 'path';
import path from "path"
import { fileURLToPath } from "url";

const config = {
	entry: {
		background: "./BackgroundJS/Background.ts",
		content: "./ContentJS/ContentJS.ts"
	},
	output: {
		filename: (pathData) => {
			return pathData.chunk.name === "background"
				? "Background/[name].min.js"
				: "Content/[name].min.js"
		},
		path: _resolve(path.dirname(fileURLToPath(import.meta.url)), 'build'),
	},
	module: {
		rules: [
			{
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	}, 
	resolve: {
		extensions: ['.ts', '.js'],
	},
	devtool: 'source-map',
	mode: "production"
}

export default config