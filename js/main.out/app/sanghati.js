// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.sanghati');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('monet.canvas');
goog.require('app.helpers');
goog.require('app.text');
app.sanghati.draw_guide = (function app$sanghati$draw_guide(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati);
var pos_pattern_width = (297);
var pos_pattern_height = (210);
var pos_buffer_width = 1.0;
var pos_border_width = 14.0;
var pos_kusi_width = 6.0;
var pos_mandala_width = 31.0;
var pos_mandala_height = 58.0;
var pattern_scale = 11.3;
var val_buffer_width = pos_buffer_width;
var val_inner_width = (function (){var G__18490 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18490);
})();
var val_inner_height = (function (){var G__18491 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati);
return Number(G__18491);
})();
var val_cut_width = (val_inner_width + ((2) * val_buffer_width));
var val_cut_height = (val_inner_height + ((2) * val_buffer_width));
var val_border_width = pos_border_width;
var val_kusi_width = pos_kusi_width;
var val_mandala_width = (((val_inner_width - ((2) * val_border_width)) - ((4) * val_kusi_width)) / (5));
var val_mandala_height = (((val_inner_height - ((2) * val_border_width)) - ((2) * val_kusi_width)) / (3));
var text = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = (x * sc);
var y__$1 = (y * sc);
monet.canvas.font_style(ctx,"30px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height))
;
var text_title = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = (x * sc);
var y__$1 = (y * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text))
;
var text_num = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title))
;
var vec__18487 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_canvas,"img/sanghati-guide.svg");
var canvas_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(0),null);
var img_guide = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18487,(1),null);
return monet.canvas.add_entity(canvas_guide,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,vec__18487,canvas_guide,img_guide){
return (function (ctx,val){
return text(text(text(text(text_title(monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_guide,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null)),title,"150px",(20),(20)),["Final width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_inner_width)].join(''),(20),45.0),["Final height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_inner_height)].join(''),(20),49.0),["Cut width: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_cut_width)].join(''),(20),54.0),["Cut height: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val_cut_height)].join(''),(20),58.0);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_buffer_width,pos_border_width,pos_kusi_width,pos_mandala_width,pos_mandala_height,pattern_scale,val_buffer_width,val_inner_width,val_inner_height,val_cut_width,val_cut_height,val_border_width,val_kusi_width,val_mandala_width,val_mandala_height,text,text_title,text_num,vec__18487,canvas_guide,img_guide))
));
});
app.sanghati.draw_panels_1 = (function app$sanghati$draw_panels_1(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati);
var pos_pattern_width = (270);
var pos_pattern_height = (140);
var pos_img_offset_x = (5);
var pos_img_offset_y = (5);
var pos_text_offset_x = (4.8 + pos_img_offset_x);
var pos_text_offset_y = (-0.7 + pos_img_offset_y);
var pattern_scale = 11.8;
var text = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,"24px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale))
;
var text_title = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text))
;
var text_num = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title))
;
var vec__18492 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,"img/sanghati-panels-1-2-3.svg");
var canvas_panels_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(0),null);
var img_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18492,(1),null);
return monet.canvas.add_entity(canvas_panels_1,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18492,canvas_panels_1,img_1){
return (function (ctx,val){
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_1,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18492,canvas_panels_1,img_1))
));
});
app.sanghati.draw_panels_4 = (function app$sanghati$draw_panels_4(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati);
var pos_pattern_width = (270);
var pos_pattern_height = (140);
var pos_img_offset_x = (5);
var pos_img_offset_y = (5);
var pos_text_offset_x = (4.8 + pos_img_offset_x);
var pos_text_offset_y = (-3.0 + pos_img_offset_y);
var pattern_scale = 11.8;
var text = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,"24px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale))
;
var text_title = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text))
;
var text_num = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title))
;
var vec__18495 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,"img/sanghati-panels-4-5-6.svg");
var canvas_panels_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(0),null);
var img_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18495,(1),null);
return monet.canvas.add_entity(canvas_panels_4,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18495,canvas_panels_4,img_4){
return (function (ctx,val){
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_4,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18495,canvas_panels_4,img_4))
));
});
app.sanghati.draw_panels_7 = (function app$sanghati$draw_panels_7(data){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati);
var pos_pattern_width = (270);
var pos_pattern_height = (140);
var pos_img_offset_x = (5);
var pos_img_offset_y = (5);
var pos_text_offset_x = (4.8 + pos_img_offset_x);
var pos_text_offset_y = (-0.7 + pos_img_offset_y);
var pattern_scale = 11.8;
var text = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale){
return (function (ctx,s,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,"24px \"Fira Sans\"");

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale))
;
var text_title = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text){
return (function (ctx,s,size,x,y){
var sc = pattern_scale;
var x__$1 = ((x + pos_text_offset_x) * sc);
var y__$1 = (((pos_pattern_height - y) + pos_text_offset_y) * sc);
monet.canvas.font_style(ctx,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)," \"Butler\""].join(''));

monet.canvas.fill_style(ctx,"#000000");

return monet.canvas.text(ctx,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,s,cljs.core.cst$kw$x,x__$1,cljs.core.cst$kw$y,y__$1], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text))
;
var text_num = ((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title){
return (function (ctx,s,x,y){
return text(ctx,app.helpers.num_pad(s),x,y);
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title))
;
var vec__18498 = app.helpers.init_canvas(cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas,"img/sanghati-panels-7-8-9.svg");
var canvas_panels_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(0),null);
var img_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498,(1),null);
return monet.canvas.add_entity(canvas_panels_7,cljs.core.cst$kw$background,monet.canvas.entity(null,null,((function (sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18498,canvas_panels_7,img_7){
return (function (ctx,val){
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3(ctx,img_7,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(pos_img_offset_x * pattern_scale),cljs.core.cst$kw$y,(pos_img_offset_y * pattern_scale),cljs.core.cst$kw$w,(pos_pattern_width * pattern_scale),cljs.core.cst$kw$h,(pos_pattern_height * pattern_scale)], null));
});})(sanghati,title,pos_pattern_width,pos_pattern_height,pos_img_offset_x,pos_img_offset_y,pos_text_offset_x,pos_text_offset_y,pattern_scale,text,text_title,text_num,vec__18498,canvas_panels_7,img_7))
));
});
app.sanghati.draw_sanghati_pattern = (function app$sanghati$draw_sanghati_pattern(data){
app.helpers.render_markdown();

app.sanghati.draw_guide(data);

app.sanghati.draw_panels_1(data);

app.sanghati.draw_panels_4(data);

return app.sanghati.draw_panels_7(data);
});
app.sanghati.sanghati_update = (function app$sanghati$sanghati_update(data){
app.helpers.render_markdown();

return app.sanghati.draw_sanghati_pattern(data);
});
app.sanghati._LT_content_sanghati_GT_ = (function app$sanghati$_LT_content_sanghati_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.sanghati.sanghati_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.sanghati.sanghati_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var sanghati = cljs.core.cst$kw$sanghati.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,app.text.text(cljs.core.cst$kw$sanghati)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati-pattern"], null),"Pattern"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"pattern_title"], null),"Title:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"pattern_title",cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$title], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_width"], null),"Final width:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"robe_height"], null),"Final height:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"robe_height",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$height], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_width_percent"], null),"Shrinking width percent:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_width_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$shrink_DASH_percent_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_8,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"shrinking_height_percent"], null),"Shrinking height percent:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"shrinking_height_percent",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$shrink_DASH_percent_DASH_height], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"kusi_width"], null),"Kusi:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"kusi_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$kusi_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"border_width"], null),"Border:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"border_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$border_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form$form_DASH_horizontal,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label$form_DASH_label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$for,"buffer_width"], null),"Buffer:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_6,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$form_DASH_input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"buffer_width",cljs.core.cst$kw$type,"number",cljs.core.cst$kw$value,cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(sanghati),cljs.core.cst$kw$on_DASH_change,((function (sanghati){
return (function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sanghati,cljs.core.cst$kw$buffer_DASH_width], null),e.target.value);

return app.sanghati.draw_sanghati_pattern(data);
});})(sanghati))
], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$btn$btn_DASH_primary,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (sanghati){
return (function (_){
return app.helpers.download_pdf_fourpage(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_SHARP_sanghati_DASH_guide_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_1_DASH_2_DASH_3_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_4_DASH_5_DASH_6_DASH_canvas,cljs.core.cst$kw$_SHARP_sanghati_DASH_panels_DASH_7_DASH_8_DASH_9_DASH_canvas], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(sanghati),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null));
});})(sanghati))
], null),"Download PDF"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col_DASH_5,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note$render_DASH_markdown,app.text.text(cljs.core.cst$kw$robe_DASH_size_DASH_note)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-guide-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-1-2-3-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-4-5-6-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$canvas$pattern,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"sanghati-panels-7-8-9-canvas",cljs.core.cst$kw$width,(3500),cljs.core.cst$kw$height,(2400)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"sanghati-guide"], null),"Guide"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$render_DASH_markdown,app.text.text(cljs.core.cst$kw$sanghati_DASH_guide)], null)], null)], null);
})], null));
});
