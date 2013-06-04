function FontSwapper(config) {
	if (!(this instanceof FontSwapper)) {
	  return new FontSwapper(config);
	}

	config = config || {};

	config.bindEvent = config.bindEvent || 'click';

	this.fontList = this.getFontList();
	this.bindClickHandlers();

	console.log('Font Swapper Started With', this.fontList);
}

Fn.prototype.getFontList = function() {
	var list = []
	$("link").forEach(function(link) {
		var names = extractNames(link.href);
		list = list.concat(names);
	})

	function extractNames(href) {
		var names = [];
		href.split("css?family=")[1].split('|').forEach(function(str) {
			names.push(str.split(':')[0]);
		});
		return names;
	}
};