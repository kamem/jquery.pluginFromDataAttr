/*!
 * jquery.pluginFromDataAttr (2017-3-26)
 * 
 * https://github.com/kamem/jquery.pluginFromDataAttr.git
 * (c) 2017 kamem (@kamem)
 *
 * @version 0.1.0
 * @license Released under the MIT license
 * @author kamem
 */
(function (global, factory) {
	if (typeof exports !== 'undefined') {
		module.exports = factory(require('jquery'), global);
	}	else if (typeof define === 'function' && define.amd) {
			define(['jquery'], function() {factory($, global)});
	}  else {
		factory($, global);
	}
} (typeof window !== "undefined" ? window : this, function ($, global) {
$.fn.pluginFromDataAttr = function(pluginName) {
	this.each(function(){
		var $this = $(this);

		var data = (function(){
			var tagAry = $this[0].outerHTML.match(/<([^>]+)/)[1].replace(/(\s)data-+/g, '@@data-').split('@@'),
				dataAry = [];

			tagAry.forEach(function(tag) {
				if(tag.indexOf('data') >= 0) {
					dataAry.push(tag.replace(/"|data-/g, ''));
				}
			})

			return dataAry;
		})();

		var dataObj = (function(){
			var dataObj = {};

			data.forEach(function(d) {
				var dataAry = d.split('=');
				var subscript = dataAry[0].replace(/-(.)/g, function(e){
					return e.replace('-', '').toUpperCase();
				});
				var value = dataAry[1];

				if(/^(\[|\{)/g.test(value)) {
					value = JSON.parse(value.replace(/\'/g,'\"'));
				}

				dataObj[subscript] = !isNaN(value) ? Number(value) :
					value === 'true' ? true :
					value === 'false' ? false :
						typeof window[value] === 'function' ? window[value] : value;
			})

			return dataObj;
		})();

		$this[pluginName](dataObj);
	});
}
}));