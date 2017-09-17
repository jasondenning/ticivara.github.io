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
var G__14809 = arguments.length;
switch (G__14809) {
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
var G__14812 = arguments.length;
switch (G__14812) {
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
var G__14816 = arguments.length;
switch (G__14816) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14814_SHARP_){
return !((p1__14814_SHARP_ === base));
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
var len__9122__auto___14830 = arguments.length;
var i__9123__auto___14831 = (0);
while(true){
if((i__9123__auto___14831 < len__9122__auto___14830)){
args__9129__auto__.push((arguments[i__9123__auto___14831]));

var G__14832 = (i__9123__auto___14831 + (1));
i__9123__auto___14831 = G__14832;
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
var seq__14820_14833 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14821_14834 = null;
var count__14822_14835 = (0);
var i__14823_14836 = (0);
while(true){
if((i__14823_14836 < count__14822_14835)){
var vec__14824_14837 = chunk__14821_14834.cljs$core$IIndexed$_nth$arity$2(null,i__14823_14836);
var k_14838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824_14837,(0),null);
var v_14839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824_14837,(1),null);
style.setProperty(dommy.utils.as_str(k_14838),v_14839);

var G__14840 = seq__14820_14833;
var G__14841 = chunk__14821_14834;
var G__14842 = count__14822_14835;
var G__14843 = (i__14823_14836 + (1));
seq__14820_14833 = G__14840;
chunk__14821_14834 = G__14841;
count__14822_14835 = G__14842;
i__14823_14836 = G__14843;
continue;
} else {
var temp__4657__auto___14844 = cljs.core.seq(seq__14820_14833);
if(temp__4657__auto___14844){
var seq__14820_14845__$1 = temp__4657__auto___14844;
if(cljs.core.chunked_seq_QMARK_(seq__14820_14845__$1)){
var c__8792__auto___14846 = cljs.core.chunk_first(seq__14820_14845__$1);
var G__14847 = cljs.core.chunk_rest(seq__14820_14845__$1);
var G__14848 = c__8792__auto___14846;
var G__14849 = cljs.core.count(c__8792__auto___14846);
var G__14850 = (0);
seq__14820_14833 = G__14847;
chunk__14821_14834 = G__14848;
count__14822_14835 = G__14849;
i__14823_14836 = G__14850;
continue;
} else {
var vec__14827_14851 = cljs.core.first(seq__14820_14845__$1);
var k_14852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14827_14851,(0),null);
var v_14853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14827_14851,(1),null);
style.setProperty(dommy.utils.as_str(k_14852),v_14853);

var G__14854 = cljs.core.next(seq__14820_14845__$1);
var G__14855 = null;
var G__14856 = (0);
var G__14857 = (0);
seq__14820_14833 = G__14854;
chunk__14821_14834 = G__14855;
count__14822_14835 = G__14856;
i__14823_14836 = G__14857;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14818){
var G__14819 = cljs.core.first(seq14818);
var seq14818__$1 = cljs.core.next(seq14818);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14819,seq14818__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14864 = arguments.length;
var i__9123__auto___14865 = (0);
while(true){
if((i__9123__auto___14865 < len__9122__auto___14864)){
args__9129__auto__.push((arguments[i__9123__auto___14865]));

var G__14866 = (i__9123__auto___14865 + (1));
i__9123__auto___14865 = G__14866;
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
var seq__14860_14867 = cljs.core.seq(keywords);
var chunk__14861_14868 = null;
var count__14862_14869 = (0);
var i__14863_14870 = (0);
while(true){
if((i__14863_14870 < count__14862_14869)){
var kw_14871 = chunk__14861_14868.cljs$core$IIndexed$_nth$arity$2(null,i__14863_14870);
style.removeProperty(dommy.utils.as_str(kw_14871));

var G__14872 = seq__14860_14867;
var G__14873 = chunk__14861_14868;
var G__14874 = count__14862_14869;
var G__14875 = (i__14863_14870 + (1));
seq__14860_14867 = G__14872;
chunk__14861_14868 = G__14873;
count__14862_14869 = G__14874;
i__14863_14870 = G__14875;
continue;
} else {
var temp__4657__auto___14876 = cljs.core.seq(seq__14860_14867);
if(temp__4657__auto___14876){
var seq__14860_14877__$1 = temp__4657__auto___14876;
if(cljs.core.chunked_seq_QMARK_(seq__14860_14877__$1)){
var c__8792__auto___14878 = cljs.core.chunk_first(seq__14860_14877__$1);
var G__14879 = cljs.core.chunk_rest(seq__14860_14877__$1);
var G__14880 = c__8792__auto___14878;
var G__14881 = cljs.core.count(c__8792__auto___14878);
var G__14882 = (0);
seq__14860_14867 = G__14879;
chunk__14861_14868 = G__14880;
count__14862_14869 = G__14881;
i__14863_14870 = G__14882;
continue;
} else {
var kw_14883 = cljs.core.first(seq__14860_14877__$1);
style.removeProperty(dommy.utils.as_str(kw_14883));

var G__14884 = cljs.core.next(seq__14860_14877__$1);
var G__14885 = null;
var G__14886 = (0);
var G__14887 = (0);
seq__14860_14867 = G__14884;
chunk__14861_14868 = G__14885;
count__14862_14869 = G__14886;
i__14863_14870 = G__14887;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14858){
var G__14859 = cljs.core.first(seq14858);
var seq14858__$1 = cljs.core.next(seq14858);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14859,seq14858__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14900 = arguments.length;
var i__9123__auto___14901 = (0);
while(true){
if((i__9123__auto___14901 < len__9122__auto___14900)){
args__9129__auto__.push((arguments[i__9123__auto___14901]));

var G__14902 = (i__9123__auto___14901 + (1));
i__9123__auto___14901 = G__14902;
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

var seq__14890_14903 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14891_14904 = null;
var count__14892_14905 = (0);
var i__14893_14906 = (0);
while(true){
if((i__14893_14906 < count__14892_14905)){
var vec__14894_14907 = chunk__14891_14904.cljs$core$IIndexed$_nth$arity$2(null,i__14893_14906);
var k_14908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894_14907,(0),null);
var v_14909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14894_14907,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14908,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14909),"px"].join('')], 0));

var G__14910 = seq__14890_14903;
var G__14911 = chunk__14891_14904;
var G__14912 = count__14892_14905;
var G__14913 = (i__14893_14906 + (1));
seq__14890_14903 = G__14910;
chunk__14891_14904 = G__14911;
count__14892_14905 = G__14912;
i__14893_14906 = G__14913;
continue;
} else {
var temp__4657__auto___14914 = cljs.core.seq(seq__14890_14903);
if(temp__4657__auto___14914){
var seq__14890_14915__$1 = temp__4657__auto___14914;
if(cljs.core.chunked_seq_QMARK_(seq__14890_14915__$1)){
var c__8792__auto___14916 = cljs.core.chunk_first(seq__14890_14915__$1);
var G__14917 = cljs.core.chunk_rest(seq__14890_14915__$1);
var G__14918 = c__8792__auto___14916;
var G__14919 = cljs.core.count(c__8792__auto___14916);
var G__14920 = (0);
seq__14890_14903 = G__14917;
chunk__14891_14904 = G__14918;
count__14892_14905 = G__14919;
i__14893_14906 = G__14920;
continue;
} else {
var vec__14897_14921 = cljs.core.first(seq__14890_14915__$1);
var k_14922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897_14921,(0),null);
var v_14923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14897_14921,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14922,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14923),"px"].join('')], 0));

var G__14924 = cljs.core.next(seq__14890_14915__$1);
var G__14925 = null;
var G__14926 = (0);
var G__14927 = (0);
seq__14890_14903 = G__14924;
chunk__14891_14904 = G__14925;
count__14892_14905 = G__14926;
i__14893_14906 = G__14927;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14888){
var G__14889 = cljs.core.first(seq14888);
var seq14888__$1 = cljs.core.next(seq14888);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14889,seq14888__$1);
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
var G__14933 = arguments.length;
switch (G__14933) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14947 = arguments.length;
var i__9123__auto___14948 = (0);
while(true){
if((i__9123__auto___14948 < len__9122__auto___14947)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14948]));

var G__14949 = (i__9123__auto___14948 + (1));
i__9123__auto___14948 = G__14949;
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
var G__14934 = elem;
(G__14934[k__$1] = v);

return G__14934;
} else {
var G__14935 = elem;
G__14935.setAttribute(k__$1,v);

return G__14935;
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

var seq__14936_14950 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__14937_14951 = null;
var count__14938_14952 = (0);
var i__14939_14953 = (0);
while(true){
if((i__14939_14953 < count__14938_14952)){
var vec__14940_14954 = chunk__14937_14951.cljs$core$IIndexed$_nth$arity$2(null,i__14939_14953);
var k_14955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14954,(0),null);
var v_14956__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14954,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14955__$1,v_14956__$1);

var G__14957 = seq__14936_14950;
var G__14958 = chunk__14937_14951;
var G__14959 = count__14938_14952;
var G__14960 = (i__14939_14953 + (1));
seq__14936_14950 = G__14957;
chunk__14937_14951 = G__14958;
count__14938_14952 = G__14959;
i__14939_14953 = G__14960;
continue;
} else {
var temp__4657__auto___14961 = cljs.core.seq(seq__14936_14950);
if(temp__4657__auto___14961){
var seq__14936_14962__$1 = temp__4657__auto___14961;
if(cljs.core.chunked_seq_QMARK_(seq__14936_14962__$1)){
var c__8792__auto___14963 = cljs.core.chunk_first(seq__14936_14962__$1);
var G__14964 = cljs.core.chunk_rest(seq__14936_14962__$1);
var G__14965 = c__8792__auto___14963;
var G__14966 = cljs.core.count(c__8792__auto___14963);
var G__14967 = (0);
seq__14936_14950 = G__14964;
chunk__14937_14951 = G__14965;
count__14938_14952 = G__14966;
i__14939_14953 = G__14967;
continue;
} else {
var vec__14943_14968 = cljs.core.first(seq__14936_14962__$1);
var k_14969__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14943_14968,(0),null);
var v_14970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14943_14968,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14969__$1,v_14970__$1);

var G__14971 = cljs.core.next(seq__14936_14962__$1);
var G__14972 = null;
var G__14973 = (0);
var G__14974 = (0);
seq__14936_14950 = G__14971;
chunk__14937_14951 = G__14972;
count__14938_14952 = G__14973;
i__14939_14953 = G__14974;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14929){
var G__14930 = cljs.core.first(seq14929);
var seq14929__$1 = cljs.core.next(seq14929);
var G__14931 = cljs.core.first(seq14929__$1);
var seq14929__$2 = cljs.core.next(seq14929__$1);
var G__14932 = cljs.core.first(seq14929__$2);
var seq14929__$3 = cljs.core.next(seq14929__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14930,G__14931,G__14932,seq14929__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__14979 = arguments.length;
switch (G__14979) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14986 = arguments.length;
var i__9123__auto___14987 = (0);
while(true){
if((i__9123__auto___14987 < len__9122__auto___14986)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14987]));

var G__14988 = (i__9123__auto___14987 + (1));
i__9123__auto___14987 = G__14988;
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
var k_14989__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__14980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__14980.cljs$core$IFn$_invoke$arity$1 ? fexpr__14980.cljs$core$IFn$_invoke$arity$1(k_14989__$1) : fexpr__14980.call(null,k_14989__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_14989__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14981_14990 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__14982_14991 = null;
var count__14983_14992 = (0);
var i__14984_14993 = (0);
while(true){
if((i__14984_14993 < count__14983_14992)){
var k_14994__$1 = chunk__14982_14991.cljs$core$IIndexed$_nth$arity$2(null,i__14984_14993);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_14994__$1);

var G__14995 = seq__14981_14990;
var G__14996 = chunk__14982_14991;
var G__14997 = count__14983_14992;
var G__14998 = (i__14984_14993 + (1));
seq__14981_14990 = G__14995;
chunk__14982_14991 = G__14996;
count__14983_14992 = G__14997;
i__14984_14993 = G__14998;
continue;
} else {
var temp__4657__auto___14999 = cljs.core.seq(seq__14981_14990);
if(temp__4657__auto___14999){
var seq__14981_15000__$1 = temp__4657__auto___14999;
if(cljs.core.chunked_seq_QMARK_(seq__14981_15000__$1)){
var c__8792__auto___15001 = cljs.core.chunk_first(seq__14981_15000__$1);
var G__15002 = cljs.core.chunk_rest(seq__14981_15000__$1);
var G__15003 = c__8792__auto___15001;
var G__15004 = cljs.core.count(c__8792__auto___15001);
var G__15005 = (0);
seq__14981_14990 = G__15002;
chunk__14982_14991 = G__15003;
count__14983_14992 = G__15004;
i__14984_14993 = G__15005;
continue;
} else {
var k_15006__$1 = cljs.core.first(seq__14981_15000__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_15006__$1);

var G__15007 = cljs.core.next(seq__14981_15000__$1);
var G__15008 = null;
var G__15009 = (0);
var G__15010 = (0);
seq__14981_14990 = G__15007;
chunk__14982_14991 = G__15008;
count__14983_14992 = G__15009;
i__14984_14993 = G__15010;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14976){
var G__14977 = cljs.core.first(seq14976);
var seq14976__$1 = cljs.core.next(seq14976);
var G__14978 = cljs.core.first(seq14976__$1);
var seq14976__$2 = cljs.core.next(seq14976__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14977,G__14978,seq14976__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__15012 = arguments.length;
switch (G__15012) {
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
var G__15018 = arguments.length;
switch (G__15018) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15032 = arguments.length;
var i__9123__auto___15033 = (0);
while(true){
if((i__9123__auto___15033 < len__9122__auto___15032)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15033]));

var G__15034 = (i__9123__auto___15033 + (1));
i__9123__auto___15033 = G__15034;
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
var temp__4655__auto___15035 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15035)){
var class_list_15036 = temp__4655__auto___15035;
var seq__15019_15037 = cljs.core.seq(classes__$1);
var chunk__15020_15038 = null;
var count__15021_15039 = (0);
var i__15022_15040 = (0);
while(true){
if((i__15022_15040 < count__15021_15039)){
var c_15041 = chunk__15020_15038.cljs$core$IIndexed$_nth$arity$2(null,i__15022_15040);
class_list_15036.add(c_15041);

var G__15042 = seq__15019_15037;
var G__15043 = chunk__15020_15038;
var G__15044 = count__15021_15039;
var G__15045 = (i__15022_15040 + (1));
seq__15019_15037 = G__15042;
chunk__15020_15038 = G__15043;
count__15021_15039 = G__15044;
i__15022_15040 = G__15045;
continue;
} else {
var temp__4657__auto___15046 = cljs.core.seq(seq__15019_15037);
if(temp__4657__auto___15046){
var seq__15019_15047__$1 = temp__4657__auto___15046;
if(cljs.core.chunked_seq_QMARK_(seq__15019_15047__$1)){
var c__8792__auto___15048 = cljs.core.chunk_first(seq__15019_15047__$1);
var G__15049 = cljs.core.chunk_rest(seq__15019_15047__$1);
var G__15050 = c__8792__auto___15048;
var G__15051 = cljs.core.count(c__8792__auto___15048);
var G__15052 = (0);
seq__15019_15037 = G__15049;
chunk__15020_15038 = G__15050;
count__15021_15039 = G__15051;
i__15022_15040 = G__15052;
continue;
} else {
var c_15053 = cljs.core.first(seq__15019_15047__$1);
class_list_15036.add(c_15053);

var G__15054 = cljs.core.next(seq__15019_15047__$1);
var G__15055 = null;
var G__15056 = (0);
var G__15057 = (0);
seq__15019_15037 = G__15054;
chunk__15020_15038 = G__15055;
count__15021_15039 = G__15056;
i__15022_15040 = G__15057;
continue;
}
} else {
}
}
break;
}
} else {
var seq__15023_15058 = cljs.core.seq(classes__$1);
var chunk__15024_15059 = null;
var count__15025_15060 = (0);
var i__15026_15061 = (0);
while(true){
if((i__15026_15061 < count__15025_15060)){
var c_15062 = chunk__15024_15059.cljs$core$IIndexed$_nth$arity$2(null,i__15026_15061);
var class_name_15063 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15063,c_15062))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15063 === ""))?c_15062:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15063)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15062)].join('')));
}

