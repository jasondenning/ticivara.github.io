// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.sabong');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('monet.canvas');
goog.require('app.helpers');
goog.require('app.text');
app.sabong.draw_sabong_pattern = (function app$sabong$draw_sabong_pattern(data){
var sabong = cljs.core.cst$kw$sabong.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sabong);
var pos_pattern_width = (232);
var pos_pattern_height = (102);
var pos_img_offset_x = (5);
var pos_img_offset_y = (5);
var pos_text_offset_x = (0.0 + pos_img_offset_x);
var pos_text_offset_y = (0.0 + pos_img_offset_y);
var pos_buffer_width = 1.0;
var pos_border_width = 12.5;
var pos_kusi_width = 6.0;
var pos_mandala_width = 36.2;
var pos_mandala_height = 21.0;
var pattern_scale = (14);
var val_buffer_width = (function (){var G__16340 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong);
return Number(G__16340);
})();
var val_inner_width = (function (){var G__16341 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sabong);
return Number(G__16341);
})();
var val_inner_height = (function (){var G__16342 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sabong);
return Number(G__16342);
})();
var val_kusi_width = (function (){var G__16343 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong);
return Number(G__16343);
})();
var vec__16337 = app.helpers.calc_shrinking_lengths(cljs.core.cst$kw$sabong.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
var val_cut_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(0),null);
var val_cut_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(1),null);
var val_mandala_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(2),null);
var val_mandala_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(3),null);
var val_border_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(4),null);
var val_border_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16337,(5),null);
var text = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,"28px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height))
;
var text_title = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text))
;
var text_num = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title))
;
var text_mandala_width = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num){
return (function (ctx,n){
return text_num(ctx,val_mandala_width,((((pos_buffer_width + pos_border_width) + (n * (pos_mandala_width + pos_kusi_width))) + (pos_mandala_width / (2))) - (1)),10.2);
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num))
;
var text_kusi_width = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width){
return (function (ctx,n){
return text_num(ctx,val_kusi_width,(((((pos_buffer_width + pos_border_width) + pos_mandala_width) + (n * (pos_mandala_width + pos_kusi_width))) + (pos_kusi_width / (2))) - (1)),10.2);
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width))
;
var text_kusi_height = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width){
return (function (ctx,n){
return text_num(ctx,val_kusi_width,9.0,(((((pos_buffer_width + pos_border_width) + pos_mandala_height) + (n * (pos_mandala_height + pos_kusi_width))) + (pos_kusi_width / (2))) - (1)));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width))
;
var text_mandala_height = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height){
return (function (ctx,n){
return text_num(ctx,val_mandala_height,9.0,((((pos_buffer_width + pos_border_width) + (n * (pos_mandala_height + pos_kusi_width))) + (pos_mandala_height / (2))) - (1)));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height))
;
var text_accumulate_horiz = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height){
return (function (ctx,m,k,b,c,x_offset){
return text_num(ctx,((((m * val_mandala_width) + (k * val_kusi_width)) + (b * val_border_width)) + (c * val_buffer_width)),(((((0.5 + x_offset) + (m * pos_mandala_width)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)),(99));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height))
;
var text_accumulate_vert = ((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_accumulate_horiz){
return (function (ctx,m,k,b,c,y_offset){
return text_num(ctx,((((m * val_mandala_height) + (k * val_kusi_width)) + (b * val_border_height)) + (c * val_buffer_width)),(226),(((((1.0 + y_offset) + (m * pos_mandala_height)) + (k * pos_kusi_width)) + (b * pos_border_width)) + (c * pos_buffer_width)));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_accumulate_horiz))
;
var canvas_dom = document.getElementById("sabong-pattern-canvas");
var monet_canvas = monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = monet.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
var _ = (img["src"] = "img/sabong-pattern.svg");
return monet.canvas.add_entity(monet_canvas,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_accumulate_horiz,text_accumulate_vert,canvas_dom,monet_canvas,ctx,img,_){
return (function (ctx__$1,val){
return text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_vert(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_accumulate_horiz(text_mandala_height(text_mandala_height(text_mandala_height(text_kusi_height(text_kusi_height(text_kusi_width(text_kusi_width(text_kusi_width(text_kusi_width(text_mandala_width(text_mandala_width(text_mandala_width(text_mandala_width(text_mandala_width(text_num(text_num(text_num(text_num(text_num(text_num(text(text_title(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx__$1,img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),title,"60px",(0),-8.0),["Cut Width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_width)),", Cut Height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.helpers.num_pad(val_cut_height))].join(''),50.0,-8.0),val_buffer_width,1.5,10.2),val_buffer_width,((pos_pattern_width - 2.5) - (1)),10.2),val_border_width,6.0,10.2),val_border_width,((pos_pattern_width - 7.5) - (1)),10.2),val_border_height,9.0,5.4),val_border_height,((pos_pattern_width - 11.0) - (1)),5.4),(0)),(1)),(2)),(3)),(4)),(0)),(1)),(2)),(3)),(0)),(1)),(0)),(1)),(2)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(3),(1),(1),(0)),(4),(3),(1),(1),(0)),(4),(4),(1),(1),(0)),(5),(4),(1),(1),(0)),(5),(4),(2),(1),-6.0),(5),(4),(2),(2),(0)),(0),(0),(0),(1),(0)),(0),(0),(1),(1),(0)),(1),(0),(1),(1),(0)),(1),(1),(1),(1),(0)),(2),(1),(1),(1),(0)),(2),(2),(1),(1),(0)),(3),(2),(1),(1),(0)),(3),(2),(2),(1),-6.0),(3),(2),(2),(2),(0));
});})(sabong,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_kusi_width,vec__16337,val_cut_width,val_cut_height,val_mandala_width,val_mandala_height,val_border_width,val_border_height,text,text_title,text_num,text_mandala_width,text_kusi_width,text_kusi_height,text_mandala_height,text_accumulate_horiz,text_accumulate_vert,canvas_dom,monet_canvas,ctx,img,_))
));
});
app.sabong.sabong_update = (function app$sabong$sabong_update(data){
app.helpers.render_markdown();

return app.sabong.draw_sabong_pattern(data);
});
app.sabong._LT_content_sabong_GT_ = (function app$sabong$_LT_content_sabong_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.sabong.sabong_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.sabong.sabong_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var sabong = cljs.core.cst$kw$sabong.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$sabong)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong-pattern"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong-pattern",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$pattern)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pattern_title"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$title)),":"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"pattern_title",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$title], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_width)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$width], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_height"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$final_DASH_height)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_height",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$height], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_width_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_width_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_width_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$shrink_DASH_percent_DASH_width], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_height_percent"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$shrinking_DASH_height_DASH_percent)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_height_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$shrink_DASH_percent_DASH_height], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"kusi_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$kusi)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"kusi_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$kusi_DASH_width], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"border_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$border)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"border_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$border_DASH_width], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"buffer_width"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.text.text(cljs.core.cst$kw$cutting_DASH_buffer)),":"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sabong),cljs.core.cst$kw$on_DASH_change,((function (sabong){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sabong,cljs.core.cst$kw$buffer_DASH_width], null),e.target.value);

return app.sabong.draw_sabong_pattern(data);
});})(sabong))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (sabong){
return (function (_){
return app.helpers.download_pdf(cljs.core.cst$kw$_SHARP_sabong_DASH_pattern_DASH_canvas,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sabong),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
});})(sabong))
], null),app.text.text(cljs.core.cst$kw$download_DASH_pdf)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note$render_DASH_markdown,app.text.text(cljs.core.cst$kw$robe_DASH_size_DASH_note)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sabong-pattern-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sabong-guide"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#sabong-guide",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$guide)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$render_DASH_markdown,app.text.text(cljs.core.cst$kw$sabong_DASH_guide)], null)], null)], null);
})], null));
});
