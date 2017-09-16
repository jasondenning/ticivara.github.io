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
var G__15092 = arguments.length;
switch (G__15092) {
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
var G__15095 = arguments.length;
switch (G__15095) {
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
var G__15099 = arguments.length;
switch (G__15099) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__15097_SHARP_){
return !((p1__15097_SHARP_ === base));
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
var len__9122__auto___15113 = arguments.length;
var i__9123__auto___15114 = (0);
while(true){
if((i__9123__auto___15114 < len__9122__auto___15113)){
args__9129__auto__.push((arguments[i__9123__auto___15114]));

var G__15115 = (i__9123__auto___15114 + (1));
i__9123__auto___15114 = G__15115;
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
var seq__15103_15116 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15104_15117 = null;
var count__15105_15118 = (0);
var i__15106_15119 = (0);
while(true){
if((i__15106_15119 < count__15105_15118)){
var vec__15107_15120 = chunk__15104_15117.cljs$core$IIndexed$_nth$arity$2(null,i__15106_15119);
var k_15121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15107_15120,(0),null);
var v_15122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15107_15120,(1),null);
style.setProperty(dommy.utils.as_str(k_15121),v_15122);

var G__15123 = seq__15103_15116;
var G__15124 = chunk__15104_15117;
var G__15125 = count__15105_15118;
var G__15126 = (i__15106_15119 + (1));
seq__15103_15116 = G__15123;
chunk__15104_15117 = G__15124;
count__15105_15118 = G__15125;
i__15106_15119 = G__15126;
continue;
} else {
var temp__4657__auto___15127 = cljs.core.seq(seq__15103_15116);
if(temp__4657__auto___15127){
var seq__15103_15128__$1 = temp__4657__auto___15127;
if(cljs.core.chunked_seq_QMARK_(seq__15103_15128__$1)){
var c__8792__auto___15129 = cljs.core.chunk_first(seq__15103_15128__$1);
var G__15130 = cljs.core.chunk_rest(seq__15103_15128__$1);
var G__15131 = c__8792__auto___15129;
var G__15132 = cljs.core.count(c__8792__auto___15129);
var G__15133 = (0);
seq__15103_15116 = G__15130;
chunk__15104_15117 = G__15131;
count__15105_15118 = G__15132;
i__15106_15119 = G__15133;
continue;
} else {
var vec__15110_15134 = cljs.core.first(seq__15103_15128__$1);
var k_15135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15110_15134,(0),null);
var v_15136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15110_15134,(1),null);
style.setProperty(dommy.utils.as_str(k_15135),v_15136);

var G__15137 = cljs.core.next(seq__15103_15128__$1);
var G__15138 = null;
var G__15139 = (0);
var G__15140 = (0);
seq__15103_15116 = G__15137;
chunk__15104_15117 = G__15138;
count__15105_15118 = G__15139;
i__15106_15119 = G__15140;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq15101){
var G__15102 = cljs.core.first(seq15101);
var seq15101__$1 = cljs.core.next(seq15101);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15102,seq15101__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15147 = arguments.length;
var i__9123__auto___15148 = (0);
while(true){
if((i__9123__auto___15148 < len__9122__auto___15147)){
args__9129__auto__.push((arguments[i__9123__auto___15148]));

var G__15149 = (i__9123__auto___15148 + (1));
i__9123__auto___15148 = G__15149;
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
var seq__15143_15150 = cljs.core.seq(keywords);
var chunk__15144_15151 = null;
var count__15145_15152 = (0);
var i__15146_15153 = (0);
while(true){
if((i__15146_15153 < count__15145_15152)){
var kw_15154 = chunk__15144_15151.cljs$core$IIndexed$_nth$arity$2(null,i__15146_15153);
style.removeProperty(dommy.utils.as_str(kw_15154));

var G__15155 = seq__15143_15150;
var G__15156 = chunk__15144_15151;
var G__15157 = count__15145_15152;
var G__15158 = (i__15146_15153 + (1));
seq__15143_15150 = G__15155;
chunk__15144_15151 = G__15156;
count__15145_15152 = G__15157;
i__15146_15153 = G__15158;
continue;
} else {
var temp__4657__auto___15159 = cljs.core.seq(seq__15143_15150);
if(temp__4657__auto___15159){
var seq__15143_15160__$1 = temp__4657__auto___15159;
if(cljs.core.chunked_seq_QMARK_(seq__15143_15160__$1)){
var c__8792__auto___15161 = cljs.core.chunk_first(seq__15143_15160__$1);
var G__15162 = cljs.core.chunk_rest(seq__15143_15160__$1);
var G__15163 = c__8792__auto___15161;
var G__15164 = cljs.core.count(c__8792__auto___15161);
var G__15165 = (0);
seq__15143_15150 = G__15162;
chunk__15144_15151 = G__15163;
count__15145_15152 = G__15164;
i__15146_15153 = G__15165;
continue;
} else {
var kw_15166 = cljs.core.first(seq__15143_15160__$1);
style.removeProperty(dommy.utils.as_str(kw_15166));

var G__15167 = cljs.core.next(seq__15143_15160__$1);
var G__15168 = null;
var G__15169 = (0);
var G__15170 = (0);
seq__15143_15150 = G__15167;
chunk__15144_15151 = G__15168;
count__15145_15152 = G__15169;
i__15146_15153 = G__15170;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq15141){
var G__15142 = cljs.core.first(seq15141);
var seq15141__$1 = cljs.core.next(seq15141);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15142,seq15141__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15183 = arguments.length;
var i__9123__auto___15184 = (0);
while(true){
if((i__9123__auto___15184 < len__9122__auto___15183)){
args__9129__auto__.push((arguments[i__9123__auto___15184]));

var G__15185 = (i__9123__auto___15184 + (1));
i__9123__auto___15184 = G__15185;
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

var seq__15173_15186 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__15174_15187 = null;
var count__15175_15188 = (0);
var i__15176_15189 = (0);
while(true){
if((i__15176_15189 < count__15175_15188)){
var vec__15177_15190 = chunk__15174_15187.cljs$core$IIndexed$_nth$arity$2(null,i__15176_15189);
var k_15191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177_15190,(0),null);
var v_15192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177_15190,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15191,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15192),"px"].join('')], 0));

var G__15193 = seq__15173_15186;
var G__15194 = chunk__15174_15187;
var G__15195 = count__15175_15188;
var G__15196 = (i__15176_15189 + (1));
seq__15173_15186 = G__15193;
chunk__15174_15187 = G__15194;
count__15175_15188 = G__15195;
i__15176_15189 = G__15196;
continue;
} else {
var temp__4657__auto___15197 = cljs.core.seq(seq__15173_15186);
if(temp__4657__auto___15197){
var seq__15173_15198__$1 = temp__4657__auto___15197;
if(cljs.core.chunked_seq_QMARK_(seq__15173_15198__$1)){
var c__8792__auto___15199 = cljs.core.chunk_first(seq__15173_15198__$1);
var G__15200 = cljs.core.chunk_rest(seq__15173_15198__$1);
var G__15201 = c__8792__auto___15199;
var G__15202 = cljs.core.count(c__8792__auto___15199);
var G__15203 = (0);
seq__15173_15186 = G__15200;
chunk__15174_15187 = G__15201;
count__15175_15188 = G__15202;
i__15176_15189 = G__15203;
continue;
} else {
var vec__15180_15204 = cljs.core.first(seq__15173_15198__$1);
var k_15205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180_15204,(0),null);
var v_15206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15180_15204,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15205,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15206),"px"].join('')], 0));

var G__15207 = cljs.core.next(seq__15173_15198__$1);
var G__15208 = null;
var G__15209 = (0);
var G__15210 = (0);
seq__15173_15186 = G__15207;
chunk__15174_15187 = G__15208;
count__15175_15188 = G__15209;
i__15176_15189 = G__15210;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq15171){
var G__15172 = cljs.core.first(seq15171);
var seq15171__$1 = cljs.core.next(seq15171);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15172,seq15171__$1);
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
var G__15216 = arguments.length;
switch (G__15216) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15230 = arguments.length;
var i__9123__auto___15231 = (0);
while(true){
if((i__9123__auto___15231 < len__9122__auto___15230)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15231]));

var G__15232 = (i__9123__auto___15231 + (1));
i__9123__auto___15231 = G__15232;
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
var G__15217 = elem;
(G__15217[k__$1] = v);

return G__15217;
} else {
var G__15218 = elem;
G__15218.setAttribute(k__$1,v);

return G__15218;
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

var seq__15219_15233 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15220_15234 = null;
var count__15221_15235 = (0);
var i__15222_15236 = (0);
while(true){
if((i__15222_15236 < count__15221_15235)){
var vec__15223_15237 = chunk__15220_15234.cljs$core$IIndexed$_nth$arity$2(null,i__15222_15236);
var k_15238__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223_15237,(0),null);
var v_15239__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15223_15237,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15238__$1,v_15239__$1);

var G__15240 = seq__15219_15233;
var G__15241 = chunk__15220_15234;
var G__15242 = count__15221_15235;
var G__15243 = (i__15222_15236 + (1));
seq__15219_15233 = G__15240;
chunk__15220_15234 = G__15241;
count__15221_15235 = G__15242;
i__15222_15236 = G__15243;
continue;
} else {
var temp__4657__auto___15244 = cljs.core.seq(seq__15219_15233);
if(temp__4657__auto___15244){
var seq__15219_15245__$1 = temp__4657__auto___15244;
if(cljs.core.chunked_seq_QMARK_(seq__15219_15245__$1)){
var c__8792__auto___15246 = cljs.core.chunk_first(seq__15219_15245__$1);
var G__15247 = cljs.core.chunk_rest(seq__15219_15245__$1);
var G__15248 = c__8792__auto___15246;
var G__15249 = cljs.core.count(c__8792__auto___15246);
var G__15250 = (0);
seq__15219_15233 = G__15247;
chunk__15220_15234 = G__15248;
count__15221_15235 = G__15249;
i__15222_15236 = G__15250;
continue;
} else {
var vec__15226_15251 = cljs.core.first(seq__15219_15245__$1);
var k_15252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226_15251,(0),null);
var v_15253__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15226_15251,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15252__$1,v_15253__$1);

var G__15254 = cljs.core.next(seq__15219_15245__$1);
var G__15255 = null;
var G__15256 = (0);
var G__15257 = (0);
seq__15219_15233 = G__15254;
chunk__15220_15234 = G__15255;
count__15221_15235 = G__15256;
i__15222_15236 = G__15257;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15212){
var G__15213 = cljs.core.first(seq15212);
var seq15212__$1 = cljs.core.next(seq15212);
var G__15214 = cljs.core.first(seq15212__$1);
var seq15212__$2 = cljs.core.next(seq15212__$1);
var G__15215 = cljs.core.first(seq15212__$2);
var seq15212__$3 = cljs.core.next(seq15212__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15213,G__15214,G__15215,seq15212__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15262 = arguments.length;
switch (G__15262) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15269 = arguments.length;
var i__9123__auto___15270 = (0);
while(true){
if((i__9123__auto___15270 < len__9122__auto___15269)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15270]));

var G__15271 = (i__9123__auto___15270 + (1));
i__9123__auto___15270 = G__15271;
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
var k_15272__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15263.cljs$core$IFn$_invoke$arity$1 ? fexpr__15263.cljs$core$IFn$_invoke$arity$1(k_15272__$1) : fexpr__15263.call(null,k_15272__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15272__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15264_15273 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15265_15274 = null;
var count__15266_15275 = (0);
var i__15267_15276 = (0);
while(true){
if((i__15267_15276 < count__15266_15275)){
var k_15277__$1 = chunk__15265_15274.cljs$core$IIndexed$_nth$arity$2(null,i__15267_15276);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15277__$1);

var G__15278 = seq__15264_15273;
var G__15279 = chunk__15265_15274;
var G__15280 = count__15266_15275;
var G__15281 = (i__15267_15276 + (1));
seq__15264_15273 = G__15278;
chunk__15265_15274 = G__15279;
count__15266_15275 = G__15280;
i__15267_15276 = G__15281;
continue;
} else {
var temp__4657__auto___15282 = cljs.core.seq(seq__15264_15273);
if(temp__4657__auto___15282){
var seq__15264_15283__$1 = temp__4657__auto___15282;
if(cljs.core.chunked_seq_QMARK_(seq__15264_15283__$1)){
var c__8792__auto___15284 = cljs.core.chunk_first(seq__15264_15283__$1);
var G__15285 = cljs.core.chunk_rest(seq__15264_15283__$1);
var G__15286 = c__8792__auto___15284;
var G__15287 = cljs.core.count(c__8792__auto___15284);
var G__15288 = (0);
seq__15264_15273 = G__15285;
chunk__15265_15274 = G__15286;
count__15266_15275 = G__15287;
i__15267_15276 = G__15288;
continue;
} else {
var k_15289__$1 = cljs.core.first(seq__15264_15283__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15289__$1);

var G__15290 = cljs.core.next(seq__15264_15283__$1);
var G__15291 = null;
var G__15292 = (0);
var G__15293 = (0);
seq__15264_15273 = G__15290;
chunk__15265_15274 = G__15291;
count__15266_15275 = G__15292;
i__15267_15276 = G__15293;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15259){
var G__15260 = cljs.core.first(seq15259);
var seq15259__$1 = cljs.core.next(seq15259);
var G__15261 = cljs.core.first(seq15259__$1);
var seq15259__$2 = cljs.core.next(seq15259__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15260,G__15261,seq15259__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15295 = arguments.length;
switch (G__15295) {
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
var G__15301 = arguments.length;
switch (G__15301) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15315 = arguments.length;
var i__9123__auto___15316 = (0);
while(true){
if((i__9123__auto___15316 < len__9122__auto___15315)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15316]));

var G__15317 = (i__9123__auto___15316 + (1));
i__9123__auto___15316 = G__15317;
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
var temp__4655__auto___15318 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15318)){
var class_list_15319 = temp__4655__auto___15318;
var seq__15302_15320 = cljs.core.seq(classes__$1);
var chunk__15303_15321 = null;
var count__15304_15322 = (0);
var i__15305_15323 = (0);
while(true){
if((i__15305_15323 < count__15304_15322)){
var c_15324 = chunk__15303_15321.cljs$core$IIndexed$_nth$arity$2(null,i__15305_15323);
class_list_15319.add(c_15324);

var G__15325 = seq__15302_15320;
var G__15326 = chunk__15303_15321;
var G__15327 = count__15304_15322;
var G__15328 = (i__15305_15323 + (1));
seq__15302_15320 = G__15325;
chunk__15303_15321 = G__15326;
count__15304_15322 = G__15327;
i__15305_15323 = G__15328;
continue;
} else {
var temp__4657__auto___15329 = cljs.core.seq(seq__15302_15320);
if(temp__4657__auto___15329){
var seq__15302_15330__$1 = temp__4657__auto___15329;
if(cljs.core.chunked_seq_QMARK_(seq__15302_15330__$1)){
var c__8792__auto___15331 = cljs.core.chunk_first(seq__15302_15330__$1);
var G__15332 = cljs.core.chunk_rest(seq__15302_15330__$1);
var G__15333 = c__8792__auto___15331;
var G__15334 = cljs.core.count(c__8792__auto___15331);
var G__15335 = (0);
seq__15302_15320 = G__15332;
chunk__15303_15321 = G__15333;
count__15304_15322 = G__15334;
i__15305_15323 = G__15335;
continue;
} else {
var c_15336 = cljs.core.first(seq__15302_15330__$1);
class_list_15319.add(c_15336);

var G__15337 = cljs.core.next(seq__15302_15330__$1);
var G__15338 = null;
var G__15339 = (0);
var G__15340 = (0);
seq__15302_15320 = G__15337;
chunk__15303_15321 = G__15338;
count__15304_15322 = G__15339;
i__15305_15323 = G__15340;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15306_15341 = cljs.core.seq(classes__$1);
var chunk__15307_15342 = null;
var count__15308_15343 = (0);
var i__15309_15344 = (0);
while(true){
if((i__15309_15344 < count__15308_15343)){
var c_15345 = chunk__15307_15342.cljs$core$IIndexed$_nth$arity$2(null,i__15309_15344);
var class_name_15346 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15346,c_15345))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15346 === ""))?c_15345:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15346)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15345)].join('')));
}

var G__15347 = seq__15306_15341;
var G__15348 = chunk__15307_15342;
var G__15349 = count__15308_15343;
var G__15350 = (i__15309_15344 + (1));
seq__15306_15341 = G__15347;
chunk__15307_15342 = G__15348;
count__15308_15343 = G__15349;
i__15309_15344 = G__15350;
continue;
} else {
var temp__4657__auto___15351 = cljs.core.seq(seq__15306_15341);
if(temp__4657__auto___15351){
var seq__15306_15352__$1 = temp__4657__auto___15351;
if(cljs.core.chunked_seq_QMARK_(seq__15306_15352__$1)){
var c__8792__auto___15353 = cljs.core.chunk_first(seq__15306_15352__$1);
var G__15354 = cljs.core.chunk_rest(seq__15306_15352__$1);
var G__15355 = c__8792__auto___15353;
var G__15356 = cljs.core.count(c__8792__auto___15353);
var G__15357 = (0);
seq__15306_15341 = G__15354;
chunk__15307_15342 = G__15355;
count__15308_15343 = G__15356;
i__15309_15344 = G__15357;
continue;
} else {
var c_15358 = cljs.core.first(seq__15306_15352__$1);
var class_name_15359 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15359,c_15358))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15359 === ""))?c_15358:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15359)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15358)].join('')));
}

