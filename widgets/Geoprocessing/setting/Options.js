//>>built
require({cache:{"url:widgets/Geoprocessing/setting/Options.html":'\x3cdiv\x3e\n\t\x3cdiv class\x3d"field"\x3e\n    \x3clabel\x3e${nls.helpUrl}:\x3c/label\x3e\x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"helpUrl" style\x3d"width: 500px;"\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"field"\x3e\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"useResultMapServer"\x3e\x3c/div\x3e\x3clabel style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"useResultMapServerLabel"\x3e${nls.useResultMapService}:\x3c/label\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"field"\x3e\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"shareResults"\x3e\x3c/div\x3e\x3clabel style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"shareResultsLabel"\x3e${nls.shareResults}:\x3c/label\x3e\n  \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/text!./Options.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/TextBox jimu/dijit/CheckBox esri/request ../utils".split(" "),function(b,c,l,m,n,d,e,f,g,p,q,h,k){return b([e,f,g],{baseClass:"jimu-widget-setting-gp-options",templateString:d,postCreate:function(){this.inherited(arguments);this.shareResults.labelNode=this.shareResultsLabel;this.useResultMapServer.labelNode=this.useResultMapServerLabel},
setConfig:function(a){this.config=a;this.helpUrl.setValue(a.helpUrl);k.allowShareResult(a)?this.shareResults.setValue(a.shareResults):this.shareResults.setStatus(!1);"undefined"===typeof a.useResultMapServer?(this.useResultMapServer.setStatus(!1),this._setResultMapServerCheckBoxEnable()):this.useResultMapServer.setValue(a.useResultMapServer)},acceptValue:function(){this.config.helpUrl=this.helpUrl.getValue();this.config.useResultMapServer=this.useResultMapServer.getValue();this.config.shareResults=
this.shareResults.getValue()},_setResultMapServerCheckBoxEnable:function(){if(!this.config.isSynchronous){var a=this.config.taskUrl.split("/");a.pop();a=a.join("/");h({url:a+"?f\x3djson",handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){a.resultMapServerName&&this.useResultMapServer.setStatus(!0)}))}}})});