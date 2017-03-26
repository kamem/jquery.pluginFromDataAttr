jquery.pluginFromDataAttr
=================

can replace the jquery plugin parameters with data attributes

If you want to operate in a different page and a plurality of plug
Because I thought this cumbersome and is not do unless you do not re-specified by preparing a js bother
I made a jQuery plug-in that you can use the parameters specified in the data-* instead.

[DEMO](http://github.develo.org/jquery.pluginFromDataAttr/)

Install
-----

	npm install jquery.plugin-from-data-attr

Specification
-----
* If there is a plug-in as described below.

		$('.tab').tab({
			timer: 1000,
			num: 1,
			isSessionStorage: true
		});

* you can use instead the data attribute of HTML as described below.

		<p class="tab" data-timer="1000" data-num="1" is-session-storage="true">


Usage
-----
1. description of the script. There is a need to write a jquery.pluginFromDataAttr.js after the plug-in

		<script src="js/jquery.js"></script>
		<script src="js/jquery.tab.js"></script>
		<script src="js/jquery.pluginFromDataAttr.js"></script>

2. $('tag you want to adaptation').dataExtemd('plug-in name');

		<script>
		$(function(){
			$('.nav').pluginFromDataAttr('tab');
		});
		</script>

3. you write the data attribute in HTML（you connect the "-" If camelcase）※ is-session-storage = isSessionStorage

		<p class="tab" data-timer="1000" data-num="1" is-session-storage="true">

