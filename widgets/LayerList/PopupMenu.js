//>>built
require({cache:{"url:widgets/LayerList/PopupMenu.html":'\x3cdiv\x3e\n  \x3cdiv class\x3d"popup-menu-transparency-body" data-dojo-attach-point\x3d"transparencyDiv" data-dojo-attach-event\x3d"onclick:_onTransparencyDivClick" \x3e\n    \x3cdiv class\x3d"label"\x3e\n      \x3cdiv class\x3d"label-left"\x3e${nls.itemOpaque}\x3c/div\x3e\n      \x3cdiv class\x3d"label-right"\x3e${nls.itemTransparent}\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"transparencyBody"\x3e \n      \x3col data-dojo-attach-point\x3d"transparencyRule" class\x3d"transparency-rule"\x3e \x3c/ol\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n\x3cdiv\x3e\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/on jimu/dijit/DropMenu dijit/_TemplatedMixin dijit/form/HorizontalSlider dijit/form/HorizontalRuleLabels dojo/text!./PopupMenu.html dojo/dom-style ./NlsStrings".split(" "),function(g,h,b,d,f,k,l,m,n,p,q,c,r){return g([l,m],{templateString:q,_deniedItems:null,constructor:function(){this.nls=r.value;this._deniedItems=[]},_getDropMenuPosition:function(){return{top:"15px",left:12-b.getStyle(this.dropMenuNode,"width")+
"px"}},_getTransNodePosition:function(){return{top:"15px",left:-174-b.getStyle(this.dropMenuNode,"width")+"px"}},_onBtnClick:function(){this.dropMenuNode||(this._createDropMenuNode(),this.own(k(this.dropMenuNode,"click",d.hitch(this,function(a){a.stopPropagation()}))))},_refresh:function(){this._denyItems()},_denyItems:function(){var a=f("div[class~\x3d'menu-item']",this.dropMenuNode).forEach(function(a){b.removeClass(a,"menu-item-dissable")});h.forEach(this._deniedItems,function(e){a.forEach(function(a){b.getAttr(a,
"itemId")===e&&(b.addClass(a,"menu-item-dissable"),("description"===e||"download"===e)&&f(".menu-item-description",a).forEach(function(a){b.setAttr(a,"href","#");b.removeAttr(a,"target")}))})},this)},selectItem:function(a){-1===this._deniedItems.indexOf(a.key)&&this.emit("onMenuClick",a)},openDropMenu:function(a){a.then(d.hitch(this,function(a){this._deniedItems=a;this._refresh()}));this.inherited(arguments)},closeDropMenu:function(){this.inherited(arguments);this.hideTransNode()},_onTransparencyDivClick:function(a){a.stopPropagation()},
showTransNode:function(a){this.transHorizSlider||(this._createTransparencyWidget(),this.transHorizSlider.set("value",1-a));c.set(this.transparencyDiv,"top",this._getTransNodePosition().top);c.set(this.transparencyDiv,"left",this._getTransNodePosition().left);c.set(this.transparencyDiv,"display","block")},hideTransNode:function(){c.set(this.transparencyDiv,"display","none")},_createTransparencyWidget:function(){this.transHorizSlider=new n({minimum:0,maximum:1,intermediateChanges:!0},this.transparencyBody);
this.own(this.transHorizSlider.on("change",d.hitch(this,function(a){this.emit("onMenuClick",{key:"transparencyChanged"},{newTransValue:a})})));new p({container:"bottomDecoration"},this.transparencyRule)}})});