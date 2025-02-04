"use strict";

function encodeToFormData(data) {
	var urlEncodedData = "", urlEncodedDataPairs = [];
	
	if(data) {
		if(typeof data === "object") {
			// We turn the data object into an array of URL encoded key value pairs.
			for(var name in data) {
				urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
			}	
			// We combine the pairs into a single string and replace all encoded spaces to 
			// the plus character to match the behaviour of the web browser form submit.
			urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
		}
	}	
	return urlEncodedData;
}

module.exports = {
	serialize: function(data) {
		return encodeToFormData(data);
	},
	parse: function(data) {
		// Void function to adhere to common parser interface
		return data;
	}
};