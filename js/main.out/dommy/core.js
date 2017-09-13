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
var G__14893 = arguments.length;
switch (G__14893) {
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
var G__14896 = arguments.length;
switch (G__14896) {
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
var G__14900 = arguments.length;
switch (G__14900) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14898_SHARP_){
return !((p1__14898_SHARP_ === base));
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
var len__9122__auto___14914 = arguments.length;
var i__9123__auto___14915 = (0);
while(true){
if((i__9123__auto___14915 < len__9122__auto___14914)){
args__9129__auto__.push((arguments[i__9123__auto___14915]));

var G__14916 = (i__9123__auto___14915 + (1));
i__9123__auto___14915 = G__14916;
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
var seq__14904_14917 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14905_14918 = null;
var count__14906_14919 = (0);
var i__14907_14920 = (0);
while(true){
if((i__14907_14920 < count__14906_14919)){
var vec__14908_14921 = chunk__14905_14918.cljs$core$IIndexed$_nth$arity$2(null,i__14907_14920);
var k_14922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_14921,(0),null);
var v_14923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_14921,(1),null);
style.setProperty(dommy.utils.as_str(k_14922),v_14923);

var G__14924 = seq__14904_14917;
var G__14925 = chunk__14905_14918;
var G__14926 = count__14906_14919;
var G__14927 = (i__14907_14920 + (1));
seq__14904_14917 = G__14924;
chunk__14905_14918 = G__14925;
count__14906_14919 = G__14926;
i__14907_14920 = G__14927;
continue;
} else {
var temp__4657__auto___14928 = cljs.core.seq(seq__14904_14917);
if(temp__4657__auto___14928){
var seq__14904_14929__$1 = temp__4657__auto___14928;
if(cljs.core.chunked_seq_QMARK_(seq__14904_14929__$1)){
var c__8792__auto___14930 = cljs.core.chunk_first(seq__14904_14929__$1);
var G__14931 = cljs.core.chunk_rest(seq__14904_14929__$1);
var G__14932 = c__8792__auto___14930;
var G__14933 = cljs.core.count(c__8792__auto___14930);
var G__14934 = (0);
seq__14904_14917 = G__14931;
chunk__14905_14918 = G__14932;
count__14906_14919 = G__14933;
i__14907_14920 = G__14934;
continue;
} else {
var vec__14911_14935 = cljs.core.first(seq__14904_14929__$1);
var k_14936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911_14935,(0),null);
var v_14937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911_14935,(1),null);
style.setProperty(dommy.utils.as_str(k_14936),v_14937);

var G__14938 = cljs.core.next(seq__14904_14929__$1);
var G__14939 = null;
var G__14940 = (0);
var G__14941 = (0);
seq__14904_14917 = G__14938;
chunk__14905_14918 = G__14939;
count__14906_14919 = G__14940;
i__14907_14920 = G__14941;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14902){
var G__14903 = cljs.core.first(seq14902);
var seq14902__$1 = cljs.core.next(seq14902);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14903,seq14902__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14948 = arguments.length;
var i__9123__auto___14949 = (0);
while(true){
if((i__9123__auto___14949 < len__9122__auto___14948)){
args__9129__auto__.push((arguments[i__9123__auto___14949]));

var G__14950 = (i__9123__auto___14949 + (1));
i__9123__auto___14949 = G__14950;
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
var seq__14944_14951 = cljs.core.seq(keywords);
var chunk__14945_14952 = null;
var count__14946_14953 = (0);
var i__14947_14954 = (0);
while(true){
if((i__14947_14954 < count__14946_14953)){
var kw_14955 = chunk__14945_14952.cljs$core$IIndexed$_nth$arity$2(null,i__14947_14954);
style.removeProperty(dommy.utils.as_str(kw_14955));

var G__14956 = seq__14944_14951;
var G__14957 = chunk__14945_14952;
var G__14958 = count__14946_14953;
var G__14959 = (i__14947_14954 + (1));
seq__14944_14951 = G__14956;
chunk__14945_14952 = G__14957;
count__14946_14953 = G__14958;
i__14947_14954 = G__14959;
continue;
} else {
var temp__4657__auto___14960 = cljs.core.seq(seq__14944_14951);
if(temp__4657__auto___14960){
var seq__14944_14961__$1 = temp__4657__auto___14960;
if(cljs.core.chunked_seq_QMARK_(seq__14944_14961__$1)){
var c__8792__auto___14962 = cljs.core.chunk_first(seq__14944_14961__$1);
var G__14963 = cljs.core.chunk_rest(seq__14944_14961__$1);
var G__14964 = c__8792__auto___14962;
var G__14965 = cljs.core.count(c__8792__auto___14962);
var G__14966 = (0);
seq__14944_14951 = G__14963;
chunk__14945_14952 = G__14964;
count__14946_14953 = G__14965;
i__14947_14954 = G__14966;
continue;
} else {
var kw_14967 = cljs.core.first(seq__14944_14961__$1);
style.removeProperty(dommy.utils.as_str(kw_14967));

var G__14968 = cljs.core.next(seq__14944_14961__$1);
var G__14969 = null;
var G__14970 = (0);
var G__14971 = (0);
seq__14944_14951 = G__14968;
chunk__14945_14952 = G__14969;
count__14946_14953 = G__14970;
i__14947_14954 = G__14971;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14942){
var G__14943 = cljs.core.first(seq14942);
var seq14942__$1 = cljs.core.next(seq14942);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14943,seq14942__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14984 = arguments.length;
var i__9123__auto___14985 = (0);
while(true){
if((i__9123__auto___14985 < len__9122__auto___14984)){
args__9129__auto__.push((arguments[i__9123__auto___14985]));

var G__14986 = (i__9123__auto___14985 + (1));
i__9123__auto___14985 = G__14986;
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

var seq__14974_14987 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14975_14988 = null;
var count__14976_14989 = (0);
var i__14977_14990 = (0);
while(true){
if((i__14977_14990 < count__14976_14989)){
var vec__14978_14991 = chunk__14975_14988.cljs$core$IIndexed$_nth$arity$2(null,i__14977_14990);
var k_14992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_14991,(0),null);
var v_14993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14978_14991,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14992,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14993),"px"].join('')], 0));

var G__14994 = seq__14974_14987;
var G__14995 = chunk__14975_14988;
var G__14996 = count__14976_14989;
var G__14997 = (i__14977_14990 + (1));
seq__14974_14987 = G__14994;
chunk__14975_14988 = G__14995;
count__14976_14989 = G__14996;
i__14977_14990 = G__14997;
continue;
} else {
var temp__4657__auto___14998 = cljs.core.seq(seq__14974_14987);
if(temp__4657__auto___14998){
var seq__14974_14999__$1 = temp__4657__auto___14998;
if(cljs.core.chunked_seq_QMARK_(seq__14974_14999__$1)){
var c__8792__auto___15000 = cljs.core.chunk_first(seq__14974_14999__$1);
var G__15001 = cljs.core.chunk_rest(seq__14974_14999__$1);
var G__15002 = c__8792__auto___15000;
var G__15003 = cljs.core.count(c__8792__auto___15000);
var G__15004 = (0);
seq__14974_14987 = G__15001;
chunk__14975_14988 = G__15002;
count__14976_14989 = G__15003;
i__14977_14990 = G__15004;
continue;
} else {
var vec__14981_15005 = cljs.core.first(seq__14974_14999__$1);
var k_15006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_15005,(0),null);
var v_15007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981_15005,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_15006,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_15007),"px"].join('')], 0));

var G__15008 = cljs.core.next(seq__14974_14999__$1);
var G__15009 = null;
var G__15010 = (0);
var G__15011 = (0);
seq__14974_14987 = G__15008;
chunk__14975_14988 = G__15009;
count__14976_14989 = G__15010;
i__14977_14990 = G__15011;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14972){
var G__14973 = cljs.core.first(seq14972);
var seq14972__$1 = cljs.core.next(seq14972);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14973,seq14972__$1);
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
var G__15017 = arguments.length;
switch (G__15017) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15031 = arguments.length;
var i__9123__auto___15032 = (0);
while(true){
if((i__9123__auto___15032 < len__9122__auto___15031)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15032]));

var G__15033 = (i__9123__auto___15032 + (1));
i__9123__auto___15032 = G__15033;
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
var G__15018 = elem;
(G__15018[k__$1] = v);

return G__15018;
} else {
var G__15019 = elem;
G__15019.setAttribute(k__$1,v);

return G__15019;
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

var seq__15020_15034 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__15021_15035 = null;
var count__15022_15036 = (0);
var i__15023_15037 = (0);
while(true){
if((i__15023_15037 < count__15022_15036)){
var vec__15024_15038 = chunk__15021_15035.cljs$core$IIndexed$_nth$arity$2(null,i__15023_15037);
var k_15039__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15024_15038,(0),null);
var v_15040__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15024_15038,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15039__$1,v_15040__$1);

var G__15041 = seq__15020_15034;
var G__15042 = chunk__15021_15035;
var G__15043 = count__15022_15036;
var G__15044 = (i__15023_15037 + (1));
seq__15020_15034 = G__15041;
chunk__15021_15035 = G__15042;
count__15022_15036 = G__15043;
i__15023_15037 = G__15044;
continue;
} else {
var temp__4657__auto___15045 = cljs.core.seq(seq__15020_15034);
if(temp__4657__auto___15045){
var seq__15020_15046__$1 = temp__4657__auto___15045;
if(cljs.core.chunked_seq_QMARK_(seq__15020_15046__$1)){
var c__8792__auto___15047 = cljs.core.chunk_first(seq__15020_15046__$1);
var G__15048 = cljs.core.chunk_rest(seq__15020_15046__$1);
var G__15049 = c__8792__auto___15047;
var G__15050 = cljs.core.count(c__8792__auto___15047);
var G__15051 = (0);
seq__15020_15034 = G__15048;
chunk__15021_15035 = G__15049;
count__15022_15036 = G__15050;
i__15023_15037 = G__15051;
continue;
} else {
var vec__15027_15052 = cljs.core.first(seq__15020_15046__$1);
var k_15053__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027_15052,(0),null);
var v_15054__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027_15052,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_15053__$1,v_15054__$1);

var G__15055 = cljs.core.next(seq__15020_15046__$1);
var G__15056 = null;
var G__15057 = (0);
var G__15058 = (0);
seq__15020_15034 = G__15055;
chunk__15021_15035 = G__15056;
count__15022_15036 = G__15057;
i__15023_15037 = G__15058;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq15013){
var G__15014 = cljs.core.first(seq15013);
var seq15013__$1 = cljs.core.next(seq15013);
var G__15015 = cljs.core.first(seq15013__$1);
var seq15013__$2 = cljs.core.next(seq15013__$1);
var G__15016 = cljs.core.first(seq15013__$2);
var seq15013__$3 = cljs.core.next(seq15013__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15014,G__15015,G__15016,seq15013__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__15063 = arguments.length;
switch (G__15063) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15070 = arguments.length;
var i__9123__auto___15071 = (0);
while(true){
if((i__9123__auto___15071 < len__9122__auto___15070)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15071]));

var G__15072 = (i__9123__auto___15071 + (1));
i__9123__auto___15071 = G__15072;
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
var k_15073__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__15064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__15064.cljs$core$IFn$_invoke$arity$1 ? fexpr__15064.cljs$core$IFn$_invoke$arity$1(k_15073__$1) : fexpr__15064.call(null,k_15073__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_15073__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__15065_15074 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__15066_15075 = null;
var count__15067_15076 = (0);
var i__15068_15077 = (0);
while(true){
if((i__15068_15077 < count__15067_15076)){
var k_15078__$1 = chunk__15066_15075.cljs$core$IIndexed$_nth$arity$2(null,i__15068_15077);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15078__$1);

var G__15079 = seq__15065_15074;
var G__15080 = chunk__15066_15075;
var G__15081 = count__15067_15076;
var G__15082 = (i__15068_15077 + (1));
seq__15065_15074 = G__15079;
chunk__15066_15075 = G__15080;
count__15067_15076 = G__15081;
i__15068_15077 = G__15082;
continue;
} else {
var temp__4657__auto___15083 = cljs.core.seq(seq__15065_15074);
if(temp__4657__auto___15083){
var seq__15065_15084__$1 = temp__4657__auto___15083;
if(cljs.core.chunked_seq_QMARK_(seq__15065_15084__$1)){
var c__8792__auto___15085 = cljs.core.chunk_first(seq__15065_15084__$1);
var G__15086 = cljs.core.chunk_rest(seq__15065_15084__$1);
var G__15087 = c__8792__auto___15085;
var G__15088 = cljs.core.count(c__8792__auto___15085);
var G__15089 = (0);
seq__15065_15074 = G__15086;
chunk__15066_15075 = G__15087;
count__15067_15076 = G__15088;
i__15068_15077 = G__15089;
continue;
} else {
var k_15090__$1 = cljs.core.first(seq__15065_15084__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15090__$1);

var G__15091 = cljs.core.next(seq__15065_15084__$1);
var G__15092 = null;
var G__15093 = (0);
var G__15094 = (0);
seq__15065_15074 = G__15091;
chunk__15066_15075 = G__15092;
count__15067_15076 = G__15093;
i__15068_15077 = G__15094;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq15060){
var G__15061 = cljs.core.first(seq15060);
var seq15060__$1 = cljs.core.next(seq15060);
var G__15062 = cljs.core.first(seq15060__$1);
var seq15060__$2 = cljs.core.next(seq15060__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15061,G__15062,seq15060__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15096 = arguments.length;
switch (G__15096) {
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
var G__15102 = arguments.length;
switch (G__15102) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15116 = arguments.length;
var i__9123__auto___15117 = (0);
while(true){
if((i__9123__auto___15117 < len__9122__auto___15116)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15117]));

var G__15118 = (i__9123__auto___15117 + (1));
i__9123__auto___15117 = G__15118;
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
var temp__4655__auto___15119 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15119)){
var class_list_15120 = temp__4655__auto___15119;
var seq__15103_15121 = cljs.core.seq(classes__$1);
var chunk__15104_15122 = null;
var count__15105_15123 = (0);
var i__15106_15124 = (0);
while(true){
if((i__15106_15124 < count__15105_15123)){
var c_15125 = chunk__15104_15122.cljs$core$IIndexed$_nth$arity$2(null,i__15106_15124);
class_list_15120.add(c_15125);

var G__15126 = seq__15103_15121;
var G__15127 = chunk__15104_15122;
var G__15128 = count__15105_15123;
var G__15129 = (i__15106_15124 + (1));
seq__15103_15121 = G__15126;
chunk__15104_15122 = G__15127;
count__15105_15123 = G__15128;
i__15106_15124 = G__15129;
continue;
} else {
var temp__4657__auto___15130 = cljs.core.seq(seq__15103_15121);
if(temp__4657__auto___15130){
var seq__15103_15131__$1 = temp__4657__auto___15130;
if(cljs.core.chunked_seq_QMARK_(seq__15103_15131__$1)){
var c__8792__auto___15132 = cljs.core.chunk_first(seq__15103_15131__$1);
var G__15133 = cljs.core.chunk_rest(seq__15103_15131__$1);
var G__15134 = c__8792__auto___15132;
var G__15135 = cljs.core.count(c__8792__auto___15132);
var G__15136 = (0);
seq__15103_15121 = G__15133;
chunk__15104_15122 = G__15134;
count__15105_15123 = G__15135;
i__15106_15124 = G__15136;
continue;
} else {
var c_15137 = cljs.core.first(seq__15103_15131__$1);
class_list_15120.add(c_15137);

var G__15138 = cljs.core.next(seq__15103_15131__$1);
var G__15139 = null;
var G__15140 = (0);
var G__15141 = (0);
seq__15103_15121 = G__15138;
chunk__15104_15122 = G__15139;
count__15105_15123 = G__15140;
i__15106_15124 = G__15141;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15107_15142 = cljs.core.seq(classes__$1);
var chunk__15108_15143 = null;
var count__15109_15144 = (0);
var i__15110_15145 = (0);
while(true){
if((i__15110_15145 < count__15109_15144)){
var c_15146 = chunk__15108_15143.cljs$core$IIndexed$_nth$arity$2(null,i__15110_15145);
var class_name_15147 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15147,c_15146))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15147 === ""))?c_15146:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15147)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15146)].join('')));
}

var G__15148 = seq__15107_15142;
var G__15149 = chunk__15108_15143;
var G__15150 = count__15109_15144;
var G__15151 = (i__15110_15145 + (1));
seq__15107_15142 = G__15148;
chunk__15108_15143 = G__15149;
count__15109_15144 = G__15150;
i__15110_15145 = G__15151;
continue;
} else {
var temp__4657__auto___15152 = cljs.core.seq(seq__15107_15142);
if(temp__4657__auto___15152){
var seq__15107_15153__$1 = temp__4657__auto___15152;
if(cljs.core.chunked_seq_QMARK_(seq__15107_15153__$1)){
var c__8792__auto___15154 = cljs.core.chunk_first(seq__15107_15153__$1);
var G__15155 = cljs.core.chunk_rest(seq__15107_15153__$1);
var G__15156 = c__8792__auto___15154;
var G__15157 = cljs.core.count(c__8792__auto___15154);
var G__15158 = (0);
seq__15107_15142 = G__15155;
chunk__15108_15143 = G__15156;
count__15109_15144 = G__15157;
i__15110_15145 = G__15158;
continue;
} else {
var c_15159 = cljs.core.first(seq__15107_15153__$1);
var class_name_15160 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15160,c_15159))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15160 === ""))?c_15159:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15160)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15159)].join('')));
}

