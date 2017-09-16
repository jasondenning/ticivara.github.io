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
var G__15094 = arguments.length;
switch (G__15094) {
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
var G__15097 = arguments.length;
switch (G__15097) {
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
var G__15101 = arguments.length;
switch (G__15101) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15099_SHARP_){
return !((p1__15099_SHARP_ === base));
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
var len__9122__auto___15115 = arguments.length;
var i__9123__auto___15116 = (0);
while(true){
if((i__9123__auto___15116 < len__9122__auto___15115)){
args__9129__auto__.push((arguments[i__9123__auto___15116]));

var G__15117 = (i__9123__auto___15116 + (1));
i__9123__auto___15116 = G__15117;
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
var seq__15105_15118 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15106_15119 = null;
var count__15107_15120 = (0);
var i__15108_15121 = (0);
while(true){
if((i__15108_15121 < count__15107_15120)){
var vec__15109_15122 = chunk__15106_15119.cljs$core$IIndexed$_nth$arity$2(null,i__15108_15121);
var k_15123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109_15122,(0),null);
var v_15124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15109_15122,(1),null);
style.setProperty(dommy.utils.as_str(k_15123),v_15124);

var G__15125 = seq__15105_15118;
var G__15126 = chunk__15106_15119;
var G__15127 = count__15107_15120;
var G__15128 = (i__15108_15121 + (1));
seq__15105_15118 = G__15125;
chunk__15106_15119 = G__15126;
count__15107_15120 = G__15127;
i__15108_15121 = G__15128;
continue;
} else {
var temp__4657__auto___15129 = cljs.core.seq(seq__15105_15118);
if(temp__4657__auto___15129){
var seq__15105_15130__$1 = temp__4657__auto___15129;
if(cljs.core.chunked_seq_QMARK_(seq__15105_15130__$1)){
var c__8792__auto___15131 = cljs.core.chunk_first(seq__15105_15130__$1);
var G__15132 = cljs.core.chunk_rest(seq__15105_15130__$1);
var G__15133 = c__8792__auto___15131;
var G__15134 = cljs.core.count(c__8792__auto___15131);
var G__15135 = (0);
seq__15105_15118 = G__15132;
chunk__15106_15119 = G__15133;
count__15107_15120 = G__15134;
i__15108_15121 = G__15135;
continue;
} else {
var vec__15112_15136 = cljs.core.first(seq__15105_15130__$1);
var k_15137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112_15136,(0),null);
var v_15138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112_15136,(1),null);
style.setProperty(dommy.utils.as_str(k_15137),v_15138);

var G__15139 = cljs.core.next(seq__15105_15130__$1);
var G__15140 = null;
var G__15141 = (0);
var G__15142 = (0);
seq__15105_15118 = G__15139;
chunk__15106_15119 = G__15140;
count__15107_15120 = G__15141;
i__15108_15121 = G__15142;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first(seq15103);
var seq15103__$1 = cljs.core.next(seq15103);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15104,seq15103__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15149 = arguments.length;
var i__9123__auto___15150 = (0);
while(true){
if((i__9123__auto___15150 < len__9122__auto___15149)){
args__9129__auto__.push((arguments[i__9123__auto___15150]));

var G__15151 = (i__9123__auto___15150 + (1));
i__9123__auto___15150 = G__15151;
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
var seq__15145_15152 = cljs.core.seq(keywords);
var chunk__15146_15153 = null;
var count__15147_15154 = (0);
var i__15148_15155 = (0);
while(true){
if((i__15148_15155 < count__15147_15154)){
var kw_15156 = chunk__15146_15153.cljs$core$IIndexed$_nth$arity$2(null,i__15148_15155);
style.removeProperty(dommy.utils.as_str(kw_15156));

var G__15157 = seq__15145_15152;
var G__15158 = chunk__15146_15153;
var G__15159 = count__15147_15154;
var G__15160 = (i__15148_15155 + (1));
seq__15145_15152 = G__15157;
chunk__15146_15153 = G__15158;
count__15147_15154 = G__15159;
i__15148_15155 = G__15160;
continue;
} else {
var temp__4657__auto___15161 = cljs.core.seq(seq__15145_15152);
if(temp__4657__auto___15161){
var seq__15145_15162__$1 = temp__4657__auto___15161;
if(cljs.core.chunked_seq_QMARK_(seq__15145_15162__$1)){
var c__8792__auto___15163 = cljs.core.chunk_first(seq__15145_15162__$1);
var G__15164 = cljs.core.chunk_rest(seq__15145_15162__$1);
var G__15165 = c__8792__auto___15163;
var G__15166 = cljs.core.count(c__8792__auto___15163);
var G__15167 = (0);
seq__15145_15152 = G__15164;
chunk__15146_15153 = G__15165;
count__15147_15154 = G__15166;
i__15148_15155 = G__15167;
continue;
} else {
var kw_15168 = cljs.core.first(seq__15145_15162__$1);
style.removeProperty(dommy.utils.as_str(kw_15168));

var G__15169 = cljs.core.next(seq__15145_15162__$1);
var G__15170 = null;
var G__15171 = (0);
var G__15172 = (0);
seq__15145_15152 = G__15169;
chunk__15146_15153 = G__15170;
count__15147_15154 = G__15171;
i__15148_15155 = G__15172;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15143){
var G__15144 = cljs.core.first(seq15143);
var seq15143__$1 = cljs.core.next(seq15143);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15144,seq15143__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15185 = arguments.length;
var i__9123__auto___15186 = (0);
while(true){
if((i__9123__auto___15186 < len__9122__auto___15185)){
args__9129__auto__.push((arguments[i__9123__auto___15186]));

var G__15187 = (i__9123__auto___15186 + (1));
i__9123__auto___15186 = G__15187;
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

var seq__15175_15188 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15176_15189 = null;
var count__15177_15190 = (0);
var i__15178_15191 = (0);
while(true){
if((i__15178_15191 < count__15177_15190)){
var vec__15179_15192 = chunk__15176_15189.cljs$core$IIndexed$_nth$arity$2(null,i__15178_15191);
var k_15193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15179_15192,(0),null);
var v_15194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15179_15192,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15193,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15194),"px"].join('')], 0));

var G__15195 = seq__15175_15188;
var G__15196 = chunk__15176_15189;
var G__15197 = count__15177_15190;
var G__15198 = (i__15178_15191 + (1));
seq__15175_15188 = G__15195;
chunk__15176_15189 = G__15196;
count__15177_15190 = G__15197;
i__15178_15191 = G__15198;
continue;
} else {
var temp__4657__auto___15199 = cljs.core.seq(seq__15175_15188);
if(temp__4657__auto___15199){
var seq__15175_15200__$1 = temp__4657__auto___15199;
if(cljs.core.chunked_seq_QMARK_(seq__15175_15200__$1)){
var c__8792__auto___15201 = cljs.core.chunk_first(seq__15175_15200__$1);
var G__15202 = cljs.core.chunk_rest(seq__15175_15200__$1);
var G__15203 = c__8792__auto___15201;
var G__15204 = cljs.core.count(c__8792__auto___15201);
var G__15205 = (0);
seq__15175_15188 = G__15202;
chunk__15176_15189 = G__15203;
count__15177_15190 = G__15204;
i__15178_15191 = G__15205;
continue;
} else {
var vec__15182_15206 = cljs.core.first(seq__15175_15200__$1);
var k_15207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15182_15206,(0),null);
var v_15208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15182_15206,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15207,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15208),"px"].join('')], 0));

var G__15209 = cljs.core.next(seq__15175_15200__$1);
var G__15210 = null;
var G__15211 = (0);
var G__15212 = (0);
seq__15175_15188 = G__15209;
chunk__15176_15189 = G__15210;
count__15177_15190 = G__15211;
i__15178_15191 = G__15212;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15173){
var G__15174 = cljs.core.first(seq15173);
var seq15173__$1 = cljs.core.next(seq15173);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15174,seq15173__$1);
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
var G__15218 = arguments.length;
switch (G__15218) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15232 = arguments.length;
var i__9123__auto___15233 = (0);
while(true){
if((i__9123__auto___15233 < len__9122__auto___15232)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15233]));

var G__15234 = (i__9123__auto___15233 + (1));
i__9123__auto___15233 = G__15234;
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
var G__15219 = elem;
(G__15219[k__$1] = v);

return G__15219;
} else {
var G__15220 = elem;
G__15220.setAttribute(k__$1,v);

return G__15220;
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

var seq__15221_15235 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15222_15236 = null;
var count__15223_15237 = (0);
var i__15224_15238 = (0);
while(true){
if((i__15224_15238 < count__15223_15237)){
var vec__15225_15239 = chunk__15222_15236.cljs$core$IIndexed$_nth$arity$2(null,i__15224_15238);
var k_15240__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_15239,(0),null);
var v_15241__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15225_15239,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15240__$1,v_15241__$1);

var G__15242 = seq__15221_15235;
var G__15243 = chunk__15222_15236;
var G__15244 = count__15223_15237;
var G__15245 = (i__15224_15238 + (1));
seq__15221_15235 = G__15242;
chunk__15222_15236 = G__15243;
count__15223_15237 = G__15244;
i__15224_15238 = G__15245;
continue;
} else {
var temp__4657__auto___15246 = cljs.core.seq(seq__15221_15235);
if(temp__4657__auto___15246){
var seq__15221_15247__$1 = temp__4657__auto___15246;
if(cljs.core.chunked_seq_QMARK_(seq__15221_15247__$1)){
var c__8792__auto___15248 = cljs.core.chunk_first(seq__15221_15247__$1);
var G__15249 = cljs.core.chunk_rest(seq__15221_15247__$1);
var G__15250 = c__8792__auto___15248;
var G__15251 = cljs.core.count(c__8792__auto___15248);
var G__15252 = (0);
seq__15221_15235 = G__15249;
chunk__15222_15236 = G__15250;
count__15223_15237 = G__15251;
i__15224_15238 = G__15252;
continue;
} else {
var vec__15228_15253 = cljs.core.first(seq__15221_15247__$1);
var k_15254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15228_15253,(0),null);
var v_15255__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15228_15253,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15254__$1,v_15255__$1);

var G__15256 = cljs.core.next(seq__15221_15247__$1);
var G__15257 = null;
var G__15258 = (0);
var G__15259 = (0);
seq__15221_15235 = G__15256;
chunk__15222_15236 = G__15257;
count__15223_15237 = G__15258;
i__15224_15238 = G__15259;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15214){
var G__15215 = cljs.core.first(seq15214);
var seq15214__$1 = cljs.core.next(seq15214);
var G__15216 = cljs.core.first(seq15214__$1);
var seq15214__$2 = cljs.core.next(seq15214__$1);
var G__15217 = cljs.core.first(seq15214__$2);
var seq15214__$3 = cljs.core.next(seq15214__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15215,G__15216,G__15217,seq15214__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15264 = arguments.length;
switch (G__15264) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15271 = arguments.length;
var i__9123__auto___15272 = (0);
while(true){
if((i__9123__auto___15272 < len__9122__auto___15271)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15272]));

var G__15273 = (i__9123__auto___15272 + (1));
i__9123__auto___15272 = G__15273;
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
var k_15274__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15265.cljs$core$IFn$_invoke$arity$1 ? fexpr__15265.cljs$core$IFn$_invoke$arity$1(k_15274__$1) : fexpr__15265.call(null,k_15274__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15274__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15266_15275 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15267_15276 = null;
var count__15268_15277 = (0);
var i__15269_15278 = (0);
while(true){
if((i__15269_15278 < count__15268_15277)){
var k_15279__$1 = chunk__15267_15276.cljs$core$IIndexed$_nth$arity$2(null,i__15269_15278);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15279__$1);

var G__15280 = seq__15266_15275;
var G__15281 = chunk__15267_15276;
var G__15282 = count__15268_15277;
var G__15283 = (i__15269_15278 + (1));
seq__15266_15275 = G__15280;
chunk__15267_15276 = G__15281;
count__15268_15277 = G__15282;
i__15269_15278 = G__15283;
continue;
} else {
var temp__4657__auto___15284 = cljs.core.seq(seq__15266_15275);
if(temp__4657__auto___15284){
var seq__15266_15285__$1 = temp__4657__auto___15284;
if(cljs.core.chunked_seq_QMARK_(seq__15266_15285__$1)){
var c__8792__auto___15286 = cljs.core.chunk_first(seq__15266_15285__$1);
var G__15287 = cljs.core.chunk_rest(seq__15266_15285__$1);
var G__15288 = c__8792__auto___15286;
var G__15289 = cljs.core.count(c__8792__auto___15286);
var G__15290 = (0);
seq__15266_15275 = G__15287;
chunk__15267_15276 = G__15288;
count__15268_15277 = G__15289;
i__15269_15278 = G__15290;
continue;
} else {
var k_15291__$1 = cljs.core.first(seq__15266_15285__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15291__$1);

var G__15292 = cljs.core.next(seq__15266_15285__$1);
var G__15293 = null;
var G__15294 = (0);
var G__15295 = (0);
seq__15266_15275 = G__15292;
chunk__15267_15276 = G__15293;
count__15268_15277 = G__15294;
i__15269_15278 = G__15295;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15261){
var G__15262 = cljs.core.first(seq15261);
var seq15261__$1 = cljs.core.next(seq15261);
var G__15263 = cljs.core.first(seq15261__$1);
var seq15261__$2 = cljs.core.next(seq15261__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15262,G__15263,seq15261__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15297 = arguments.length;
switch (G__15297) {
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
var G__15303 = arguments.length;
switch (G__15303) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15317 = arguments.length;
var i__9123__auto___15318 = (0);
while(true){
if((i__9123__auto___15318 < len__9122__auto___15317)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15318]));

var G__15319 = (i__9123__auto___15318 + (1));
i__9123__auto___15318 = G__15319;
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
var temp__4655__auto___15320 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15320)){
var class_list_15321 = temp__4655__auto___15320;
var seq__15304_15322 = cljs.core.seq(classes__$1);
var chunk__15305_15323 = null;
var count__15306_15324 = (0);
var i__15307_15325 = (0);
while(true){
if((i__15307_15325 < count__15306_15324)){
var c_15326 = chunk__15305_15323.cljs$core$IIndexed$_nth$arity$2(null,i__15307_15325);
class_list_15321.add(c_15326);

var G__15327 = seq__15304_15322;
var G__15328 = chunk__15305_15323;
var G__15329 = count__15306_15324;
var G__15330 = (i__15307_15325 + (1));
seq__15304_15322 = G__15327;
chunk__15305_15323 = G__15328;
count__15306_15324 = G__15329;
i__15307_15325 = G__15330;
continue;
} else {
var temp__4657__auto___15331 = cljs.core.seq(seq__15304_15322);
if(temp__4657__auto___15331){
var seq__15304_15332__$1 = temp__4657__auto___15331;
if(cljs.core.chunked_seq_QMARK_(seq__15304_15332__$1)){
var c__8792__auto___15333 = cljs.core.chunk_first(seq__15304_15332__$1);
var G__15334 = cljs.core.chunk_rest(seq__15304_15332__$1);
var G__15335 = c__8792__auto___15333;
var G__15336 = cljs.core.count(c__8792__auto___15333);
var G__15337 = (0);
seq__15304_15322 = G__15334;
chunk__15305_15323 = G__15335;
count__15306_15324 = G__15336;
i__15307_15325 = G__15337;
continue;
} else {
var c_15338 = cljs.core.first(seq__15304_15332__$1);
class_list_15321.add(c_15338);

var G__15339 = cljs.core.next(seq__15304_15332__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__15304_15322 = G__15339;
chunk__15305_15323 = G__15340;
count__15306_15324 = G__15341;
i__15307_15325 = G__15342;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15308_15343 = cljs.core.seq(classes__$1);
var chunk__15309_15344 = null;
var count__15310_15345 = (0);
var i__15311_15346 = (0);
while(true){
if((i__15311_15346 < count__15310_15345)){
var c_15347 = chunk__15309_15344.cljs$core$IIndexed$_nth$arity$2(null,i__15311_15346);
var class_name_15348 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15348,c_15347))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15348 === ""))?c_15347:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15348)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15347)].join('')));
}

var G__15349 = seq__15308_15343;
var G__15350 = chunk__15309_15344;
var G__15351 = count__15310_15345;
var G__15352 = (i__15311_15346 + (1));
seq__15308_15343 = G__15349;
chunk__15309_15344 = G__15350;
count__15310_15345 = G__15351;
i__15311_15346 = G__15352;
continue;
} else {
var temp__4657__auto___15353 = cljs.core.seq(seq__15308_15343);
if(temp__4657__auto___15353){
var seq__15308_15354__$1 = temp__4657__auto___15353;
if(cljs.core.chunked_seq_QMARK_(seq__15308_15354__$1)){
var c__8792__auto___15355 = cljs.core.chunk_first(seq__15308_15354__$1);
var G__15356 = cljs.core.chunk_rest(seq__15308_15354__$1);
var G__15357 = c__8792__auto___15355;
var G__15358 = cljs.core.count(c__8792__auto___15355);
var G__15359 = (0);
seq__15308_15343 = G__15356;
chunk__15309_15344 = G__15357;
count__15310_15345 = G__15358;
i__15311_15346 = G__15359;
continue;
} else {
var c_15360 = cljs.core.first(seq__15308_15354__$1);
var class_name_15361 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15361,c_15360))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15361 === ""))?c_15360:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15361)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15360)].join('')));
}