var G__15064 = seq__15023_15058;
var G__15065 = chunk__15024_15059;
var G__15066 = count__15025_15060;
var G__15067 = (i__15026_15061 + (1));
seq__15023_15058 = G__15064;
chunk__15024_15059 = G__15065;
count__15025_15060 = G__15066;
i__15026_15061 = G__15067;
continue;
} else {
var temp__4657__auto___15068 = cljs.core.seq(seq__15023_15058);
if(temp__4657__auto___15068){
var seq__15023_15069__$1 = temp__4657__auto___15068;
if(cljs.core.chunked_seq_QMARK_(seq__15023_15069__$1)){
var c__8792__auto___15070 = cljs.core.chunk_first(seq__15023_15069__$1);
var G__15071 = cljs.core.chunk_rest(seq__15023_15069__$1);
var G__15072 = c__8792__auto___15070;
var G__15073 = cljs.core.count(c__8792__auto___15070);
var G__15074 = (0);
seq__15023_15058 = G__15071;
chunk__15024_15059 = G__15072;
count__15025_15060 = G__15073;
i__15026_15061 = G__15074;
continue;
} else {
var c_15075 = cljs.core.first(seq__15023_15069__$1);
var class_name_15076 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_15076,c_15075))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_15076 === ""))?c_15075:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_15076)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_15075)].join('')));
}

