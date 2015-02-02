//>>built
require({cache:{"url:widgets/Geocoder/setting/Edit.html":'\x3cdiv\x3e\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\n    \x3ctbody\x3e\n      \x3ctr\x3e\n        \x3ctd class\x3d"first"\x3e*${nls.url}\x3c/td\x3e\n        \x3ctd class\x3d"second"\x3e\n          \x3cdiv class\x3d"service-chooser" data-dojo-attach-point\x3d"serviceChooser" /\x3e\n        \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr class\x3d"example"\x3e\n        \x3ctd class\x3d"first"\x3e\x3c/td\x3e\n        \x3ctd class\x3d"second"\x3e\n          \x3cspan class\x3d"example"\x3e${nls.example}: http://\x26lt;myServerName\x26gt;/arcgis/rest/services/World/GeocodeServer\x3c/span\x3e\n        \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr\x3e\n        \x3ctd class\x3d"first"\x3e*${nls.name}\x3c/td\x3e\n        \x3ctd class\x3d"second"\x3e\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"geocodeName" \n          placeHolder\x3d"${nls.geocoderNamePlaceHolder}"\n          required\x3d"true" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\n        \x3c/td\x3e\n      \x3c/tr\x3e\n      \x3ctr\x3e\n        \x3ctd class\x3d"first"\x3e${nls.placeholder}\x3c/td\x3e\n        \x3ctd class\x3d"second"\x3e\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"geocodePlaceholder" \n          placeHolder\x3d"${nls.geocodePlaceHolder}" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\n        \x3c/td\x3e\n      \x3c/tr\x3e\n    \x3c/tbody\x3e\n  \x3c/table\x3e\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/Message jimu/dijit/GeocodeServiceChooser dojo/text!./Edit.html dijit/form/ValidationTextBox".split(" "),function(d,b,l,c,m,n,e,f,g,h,k){return d([f,e],{baseClass:"jimu-geocoder-Edit",singleLineFieldName:null,validService:!1,templateString:k,postCreate:function(){this.inherited(arguments);this.serviceChooser=(new h({url:this.config.url||
""})).placeAt(this.serviceChooser);this.own(c(this.geocodeName,"Change",b.hitch(this,"_onGeocodeNameChange")));this.own(c(this.serviceChooser,"ok",b.hitch(this,"_onServiceChooserOk")));this._setConfig(this.config)},startup:function(){this.inherited(arguments);this.serviceChooser.startup()},_setConfig:function(a){a.url&&(this.validService=!0);a.name&&this.geocodeName.set("value",a.name);a.singleLineFieldName&&(this.singleLineFieldName=a.singleLineFieldName);a.placeholder&&this.geocodePlaceholder.set("value",
a.placeholder)},getConfig:function(){return{url:this.serviceChooser.getUrl(),name:this.geocodeName.get("value"),singleLineFieldName:this.singleLineFieldName,placeholder:this.geocodePlaceholder.get("value")}},_onGeocodeNameChange:function(){this._checkRequiredField()},_onServiceChooserOk:function(a){(a=a.definition)&&a.singleLineAddressField&&a.singleLineAddressField.name?(this.singleLineFieldName=a.singleLineAddressField.name,this.validService=!0):(new g({message:this.nls.warning}),this.singleLineFieldName=
"",this.validService=!1);this._checkRequiredField()},_checkRequiredField:function(){!this.validService||!this.geocodeName.get("value")?this.popup&&this.popup.disableButton(0):this.popup&&this.popup.enableButton(0)}})});