var G__15362 = cljs.core.next(seq__15308_15354__$1);
var G__15363 = null;
var G__15364 = (0);
var G__15365 = (0);
seq__15308_15343 = G__15362;
chunk__15309_15344 = G__15363;
count__15310_15345 = G__15364;
i__15311_15346 = G__15365;
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
var seq__15312_15366 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15313_15367 = null;
var count__15314_15368 = (0);
var i__15315_15369 = (0);
while(true){
if((i__15315_15369 < count__15314_15368)){
var c_15370 = chunk__15313_15367.cljs$core$IIndexed$_nth$arity$2(null,i__15315_15369);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15370);

var G__15371 = seq__15312_15366;
var G__15372 = chunk__15313_15367;
var G__15373 = count__15314_15368;
var G__15374 = (i__15315_15369 + (1));
seq__15312_15366 = G__15371;
chunk__15313_15367 = G__15372;
count__15314_15368 = G__15373;
i__15315_15369 = G__15374;
continue;
} else {
var temp__4657__auto___15375 = cljs.core.seq(seq__15312_15366);
if(temp__4657__auto___15375){
var seq__15312_15376__$1 = temp__4657__auto___15375;
if(cljs.core.chunked_seq_QMARK_(seq__15312_15376__$1)){
var c__8792__auto___15377 = cljs.core.chunk_first(seq__15312_15376__$1);
var G__15378 = cljs.core.chunk_rest(seq__15312_15376__$1);
var G__15379 = c__8792__auto___15377;
var G__15380 = cljs.core.count(c__8792__auto___15377);
var G__15381 = (0);
seq__15312_15366 = G__15378;
chunk__15313_15367 = G__15379;
count__15314_15368 = G__15380;
i__15315_15369 = G__15381;
continue;
} else {
var c_15382 = cljs.core.first(seq__15312_15376__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15382);

var G__15383 = cljs.core.next(seq__15312_15376__$1);
var G__15384 = null;
var G__15385 = (0);
var G__15386 = (0);
seq__15312_15366 = G__15383;
chunk__15313_15367 = G__15384;
count__15314_15368 = G__15385;
i__15315_15369 = G__15386;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15300){
var G__15301 = cljs.core.first(seq15300);
var seq15300__$1 = cljs.core.next(seq15300);
var G__15302 = cljs.core.first(seq15300__$1);
var seq15300__$2 = cljs.core.next(seq15300__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15301,G__15302,seq15300__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15391 = arguments.length;
switch (G__15391) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15397 = arguments.length;
var i__9123__auto___15398 = (0);
while(true){
if((i__9123__auto___15398 < len__9122__auto___15397)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15398]));

var G__15399 = (i__9123__auto___15398 + (1));
i__9123__auto___15398 = G__15399;
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
var temp__4655__auto___15400 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15400)){
var class_list_15401 = temp__4655__auto___15400;
class_list_15401.remove(c__$1);
} else {
var class_name_15402 = dommy.core.class$(elem);
var new_class_name_15403 = dommy.utils.remove_class_str(class_name_15402,c__$1);
if((class_name_15402 === new_class_name_15403)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15403);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15392 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15393 = null;
var count__15394 = (0);
var i__15395 = (0);
while(true){
if((i__15395 < count__15394)){
var c = chunk__15393.cljs$core$IIndexed$_nth$arity$2(null,i__15395);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15404 = seq__15392;
var G__15405 = chunk__15393;
var G__15406 = count__15394;
var G__15407 = (i__15395 + (1));
seq__15392 = G__15404;
chunk__15393 = G__15405;
count__15394 = G__15406;
i__15395 = G__15407;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15392);
if(temp__4657__auto__){
var seq__15392__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15392__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15392__$1);
var G__15408 = cljs.core.chunk_rest(seq__15392__$1);
var G__15409 = c__8792__auto__;
var G__15410 = cljs.core.count(c__8792__auto__);
var G__15411 = (0);
seq__15392 = G__15408;
chunk__15393 = G__15409;
count__15394 = G__15410;
i__15395 = G__15411;
continue;
} else {
var c = cljs.core.first(seq__15392__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15412 = cljs.core.next(seq__15392__$1);
var G__15413 = null;
var G__15414 = (0);
var G__15415 = (0);
seq__15392 = G__15412;
chunk__15393 = G__15413;
count__15394 = G__15414;
i__15395 = G__15415;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15388){
var G__15389 = cljs.core.first(seq15388);
var seq15388__$1 = cljs.core.next(seq15388);
var G__15390 = cljs.core.first(seq15388__$1);
var seq15388__$2 = cljs.core.next(seq15388__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15389,G__15390,seq15388__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15417 = arguments.length;
switch (G__15417) {
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
var temp__4655__auto___15419 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15419)){
var class_list_15420 = temp__4655__auto___15419;
class_list_15420.toggle(c__$1);
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
var G__15422 = arguments.length;
switch (G__15422) {
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
var G__15425 = arguments.length;
switch (G__15425) {
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
var G__15431 = arguments.length;
switch (G__15431) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15438 = arguments.length;
var i__9123__auto___15439 = (0);
while(true){
if((i__9123__auto___15439 < len__9122__auto___15438)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15439]));

var G__15440 = (i__9123__auto___15439 + (1));
i__9123__auto___15439 = G__15440;
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
var G__15432 = parent;
G__15432.appendChild(child);

return G__15432;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15433_15441 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15434_15442 = null;
var count__15435_15443 = (0);
var i__15436_15444 = (0);
while(true){
if((i__15436_15444 < count__15435_15443)){
var c_15445 = chunk__15434_15442.cljs$core$IIndexed$_nth$arity$2(null,i__15436_15444);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15445);

var G__15446 = seq__15433_15441;
var G__15447 = chunk__15434_15442;
var G__15448 = count__15435_15443;
var G__15449 = (i__15436_15444 + (1));
seq__15433_15441 = G__15446;
chunk__15434_15442 = G__15447;
count__15435_15443 = G__15448;
i__15436_15444 = G__15449;
continue;
} else {
var temp__4657__auto___15450 = cljs.core.seq(seq__15433_15441);
if(temp__4657__auto___15450){
var seq__15433_15451__$1 = temp__4657__auto___15450;
if(cljs.core.chunked_seq_QMARK_(seq__15433_15451__$1)){
var c__8792__auto___15452 = cljs.core.chunk_first(seq__15433_15451__$1);
var G__15453 = cljs.core.chunk_rest(seq__15433_15451__$1);
var G__15454 = c__8792__auto___15452;
var G__15455 = cljs.core.count(c__8792__auto___15452);
var G__15456 = (0);
seq__15433_15441 = G__15453;
chunk__15434_15442 = G__15454;
count__15435_15443 = G__15455;
i__15436_15444 = G__15456;
continue;
} else {
var c_15457 = cljs.core.first(seq__15433_15451__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15457);

var G__15458 = cljs.core.next(seq__15433_15451__$1);
var G__15459 = null;
var G__15460 = (0);
var G__15461 = (0);
seq__15433_15441 = G__15458;
chunk__15434_15442 = G__15459;
count__15435_15443 = G__15460;
i__15436_15444 = G__15461;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15428){
var G__15429 = cljs.core.first(seq15428);
var seq15428__$1 = cljs.core.next(seq15428);
var G__15430 = cljs.core.first(seq15428__$1);
var seq15428__$2 = cljs.core.next(seq15428__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15429,G__15430,seq15428__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15473 = arguments.length;
var i__9123__auto___15474 = (0);
while(true){
if((i__9123__auto___15474 < len__9122__auto___15473)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15474]));

var G__15475 = (i__9123__auto___15474 + (1));
i__9123__auto___15474 = G__15475;
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
var G__15467 = parent;
G__15467.insertBefore(child,parent.firstChild);

return G__15467;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15468_15476 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15469_15477 = null;
var count__15470_15478 = (0);
var i__15471_15479 = (0);
while(true){
if((i__15471_15479 < count__15470_15478)){
var c_15480 = chunk__15469_15477.cljs$core$IIndexed$_nth$arity$2(null,i__15471_15479);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15480);

var G__15481 = seq__15468_15476;
var G__15482 = chunk__15469_15477;
var G__15483 = count__15470_15478;
var G__15484 = (i__15471_15479 + (1));
seq__15468_15476 = G__15481;
chunk__15469_15477 = G__15482;
count__15470_15478 = G__15483;
i__15471_15479 = G__15484;
continue;
} else {
var temp__4657__auto___15485 = cljs.core.seq(seq__15468_15476);
if(temp__4657__auto___15485){
var seq__15468_15486__$1 = temp__4657__auto___15485;
if(cljs.core.chunked_seq_QMARK_(seq__15468_15486__$1)){
var c__8792__auto___15487 = cljs.core.chunk_first(seq__15468_15486__$1);
var G__15488 = cljs.core.chunk_rest(seq__15468_15486__$1);
var G__15489 = c__8792__auto___15487;
var G__15490 = cljs.core.count(c__8792__auto___15487);
var G__15491 = (0);
seq__15468_15476 = G__15488;
chunk__15469_15477 = G__15489;
count__15470_15478 = G__15490;
i__15471_15479 = G__15491;
continue;
} else {
var c_15492 = cljs.core.first(seq__15468_15486__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15492);

var G__15493 = cljs.core.next(seq__15468_15486__$1);
var G__15494 = null;
var G__15495 = (0);
var G__15496 = (0);
seq__15468_15476 = G__15493;
chunk__15469_15477 = G__15494;
count__15470_15478 = G__15495;
i__15471_15479 = G__15496;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15463){
var G__15464 = cljs.core.first(seq15463);
var seq15463__$1 = cljs.core.next(seq15463);
var G__15465 = cljs.core.first(seq15463__$1);
var seq15463__$2 = cljs.core.next(seq15463__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15464,G__15465,seq15463__$2);
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
var temp__4655__auto___15497 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15497)){
var next_15498 = temp__4655__auto___15497;
dommy.core.insert_before_BANG_(elem,next_15498);
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
var G__15500 = arguments.length;
switch (G__15500) {
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
var G__15501 = p;
G__15501.removeChild(elem);

return G__15501;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15503){
var vec__15504 = p__15503;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15504,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15504,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15504,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15504,special_mouse_event,real_mouse_event){
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
;})(vec__15504,special_mouse_event,real_mouse_event))
});})(vec__15504,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15510 = arguments.length;
var i__9123__auto___15511 = (0);
while(true){
if((i__9123__auto___15511 < len__9122__auto___15510)){
args__9129__auto__.push((arguments[i__9123__auto___15511]));

var G__15512 = (i__9123__auto___15511 + (1));
i__9123__auto___15511 = G__15512;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15507){
var G__15508 = cljs.core.first(seq15507);
var seq15507__$1 = cljs.core.next(seq15507);
var G__15509 = cljs.core.first(seq15507__$1);
var seq15507__$2 = cljs.core.next(seq15507__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15508,G__15509,seq15507__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15513 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15513.cljs$core$IFn$_invoke$arity$1 ? fexpr__15513.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15513.call(null,elem_sel));
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
var len__9122__auto___15561 = arguments.length;
var i__9123__auto___15562 = (0);
while(true){
if((i__9123__auto___15562 < len__9122__auto___15561)){
args__9129__auto__.push((arguments[i__9123__auto___15562]));

var G__15563 = (i__9123__auto___15562 + (1));
i__9123__auto___15562 = G__15563;
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

var vec__15516_15564 = dommy.core.elem_and_selector(elem_sel);
var elem_15565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15516_15564,(0),null);
var selector_15566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15516_15564,(1),null);
var seq__15519_15567 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15526_15568 = null;
var count__15527_15569 = (0);
var i__15528_15570 = (0);
while(true){
if((i__15528_15570 < count__15527_15569)){
var vec__15535_15571 = chunk__15526_15568.cljs$core$IIndexed$_nth$arity$2(null,i__15528_15570);
var orig_type_15572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535_15571,(0),null);
var f_15573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15535_15571,(1),null);
var seq__15529_15574 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15572,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15572,cljs.core.identity])));
var chunk__15531_15575 = null;
var count__15532_15576 = (0);
var i__15533_15577 = (0);
while(true){
if((i__15533_15577 < count__15532_15576)){
var vec__15538_15578 = chunk__15531_15575.cljs$core$IIndexed$_nth$arity$2(null,i__15533_15577);
var actual_type_15579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538_15578,(0),null);
var factory_15580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15538_15578,(1),null);
var canonical_f_15581 = (function (){var G__15542 = (factory_15580.cljs$core$IFn$_invoke$arity$1 ? factory_15580.cljs$core$IFn$_invoke$arity$1(f_15573) : factory_15580.call(null,f_15573));
var fexpr__15541 = (cljs.core.truth_(selector_15566)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15565,selector_15566):cljs.core.identity);
return (fexpr__15541.cljs$core$IFn$_invoke$arity$1 ? fexpr__15541.cljs$core$IFn$_invoke$arity$1(G__15542) : fexpr__15541.call(null,G__15542));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15565,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15566,actual_type_15579,f_15573], null),canonical_f_15581], 0));

