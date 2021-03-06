//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on ./resultrenderers/simpleResultRenderers".split(" "), function(c, l, m, n, p, q, f) {
    c = {};
    var h, g, k;
    c.createResultRenderer = function(a, e) {
        var b;
        b = "GPFeatureRecordSetLayer" === a.dataType ? "DrawResultFeatureSet" : "GPRecordSet" === a.dataType ? "RecordSetTable" : "error" === a ? "Error" : "SimpleResultRenderer";
        var d = {
            param: a,
            map: h,
            nls: g,
            config: k
        };
        if ("DrawResultFeatureSet" === b) d.value = e.value, b = new f.DrawResultFeatureSet(d);
        else if ("RecordSetTable" === b) d.value = e.value, b = new f.RecordSetTable(d);
        else if ("SimpleResultRenderer" === b) {
            var c;
            if (-1 < ["GPLong", "GPDouble", "GPString", "GPBoolean", "GPMultiValue"].indexOf(a.dataType)) c = e.value;
            else if ("GPLinearUnit" === a.dataType) c = e.value.distance + "&nbsp;" + e.value.units;
            else if ("GPDate" === a.dataType) c = (new Date(e.value)).toLocaleTimeString();
            else if ("GPRecordSet" === a.dataType) c = "table";
            else if ("GPDataFile" === a.dataType || "GPRasterDataLayer" === a.dataType) c = '<a target="_blank" href="' +
                e.value.url + '">' + e.value.url + "</a>";
            d.message = c;
            b = new f.SimpleResultRenderer(d)
        }
        else "UnsupportRenderer" === b ? (d.message = "type " + a.dataType + " is not supported for now.", b = new f.UnsupportRenderer(d)) : "Error" === b ? (d.message = g.error, b = new f.ErrorResultRenderer(d)) : (d.message = "unknown renderer name: " + b, b = new f.UnsupportRenderer(d));
        return b
    };
    c.setMap = function(a) {
        h = a
    };
    c.setNls = function(a) {
        g = a
    };
    c.setConfig = function(a) {
        k = a
    };
    return c
});