var G__15360 = cljs.core.next(seq__15306_15352__$1);
var G__15361 = null;
var G__15362 = (0);
var G__15363 = (0);
seq__15306_15341 = G__15360;
chunk__15307_15342 = G__15361;
count__15308_15343 = G__15362;
i__15309_15344 = G__15363;
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
var seq__15310_15364 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15311_15365 = null;
var count__15312_15366 = (0);
var i__15313_15367 = (0);
while(true){
if((i__15313_15367 < count__15312_15366)){
var c_15368 = chunk__15311_15365.cljs$core$IIndexed$_nth$arity$2(null,i__15313_15367);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15368);

var G__15369 = seq__15310_15364;
var G__15370 = chunk__15311_15365;
var G__15371 = count__15312_15366;
var G__15372 = (i__15313_15367 + (1));
seq__15310_15364 = G__15369;
chunk__15311_15365 = G__15370;
count__15312_15366 = G__15371;
i__15313_15367 = G__15372;
continue;
} else {
var temp__4657__auto___15373 = cljs.core.seq(seq__15310_15364);
if(temp__4657__auto___15373){
var seq__15310_15374__$1 = temp__4657__auto___15373;
if(cljs.core.chunked_seq_QMARK_(seq__15310_15374__$1)){
var c__8792__auto___15375 = cljs.core.chunk_first(seq__15310_15374__$1);
var G__15376 = cljs.core.chunk_rest(seq__15310_15374__$1);
var G__15377 = c__8792__auto___15375;
var G__15378 = cljs.core.count(c__8792__auto___15375);
var G__15379 = (0);
seq__15310_15364 = G__15376;
chunk__15311_15365 = G__15377;
count__15312_15366 = G__15378;
i__15313_15367 = G__15379;
continue;
} else {
var c_15380 = cljs.core.first(seq__15310_15374__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15380);

var G__15381 = cljs.core.next(seq__15310_15374__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__15310_15364 = G__15381;
chunk__15311_15365 = G__15382;
count__15312_15366 = G__15383;
i__15313_15367 = G__15384;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15298){
var G__15299 = cljs.core.first(seq15298);
var seq15298__$1 = cljs.core.next(seq15298);
var G__15300 = cljs.core.first(seq15298__$1);
var seq15298__$2 = cljs.core.next(seq15298__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15299,G__15300,seq15298__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15389 = arguments.length;
switch (G__15389) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15395 = arguments.length;
var i__9123__auto___15396 = (0);
while(true){
if((i__9123__auto___15396 < len__9122__auto___15395)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15396]));

var G__15397 = (i__9123__auto___15396 + (1));
i__9123__auto___15396 = G__15397;
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
var temp__4655__auto___15398 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15398)){
var class_list_15399 = temp__4655__auto___15398;
class_list_15399.remove(c__$1);
} else {
var class_name_15400 = dommy.core.class$(elem);
var new_class_name_15401 = dommy.utils.remove_class_str(class_name_15400,c__$1);
if((class_name_15400 === new_class_name_15401)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15401);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15390 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15391 = null;
var count__15392 = (0);
var i__15393 = (0);
while(true){
if((i__15393 < count__15392)){
var c = chunk__15391.cljs$core$IIndexed$_nth$arity$2(null,i__15393);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15402 = seq__15390;
var G__15403 = chunk__15391;
var G__15404 = count__15392;
var G__15405 = (i__15393 + (1));
seq__15390 = G__15402;
chunk__15391 = G__15403;
count__15392 = G__15404;
i__15393 = G__15405;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15390);
if(temp__4657__auto__){
var seq__15390__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15390__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15390__$1);
var G__15406 = cljs.core.chunk_rest(seq__15390__$1);
var G__15407 = c__8792__auto__;
var G__15408 = cljs.core.count(c__8792__auto__);
var G__15409 = (0);
seq__15390 = G__15406;
chunk__15391 = G__15407;
count__15392 = G__15408;
i__15393 = G__15409;
continue;
} else {
var c = cljs.core.first(seq__15390__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15410 = cljs.core.next(seq__15390__$1);
var G__15411 = null;
var G__15412 = (0);
var G__15413 = (0);
seq__15390 = G__15410;
chunk__15391 = G__15411;
count__15392 = G__15412;
i__15393 = G__15413;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15386){
var G__15387 = cljs.core.first(seq15386);
var seq15386__$1 = cljs.core.next(seq15386);
var G__15388 = cljs.core.first(seq15386__$1);
var seq15386__$2 = cljs.core.next(seq15386__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15387,G__15388,seq15386__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15415 = arguments.length;
switch (G__15415) {
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
var temp__4655__auto___15417 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15417)){
var class_list_15418 = temp__4655__auto___15417;
class_list_15418.toggle(c__$1);
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
var G__15420 = arguments.length;
switch (G__15420) {
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
var G__15423 = arguments.length;
switch (G__15423) {
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
var G__15429 = arguments.length;
switch (G__15429) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15436 = arguments.length;
var i__9123__auto___15437 = (0);
while(true){
if((i__9123__auto___15437 < len__9122__auto___15436)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15437]));

var G__15438 = (i__9123__auto___15437 + (1));
i__9123__auto___15437 = G__15438;
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
var G__15430 = parent;
G__15430.appendChild(child);

return G__15430;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15431_15439 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15432_15440 = null;
var count__15433_15441 = (0);
var i__15434_15442 = (0);
while(true){
if((i__15434_15442 < count__15433_15441)){
var c_15443 = chunk__15432_15440.cljs$core$IIndexed$_nth$arity$2(null,i__15434_15442);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15443);

var G__15444 = seq__15431_15439;
var G__15445 = chunk__15432_15440;
var G__15446 = count__15433_15441;
var G__15447 = (i__15434_15442 + (1));
seq__15431_15439 = G__15444;
chunk__15432_15440 = G__15445;
count__15433_15441 = G__15446;
i__15434_15442 = G__15447;
continue;
} else {
var temp__4657__auto___15448 = cljs.core.seq(seq__15431_15439);
if(temp__4657__auto___15448){
var seq__15431_15449__$1 = temp__4657__auto___15448;
if(cljs.core.chunked_seq_QMARK_(seq__15431_15449__$1)){
var c__8792__auto___15450 = cljs.core.chunk_first(seq__15431_15449__$1);
var G__15451 = cljs.core.chunk_rest(seq__15431_15449__$1);
var G__15452 = c__8792__auto___15450;
var G__15453 = cljs.core.count(c__8792__auto___15450);
var G__15454 = (0);
seq__15431_15439 = G__15451;
chunk__15432_15440 = G__15452;
count__15433_15441 = G__15453;
i__15434_15442 = G__15454;
continue;
} else {
var c_15455 = cljs.core.first(seq__15431_15449__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15455);

var G__15456 = cljs.core.next(seq__15431_15449__$1);
var G__15457 = null;
var G__15458 = (0);
var G__15459 = (0);
seq__15431_15439 = G__15456;
chunk__15432_15440 = G__15457;
count__15433_15441 = G__15458;
i__15434_15442 = G__15459;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15426){
var G__15427 = cljs.core.first(seq15426);
var seq15426__$1 = cljs.core.next(seq15426);
var G__15428 = cljs.core.first(seq15426__$1);
var seq15426__$2 = cljs.core.next(seq15426__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15427,G__15428,seq15426__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15464 = arguments.length;
switch (G__15464) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15471 = arguments.length;
var i__9123__auto___15472 = (0);
while(true){
if((i__9123__auto___15472 < len__9122__auto___15471)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15472]));

var G__15473 = (i__9123__auto___15472 + (1));
i__9123__auto___15472 = G__15473;
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
var G__15465 = parent;
G__15465.insertBefore(child,parent.firstChild);

return G__15465;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15466_15474 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15467_15475 = null;
var count__15468_15476 = (0);
var i__15469_15477 = (0);
while(true){
if((i__15469_15477 < count__15468_15476)){
var c_15478 = chunk__15467_15475.cljs$core$IIndexed$_nth$arity$2(null,i__15469_15477);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15478);

var G__15479 = seq__15466_15474;
var G__15480 = chunk__15467_15475;
var G__15481 = count__15468_15476;
var G__15482 = (i__15469_15477 + (1));
seq__15466_15474 = G__15479;
chunk__15467_15475 = G__15480;
count__15468_15476 = G__15481;
i__15469_15477 = G__15482;
continue;
} else {
var temp__4657__auto___15483 = cljs.core.seq(seq__15466_15474);
if(temp__4657__auto___15483){
var seq__15466_15484__$1 = temp__4657__auto___15483;
if(cljs.core.chunked_seq_QMARK_(seq__15466_15484__$1)){
var c__8792__auto___15485 = cljs.core.chunk_first(seq__15466_15484__$1);
var G__15486 = cljs.core.chunk_rest(seq__15466_15484__$1);
var G__15487 = c__8792__auto___15485;
var G__15488 = cljs.core.count(c__8792__auto___15485);
var G__15489 = (0);
seq__15466_15474 = G__15486;
chunk__15467_15475 = G__15487;
count__15468_15476 = G__15488;
i__15469_15477 = G__15489;
continue;
} else {
var c_15490 = cljs.core.first(seq__15466_15484__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15490);

var G__15491 = cljs.core.next(seq__15466_15484__$1);
var G__15492 = null;
var G__15493 = (0);
var G__15494 = (0);
seq__15466_15474 = G__15491;
chunk__15467_15475 = G__15492;
count__15468_15476 = G__15493;
i__15469_15477 = G__15494;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15461){
var G__15462 = cljs.core.first(seq15461);
var seq15461__$1 = cljs.core.next(seq15461);
var G__15463 = cljs.core.first(seq15461__$1);
var seq15461__$2 = cljs.core.next(seq15461__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15462,G__15463,seq15461__$2);
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
var temp__4655__auto___15495 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15495)){
var next_15496 = temp__4655__auto___15495;
dommy.core.insert_before_BANG_(elem,next_15496);
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
var G__15498 = arguments.length;
switch (G__15498) {
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
var G__15499 = p;
G__15499.removeChild(elem);

return G__15499;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15501){
var vec__15502 = p__15501;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15502,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15502,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15502,special_mouse_event,real_mouse_event){
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
;})(vec__15502,special_mouse_event,real_mouse_event))
});})(vec__15502,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15508 = arguments.length;
var i__9123__auto___15509 = (0);
while(true){
if((i__9123__auto___15509 < len__9122__auto___15508)){
args__9129__auto__.push((arguments[i__9123__auto___15509]));

var G__15510 = (i__9123__auto___15509 + (1));
i__9123__auto___15509 = G__15510;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15505){
var G__15506 = cljs.core.first(seq15505);
var seq15505__$1 = cljs.core.next(seq15505);
var G__15507 = cljs.core.first(seq15505__$1);
var seq15505__$2 = cljs.core.next(seq15505__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15506,G__15507,seq15505__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15511 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15511.cljs$core$IFn$_invoke$arity$1 ? fexpr__15511.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15511.call(null,elem_sel));
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
var len__9122__auto___15559 = arguments.length;
var i__9123__auto___15560 = (0);
while(true){
if((i__9123__auto___15560 < len__9122__auto___15559)){
args__9129__auto__.push((arguments[i__9123__auto___15560]));

var G__15561 = (i__9123__auto___15560 + (1));
i__9123__auto___15560 = G__15561;
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

var vec__15514_15562 = dommy.core.elem_and_selector(elem_sel);
var elem_15563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514_15562,(0),null);
var selector_15564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15514_15562,(1),null);
var seq__15517_15565 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15524_15566 = null;
var count__15525_15567 = (0);
var i__15526_15568 = (0);
while(true){
if((i__15526_15568 < count__15525_15567)){
var vec__15533_15569 = chunk__15524_15566.cljs$core$IIndexed$_nth$arity$2(null,i__15526_15568);
var orig_type_15570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533_15569,(0),null);
var f_15571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15533_15569,(1),null);
var seq__15527_15572 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15570,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15570,cljs.core.identity])));
var chunk__15529_15573 = null;
var count__15530_15574 = (0);
var i__15531_15575 = (0);
while(true){
if((i__15531_15575 < count__15530_15574)){
var vec__15536_15576 = chunk__15529_15573.cljs$core$IIndexed$_nth$arity$2(null,i__15531_15575);
var actual_type_15577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15536_15576,(0),null);
var factory_15578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15536_15576,(1),null);
var canonical_f_15579 = (function (){var G__15540 = (factory_15578.cljs$core$IFn$_invoke$arity$1 ? factory_15578.cljs$core$IFn$_invoke$arity$1(f_15571) : factory_15578.call(null,f_15571));
var fexpr__15539 = (cljs.core.truth_(selector_15564)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15563,selector_15564):cljs.core.identity);
return (fexpr__15539.cljs$core$IFn$_invoke$arity$1 ? fexpr__15539.cljs$core$IFn$_invoke$arity$1(G__15540) : fexpr__15539.call(null,G__15540));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15563,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15564,actual_type_15577,f_15571], null),canonical_f_15579], 0));

if(cljs.core.truth_(elem_15563.addEventListener)){
elem_15563.addEventListener(cljs.core.name(actual_type_15577),canonical_f_15579);
} else {
elem_15563.attachEvent(cljs.core.name(actual_type_15577),canonical_f_15579);
}

var G__15580 = seq__15527_15572;
var G__15581 = chunk__15529_15573;
var G__15582 = count__15530_15574;
var G__15583 = (i__15531_15575 + (1));
seq__15527_15572 = G__15580;
chunk__15529_15573 = G__15581;
count__15530_15574 = G__15582;
i__15531_15575 = G__15583;
continue;
} else {
var temp__4657__auto___15584 = cljs.core.seq(seq__15527_15572);
if(temp__4657__auto___15584){
var seq__15527_15585__$1 = temp__4657__auto___15584;
if(cljs.core.chunked_seq_QMARK_(seq__15527_15585__$1)){
var c__8792__auto___15586 = cljs.core.chunk_first(seq__15527_15585__$1);
var G__15587 = cljs.core.chunk_rest(seq__15527_15585__$1);
var G__15588 = c__8792__auto___15586;
var G__15589 = cljs.core.count(c__8792__auto___15586);
var G__15590 = (0);
seq__15527_15572 = G__15587;
chunk__15529_15573 = G__15588;
count__15530_15574 = G__15589;
i__15531_15575 = G__15590;
continue;
} else {
var vec__15541_15591 = cljs.core.first(seq__15527_15585__$1);
var actual_type_15592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541_15591,(0),null);
var factory_15593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15541_15591,(1),null);
var canonical_f_15594 = (function (){var G__15545 = (factory_15593.cljs$core$IFn$_invoke$arity$1 ? factory_15593.cljs$core$IFn$_invoke$arity$1(f_15571) : factory_15593.call(null,f_15571));
var fexpr__15544 = (cljs.core.truth_(selector_15564)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15563,selector_15564):cljs.core.identity);
return (fexpr__15544.cljs$core$IFn$_invoke$arity$1 ? fexpr__15544.cljs$core$IFn$_invoke$arity$1(G__15545) : fexpr__15544.call(null,G__15545));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15563,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15564,actual_type_15592,f_15571], null),canonical_f_15594], 0));