var G__15161 = cljs.core.next(seq__15107_15153__$1);
var G__15162 = null;
var G__15163 = (0);
var G__15164 = (0);
seq__15107_15142 = G__15161;
chunk__15108_15143 = G__15162;
count__15109_15144 = G__15163;
i__15110_15145 = G__15164;
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
var seq__15111_15165 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15112_15166 = null;
var count__15113_15167 = (0);
var i__15114_15168 = (0);
while(true){
if((i__15114_15168 < count__15113_15167)){
var c_15169 = chunk__15112_15166.cljs$core$IIndexed$_nth$arity$2(null,i__15114_15168);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15169);

var G__15170 = seq__15111_15165;
var G__15171 = chunk__15112_15166;
var G__15172 = count__15113_15167;
var G__15173 = (i__15114_15168 + (1));
seq__15111_15165 = G__15170;
chunk__15112_15166 = G__15171;
count__15113_15167 = G__15172;
i__15114_15168 = G__15173;
continue;
} else {
var temp__4657__auto___15174 = cljs.core.seq(seq__15111_15165);
if(temp__4657__auto___15174){
var seq__15111_15175__$1 = temp__4657__auto___15174;
if(cljs.core.chunked_seq_QMARK_(seq__15111_15175__$1)){
var c__8792__auto___15176 = cljs.core.chunk_first(seq__15111_15175__$1);
var G__15177 = cljs.core.chunk_rest(seq__15111_15175__$1);
var G__15178 = c__8792__auto___15176;
var G__15179 = cljs.core.count(c__8792__auto___15176);
var G__15180 = (0);
seq__15111_15165 = G__15177;
chunk__15112_15166 = G__15178;
count__15113_15167 = G__15179;
i__15114_15168 = G__15180;
continue;
} else {
var c_15181 = cljs.core.first(seq__15111_15175__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15181);

var G__15182 = cljs.core.next(seq__15111_15175__$1);
var G__15183 = null;
var G__15184 = (0);
var G__15185 = (0);
seq__15111_15165 = G__15182;
chunk__15112_15166 = G__15183;
count__15113_15167 = G__15184;
i__15114_15168 = G__15185;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15099){
var G__15100 = cljs.core.first(seq15099);
var seq15099__$1 = cljs.core.next(seq15099);
var G__15101 = cljs.core.first(seq15099__$1);
var seq15099__$2 = cljs.core.next(seq15099__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15100,G__15101,seq15099__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15190 = arguments.length;
switch (G__15190) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15196 = arguments.length;
var i__9123__auto___15197 = (0);
while(true){
if((i__9123__auto___15197 < len__9122__auto___15196)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15197]));

var G__15198 = (i__9123__auto___15197 + (1));
i__9123__auto___15197 = G__15198;
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
var temp__4655__auto___15199 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15199)){
var class_list_15200 = temp__4655__auto___15199;
class_list_15200.remove(c__$1);
} else {
var class_name_15201 = dommy.core.class$(elem);
var new_class_name_15202 = dommy.utils.remove_class_str(class_name_15201,c__$1);
if((class_name_15201 === new_class_name_15202)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15202);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15191 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15192 = null;
var count__15193 = (0);
var i__15194 = (0);
while(true){
if((i__15194 < count__15193)){
var c = chunk__15192.cljs$core$IIndexed$_nth$arity$2(null,i__15194);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15203 = seq__15191;
var G__15204 = chunk__15192;
var G__15205 = count__15193;
var G__15206 = (i__15194 + (1));
seq__15191 = G__15203;
chunk__15192 = G__15204;
count__15193 = G__15205;
i__15194 = G__15206;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15191);
if(temp__4657__auto__){
var seq__15191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15191__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15191__$1);
var G__15207 = cljs.core.chunk_rest(seq__15191__$1);
var G__15208 = c__8792__auto__;
var G__15209 = cljs.core.count(c__8792__auto__);
var G__15210 = (0);
seq__15191 = G__15207;
chunk__15192 = G__15208;
count__15193 = G__15209;
i__15194 = G__15210;
continue;
} else {
var c = cljs.core.first(seq__15191__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15211 = cljs.core.next(seq__15191__$1);
var G__15212 = null;
var G__15213 = (0);
var G__15214 = (0);
seq__15191 = G__15211;
chunk__15192 = G__15212;
count__15193 = G__15213;
i__15194 = G__15214;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15187){
var G__15188 = cljs.core.first(seq15187);
var seq15187__$1 = cljs.core.next(seq15187);
var G__15189 = cljs.core.first(seq15187__$1);
var seq15187__$2 = cljs.core.next(seq15187__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15188,G__15189,seq15187__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15216 = arguments.length;
switch (G__15216) {
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
var temp__4655__auto___15218 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15218)){
var class_list_15219 = temp__4655__auto___15218;
class_list_15219.toggle(c__$1);
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
var G__15221 = arguments.length;
switch (G__15221) {
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
var G__15224 = arguments.length;
switch (G__15224) {
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
var G__15230 = arguments.length;
switch (G__15230) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15237 = arguments.length;
var i__9123__auto___15238 = (0);
while(true){
if((i__9123__auto___15238 < len__9122__auto___15237)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15238]));

var G__15239 = (i__9123__auto___15238 + (1));
i__9123__auto___15238 = G__15239;
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
var G__15231 = parent;
G__15231.appendChild(child);

return G__15231;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15232_15240 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15233_15241 = null;
var count__15234_15242 = (0);
var i__15235_15243 = (0);
while(true){
if((i__15235_15243 < count__15234_15242)){
var c_15244 = chunk__15233_15241.cljs$core$IIndexed$_nth$arity$2(null,i__15235_15243);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15244);

var G__15245 = seq__15232_15240;
var G__15246 = chunk__15233_15241;
var G__15247 = count__15234_15242;
var G__15248 = (i__15235_15243 + (1));
seq__15232_15240 = G__15245;
chunk__15233_15241 = G__15246;
count__15234_15242 = G__15247;
i__15235_15243 = G__15248;
continue;
} else {
var temp__4657__auto___15249 = cljs.core.seq(seq__15232_15240);
if(temp__4657__auto___15249){
var seq__15232_15250__$1 = temp__4657__auto___15249;
if(cljs.core.chunked_seq_QMARK_(seq__15232_15250__$1)){
var c__8792__auto___15251 = cljs.core.chunk_first(seq__15232_15250__$1);
var G__15252 = cljs.core.chunk_rest(seq__15232_15250__$1);
var G__15253 = c__8792__auto___15251;
var G__15254 = cljs.core.count(c__8792__auto___15251);
var G__15255 = (0);
seq__15232_15240 = G__15252;
chunk__15233_15241 = G__15253;
count__15234_15242 = G__15254;
i__15235_15243 = G__15255;
continue;
} else {
var c_15256 = cljs.core.first(seq__15232_15250__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15256);

var G__15257 = cljs.core.next(seq__15232_15250__$1);
var G__15258 = null;
var G__15259 = (0);
var G__15260 = (0);
seq__15232_15240 = G__15257;
chunk__15233_15241 = G__15258;
count__15234_15242 = G__15259;
i__15235_15243 = G__15260;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15227){
var G__15228 = cljs.core.first(seq15227);
var seq15227__$1 = cljs.core.next(seq15227);
var G__15229 = cljs.core.first(seq15227__$1);
var seq15227__$2 = cljs.core.next(seq15227__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15228,G__15229,seq15227__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15265 = arguments.length;
switch (G__15265) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15272 = arguments.length;
var i__9123__auto___15273 = (0);
while(true){
if((i__9123__auto___15273 < len__9122__auto___15272)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15273]));

var G__15274 = (i__9123__auto___15273 + (1));
i__9123__auto___15273 = G__15274;
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
var G__15266 = parent;
G__15266.insertBefore(child,parent.firstChild);

return G__15266;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15267_15275 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15268_15276 = null;
var count__15269_15277 = (0);
var i__15270_15278 = (0);
while(true){
if((i__15270_15278 < count__15269_15277)){
var c_15279 = chunk__15268_15276.cljs$core$IIndexed$_nth$arity$2(null,i__15270_15278);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15279);

var G__15280 = seq__15267_15275;
var G__15281 = chunk__15268_15276;
var G__15282 = count__15269_15277;
var G__15283 = (i__15270_15278 + (1));
seq__15267_15275 = G__15280;
chunk__15268_15276 = G__15281;
count__15269_15277 = G__15282;
i__15270_15278 = G__15283;
continue;
} else {
var temp__4657__auto___15284 = cljs.core.seq(seq__15267_15275);
if(temp__4657__auto___15284){
var seq__15267_15285__$1 = temp__4657__auto___15284;
if(cljs.core.chunked_seq_QMARK_(seq__15267_15285__$1)){
var c__8792__auto___15286 = cljs.core.chunk_first(seq__15267_15285__$1);
var G__15287 = cljs.core.chunk_rest(seq__15267_15285__$1);
var G__15288 = c__8792__auto___15286;
var G__15289 = cljs.core.count(c__8792__auto___15286);
var G__15290 = (0);
seq__15267_15275 = G__15287;
chunk__15268_15276 = G__15288;
count__15269_15277 = G__15289;
i__15270_15278 = G__15290;
continue;
} else {
var c_15291 = cljs.core.first(seq__15267_15285__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15291);

var G__15292 = cljs.core.next(seq__15267_15285__$1);
var G__15293 = null;
var G__15294 = (0);
var G__15295 = (0);
seq__15267_15275 = G__15292;
chunk__15268_15276 = G__15293;
count__15269_15277 = G__15294;
i__15270_15278 = G__15295;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15262){
var G__15263 = cljs.core.first(seq15262);
var seq15262__$1 = cljs.core.next(seq15262);
var G__15264 = cljs.core.first(seq15262__$1);
var seq15262__$2 = cljs.core.next(seq15262__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15263,G__15264,seq15262__$2);
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
var temp__4655__auto___15296 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15296)){
var next_15297 = temp__4655__auto___15296;
dommy.core.insert_before_BANG_(elem,next_15297);
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
var G__15299 = arguments.length;
switch (G__15299) {
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
var G__15300 = p;
G__15300.removeChild(elem);

return G__15300;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15302){
var vec__15303 = p__15302;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15303,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15303,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15303,special_mouse_event,real_mouse_event){
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
;})(vec__15303,special_mouse_event,real_mouse_event))
});})(vec__15303,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15309 = arguments.length;
var i__9123__auto___15310 = (0);
while(true){
if((i__9123__auto___15310 < len__9122__auto___15309)){
args__9129__auto__.push((arguments[i__9123__auto___15310]));

var G__15311 = (i__9123__auto___15310 + (1));
i__9123__auto___15310 = G__15311;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15306){
var G__15307 = cljs.core.first(seq15306);
var seq15306__$1 = cljs.core.next(seq15306);
var G__15308 = cljs.core.first(seq15306__$1);
var seq15306__$2 = cljs.core.next(seq15306__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15307,G__15308,seq15306__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15312 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15312.cljs$core$IFn$_invoke$arity$1 ? fexpr__15312.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15312.call(null,elem_sel));
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
var len__9122__auto___15360 = arguments.length;
var i__9123__auto___15361 = (0);
while(true){
if((i__9123__auto___15361 < len__9122__auto___15360)){
args__9129__auto__.push((arguments[i__9123__auto___15361]));

var G__15362 = (i__9123__auto___15361 + (1));
i__9123__auto___15361 = G__15362;
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

var vec__15315_15363 = dommy.core.elem_and_selector(elem_sel);
var elem_15364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315_15363,(0),null);
var selector_15365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15315_15363,(1),null);
var seq__15318_15366 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15325_15367 = null;
var count__15326_15368 = (0);
var i__15327_15369 = (0);
while(true){
if((i__15327_15369 < count__15326_15368)){
var vec__15334_15370 = chunk__15325_15367.cljs$core$IIndexed$_nth$arity$2(null,i__15327_15369);
var orig_type_15371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15334_15370,(0),null);
var f_15372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15334_15370,(1),null);
var seq__15328_15373 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15371,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15371,cljs.core.identity])));
var chunk__15330_15374 = null;
var count__15331_15375 = (0);
var i__15332_15376 = (0);
while(true){
if((i__15332_15376 < count__15331_15375)){
var vec__15337_15377 = chunk__15330_15374.cljs$core$IIndexed$_nth$arity$2(null,i__15332_15376);
var actual_type_15378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15337_15377,(0),null);
var factory_15379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15337_15377,(1),null);
var canonical_f_15380 = (function (){var G__15341 = (factory_15379.cljs$core$IFn$_invoke$arity$1 ? factory_15379.cljs$core$IFn$_invoke$arity$1(f_15372) : factory_15379.call(null,f_15372));
var fexpr__15340 = (cljs.core.truth_(selector_15365)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15364,selector_15365):cljs.core.identity);
return (fexpr__15340.cljs$core$IFn$_invoke$arity$1 ? fexpr__15340.cljs$core$IFn$_invoke$arity$1(G__15341) : fexpr__15340.call(null,G__15341));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15364,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15365,actual_type_15378,f_15372], null),canonical_f_15380], 0));