var G__15077 = cljs.core.next(seq__15023_15069__$1);
var G__15078 = null;
var G__15079 = (0);
var G__15080 = (0);
seq__15023_15058 = G__15077;
chunk__15024_15059 = G__15078;
count__15025_15060 = G__15079;
i__15026_15061 = G__15080;
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
var seq__15027_15081 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__15028_15082 = null;
var count__15029_15083 = (0);
var i__15030_15084 = (0);
while(true){
if((i__15030_15084 < count__15029_15083)){
var c_15085 = chunk__15028_15082.cljs$core$IIndexed$_nth$arity$2(null,i__15030_15084);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15085);

var G__15086 = seq__15027_15081;
var G__15087 = chunk__15028_15082;
var G__15088 = count__15029_15083;
var G__15089 = (i__15030_15084 + (1));
seq__15027_15081 = G__15086;
chunk__15028_15082 = G__15087;
count__15029_15083 = G__15088;
i__15030_15084 = G__15089;
continue;
} else {
var temp__4657__auto___15090 = cljs.core.seq(seq__15027_15081);
if(temp__4657__auto___15090){
var seq__15027_15091__$1 = temp__4657__auto___15090;
if(cljs.core.chunked_seq_QMARK_(seq__15027_15091__$1)){
var c__8792__auto___15092 = cljs.core.chunk_first(seq__15027_15091__$1);
var G__15093 = cljs.core.chunk_rest(seq__15027_15091__$1);
var G__15094 = c__8792__auto___15092;
var G__15095 = cljs.core.count(c__8792__auto___15092);
var G__15096 = (0);
seq__15027_15081 = G__15093;
chunk__15028_15082 = G__15094;
count__15029_15083 = G__15095;
i__15030_15084 = G__15096;
continue;
} else {
var c_15097 = cljs.core.first(seq__15027_15091__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_15097);

var G__15098 = cljs.core.next(seq__15027_15091__$1);
var G__15099 = null;
var G__15100 = (0);
var G__15101 = (0);
seq__15027_15081 = G__15098;
chunk__15028_15082 = G__15099;
count__15029_15083 = G__15100;
i__15030_15084 = G__15101;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq15015){
var G__15016 = cljs.core.first(seq15015);
var seq15015__$1 = cljs.core.next(seq15015);
var G__15017 = cljs.core.first(seq15015__$1);
var seq15015__$2 = cljs.core.next(seq15015__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15016,G__15017,seq15015__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15106 = arguments.length;
switch (G__15106) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15112 = arguments.length;
var i__9123__auto___15113 = (0);
while(true){
if((i__9123__auto___15113 < len__9122__auto___15112)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15113]));

var G__15114 = (i__9123__auto___15113 + (1));
i__9123__auto___15113 = G__15114;
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
var temp__4655__auto___15115 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15115)){
var class_list_15116 = temp__4655__auto___15115;
class_list_15116.remove(c__$1);
} else {
var class_name_15117 = dommy.core.class$(elem);
var new_class_name_15118 = dommy.utils.remove_class_str(class_name_15117,c__$1);
if((class_name_15117 === new_class_name_15118)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15118);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15107 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15108 = null;
var count__15109 = (0);
var i__15110 = (0);
while(true){
if((i__15110 < count__15109)){
var c = chunk__15108.cljs$core$IIndexed$_nth$arity$2(null,i__15110);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15119 = seq__15107;
var G__15120 = chunk__15108;
var G__15121 = count__15109;
var G__15122 = (i__15110 + (1));
seq__15107 = G__15119;
chunk__15108 = G__15120;
count__15109 = G__15121;
i__15110 = G__15122;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15107);
if(temp__4657__auto__){
var seq__15107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15107__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15107__$1);
var G__15123 = cljs.core.chunk_rest(seq__15107__$1);
var G__15124 = c__8792__auto__;
var G__15125 = cljs.core.count(c__8792__auto__);
var G__15126 = (0);
seq__15107 = G__15123;
chunk__15108 = G__15124;
count__15109 = G__15125;
i__15110 = G__15126;
continue;
} else {
var c = cljs.core.first(seq__15107__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15127 = cljs.core.next(seq__15107__$1);
var G__15128 = null;
var G__15129 = (0);
var G__15130 = (0);
seq__15107 = G__15127;
chunk__15108 = G__15128;
count__15109 = G__15129;
i__15110 = G__15130;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq15103){
var G__15104 = cljs.core.first(seq15103);
var seq15103__$1 = cljs.core.next(seq15103);
var G__15105 = cljs.core.first(seq15103__$1);
var seq15103__$2 = cljs.core.next(seq15103__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15104,G__15105,seq15103__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15132 = arguments.length;
switch (G__15132) {
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
var temp__4655__auto___15134 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15134)){
var class_list_15135 = temp__4655__auto___15134;
class_list_15135.toggle(c__$1);
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
var G__15137 = arguments.length;
switch (G__15137) {
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
var G__15140 = arguments.length;
switch (G__15140) {
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
var G__15146 = arguments.length;
switch (G__15146) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15153 = arguments.length;
var i__9123__auto___15154 = (0);
while(true){
if((i__9123__auto___15154 < len__9122__auto___15153)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15154]));

var G__15155 = (i__9123__auto___15154 + (1));
i__9123__auto___15154 = G__15155;
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
var G__15147 = parent;
G__15147.appendChild(child);

return G__15147;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15148_15156 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15149_15157 = null;
var count__15150_15158 = (0);
var i__15151_15159 = (0);
while(true){
if((i__15151_15159 < count__15150_15158)){
var c_15160 = chunk__15149_15157.cljs$core$IIndexed$_nth$arity$2(null,i__15151_15159);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15160);

var G__15161 = seq__15148_15156;
var G__15162 = chunk__15149_15157;
var G__15163 = count__15150_15158;
var G__15164 = (i__15151_15159 + (1));
seq__15148_15156 = G__15161;
chunk__15149_15157 = G__15162;
count__15150_15158 = G__15163;
i__15151_15159 = G__15164;
continue;
} else {
var temp__4657__auto___15165 = cljs.core.seq(seq__15148_15156);
if(temp__4657__auto___15165){
var seq__15148_15166__$1 = temp__4657__auto___15165;
if(cljs.core.chunked_seq_QMARK_(seq__15148_15166__$1)){
var c__8792__auto___15167 = cljs.core.chunk_first(seq__15148_15166__$1);
var G__15168 = cljs.core.chunk_rest(seq__15148_15166__$1);
var G__15169 = c__8792__auto___15167;
var G__15170 = cljs.core.count(c__8792__auto___15167);
var G__15171 = (0);
seq__15148_15156 = G__15168;
chunk__15149_15157 = G__15169;
count__15150_15158 = G__15170;
i__15151_15159 = G__15171;
continue;
} else {
var c_15172 = cljs.core.first(seq__15148_15166__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15172);

var G__15173 = cljs.core.next(seq__15148_15166__$1);
var G__15174 = null;
var G__15175 = (0);
var G__15176 = (0);
seq__15148_15156 = G__15173;
chunk__15149_15157 = G__15174;
count__15150_15158 = G__15175;
i__15151_15159 = G__15176;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15143){
var G__15144 = cljs.core.first(seq15143);
var seq15143__$1 = cljs.core.next(seq15143);
var G__15145 = cljs.core.first(seq15143__$1);
var seq15143__$2 = cljs.core.next(seq15143__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15144,G__15145,seq15143__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15181 = arguments.length;
switch (G__15181) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15188 = arguments.length;
var i__9123__auto___15189 = (0);
while(true){
if((i__9123__auto___15189 < len__9122__auto___15188)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15189]));

var G__15190 = (i__9123__auto___15189 + (1));
i__9123__auto___15189 = G__15190;
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
var G__15182 = parent;
G__15182.insertBefore(child,parent.firstChild);

return G__15182;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15183_15191 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15184_15192 = null;
var count__15185_15193 = (0);
var i__15186_15194 = (0);
while(true){
if((i__15186_15194 < count__15185_15193)){
var c_15195 = chunk__15184_15192.cljs$core$IIndexed$_nth$arity$2(null,i__15186_15194);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15195);

var G__15196 = seq__15183_15191;
var G__15197 = chunk__15184_15192;
var G__15198 = count__15185_15193;
var G__15199 = (i__15186_15194 + (1));
seq__15183_15191 = G__15196;
chunk__15184_15192 = G__15197;
count__15185_15193 = G__15198;
i__15186_15194 = G__15199;
continue;
} else {
var temp__4657__auto___15200 = cljs.core.seq(seq__15183_15191);
if(temp__4657__auto___15200){
var seq__15183_15201__$1 = temp__4657__auto___15200;
if(cljs.core.chunked_seq_QMARK_(seq__15183_15201__$1)){
var c__8792__auto___15202 = cljs.core.chunk_first(seq__15183_15201__$1);
var G__15203 = cljs.core.chunk_rest(seq__15183_15201__$1);
var G__15204 = c__8792__auto___15202;
var G__15205 = cljs.core.count(c__8792__auto___15202);
var G__15206 = (0);
seq__15183_15191 = G__15203;
chunk__15184_15192 = G__15204;
count__15185_15193 = G__15205;
i__15186_15194 = G__15206;
continue;
} else {
var c_15207 = cljs.core.first(seq__15183_15201__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15207);

var G__15208 = cljs.core.next(seq__15183_15201__$1);
var G__15209 = null;
var G__15210 = (0);
var G__15211 = (0);
seq__15183_15191 = G__15208;
chunk__15184_15192 = G__15209;
count__15185_15193 = G__15210;
i__15186_15194 = G__15211;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15178){
var G__15179 = cljs.core.first(seq15178);
var seq15178__$1 = cljs.core.next(seq15178);
var G__15180 = cljs.core.first(seq15178__$1);
var seq15178__$2 = cljs.core.next(seq15178__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15179,G__15180,seq15178__$2);
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
var temp__4655__auto___15212 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15212)){
var next_15213 = temp__4655__auto___15212;
dommy.core.insert_before_BANG_(elem,next_15213);
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
var G__15215 = arguments.length;
switch (G__15215) {
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
var G__15216 = p;
G__15216.removeChild(elem);

return G__15216;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15218){
var vec__15219 = p__15218;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15219,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15219,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15219,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15219,special_mouse_event,real_mouse_event){
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
;})(vec__15219,special_mouse_event,real_mouse_event))
});})(vec__15219,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15225 = arguments.length;
var i__9123__auto___15226 = (0);
while(true){
if((i__9123__auto___15226 < len__9122__auto___15225)){
args__9129__auto__.push((arguments[i__9123__auto___15226]));

var G__15227 = (i__9123__auto___15226 + (1));
i__9123__auto___15226 = G__15227;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15222){
var G__15223 = cljs.core.first(seq15222);
var seq15222__$1 = cljs.core.next(seq15222);
var G__15224 = cljs.core.first(seq15222__$1);
var seq15222__$2 = cljs.core.next(seq15222__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15223,G__15224,seq15222__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15228 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15228.cljs$core$IFn$_invoke$arity$1 ? fexpr__15228.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15228.call(null,elem_sel));
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
var len__9122__auto___15276 = arguments.length;
var i__9123__auto___15277 = (0);
while(true){
if((i__9123__auto___15277 < len__9122__auto___15276)){
args__9129__auto__.push((arguments[i__9123__auto___15277]));

var G__15278 = (i__9123__auto___15277 + (1));
i__9123__auto___15277 = G__15278;
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

var vec__15231_15279 = dommy.core.elem_and_selector(elem_sel);
var elem_15280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231_15279,(0),null);
var selector_15281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15231_15279,(1),null);
var seq__15234_15282 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15241_15283 = null;
var count__15242_15284 = (0);
var i__15243_15285 = (0);
while(true){
if((i__15243_15285 < count__15242_15284)){
var vec__15250_15286 = chunk__15241_15283.cljs$core$IIndexed$_nth$arity$2(null,i__15243_15285);
var orig_type_15287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250_15286,(0),null);
var f_15288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15250_15286,(1),null);
var seq__15244_15289 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15287,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15287,cljs.core.identity])));
var chunk__15246_15290 = null;
var count__15247_15291 = (0);
var i__15248_15292 = (0);
while(true){
if((i__15248_15292 < count__15247_15291)){
var vec__15253_15293 = chunk__15246_15290.cljs$core$IIndexed$_nth$arity$2(null,i__15248_15292);
var actual_type_15294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253_15293,(0),null);
var factory_15295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15253_15293,(1),null);
var canonical_f_15296 = (function (){var G__15257 = (factory_15295.cljs$core$IFn$_invoke$arity$1 ? factory_15295.cljs$core$IFn$_invoke$arity$1(f_15288) : factory_15295.call(null,f_15288));
var fexpr__15256 = (cljs.core.truth_(selector_15281)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15280,selector_15281):cljs.core.identity);
return (fexpr__15256.cljs$core$IFn$_invoke$arity$1 ? fexpr__15256.cljs$core$IFn$_invoke$arity$1(G__15257) : fexpr__15256.call(null,G__15257));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15280,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15281,actual_type_15294,f_15288], null),canonical_f_15296], 0));

