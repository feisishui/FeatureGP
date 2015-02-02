//>>built
require({cache:{"widgets/Print/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Print/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\n  \x3cdiv class\x3d"settings-section" data-dojo-attach-point\x3d"searchesSection"\x3e\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\n      \x3ctbody\x3e\n        \x3ctr\x3e\n        \n        \x3ctd class\x3d"first"\x3e*${nls.serviceURL}\x3c/td\x3e\n          \x3ctd class\x3d"second"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" \n            data-dojo-attach-point\x3d"serviceURL"  \n            required\x3d"true" data-dojo-props\x3d"style:{width:\'100%\'}"/\x3e\n          \x3c/td\x3e\n\n          \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"checkProcessDiv" style\x3d"display:none"\x3e\n            \x26nbsp;\x26nbsp;\x3cimg data-dojo-attach-point\x3d"checkImg" width\x3d"20px" height\x3d"20px" src\x3d""\x3e\x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.defaultTitle}\x3c/td\x3e\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" \n            data-dojo-attach-point\x3d"defaultTitle" placeHolder\x3d"ArcGIS WebMap"\n            data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.defaultAuthor}\x3c/td\x3e\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" placeHolder\x3d"Web AppBuilder for ArcGIS"\n            data-dojo-attach-point\x3d"defaultAuthor" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\n          \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.defaultCopyright}\x3c/td\x3e\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\n            data-dojo-attach-point\x3d"defaultCopyright" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\n          \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr style\x3d"display: none"\x3e\n          \x3ctd class\x3d"first"\x3e${nls.defaultFormat}\x3c/td\x3e\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultFormat"\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr style\x3d"display: none"\x3e\n          \x3ctd class\x3d"first"\x3e${nls.defaultLayout}\x3c/td\x3e\n          \x3ctd class\x3d"second" colspan\x3d"2"\x3e\n            \x3cselect data-dojo-type\x3d"dijit/form/ComboBox" data-dojo-attach-point\x3d"defaultLayout"\x3e\n            \x3c/select\x3e\n          \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3c/tbody\x3e\n    \x3c/table\x3e\n  \x3c/div\x3e\n\x3c/div\x3e',
"url:widgets/Print/setting/css/style.css":".jimu-widget-print-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-print-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-print-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-print-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-print-setting .input-table \x3e tbody \x3e tr \x3e .second{width:650px;}",
"*now":function(e){e(['dojo/i18n!*preload*widgets/Print/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/json dojo/Deferred dojo/dom-style dojo/dom-attr esri/request esri/IdentityManager jimu/dijit/Message jimu/portalUtils jimu/portalUrlUtils dojo/store/Memory dijit/form/ValidationTextBox dijit/form/ComboBox".split(" "),function(e,p,q,c,r,s,t,d,u,v,x,h,w,m,n){return e([p,q],{baseClass:"jimu-widget-print-setting",memoryFormat:new n,memoryLayout:new n,_portalPrintTaskURL:null,startup:function(){this.inherited(arguments);
this.setConfig(this.config);u.set(this.checkImg,"src",require.toUrl("jimu")+"/images/loading.gif");this.own(r(this.serviceURL,"Change",c.hitch(this,this.onUrlChange)))},onUrlChange:function(){var a=this.serviceURL.get("value");a&&(d.set(this.checkProcessDiv,"display",""),this.memoryFormat.data={},this.memoryLayout.data={},this.defaultFormat.set("store",this.memoryFormat),this.defaultLayout.set("store",this.memoryLayout),this.defaultFormat.set("value",""),this.defaultLayout.set("value",""),d.set(this.defaultFormat.domNode.parentNode.parentNode,
"display","none"),d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none"),this._getPrintTaskInfo(a,"text"))},_getPrintTaskInfo:function(a,b){v({url:a,content:{f:"json"},handleAs:b||"json",load:c.hitch(this,this._handlePrintInfo),error:c.hitch(this,this._handleError)})},_handleError:function(a){d.set(this.checkProcessDiv,"display","none");var b=new h({message:a.message,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){b.close()})}]})},_handlePrintInfo:function(a){var b=null;
try{if(b="string"===typeof a?s.parse(a):a,b.error&&b.error.code){var f=this.serviceURL.get("value");this._getPrintTaskInfo(f,"json");return}}catch(c){b=m.setHttpProtocol(this.serviceURL.get("value"));a=m.getNewPrintUrl(this.appConfig.portalUrl);b===a||/sharing\/tools\/newPrint$/.test(b)?(d.set(this.checkProcessDiv,"display","none"),d.set(this.defaultFormat.domNode.parentNode.parentNode,"display","none"),d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","none")):this._handleError(c);
return}d.set(this.checkProcessDiv,"display","none");d.set(this.defaultFormat.domNode.parentNode.parentNode,"display","");d.set(this.defaultLayout.domNode.parentNode.parentNode,"display","");if(b&&b.parameters){a=b.parameters.length;for(f=0;f<a;f++){var e=b.parameters[f];if("Format"===e.name||"Layout_Template"===e.name){for(var g=b.parameters[f].choiceList,h=g.length,l=[],k=0;k<h;k++)l.push({name:g[k],id:g[k]});g=b.parameters[f].defaultValue;"Format"===e.name?(this.memoryFormat.data=l,this.defaultFormat.set("store",
this.memoryFormat),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultFormat?this.defaultFormat.set("value",this.config.defaultFormat):this.defaultFormat.set("value",g)):(this.memoryLayout.data=l,this.defaultLayout.set("store",this.memoryLayout),this.config.serviceURL===this.serviceURL.get("value")&&this.config.defaultLayout?this.defaultLayout.set("value",this.config.defaultLayout):this.defaultLayout.set("value",g))}}}},setConfig:function(a){this.config=a;this.loadPrintURL(a);
a.defaultTitle?this.defaultTitle.set("value",a.defaultTitle):this.defaultTitle.set("value","ArcGIS WebMap");a.defaultAuthor?this.defaultAuthor.set("value",a.defaultAuthor):this.defaultTitle.set("value","Web AppBuilder for ArcGIS");a.defaultCopyright&&this.defaultCopyright.set("value",a.defaultCopyright)},getConfig:function(){if(!this.serviceURL.get("value")){var a=new h({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){a.close()})}]});return!1}this.config.serviceURL=
this.serviceURL.get("value");this.config.defaultTitle=this.defaultTitle.get("value");this.config.defaultAuthor=this.defaultAuthor.get("value");this.config.defaultCopyright=this.defaultCopyright.get("value");this.config.defaultFormat=this.defaultFormat.get("value");this.config.defaultLayout=this.defaultLayout.get("value");return this.config},loadPrintURL:function(){this._getPrintTaskURL(this.appConfig.portalUrl).then(c.hitch(this,function(a){this.serviceURL.set("value",a)}))},_getPrintTaskURL:function(a){var b=
new t;if(this.config&&this.config.serviceURL)return b.resolve(this.config.serviceURL),b;w.getPortalSelfInfo(a).then(c.hitch(this,function(a){(a=a&&a.helperServices&&a.helperServices.printTask&&a.helperServices.printTask.url)?b.resolve(a):b.reject("error")}),c.hitch(this,function(a){new h({message:this.nls.portalConnectionError});b.reject("error");console.error(a)}));return b}})});