if(cljs.core.truth_(elem_15563.addEventListener)){
elem_15563.addEventListener(cljs.core.name(actual_type_15592),canonical_f_15594);
} else {
elem_15563.attachEvent(cljs.core.name(actual_type_15592),canonical_f_15594);
}

var G__15595 = cljs.core.next(seq__15527_15585__$1);
var G__15596 = null;
var G__15597 = (0);
var G__15598 = (0);
seq__15527_15572 = G__15595;
chunk__15529_15573 = G__15596;
count__15530_15574 = G__15597;
i__15531_15575 = G__15598;
continue;
}
} else {
}
}
break;
}

var G__15599 = seq__15517_15565;
var G__15600 = chunk__15524_15566;
var G__15601 = count__15525_15567;
var G__15602 = (i__15526_15568 + (1));
seq__15517_15565 = G__15599;
chunk__15524_15566 = G__15600;
count__15525_15567 = G__15601;
i__15526_15568 = G__15602;
continue;
} else {
var temp__4657__auto___15603 = cljs.core.seq(seq__15517_15565);
if(temp__4657__auto___15603){
var seq__15517_15604__$1 = temp__4657__auto___15603;
if(cljs.core.chunked_seq_QMARK_(seq__15517_15604__$1)){
var c__8792__auto___15605 = cljs.core.chunk_first(seq__15517_15604__$1);
var G__15606 = cljs.core.chunk_rest(seq__15517_15604__$1);
var G__15607 = c__8792__auto___15605;
var G__15608 = cljs.core.count(c__8792__auto___15605);
var G__15609 = (0);
seq__15517_15565 = G__15606;
chunk__15524_15566 = G__15607;
count__15525_15567 = G__15608;
i__15526_15568 = G__15609;
continue;
} else {
var vec__15546_15610 = cljs.core.first(seq__15517_15604__$1);
var orig_type_15611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15610,(0),null);
var f_15612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15546_15610,(1),null);
var seq__15518_15613 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15611,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15611,cljs.core.identity])));
var chunk__15520_15614 = null;
var count__15521_15615 = (0);
var i__15522_15616 = (0);
while(true){
if((i__15522_15616 < count__15521_15615)){
var vec__15549_15617 = chunk__15520_15614.cljs$core$IIndexed$_nth$arity$2(null,i__15522_15616);
var actual_type_15618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549_15617,(0),null);
var factory_15619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15549_15617,(1),null);
var canonical_f_15620 = (function (){var G__15553 = (factory_15619.cljs$core$IFn$_invoke$arity$1 ? factory_15619.cljs$core$IFn$_invoke$arity$1(f_15612) : factory_15619.call(null,f_15612));
var fexpr__15552 = (cljs.core.truth_(selector_15564)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15563,selector_15564):cljs.core.identity);
return (fexpr__15552.cljs$core$IFn$_invoke$arity$1 ? fexpr__15552.cljs$core$IFn$_invoke$arity$1(G__15553) : fexpr__15552.call(null,G__15553));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15563,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15564,actual_type_15618,f_15612], null),canonical_f_15620], 0));

