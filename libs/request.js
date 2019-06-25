const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getResponse(url) {
	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", url, false);
	xmlHttp.send(null);
	return xmlHttp.responseText;
}

const revealed = {
	getResponse
};
module.exports = revealed;