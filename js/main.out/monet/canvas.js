// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('monet.core');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name(type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
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
monet.canvas.transform = (function monet$canvas$transform(var_args){
var G__15825 = arguments.length;
switch (G__15825) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15826){
var map__15827 = p__15826;
var map__15827__$1 = ((((!((map__15827 == null)))?((((map__15827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15827):map__15827);
var m11 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$m11);
var m12 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$m12);
var m21 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$m21);
var m22 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$m22);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$dx);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15827__$1,cljs.core.cst$kw$dy);
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$lang$maxFixedArity = 7;

/**
 * Fills the subpaths with the current fill style.
 */
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Further constrains the clipping region to the current path.
 */
monet.canvas.clip = (function monet$canvas$clip(ctx){
ctx.clip();

return ctx;
});
/**
 * Path for a rectangle at position (x, y) with a size (w, h).
 */
monet.canvas.rect = (function monet$canvas$rect(ctx,p__15830){
var map__15831 = p__15830;
var map__15831__$1 = ((((!((map__15831 == null)))?((((map__15831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15831):map__15831);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15831__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15831__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15831__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15831__$1,cljs.core.cst$kw$h);
ctx.rect(x,y,w,h);

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__15833){
var map__15834 = p__15833;
var map__15834__$1 = ((((!((map__15834 == null)))?((((map__15834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15834):map__15834);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15834__$1,cljs.core.cst$kw$h);
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__15836){
var map__15837 = p__15836;
var map__15837__$1 = ((((!((map__15837 == null)))?((((map__15837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15837.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15837):map__15837);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15837__$1,cljs.core.cst$kw$h);
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__15839){
var map__15840 = p__15839;
var map__15840__$1 = ((((!((map__15840 == null)))?((((map__15840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15840):map__15840);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15840__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15840__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15840__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15840__$1,cljs.core.cst$kw$h);
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
monet.canvas.arc = (function monet$canvas$arc(ctx,p__15842){
var map__15843 = p__15842;
var map__15843__$1 = ((((!((map__15843 == null)))?((((map__15843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15843):map__15843);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$r);
var start_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$start_DASH_angle);
var end_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$end_DASH_angle);
var counter_clockwise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15843__$1,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_);
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
monet.canvas.ellipse = (function monet$canvas$ellipse(ctx,p__15845){
var map__15846 = p__15845;
var map__15846__$1 = ((((!((map__15846 == null)))?((((map__15846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15846.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15846):map__15846);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846__$1,cljs.core.cst$kw$y);
var rw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846__$1,cljs.core.cst$kw$rw);
var rh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15846__$1,cljs.core.cst$kw$rh);
return monet.canvas.restore(monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(monet.canvas.scale(monet.canvas.save(ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,rw,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,monet.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__15848){
var map__15849 = p__15848;
var map__15849__$1 = ((((!((map__15849 == null)))?((((map__15849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15849):map__15849);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15849__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15849__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15849__$1,cljs.core.cst$kw$r);
return monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(ctx),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,r,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,monet.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__15851){
var map__15852 = p__15851;
var map__15852__$1 = ((((!((map__15852 == null)))?((((map__15852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15852):map__15852);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15852__$1,cljs.core.cst$kw$text);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15852__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15852__$1,cljs.core.cst$kw$y);
ctx.fillText(text,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name(color);

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name(color);

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name(cap);

return ctx;
});
/**
 * Can be set, to change the line join style. Possible values (as string
 * or keyword): bevel, round, and miter. Other values are ignored.
 */
monet.canvas.stroke_join = (function monet$canvas$stroke_join(ctx,join){
ctx.lineJoin = cljs.core.name(join);

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
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
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name(operation);

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name(alignment);

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name(alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$red,(imgd[(0)]),cljs.core.cst$kw$green,(imgd[(1)]),cljs.core.cst$kw$blue,(imgd[(2)]),cljs.core.cst$kw$alpha,(imgd[(3)])], null);
});
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var G__15855 = arguments.length;
switch (G__15855) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__15856){
var map__15857 = p__15856;
var map__15857__$1 = ((((!((map__15857 == null)))?((((map__15857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15857):map__15857);
var params = map__15857__$1;
var sh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$sh);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$sw);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$y);
var dh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$dh);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$dx);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$w);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$sy);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$dy);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$h);
var dw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$dw);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15857__$1,cljs.core.cst$kw$sx);
var pred__15859_15863 = cljs.core._EQ_;
var expr__15860_15864 = cljs.core.count(params);
if(cljs.core.truth_((pred__15859_15863.cljs$core$IFn$_invoke$arity$2 ? pred__15859_15863.cljs$core$IFn$_invoke$arity$2((2),expr__15860_15864) : pred__15859_15863.call(null,(2),expr__15860_15864)))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_((pred__15859_15863.cljs$core$IFn$_invoke$arity$2 ? pred__15859_15863.cljs$core$IFn$_invoke$arity$2((4),expr__15860_15864) : pred__15859_15863.call(null,(4),expr__15860_15864)))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_((pred__15859_15863.cljs$core$IFn$_invoke$arity$2 ? pred__15859_15863.cljs$core$IFn$_invoke$arity$2((8),expr__15860_15864) : pred__15859_15863.call(null,(8),expr__15860_15864)))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15860_15864)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;

monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var G__15866 = arguments.length;
switch (G__15866) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15867){
var map__15868 = p__15867;
var map__15868__$1 = ((((!((map__15868 == null)))?((((map__15868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15868):map__15868);
var cpx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15868__$1,cljs.core.cst$kw$cpx);
var cpy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15868__$1,cljs.core.cst$kw$cpy);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15868__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15868__$1,cljs.core.cst$kw$y);
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;

monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var G__15872 = arguments.length;
switch (G__15872) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15873){
var map__15874 = p__15873;
var map__15874__$1 = ((((!((map__15874 == null)))?((((map__15874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15874):map__15874);
var cp1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$cp1x);
var cp1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$cp1y);
var cp2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$cp2x);
var cp2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$cp2y);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15874__$1,cljs.core.cst$kw$y);
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;

monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__15877){
var map__15878 = p__15877;
var map__15878__$1 = ((((!((map__15878 == null)))?((((map__15878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15878):map__15878);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$h);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15878__$1,cljs.core.cst$kw$r);

monet.canvas.stroke(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5(monet.canvas.line_to(monet.canvas.move_to(monet.canvas.begin_path(ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15884 = arguments.length;
var i__9123__auto___15885 = (0);
while(true){
if((i__9123__auto___15885 < len__9122__auto___15884)){
args__9129__auto__.push((arguments[i__9123__auto___15885]));

var G__15886 = (i__9123__auto___15885 + (1));
i__9123__auto___15885 = G__15886;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((3) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((3)),(0),null)):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9130__auto__);
});

monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(func,cur,extra);
return (cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

monet.canvas.update_entity.cljs$lang$maxFixedArity = (3);

monet.canvas.update_entity.cljs$lang$applyTo = (function (seq15880){
var G__15881 = cljs.core.first(seq15880);
var seq15880__$1 = cljs.core.next(seq15880);
var G__15882 = cljs.core.first(seq15880__$1);
var seq15880__$2 = cljs.core.next(seq15880__$1);
var G__15883 = cljs.core.first(seq15880__$2);
var seq15880__$3 = cljs.core.next(seq15880__$2);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__15881,G__15882,G__15883,seq15880__$3);
});

monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys(cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc));
var seq__15887 = cljs.core.seq(ks);
var chunk__15888 = null;
var count__15889 = (0);
var i__15890 = (0);
while(true){
if((i__15890 < count__15889)){
var k = chunk__15888.cljs$core$IIndexed$_nth$arity$2(null,i__15890);
monet.canvas.remove_entity(mc,k);

var G__15891 = seq__15887;
var G__15892 = chunk__15888;
var G__15893 = count__15889;
var G__15894 = (i__15890 + (1));
seq__15887 = G__15891;
chunk__15888 = G__15892;
count__15889 = G__15893;
i__15890 = G__15894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15887);
if(temp__4657__auto__){
var seq__15887__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15887__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15887__$1);
var G__15895 = cljs.core.chunk_rest(seq__15887__$1);
var G__15896 = c__8792__auto__;
var G__15897 = cljs.core.count(c__8792__auto__);
var G__15898 = (0);
seq__15887 = G__15895;
chunk__15888 = G__15896;
count__15889 = G__15897;
i__15890 = G__15898;
continue;
} else {
var k = cljs.core.first(seq__15887__$1);
monet.canvas.remove_entity(mc,k);

var G__15899 = cljs.core.next(seq__15887__$1);
var G__15900 = null;
var G__15901 = (0);
var G__15902 = (0);
seq__15887 = G__15899;
chunk__15888 = G__15900;
count__15889 = G__15901;
i__15890 = G__15902;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$draw,draw,cljs.core.cst$kw$update,update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__15903){
var map__15904 = p__15903;
var map__15904__$1 = ((((!((map__15904 == null)))?((((map__15904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15904):map__15904);
var mc = map__15904__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$canvas);
var updating_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$updating_QMARK_);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$ctx);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$active);
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$entities);
var last_frame_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15904__$1,cljs.core.cst$kw$last_DASH_frame_DASH_time);
monet.canvas.clear_rect(ctx,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,monet.canvas.attr(canvas,"width"),cljs.core.cst$kw$h,monet.canvas.attr(canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref(active))){
var ks_15914 = cljs.core.js_keys(entities);
var cnt_15915 = ks_15914.length;
var now_15916 = Date.now();
var dt_15917 = (now_15916 - cljs.core.deref(last_frame_time));
cljs.core.reset_BANG_(last_frame_time,now_15916);

var i_15918 = (0);
while(true){
if((i_15918 < cnt_15915)){
var k_15919 = (ks_15914[i_15918]);
var map__15906_15920 = (entities[k_15919]);
var map__15906_15921__$1 = ((((!((map__15906_15920 == null)))?((((map__15906_15920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15906_15920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15906_15920):map__15906_15920);
var ent_15922 = map__15906_15921__$1;
var draw_15923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906_15921__$1,cljs.core.cst$kw$draw);
var update_15924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906_15921__$1,cljs.core.cst$kw$update);
var value_15925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15906_15921__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__7941__auto__ = update_15924;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.deref(updating_QMARK_);
} else {
return and__7941__auto__;
}
})())){
var updated_15926 = (function (){var or__7953__auto__ = (function (){try{return (update_15924.cljs$core$IFn$_invoke$arity$2 ? update_15924.cljs$core$IFn$_invoke$arity$2(value_15925,dt_15917) : update_15924.call(null,value_15925,dt_15917));
}catch (e15909){if((e15909 instanceof Error)){
var e = e15909;
console.log(e);

return value_15925;
} else {
throw e15909;

}
}})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return value_15925;
}
})();
if(cljs.core.truth_((entities[k_15919]))){
(entities[k_15919] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent_15922,cljs.core.cst$kw$value,updated_15926));
} else {
}
} else {
}

if(cljs.core.truth_(draw_15923)){
try{var G__15911_15927 = ctx;
var G__15912_15928 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((entities[k_15919]));
(draw_15923.cljs$core$IFn$_invoke$arity$2 ? draw_15923.cljs$core$IFn$_invoke$arity$2(G__15911_15927,G__15912_15928) : draw_15923.call(null,G__15911_15927,G__15912_15928));
}catch (e15910){if((e15910 instanceof Error)){
var e_15929 = e15910;
console.log(e_15929);
} else {
throw e15910;

}
}} else {
}

var G__15930 = (i_15918 + (1));
i_15918 = G__15930;
continue;
} else {
}
break;
}

var G__15913 = ((function (map__15904,map__15904__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time){
return (function (){
return (monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1 ? monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1(mc) : monet.canvas.draw_loop.call(null,mc));
});})(map__15904,map__15904__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time))
;
return (monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__15913) : monet.core.animation_frame.call(null,G__15913));
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__7953__auto__ = context_type;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context(elem,ct);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$canvas,elem,cljs.core.cst$kw$ctx,ctx,cljs.core.cst$kw$last_DASH_frame_DASH_time,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(Date.now()),cljs.core.cst$kw$entities,{},cljs.core.cst$kw$updating_QMARK_,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true),cljs.core.cst$kw$active,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15939 = arguments.length;
var i__9123__auto___15940 = (0);
while(true){
if((i__9123__auto___15940 < len__9122__auto___15939)){
args__9129__auto__.push((arguments[i__9123__auto___15940]));

var G__15941 = (i__9123__auto___15940 + (1));
i__9123__auto___15940 = G__15941;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__15935){
var vec__15936 = p__15935;
var context_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15936,(0),null);
var mc = monet.canvas.monet_canvas(canvas,context_type);
monet.canvas.draw_loop(mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

monet.canvas.init.cljs$lang$applyTo = (function (seq15933){
var G__15934 = cljs.core.first(seq15933);
var seq15933__$1 = cljs.core.next(seq15933);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__15934,seq15933__$1);
});

monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_(cljs.core.cst$kw$updating_QMARK_.cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_(cljs.core.cst$kw$updating_QMARK_.cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_(cljs.core.cst$kw$active.cljs$core$IFn$_invoke$arity$1(mc),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$last_DASH_frame_DASH_time.cljs$core$IFn$_invoke$arity$1(mc),Date.now());

return monet.canvas.draw_loop(mc);
});