if(cljs.core.truth_(elem_15565.addEventListener)){
elem_15565.addEventListener(cljs.core.name(actual_type_15579),canonical_f_15581);
} else {
elem_15565.attachEvent(cljs.core.name(actual_type_15579),canonical_f_15581);
}

var G__15582 = seq__15529_15574;
var G__15583 = chunk__15531_15575;
var G__15584 = count__15532_15576;
var G__15585 = (i__15533_15577 + (1));
seq__15529_15574 = G__15582;
chunk__15531_15575 = G__15583;
count__15532_15576 = G__15584;
i__15533_15577 = G__15585;
continue;
} else {
var temp__4657__auto___15586 = cljs.core.seq(seq__15529_15574);
if(temp__4657__auto___15586){
var seq__15529_15587__$1 = temp__4657__auto___15586;
if(cljs.core.chunked_seq_QMARK_(seq__15529_15587__$1)){
var c__8792__auto___15588 = cljs.core.chunk_first(seq__15529_15587__$1);
var G__15589 = cljs.core.chunk_rest(seq__15529_15587__$1);
var G__15590 = c__8792__auto___15588;
var G__15591 = cljs.core.count(c__8792__auto___15588);
var G__15592 = (0);
seq__15529_15574 = G__15589;
chunk__15531_15575 = G__15590;
count__15532_15576 = G__15591;
i__15533_15577 = G__15592;
continue;
} else {
var vec__15543_15593 = cljs.core.first(seq__15529_15587__$1);
var actual_type_15594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543_15593,(0),null);
var factory_15595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15543_15593,(1),null);
var canonical_f_15596 = (function (){var G__15547 = (factory_15595.cljs$core$IFn$_invoke$arity$1 ? factory_15595.cljs$core$IFn$_invoke$arity$1(f_15573) : factory_15595.call(null,f_15573));
var fexpr__15546 = (cljs.core.truth_(selector_15566)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15565,selector_15566):cljs.core.identity);
return (fexpr__15546.cljs$core$IFn$_invoke$arity$1 ? fexpr__15546.cljs$core$IFn$_invoke$arity$1(G__15547) : fexpr__15546.call(null,G__15547));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15565,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15566,actual_type_15594,f_15573], null),canonical_f_15596], 0));

