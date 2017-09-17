// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__7953__auto__ = elem.textContent;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__15196 = arguments.length;
switch (G__15196) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__15199 = arguments.length;
switch (G__15199) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__15203 = arguments.length;
switch (G__15203) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15201_SHARP_){
return !((p1__15201_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15217 = arguments.length;
var i__9123__auto___15218 = (0);
while(true){
if((i__9123__auto___15218 < len__9122__auto___15217)){
args__9129__auto__.push((arguments[i__9123__auto___15218]));

var G__15219 = (i__9123__auto___15218 + (1));
i__9123__auto___15218 = G__15219;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__15207_15220 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15208_15221 = null;
var count__15209_15222 = (0);
var i__15210_15223 = (0);
while(true){
if((i__15210_15223 < count__15209_15222)){
var vec__15211_15224 = chunk__15208_15221.cljs$core$IIndexed$_nth$arity$2(null,i__15210_15223);
var k_15225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211_15224,(0),null);
var v_15226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211_15224,(1),null);
style.setProperty(dommy.utils.as_str(k_15225),v_15226);

var G__15227 = seq__15207_15220;
var G__15228 = chunk__15208_15221;
var G__15229 = count__15209_15222;
var G__15230 = (i__15210_15223 + (1));
seq__15207_15220 = G__15227;
chunk__15208_15221 = G__15228;
count__15209_15222 = G__15229;
i__15210_15223 = G__15230;
continue;
} else {
var temp__4657__auto___15231 = cljs.core.seq(seq__15207_15220);
if(temp__4657__auto___15231){
var seq__15207_15232__$1 = temp__4657__auto___15231;
if(cljs.core.chunked_seq_QMARK_(seq__15207_15232__$1)){
var c__8792__auto___15233 = cljs.core.chunk_first(seq__15207_15232__$1);
var G__15234 = cljs.core.chunk_rest(seq__15207_15232__$1);
var G__15235 = c__8792__auto___15233;
var G__15236 = cljs.core.count(c__8792__auto___15233);
var G__15237 = (0);
seq__15207_15220 = G__15234;
chunk__15208_15221 = G__15235;
count__15209_15222 = G__15236;
i__15210_15223 = G__15237;
continue;
} else {
var vec__15214_15238 = cljs.core.first(seq__15207_15232__$1);
var k_15239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214_15238,(0),null);
var v_15240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15214_15238,(1),null);
style.setProperty(dommy.utils.as_str(k_15239),v_15240);

var G__15241 = cljs.core.next(seq__15207_15232__$1);
var G__15242 = null;
var G__15243 = (0);
var G__15244 = (0);
seq__15207_15220 = G__15241;
chunk__15208_15221 = G__15242;
count__15209_15222 = G__15243;
i__15210_15223 = G__15244;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15205){
var G__15206 = cljs.core.first(seq15205);
var seq15205__$1 = cljs.core.next(seq15205);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15206,seq15205__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15251 = arguments.length;
var i__9123__auto___15252 = (0);
while(true){
if((i__9123__auto___15252 < len__9122__auto___15251)){
args__9129__auto__.push((arguments[i__9123__auto___15252]));

var G__15253 = (i__9123__auto___15252 + (1));
i__9123__auto___15252 = G__15253;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__15247_15254 = cljs.core.seq(keywords);
var chunk__15248_15255 = null;
var count__15249_15256 = (0);
var i__15250_15257 = (0);
while(true){
if((i__15250_15257 < count__15249_15256)){
var kw_15258 = chunk__15248_15255.cljs$core$IIndexed$_nth$arity$2(null,i__15250_15257);
style.removeProperty(dommy.utils.as_str(kw_15258));

var G__15259 = seq__15247_15254;
var G__15260 = chunk__15248_15255;
var G__15261 = count__15249_15256;
var G__15262 = (i__15250_15257 + (1));
seq__15247_15254 = G__15259;
chunk__15248_15255 = G__15260;
count__15249_15256 = G__15261;
i__15250_15257 = G__15262;
continue;
} else {
var temp__4657__auto___15263 = cljs.core.seq(seq__15247_15254);
if(temp__4657__auto___15263){
var seq__15247_15264__$1 = temp__4657__auto___15263;
if(cljs.core.chunked_seq_QMARK_(seq__15247_15264__$1)){
var c__8792__auto___15265 = cljs.core.chunk_first(seq__15247_15264__$1);
var G__15266 = cljs.core.chunk_rest(seq__15247_15264__$1);
var G__15267 = c__8792__auto___15265;
var G__15268 = cljs.core.count(c__8792__auto___15265);
var G__15269 = (0);
seq__15247_15254 = G__15266;
chunk__15248_15255 = G__15267;
count__15249_15256 = G__15268;
i__15250_15257 = G__15269;
continue;
} else {
var kw_15270 = cljs.core.first(seq__15247_15264__$1);
style.removeProperty(dommy.utils.as_str(kw_15270));

var G__15271 = cljs.core.next(seq__15247_15264__$1);
var G__15272 = null;
var G__15273 = (0);
var G__15274 = (0);
seq__15247_15254 = G__15271;
chunk__15248_15255 = G__15272;
count__15249_15256 = G__15273;
i__15250_15257 = G__15274;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15245){
var G__15246 = cljs.core.first(seq15245);
var seq15245__$1 = cljs.core.next(seq15245);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15246,seq15245__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15287 = arguments.length;
var i__9123__auto___15288 = (0);
while(true){
if((i__9123__auto___15288 < len__9122__auto___15287)){
args__9129__auto__.push((arguments[i__9123__auto___15288]));

var G__15289 = (i__9123__auto___15288 + (1));
i__9123__auto___15288 = G__15289;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__15277_15290 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15278_15291 = null;
var count__15279_15292 = (0);
var i__15280_15293 = (0);
while(true){
if((i__15280_15293 < count__15279_15292)){
var vec__15281_15294 = chunk__15278_15291.cljs$core$IIndexed$_nth$arity$2(null,i__15280_15293);
var k_15295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281_15294,(0),null);
var v_15296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281_15294,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15295,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15296),"px"].join('')], 0));

var G__15297 = seq__15277_15290;
var G__15298 = chunk__15278_15291;
var G__15299 = count__15279_15292;
var G__15300 = (i__15280_15293 + (1));
seq__15277_15290 = G__15297;
chunk__15278_15291 = G__15298;
count__15279_15292 = G__15299;
i__15280_15293 = G__15300;
continue;
} else {
var temp__4657__auto___15301 = cljs.core.seq(seq__15277_15290);
if(temp__4657__auto___15301){
var seq__15277_15302__$1 = temp__4657__auto___15301;
if(cljs.core.chunked_seq_QMARK_(seq__15277_15302__$1)){
var c__8792__auto___15303 = cljs.core.chunk_first(seq__15277_15302__$1);
var G__15304 = cljs.core.chunk_rest(seq__15277_15302__$1);
var G__15305 = c__8792__auto___15303;
var G__15306 = cljs.core.count(c__8792__auto___15303);
var G__15307 = (0);
seq__15277_15290 = G__15304;
chunk__15278_15291 = G__15305;
count__15279_15292 = G__15306;
i__15280_15293 = G__15307;
continue;
} else {
var vec__15284_15308 = cljs.core.first(seq__15277_15302__$1);
var k_15309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284_15308,(0),null);
var v_15310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284_15308,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15309,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15310),"px"].join('')], 0));

var G__15311 = cljs.core.next(seq__15277_15302__$1);
var G__15312 = null;
var G__15313 = (0);
var G__15314 = (0);
seq__15277_15290 = G__15311;
chunk__15278_15291 = G__15312;
count__15279_15292 = G__15313;
i__15280_15293 = G__15314;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15275){
var G__15276 = cljs.core.first(seq15275);
var seq15275__$1 = cljs.core.next(seq15275);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15276,seq15275__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__15320 = arguments.length;
switch (G__15320) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15334 = arguments.length;
var i__9123__auto___15335 = (0);
while(true){
if((i__9123__auto___15335 < len__9122__auto___15334)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15335]));

var G__15336 = (i__9123__auto___15335 + (1));
i__9123__auto___15335 = G__15336;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9142__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__15321 = elem;
(G__15321[k__$1] = v);

return G__15321;
} else {
var G__15322 = elem;
G__15322.setAttribute(k__$1,v);

return G__15322;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__15323_15337 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15324_15338 = null;
var count__15325_15339 = (0);
var i__15326_15340 = (0);
while(true){
if((i__15326_15340 < count__15325_15339)){
var vec__15327_15341 = chunk__15324_15338.cljs$core$IIndexed$_nth$arity$2(null,i__15326_15340);
var k_15342__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15327_15341,(0),null);
var v_15343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15327_15341,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15342__$1,v_15343__$1);

var G__15344 = seq__15323_15337;
var G__15345 = chunk__15324_15338;
var G__15346 = count__15325_15339;
var G__15347 = (i__15326_15340 + (1));
seq__15323_15337 = G__15344;
chunk__15324_15338 = G__15345;
count__15325_15339 = G__15346;
i__15326_15340 = G__15347;
continue;
} else {
var temp__4657__auto___15348 = cljs.core.seq(seq__15323_15337);
if(temp__4657__auto___15348){
var seq__15323_15349__$1 = temp__4657__auto___15348;
if(cljs.core.chunked_seq_QMARK_(seq__15323_15349__$1)){
var c__8792__auto___15350 = cljs.core.chunk_first(seq__15323_15349__$1);
var G__15351 = cljs.core.chunk_rest(seq__15323_15349__$1);
var G__15352 = c__8792__auto___15350;
var G__15353 = cljs.core.count(c__8792__auto___15350);
var G__15354 = (0);
seq__15323_15337 = G__15351;
chunk__15324_15338 = G__15352;
count__15325_15339 = G__15353;
i__15326_15340 = G__15354;
continue;
} else {
var vec__15330_15355 = cljs.core.first(seq__15323_15349__$1);
var k_15356__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15330_15355,(0),null);
var v_15357__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15330_15355,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15356__$1,v_15357__$1);

var G__15358 = cljs.core.next(seq__15323_15349__$1);
var G__15359 = null;
var G__15360 = (0);
var G__15361 = (0);
seq__15323_15337 = G__15358;
chunk__15324_15338 = G__15359;
count__15325_15339 = G__15360;
i__15326_15340 = G__15361;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15316){
var G__15317 = cljs.core.first(seq15316);
var seq15316__$1 = cljs.core.next(seq15316);
var G__15318 = cljs.core.first(seq15316__$1);
var seq15316__$2 = cljs.core.next(seq15316__$1);
var G__15319 = cljs.core.first(seq15316__$2);
var seq15316__$3 = cljs.core.next(seq15316__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15317,G__15318,G__15319,seq15316__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15366 = arguments.length;
switch (G__15366) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15373 = arguments.length;
var i__9123__auto___15374 = (0);
while(true){
if((i__9123__auto___15374 < len__9122__auto___15373)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15374]));

var G__15375 = (i__9123__auto___15374 + (1));
i__9123__auto___15374 = G__15375;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_15376__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15367.cljs$core$IFn$_invoke$arity$1 ? fexpr__15367.cljs$core$IFn$_invoke$arity$1(k_15376__$1) : fexpr__15367.call(null,k_15376__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15376__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15368_15377 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15369_15378 = null;
var count__15370_15379 = (0);
var i__15371_15380 = (0);
while(true){
if((i__15371_15380 < count__15370_15379)){
var k_15381__$1 = chunk__15369_15378.cljs$core$IIndexed$_nth$arity$2(null,i__15371_15380);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15381__$1);

var G__15382 = seq__15368_15377;
var G__15383 = chunk__15369_15378;
var G__15384 = count__15370_15379;
var G__15385 = (i__15371_15380 + (1));
seq__15368_15377 = G__15382;
chunk__15369_15378 = G__15383;
count__15370_15379 = G__15384;
i__15371_15380 = G__15385;
continue;
} else {
var temp__4657__auto___15386 = cljs.core.seq(seq__15368_15377);
if(temp__4657__auto___15386){
var seq__15368_15387__$1 = temp__4657__auto___15386;
if(cljs.core.chunked_seq_QMARK_(seq__15368_15387__$1)){
var c__8792__auto___15388 = cljs.core.chunk_first(seq__15368_15387__$1);
var G__15389 = cljs.core.chunk_rest(seq__15368_15387__$1);
var G__15390 = c__8792__auto___15388;
var G__15391 = cljs.core.count(c__8792__auto___15388);
var G__15392 = (0);
seq__15368_15377 = G__15389;
chunk__15369_15378 = G__15390;
count__15370_15379 = G__15391;
i__15371_15380 = G__15392;
continue;
} else {
var k_15393__$1 = cljs.core.first(seq__15368_15387__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15393__$1);

var G__15394 = cljs.core.next(seq__15368_15387__$1);
var G__15395 = null;
var G__15396 = (0);
var G__15397 = (0);
seq__15368_15377 = G__15394;
chunk__15369_15378 = G__15395;
count__15370_15379 = G__15396;
i__15371_15380 = G__15397;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15363){
var G__15364 = cljs.core.first(seq15363);
var seq15363__$1 = cljs.core.next(seq15363);
var G__15365 = cljs.core.first(seq15363__$1);
var seq15363__$2 = cljs.core.next(seq15363__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15364,G__15365,seq15363__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15399 = arguments.length;
switch (G__15399) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__15405 = arguments.length;
switch (G__15405) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15419 = arguments.length;
var i__9123__auto___15420 = (0);
while(true){
if((i__9123__auto___15420 < len__9122__auto___15419)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15420]));

var G__15421 = (i__9123__auto___15420 + (1));
i__9123__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__4655__auto___15422 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15422)){
var class_list_15423 = temp__4655__auto___15422;
var seq__15406_15424 = cljs.core.seq(classes__$1);
var chunk__15407_15425 = null;
var count__15408_15426 = (0);
var i__15409_15427 = (0);
while(true){
if((i__15409_15427 < count__15408_15426)){
var c_15428 = chunk__15407_15425.cljs$core$IIndexed$_nth$arity$2(null,i__15409_15427);
class_list_15423.add(c_15428);

var G__15429 = seq__15406_15424;
var G__15430 = chunk__15407_15425;
var G__15431 = count__15408_15426;
var G__15432 = (i__15409_15427 + (1));
seq__15406_15424 = G__15429;
chunk__15407_15425 = G__15430;
count__15408_15426 = G__15431;
i__15409_15427 = G__15432;
continue;
} else {
var temp__4657__auto___15433 = cljs.core.seq(seq__15406_15424);
if(temp__4657__auto___15433){
var seq__15406_15434__$1 = temp__4657__auto___15433;
if(cljs.core.chunked_seq_QMARK_(seq__15406_15434__$1)){
var c__8792__auto___15435 = cljs.core.chunk_first(seq__15406_15434__$1);
var G__15436 = cljs.core.chunk_rest(seq__15406_15434__$1);
var G__15437 = c__8792__auto___15435;
var G__15438 = cljs.core.count(c__8792__auto___15435);
var G__15439 = (0);
seq__15406_15424 = G__15436;
chunk__15407_15425 = G__15437;
count__15408_15426 = G__15438;
i__15409_15427 = G__15439;
continue;
} else {
var c_15440 = cljs.core.first(seq__15406_15434__$1);
class_list_15423.add(c_15440);

var G__15441 = cljs.core.next(seq__15406_15434__$1);
var G__15442 = null;
var G__15443 = (0);
var G__15444 = (0);
seq__15406_15424 = G__15441;
chunk__15407_15425 = G__15442;
count__15408_15426 = G__15443;
i__15409_15427 = G__15444;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15410_15445 = cljs.core.seq(classes__$1);
var chunk__15411_15446 = null;
var count__15412_15447 = (0);
var i__15413_15448 = (0);
while(true){
if((i__15413_15448 < count__15412_15447)){
var c_15449 = chunk__15411_15446.cljs$core$IIndexed$_nth$arity$2(null,i__15413_15448);
var class_name_15450 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15450,c_15449))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15450 === ""))?c_15449:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15450)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15449)].join('')));
}

var G__15451 = seq__15410_15445;
var G__15452 = chunk__15411_15446;
var G__15453 = count__15412_15447;
var G__15454 = (i__15413_15448 + (1));
seq__15410_15445 = G__15451;
chunk__15411_15446 = G__15452;
count__15412_15447 = G__15453;
i__15413_15448 = G__15454;
continue;
} else {
var temp__4657__auto___15455 = cljs.core.seq(seq__15410_15445);
if(temp__4657__auto___15455){
var seq__15410_15456__$1 = temp__4657__auto___15455;
if(cljs.core.chunked_seq_QMARK_(seq__15410_15456__$1)){
var c__8792__auto___15457 = cljs.core.chunk_first(seq__15410_15456__$1);
var G__15458 = cljs.core.chunk_rest(seq__15410_15456__$1);
var G__15459 = c__8792__auto___15457;
var G__15460 = cljs.core.count(c__8792__auto___15457);
var G__15461 = (0);
seq__15410_15445 = G__15458;
chunk__15411_15446 = G__15459;
count__15412_15447 = G__15460;
i__15413_15448 = G__15461;
continue;
} else {
var c_15462 = cljs.core.first(seq__15410_15456__$1);
var class_name_15463 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15463,c_15462))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15463 === ""))?c_15462:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15463)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15462)].join('')));
}