if(cljs.core.truth_(elem_15280.addEventListener)){
elem_15280.addEventListener(cljs.core.name(actual_type_15294),canonical_f_15296);
} else {
elem_15280.attachEvent(cljs.core.name(actual_type_15294),canonical_f_15296);
}

var G__15297 = seq__15244_15289;
var G__15298 = chunk__15246_15290;
var G__15299 = count__15247_15291;
var G__15300 = (i__15248_15292 + (1));
seq__15244_15289 = G__15297;
chunk__15246_15290 = G__15298;
count__15247_15291 = G__15299;
i__15248_15292 = G__15300;
continue;
} else {
var temp__4657__auto___15301 = cljs.core.seq(seq__15244_15289);
if(temp__4657__auto___15301){
var seq__15244_15302__$1 = temp__4657__auto___15301;
if(cljs.core.chunked_seq_QMARK_(seq__15244_15302__$1)){
var c__8792__auto___15303 = cljs.core.chunk_first(seq__15244_15302__$1);
var G__15304 = cljs.core.chunk_rest(seq__15244_15302__$1);
var G__15305 = c__8792__auto___15303;
var G__15306 = cljs.core.count(c__8792__auto___15303);
var G__15307 = (0);
seq__15244_15289 = G__15304;
chunk__15246_15290 = G__15305;
count__15247_15291 = G__15306;
i__15248_15292 = G__15307;
continue;
} else {
var vec__15258_15308 = cljs.core.first(seq__15244_15302__$1);
var actual_type_15309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258_15308,(0),null);
var factory_15310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15258_15308,(1),null);
var canonical_f_15311 = (function (){var G__15262 = (factory_15310.cljs$core$IFn$_invoke$arity$1 ? factory_15310.cljs$core$IFn$_invoke$arity$1(f_15288) : factory_15310.call(null,f_15288));
var fexpr__15261 = (cljs.core.truth_(selector_15281)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15280,selector_15281):cljs.core.identity);
return (fexpr__15261.cljs$core$IFn$_invoke$arity$1 ? fexpr__15261.cljs$core$IFn$_invoke$arity$1(G__15262) : fexpr__15261.call(null,G__15262));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15280,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15281,actual_type_15309,f_15288], null),canonical_f_15311], 0));