if(cljs.core.truth_(elem_15565.addEventListener)){
elem_15565.addEventListener(cljs.core.name(actual_type_15594),canonical_f_15596);
} else {
elem_15565.attachEvent(cljs.core.name(actual_type_15594),canonical_f_15596);
}

var G__15597 = cljs.core.next(seq__15529_15587__$1);
var G__15598 = null;
var G__15599 = (0);
var G__15600 = (0);
seq__15529_15574 = G__15597;
chunk__15531_15575 = G__15598;
count__15532_15576 = G__15599;
i__15533_15577 = G__15600;
continue;
}
} else {
}
}
break;
}

var G__15601 = seq__15519_15567;
var G__15602 = chunk__15526_15568;
var G__15603 = count__15527_15569;
var G__15604 = (i__15528_15570 + (1));
seq__15519_15567 = G__15601;
chunk__15526_15568 = G__15602;
count__15527_15569 = G__15603;
i__15528_15570 = G__15604;
continue;
} else {
var temp__4657__auto___15605 = cljs.core.seq(seq__15519_15567);
if(temp__4657__auto___15605){
var seq__15519_15606__$1 = temp__4657__auto___15605;
if(cljs.core.chunked_seq_QMARK_(seq__15519_15606__$1)){
var c__8792__auto___15607 = cljs.core.chunk_first(seq__15519_15606__$1);
var G__15608 = cljs.core.chunk_rest(seq__15519_15606__$1);
var G__15609 = c__8792__auto___15607;
var G__15610 = cljs.core.count(c__8792__auto___15607);
var G__15611 = (0);
seq__15519_15567 = G__15608;
chunk__15526_15568 = G__15609;
count__15527_15569 = G__15610;
i__15528_15570 = G__15611;
continue;
} else {
var vec__15548_15612 = cljs.core.first(seq__15519_15606__$1);
var orig_type_15613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15548_15612,(0),null);
var f_15614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15548_15612,(1),null);
var seq__15520_15615 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15613,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15613,cljs.core.identity])));
var chunk__15522_15616 = null;
var count__15523_15617 = (0);
var i__15524_15618 = (0);
while(true){
if((i__15524_15618 < count__15523_15617)){
var vec__15551_15619 = chunk__15522_15616.cljs$core$IIndexed$_nth$arity$2(null,i__15524_15618);
var actual_type_15620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551_15619,(0),null);
var factory_15621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15551_15619,(1),null);
var canonical_f_15622 = (function (){var G__15555 = (factory_15621.cljs$core$IFn$_invoke$arity$1 ? factory_15621.cljs$core$IFn$_invoke$arity$1(f_15614) : factory_15621.call(null,f_15614));
var fexpr__15554 = (cljs.core.truth_(selector_15566)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15565,selector_15566):cljs.core.identity);
return (fexpr__15554.cljs$core$IFn$_invoke$arity$1 ? fexpr__15554.cljs$core$IFn$_invoke$arity$1(G__15555) : fexpr__15554.call(null,G__15555));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15565,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15566,actual_type_15620,f_15614], null),canonical_f_15622], 0));