var G__15464 = cljs.core.next(seq__15410_15456__$1);
var G__15465 = null;
var G__15466 = (0);
var G__15467 = (0);
seq__15410_15445 = G__15464;
chunk__15411_15446 = G__15465;
count__15412_15447 = G__15466;
i__15413_15448 = G__15467;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__15414_15468 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15415_15469 = null;
var count__15416_15470 = (0);
var i__15417_15471 = (0);
while(true){
if((i__15417_15471 < count__15416_15470)){
var c_15472 = chunk__15415_15469.cljs$core$IIndexed$_nth$arity$2(null,i__15417_15471);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15472);

var G__15473 = seq__15414_15468;
var G__15474 = chunk__15415_15469;
var G__15475 = count__15416_15470;
var G__15476 = (i__15417_15471 + (1));
seq__15414_15468 = G__15473;
chunk__15415_15469 = G__15474;
count__15416_15470 = G__15475;
i__15417_15471 = G__15476;
continue;
} else {
var temp__4657__auto___15477 = cljs.core.seq(seq__15414_15468);
if(temp__4657__auto___15477){
var seq__15414_15478__$1 = temp__4657__auto___15477;
if(cljs.core.chunked_seq_QMARK_(seq__15414_15478__$1)){
var c__8792__auto___15479 = cljs.core.chunk_first(seq__15414_15478__$1);
var G__15480 = cljs.core.chunk_rest(seq__15414_15478__$1);
var G__15481 = c__8792__auto___15479;
var G__15482 = cljs.core.count(c__8792__auto___15479);
var G__15483 = (0);
seq__15414_15468 = G__15480;
chunk__15415_15469 = G__15481;
count__15416_15470 = G__15482;
i__15417_15471 = G__15483;
continue;
} else {
var c_15484 = cljs.core.first(seq__15414_15478__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15484);

var G__15485 = cljs.core.next(seq__15414_15478__$1);
var G__15486 = null;
var G__15487 = (0);
var G__15488 = (0);
seq__15414_15468 = G__15485;
chunk__15415_15469 = G__15486;
count__15416_15470 = G__15487;
i__15417_15471 = G__15488;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15402){
var G__15403 = cljs.core.first(seq15402);
var seq15402__$1 = cljs.core.next(seq15402);
var G__15404 = cljs.core.first(seq15402__$1);
var seq15402__$2 = cljs.core.next(seq15402__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15403,G__15404,seq15402__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15493 = arguments.length;
switch (G__15493) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15499 = arguments.length;
var i__9123__auto___15500 = (0);
while(true){
if((i__9123__auto___15500 < len__9122__auto___15499)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15500]));

var G__15501 = (i__9123__auto___15500 + (1));
i__9123__auto___15500 = G__15501;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___15502 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15502)){
var class_list_15503 = temp__4655__auto___15502;
class_list_15503.remove(c__$1);
} else {
var class_name_15504 = dommy.core.class$(elem);
var new_class_name_15505 = dommy.utils.remove_class_str(class_name_15504,c__$1);
if((class_name_15504 === new_class_name_15505)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15505);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15494 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15495 = null;
var count__15496 = (0);
var i__15497 = (0);
while(true){
if((i__15497 < count__15496)){
var c = chunk__15495.cljs$core$IIndexed$_nth$arity$2(null,i__15497);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15506 = seq__15494;
var G__15507 = chunk__15495;
var G__15508 = count__15496;
var G__15509 = (i__15497 + (1));
seq__15494 = G__15506;
chunk__15495 = G__15507;
count__15496 = G__15508;
i__15497 = G__15509;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15494);
if(temp__4657__auto__){
var seq__15494__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15494__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15494__$1);
var G__15510 = cljs.core.chunk_rest(seq__15494__$1);
var G__15511 = c__8792__auto__;
var G__15512 = cljs.core.count(c__8792__auto__);
var G__15513 = (0);
seq__15494 = G__15510;
chunk__15495 = G__15511;
count__15496 = G__15512;
i__15497 = G__15513;
continue;
} else {
var c = cljs.core.first(seq__15494__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15514 = cljs.core.next(seq__15494__$1);
var G__15515 = null;
var G__15516 = (0);
var G__15517 = (0);
seq__15494 = G__15514;
chunk__15495 = G__15515;
count__15496 = G__15516;
i__15497 = G__15517;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15490){
var G__15491 = cljs.core.first(seq15490);
var seq15490__$1 = cljs.core.next(seq15490);
var G__15492 = cljs.core.first(seq15490__$1);
var seq15490__$2 = cljs.core.next(seq15490__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15491,G__15492,seq15490__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15519 = arguments.length;
switch (G__15519) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__4655__auto___15521 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15521)){
var class_list_15522 = temp__4655__auto___15521;
class_list_15522.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__15524 = arguments.length;
switch (G__15524) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__15527 = arguments.length;
switch (G__15527) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__15533 = arguments.length;
switch (G__15533) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15540 = arguments.length;
var i__9123__auto___15541 = (0);
while(true){
if((i__9123__auto___15541 < len__9122__auto___15540)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15541]));

var G__15542 = (i__9123__auto___15541 + (1));
i__9123__auto___15541 = G__15542;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15534 = parent;
G__15534.appendChild(child);

return G__15534;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15535_15543 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15536_15544 = null;
var count__15537_15545 = (0);
var i__15538_15546 = (0);
while(true){
if((i__15538_15546 < count__15537_15545)){
var c_15547 = chunk__15536_15544.cljs$core$IIndexed$_nth$arity$2(null,i__15538_15546);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15547);

var G__15548 = seq__15535_15543;
var G__15549 = chunk__15536_15544;
var G__15550 = count__15537_15545;
var G__15551 = (i__15538_15546 + (1));
seq__15535_15543 = G__15548;
chunk__15536_15544 = G__15549;
count__15537_15545 = G__15550;
i__15538_15546 = G__15551;
continue;
} else {
var temp__4657__auto___15552 = cljs.core.seq(seq__15535_15543);
if(temp__4657__auto___15552){
var seq__15535_15553__$1 = temp__4657__auto___15552;
if(cljs.core.chunked_seq_QMARK_(seq__15535_15553__$1)){
var c__8792__auto___15554 = cljs.core.chunk_first(seq__15535_15553__$1);
var G__15555 = cljs.core.chunk_rest(seq__15535_15553__$1);
var G__15556 = c__8792__auto___15554;
var G__15557 = cljs.core.count(c__8792__auto___15554);
var G__15558 = (0);
seq__15535_15543 = G__15555;
chunk__15536_15544 = G__15556;
count__15537_15545 = G__15557;
i__15538_15546 = G__15558;
continue;
} else {
var c_15559 = cljs.core.first(seq__15535_15553__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15559);

var G__15560 = cljs.core.next(seq__15535_15553__$1);
var G__15561 = null;
var G__15562 = (0);
var G__15563 = (0);
seq__15535_15543 = G__15560;
chunk__15536_15544 = G__15561;
count__15537_15545 = G__15562;
i__15538_15546 = G__15563;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15530){
var G__15531 = cljs.core.first(seq15530);
var seq15530__$1 = cljs.core.next(seq15530);
var G__15532 = cljs.core.first(seq15530__$1);
var seq15530__$2 = cljs.core.next(seq15530__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15531,G__15532,seq15530__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15568 = arguments.length;
switch (G__15568) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15575 = arguments.length;
var i__9123__auto___15576 = (0);
while(true){
if((i__9123__auto___15576 < len__9122__auto___15575)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15576]));

var G__15577 = (i__9123__auto___15576 + (1));
i__9123__auto___15576 = G__15577;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__15569 = parent;
G__15569.insertBefore(child,parent.firstChild);

return G__15569;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15570_15578 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15571_15579 = null;
var count__15572_15580 = (0);
var i__15573_15581 = (0);
while(true){
if((i__15573_15581 < count__15572_15580)){
var c_15582 = chunk__15571_15579.cljs$core$IIndexed$_nth$arity$2(null,i__15573_15581);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15582);

var G__15583 = seq__15570_15578;
var G__15584 = chunk__15571_15579;
var G__15585 = count__15572_15580;
var G__15586 = (i__15573_15581 + (1));
seq__15570_15578 = G__15583;
chunk__15571_15579 = G__15584;
count__15572_15580 = G__15585;
i__15573_15581 = G__15586;
continue;
} else {
var temp__4657__auto___15587 = cljs.core.seq(seq__15570_15578);
if(temp__4657__auto___15587){
var seq__15570_15588__$1 = temp__4657__auto___15587;
if(cljs.core.chunked_seq_QMARK_(seq__15570_15588__$1)){
var c__8792__auto___15589 = cljs.core.chunk_first(seq__15570_15588__$1);
var G__15590 = cljs.core.chunk_rest(seq__15570_15588__$1);
var G__15591 = c__8792__auto___15589;
var G__15592 = cljs.core.count(c__8792__auto___15589);
var G__15593 = (0);
seq__15570_15578 = G__15590;
chunk__15571_15579 = G__15591;
count__15572_15580 = G__15592;
i__15573_15581 = G__15593;
continue;
} else {
var c_15594 = cljs.core.first(seq__15570_15588__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15594);

var G__15595 = cljs.core.next(seq__15570_15588__$1);
var G__15596 = null;
var G__15597 = (0);
var G__15598 = (0);
seq__15570_15578 = G__15595;
chunk__15571_15579 = G__15596;
count__15572_15580 = G__15597;
i__15573_15581 = G__15598;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15565){
var G__15566 = cljs.core.first(seq15565);
var seq15565__$1 = cljs.core.next(seq15565);
var G__15567 = cljs.core.first(seq15565__$1);
var seq15565__$2 = cljs.core.next(seq15565__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15566,G__15567,seq15565__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___15599 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15599)){
var next_15600 = temp__4655__auto___15599;
dommy.core.insert_before_BANG_(elem,next_15600);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__15602 = arguments.length;
switch (G__15602) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__15603 = p;
G__15603.removeChild(elem);

return G__15603;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15605){
var vec__15606 = p__15605;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15606,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15606,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__7953__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__7941__auto__ = related_target;
if(cljs.core.truth_(and__7941__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__7941__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__15606,special_mouse_event,real_mouse_event))
});})(vec__15606,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__7941__auto__ = selected_target;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__7941__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__7953__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15612 = arguments.length;
var i__9123__auto___15613 = (0);
while(true){
if((i__9123__auto___15613 < len__9122__auto___15612)){
args__9129__auto__.push((arguments[i__9123__auto___15613]));

var G__15614 = (i__9123__auto___15613 + (1));
i__9123__auto___15613 = G__15614;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15609){
var G__15610 = cljs.core.first(seq15609);
var seq15609__$1 = cljs.core.next(seq15609);
var G__15611 = cljs.core.first(seq15609__$1);
var seq15609__$2 = cljs.core.next(seq15609__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15610,G__15611,seq15609__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15615 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15615.cljs$core$IFn$_invoke$arity$1 ? fexpr__15615.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15615.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15663 = arguments.length;
var i__9123__auto___15664 = (0);
while(true){
if((i__9123__auto___15664 < len__9122__auto___15663)){
args__9129__auto__.push((arguments[i__9123__auto___15664]));

var G__15665 = (i__9123__auto___15664 + (1));
i__9123__auto___15664 = G__15665;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__15618_15666 = dommy.core.elem_and_selector(elem_sel);
var elem_15667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15618_15666,(0),null);
var selector_15668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15618_15666,(1),null);
var seq__15621_15669 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15628_15670 = null;
var count__15629_15671 = (0);
var i__15630_15672 = (0);
while(true){
if((i__15630_15672 < count__15629_15671)){
var vec__15637_15673 = chunk__15628_15670.cljs$core$IIndexed$_nth$arity$2(null,i__15630_15672);
var orig_type_15674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637_15673,(0),null);
var f_15675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637_15673,(1),null);
var seq__15631_15676 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15674,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15674,cljs.core.identity])));
var chunk__15633_15677 = null;
var count__15634_15678 = (0);
var i__15635_15679 = (0);
while(true){
if((i__15635_15679 < count__15634_15678)){
var vec__15640_15680 = chunk__15633_15677.cljs$core$IIndexed$_nth$arity$2(null,i__15635_15679);
var actual_type_15681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15680,(0),null);
var factory_15682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15680,(1),null);
var canonical_f_15683 = (function (){var G__15644 = (factory_15682.cljs$core$IFn$_invoke$arity$1 ? factory_15682.cljs$core$IFn$_invoke$arity$1(f_15675) : factory_15682.call(null,f_15675));
var fexpr__15643 = (cljs.core.truth_(selector_15668)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15667,selector_15668):cljs.core.identity);
return (fexpr__15643.cljs$core$IFn$_invoke$arity$1 ? fexpr__15643.cljs$core$IFn$_invoke$arity$1(G__15644) : fexpr__15643.call(null,G__15644));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15667,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15668,actual_type_15681,f_15675], null),canonical_f_15683], 0));

if(cljs.core.truth_(elem_15667.addEventListener)){
elem_15667.addEventListener(cljs.core.name(actual_type_15681),canonical_f_15683);
} else {
elem_15667.attachEvent(cljs.core.name(actual_type_15681),canonical_f_15683);
}

var G__15684 = seq__15631_15676;
var G__15685 = chunk__15633_15677;
var G__15686 = count__15634_15678;
var G__15687 = (i__15635_15679 + (1));
seq__15631_15676 = G__15684;
chunk__15633_15677 = G__15685;
count__15634_15678 = G__15686;
i__15635_15679 = G__15687;
continue;
} else {
var temp__4657__auto___15688 = cljs.core.seq(seq__15631_15676);
if(temp__4657__auto___15688){
var seq__15631_15689__$1 = temp__4657__auto___15688;
if(cljs.core.chunked_seq_QMARK_(seq__15631_15689__$1)){
var c__8792__auto___15690 = cljs.core.chunk_first(seq__15631_15689__$1);
var G__15691 = cljs.core.chunk_rest(seq__15631_15689__$1);
var G__15692 = c__8792__auto___15690;
var G__15693 = cljs.core.count(c__8792__auto___15690);
var G__15694 = (0);
seq__15631_15676 = G__15691;
chunk__15633_15677 = G__15692;
count__15634_15678 = G__15693;
i__15635_15679 = G__15694;
continue;
} else {
var vec__15645_15695 = cljs.core.first(seq__15631_15689__$1);
var actual_type_15696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15645_15695,(0),null);
var factory_15697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15645_15695,(1),null);
var canonical_f_15698 = (function (){var G__15649 = (factory_15697.cljs$core$IFn$_invoke$arity$1 ? factory_15697.cljs$core$IFn$_invoke$arity$1(f_15675) : factory_15697.call(null,f_15675));
var fexpr__15648 = (cljs.core.truth_(selector_15668)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15667,selector_15668):cljs.core.identity);
return (fexpr__15648.cljs$core$IFn$_invoke$arity$1 ? fexpr__15648.cljs$core$IFn$_invoke$arity$1(G__15649) : fexpr__15648.call(null,G__15649));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15667,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15668,actual_type_15696,f_15675], null),canonical_f_15698], 0));

