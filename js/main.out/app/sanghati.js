// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.sanghati');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('monet.canvas');
goog.require('markdown.core');
goog.require('app.helpers');
goog.require('app.text');
app.sanghati.draw_sanghati_pattern = (function app$sanghati$draw_sanghati_pattern(data){
var pos_pattern_width = (297);
var pos_pattern_height = (210);
var pattern_scale = 5.3;
var text = ((function (pos_pattern_width,pos_pattern_height,pattern_scale){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = (x * sc);
var y__$1 = ((pos_pattern_height - y) * sc);
monet.canvas.font_style(ctx,"12px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(pos_pattern_width,pos_pattern_height,pattern_scale))
;
var canvas_dom = document.getElementById("sanghati-pattern-canvas");
var monet_canvas = monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = monet.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
var _ = (img["src"] = "img/sanghati-pattern.svg");
return monet.canvas.add_entity(monet_canvas,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (pos_pattern_width,pos_pattern_height,pattern_scale,text,canvas_dom,monet_canvas,ctx,img,_){
return (function (ctx__$1,val){
return text(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx__$1,img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),"hey",50.0,-8.0);
});})(pos_pattern_width,pos_pattern_height,pattern_scale,text,canvas_dom,monet_canvas,ctx,img,_))
));
});
app.sanghati._LT_content_sanghati_GT_ = (function app$sanghati$_LT_content_sanghati_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.helpers.load_text(cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_text,cljs.core.cst$kw$sanghati_DASH_guide,(function (){
return app.sanghati.draw_sanghati_pattern(data);
}));
}),cljs.core.cst$kw$component_DASH_will_DASH_update,(function (){
return app.helpers.load_text(cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_text,cljs.core.cst$kw$sanghati_DASH_guide,(function (){
return app.sanghati.draw_sanghati_pattern(data);
}));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var _ = cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var download_pdf = ((function (_){
return (function (){
var canvas_dom = document.getElementById("sanghati-pattern-canvas");
var img = canvas_dom.toDataURL();
var title = "sanghati-pattern";
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"robe-pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,img,cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});})(_))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sanghati",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Sanghati"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati-pattern"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sanghati-pattern",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Pattern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (_,download_pdf){
return (function (e){
return download_pdf();
});})(_,download_pdf))
], null),"Download PDF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-pattern-canvas",cljs.core.cst$kw$width,(1600),cljs.core.cst$kw$height,(1000)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati-guide"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sanghati-guide",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Guide"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_sanghati_DASH_guide_DASH_text], null)], null)], null);
})], null));
});