if(cljs.core.truth_(elem_15565.addEventListener)){
elem_15565.addEventListener(cljs.core.name(actual_type_15620),canonical_f_15622);
} else {
elem_15565.attachEvent(cljs.core.name(actual_type_15620),canonical_f_15622);
}

var G__15623 = seq__15520_15615;
var G__15624 = chunk__15522_15616;
var G__15625 = count__15523_15617;
var G__15626 = (i__15524_15618 + (1));
seq__15520_15615 = G__15623;
chunk__15522_15616 = G__15624;
count__15523_15617 = G__15625;
i__15524_15618 = G__15626;
continue;
} else {
var temp__4657__auto___15627__$1 = cljs.core.seq(seq__15520_15615);
if(temp__4657__auto___15627__$1){
var seq__15520_15628__$1 = temp__4657__auto___15627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15520_15628__$1)){
var c__8792__auto___15629 = cljs.core.chunk_first(seq__15520_15628__$1);
var G__15630 = cljs.core.chunk_rest(seq__15520_15628__$1);
var G__15631 = c__8792__auto___15629;
var G__15632 = cljs.core.count(c__8792__auto___15629);
var G__15633 = (0);
seq__15520_15615 = G__15630;
chunk__15522_15616 = G__15631;
count__15523_15617 = G__15632;
i__15524_15618 = G__15633;
continue;
} else {
var vec__15556_15634 = cljs.core.first(seq__15520_15628__$1);
var actual_type_15635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556_15634,(0),null);
var factory_15636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556_15634,(1),null);
var canonical_f_15637 = (function (){var G__15560 = (factory_15636.cljs$core$IFn$_invoke$arity$1 ? factory_15636.cljs$core$IFn$_invoke$arity$1(f_15614) : factory_15636.call(null,f_15614));
var fexpr__15559 = (cljs.core.truth_(selector_15566)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15565,selector_15566):cljs.core.identity);
return (fexpr__15559.cljs$core$IFn$_invoke$arity$1 ? fexpr__15559.cljs$core$IFn$_invoke$arity$1(G__15560) : fexpr__15559.call(null,G__15560));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15565,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15566,actual_type_15635,f_15614], null),canonical_f_15637], 0));