if(cljs.core.truth_(elem_15364.addEventListener)){
elem_15364.addEventListener(cljs.core.name(actual_type_15378),canonical_f_15380);
} else {
elem_15364.attachEvent(cljs.core.name(actual_type_15378),canonical_f_15380);
}

var G__15381 = seq__15328_15373;
var G__15382 = chunk__15330_15374;
var G__15383 = count__15331_15375;
var G__15384 = (i__15332_15376 + (1));
seq__15328_15373 = G__15381;
chunk__15330_15374 = G__15382;
count__15331_15375 = G__15383;
i__15332_15376 = G__15384;
continue;
} else {
var temp__4657__auto___15385 = cljs.core.seq(seq__15328_15373);
if(temp__4657__auto___15385){
var seq__15328_15386__$1 = temp__4657__auto___15385;
if(cljs.core.chunked_seq_QMARK_(seq__15328_15386__$1)){
var c__8792__auto___15387 = cljs.core.chunk_first(seq__15328_15386__$1);
var G__15388 = cljs.core.chunk_rest(seq__15328_15386__$1);
var G__15389 = c__8792__auto___15387;
var G__15390 = cljs.core.count(c__8792__auto___15387);
var G__15391 = (0);
seq__15328_15373 = G__15388;
chunk__15330_15374 = G__15389;
count__15331_15375 = G__15390;
i__15332_15376 = G__15391;
continue;
} else {
var vec__15342_15392 = cljs.core.first(seq__15328_15386__$1);
var actual_type_15393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342_15392,(0),null);
var factory_15394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15342_15392,(1),null);
var canonical_f_15395 = (function (){var G__15346 = (factory_15394.cljs$core$IFn$_invoke$arity$1 ? factory_15394.cljs$core$IFn$_invoke$arity$1(f_15372) : factory_15394.call(null,f_15372));
var fexpr__15345 = (cljs.core.truth_(selector_15365)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15364,selector_15365):cljs.core.identity);
return (fexpr__15345.cljs$core$IFn$_invoke$arity$1 ? fexpr__15345.cljs$core$IFn$_invoke$arity$1(G__15346) : fexpr__15345.call(null,G__15346));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15364,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15365,actual_type_15393,f_15372], null),canonical_f_15395], 0));