if(cljs.core.truth_(elem_15667.addEventListener)){
elem_15667.addEventListener(cljs.core.name(actual_type_15696),canonical_f_15698);
} else {
elem_15667.attachEvent(cljs.core.name(actual_type_15696),canonical_f_15698);
}

var G__15699 = cljs.core.next(seq__15631_15689__$1);
var G__15700 = null;
var G__15701 = (0);
var G__15702 = (0);
seq__15631_15676 = G__15699;
chunk__15633_15677 = G__15700;
count__15634_15678 = G__15701;
i__15635_15679 = G__15702;
continue;
}
} else {
}
}
break;
}

var G__15703 = seq__15621_15669;
var G__15704 = chunk__15628_15670;
var G__15705 = count__15629_15671;
var G__15706 = (i__15630_15672 + (1));
seq__15621_15669 = G__15703;
chunk__15628_15670 = G__15704;
count__15629_15671 = G__15705;
i__15630_15672 = G__15706;
continue;
} else {
var temp__4657__auto___15707 = cljs.core.seq(seq__15621_15669);
if(temp__4657__auto___15707){
var seq__15621_15708__$1 = temp__4657__auto___15707;
if(cljs.core.chunked_seq_QMARK_(seq__15621_15708__$1)){
var c__8792__auto___15709 = cljs.core.chunk_first(seq__15621_15708__$1);
var G__15710 = cljs.core.chunk_rest(seq__15621_15708__$1);
var G__15711 = c__8792__auto___15709;
var G__15712 = cljs.core.count(c__8792__auto___15709);
var G__15713 = (0);
seq__15621_15669 = G__15710;
chunk__15628_15670 = G__15711;
count__15629_15671 = G__15712;
i__15630_15672 = G__15713;
continue;
} else {
var vec__15650_15714 = cljs.core.first(seq__15621_15708__$1);
var orig_type_15715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650_15714,(0),null);
var f_15716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15650_15714,(1),null);
var seq__15622_15717 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15715,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15715,cljs.core.identity])));
var chunk__15624_15718 = null;
var count__15625_15719 = (0);
var i__15626_15720 = (0);
while(true){
if((i__15626_15720 < count__15625_15719)){
var vec__15653_15721 = chunk__15624_15718.cljs$core$IIndexed$_nth$arity$2(null,i__15626_15720);
var actual_type_15722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15653_15721,(0),null);
var factory_15723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15653_15721,(1),null);
var canonical_f_15724 = (function (){var G__15657 = (factory_15723.cljs$core$IFn$_invoke$arity$1 ? factory_15723.cljs$core$IFn$_invoke$arity$1(f_15716) : factory_15723.call(null,f_15716));
var fexpr__15656 = (cljs.core.truth_(selector_15668)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15667,selector_15668):cljs.core.identity);
return (fexpr__15656.cljs$core$IFn$_invoke$arity$1 ? fexpr__15656.cljs$core$IFn$_invoke$arity$1(G__15657) : fexpr__15656.call(null,G__15657));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15667,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15668,actual_type_15722,f_15716], null),canonical_f_15724], 0));

