// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.sabong');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('monet.canvas');
goog.require('markdown.core');
goog.require('app.helpers');
goog.require('app.text');
app.sabong.draw_sabong_pattern = (function app$sabong$draw_sabong_pattern(data){
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var pos_pattern_width = (232);
var pos_pattern_height = (102);
var pos_buffer_width = 1.0;
var pos_border_width = 12.5;
var pos_kusi_width = 6.0;
var pos_mandala_width = 36.2;
var pos_mandala_height = 21.0;
var pattern_scale = 6.5;
var val_buffer_width = pos_buffer_width;
var val_inner_width = (function (){var G__15770 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return Number(G__15770);
})();
var val_inner_height = (function (){var G__15771 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return Number(G__15771);
})();
var val_cut_width = (val_inner_width + ((2) * val_buffer_width));
var val_cut_height = (val_inner_height + ((2) * val_buffer_width));
var val_border_width = pos_border_width;
var val_kusi_width = pos_kusi_width;
var val_mandala_width = (((val_inner_width - ((2) * val_border_width)) - ((4) * val_kusi_width)) / (5));
var val_mandala_height = (((val_inner_height - ((2) * val_border_width)) - ((2) * val_kusi_width)) / (3));
var text = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = (x * sc);
var y__$1 = ((pos_pattern_height - y) * sc);
monet.canvas.font_style(ctx,"12px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height))
;
var text_title = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = (x * sc);
var y__$1 = ((pos_pattern_height - y) * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text))
;
var text_num = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title){
return (function (ctx,s,x,y){
var s__$1 = (cljs.core.truth_(cljs.core.re_find(/\./,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),".0"].join(''));
var vec__15772 = cljs.core.re_matches(/([0-9]+\.[0-9])[0-9]*/,s__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772,(0),null);
var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772,(1),null);
return text(ctx,s__$2,x,y);
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title))
;
var text_mandala_width = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num){
return (function (ctx,n){
return text_num(ctx,val_mandala_width,((((pos_buffer_width + pos_border_width) + (n * (pos_mandala_width + pos_kusi_width))) + (pos_mandala_width / (2))) - (1)),10.2);
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num))
;
var text_kusi_width = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width){
return (function (ctx,n){
return text_num(ctx,val_kusi_width,(((((pos_buffer_width + pos_border_width) + pos_mandala_width) + (n * (pos_mandala_width + pos_kusi_width))) + (pos_kusi_width / (2))) - (1)),10.2);
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width))
;
var text_kusi_height = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width){
return (function (ctx,n){
return text_num(ctx,val_kusi_width,9.0,(((((pos_buffer_width + pos_border_width) + pos_mandala_height) + (n * (pos_mandala_height + pos_kusi_width))) + (pos_kusi_width / (2))) - (1)));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width))
;
var text_mandala_height = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height){
return (function (ctx,n){
return text_num(ctx,val_mandala_height,9.0,((((pos_buffer_width + pos_border_width) + (n * (pos_mandala_height + pos_kusi_width))) + (pos_mandala_height / (2))) - (1)));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height))
;
var text_panel_number = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height){
return (function (ctx,n){
return text_title(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((n + (1)))].join(''),"40px",((((pos_buffer_width + pos_border_width) + (n * (pos_mandala_width + pos_kusi_width))) + (pos_mandala_width / (2))) - (2)),(76));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height))
;
var text_accumulate_horiz = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number){
return (function (ctx,m,k){
return text_num(ctx,(((val_buffer_width + ((((0) < (m + k)))?val_border_width:null)) + (m * val_mandala_width)) + (k * val_kusi_width)),(((1.5 + ((((0) < (m + k)))?pos_border_width:null)) + (m * pos_mandala_width)) + (k * pos_kusi_width)),(99));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number))
;
var text_accumulate_vert = ((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number,text_accumulate_horiz){
return (function (ctx,m,k){
return text_num(ctx,(((val_buffer_width + ((((0) < (m + k)))?val_border_width:null)) + (m * val_mandala_height)) + (k * val_kusi_width)),(226),(((1.5 + ((((0) < (m + k)))?pos_border_width:null)) + (m * pos_mandala_height)) + (k * pos_kusi_width)));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number,text_accumulate_horiz))
;
var canvas_dom = document.getElementById("sabong-pattern-canvas");
var monet_canvas = monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = monet.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
var _ = (img["src"] = "img/sabong-diagram.svg");
return monet.canvas.add_entity(monet_canvas,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number,text_accumulate_horiz,text_accumulate_vert,canvas_dom,monet_canvas,ctx,img,_){
return (function (ctx__$1,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_mandala_height(text_mandala_height(text_mandala_height(text_kusi_height(text_kusi_height(text_kusi_width(text_kusi_width(text_kusi_width(text_kusi_width(text_mandala_width(text_mandala_width(text_mandala_width(text_mandala_width(text_mandala_width(text_num(text_num(text_num(text_num(text_panel_number(text_panel_number(text_panel_number(text_panel_number(text_panel_number(text(text_title(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx__$1,img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),title,"30px",(0),-8.0),["Cut Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_cut_width),", Cut Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_cut_height)].join(''),50.0,-8.0),(0)),(1)),(2)),(3)),(4)),val_buffer_width,1.5,10.2),val_buffer_width,((pos_pattern_width - 2.5) - (1)),10.2),val_border_width,6.0,10.2),val_border_width,((pos_pattern_width - 7.5) - (1)),10.2),(0)),(1)),(2)),(3)),(4)),(0)),(1)),(2)),(3)),(0)),(1)),(0)),(1)),(2)),(0),(0)),(1),(0)),(1),(1)),(2),(1)),(2),(2)),(3),(2)),(3),(3)),(4),(3)),(4),(4)),(0),(0)),(1),(0)),(1),(1)),(2),(1)),(2),(2));
});})(title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_panel_number,text_accumulate_horiz,text_accumulate_vert,canvas_dom,monet_canvas,ctx,img,_))
));
});
app.sabong._LT_content_sabong_GT_ = (function app$sabong$_LT_content_sabong_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.helpers.load_text(cljs.core.cst$kw$_SHARP_sabong_DASH_guide_DASH_text,cljs.core.cst$kw$sabong_DASH_guide,(function (){
return app.sabong.draw_sabong_pattern(data);
}));
}),cljs.core.cst$kw$component_DASH_will_DASH_update,(function (){
return app.helpers.load_text(cljs.core.cst$kw$_SHARP_sabong_DASH_guide_DASH_text,cljs.core.cst$kw$sabong_DASH_guide,(function (){
return app.sabong.draw_sabong_pattern(data);
}));
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var download_pdf = (function (){
var canvas_dom = document.getElementById("sabong-pattern-canvas");
var img = canvas_dom.toDataURL();
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"robe-pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(15),(15),(15)], null),cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,img,cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Sabong"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong-pattern"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong-pattern",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Pattern"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"diagram_title"], null),"Title:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"diagram_title",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),cljs.core.cst$kw$on_DASH_change,((function (download_pdf){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,cljs.core.cst$kw$title,e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(download_pdf))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_width"], null),"Width:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),cljs.core.cst$kw$on_DASH_change,((function (download_pdf){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,cljs.core.cst$kw$width,e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(download_pdf))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_height"], null),"Height:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_height",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)),cljs.core.cst$kw$on_DASH_change,((function (download_pdf){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc,cljs.core.cst$kw$height,e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(download_pdf))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_width_percent"], null),"Shrinking width percent:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"shrinking_width_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,(0)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_height_percent"], null),"Shrinking height percent:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"shrinking_height_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,(0)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (download_pdf){
return (function (e){
return download_pdf();
});})(download_pdf))
], null),"Download PDF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sabong-pattern-canvas",cljs.core.cst$kw$width,(1600),cljs.core.cst$kw$height,(1000)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong-guide"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong-guide",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),"Guide"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_sabong_DASH_guide_DASH_text], null)], null)], null);
})], null));
});