if(cljs.core.truth_(elem_15364.addEventListener)){
elem_15364.addEventListener(cljs.core.name(actual_type_15393),canonical_f_15395);
} else {
elem_15364.attachEvent(cljs.core.name(actual_type_15393),canonical_f_15395);
}

var G__15396 = cljs.core.next(seq__15328_15386__$1);
var G__15397 = null;
var G__15398 = (0);
var G__15399 = (0);
seq__15328_15373 = G__15396;
chunk__15330_15374 = G__15397;
count__15331_15375 = G__15398;
i__15332_15376 = G__15399;
continue;
}
} else {
}
}
break;
}

var G__15400 = seq__15318_15366;
var G__15401 = chunk__15325_15367;
var G__15402 = count__15326_15368;
var G__15403 = (i__15327_15369 + (1));
seq__15318_15366 = G__15400;
chunk__15325_15367 = G__15401;
count__15326_15368 = G__15402;
i__15327_15369 = G__15403;
continue;
} else {
var temp__4657__auto___15404 = cljs.core.seq(seq__15318_15366);
if(temp__4657__auto___15404){
var seq__15318_15405__$1 = temp__4657__auto___15404;
if(cljs.core.chunked_seq_QMARK_(seq__15318_15405__$1)){
var c__8792__auto___15406 = cljs.core.chunk_first(seq__15318_15405__$1);
var G__15407 = cljs.core.chunk_rest(seq__15318_15405__$1);
var G__15408 = c__8792__auto___15406;
var G__15409 = cljs.core.count(c__8792__auto___15406);
var G__15410 = (0);
seq__15318_15366 = G__15407;
chunk__15325_15367 = G__15408;
count__15326_15368 = G__15409;
i__15327_15369 = G__15410;
continue;
} else {
var vec__15347_15411 = cljs.core.first(seq__15318_15405__$1);
var orig_type_15412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347_15411,(0),null);
var f_15413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15347_15411,(1),null);
var seq__15319_15414 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15412,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15412,cljs.core.identity])));
var chunk__15321_15415 = null;
var count__15322_15416 = (0);
var i__15323_15417 = (0);
while(true){
if((i__15323_15417 < count__15322_15416)){
var vec__15350_15418 = chunk__15321_15415.cljs$core$IIndexed$_nth$arity$2(null,i__15323_15417);
var actual_type_15419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350_15418,(0),null);
var factory_15420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15350_15418,(1),null);
var canonical_f_15421 = (function (){var G__15354 = (factory_15420.cljs$core$IFn$_invoke$arity$1 ? factory_15420.cljs$core$IFn$_invoke$arity$1(f_15413) : factory_15420.call(null,f_15413));
var fexpr__15353 = (cljs.core.truth_(selector_15365)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15364,selector_15365):cljs.core.identity);
return (fexpr__15353.cljs$core$IFn$_invoke$arity$1 ? fexpr__15353.cljs$core$IFn$_invoke$arity$1(G__15354) : fexpr__15353.call(null,G__15354));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15364,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15365,actual_type_15419,f_15413], null),canonical_f_15421], 0));

