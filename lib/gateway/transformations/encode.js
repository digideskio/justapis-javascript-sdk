"use strict";

function encode(request) {
	if(request.method !== "GET") {
		switch(request.contentType) {
			case "application/x-www-form-urlencoded; charset=UTF-8":
				request.data = request.parsers.form.serialize(request.data);
				break;
			case "application/xml":
				request.data = request.parsers.xml.serialize(request.data);
				break;
			case "application/json":
				request.data = request.parsers.json.serialize(request.data);
				break;
		}
	} else {
		var paramArray = [], params = "";
		if(typeof request.data === "object") {
			for(var key in request.data) {
				if(request.data.hasOwnProperty(key)) {
					paramArray.push(key+"="+request.data[key]); 
				}
			}
			params = paramArray.sort().join("&");
		}
		if(params !== "") {
			params = "?"+params;
		} else {
			params = null;
		}
		request.url.search = params;
	}
	return request;	
}


module.exports = encode;