if(cljs.core.truth_(elem_15280.addEventListener)){
elem_15280.addEventListener(cljs.core.name(actual_type_15309),canonical_f_15311);
} else {
elem_15280.attachEvent(cljs.core.name(actual_type_15309),canonical_f_15311);
}

var G__15312 = cljs.core.next(seq__15244_15302__$1);
var G__15313 = null;
var G__15314 = (0);
var G__15315 = (0);
seq__15244_15289 = G__15312;
chunk__15246_15290 = G__15313;
count__15247_15291 = G__15314;
i__15248_15292 = G__15315;
continue;
}
} else {
}
}
break;
}

var G__15316 = seq__15234_15282;
var G__15317 = chunk__15241_15283;
var G__15318 = count__15242_15284;
var G__15319 = (i__15243_15285 + (1));
seq__15234_15282 = G__15316;
chunk__15241_15283 = G__15317;
count__15242_15284 = G__15318;
i__15243_15285 = G__15319;
continue;
} else {
var temp__4657__auto___15320 = cljs.core.seq(seq__15234_15282);
if(temp__4657__auto___15320){
var seq__15234_15321__$1 = temp__4657__auto___15320;
if(cljs.core.chunked_seq_QMARK_(seq__15234_15321__$1)){
var c__8792__auto___15322 = cljs.core.chunk_first(seq__15234_15321__$1);
var G__15323 = cljs.core.chunk_rest(seq__15234_15321__$1);
var G__15324 = c__8792__auto___15322;
var G__15325 = cljs.core.count(c__8792__auto___15322);
var G__15326 = (0);
seq__15234_15282 = G__15323;
chunk__15241_15283 = G__15324;
count__15242_15284 = G__15325;
i__15243_15285 = G__15326;
continue;
} else {
var vec__15263_15327 = cljs.core.first(seq__15234_15321__$1);
var orig_type_15328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15263_15327,(0),null);
var f_15329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15263_15327,(1),null);
var seq__15235_15330 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15328,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15328,cljs.core.identity])));
var chunk__15237_15331 = null;
var count__15238_15332 = (0);
var i__15239_15333 = (0);
while(true){
if((i__15239_15333 < count__15238_15332)){
var vec__15266_15334 = chunk__15237_15331.cljs$core$IIndexed$_nth$arity$2(null,i__15239_15333);
var actual_type_15335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266_15334,(0),null);
var factory_15336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15266_15334,(1),null);
var canonical_f_15337 = (function (){var G__15270 = (factory_15336.cljs$core$IFn$_invoke$arity$1 ? factory_15336.cljs$core$IFn$_invoke$arity$1(f_15329) : factory_15336.call(null,f_15329));
var fexpr__15269 = (cljs.core.truth_(selector_15281)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15280,selector_15281):cljs.core.identity);
return (fexpr__15269.cljs$core$IFn$_invoke$arity$1 ? fexpr__15269.cljs$core$IFn$_invoke$arity$1(G__15270) : fexpr__15269.call(null,G__15270));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15280,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15281,actual_type_15335,f_15329], null),canonical_f_15337], 0));