if(cljs.core.truth_(elem_15667.addEventListener)){
elem_15667.addEventListener(cljs.core.name(actual_type_15722),canonical_f_15724);
} else {
elem_15667.attachEvent(cljs.core.name(actual_type_15722),canonical_f_15724);
}

var G__15725 = seq__15622_15717;
var G__15726 = chunk__15624_15718;
var G__15727 = count__15625_15719;
var G__15728 = (i__15626_15720 + (1));
seq__15622_15717 = G__15725;
chunk__15624_15718 = G__15726;
count__15625_15719 = G__15727;
i__15626_15720 = G__15728;
continue;
} else {
var temp__4657__auto___15729__$1 = cljs.core.seq(seq__15622_15717);
if(temp__4657__auto___15729__$1){
var seq__15622_15730__$1 = temp__4657__auto___15729__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15622_15730__$1)){
var c__8792__auto___15731 = cljs.core.chunk_first(seq__15622_15730__$1);
var G__15732 = cljs.core.chunk_rest(seq__15622_15730__$1);
var G__15733 = c__8792__auto___15731;
var G__15734 = cljs.core.count(c__8792__auto___15731);
var G__15735 = (0);
seq__15622_15717 = G__15732;
chunk__15624_15718 = G__15733;
count__15625_15719 = G__15734;
i__15626_15720 = G__15735;
continue;
} else {
var vec__15658_15736 = cljs.core.first(seq__15622_15730__$1);
var actual_type_15737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15658_15736,(0),null);
var factory_15738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15658_15736,(1),null);
var canonical_f_15739 = (function (){var G__15662 = (factory_15738.cljs$core$IFn$_invoke$arity$1 ? factory_15738.cljs$core$IFn$_invoke$arity$1(f_15716) : factory_15738.call(null,f_15716));
var fexpr__15661 = (cljs.core.truth_(selector_15668)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15667,selector_15668):cljs.core.identity);
return (fexpr__15661.cljs$core$IFn$_invoke$arity$1 ? fexpr__15661.cljs$core$IFn$_invoke$arity$1(G__15662) : fexpr__15661.call(null,G__15662));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15667,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15668,actual_type_15737,f_15716], null),canonical_f_15739], 0));