if(cljs.core.truth_(elem_15563.addEventListener)){
elem_15563.addEventListener(cljs.core.name(actual_type_15618),canonical_f_15620);
} else {
elem_15563.attachEvent(cljs.core.name(actual_type_15618),canonical_f_15620);
}

var G__15621 = seq__15518_15613;
var G__15622 = chunk__15520_15614;
var G__15623 = count__15521_15615;
var G__15624 = (i__15522_15616 + (1));
seq__15518_15613 = G__15621;
chunk__15520_15614 = G__15622;
count__15521_15615 = G__15623;
i__15522_15616 = G__15624;
continue;
} else {
var temp__4657__auto___15625__$1 = cljs.core.seq(seq__15518_15613);
if(temp__4657__auto___15625__$1){
var seq__15518_15626__$1 = temp__4657__auto___15625__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15518_15626__$1)){
var c__8792__auto___15627 = cljs.core.chunk_first(seq__15518_15626__$1);
var G__15628 = cljs.core.chunk_rest(seq__15518_15626__$1);
var G__15629 = c__8792__auto___15627;
var G__15630 = cljs.core.count(c__8792__auto___15627);
var G__15631 = (0);
seq__15518_15613 = G__15628;
chunk__15520_15614 = G__15629;
count__15521_15615 = G__15630;
i__15522_15616 = G__15631;
continue;
} else {
var vec__15554_15632 = cljs.core.first(seq__15518_15626__$1);
var actual_type_15633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554_15632,(0),null);
var factory_15634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15554_15632,(1),null);
var canonical_f_15635 = (function (){var G__15558 = (factory_15634.cljs$core$IFn$_invoke$arity$1 ? factory_15634.cljs$core$IFn$_invoke$arity$1(f_15612) : factory_15634.call(null,f_15612));
var fexpr__15557 = (cljs.core.truth_(selector_15564)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15563,selector_15564):cljs.core.identity);
return (fexpr__15557.cljs$core$IFn$_invoke$arity$1 ? fexpr__15557.cljs$core$IFn$_invoke$arity$1(G__15558) : fexpr__15557.call(null,G__15558));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15563,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15564,actual_type_15633,f_15612], null),canonical_f_15635], 0));