if(cljs.core.truth_(elem_15280.addEventListener)){
elem_15280.addEventListener(cljs.core.name(actual_type_15335),canonical_f_15337);
} else {
elem_15280.attachEvent(cljs.core.name(actual_type_15335),canonical_f_15337);
}

var G__15338 = seq__15235_15330;
var G__15339 = chunk__15237_15331;
var G__15340 = count__15238_15332;
var G__15341 = (i__15239_15333 + (1));
seq__15235_15330 = G__15338;
chunk__15237_15331 = G__15339;
count__15238_15332 = G__15340;
i__15239_15333 = G__15341;
continue;
} else {
var temp__4657__auto___15342__$1 = cljs.core.seq(seq__15235_15330);
if(temp__4657__auto___15342__$1){
var seq__15235_15343__$1 = temp__4657__auto___15342__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15235_15343__$1)){
var c__8792__auto___15344 = cljs.core.chunk_first(seq__15235_15343__$1);
var G__15345 = cljs.core.chunk_rest(seq__15235_15343__$1);
var G__15346 = c__8792__auto___15344;
var G__15347 = cljs.core.count(c__8792__auto___15344);
var G__15348 = (0);
seq__15235_15330 = G__15345;
chunk__15237_15331 = G__15346;
count__15238_15332 = G__15347;
i__15239_15333 = G__15348;
continue;
} else {
var vec__15271_15349 = cljs.core.first(seq__15235_15343__$1);
var actual_type_15350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271_15349,(0),null);
var factory_15351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15271_15349,(1),null);
var canonical_f_15352 = (function (){var G__15275 = (factory_15351.cljs$core$IFn$_invoke$arity$1 ? factory_15351.cljs$core$IFn$_invoke$arity$1(f_15329) : factory_15351.call(null,f_15329));
var fexpr__15274 = (cljs.core.truth_(selector_15281)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15280,selector_15281):cljs.core.identity);
return (fexpr__15274.cljs$core$IFn$_invoke$arity$1 ? fexpr__15274.cljs$core$IFn$_invoke$arity$1(G__15275) : fexpr__15274.call(null,G__15275));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15280,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15281,actual_type_15350,f_15329], null),canonical_f_15352], 0));

if(cljs.core.truth_(elem_15280.addEventListener)){
elem_15280.addEventListener(cljs.core.name(actual_type_15350),canonical_f_15352);
} else {
elem_15280.attachEvent(cljs.core.name(actual_type_15350),canonical_f_15352);
}

var G__15353 = cljs.core.next(seq__15235_15343__$1);
var G__15354 = null;
var G__15355 = (0);
var G__15356 = (0);
seq__15235_15330 = G__15353;
chunk__15237_15331 = G__15354;
count__15238_15332 = G__15355;
i__15239_15333 = G__15356;
continue;
}
} else {
}
}
break;
}