if(cljs.core.truth_(elem_15565.addEventListener)){
elem_15565.addEventListener(cljs.core.name(actual_type_15635),canonical_f_15637);
} else {
elem_15565.attachEvent(cljs.core.name(actual_type_15635),canonical_f_15637);
}

var G__15638 = cljs.core.next(seq__15520_15628__$1);
var G__15639 = null;
var G__15640 = (0);
var G__15641 = (0);
seq__15520_15615 = G__15638;
chunk__15522_15616 = G__15639;
count__15523_15617 = G__15640;
i__15524_15618 = G__15641;
continue;
}
} else {
}
}
break;
}

var G__15642 = cljs.core.next(seq__15519_15606__$1);
var G__15643 = null;
var G__15644 = (0);
var G__15645 = (0);
seq__15519_15567 = G__15642;
chunk__15526_15568 = G__15643;
count__15527_15569 = G__15644;
i__15528_15570 = G__15645;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15514){
var G__15515 = cljs.core.first(seq15514);
var seq15514__$1 = cljs.core.next(seq15514);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15515,seq15514__$1);
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
var len__9122__auto___15685 = arguments.length;
var i__9123__auto___15686 = (0);
while(true){
if((i__9123__auto___15686 < len__9122__auto___15685)){
args__9129__auto__.push((arguments[i__9123__auto___15686]));

var G__15687 = (i__9123__auto___15686 + (1));
i__9123__auto___15686 = G__15687;
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

var vec__15648_15688 = dommy.core.elem_and_selector(elem_sel);
var elem_15689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648_15688,(0),null);
var selector_15690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15648_15688,(1),null);
var seq__15651_15691 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15658_15692 = null;
var count__15659_15693 = (0);
var i__15660_15694 = (0);
while(true){
if((i__15660_15694 < count__15659_15693)){
var vec__15667_15695 = chunk__15658_15692.cljs$core$IIndexed$_nth$arity$2(null,i__15660_15694);
var orig_type_15696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15667_15695,(0),null);
var f_15697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15667_15695,(1),null);
var seq__15661_15698 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15696,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15696,cljs.core.identity])));
var chunk__15663_15699 = null;
var count__15664_15700 = (0);
var i__15665_15701 = (0);
while(true){
if((i__15665_15701 < count__15664_15700)){
var vec__15670_15702 = chunk__15663_15699.cljs$core$IIndexed$_nth$arity$2(null,i__15665_15701);
var actual_type_15703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670_15702,(0),null);
var __15704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15670_15702,(1),null);
var keys_15705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15690,actual_type_15703,f_15697], null);
var canonical_f_15706 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15689),keys_15705);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15689,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15705], 0));