if(cljs.core.truth_(elem_15364.addEventListener)){
elem_15364.addEventListener(cljs.core.name(actual_type_15419),canonical_f_15421);
} else {
elem_15364.attachEvent(cljs.core.name(actual_type_15419),canonical_f_15421);
}

var G__15422 = seq__15319_15414;
var G__15423 = chunk__15321_15415;
var G__15424 = count__15322_15416;
var G__15425 = (i__15323_15417 + (1));
seq__15319_15414 = G__15422;
chunk__15321_15415 = G__15423;
count__15322_15416 = G__15424;
i__15323_15417 = G__15425;
continue;
} else {
var temp__4657__auto___15426__$1 = cljs.core.seq(seq__15319_15414);
if(temp__4657__auto___15426__$1){
var seq__15319_15427__$1 = temp__4657__auto___15426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15319_15427__$1)){
var c__8792__auto___15428 = cljs.core.chunk_first(seq__15319_15427__$1);
var G__15429 = cljs.core.chunk_rest(seq__15319_15427__$1);
var G__15430 = c__8792__auto___15428;
var G__15431 = cljs.core.count(c__8792__auto___15428);
var G__15432 = (0);
seq__15319_15414 = G__15429;
chunk__15321_15415 = G__15430;
count__15322_15416 = G__15431;
i__15323_15417 = G__15432;
continue;
} else {
var vec__15355_15433 = cljs.core.first(seq__15319_15427__$1);
var actual_type_15434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_15433,(0),null);
var factory_15435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15355_15433,(1),null);
var canonical_f_15436 = (function (){var G__15359 = (factory_15435.cljs$core$IFn$_invoke$arity$1 ? factory_15435.cljs$core$IFn$_invoke$arity$1(f_15413) : factory_15435.call(null,f_15413));
var fexpr__15358 = (cljs.core.truth_(selector_15365)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15364,selector_15365):cljs.core.identity);
return (fexpr__15358.cljs$core$IFn$_invoke$arity$1 ? fexpr__15358.cljs$core$IFn$_invoke$arity$1(G__15359) : fexpr__15358.call(null,G__15359));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15364,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15365,actual_type_15434,f_15413], null),canonical_f_15436], 0));

