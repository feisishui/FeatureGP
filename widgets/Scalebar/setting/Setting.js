//>>built
require({cache:{"widgets/Scalebar/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Scalebar/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\n    \x3ctable class\x3d"settings-section"\x3e\n      \x3ctbody\x3e\n        \x3ctr\x3e\n          \x3ctd\x3e${nls.unit}\x3c/td\x3e\n          \x3ctd\x3e\n            \x3cdiv\x3e             \n              \x3cselect style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"selectUnit" data-dojo-type\x3d"dijit/form/Select"\x3e\n                \x3coption value\x3d"dual" selected\x3d"selected"\x3e${nls.dual}\x3c/option\x3e\n                \x3coption value\x3d"english"\x3e${nls.english}\x3c/option\x3e\n                \x3coption value\x3d"metric"\x3e${nls.metric}\x3c/option\x3e\n              \x3c/select\x3e\n            \x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd\x3e${nls.style}\x3c/td\x3e\n          \x3ctd\x3e\n            \x3cdiv\x3e             \n              \x3cselect style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"selectStype" data-dojo-type\x3d"dijit/form/Select"\x3e\n                \x3coption value\x3d"line" selected\x3d"selected"\x3e${nls.line}\x3c/option\x3e\n                \x3coption value\x3d"ruler"\x3e${nls.ruler}\x3c/option\x3e\n              \x3c/select\x3e\n            \x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n      \x3c/tbody\x3e\n    \x3c/table\x3e\n\x3c/div\x3e\n',
"url:widgets/Scalebar/setting/css/style.css":".jimu-widget-scalebar-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-scalebar-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-scalebar-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-scalebar-setting .zoom-scale-table{margin-top:12px;}.jimu-widget-scalebar-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-scalebar-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-scalebar-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-scalebar-setting .input-table \x3e tbody \x3e tr \x3e .second{width:200px;}.jimu-widget-scalebar-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}",
"*now":function(c){c(['dojo/i18n!*preload*widgets/Scalebar/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/portalUtils dojo/_base/lang dojo/on dojo/Deferred dijit/form/Select".split(" "),function(c,f,g,h,b,e,k){return c([g,f],{baseClass:"jimu-widget-scalebar-setting",startup:function(){this.inherited(arguments);this.config.scalebar||(this.config.scalebar={});this.setConfig(this.config);this.own(e(this.selectUnit,"change",b.hitch(this,this.onSelectChange)));this.own(e(this.selectStype,"change",b.hitch(this,this.onSelectChange)))},
_processConfig:function(a){var d=new k;a.scalebarUnit&&a.scalebarStyle?d.resolve(a):h.getUnits(this.appConfig.portalUrl).then(b.hitch(this,function(b){a.scalebarUnit="english"===b?"english":"metric";d.resolve(a)}));return d.promise},setConfig:function(a){this.config=a;this._processConfig(a.scalebar).then(b.hitch(this,function(a){a.scalebarUnit?this.selectUnit.set("value",a.scalebarUnit):this.selectUnit.set("value","english");a.scalebarStyle?this.selectStype.set("value",a.scalebarStyle):this.selectStype.set("value",
"line")}))},onSelectChange:function(){"dual"===this.selectUnit.value&&this.selectStype.set("value","line")},getConfig:function(){this.config.scalebar.scalebarUnit=this.selectUnit.value;this.config.scalebar.scalebarStyle=this.selectStype.value;return this.config}})});