//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin".split(" "),function(d,f,g,b,e){return d([e],{baseClass:"jimu-gp-editor-base",editorName:"BaseEditor",dependParam:"",postCreate:function(){this.inherited(arguments)},getValue:function(){},getGPValue:function(){var a=new b;a.resolve(this.getValue());return a},wrapGPValue:function(a){a.toJson||(a.toJson=function(){return a});return a},wrapValueToDeferred:function(a){var c=new b;c.resolve(a);
return c},update:function(a){}})});