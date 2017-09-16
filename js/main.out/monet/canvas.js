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
var G__15436 = arguments.length;
switch (G__15436) {
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

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15437){
var map__15438 = p__15437;
var map__15438__$1 = ((((!((map__15438 == null)))?((((map__15438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15438.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15438):map__15438);
var m11 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$m11);
var m12 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$m12);
var m21 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$m21);
var m22 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$m22);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$dx);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15438__$1,cljs.core.cst$kw$dy);
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
monet.canvas.rect = (function monet$canvas$rect(ctx,p__15441){
var map__15442 = p__15441;
var map__15442__$1 = ((((!((map__15442 == null)))?((((map__15442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15442):map__15442);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15442__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15442__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15442__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15442__$1,cljs.core.cst$kw$h);
ctx.rect(x,y,w,h);

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__15444){
var map__15445 = p__15444;
var map__15445__$1 = ((((!((map__15445 == null)))?((((map__15445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15445):map__15445);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15445__$1,cljs.core.cst$kw$h);
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__15447){
var map__15448 = p__15447;
var map__15448__$1 = ((((!((map__15448 == null)))?((((map__15448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15448):map__15448);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$h);
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__15450){
var map__15451 = p__15450;
var map__15451__$1 = ((((!((map__15451 == null)))?((((map__15451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15451.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15451):map__15451);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15451__$1,cljs.core.cst$kw$h);
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
monet.canvas.arc = (function monet$canvas$arc(ctx,p__15453){
var map__15454 = p__15453;
var map__15454__$1 = ((((!((map__15454 == null)))?((((map__15454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15454):map__15454);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$r);
var start_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$start_DASH_angle);
var end_angle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$end_DASH_angle);
var counter_clockwise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15454__$1,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_);
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
monet.canvas.ellipse = (function monet$canvas$ellipse(ctx,p__15456){
var map__15457 = p__15456;
var map__15457__$1 = ((((!((map__15457 == null)))?((((map__15457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15457):map__15457);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$y);
var rw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$rw);
var rh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15457__$1,cljs.core.cst$kw$rh);
return monet.canvas.restore(monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(monet.canvas.scale(monet.canvas.save(ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,rw,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,monet.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__15459){
var map__15460 = p__15459;
var map__15460__$1 = ((((!((map__15460 == null)))?((((map__15460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15460):map__15460);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$y);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15460__$1,cljs.core.cst$kw$r);
return monet.canvas.close_path(monet.canvas.arc(monet.canvas.begin_path(ctx),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$x,x,cljs.core.cst$kw$y,y,cljs.core.cst$kw$r,r,cljs.core.cst$kw$start_DASH_angle,(0),cljs.core.cst$kw$end_DASH_angle,monet.canvas.two_pi,cljs.core.cst$kw$counter_DASH_clockwise_QMARK_,true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__15462){
var map__15463 = p__15462;
var map__15463__$1 = ((((!((map__15463 == null)))?((((map__15463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15463):map__15463);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$text);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15463__$1,cljs.core.cst$kw$y);
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
var G__15466 = arguments.length;
switch (G__15466) {
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

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__15467){
var map__15468 = p__15467;
var map__15468__$1 = ((((!((map__15468 == null)))?((((map__15468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15468.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15468):map__15468);
var params = map__15468__$1;
var sh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$sh);
var sw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$sw);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$y);
var dh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$dh);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$dx);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$w);
var sy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$sy);
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$dy);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$h);
var dw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$dw);
var sx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15468__$1,cljs.core.cst$kw$sx);
var pred__15470_15474 = cljs.core._EQ_;
var expr__15471_15475 = cljs.core.count(params);
if(cljs.core.truth_((pred__15470_15474.cljs$core$IFn$_invoke$arity$2 ? pred__15470_15474.cljs$core$IFn$_invoke$arity$2((2),expr__15471_15475) : pred__15470_15474.call(null,(2),expr__15471_15475)))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_((pred__15470_15474.cljs$core$IFn$_invoke$arity$2 ? pred__15470_15474.cljs$core$IFn$_invoke$arity$2((4),expr__15471_15475) : pred__15470_15474.call(null,(4),expr__15471_15475)))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_((pred__15470_15474.cljs$core$IFn$_invoke$arity$2 ? pred__15470_15474.cljs$core$IFn$_invoke$arity$2((8),expr__15471_15475) : pred__15470_15474.call(null,(8),expr__15471_15475)))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__15471_15475)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;

monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var G__15477 = arguments.length;
switch (G__15477) {
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

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15478){
var map__15479 = p__15478;
var map__15479__$1 = ((((!((map__15479 == null)))?((((map__15479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15479):map__15479);
var cpx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15479__$1,cljs.core.cst$kw$cpx);
var cpy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15479__$1,cljs.core.cst$kw$cpy);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15479__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15479__$1,cljs.core.cst$kw$y);
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;

monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var G__15483 = arguments.length;
switch (G__15483) {
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

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__15484){
var map__15485 = p__15484;
var map__15485__$1 = ((((!((map__15485 == null)))?((((map__15485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15485):map__15485);
var cp1x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$cp1x);
var cp1y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$cp1y);
var cp2x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$cp2x);
var cp2y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$cp2y);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15485__$1,cljs.core.cst$kw$y);
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;

monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__15488){
var map__15489 = p__15488;
var map__15489__$1 = ((((!((map__15489 == null)))?((((map__15489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15489):map__15489);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15489__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15489__$1,cljs.core.cst$kw$y);
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15489__$1,cljs.core.cst$kw$w);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15489__$1,cljs.core.cst$kw$h);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15489__$1,cljs.core.cst$kw$r);

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
var len__9122__auto___15495 = arguments.length;
var i__9123__auto___15496 = (0);
while(true){
if((i__9123__auto___15496 < len__9122__auto___15495)){
args__9129__auto__.push((arguments[i__9123__auto___15496]));

var G__15497 = (i__9123__auto___15496 + (1));
i__9123__auto___15496 = G__15497;
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

monet.canvas.update_entity.cljs$lang$applyTo = (function (seq15491){
var G__15492 = cljs.core.first(seq15491);
var seq15491__$1 = cljs.core.next(seq15491);
var G__15493 = cljs.core.first(seq15491__$1);
var seq15491__$2 = cljs.core.next(seq15491__$1);
var G__15494 = cljs.core.first(seq15491__$2);
var seq15491__$3 = cljs.core.next(seq15491__$2);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__15492,G__15493,G__15494,seq15491__$3);
});

monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys(cljs.core.cst$kw$entities.cljs$core$IFn$_invoke$arity$1(mc));
var seq__15498 = cljs.core.seq(ks);
var chunk__15499 = null;
var count__15500 = (0);
var i__15501 = (0);
while(true){
if((i__15501 < count__15500)){
var k = chunk__15499.cljs$core$IIndexed$_nth$arity$2(null,i__15501);
monet.canvas.remove_entity(mc,k);

var G__15502 = seq__15498;
var G__15503 = chunk__15499;
var G__15504 = count__15500;
var G__15505 = (i__15501 + (1));
seq__15498 = G__15502;
chunk__15499 = G__15503;
count__15500 = G__15504;
i__15501 = G__15505;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15498);
if(temp__4657__auto__){
var seq__15498__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15498__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15498__$1);
var G__15506 = cljs.core.chunk_rest(seq__15498__$1);
var G__15507 = c__8792__auto__;
var G__15508 = cljs.core.count(c__8792__auto__);
var G__15509 = (0);
seq__15498 = G__15506;
chunk__15499 = G__15507;
count__15500 = G__15508;
i__15501 = G__15509;
continue;
} else {
var k = cljs.core.first(seq__15498__$1);
monet.canvas.remove_entity(mc,k);

var G__15510 = cljs.core.next(seq__15498__$1);
var G__15511 = null;
var G__15512 = (0);
var G__15513 = (0);
seq__15498 = G__15510;
chunk__15499 = G__15511;
count__15500 = G__15512;
i__15501 = G__15513;
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
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__15514){
var map__15515 = p__15514;
var map__15515__$1 = ((((!((map__15515 == null)))?((((map__15515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15515):map__15515);
var mc = map__15515__$1;
var canvas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$canvas);
var updating_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$updating_QMARK_);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$ctx);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$active);
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$entities);
var last_frame_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15515__$1,cljs.core.cst$kw$last_DASH_frame_DASH_time);
monet.canvas.clear_rect(ctx,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$w,monet.canvas.attr(canvas,"width"),cljs.core.cst$kw$h,monet.canvas.attr(canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref(active))){
var ks_15525 = cljs.core.js_keys(entities);
var cnt_15526 = ks_15525.length;
var now_15527 = Date.now();
var dt_15528 = (now_15527 - cljs.core.deref(last_frame_time));
cljs.core.reset_BANG_(last_frame_time,now_15527);

var i_15529 = (0);
while(true){
if((i_15529 < cnt_15526)){
var k_15530 = (ks_15525[i_15529]);
var map__15517_15531 = (entities[k_15530]);
var map__15517_15532__$1 = ((((!((map__15517_15531 == null)))?((((map__15517_15531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15517_15531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15517_15531):map__15517_15531);
var ent_15533 = map__15517_15532__$1;
var draw_15534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517_15532__$1,cljs.core.cst$kw$draw);
var update_15535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517_15532__$1,cljs.core.cst$kw$update);
var value_15536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15517_15532__$1,cljs.core.cst$kw$value);
if(cljs.core.truth_((function (){var and__7941__auto__ = update_15535;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.deref(updating_QMARK_);
} else {
return and__7941__auto__;
}
})())){
var updated_15537 = (function (){var or__7953__auto__ = (function (){try{return (update_15535.cljs$core$IFn$_invoke$arity$2 ? update_15535.cljs$core$IFn$_invoke$arity$2(value_15536,dt_15528) : update_15535.call(null,value_15536,dt_15528));
}catch (e15520){if((e15520 instanceof Error)){
var e = e15520;
console.log(e);

return value_15536;
} else {
throw e15520;

}
}})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return value_15536;
}
})();
if(cljs.core.truth_((entities[k_15530]))){
(entities[k_15530] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ent_15533,cljs.core.cst$kw$value,updated_15537));
} else {
}
} else {
}

if(cljs.core.truth_(draw_15534)){
try{var G__15522_15538 = ctx;
var G__15523_15539 = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((entities[k_15530]));
(draw_15534.cljs$core$IFn$_invoke$arity$2 ? draw_15534.cljs$core$IFn$_invoke$arity$2(G__15522_15538,G__15523_15539) : draw_15534.call(null,G__15522_15538,G__15523_15539));
}catch (e15521){if((e15521 instanceof Error)){
var e_15540 = e15521;
console.log(e_15540);
} else {
throw e15521;

}
}} else {
}

var G__15541 = (i_15529 + (1));
i_15529 = G__15541;
continue;
} else {
}
break;
}

var G__15524 = ((function (map__15515,map__15515__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time){
return (function (){
return (monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1 ? monet.canvas.draw_loop.cljs$core$IFn$_invoke$arity$1(mc) : monet.canvas.draw_loop.call(null,mc));
});})(map__15515,map__15515__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time))
;
return (monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1 ? monet.core.animation_frame.cljs$core$IFn$_invoke$arity$1(G__15524) : monet.core.animation_frame.call(null,G__15524));
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
var len__9122__auto___15550 = arguments.length;
var i__9123__auto___15551 = (0);
while(true){
if((i__9123__auto___15551 < len__9122__auto___15550)){
args__9129__auto__.push((arguments[i__9123__auto___15551]));

var G__15552 = (i__9123__auto___15551 + (1));
i__9123__auto___15551 = G__15552;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__15546){
var vec__15547 = p__15546;
var context_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15547,(0),null);
var mc = monet.canvas.monet_canvas(canvas,context_type);
monet.canvas.draw_loop(mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

monet.canvas.init.cljs$lang$applyTo = (function (seq15544){
var G__15545 = cljs.core.first(seq15544);
var seq15544__$1 = cljs.core.next(seq15544);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__15545,seq15544__$1);
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
