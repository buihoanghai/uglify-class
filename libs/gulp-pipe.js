const uglify = require('./replace-classes');    // npm install --save through2
const Transform = require('stream').Transform;
const PluginError = require('plugin-error');

function processParseError(source, filename, details, message) {
	function formatLines(start, end) {
		return lines.slice(start, end).map(function (line, idx) {
			let num = String(start + idx + 1);

			while (num.length < maxNumLength) {
				num = ' ' + num;
			}

			return num + ' |' + line;
		}).join('\n');
	}

	let lines = source.split(/\n|\r\n?|\f/);
	let column = details.column;
	let line = details.line;
	let startLine = Math.max(1, line - 2);
	let endLine = Math.min(line + 2, lines.length + 1);
	let maxNumLength = Math.max(4, String(endLine).length) + 1;

	return [
		'CSS parse error ' + filename + ': ' + message,
		formatLines(startLine - 1, line),
		new Array(column + maxNumLength + 2).join('-') + '^',
		formatLines(line, endLine)
	].join('\n');
}

function transformCSS(dictionary) {
	let stream = new Transform({objectMode: true});
	uglify.setClassesTable(dictionary);

	stream._transform = function (file, encoding, cb) {
		function handleError(error) {
			if ('parseError' in error) {
				error = processParseError(source, inputFile, error.parseError, error.message);
			}

			cb(new PluginError('uglify-class', error));
		}

		if (file.isNull()) {
			return cb(null, file);
		}

		if (file.isStream()) {
			return handleError('Streaming not supported');
		}

		let inputFile = file.relative;
		let source = String(file.contents);
		try {
			console.log("Replace", inputFile);
			let result = uglify.replaceCSSArea(source);
			file.contents = new Buffer(result);
			cb(null, file);
		} catch (error) {
			handleError(error);
		}
	};

	return stream;
}

module.exports = {
	transformCSS: transformCSS
};