if(cljs.core.truth_(elem_15667.addEventListener)){
elem_15667.addEventListener(cljs.core.name(actual_type_15737),canonical_f_15739);
} else {
elem_15667.attachEvent(cljs.core.name(actual_type_15737),canonical_f_15739);
}

var G__15740 = cljs.core.next(seq__15622_15730__$1);
var G__15741 = null;
var G__15742 = (0);
var G__15743 = (0);
seq__15622_15717 = G__15740;
chunk__15624_15718 = G__15741;
count__15625_15719 = G__15742;
i__15626_15720 = G__15743;
continue;
}
} else {
}
}
break;
}

var G__15744 = cljs.core.next(seq__15621_15708__$1);
var G__15745 = null;
var G__15746 = (0);
var G__15747 = (0);
seq__15621_15669 = G__15744;
chunk__15628_15670 = G__15745;
count__15629_15671 = G__15746;
i__15630_15672 = G__15747;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15616){
var G__15617 = cljs.core.first(seq15616);
var seq15616__$1 = cljs.core.next(seq15616);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15617,seq15616__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15787 = arguments.length;
var i__9123__auto___15788 = (0);
while(true){
if((i__9123__auto___15788 < len__9122__auto___15787)){
args__9129__auto__.push((arguments[i__9123__auto___15788]));

var G__15789 = (i__9123__auto___15788 + (1));
i__9123__auto___15788 = G__15789;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__15750_15790 = dommy.core.elem_and_selector(elem_sel);
var elem_15791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750_15790,(0),null);
var selector_15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15750_15790,(1),null);
var seq__15753_15793 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15760_15794 = null;
var count__15761_15795 = (0);
var i__15762_15796 = (0);
while(true){
if((i__15762_15796 < count__15761_15795)){
var vec__15769_15797 = chunk__15760_15794.cljs$core$IIndexed$_nth$arity$2(null,i__15762_15796);
var orig_type_15798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15769_15797,(0),null);
var f_15799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15769_15797,(1),null);
var seq__15763_15800 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15798,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15798,cljs.core.identity])));
var chunk__15765_15801 = null;
var count__15766_15802 = (0);
var i__15767_15803 = (0);
while(true){
if((i__15767_15803 < count__15766_15802)){
var vec__15772_15804 = chunk__15765_15801.cljs$core$IIndexed$_nth$arity$2(null,i__15767_15803);
var actual_type_15805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772_15804,(0),null);
var __15806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15772_15804,(1),null);
var keys_15807 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15792,actual_type_15805,f_15799], null);
var canonical_f_15808 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15791),keys_15807);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15791,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15807], 0));