if(cljs.core.truth_(elem_15563.addEventListener)){
elem_15563.addEventListener(cljs.core.name(actual_type_15633),canonical_f_15635);
} else {
elem_15563.attachEvent(cljs.core.name(actual_type_15633),canonical_f_15635);
}

var G__15636 = cljs.core.next(seq__15518_15626__$1);
var G__15637 = null;
var G__15638 = (0);
var G__15639 = (0);
seq__15518_15613 = G__15636;
chunk__15520_15614 = G__15637;
count__15521_15615 = G__15638;
i__15522_15616 = G__15639;
continue;
}
} else {
}
}
break;
}

var G__15640 = cljs.core.next(seq__15517_15604__$1);
var G__15641 = null;
var G__15642 = (0);
var G__15643 = (0);
seq__15517_15565 = G__15640;
chunk__15524_15566 = G__15641;
count__15525_15567 = G__15642;
i__15526_15568 = G__15643;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15512){
var G__15513 = cljs.core.first(seq15512);
var seq15512__$1 = cljs.core.next(seq15512);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15513,seq15512__$1);
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
var len__9122__auto___15683 = arguments.length;
var i__9123__auto___15684 = (0);
while(true){
if((i__9123__auto___15684 < len__9122__auto___15683)){
args__9129__auto__.push((arguments[i__9123__auto___15684]));

var G__15685 = (i__9123__auto___15684 + (1));
i__9123__auto___15684 = G__15685;
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

var vec__15646_15686 = dommy.core.elem_and_selector(elem_sel);
var elem_15687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646_15686,(0),null);
var selector_15688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15646_15686,(1),null);
var seq__15649_15689 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15656_15690 = null;
var count__15657_15691 = (0);
var i__15658_15692 = (0);
while(true){
if((i__15658_15692 < count__15657_15691)){
var vec__15665_15693 = chunk__15656_15690.cljs$core$IIndexed$_nth$arity$2(null,i__15658_15692);
var orig_type_15694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665_15693,(0),null);
var f_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15665_15693,(1),null);
var seq__15659_15696 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15694,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15694,cljs.core.identity])));
var chunk__15661_15697 = null;
var count__15662_15698 = (0);
var i__15663_15699 = (0);
while(true){
if((i__15663_15699 < count__15662_15698)){
var vec__15668_15700 = chunk__15661_15697.cljs$core$IIndexed$_nth$arity$2(null,i__15663_15699);
var actual_type_15701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668_15700,(0),null);
var __15702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15668_15700,(1),null);
var keys_15703 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15688,actual_type_15701,f_15695], null);
var canonical_f_15704 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15687),keys_15703);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15687,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15703], 0));

