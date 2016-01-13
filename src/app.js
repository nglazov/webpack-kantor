'use strict';

document.querySelector('button').onclick = ()=>{
	require.ensure([], function(require){
		let login = require('./login');
		login();
	});
}