if(cljs.core.truth_(elem_15791.removeEventListener)){
elem_15791.removeEventListener(cljs.core.name(actual_type_15805),canonical_f_15808);
} else {
elem_15791.detachEvent(cljs.core.name(actual_type_15805),canonical_f_15808);
}

var G__15809 = seq__15763_15800;
var G__15810 = chunk__15765_15801;
var G__15811 = count__15766_15802;
var G__15812 = (i__15767_15803 + (1));
seq__15763_15800 = G__15809;
chunk__15765_15801 = G__15810;
count__15766_15802 = G__15811;
i__15767_15803 = G__15812;
continue;
} else {
var temp__4657__auto___15813 = cljs.core.seq(seq__15763_15800);
if(temp__4657__auto___15813){
var seq__15763_15814__$1 = temp__4657__auto___15813;
if(cljs.core.chunked_seq_QMARK_(seq__15763_15814__$1)){
var c__8792__auto___15815 = cljs.core.chunk_first(seq__15763_15814__$1);
var G__15816 = cljs.core.chunk_rest(seq__15763_15814__$1);
var G__15817 = c__8792__auto___15815;
var G__15818 = cljs.core.count(c__8792__auto___15815);
var G__15819 = (0);
seq__15763_15800 = G__15816;
chunk__15765_15801 = G__15817;
count__15766_15802 = G__15818;
i__15767_15803 = G__15819;
continue;
} else {
var vec__15775_15820 = cljs.core.first(seq__15763_15814__$1);
var actual_type_15821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775_15820,(0),null);
var __15822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15775_15820,(1),null);
var keys_15823 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15792,actual_type_15821,f_15799], null);
var canonical_f_15824 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15791),keys_15823);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15791,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15823], 0));