if(cljs.core.truth_(elem_15689.removeEventListener)){
elem_15689.removeEventListener(cljs.core.name(actual_type_15703),canonical_f_15706);
} else {
elem_15689.detachEvent(cljs.core.name(actual_type_15703),canonical_f_15706);
}

var G__15707 = seq__15661_15698;
var G__15708 = chunk__15663_15699;
var G__15709 = count__15664_15700;
var G__15710 = (i__15665_15701 + (1));
seq__15661_15698 = G__15707;
chunk__15663_15699 = G__15708;
count__15664_15700 = G__15709;
i__15665_15701 = G__15710;
continue;
} else {
var temp__4657__auto___15711 = cljs.core.seq(seq__15661_15698);
if(temp__4657__auto___15711){
var seq__15661_15712__$1 = temp__4657__auto___15711;
if(cljs.core.chunked_seq_QMARK_(seq__15661_15712__$1)){
var c__8792__auto___15713 = cljs.core.chunk_first(seq__15661_15712__$1);
var G__15714 = cljs.core.chunk_rest(seq__15661_15712__$1);
var G__15715 = c__8792__auto___15713;
var G__15716 = cljs.core.count(c__8792__auto___15713);
var G__15717 = (0);
seq__15661_15698 = G__15714;
chunk__15663_15699 = G__15715;
count__15664_15700 = G__15716;
i__15665_15701 = G__15717;
continue;
} else {
var vec__15673_15718 = cljs.core.first(seq__15661_15712__$1);
var actual_type_15719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15673_15718,(0),null);
var __15720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15673_15718,(1),null);
var keys_15721 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15690,actual_type_15719,f_15697], null);
var canonical_f_15722 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15689),keys_15721);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15689,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15721], 0));

if(cljs.core.truth_(elem_15689.removeEventListener)){
elem_15689.removeEventListener(cljs.core.name(actual_type_15719),canonical_f_15722);
} else {
elem_15689.detachEvent(cljs.core.name(actual_type_15719),canonical_f_15722);
}

var G__15723 = cljs.core.next(seq__15661_15712__$1);
var G__15724 = null;
var G__15725 = (0);
var G__15726 = (0);
seq__15661_15698 = G__15723;
chunk__15663_15699 = G__15724;
count__15664_15700 = G__15725;
i__15665_15701 = G__15726;
continue;
}
} else {
}
}
break;
}

var G__15727 = seq__15651_15691;
var G__15728 = chunk__15658_15692;
var G__15729 = count__15659_15693;
var G__15730 = (i__15660_15694 + (1));
seq__15651_15691 = G__15727;
chunk__15658_15692 = G__15728;
count__15659_15693 = G__15729;
i__15660_15694 = G__15730;
continue;
} else {
var temp__4657__auto___15731 = cljs.core.seq(seq__15651_15691);
if(temp__4657__auto___15731){
var seq__15651_15732__$1 = temp__4657__auto___15731;
if(cljs.core.chunked_seq_QMARK_(seq__15651_15732__$1)){
var c__8792__auto___15733 = cljs.core.chunk_first(seq__15651_15732__$1);
var G__15734 = cljs.core.chunk_rest(seq__15651_15732__$1);
var G__15735 = c__8792__auto___15733;
var G__15736 = cljs.core.count(c__8792__auto___15733);
var G__15737 = (0);
seq__15651_15691 = G__15734;
chunk__15658_15692 = G__15735;
count__15659_15693 = G__15736;
i__15660_15694 = G__15737;
continue;
} else {
var vec__15676_15738 = cljs.core.first(seq__15651_15732__$1);
var orig_type_15739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676_15738,(0),null);
var f_15740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15676_15738,(1),null);
var seq__15652_15741 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15739,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15739,cljs.core.identity])));
var chunk__15654_15742 = null;
var count__15655_15743 = (0);
var i__15656_15744 = (0);
while(true){
if((i__15656_15744 < count__15655_15743)){
var vec__15679_15745 = chunk__15654_15742.cljs$core$IIndexed$_nth$arity$2(null,i__15656_15744);
var actual_type_15746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15679_15745,(0),null);
var __15747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15679_15745,(1),null);
var keys_15748 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15690,actual_type_15746,f_15740], null);
var canonical_f_15749 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15689),keys_15748);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15689,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15748], 0));

if(cljs.core.truth_(elem_15689.removeEventListener)){
elem_15689.removeEventListener(cljs.core.name(actual_type_15746),canonical_f_15749);
} else {
elem_15689.detachEvent(cljs.core.name(actual_type_15746),canonical_f_15749);
}

