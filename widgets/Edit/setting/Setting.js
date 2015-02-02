//>>built
require({cache:{"widgets/Edit/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Edit/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\n  \x3cdiv data-dojo-attach-point\x3d"secondPageDiv" style\x3d"display:none"\x3e\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"button" data-dojo-attach-event\x3d"click:backToFirstPage"\x3e${nls.back}\x3c/button\x3e\x3clabel data-dojo-attach-point\x3d"layername"\x3e\x3c/label\x3e\x3cbr\x3e\n    \x3cdiv data-dojo-attach-point\x3d"tableFieldInfos"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\n      \x3ctbody\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.enableUndoRedo}\x3c/td\x3e\n          \x3ctd class\x3d"second"\x3e\n            \x3cinput style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"enableUndoRedo" \n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.toolbarVisible}\x3c/td\x3e\n          \x3ctd class\x3d"second"\x3e\n            \x3cinput style\x3d"margin-left: 10px;" data-dojo-attach-point\x3d"toolbarVisible" \n            data-dojo-attach-event\x3d"click:onToolbarSelected"\n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n        \x3ctr\x3e\n          \x3ctd class\x3d"first"\x3e${nls.toolbarOptions}\x3c/td\x3e\n          \x3ctd class\x3d"second"\x3e\n            \x3cspan style\x3d"margin-left: 10px;" \x3e${nls.mergeVisible}\x3c/span\x3e\n            \x3cinput style\x3d"margin-left: 5px;" data-dojo-attach-point\x3d"mergeVisible" \n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\n            \x3cspan style\x3d"margin-left: 20px;" \x3e${nls.cutVisible}\x3c/span\x3e\n            \x3cinput style\x3d"margin-left: 5px;" data-dojo-attach-point\x3d"cutVisible" \n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\n            \x3cspan style\x3d"margin-left: 20px;" \x3e${nls.reshapeVisible}\x3c/span\x3e\n            \x3cinput style\x3d"margin-left: 5px;" data-dojo-attach-point\x3d"reshapeVisible" \n            data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n      \x3c/tbody\x3e\n    \x3c/table\x3e\x3cbr\x3e\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e\n',
"url:widgets/Edit/setting/css/style.css":".jimu-widget-edit-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-edit-setting .editable{width: 100px;}.jimu-widget-edit-setting .update{width: 200px;}.jimu-widget-edit-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-edit-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; text-align: right; padding-right:15px;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{width:500px;}.jimu-widget-edit-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-edit-setting .dijitSelect{height: 30px; width: 100%;}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/Edit/setting/nls/Setting*["ar","cs","da","de","en","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","ROOT"]'])}}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/on dojo/_base/array dojo/dom-style dojo/query".split(" "),function(f,m,n,l,p,q,r,h,s){return f([n,m],{baseClass:"jimu-widget-edit-setting",selectLayer:null,tooltipDialog:null,featurelayers:[],indexLayer:-1,startup:function(){this.inherited(arguments);this.featurelayers.length=0;this.config.editor||(this.config.editor={});this.enableUndoRedo.set("checked",this.config.editor.enableUndoRedo);
this.toolbarVisible.set("checked",this.config.editor.toolbarVisible);this.mergeVisible.set("checked",this.config.editor.toolbarOptions.mergeVisible);this.cutVisible.set("checked",this.config.editor.toolbarOptions.cutVisible);this.reshapeVisible.set("checked",this.config.editor.toolbarOptions.reshapeVisible);this.displayLayersTable=new l({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:this.nls.label,type:"text"},{name:"disableGeometryUpdate",title:this.nls.update,
type:"checkbox","class":"update"},{name:"actions",title:this.nls.fields,type:"actions","class":"editable",actions:["edit"]}],selectable:!1});this.displayLayersTable.placeAt(this.tableLayerInfos);this.displayLayersTable.startup();this.displayFieldsTable=new l({fields:[{name:"isEditable",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"fieldName",title:this.nls.editpageName,type:"text"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0},{name:"actions",title:this.nls.actions,
type:"actions",actions:["up","down"],"class":"editable"}],selectable:!1});this.displayFieldsTable.placeAt(this.tableFieldInfos);this.displayFieldsTable.startup();this.own(q(this.displayLayersTable,"actions-edit",p.hitch(this,this.showLayerFields)));this.setConfig(this.config)},backToFirstPage:function(){h.set(this.secondPageDiv,"display","none");h.set(this.firstPageDiv,"display","");this.resetFeaturelayers(this.indexLayer);this.indexLayer=-1},showLayerFields:function(b){var c=s(".action-item-parent",
b);if(c&&c.length&&(c=this.displayLayersTable.getRowData(b),c.edit)){this.displayFieldsTable.clear();h.set(this.firstPageDiv,"display","none");h.set(this.secondPageDiv,"display","");var d=this.featurelayers.length;for(b=0;b<d;b++)if(c.label.toLowerCase()===this.featurelayers[b].label.toLowerCase()){this.indexLayer=b;c=this.featurelayers[b].fields.length;for(d=0;d<c;d++){var a=this.featurelayers[b].fields[d];this.displayFieldsTable.addRow({fieldName:a.fieldName,isEditable:a.isEditable,label:a.label})}break}}},
onToolbarSelected:function(){this.toolbarVisible.checked?(this.mergeVisible.set("checked",!0),this.cutVisible.set("checked",!0),this.reshapeVisible.set("checked",!0)):(this.mergeVisible.set("checked",!1),this.cutVisible.set("checked",!1),this.reshapeVisible.set("checked",!1))},setConfig:function(b){this.config=b;this.displayLayersTable.clear();this.featurelayers.length=0;b.editor.layerInfos&&this.initSelectLayer()},initSelectLayer:function(){for(var b=0,b="",c=this.map.graphicsLayerIds.length,d=!1,
a=!1,t=r.map(this.config.editor.layerInfos,function(a){return a.featureLayer.url}),f=0;f<c;f++){var e=this.map.getLayer(this.map.graphicsLayerIds[f]);if("Feature Layer"===e.type&&e.url&&e.isEditable()){var k=[],d=!0,a=!1;-1<t.indexOf(e.url)&&(a=!0);if(b=this.getAllFieldsInfo(e))k=b;else for(var b=e.fields.length,g=0;g<b;g++)e.fields[g].alias||(e.fields[g].alias=e.fields[g].name),k.push({fieldName:e.fields[g].name,label:e.fields[g].alias,isEditable:!0});b=this.getOperationalLayerTitle(e);this.featurelayers.push({label:b,
layer:e,fields:k,edit:a});this.displayLayersTable.addRow({label:b,edit:a,disableGeometryUpdate:this.getGeometryUpdate(e)})}}d?h.set(this.tableLayerInfosError,"display","none"):(h.set(this.tableLayerInfosError,"display",""),this.tableLayerInfosError.innerHTML=this.nls.noLayers)},isLayerInConfig:function(b){if(this.config.editor.layerInfos)for(var c=this.config.editor.layerInfos,d=c.length,a=0;a<d;a++)if(c[a].featureLayer&&c[a].featureLayer.url&&c[a].featureLayer.url.toLowerCase()===b.url.toLowerCase())return!0;
return!1},getGeometryUpdate:function(b){if(this.config.editor.layerInfos)for(var c=this.config.editor.layerInfos,d=c.length,a=0;a<d;a++)if(c[a].featureLayer&&c[a].featureLayer.url&&c[a].featureLayer.url.toLowerCase()===b.url.toLowerCase())return c[a].disableGeometryUpdate;return!1},getAllFieldsInfo:function(b){if(this.config.editor.layerInfos)for(var c=this.config.editor.layerInfos,d=c.length,a=0;a<d;a++)if(c[a].featureLayer&&c[a].featureLayer.url&&c[a].featureLayer.url.toLowerCase()===b.url.toLowerCase())return c[a].fieldInfos;
return null},getOperationalLayerTitle:function(b){var c="";if(this.appConfig.map&&this.appConfig.map.operationallayers)for(var d=this.appConfig.map.operationallayers.length,a=0;a<d;a++)if(this.appConfig.map.operationallayers[a].url.toLowerCase()===b.url.toLowerCase()){c=this.appConfig.map.operationallayers[a].label;break}c||(c=b.name);c||(c=b.url);return c},resetFeaturelayers:function(b){var c=[],d=this.displayFieldsTable.getData();if(-1<this.indexLayer&&this.indexLayer===b){b=d.length;for(var a=
0;a<b;a++){var f={};f.fieldName=d[a].fieldName;f.label=d[a].label;f.isEditable=d[a].isEditable;c.push(f)}this.featurelayers[this.indexLayer].fields=c}else-1<b&&(c=this.featurelayers[b].fields);return c},getConfig:function(){this.config.editor.enableUndoRedo=this.enableUndoRedo.checked;this.config.editor.toolbarVisible=this.toolbarVisible.checked;this.config.editor.toolbarOptions.mergeVisible=this.mergeVisible.checked;this.config.editor.toolbarOptions.cutVisible=this.cutVisible.checked;this.config.editor.toolbarOptions.reshapeVisible=
this.reshapeVisible.checked;var b=this.displayLayersTable.getData(),c=this.featurelayers.length;this.config.editor.layerInfos=[];for(var d=0;d<c;d++)if(b[d].edit){var a={featureLayer:{}};a.featureLayer.url=this.featurelayers[d].layer.url;a.disableGeometryUpdate=b[d].disableGeometryUpdate;a.fieldInfos=[];a.fieldInfos=this.resetFeaturelayers(d);(!a.fieldInfos||!a.fieldInfos.length)&&delete a.fieldInfos;this.config.editor.layerInfos.push(a)}return this.config}})});