if(cljs.core.truth_(elem_15791.removeEventListener)){
elem_15791.removeEventListener(cljs.core.name(actual_type_15821),canonical_f_15824);
} else {
elem_15791.detachEvent(cljs.core.name(actual_type_15821),canonical_f_15824);
}

var G__15825 = cljs.core.next(seq__15763_15814__$1);
var G__15826 = null;
var G__15827 = (0);
var G__15828 = (0);
seq__15763_15800 = G__15825;
chunk__15765_15801 = G__15826;
count__15766_15802 = G__15827;
i__15767_15803 = G__15828;
continue;
}
} else {
}
}
break;
}

var G__15829 = seq__15753_15793;
var G__15830 = chunk__15760_15794;
var G__15831 = count__15761_15795;
var G__15832 = (i__15762_15796 + (1));
seq__15753_15793 = G__15829;
chunk__15760_15794 = G__15830;
count__15761_15795 = G__15831;
i__15762_15796 = G__15832;
continue;
} else {
var temp__4657__auto___15833 = cljs.core.seq(seq__15753_15793);
if(temp__4657__auto___15833){
var seq__15753_15834__$1 = temp__4657__auto___15833;
if(cljs.core.chunked_seq_QMARK_(seq__15753_15834__$1)){
var c__8792__auto___15835 = cljs.core.chunk_first(seq__15753_15834__$1);
var G__15836 = cljs.core.chunk_rest(seq__15753_15834__$1);
var G__15837 = c__8792__auto___15835;
var G__15838 = cljs.core.count(c__8792__auto___15835);
var G__15839 = (0);
seq__15753_15793 = G__15836;
chunk__15760_15794 = G__15837;
count__15761_15795 = G__15838;
i__15762_15796 = G__15839;
continue;
} else {
var vec__15778_15840 = cljs.core.first(seq__15753_15834__$1);
var orig_type_15841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15778_15840,(0),null);
var f_15842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15778_15840,(1),null);
var seq__15754_15843 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15841,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15841,cljs.core.identity])));
var chunk__15756_15844 = null;
var count__15757_15845 = (0);
var i__15758_15846 = (0);
while(true){
if((i__15758_15846 < count__15757_15845)){
var vec__15781_15847 = chunk__15756_15844.cljs$core$IIndexed$_nth$arity$2(null,i__15758_15846);
var actual_type_15848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15781_15847,(0),null);
var __15849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15781_15847,(1),null);
var keys_15850 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15792,actual_type_15848,f_15842], null);
var canonical_f_15851 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15791),keys_15850);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15791,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15850], 0));

if(cljs.core.truth_(elem_15791.removeEventListener)){
elem_15791.removeEventListener(cljs.core.name(actual_type_15848),canonical_f_15851);
} else {
elem_15791.detachEvent(cljs.core.name(actual_type_15848),canonical_f_15851);
}