var G__15357 = cljs.core.next(seq__15234_15321__$1);
var G__15358 = null;
var G__15359 = (0);
var G__15360 = (0);
seq__15234_15282 = G__15357;
chunk__15241_15283 = G__15358;
count__15242_15284 = G__15359;
i__15243_15285 = G__15360;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15229){
var G__15230 = cljs.core.first(seq15229);
var seq15229__$1 = cljs.core.next(seq15229);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15230,seq15229__$1);
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
var len__9122__auto___15400 = arguments.length;
var i__9123__auto___15401 = (0);
while(true){
if((i__9123__auto___15401 < len__9122__auto___15400)){
args__9129__auto__.push((arguments[i__9123__auto___15401]));

var G__15402 = (i__9123__auto___15401 + (1));
i__9123__auto___15401 = G__15402;
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

var vec__15363_15403 = dommy.core.elem_and_selector(elem_sel);
var elem_15404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15363_15403,(0),null);
var selector_15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15363_15403,(1),null);
var seq__15366_15406 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15373_15407 = null;
var count__15374_15408 = (0);
var i__15375_15409 = (0);
while(true){
if((i__15375_15409 < count__15374_15408)){
var vec__15382_15410 = chunk__15373_15407.cljs$core$IIndexed$_nth$arity$2(null,i__15375_15409);
var orig_type_15411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15382_15410,(0),null);
var f_15412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15382_15410,(1),null);
var seq__15376_15413 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15411,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15411,cljs.core.identity])));
var chunk__15378_15414 = null;
var count__15379_15415 = (0);
var i__15380_15416 = (0);
while(true){
if((i__15380_15416 < count__15379_15415)){
var vec__15385_15417 = chunk__15378_15414.cljs$core$IIndexed$_nth$arity$2(null,i__15380_15416);
var actual_type_15418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15385_15417,(0),null);
var __15419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15385_15417,(1),null);
var keys_15420 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15405,actual_type_15418,f_15412], null);
var canonical_f_15421 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15404),keys_15420);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15404,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15420], 0));

if(cljs.core.truth_(elem_15404.removeEventListener)){
elem_15404.removeEventListener(cljs.core.name(actual_type_15418),canonical_f_15421);
} else {
elem_15404.detachEvent(cljs.core.name(actual_type_15418),canonical_f_15421);
}

var G__15422 = seq__15376_15413;
var G__15423 = chunk__15378_15414;
var G__15424 = count__15379_15415;
var G__15425 = (i__15380_15416 + (1));
seq__15376_15413 = G__15422;
chunk__15378_15414 = G__15423;
count__15379_15415 = G__15424;
i__15380_15416 = G__15425;
continue;
} else {
var temp__4657__auto___15426 = cljs.core.seq(seq__15376_15413);
if(temp__4657__auto___15426){
var seq__15376_15427__$1 = temp__4657__auto___15426;
if(cljs.core.chunked_seq_QMARK_(seq__15376_15427__$1)){
var c__8792__auto___15428 = cljs.core.chunk_first(seq__15376_15427__$1);
var G__15429 = cljs.core.chunk_rest(seq__15376_15427__$1);
var G__15430 = c__8792__auto___15428;
var G__15431 = cljs.core.count(c__8792__auto___15428);
var G__15432 = (0);
seq__15376_15413 = G__15429;
chunk__15378_15414 = G__15430;
count__15379_15415 = G__15431;
i__15380_15416 = G__15432;
continue;
} else {
var vec__15388_15433 = cljs.core.first(seq__15376_15427__$1);
var actual_type_15434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388_15433,(0),null);
var __15435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15388_15433,(1),null);
var keys_15436 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15405,actual_type_15434,f_15412], null);
var canonical_f_15437 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15404),keys_15436);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15404,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15436], 0));

if(cljs.core.truth_(elem_15404.removeEventListener)){
elem_15404.removeEventListener(cljs.core.name(actual_type_15434),canonical_f_15437);
} else {
elem_15404.detachEvent(cljs.core.name(actual_type_15434),canonical_f_15437);
}

var G__15438 = cljs.core.next(seq__15376_15427__$1);
var G__15439 = null;
var G__15440 = (0);
var G__15441 = (0);
seq__15376_15413 = G__15438;
chunk__15378_15414 = G__15439;
count__15379_15415 = G__15440;
i__15380_15416 = G__15441;
continue;
}
} else {
}
}
break;
}

var G__15442 = seq__15366_15406;
var G__15443 = chunk__15373_15407;
var G__15444 = count__15374_15408;
var G__15445 = (i__15375_15409 + (1));
seq__15366_15406 = G__15442;
chunk__15373_15407 = G__15443;
count__15374_15408 = G__15444;
i__15375_15409 = G__15445;
continue;
} else {
var temp__4657__auto___15446 = cljs.core.seq(seq__15366_15406);
if(temp__4657__auto___15446){
var seq__15366_15447__$1 = temp__4657__auto___15446;
if(cljs.core.chunked_seq_QMARK_(seq__15366_15447__$1)){
var c__8792__auto___15448 = cljs.core.chunk_first(seq__15366_15447__$1);
var G__15449 = cljs.core.chunk_rest(seq__15366_15447__$1);
var G__15450 = c__8792__auto___15448;
var G__15451 = cljs.core.count(c__8792__auto___15448);
var G__15452 = (0);
seq__15366_15406 = G__15449;
chunk__15373_15407 = G__15450;
count__15374_15408 = G__15451;
i__15375_15409 = G__15452;
continue;
} else {
var vec__15391_15453 = cljs.core.first(seq__15366_15447__$1);
var orig_type_15454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391_15453,(0),null);
var f_15455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15391_15453,(1),null);
var seq__15367_15456 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15454,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15454,cljs.core.identity])));
var chunk__15369_15457 = null;
var count__15370_15458 = (0);
var i__15371_15459 = (0);
while(true){
if((i__15371_15459 < count__15370_15458)){
var vec__15394_15460 = chunk__15369_15457.cljs$core$IIndexed$_nth$arity$2(null,i__15371_15459);
var actual_type_15461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394_15460,(0),null);
var __15462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394_15460,(1),null);
var keys_15463 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15405,actual_type_15461,f_15455], null);
var canonical_f_15464 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15404),keys_15463);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15404,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15463], 0));

if(cljs.core.truth_(elem_15404.removeEventListener)){
elem_15404.removeEventListener(cljs.core.name(actual_type_15461),canonical_f_15464);
} else {
elem_15404.detachEvent(cljs.core.name(actual_type_15461),canonical_f_15464);
}