var G__15750 = seq__15652_15741;
var G__15751 = chunk__15654_15742;
var G__15752 = count__15655_15743;
var G__15753 = (i__15656_15744 + (1));
seq__15652_15741 = G__15750;
chunk__15654_15742 = G__15751;
count__15655_15743 = G__15752;
i__15656_15744 = G__15753;
continue;
} else {
var temp__4657__auto___15754__$1 = cljs.core.seq(seq__15652_15741);
if(temp__4657__auto___15754__$1){
var seq__15652_15755__$1 = temp__4657__auto___15754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15652_15755__$1)){
var c__8792__auto___15756 = cljs.core.chunk_first(seq__15652_15755__$1);
var G__15757 = cljs.core.chunk_rest(seq__15652_15755__$1);
var G__15758 = c__8792__auto___15756;
var G__15759 = cljs.core.count(c__8792__auto___15756);
var G__15760 = (0);
seq__15652_15741 = G__15757;
chunk__15654_15742 = G__15758;
count__15655_15743 = G__15759;
i__15656_15744 = G__15760;
continue;
} else {
var vec__15682_15761 = cljs.core.first(seq__15652_15755__$1);
var actual_type_15762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682_15761,(0),null);
var __15763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15682_15761,(1),null);
var keys_15764 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15690,actual_type_15762,f_15740], null);
var canonical_f_15765 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15689),keys_15764);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15689,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15764], 0));

if(cljs.core.truth_(elem_15689.removeEventListener)){
elem_15689.removeEventListener(cljs.core.name(actual_type_15762),canonical_f_15765);
} else {
elem_15689.detachEvent(cljs.core.name(actual_type_15762),canonical_f_15765);
}

var G__15766 = cljs.core.next(seq__15652_15755__$1);
var G__15767 = null;
var G__15768 = (0);
var G__15769 = (0);
seq__15652_15741 = G__15766;
chunk__15654_15742 = G__15767;
count__15655_15743 = G__15768;
i__15656_15744 = G__15769;
continue;
}
} else {
}
}
break;
}

var G__15770 = cljs.core.next(seq__15651_15732__$1);
var G__15771 = null;
var G__15772 = (0);
var G__15773 = (0);
seq__15651_15691 = G__15770;
chunk__15658_15692 = G__15771;
count__15659_15693 = G__15772;
i__15660_15694 = G__15773;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15646){
var G__15647 = cljs.core.first(seq15646);
var seq15646__$1 = cljs.core.next(seq15646);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15647,seq15646__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15789 = arguments.length;
var i__9123__auto___15790 = (0);
while(true){
if((i__9123__auto___15790 < len__9122__auto___15789)){
args__9129__auto__.push((arguments[i__9123__auto___15790]));

var G__15791 = (i__9123__auto___15790 + (1));
i__9123__auto___15790 = G__15791;
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

var vec__15776_15792 = dommy.core.elem_and_selector(elem_sel);
var elem_15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776_15792,(0),null);
var selector_15794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15776_15792,(1),null);
var seq__15779_15795 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15780_15796 = null;
var count__15781_15797 = (0);
var i__15782_15798 = (0);
while(true){
if((i__15782_15798 < count__15781_15797)){
var vec__15783_15799 = chunk__15780_15796.cljs$core$IIndexed$_nth$arity$2(null,i__15782_15798);
var type_15800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783_15799,(0),null);
var f_15801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15783_15799,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15800,((function (seq__15779_15795,chunk__15780_15796,count__15781_15797,i__15782_15798,vec__15783_15799,type_15800,f_15801,vec__15776_15792,elem_15793,selector_15794){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15800,dommy$core$this_fn], 0));

return (f_15801.cljs$core$IFn$_invoke$arity$1 ? f_15801.cljs$core$IFn$_invoke$arity$1(e) : f_15801.call(null,e));
});})(seq__15779_15795,chunk__15780_15796,count__15781_15797,i__15782_15798,vec__15783_15799,type_15800,f_15801,vec__15776_15792,elem_15793,selector_15794))
], 0));

var G__15802 = seq__15779_15795;
var G__15803 = chunk__15780_15796;
var G__15804 = count__15781_15797;
var G__15805 = (i__15782_15798 + (1));
seq__15779_15795 = G__15802;
chunk__15780_15796 = G__15803;
count__15781_15797 = G__15804;
i__15782_15798 = G__15805;
continue;
} else {
var temp__4657__auto___15806 = cljs.core.seq(seq__15779_15795);
if(temp__4657__auto___15806){
var seq__15779_15807__$1 = temp__4657__auto___15806;
if(cljs.core.chunked_seq_QMARK_(seq__15779_15807__$1)){
var c__8792__auto___15808 = cljs.core.chunk_first(seq__15779_15807__$1);
var G__15809 = cljs.core.chunk_rest(seq__15779_15807__$1);
var G__15810 = c__8792__auto___15808;
var G__15811 = cljs.core.count(c__8792__auto___15808);
var G__15812 = (0);
seq__15779_15795 = G__15809;
chunk__15780_15796 = G__15810;
count__15781_15797 = G__15811;
i__15782_15798 = G__15812;
continue;
} else {
var vec__15786_15813 = cljs.core.first(seq__15779_15807__$1);
var type_15814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15786_15813,(0),null);
var f_15815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15786_15813,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15814,((function (seq__15779_15795,chunk__15780_15796,count__15781_15797,i__15782_15798,vec__15786_15813,type_15814,f_15815,seq__15779_15807__$1,temp__4657__auto___15806,vec__15776_15792,elem_15793,selector_15794){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15814,dommy$core$this_fn], 0));

return (f_15815.cljs$core$IFn$_invoke$arity$1 ? f_15815.cljs$core$IFn$_invoke$arity$1(e) : f_15815.call(null,e));
});})(seq__15779_15795,chunk__15780_15796,count__15781_15797,i__15782_15798,vec__15786_15813,type_15814,f_15815,seq__15779_15807__$1,temp__4657__auto___15806,vec__15776_15792,elem_15793,selector_15794))
], 0));

var G__15816 = cljs.core.next(seq__15779_15807__$1);
var G__15817 = null;
var G__15818 = (0);
var G__15819 = (0);
seq__15779_15795 = G__15816;
chunk__15780_15796 = G__15817;
count__15781_15797 = G__15818;
i__15782_15798 = G__15819;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15774){
var G__15775 = cljs.core.first(seq15774);
var seq15774__$1 = cljs.core.next(seq15774);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15775,seq15774__$1);
});

