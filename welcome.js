'use strict';

export default function(message) {
	if (NODE_ENV == "development") {
		console.log('alert');
	}
	alert(`Welcome ${message}`);
}