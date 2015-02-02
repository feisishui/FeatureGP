//>>built
require({cache:{"esri/dijit/LocateButton":function(){define("require dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../config dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/LocateButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-attr ../geometry/webMercatorUtils ../geometry/Point ../SpatialReference ../graphic ../symbols/PictureMarkerSymbol ../tasks/ProjectParameters".split(" "),function(f,l,m,d,p,q,h,
e,t,u,r,k,v,w,g,s,n,x,y,z,A,B,C){return m("esri.dijit.LocateButton",[e,u,l],{templateString:v,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new B(f.toUrl(".")+"/images/sdk_gps_location.png",28,28),infoTemplate:null,scale:null,useTracking:!1,clearOnTrackingStop:!1,setScale:!0,centerAt:!0,timeout:15E3,graphicsLayer:null,geolocationOptions:{maximumAge:0,timeout:15E3,enableHighAccuracy:!0}},constructor:function(a,c){var b=d.mixin({},this.options,a);this.domNode=c;this._i18n=
w;navigator.geolocation||(b.visible=!1,console.log("LocateButton::navigator.geolocation unsupported."));this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("scale",b.scale);this.set("highlightLocation",b.highlightLocation);this.set("symbol",b.symbol);this.set("infoTemplate",b.infoTemplate);this.set("geolocationOptions",b.geolocationOptions);this.set("useTracking",b.useTracking);this.set("setScale",b.setScale);this.set("centerAt",b.centerAt);this.set("timeout",b.timeout);
this.set("graphicsLayer",b.graphicsLayer);this.set("clearOnTrackingStop",b.clearOnTrackingStop);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this.watch("tracking",this._locate);this.watch("useTracking",d.hitch(this,function(){this.get("tracking")&&!this.get("useTracking")&&this._stopTracking();this._setTitle()}));this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments);
this.own(r(this._locateNode,t,d.hitch(this,this.locate)))},startup:function(){this.get("map")||(this.destroy(),console.log("LocateButton::map required"));if(this.get("map").loaded)this._init();else r.once(this.get("map"),"load",d.hitch(this,function(){this._init()}))},destroy:function(){this._graphicsEvent&&this._graphicsEvent.remove();this._removeWatchPosition();this.inherited(arguments)},clear:function(){var a=this.get("highlightGraphic"),c=this.get("graphicsLayer");a&&(c?c.remove(a):this.get("map").graphics.remove(a),
this.set("highlightGraphic",null))},locate:function(){this.get("useTracking")&&this.set("tracking",!this.get("tracking"));return this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_setTitle:function(){this.get("useTracking")?this.get("tracking")?n.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):n.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):n.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},
_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null));this._removePrivateVars()},_stopTracking:function(){g.remove(this._locateNode,this._css.tracking);this._removeWatchPosition();this.get("clearOnTrackingStop")&&this.clear();this._hideLoading()},_startTracking:function(){g.add(this._locateNode,this._css.tracking);this._removeWatchPosition();var a=navigator.geolocation.watchPosition(d.hitch(this,function(a){this._setPosition(a).then(d.hitch(this,
function(a){this._locateEvent(a)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error setting the position."));this._locateError(a)}))}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not get tracking position."));this._locateError(a)}),this.get("geolocationOptions"));this.set("watchId",a)},_removePrivateVars:function(){this._scale=this._position=this._graphic=null},_getCurrentPosition:function(){var a=new k;this._removePrivateVars();var c=setTimeout(d.hitch(this,function(){clearTimeout(c);
a.reject(Error("LocateButton::time expired for getting location."))}),this.get("timeout"));navigator.geolocation.getCurrentPosition(d.hitch(this,function(b){clearTimeout(c);this._setPosition(b).then(d.hitch(this,function(b){a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Error setting map position."));a.reject(b)}))}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));a.reject(b)}),this.get("geolocationOptions"));return a.promise},_locate:function(){var a=
new k;this._showLoading();if(navigator.geolocation)this.get("useTracking")?this.get("tracking")?(this._startTracking(),a.resolve({tracking:!0})):(this._stopTracking(),a.resolve({tracking:!1})):this._getCurrentPosition().then(d.hitch(this,function(b){this._locateEvent(b);a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));this._locateError(b);a.reject(b)}));else{var c=Error("LocateButton::geolocation unsupported");this._locateError(c);a.reject(c)}this._setTitle();
return a.promise},_projectPoint:function(a){var c=new k,b=this.get("map").spatialReference,e=b.wkid;b.isWebMercator()?(a=x.geographicToWebMercator(a),c.resolve(a)):h.defaults.geometryService&&4326!==e?(e=new C,e.geometries=[a],e.outSR=b,h.defaults.geometryService.project(e).then(d.hitch(this,function(a){a&&a.length?c.resolve(a[0]):c.reject(Error("LocateButton::Point was not projected."))}),function(a){a||(a=Error("LocateButton::please specify a geometry service on esri/config to project."));c.reject(a)})):
c.resolve(a);return c.promise},_getScale:function(a){var c=this.get("scale");return a&&a.coords?c||a.coords.accuracy||5E4:c||5E4},_createPoint:function(a){var c;a&&a.coords&&(c=new y([a.coords.longitude,a.coords.latitude],new z({wkid:4326})));return c},_setPosition:function(a){var c=new k,b,e;this._removePrivateVars();if((this._position=a)&&a.coords){if(b=this._createPoint(a))this._graphic=e=this._createGraphic(b,a);var f=this._getScale(a);this._scale=f;b?this._projectPoint(b).then(d.hitch(this,function(b){this._graphic=
e=this._createGraphic(b,a);var g={graphic:e,scale:f,position:a};this.get("setScale")&&this.get("map").setScale(f);this.get("centerAt")?this.get("map").centerAt(b).then(d.hitch(this,function(){c.resolve(g)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not center map."));c.reject(a)})):c.resolve(g)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error projecting point."));c.reject(a)})):(b=Error("LocateButton::Invalid point"),c.reject(b))}else b=Error("LocateButton::Invalid position"),
c.reject(b);return c.promise},_createGraphic:function(a,c){var b;a&&(b={position:c},b=new A(a,this.get("symbol"),b,this.get("infoTemplate")));return b},_locateEvent:function(a){if(a.graphic){var c=this.get("highlightGraphic"),b=this.get("graphicsLayer");c?(c.setGeometry(a.graphic.geometry),c.setAttributes(a.graphic.attributes),c.setInfoTemplate(a.graphic.infoTemplate),c.setSymbol(a.graphic.symbol)):(c=a.graphic,this.get("highlightLocation")&&(b?b.add(c):this.get("map").graphics.add(c)));this.set("highlightGraphic",
c)}this._hideLoading();this.emit("locate",a)},_locateError:function(a){a={graphic:this._graphic,scale:this._scale,position:this._position,error:a};this._hideLoading();this.emit("locate",a)},_showLoading:function(){this.get("useTracking")||g.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||g.remove(this._locateNode,this._css.loading)},_init:function(){this._visible();this._setTitle();this.get("tracking")&&this.get("useTracking")&&this._locate();this.set("loaded",
!0);this.emit("load",{})},_updateThemeWatch:function(a,c,b){g.remove(this.domNode,c);g.add(this.domNode,b)},_visible:function(){this.get("visible")?s.set(this.domNode,"display","block"):s.set(this.domNode,"display","none")}})})},"widgets/MyLocation/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings","dojo/text!./config.json"],function(){})},"url:esri/dijit/templates/LocateButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.container}"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_locateNode" role\x3d"button" class\x3d"${_css.locate}"\x3e\x3cspan\x3e${_i18n.widgets.locateButton.locate.button}\x3c/span\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n',
"url:widgets/MyLocation/css/style.css":".jimu-widget-mylocation .LocateButton .zoomLocateButton{background-color: rgba(0,0,0,0.2);}.jimu-widget-mylocation .LocateButton .zoomLocateButton:hover{background-color: rgba(0,0,0,0.4);}","url:widgets/MyLocation/config.json":'{\n  "locateButton": {\n    "geolocationOptions": {\n      "timeout": 15000\n    },\n    "highlightLocation": true\n  }\n}',"*now":function(f){f(['dojo/i18n!*preload*widgets/MyLocation/nls/Widget*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidget esri/dijit/LocateButton dojo/_base/html dojo/on dojo/_base/lang jimu/dijit/Message".split(" "),function(f,l,m,d,p,q,h){f=f([l],{name:"MyLocation",baseClass:"jimu-widget-mylocation",startup:function(){this.inherited(arguments);var e=this.config.locateButton;e.map=this.map;e=new m(e);e.startup();d.place(e.domNode,this.domNode);this.own(p(e,"locate",q.hitch(this,this.locate)))},locate:function(d){d.error&&(console.error(d.error.message),new h({message:this.nls.failureFinding}))}});
f.inPanel=!1;f.hasUIFile=!1;return f});