if(cljs.core.truth_(elem_15364.addEventListener)){
elem_15364.addEventListener(cljs.core.name(actual_type_15434),canonical_f_15436);
} else {
elem_15364.attachEvent(cljs.core.name(actual_type_15434),canonical_f_15436);
}

var G__15437 = cljs.core.next(seq__15319_15427__$1);
var G__15438 = null;
var G__15439 = (0);
var G__15440 = (0);
seq__15319_15414 = G__15437;
chunk__15321_15415 = G__15438;
count__15322_15416 = G__15439;
i__15323_15417 = G__15440;
continue;
}
} else {
}
}
break;
}

var G__15441 = cljs.core.next(seq__15318_15405__$1);
var G__15442 = null;
var G__15443 = (0);
var G__15444 = (0);
seq__15318_15366 = G__15441;
chunk__15325_15367 = G__15442;
count__15326_15368 = G__15443;
i__15327_15369 = G__15444;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15313){
var G__15314 = cljs.core.first(seq15313);
var seq15313__$1 = cljs.core.next(seq15313);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15314,seq15313__$1);
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
var len__9122__auto___15484 = arguments.length;
var i__9123__auto___15485 = (0);
while(true){
if((i__9123__auto___15485 < len__9122__auto___15484)){
args__9129__auto__.push((arguments[i__9123__auto___15485]));

var G__15486 = (i__9123__auto___15485 + (1));
i__9123__auto___15485 = G__15486;
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

var vec__15447_15487 = dommy.core.elem_and_selector(elem_sel);
var elem_15488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447_15487,(0),null);
var selector_15489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15447_15487,(1),null);
var seq__15450_15490 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15457_15491 = null;
var count__15458_15492 = (0);
var i__15459_15493 = (0);
while(true){
if((i__15459_15493 < count__15458_15492)){
var vec__15466_15494 = chunk__15457_15491.cljs$core$IIndexed$_nth$arity$2(null,i__15459_15493);
var orig_type_15495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466_15494,(0),null);
var f_15496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15466_15494,(1),null);
var seq__15460_15497 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15495,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15495,cljs.core.identity])));
var chunk__15462_15498 = null;
var count__15463_15499 = (0);
var i__15464_15500 = (0);
while(true){
if((i__15464_15500 < count__15463_15499)){
var vec__15469_15501 = chunk__15462_15498.cljs$core$IIndexed$_nth$arity$2(null,i__15464_15500);
var actual_type_15502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469_15501,(0),null);
var __15503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15469_15501,(1),null);
var keys_15504 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15489,actual_type_15502,f_15496], null);
var canonical_f_15505 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15488),keys_15504);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15488,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15504], 0));