var G__15852 = seq__15754_15843;
var G__15853 = chunk__15756_15844;
var G__15854 = count__15757_15845;
var G__15855 = (i__15758_15846 + (1));
seq__15754_15843 = G__15852;
chunk__15756_15844 = G__15853;
count__15757_15845 = G__15854;
i__15758_15846 = G__15855;
continue;
} else {
var temp__4657__auto___15856__$1 = cljs.core.seq(seq__15754_15843);
if(temp__4657__auto___15856__$1){
var seq__15754_15857__$1 = temp__4657__auto___15856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15754_15857__$1)){
var c__8792__auto___15858 = cljs.core.chunk_first(seq__15754_15857__$1);
var G__15859 = cljs.core.chunk_rest(seq__15754_15857__$1);
var G__15860 = c__8792__auto___15858;
var G__15861 = cljs.core.count(c__8792__auto___15858);
var G__15862 = (0);
seq__15754_15843 = G__15859;
chunk__15756_15844 = G__15860;
count__15757_15845 = G__15861;
i__15758_15846 = G__15862;
continue;
} else {
var vec__15784_15863 = cljs.core.first(seq__15754_15857__$1);
var actual_type_15864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15863,(0),null);
var __15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15863,(1),null);
var keys_15866 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15792,actual_type_15864,f_15842], null);
var canonical_f_15867 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15791),keys_15866);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15791,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15866], 0));

if(cljs.core.truth_(elem_15791.removeEventListener)){
elem_15791.removeEventListener(cljs.core.name(actual_type_15864),canonical_f_15867);
} else {
elem_15791.detachEvent(cljs.core.name(actual_type_15864),canonical_f_15867);
}

var G__15868 = cljs.core.next(seq__15754_15857__$1);
var G__15869 = null;
var G__15870 = (0);
var G__15871 = (0);
seq__15754_15843 = G__15868;
chunk__15756_15844 = G__15869;
count__15757_15845 = G__15870;
i__15758_15846 = G__15871;
continue;
}
} else {
}
}
break;
}

var G__15872 = cljs.core.next(seq__15753_15834__$1);
var G__15873 = null;
var G__15874 = (0);
var G__15875 = (0);
seq__15753_15793 = G__15872;
chunk__15760_15794 = G__15873;
count__15761_15795 = G__15874;
i__15762_15796 = G__15875;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15748){
var G__15749 = cljs.core.first(seq15748);
var seq15748__$1 = cljs.core.next(seq15748);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15749,seq15748__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15891 = arguments.length;
var i__9123__auto___15892 = (0);
while(true){
if((i__9123__auto___15892 < len__9122__auto___15891)){
args__9129__auto__.push((arguments[i__9123__auto___15892]));

var G__15893 = (i__9123__auto___15892 + (1));
i__9123__auto___15892 = G__15893;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__15878_15894 = dommy.core.elem_and_selector(elem_sel);
var elem_15895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_15894,(0),null);
var selector_15896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15878_15894,(1),null);
var seq__15881_15897 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15882_15898 = null;
var count__15883_15899 = (0);
var i__15884_15900 = (0);
while(true){
if((i__15884_15900 < count__15883_15899)){
var vec__15885_15901 = chunk__15882_15898.cljs$core$IIndexed$_nth$arity$2(null,i__15884_15900);
var type_15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15885_15901,(0),null);
var f_15903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15885_15901,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15902,((function (seq__15881_15897,chunk__15882_15898,count__15883_15899,i__15884_15900,vec__15885_15901,type_15902,f_15903,vec__15878_15894,elem_15895,selector_15896){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15902,dommy$core$this_fn], 0));

return (f_15903.cljs$core$IFn$_invoke$arity$1 ? f_15903.cljs$core$IFn$_invoke$arity$1(e) : f_15903.call(null,e));
});})(seq__15881_15897,chunk__15882_15898,count__15883_15899,i__15884_15900,vec__15885_15901,type_15902,f_15903,vec__15878_15894,elem_15895,selector_15896))
], 0));

var G__15904 = seq__15881_15897;
var G__15905 = chunk__15882_15898;
var G__15906 = count__15883_15899;
var G__15907 = (i__15884_15900 + (1));
seq__15881_15897 = G__15904;
chunk__15882_15898 = G__15905;
count__15883_15899 = G__15906;
i__15884_15900 = G__15907;
continue;
} else {
var temp__4657__auto___15908 = cljs.core.seq(seq__15881_15897);
if(temp__4657__auto___15908){
var seq__15881_15909__$1 = temp__4657__auto___15908;
if(cljs.core.chunked_seq_QMARK_(seq__15881_15909__$1)){
var c__8792__auto___15910 = cljs.core.chunk_first(seq__15881_15909__$1);
var G__15911 = cljs.core.chunk_rest(seq__15881_15909__$1);
var G__15912 = c__8792__auto___15910;
var G__15913 = cljs.core.count(c__8792__auto___15910);
var G__15914 = (0);
seq__15881_15897 = G__15911;
chunk__15882_15898 = G__15912;
count__15883_15899 = G__15913;
i__15884_15900 = G__15914;
continue;
} else {
var vec__15888_15915 = cljs.core.first(seq__15881_15909__$1);
var type_15916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15888_15915,(0),null);
var f_15917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15888_15915,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15916,((function (seq__15881_15897,chunk__15882_15898,count__15883_15899,i__15884_15900,vec__15888_15915,type_15916,f_15917,seq__15881_15909__$1,temp__4657__auto___15908,vec__15878_15894,elem_15895,selector_15896){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15916,dommy$core$this_fn], 0));

return (f_15917.cljs$core$IFn$_invoke$arity$1 ? f_15917.cljs$core$IFn$_invoke$arity$1(e) : f_15917.call(null,e));
});})(seq__15881_15897,chunk__15882_15898,count__15883_15899,i__15884_15900,vec__15888_15915,type_15916,f_15917,seq__15881_15909__$1,temp__4657__auto___15908,vec__15878_15894,elem_15895,selector_15896))
], 0));

var G__15918 = cljs.core.next(seq__15881_15909__$1);
var G__15919 = null;
var G__15920 = (0);
var G__15921 = (0);
seq__15881_15897 = G__15918;
chunk__15882_15898 = G__15919;
count__15883_15899 = G__15920;
i__15884_15900 = G__15921;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15876){
var G__15877 = cljs.core.first(seq15876);
var seq15876__$1 = cljs.core.next(seq15876);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15877,seq15876__$1);
});

