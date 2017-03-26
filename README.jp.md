jquery.pluginFromDataAttr
=================

プラグインを複数のページなどで違う動作をしたい場合に
わざわざjsを用意してパラメーターを指定し直さないければいけないのが煩わしいと思っていました。

その代わりにdata-*でパラメーターを指定して使うことができるjQueryプラグインです。

[DEMO](http://github.develo.org/jquery.pluginFromDataAttr/)

インストール
-----

	npm install jquery.plugin-from-data-attr

仕様
-----
* 下記のようなプラグインがあった場合に

		$('.tab').tab{
			timer: 1000,
			num: 1,
			isSessionStorage: true
		};

* 下記のようにHTMLのdata属性を代わりに使うことができます。

		<p class="tab" data-timer="1000" data-num="1" is-session-storage="true">


使い方
-----
1. スクリプトの記述（プラグインの後にjquery.pluginFromDataAttr.jsを読むこむ）

		<script src="js/jquery.js"></script>
		<script src="js/jquery.tab.js"></script>
		<script src="js/jquery.pluginFromDataAttr.js"></script>

2. $('適応したいタグ').dataExtend('プラグイン名');

		<script>
		$(function(){
			$('.nav').pluginFromDataAttr('tab');
		});
		</script>

3. HTMLにdata属性を記述する（キャメルケースの場合「-」でつなげる）※ is-session-storage = isSessionStorage

		<p class="tab" data-timer="1000" data-num="1" is-session-storage="true">