var G__15465 = seq__15367_15456;
var G__15466 = chunk__15369_15457;
var G__15467 = count__15370_15458;
var G__15468 = (i__15371_15459 + (1));
seq__15367_15456 = G__15465;
chunk__15369_15457 = G__15466;
count__15370_15458 = G__15467;
i__15371_15459 = G__15468;
continue;
} else {
var temp__4657__auto___15469__$1 = cljs.core.seq(seq__15367_15456);
if(temp__4657__auto___15469__$1){
var seq__15367_15470__$1 = temp__4657__auto___15469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15367_15470__$1)){
var c__8792__auto___15471 = cljs.core.chunk_first(seq__15367_15470__$1);
var G__15472 = cljs.core.chunk_rest(seq__15367_15470__$1);
var G__15473 = c__8792__auto___15471;
var G__15474 = cljs.core.count(c__8792__auto___15471);
var G__15475 = (0);
seq__15367_15456 = G__15472;
chunk__15369_15457 = G__15473;
count__15370_15458 = G__15474;
i__15371_15459 = G__15475;
continue;
} else {
var vec__15397_15476 = cljs.core.first(seq__15367_15470__$1);
var actual_type_15477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15476,(0),null);
var __15478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15476,(1),null);
var keys_15479 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15405,actual_type_15477,f_15455], null);
var canonical_f_15480 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15404),keys_15479);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15404,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15479], 0));

if(cljs.core.truth_(elem_15404.removeEventListener)){
elem_15404.removeEventListener(cljs.core.name(actual_type_15477),canonical_f_15480);
} else {
elem_15404.detachEvent(cljs.core.name(actual_type_15477),canonical_f_15480);
}

var G__15481 = cljs.core.next(seq__15367_15470__$1);
var G__15482 = null;
var G__15483 = (0);
var G__15484 = (0);
seq__15367_15456 = G__15481;
chunk__15369_15457 = G__15482;
count__15370_15458 = G__15483;
i__15371_15459 = G__15484;
continue;
}
} else {
}
}
break;
}

var G__15485 = cljs.core.next(seq__15366_15447__$1);
var G__15486 = null;
var G__15487 = (0);
var G__15488 = (0);
seq__15366_15406 = G__15485;
chunk__15373_15407 = G__15486;
count__15374_15408 = G__15487;
i__15375_15409 = G__15488;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15361){
var G__15362 = cljs.core.first(seq15361);
var seq15361__$1 = cljs.core.next(seq15361);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15362,seq15361__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15504 = arguments.length;
var i__9123__auto___15505 = (0);
while(true){
if((i__9123__auto___15505 < len__9122__auto___15504)){
args__9129__auto__.push((arguments[i__9123__auto___15505]));

var G__15506 = (i__9123__auto___15505 + (1));
i__9123__auto___15505 = G__15506;
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

var vec__15491_15507 = dommy.core.elem_and_selector(elem_sel);
var elem_15508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15507,(0),null);
var selector_15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15491_15507,(1),null);
var seq__15494_15510 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15495_15511 = null;
var count__15496_15512 = (0);
var i__15497_15513 = (0);
while(true){
if((i__15497_15513 < count__15496_15512)){
var vec__15498_15514 = chunk__15495_15511.cljs$core$IIndexed$_nth$arity$2(null,i__15497_15513);
var type_15515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15498_15514,(0),null);
var f_15516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15498_15514,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15515,((function (seq__15494_15510,chunk__15495_15511,count__15496_15512,i__15497_15513,vec__15498_15514,type_15515,f_15516,vec__15491_15507,elem_15508,selector_15509){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15515,dommy$core$this_fn], 0));

return (f_15516.cljs$core$IFn$_invoke$arity$1 ? f_15516.cljs$core$IFn$_invoke$arity$1(e) : f_15516.call(null,e));
});})(seq__15494_15510,chunk__15495_15511,count__15496_15512,i__15497_15513,vec__15498_15514,type_15515,f_15516,vec__15491_15507,elem_15508,selector_15509))
], 0));

var G__15517 = seq__15494_15510;
var G__15518 = chunk__15495_15511;
var G__15519 = count__15496_15512;
var G__15520 = (i__15497_15513 + (1));
seq__15494_15510 = G__15517;
chunk__15495_15511 = G__15518;
count__15496_15512 = G__15519;
i__15497_15513 = G__15520;
continue;
} else {
var temp__4657__auto___15521 = cljs.core.seq(seq__15494_15510);
if(temp__4657__auto___15521){
var seq__15494_15522__$1 = temp__4657__auto___15521;
if(cljs.core.chunked_seq_QMARK_(seq__15494_15522__$1)){
var c__8792__auto___15523 = cljs.core.chunk_first(seq__15494_15522__$1);
var G__15524 = cljs.core.chunk_rest(seq__15494_15522__$1);
var G__15525 = c__8792__auto___15523;
var G__15526 = cljs.core.count(c__8792__auto___15523);
var G__15527 = (0);
seq__15494_15510 = G__15524;
chunk__15495_15511 = G__15525;
count__15496_15512 = G__15526;
i__15497_15513 = G__15527;
continue;
} else {
var vec__15501_15528 = cljs.core.first(seq__15494_15522__$1);
var type_15529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501_15528,(0),null);
var f_15530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501_15528,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15529,((function (seq__15494_15510,chunk__15495_15511,count__15496_15512,i__15497_15513,vec__15501_15528,type_15529,f_15530,seq__15494_15522__$1,temp__4657__auto___15521,vec__15491_15507,elem_15508,selector_15509){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15529,dommy$core$this_fn], 0));

return (f_15530.cljs$core$IFn$_invoke$arity$1 ? f_15530.cljs$core$IFn$_invoke$arity$1(e) : f_15530.call(null,e));
});})(seq__15494_15510,chunk__15495_15511,count__15496_15512,i__15497_15513,vec__15501_15528,type_15529,f_15530,seq__15494_15522__$1,temp__4657__auto___15521,vec__15491_15507,elem_15508,selector_15509))
], 0));

var G__15531 = cljs.core.next(seq__15494_15522__$1);
var G__15532 = null;
var G__15533 = (0);
var G__15534 = (0);
seq__15494_15510 = G__15531;
chunk__15495_15511 = G__15532;
count__15496_15512 = G__15533;
i__15497_15513 = G__15534;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15489){
var G__15490 = cljs.core.first(seq15489);
var seq15489__$1 = cljs.core.next(seq15489);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15490,seq15489__$1);
});

