//>>built
require({cache:{"esri/dijit/HomeButton":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/HomeButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style".split(" "),function(e,h,c,n,p,k,l,m,q,s,f,t,g,r){return h("esri.dijit.HomeButton",[k,m,e],{templateString:f,options:{theme:"HomeButton",map:null,extent:null,fit:!1,visible:!0},constructor:function(d,a){var b=
c.mixin({},this.options,d);this.domNode=a;this._i18n=t;this.set("map",b.map);this.set("theme",b.theme);this.set("visible",b.visible);this.set("extent",b.extent);this.set("fit",b.fit);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments);this.own(q(this._homeNode,l,c.hitch(this,this.home)))},startup:function(){this.map||(this.destroy(),console.log("HomeButton::map required"));
if(this.map.loaded)this._init();else q.once(this.map,"load",c.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},home:function(){var d=new s,a=this.get("extent");this._showLoading();var b={extent:a};a?this.map.extent!==a?this.map.setExtent(a,this.get("fit")).then(c.hitch(this,function(){this._hideLoading();this.emit("home",b);d.resolve(b)}),c.hitch(this,function(a){a||(a=Error("HomeButton::Error setting map extent"));b.error=a;this.emit("home",b);d.reject(a)})):(this._hideLoading(),
this.emit("home",b),d.resolve(b)):(this._hideLoading(),a=Error("HomeButton::home extent is undefined"),b.error=a,this.emit("home",b),d.reject(a));return d.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible();this.get("extent")||this.set("extent",this.map.extent);this.set("loaded",!0);this.emit("load",{})},_showLoading:function(){g.add(this._homeNode,this._css.loading)},_hideLoading:function(){g.remove(this._homeNode,this._css.loading)},
_updateThemeWatch:function(d,a,b){g.remove(this.domNode,a);g.add(this.domNode,b)},_visible:function(){this.get("visible")?r.set(this.domNode,"display","block"):r.set(this.domNode,"display","none")}})})},"widgets/HomeButton/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/HomeButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\n    \x3cdiv class\x3d"${_css.container}"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e',
"url:widgets/HomeButton/css/style.css":".jimu-widget-homebutton .HomeButton .home {background-color: rgba(0,0,0,0.2);}.jimu-widget-homebutton .HomeButton .home:hover {background-color: rgba(0,0,0,0.4);}","*now":function(e){e(['dojo/i18n!*preload*widgets/HomeButton/nls/Widget*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang jimu/BaseWidget esri/dijit/HomeButton esri/geometry/Extent dojo/_base/html dojo/dom-construct dojo/topic".split(" "),function(e,h,c,n,p,k,l,m){return e([c],{name:"HomeButton",baseClass:"jimu-widget-homebutton",postCreate:function(){this.own(m.subscribe("appConfigChanged",h.hitch(this,this.onAppConfigChanged)))},startup:function(){this.inherited(arguments);this.createHomeDijit({map:this.map,extent:this.map.extent})},createHomeDijit:function(c){this.homeDijit=
new n(c,l.create("div"));k.place(this.homeDijit.domNode,this.domNode);this.homeDijit.startup()},onAppConfigChanged:function(c,e,f){"mapChange"===e&&(f&&f.mapOptions&&f.mapOptions.extent)&&(c=new p(f.mapOptions.extent),this.homeDijit.set("extent",c))}})});