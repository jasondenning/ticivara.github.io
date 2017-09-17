// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
app.canvas.get_context = (function app$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name(type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
app.canvas.begin_path = (function app$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
app.canvas.close_path = (function app$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
app.canvas.save = (function app$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
app.canvas.restore = (function app$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
app.canvas.rotate = (function app$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
app.canvas.scale = (function app$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
app.canvas.translate = (function app$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
app.canvas.transform = (function app$canvas$transform(var_args){
var G__14012 = arguments.length;
switch (G__14012) {
case 7:
return app.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return app.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

app.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__14013){
var map__14014 = p__14013;
var map__14014__$1 = ((((!((map__14014 == null)))?((((map__14014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14014.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14014):map__14014);
var m11 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$m11);
var m12 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$m12);
var m21 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$m21);
var m22 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$m22);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$dx);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14014__$1,cljs.core.cst$kw$dy);
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

app.canvas.transform.cljs$lang$maxFixedArity = 7;

/**
 * Fills the subpaths with the current fill style.
 */
app.canvas.fill = (function app$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
app.canvas.stroke = (function app$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Further constrains the clipping region to the current path.
 */
app.canvas.clip = (function app$canvas$clip(ctx){
ctx.clip();

return ctx;
});
/**
 * Path for a rectangle at position (x, y) with a size (w, h).
 */
app.canvas.rect = (function app$canvas$rect(ctx,p__14017){
var map__14018 = p__14017;
var map__14018__$1 = ((((!((map__14018 == null)))?((((map__14018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14018):map__14018);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,cljs.core.cst$kw$h);
ctx.rect(x,y,w,h);

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
app.canvas.clear_rect = (function app$canvas$clear_rect(ctx,p__14020){
var map__14021 = p__14020;
var map__14021__$1 = ((((!((map__14021 == null)))?((((map__14021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14021):map__14021);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14021__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14021__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14021__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14021__$1,cljs.core.cst$kw$h);
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
app.canvas.stroke_rect = (function app$canvas$stroke_rect(ctx,p__14023){
var map__14024 = p__14023;
var map__14024__$1 = ((((!((map__14024 == null)))?((((map__14024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14024):map__14024);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14024__$1,cljs.core.cst$kw$h);
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
app.canvas.fill_rect = (function app$canvas$fill_rect(ctx,p__14026){
var map__14027 = p__14026;
var map__14027__$1 = ((((!((map__14027 == null)))?((((map__14027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14027):map__14027);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14027__$1,cljs.core.cst$kw$h);
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
app.canvas.arc = (function app$canvas$arc(ctx,p__14029){
var map__14030 = p__14029;
var map__14030__$1 = ((((!((map__14030 == null)))?((((map__14030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14030.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14030):map__14030);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$r);
var start_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$start_DASH_angle);
var end_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$end_DASH_angle);
var counter_clockwise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_);
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
app.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
app.canvas.ellipse = (function app$canvas$ellipse(ctx,p__14032){
var map__14033 = p__14032;
var map__14033__$1 = ((((!((map__14033 == null)))?((((map__14033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14033):map__14033);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$y);
var rw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$rw);
var rh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14033__$1,cljs.core.cst$kw$rh);
return app.canvas.restore(app.canvas.close_path(app.canvas.arc(app.canvas.begin_path(app.canvas.scale(app.canvas.save(ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,rw,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,app.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
app.canvas.circle = (function app$canvas$circle(ctx,p__14035){
var map__14036 = p__14035;
var map__14036__$1 = ((((!((map__14036 == null)))?((((map__14036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14036):map__14036);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14036__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14036__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14036__$1,cljs.core.cst$kw$r);
return app.canvas.close_path(app.canvas.arc(app.canvas.begin_path(ctx),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,r,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,app.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
app.canvas.text = (function app$canvas$text(ctx,p__14038){
var map__14039 = p__14038;
var map__14039__$1 = ((((!((map__14039 == null)))?((((map__14039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14039):map__14039);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,cljs.core.cst$kw$text);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14039__$1,cljs.core.cst$kw$y);
ctx.fillText(text,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
app.canvas.font_style = (function app$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
app.canvas.fill_style = (function app$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name(color);

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
app.canvas.stroke_style = (function app$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name(color);

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
app.canvas.stroke_width = (function app$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
app.canvas.stroke_cap = (function app$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name(cap);

return ctx;
});
/**
 * Can be set, to change the line join style. Possible values (as string
 * or keyword): bevel, round, and miter. Other values are ignored.
 */
app.canvas.stroke_join = (function app$canvas$stroke_join(ctx,join){
ctx.lineJoin = cljs.core.name(join);

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
app.canvas.move_to = (function app$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
app.canvas.line_to = (function app$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
app.canvas.alpha = (function app$canvas$alpha(ctx,a){
ctx.globalAlpha = a;

return ctx;
});
/**
 * With Global Alpha applied this sets how shapes and images are drawn
 * onto the existing bitmap. Possible values (as string or keyword):
 * source-atop, source-in, source-out, source-over (default),
 * destination-atop, destination-in, destination-out, destination-over,
 * lighter, darker, copy, xor
 */
app.canvas.composition_operation = (function app$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name(operation);

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
app.canvas.text_align = (function app$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name(alignment);

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
app.canvas.text_baseline = (function app$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name(alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
app.canvas.get_pixel = (function app$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$red,(imgd[(0)]),cljs.core.cst$kw$green,(imgd[(1)]),cljs.core.cst$kw$blue,(imgd[(2)]),cljs.core.cst$kw$alpha,(imgd[(3)])], null);
});
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
app.canvas.draw_image = (function app$canvas$draw_image(var_args){
var G__14042 = arguments.length;
switch (G__14042) {
case 4:
return app.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

app.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__14043){
var map__14044 = p__14043;
var map__14044__$1 = ((((!((map__14044 == null)))?((((map__14044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14044):map__14044);
var params = map__14044__$1;
var sh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$sh);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$sw);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$y);
var dh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$dh);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$dx);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$w);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$sy);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$dy);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$h);
var dw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$dw);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14044__$1,cljs.core.cst$kw$sx);
var pred__14046_14050 = cljs.core._EQ_;
var expr__14047_14051 = cljs.core.count(params);
if(cljs.core.truth_((pred__14046_14050.cljs$core$IFn$_invoke$arity$2 ? pred__14046_14050.cljs$core$IFn$_invoke$arity$2((2),expr__14047_14051) : pred__14046_14050.call(null,(2),expr__14047_14051)))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_((pred__14046_14050.cljs$core$IFn$_invoke$arity$2 ? pred__14046_14050.cljs$core$IFn$_invoke$arity$2((4),expr__14047_14051) : pred__14046_14050.call(null,(4),expr__14047_14051)))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_((pred__14046_14050.cljs$core$IFn$_invoke$arity$2 ? pred__14046_14050.cljs$core$IFn$_invoke$arity$2((8),expr__14047_14051) : pred__14046_14050.call(null,(8),expr__14047_14051)))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__14047_14051)].join('')));
}
}
}

return ctx;
});

app.canvas.draw_image.cljs$lang$maxFixedArity = 4;

app.canvas.quadratic_curve_to = (function app$canvas$quadratic_curve_to(var_args){
var G__14053 = arguments.length;
switch (G__14053) {
case 5:
return app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__14054){
var map__14055 = p__14054;
var map__14055__$1 = ((((!((map__14055 == null)))?((((map__14055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14055):map__14055);
var cpx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14055__$1,cljs.core.cst$kw$cpx);
var cpy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14055__$1,cljs.core.cst$kw$cpy);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14055__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14055__$1,cljs.core.cst$kw$y);
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

app.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;

app.canvas.bezier_curve_to = (function app$canvas$bezier_curve_to(var_args){
var G__14059 = arguments.length;
switch (G__14059) {
case 7:
return app.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return app.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

app.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__14060){
var map__14061 = p__14060;
var map__14061__$1 = ((((!((map__14061 == null)))?((((map__14061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14061):map__14061);
var cp1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$cp1x);
var cp1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$cp1y);
var cp2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$cp2x);
var cp2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$cp2y);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14061__$1,cljs.core.cst$kw$y);
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

app.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;

app.canvas.rounded_rect = (function app$canvas$rounded_rect(ctx,p__14064){
var map__14065 = p__14064;
var map__14065__$1 = ((((!((map__14065 == null)))?((((map__14065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14065):map__14065);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$h);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14065__$1,cljs.core.cst$kw$r);

app.canvas.stroke(app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(app.canvas.line_to(app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(app.canvas.line_to(app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(app.canvas.line_to(app.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(app.canvas.line_to(app.canvas.move_to(app.canvas.begin_path(ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
app.canvas.add_entity = (function app$canvas$add_entity(mc,k,ent){
return (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
app.canvas.remove_entity = (function app$canvas$remove_entity(mc,k){
return delete cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k];
});
app.canvas.get_entity = (function app$canvas$get_entity(mc,k){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
app.canvas.update_entity = (function app$canvas$update_entity(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14071 = arguments.length;
var i__9123__auto___14072 = (0);
while(true){
if((i__9123__auto___14072 < len__9122__auto___14071)){
args__9129__auto__.push((arguments[i__9123__auto___14072]));

var G__14073 = (i__9123__auto___14072 + (1));
i__9123__auto___14072 = G__14073;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((3) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((3)),(0),null)):null);
return app.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9130__auto__);
});

app.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(func,cur,extra);
return (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

app.canvas.update_entity.cljs$lang$maxFixedArity = (3);

app.canvas.update_entity.cljs$lang$applyTo = (function (seq14067){
var G__14068 = cljs.core.first(seq14067);
var seq14067__$1 = cljs.core.next(seq14067);
var G__14069 = cljs.core.first(seq14067__$1);
var seq14067__$2 = cljs.core.next(seq14067__$1);
var G__14070 = cljs.core.first(seq14067__$2);
var seq14067__$3 = cljs.core.next(seq14067__$2);
return app.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__14068,G__14069,G__14070,seq14067__$3);
});

app.canvas.clear_BANG_ = (function app$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys(cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc));
var seq__14074 = cljs.core.seq(ks);
var chunk__14075 = null;
var count__14076 = (0);
var i__14077 = (0);
while(true){
if((i__14077 < count__14076)){
var k = chunk__14075.cljs$core$IIndexed$_nth$arity$2(null,i__14077);
app.canvas.remove_entity(mc,k);

var G__14078 = seq__14074;
var G__14079 = chunk__14075;
var G__14080 = count__14076;
var G__14081 = (i__14077 + (1));
seq__14074 = G__14078;
chunk__14075 = G__14079;
count__14076 = G__14080;
i__14077 = G__14081;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14074);
if(temp__4657__auto__){
var seq__14074__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14074__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__14074__$1);
var G__14082 = cljs.core.chunk_rest(seq__14074__$1);
var G__14083 = c__8792__auto__;
var G__14084 = cljs.core.count(c__8792__auto__);
var G__14085 = (0);
seq__14074 = G__14082;
chunk__14075 = G__14083;
count__14076 = G__14084;
i__14077 = G__14085;
continue;
} else {
var k = cljs.core.first(seq__14074__$1);
app.canvas.remove_entity(mc,k);

var G__14086 = cljs.core.next(seq__14074__$1);
var G__14087 = null;
var G__14088 = (0);
var G__14089 = (0);
seq__14074 = G__14086;
chunk__14075 = G__14087;
count__14076 = G__14088;
i__14077 = G__14089;
continue;
}
} else {
return null;
}
}
break;
}
});
app.canvas.entity = (function app$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$draw,draw,cljs.core.cst$kw$update,update], null);
});
app.canvas.attr = (function app$canvas$attr(e,a){
return e.getAttribute(a);
});
app.canvas.draw_once = (function app$canvas$draw_once(p__14090){
var map__14091 = p__14090;
var map__14091__$1 = ((((!((map__14091 == null)))?((((map__14091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14091.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14091):map__14091);
var mc = map__14091__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$canvas);
var updating_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$updating_QMARK_);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$ctx);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$active);
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$entities);
var last_frame_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14091__$1,cljs.core.cst$kw$last_DASH_frame_DASH_time);
app.canvas.clear_rect(ctx,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,app.canvas.attr(canvas,"width"),cljs.core.cst$kw$h,app.canvas.attr(canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref(active))){
var ks = cljs.core.js_keys(entities);
var cnt = ks.length;
var i = (0);
while(true){
if((i < cnt)){
var k = (ks[i]);
var map__14093 = (entities[k]);
var map__14093__$1 = ((((!((map__14093 == null)))?((((map__14093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14093.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14093):map__14093);
var ent = map__14093__$1;
var draw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,cljs.core.cst$kw$draw);
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,cljs.core.cst$kw$update);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_(draw)){
try{var G__14096_14098 = ctx;
var G__14097_14099 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((entities[k]));
(draw.cljs$core$IFn$_invoke$arity$2 ? draw.cljs$core$IFn$_invoke$arity$2(G__14096_14098,G__14097_14099) : draw.call(null,G__14096_14098,G__14097_14099));
}catch (e14095){if((e14095 instanceof Error)){
var e_14100 = e14095;
console.log(e_14100);
} else {
throw e14095;

}
}} else {
}

var G__14101 = (i + (1));
i = G__14101;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});
app.canvas.monet_canvas = (function app$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__7953__auto__ = context_type;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return "2d";
}
})();
var ctx = app.canvas.get_context(elem,ct);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$canvas,elem,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$last_DASH_frame_DASH_time,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now()),cljs.core.cst$kw$entities,{},cljs.core.cst$kw$updating_QMARK_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$active,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true)], null);
});
app.canvas.init = (function app$canvas$init(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14110 = arguments.length;
var i__9123__auto___14111 = (0);
while(true){
if((i__9123__auto___14111 < len__9122__auto___14110)){
args__9129__auto__.push((arguments[i__9123__auto___14111]));

var G__14112 = (i__9123__auto___14111 + (1));
i__9123__auto___14111 = G__14112;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return app.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

app.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__14106){
var vec__14107 = p__14106;
var context_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14107,(0),null);
var mc = app.canvas.monet_canvas(canvas,context_type);
app.canvas.draw_once(mc);

return mc;
});

app.canvas.init.cljs$lang$maxFixedArity = (1);

app.canvas.init.cljs$lang$applyTo = (function (seq14104){
var G__14105 = cljs.core.first(seq14104);
var seq14104__$1 = cljs.core.next(seq14104);
return app.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__14105,seq14104__$1);
});