if(cljs.core.truth_(elem_15488.removeEventListener)){
elem_15488.removeEventListener(cljs.core.name(actual_type_15502),canonical_f_15505);
} else {
elem_15488.detachEvent(cljs.core.name(actual_type_15502),canonical_f_15505);
}

var G__15506 = seq__15460_15497;
var G__15507 = chunk__15462_15498;
var G__15508 = count__15463_15499;
var G__15509 = (i__15464_15500 + (1));
seq__15460_15497 = G__15506;
chunk__15462_15498 = G__15507;
count__15463_15499 = G__15508;
i__15464_15500 = G__15509;
continue;
} else {
var temp__4657__auto___15510 = cljs.core.seq(seq__15460_15497);
if(temp__4657__auto___15510){
var seq__15460_15511__$1 = temp__4657__auto___15510;
if(cljs.core.chunked_seq_QMARK_(seq__15460_15511__$1)){
var c__8792__auto___15512 = cljs.core.chunk_first(seq__15460_15511__$1);
var G__15513 = cljs.core.chunk_rest(seq__15460_15511__$1);
var G__15514 = c__8792__auto___15512;
var G__15515 = cljs.core.count(c__8792__auto___15512);
var G__15516 = (0);
seq__15460_15497 = G__15513;
chunk__15462_15498 = G__15514;
count__15463_15499 = G__15515;
i__15464_15500 = G__15516;
continue;
} else {
var vec__15472_15517 = cljs.core.first(seq__15460_15511__$1);
var actual_type_15518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472_15517,(0),null);
var __15519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15472_15517,(1),null);
var keys_15520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15489,actual_type_15518,f_15496], null);
var canonical_f_15521 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15488),keys_15520);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15488,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15520], 0));

if(cljs.core.truth_(elem_15488.removeEventListener)){
elem_15488.removeEventListener(cljs.core.name(actual_type_15518),canonical_f_15521);
} else {
elem_15488.detachEvent(cljs.core.name(actual_type_15518),canonical_f_15521);
}

var G__15522 = cljs.core.next(seq__15460_15511__$1);
var G__15523 = null;
var G__15524 = (0);
var G__15525 = (0);
seq__15460_15497 = G__15522;
chunk__15462_15498 = G__15523;
count__15463_15499 = G__15524;
i__15464_15500 = G__15525;
continue;
}
} else {
}
}
break;
}

var G__15526 = seq__15450_15490;
var G__15527 = chunk__15457_15491;
var G__15528 = count__15458_15492;
var G__15529 = (i__15459_15493 + (1));
seq__15450_15490 = G__15526;
chunk__15457_15491 = G__15527;
count__15458_15492 = G__15528;
i__15459_15493 = G__15529;
continue;
} else {
var temp__4657__auto___15530 = cljs.core.seq(seq__15450_15490);
if(temp__4657__auto___15530){
var seq__15450_15531__$1 = temp__4657__auto___15530;
if(cljs.core.chunked_seq_QMARK_(seq__15450_15531__$1)){
var c__8792__auto___15532 = cljs.core.chunk_first(seq__15450_15531__$1);
var G__15533 = cljs.core.chunk_rest(seq__15450_15531__$1);
var G__15534 = c__8792__auto___15532;
var G__15535 = cljs.core.count(c__8792__auto___15532);
var G__15536 = (0);
seq__15450_15490 = G__15533;
chunk__15457_15491 = G__15534;
count__15458_15492 = G__15535;
i__15459_15493 = G__15536;
continue;
} else {
var vec__15475_15537 = cljs.core.first(seq__15450_15531__$1);
var orig_type_15538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475_15537,(0),null);
var f_15539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475_15537,(1),null);
var seq__15451_15540 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15538,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15538,cljs.core.identity])));
var chunk__15453_15541 = null;
var count__15454_15542 = (0);
var i__15455_15543 = (0);
while(true){
if((i__15455_15543 < count__15454_15542)){
var vec__15478_15544 = chunk__15453_15541.cljs$core$IIndexed$_nth$arity$2(null,i__15455_15543);
var actual_type_15545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478_15544,(0),null);
var __15546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478_15544,(1),null);
var keys_15547 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15489,actual_type_15545,f_15539], null);
var canonical_f_15548 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15488),keys_15547);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15488,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15547], 0));

if(cljs.core.truth_(elem_15488.removeEventListener)){
elem_15488.removeEventListener(cljs.core.name(actual_type_15545),canonical_f_15548);
} else {
elem_15488.detachEvent(cljs.core.name(actual_type_15545),canonical_f_15548);
}