if(cljs.core.truth_(elem_15687.removeEventListener)){
elem_15687.removeEventListener(cljs.core.name(actual_type_15701),canonical_f_15704);
} else {
elem_15687.detachEvent(cljs.core.name(actual_type_15701),canonical_f_15704);
}

var G__15705 = seq__15659_15696;
var G__15706 = chunk__15661_15697;
var G__15707 = count__15662_15698;
var G__15708 = (i__15663_15699 + (1));
seq__15659_15696 = G__15705;
chunk__15661_15697 = G__15706;
count__15662_15698 = G__15707;
i__15663_15699 = G__15708;
continue;
} else {
var temp__4657__auto___15709 = cljs.core.seq(seq__15659_15696);
if(temp__4657__auto___15709){
var seq__15659_15710__$1 = temp__4657__auto___15709;
if(cljs.core.chunked_seq_QMARK_(seq__15659_15710__$1)){
var c__8792__auto___15711 = cljs.core.chunk_first(seq__15659_15710__$1);
var G__15712 = cljs.core.chunk_rest(seq__15659_15710__$1);
var G__15713 = c__8792__auto___15711;
var G__15714 = cljs.core.count(c__8792__auto___15711);
var G__15715 = (0);
seq__15659_15696 = G__15712;
chunk__15661_15697 = G__15713;
count__15662_15698 = G__15714;
i__15663_15699 = G__15715;
continue;
} else {
var vec__15671_15716 = cljs.core.first(seq__15659_15710__$1);
var actual_type_15717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671_15716,(0),null);
var __15718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15671_15716,(1),null);
var keys_15719 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15688,actual_type_15717,f_15695], null);
var canonical_f_15720 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15687),keys_15719);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15687,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15719], 0));