var G__15549 = seq__15451_15540;
var G__15550 = chunk__15453_15541;
var G__15551 = count__15454_15542;
var G__15552 = (i__15455_15543 + (1));
seq__15451_15540 = G__15549;
chunk__15453_15541 = G__15550;
count__15454_15542 = G__15551;
i__15455_15543 = G__15552;
continue;
} else {
var temp__4657__auto___15553__$1 = cljs.core.seq(seq__15451_15540);
if(temp__4657__auto___15553__$1){
var seq__15451_15554__$1 = temp__4657__auto___15553__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15451_15554__$1)){
var c__8792__auto___15555 = cljs.core.chunk_first(seq__15451_15554__$1);
var G__15556 = cljs.core.chunk_rest(seq__15451_15554__$1);
var G__15557 = c__8792__auto___15555;
var G__15558 = cljs.core.count(c__8792__auto___15555);
var G__15559 = (0);
seq__15451_15540 = G__15556;
chunk__15453_15541 = G__15557;
count__15454_15542 = G__15558;
i__15455_15543 = G__15559;
continue;
} else {
var vec__15481_15560 = cljs.core.first(seq__15451_15554__$1);
var actual_type_15561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481_15560,(0),null);
var __15562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15481_15560,(1),null);
var keys_15563 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15489,actual_type_15561,f_15539], null);
var canonical_f_15564 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15488),keys_15563);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15488,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15563], 0));

if(cljs.core.truth_(elem_15488.removeEventListener)){
elem_15488.removeEventListener(cljs.core.name(actual_type_15561),canonical_f_15564);
} else {
elem_15488.detachEvent(cljs.core.name(actual_type_15561),canonical_f_15564);
}

var G__15565 = cljs.core.next(seq__15451_15554__$1);
var G__15566 = null;
var G__15567 = (0);
var G__15568 = (0);
seq__15451_15540 = G__15565;
chunk__15453_15541 = G__15566;
count__15454_15542 = G__15567;
i__15455_15543 = G__15568;
continue;
}
} else {
}
}
break;
}

var G__15569 = cljs.core.next(seq__15450_15531__$1);
var G__15570 = null;
var G__15571 = (0);
var G__15572 = (0);
seq__15450_15490 = G__15569;
chunk__15457_15491 = G__15570;
count__15458_15492 = G__15571;
i__15459_15493 = G__15572;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15445){
var G__15446 = cljs.core.first(seq15445);
var seq15445__$1 = cljs.core.next(seq15445);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15446,seq15445__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15588 = arguments.length;
var i__9123__auto___15589 = (0);
while(true){
if((i__9123__auto___15589 < len__9122__auto___15588)){
args__9129__auto__.push((arguments[i__9123__auto___15589]));

var G__15590 = (i__9123__auto___15589 + (1));
i__9123__auto___15589 = G__15590;
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

var vec__15575_15591 = dommy.core.elem_and_selector(elem_sel);
var elem_15592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575_15591,(0),null);
var selector_15593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15575_15591,(1),null);
var seq__15578_15594 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15579_15595 = null;
var count__15580_15596 = (0);
var i__15581_15597 = (0);
while(true){
if((i__15581_15597 < count__15580_15596)){
var vec__15582_15598 = chunk__15579_15595.cljs$core$IIndexed$_nth$arity$2(null,i__15581_15597);
var type_15599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15582_15598,(0),null);
var f_15600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15582_15598,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15599,((function (seq__15578_15594,chunk__15579_15595,count__15580_15596,i__15581_15597,vec__15582_15598,type_15599,f_15600,vec__15575_15591,elem_15592,selector_15593){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15599,dommy$core$this_fn], 0));

return (f_15600.cljs$core$IFn$_invoke$arity$1 ? f_15600.cljs$core$IFn$_invoke$arity$1(e) : f_15600.call(null,e));
});})(seq__15578_15594,chunk__15579_15595,count__15580_15596,i__15581_15597,vec__15582_15598,type_15599,f_15600,vec__15575_15591,elem_15592,selector_15593))
], 0));

var G__15601 = seq__15578_15594;
var G__15602 = chunk__15579_15595;
var G__15603 = count__15580_15596;
var G__15604 = (i__15581_15597 + (1));
seq__15578_15594 = G__15601;
chunk__15579_15595 = G__15602;
count__15580_15596 = G__15603;
i__15581_15597 = G__15604;
continue;
} else {
var temp__4657__auto___15605 = cljs.core.seq(seq__15578_15594);
if(temp__4657__auto___15605){
var seq__15578_15606__$1 = temp__4657__auto___15605;
if(cljs.core.chunked_seq_QMARK_(seq__15578_15606__$1)){
var c__8792__auto___15607 = cljs.core.chunk_first(seq__15578_15606__$1);
var G__15608 = cljs.core.chunk_rest(seq__15578_15606__$1);
var G__15609 = c__8792__auto___15607;
var G__15610 = cljs.core.count(c__8792__auto___15607);
var G__15611 = (0);
seq__15578_15594 = G__15608;
chunk__15579_15595 = G__15609;
count__15580_15596 = G__15610;
i__15581_15597 = G__15611;
continue;
} else {
var vec__15585_15612 = cljs.core.first(seq__15578_15606__$1);
var type_15613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585_15612,(0),null);
var f_15614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15585_15612,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15613,((function (seq__15578_15594,chunk__15579_15595,count__15580_15596,i__15581_15597,vec__15585_15612,type_15613,f_15614,seq__15578_15606__$1,temp__4657__auto___15605,vec__15575_15591,elem_15592,selector_15593){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15613,dommy$core$this_fn], 0));

return (f_15614.cljs$core$IFn$_invoke$arity$1 ? f_15614.cljs$core$IFn$_invoke$arity$1(e) : f_15614.call(null,e));
});})(seq__15578_15594,chunk__15579_15595,count__15580_15596,i__15581_15597,vec__15585_15612,type_15613,f_15614,seq__15578_15606__$1,temp__4657__auto___15605,vec__15575_15591,elem_15592,selector_15593))
], 0));

var G__15615 = cljs.core.next(seq__15578_15606__$1);
var G__15616 = null;
var G__15617 = (0);
var G__15618 = (0);
seq__15578_15594 = G__15615;
chunk__15579_15595 = G__15616;
count__15580_15596 = G__15617;
i__15581_15597 = G__15618;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15573){
var G__15574 = cljs.core.first(seq15573);
var seq15573__$1 = cljs.core.next(seq15573);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15574,seq15573__$1);
});