if(cljs.core.truth_(elem_15687.removeEventListener)){
elem_15687.removeEventListener(cljs.core.name(actual_type_15717),canonical_f_15720);
} else {
elem_15687.detachEvent(cljs.core.name(actual_type_15717),canonical_f_15720);
}

var G__15721 = cljs.core.next(seq__15659_15710__$1);
var G__15722 = null;
var G__15723 = (0);
var G__15724 = (0);
seq__15659_15696 = G__15721;
chunk__15661_15697 = G__15722;
count__15662_15698 = G__15723;
i__15663_15699 = G__15724;
continue;
}
} else {
}
}
break;
}

var G__15725 = seq__15649_15689;
var G__15726 = chunk__15656_15690;
var G__15727 = count__15657_15691;
var G__15728 = (i__15658_15692 + (1));
seq__15649_15689 = G__15725;
chunk__15656_15690 = G__15726;
count__15657_15691 = G__15727;
i__15658_15692 = G__15728;
continue;
} else {
var temp__4657__auto___15729 = cljs.core.seq(seq__15649_15689);
if(temp__4657__auto___15729){
var seq__15649_15730__$1 = temp__4657__auto___15729;
if(cljs.core.chunked_seq_QMARK_(seq__15649_15730__$1)){
var c__8792__auto___15731 = cljs.core.chunk_first(seq__15649_15730__$1);
var G__15732 = cljs.core.chunk_rest(seq__15649_15730__$1);
var G__15733 = c__8792__auto___15731;
var G__15734 = cljs.core.count(c__8792__auto___15731);
var G__15735 = (0);
seq__15649_15689 = G__15732;
chunk__15656_15690 = G__15733;
count__15657_15691 = G__15734;
i__15658_15692 = G__15735;
continue;
} else {
var vec__15674_15736 = cljs.core.first(seq__15649_15730__$1);
var orig_type_15737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674_15736,(0),null);
var f_15738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15674_15736,(1),null);
var seq__15650_15739 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15737,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15737,cljs.core.identity])));
var chunk__15652_15740 = null;
var count__15653_15741 = (0);
var i__15654_15742 = (0);
while(true){
if((i__15654_15742 < count__15653_15741)){
var vec__15677_15743 = chunk__15652_15740.cljs$core$IIndexed$_nth$arity$2(null,i__15654_15742);
var actual_type_15744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677_15743,(0),null);
var __15745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15677_15743,(1),null);
var keys_15746 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15688,actual_type_15744,f_15738], null);
var canonical_f_15747 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15687),keys_15746);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15687,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15746], 0));

if(cljs.core.truth_(elem_15687.removeEventListener)){
elem_15687.removeEventListener(cljs.core.name(actual_type_15744),canonical_f_15747);
} else {
elem_15687.detachEvent(cljs.core.name(actual_type_15744),canonical_f_15747);
}

var G__15748 = seq__15650_15739;
var G__15749 = chunk__15652_15740;
var G__15750 = count__15653_15741;
var G__15751 = (i__15654_15742 + (1));
seq__15650_15739 = G__15748;
chunk__15652_15740 = G__15749;
count__15653_15741 = G__15750;
i__15654_15742 = G__15751;
continue;
} else {
var temp__4657__auto___15752__$1 = cljs.core.seq(seq__15650_15739);
if(temp__4657__auto___15752__$1){
var seq__15650_15753__$1 = temp__4657__auto___15752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15650_15753__$1)){
var c__8792__auto___15754 = cljs.core.chunk_first(seq__15650_15753__$1);
var G__15755 = cljs.core.chunk_rest(seq__15650_15753__$1);
var G__15756 = c__8792__auto___15754;
var G__15757 = cljs.core.count(c__8792__auto___15754);
var G__15758 = (0);
seq__15650_15739 = G__15755;
chunk__15652_15740 = G__15756;
count__15653_15741 = G__15757;
i__15654_15742 = G__15758;
continue;
} else {
var vec__15680_15759 = cljs.core.first(seq__15650_15753__$1);
var actual_type_15760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15680_15759,(0),null);
var __15761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15680_15759,(1),null);
var keys_15762 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15688,actual_type_15760,f_15738], null);
var canonical_f_15763 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15687),keys_15762);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15687,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15762], 0));

if(cljs.core.truth_(elem_15687.removeEventListener)){
elem_15687.removeEventListener(cljs.core.name(actual_type_15760),canonical_f_15763);
} else {
elem_15687.detachEvent(cljs.core.name(actual_type_15760),canonical_f_15763);
}

var G__15764 = cljs.core.next(seq__15650_15753__$1);
var G__15765 = null;
var G__15766 = (0);
var G__15767 = (0);
seq__15650_15739 = G__15764;
chunk__15652_15740 = G__15765;
count__15653_15741 = G__15766;
i__15654_15742 = G__15767;
continue;
}
} else {
}
}
break;
}

var G__15768 = cljs.core.next(seq__15649_15730__$1);
var G__15769 = null;
var G__15770 = (0);
var G__15771 = (0);
seq__15649_15689 = G__15768;
chunk__15656_15690 = G__15769;
count__15657_15691 = G__15770;
i__15658_15692 = G__15771;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15644){
var G__15645 = cljs.core.first(seq15644);
var seq15644__$1 = cljs.core.next(seq15644);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15645,seq15644__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
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
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__15774_15790 = dommy.core.elem_and_selector(elem_sel);
var elem_15791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774_15790,(0),null);
var selector_15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774_15790,(1),null);
var seq__15777_15793 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15778_15794 = null;
var count__15779_15795 = (0);
var i__15780_15796 = (0);
while(true){
if((i__15780_15796 < count__15779_15795)){
var vec__15781_15797 = chunk__15778_15794.cljs$core$IIndexed$_nth$arity$2(null,i__15780_15796);
var type_15798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15781_15797,(0),null);
var f_15799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15781_15797,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15798,((function (seq__15777_15793,chunk__15778_15794,count__15779_15795,i__15780_15796,vec__15781_15797,type_15798,f_15799,vec__15774_15790,elem_15791,selector_15792){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15798,dommy$core$this_fn], 0));

return (f_15799.cljs$core$IFn$_invoke$arity$1 ? f_15799.cljs$core$IFn$_invoke$arity$1(e) : f_15799.call(null,e));
});})(seq__15777_15793,chunk__15778_15794,count__15779_15795,i__15780_15796,vec__15781_15797,type_15798,f_15799,vec__15774_15790,elem_15791,selector_15792))
], 0));

var G__15800 = seq__15777_15793;
var G__15801 = chunk__15778_15794;
var G__15802 = count__15779_15795;
var G__15803 = (i__15780_15796 + (1));
seq__15777_15793 = G__15800;
chunk__15778_15794 = G__15801;
count__15779_15795 = G__15802;
i__15780_15796 = G__15803;
continue;
} else {
var temp__4657__auto___15804 = cljs.core.seq(seq__15777_15793);
if(temp__4657__auto___15804){
var seq__15777_15805__$1 = temp__4657__auto___15804;
if(cljs.core.chunked_seq_QMARK_(seq__15777_15805__$1)){
var c__8792__auto___15806 = cljs.core.chunk_first(seq__15777_15805__$1);
var G__15807 = cljs.core.chunk_rest(seq__15777_15805__$1);
var G__15808 = c__8792__auto___15806;
var G__15809 = cljs.core.count(c__8792__auto___15806);
var G__15810 = (0);
seq__15777_15793 = G__15807;
chunk__15778_15794 = G__15808;
count__15779_15795 = G__15809;
i__15780_15796 = G__15810;
continue;
} else {
var vec__15784_15811 = cljs.core.first(seq__15777_15805__$1);
var type_15812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15811,(0),null);
var f_15813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15784_15811,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15812,((function (seq__15777_15793,chunk__15778_15794,count__15779_15795,i__15780_15796,vec__15784_15811,type_15812,f_15813,seq__15777_15805__$1,temp__4657__auto___15804,vec__15774_15790,elem_15791,selector_15792){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15812,dommy$core$this_fn], 0));

return (f_15813.cljs$core$IFn$_invoke$arity$1 ? f_15813.cljs$core$IFn$_invoke$arity$1(e) : f_15813.call(null,e));
});})(seq__15777_15793,chunk__15778_15794,count__15779_15795,i__15780_15796,vec__15784_15811,type_15812,f_15813,seq__15777_15805__$1,temp__4657__auto___15804,vec__15774_15790,elem_15791,selector_15792))
], 0));

var G__15814 = cljs.core.next(seq__15777_15805__$1);
var G__15815 = null;
var G__15816 = (0);
var G__15817 = (0);
seq__15777_15793 = G__15814;
chunk__15778_15794 = G__15815;
count__15779_15795 = G__15816;
i__15780_15796 = G__15817;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15772){
var G__15773 = cljs.core.first(seq15772);
var seq15772__$1 = cljs.core.next(seq15772);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15773,seq15772__$1);
});

