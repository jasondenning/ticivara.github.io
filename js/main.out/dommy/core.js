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
var G__14705 = arguments.length;
switch (G__14705) {
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
var G__14708 = arguments.length;
switch (G__14708) {
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
var G__14712 = arguments.length;
switch (G__14712) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14710_SHARP_){
return !((p1__14710_SHARP_ === base));
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
var len__9122__auto___14726 = arguments.length;
var i__9123__auto___14727 = (0);
while(true){
if((i__9123__auto___14727 < len__9122__auto___14726)){
args__9129__auto__.push((arguments[i__9123__auto___14727]));

var G__14728 = (i__9123__auto___14727 + (1));
i__9123__auto___14727 = G__14728;
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
var seq__14716_14729 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14717_14730 = null;
var count__14718_14731 = (0);
var i__14719_14732 = (0);
while(true){
if((i__14719_14732 < count__14718_14731)){
var vec__14720_14733 = chunk__14717_14730.cljs$core$IIndexed$_nth$arity$2(null,i__14719_14732);
var k_14734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720_14733,(0),null);
var v_14735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14720_14733,(1),null);
style.setProperty(dommy.utils.as_str(k_14734),v_14735);

var G__14736 = seq__14716_14729;
var G__14737 = chunk__14717_14730;
var G__14738 = count__14718_14731;
var G__14739 = (i__14719_14732 + (1));
seq__14716_14729 = G__14736;
chunk__14717_14730 = G__14737;
count__14718_14731 = G__14738;
i__14719_14732 = G__14739;
continue;
} else {
var temp__4657__auto___14740 = cljs.core.seq(seq__14716_14729);
if(temp__4657__auto___14740){
var seq__14716_14741__$1 = temp__4657__auto___14740;
if(cljs.core.chunked_seq_QMARK_(seq__14716_14741__$1)){
var c__8792__auto___14742 = cljs.core.chunk_first(seq__14716_14741__$1);
var G__14743 = cljs.core.chunk_rest(seq__14716_14741__$1);
var G__14744 = c__8792__auto___14742;
var G__14745 = cljs.core.count(c__8792__auto___14742);
var G__14746 = (0);
seq__14716_14729 = G__14743;
chunk__14717_14730 = G__14744;
count__14718_14731 = G__14745;
i__14719_14732 = G__14746;
continue;
} else {
var vec__14723_14747 = cljs.core.first(seq__14716_14741__$1);
var k_14748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723_14747,(0),null);
var v_14749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723_14747,(1),null);
style.setProperty(dommy.utils.as_str(k_14748),v_14749);

var G__14750 = cljs.core.next(seq__14716_14741__$1);
var G__14751 = null;
var G__14752 = (0);
var G__14753 = (0);
seq__14716_14729 = G__14750;
chunk__14717_14730 = G__14751;
count__14718_14731 = G__14752;
i__14719_14732 = G__14753;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq14714){
var G__14715 = cljs.core.first(seq14714);
var seq14714__$1 = cljs.core.next(seq14714);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14715,seq14714__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14760 = arguments.length;
var i__9123__auto___14761 = (0);
while(true){
if((i__9123__auto___14761 < len__9122__auto___14760)){
args__9129__auto__.push((arguments[i__9123__auto___14761]));

var G__14762 = (i__9123__auto___14761 + (1));
i__9123__auto___14761 = G__14762;
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
var seq__14756_14763 = cljs.core.seq(keywords);
var chunk__14757_14764 = null;
var count__14758_14765 = (0);
var i__14759_14766 = (0);
while(true){
if((i__14759_14766 < count__14758_14765)){
var kw_14767 = chunk__14757_14764.cljs$core$IIndexed$_nth$arity$2(null,i__14759_14766);
style.removeProperty(dommy.utils.as_str(kw_14767));

var G__14768 = seq__14756_14763;
var G__14769 = chunk__14757_14764;
var G__14770 = count__14758_14765;
var G__14771 = (i__14759_14766 + (1));
seq__14756_14763 = G__14768;
chunk__14757_14764 = G__14769;
count__14758_14765 = G__14770;
i__14759_14766 = G__14771;
continue;
} else {
var temp__4657__auto___14772 = cljs.core.seq(seq__14756_14763);
if(temp__4657__auto___14772){
var seq__14756_14773__$1 = temp__4657__auto___14772;
if(cljs.core.chunked_seq_QMARK_(seq__14756_14773__$1)){
var c__8792__auto___14774 = cljs.core.chunk_first(seq__14756_14773__$1);
var G__14775 = cljs.core.chunk_rest(seq__14756_14773__$1);
var G__14776 = c__8792__auto___14774;
var G__14777 = cljs.core.count(c__8792__auto___14774);
var G__14778 = (0);
seq__14756_14763 = G__14775;
chunk__14757_14764 = G__14776;
count__14758_14765 = G__14777;
i__14759_14766 = G__14778;
continue;
} else {
var kw_14779 = cljs.core.first(seq__14756_14773__$1);
style.removeProperty(dommy.utils.as_str(kw_14779));

var G__14780 = cljs.core.next(seq__14756_14773__$1);
var G__14781 = null;
var G__14782 = (0);
var G__14783 = (0);
seq__14756_14763 = G__14780;
chunk__14757_14764 = G__14781;
count__14758_14765 = G__14782;
i__14759_14766 = G__14783;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq14754){
var G__14755 = cljs.core.first(seq14754);
var seq14754__$1 = cljs.core.next(seq14754);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14755,seq14754__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14796 = arguments.length;
var i__9123__auto___14797 = (0);
while(true){
if((i__9123__auto___14797 < len__9122__auto___14796)){
args__9129__auto__.push((arguments[i__9123__auto___14797]));

var G__14798 = (i__9123__auto___14797 + (1));
i__9123__auto___14797 = G__14798;
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

var seq__14786_14799 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__14787_14800 = null;
var count__14788_14801 = (0);
var i__14789_14802 = (0);
while(true){
if((i__14789_14802 < count__14788_14801)){
var vec__14790_14803 = chunk__14787_14800.cljs$core$IIndexed$_nth$arity$2(null,i__14789_14802);
var k_14804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790_14803,(0),null);
var v_14805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790_14803,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14804,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14805),"px"].join('')], 0));

var G__14806 = seq__14786_14799;
var G__14807 = chunk__14787_14800;
var G__14808 = count__14788_14801;
var G__14809 = (i__14789_14802 + (1));
seq__14786_14799 = G__14806;
chunk__14787_14800 = G__14807;
count__14788_14801 = G__14808;
i__14789_14802 = G__14809;
continue;
} else {
var temp__4657__auto___14810 = cljs.core.seq(seq__14786_14799);
if(temp__4657__auto___14810){
var seq__14786_14811__$1 = temp__4657__auto___14810;
if(cljs.core.chunked_seq_QMARK_(seq__14786_14811__$1)){
var c__8792__auto___14812 = cljs.core.chunk_first(seq__14786_14811__$1);
var G__14813 = cljs.core.chunk_rest(seq__14786_14811__$1);
var G__14814 = c__8792__auto___14812;
var G__14815 = cljs.core.count(c__8792__auto___14812);
var G__14816 = (0);
seq__14786_14799 = G__14813;
chunk__14787_14800 = G__14814;
count__14788_14801 = G__14815;
i__14789_14802 = G__14816;
continue;
} else {
var vec__14793_14817 = cljs.core.first(seq__14786_14811__$1);
var k_14818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14817,(0),null);
var v_14819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793_14817,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_14818,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_14819),"px"].join('')], 0));

var G__14820 = cljs.core.next(seq__14786_14811__$1);
var G__14821 = null;
var G__14822 = (0);
var G__14823 = (0);
seq__14786_14799 = G__14820;
chunk__14787_14800 = G__14821;
count__14788_14801 = G__14822;
i__14789_14802 = G__14823;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq14784){
var G__14785 = cljs.core.first(seq14784);
var seq14784__$1 = cljs.core.next(seq14784);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14785,seq14784__$1);
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
var G__14829 = arguments.length;
switch (G__14829) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14843 = arguments.length;
var i__9123__auto___14844 = (0);
while(true){
if((i__9123__auto___14844 < len__9122__auto___14843)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14844]));

var G__14845 = (i__9123__auto___14844 + (1));
i__9123__auto___14844 = G__14845;
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
var G__14830 = elem;
(G__14830[k__$1] = v);

return G__14830;
} else {
var G__14831 = elem;
G__14831.setAttribute(k__$1,v);

return G__14831;
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

var seq__14832_14846 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__14833_14847 = null;
var count__14834_14848 = (0);
var i__14835_14849 = (0);
while(true){
if((i__14835_14849 < count__14834_14848)){
var vec__14836_14850 = chunk__14833_14847.cljs$core$IIndexed$_nth$arity$2(null,i__14835_14849);
var k_14851__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14836_14850,(0),null);
var v_14852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14836_14850,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14851__$1,v_14852__$1);

var G__14853 = seq__14832_14846;
var G__14854 = chunk__14833_14847;
var G__14855 = count__14834_14848;
var G__14856 = (i__14835_14849 + (1));
seq__14832_14846 = G__14853;
chunk__14833_14847 = G__14854;
count__14834_14848 = G__14855;
i__14835_14849 = G__14856;
continue;
} else {
var temp__4657__auto___14857 = cljs.core.seq(seq__14832_14846);
if(temp__4657__auto___14857){
var seq__14832_14858__$1 = temp__4657__auto___14857;
if(cljs.core.chunked_seq_QMARK_(seq__14832_14858__$1)){
var c__8792__auto___14859 = cljs.core.chunk_first(seq__14832_14858__$1);
var G__14860 = cljs.core.chunk_rest(seq__14832_14858__$1);
var G__14861 = c__8792__auto___14859;
var G__14862 = cljs.core.count(c__8792__auto___14859);
var G__14863 = (0);
seq__14832_14846 = G__14860;
chunk__14833_14847 = G__14861;
count__14834_14848 = G__14862;
i__14835_14849 = G__14863;
continue;
} else {
var vec__14839_14864 = cljs.core.first(seq__14832_14858__$1);
var k_14865__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839_14864,(0),null);
var v_14866__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14839_14864,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_14865__$1,v_14866__$1);

var G__14867 = cljs.core.next(seq__14832_14858__$1);
var G__14868 = null;
var G__14869 = (0);
var G__14870 = (0);
seq__14832_14846 = G__14867;
chunk__14833_14847 = G__14868;
count__14834_14848 = G__14869;
i__14835_14849 = G__14870;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq14825){
var G__14826 = cljs.core.first(seq14825);
var seq14825__$1 = cljs.core.next(seq14825);
var G__14827 = cljs.core.first(seq14825__$1);
var seq14825__$2 = cljs.core.next(seq14825__$1);
var G__14828 = cljs.core.first(seq14825__$2);
var seq14825__$3 = cljs.core.next(seq14825__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14826,G__14827,G__14828,seq14825__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__14875 = arguments.length;
switch (G__14875) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14882 = arguments.length;
var i__9123__auto___14883 = (0);
while(true){
if((i__9123__auto___14883 < len__9122__auto___14882)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14883]));

var G__14884 = (i__9123__auto___14883 + (1));
i__9123__auto___14883 = G__14884;
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
var k_14885__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__14876 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__14876.cljs$core$IFn$_invoke$arity$1 ? fexpr__14876.cljs$core$IFn$_invoke$arity$1(k_14885__$1) : fexpr__14876.call(null,k_14885__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_14885__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__14877_14886 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__14878_14887 = null;
var count__14879_14888 = (0);
var i__14880_14889 = (0);
while(true){
if((i__14880_14889 < count__14879_14888)){
var k_14890__$1 = chunk__14878_14887.cljs$core$IIndexed$_nth$arity$2(null,i__14880_14889);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_14890__$1);

var G__14891 = seq__14877_14886;
var G__14892 = chunk__14878_14887;
var G__14893 = count__14879_14888;
var G__14894 = (i__14880_14889 + (1));
seq__14877_14886 = G__14891;
chunk__14878_14887 = G__14892;
count__14879_14888 = G__14893;
i__14880_14889 = G__14894;
continue;
} else {
var temp__4657__auto___14895 = cljs.core.seq(seq__14877_14886);
if(temp__4657__auto___14895){
var seq__14877_14896__$1 = temp__4657__auto___14895;
if(cljs.core.chunked_seq_QMARK_(seq__14877_14896__$1)){
var c__8792__auto___14897 = cljs.core.chunk_first(seq__14877_14896__$1);
var G__14898 = cljs.core.chunk_rest(seq__14877_14896__$1);
var G__14899 = c__8792__auto___14897;
var G__14900 = cljs.core.count(c__8792__auto___14897);
var G__14901 = (0);
seq__14877_14886 = G__14898;
chunk__14878_14887 = G__14899;
count__14879_14888 = G__14900;
i__14880_14889 = G__14901;
continue;
} else {
var k_14902__$1 = cljs.core.first(seq__14877_14896__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_14902__$1);

var G__14903 = cljs.core.next(seq__14877_14896__$1);
var G__14904 = null;
var G__14905 = (0);
var G__14906 = (0);
seq__14877_14886 = G__14903;
chunk__14878_14887 = G__14904;
count__14879_14888 = G__14905;
i__14880_14889 = G__14906;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq14872){
var G__14873 = cljs.core.first(seq14872);
var seq14872__$1 = cljs.core.next(seq14872);
var G__14874 = cljs.core.first(seq14872__$1);
var seq14872__$2 = cljs.core.next(seq14872__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14873,G__14874,seq14872__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__14908 = arguments.length;
switch (G__14908) {
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
var G__14914 = arguments.length;
switch (G__14914) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14928 = arguments.length;
var i__9123__auto___14929 = (0);
while(true){
if((i__9123__auto___14929 < len__9122__auto___14928)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14929]));

var G__14930 = (i__9123__auto___14929 + (1));
i__9123__auto___14929 = G__14930;
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
var temp__4655__auto___14931 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___14931)){
var class_list_14932 = temp__4655__auto___14931;
var seq__14915_14933 = cljs.core.seq(classes__$1);
var chunk__14916_14934 = null;
var count__14917_14935 = (0);
var i__14918_14936 = (0);
while(true){
if((i__14918_14936 < count__14917_14935)){
var c_14937 = chunk__14916_14934.cljs$core$IIndexed$_nth$arity$2(null,i__14918_14936);
class_list_14932.add(c_14937);

var G__14938 = seq__14915_14933;
var G__14939 = chunk__14916_14934;
var G__14940 = count__14917_14935;
var G__14941 = (i__14918_14936 + (1));
seq__14915_14933 = G__14938;
chunk__14916_14934 = G__14939;
count__14917_14935 = G__14940;
i__14918_14936 = G__14941;
continue;
} else {
var temp__4657__auto___14942 = cljs.core.seq(seq__14915_14933);
if(temp__4657__auto___14942){
var seq__14915_14943__$1 = temp__4657__auto___14942;
if(cljs.core.chunked_seq_QMARK_(seq__14915_14943__$1)){
var c__8792__auto___14944 = cljs.core.chunk_first(seq__14915_14943__$1);
var G__14945 = cljs.core.chunk_rest(seq__14915_14943__$1);
var G__14946 = c__8792__auto___14944;
var G__14947 = cljs.core.count(c__8792__auto___14944);
var G__14948 = (0);
seq__14915_14933 = G__14945;
chunk__14916_14934 = G__14946;
count__14917_14935 = G__14947;
i__14918_14936 = G__14948;
continue;
} else {
var c_14949 = cljs.core.first(seq__14915_14943__$1);
class_list_14932.add(c_14949);

var G__14950 = cljs.core.next(seq__14915_14943__$1);
var G__14951 = null;
var G__14952 = (0);
var G__14953 = (0);
seq__14915_14933 = G__14950;
chunk__14916_14934 = G__14951;
count__14917_14935 = G__14952;
i__14918_14936 = G__14953;
continue;
}
} else {
}
}
break;
}
} else {
var seq__14919_14954 = cljs.core.seq(classes__$1);
var chunk__14920_14955 = null;
var count__14921_14956 = (0);
var i__14922_14957 = (0);
while(true){
if((i__14922_14957 < count__14921_14956)){
var c_14958 = chunk__14920_14955.cljs$core$IIndexed$_nth$arity$2(null,i__14922_14957);
var class_name_14959 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_14959,c_14958))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_14959 === ""))?c_14958:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14959)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14958)].join('')));
}

var G__14960 = seq__14919_14954;
var G__14961 = chunk__14920_14955;
var G__14962 = count__14921_14956;
var G__14963 = (i__14922_14957 + (1));
seq__14919_14954 = G__14960;
chunk__14920_14955 = G__14961;
count__14921_14956 = G__14962;
i__14922_14957 = G__14963;
continue;
} else {
var temp__4657__auto___14964 = cljs.core.seq(seq__14919_14954);
if(temp__4657__auto___14964){
var seq__14919_14965__$1 = temp__4657__auto___14964;
if(cljs.core.chunked_seq_QMARK_(seq__14919_14965__$1)){
var c__8792__auto___14966 = cljs.core.chunk_first(seq__14919_14965__$1);
var G__14967 = cljs.core.chunk_rest(seq__14919_14965__$1);
var G__14968 = c__8792__auto___14966;
var G__14969 = cljs.core.count(c__8792__auto___14966);
var G__14970 = (0);
seq__14919_14954 = G__14967;
chunk__14920_14955 = G__14968;
count__14921_14956 = G__14969;
i__14922_14957 = G__14970;
continue;
} else {
var c_14971 = cljs.core.first(seq__14919_14965__$1);
var class_name_14972 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_14972,c_14971))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_14972 === ""))?c_14971:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_14972)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_14971)].join('')));
}

var G__14973 = cljs.core.next(seq__14919_14965__$1);
var G__14974 = null;
var G__14975 = (0);
var G__14976 = (0);
seq__14919_14954 = G__14973;
chunk__14920_14955 = G__14974;
count__14921_14956 = G__14975;
i__14922_14957 = G__14976;
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
var seq__14923_14977 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__14924_14978 = null;
var count__14925_14979 = (0);
var i__14926_14980 = (0);
while(true){
if((i__14926_14980 < count__14925_14979)){
var c_14981 = chunk__14924_14978.cljs$core$IIndexed$_nth$arity$2(null,i__14926_14980);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_14981);

var G__14982 = seq__14923_14977;
var G__14983 = chunk__14924_14978;
var G__14984 = count__14925_14979;
var G__14985 = (i__14926_14980 + (1));
seq__14923_14977 = G__14982;
chunk__14924_14978 = G__14983;
count__14925_14979 = G__14984;
i__14926_14980 = G__14985;
continue;
} else {
var temp__4657__auto___14986 = cljs.core.seq(seq__14923_14977);
if(temp__4657__auto___14986){
var seq__14923_14987__$1 = temp__4657__auto___14986;
if(cljs.core.chunked_seq_QMARK_(seq__14923_14987__$1)){
var c__8792__auto___14988 = cljs.core.chunk_first(seq__14923_14987__$1);
var G__14989 = cljs.core.chunk_rest(seq__14923_14987__$1);
var G__14990 = c__8792__auto___14988;
var G__14991 = cljs.core.count(c__8792__auto___14988);
var G__14992 = (0);
seq__14923_14977 = G__14989;
chunk__14924_14978 = G__14990;
count__14925_14979 = G__14991;
i__14926_14980 = G__14992;
continue;
} else {
var c_14993 = cljs.core.first(seq__14923_14987__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_14993);

var G__14994 = cljs.core.next(seq__14923_14987__$1);
var G__14995 = null;
var G__14996 = (0);
var G__14997 = (0);
seq__14923_14977 = G__14994;
chunk__14924_14978 = G__14995;
count__14925_14979 = G__14996;
i__14926_14980 = G__14997;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq14911){
var G__14912 = cljs.core.first(seq14911);
var seq14911__$1 = cljs.core.next(seq14911);
var G__14913 = cljs.core.first(seq14911__$1);
var seq14911__$2 = cljs.core.next(seq14911__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14912,G__14913,seq14911__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__15002 = arguments.length;
switch (G__15002) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15008 = arguments.length;
var i__9123__auto___15009 = (0);
while(true){
if((i__9123__auto___15009 < len__9122__auto___15008)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15009]));

var G__15010 = (i__9123__auto___15009 + (1));
i__9123__auto___15009 = G__15010;
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
var temp__4655__auto___15011 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15011)){
var class_list_15012 = temp__4655__auto___15011;
class_list_15012.remove(c__$1);
} else {
var class_name_15013 = dommy.core.class$(elem);
var new_class_name_15014 = dommy.utils.remove_class_str(class_name_15013,c__$1);
if((class_name_15013 === new_class_name_15014)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_15014);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__15003 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__15004 = null;
var count__15005 = (0);
var i__15006 = (0);
while(true){
if((i__15006 < count__15005)){
var c = chunk__15004.cljs$core$IIndexed$_nth$arity$2(null,i__15006);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15015 = seq__15003;
var G__15016 = chunk__15004;
var G__15017 = count__15005;
var G__15018 = (i__15006 + (1));
seq__15003 = G__15015;
chunk__15004 = G__15016;
count__15005 = G__15017;
i__15006 = G__15018;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15003);
if(temp__4657__auto__){
var seq__15003__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15003__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15003__$1);
var G__15019 = cljs.core.chunk_rest(seq__15003__$1);
var G__15020 = c__8792__auto__;
var G__15021 = cljs.core.count(c__8792__auto__);
var G__15022 = (0);
seq__15003 = G__15019;
chunk__15004 = G__15020;
count__15005 = G__15021;
i__15006 = G__15022;
continue;
} else {
var c = cljs.core.first(seq__15003__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__15023 = cljs.core.next(seq__15003__$1);
var G__15024 = null;
var G__15025 = (0);
var G__15026 = (0);
seq__15003 = G__15023;
chunk__15004 = G__15024;
count__15005 = G__15025;
i__15006 = G__15026;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq14999){
var G__15000 = cljs.core.first(seq14999);
var seq14999__$1 = cljs.core.next(seq14999);
var G__15001 = cljs.core.first(seq14999__$1);
var seq14999__$2 = cljs.core.next(seq14999__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15000,G__15001,seq14999__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__15028 = arguments.length;
switch (G__15028) {
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
var temp__4655__auto___15030 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___15030)){
var class_list_15031 = temp__4655__auto___15030;
class_list_15031.toggle(c__$1);
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
var G__15033 = arguments.length;
switch (G__15033) {
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
var G__15036 = arguments.length;
switch (G__15036) {
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
var G__15042 = arguments.length;
switch (G__15042) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15049 = arguments.length;
var i__9123__auto___15050 = (0);
while(true){
if((i__9123__auto___15050 < len__9122__auto___15049)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15050]));

var G__15051 = (i__9123__auto___15050 + (1));
i__9123__auto___15050 = G__15051;
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
var G__15043 = parent;
G__15043.appendChild(child);

return G__15043;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15044_15052 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15045_15053 = null;
var count__15046_15054 = (0);
var i__15047_15055 = (0);
while(true){
if((i__15047_15055 < count__15046_15054)){
var c_15056 = chunk__15045_15053.cljs$core$IIndexed$_nth$arity$2(null,i__15047_15055);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15056);

var G__15057 = seq__15044_15052;
var G__15058 = chunk__15045_15053;
var G__15059 = count__15046_15054;
var G__15060 = (i__15047_15055 + (1));
seq__15044_15052 = G__15057;
chunk__15045_15053 = G__15058;
count__15046_15054 = G__15059;
i__15047_15055 = G__15060;
continue;
} else {
var temp__4657__auto___15061 = cljs.core.seq(seq__15044_15052);
if(temp__4657__auto___15061){
var seq__15044_15062__$1 = temp__4657__auto___15061;
if(cljs.core.chunked_seq_QMARK_(seq__15044_15062__$1)){
var c__8792__auto___15063 = cljs.core.chunk_first(seq__15044_15062__$1);
var G__15064 = cljs.core.chunk_rest(seq__15044_15062__$1);
var G__15065 = c__8792__auto___15063;
var G__15066 = cljs.core.count(c__8792__auto___15063);
var G__15067 = (0);
seq__15044_15052 = G__15064;
chunk__15045_15053 = G__15065;
count__15046_15054 = G__15066;
i__15047_15055 = G__15067;
continue;
} else {
var c_15068 = cljs.core.first(seq__15044_15062__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15068);

var G__15069 = cljs.core.next(seq__15044_15062__$1);
var G__15070 = null;
var G__15071 = (0);
var G__15072 = (0);
seq__15044_15052 = G__15069;
chunk__15045_15053 = G__15070;
count__15046_15054 = G__15071;
i__15047_15055 = G__15072;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq15039){
var G__15040 = cljs.core.first(seq15039);
var seq15039__$1 = cljs.core.next(seq15039);
var G__15041 = cljs.core.first(seq15039__$1);
var seq15039__$2 = cljs.core.next(seq15039__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15040,G__15041,seq15039__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__15077 = arguments.length;
switch (G__15077) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15084 = arguments.length;
var i__9123__auto___15085 = (0);
while(true){
if((i__9123__auto___15085 < len__9122__auto___15084)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15085]));

var G__15086 = (i__9123__auto___15085 + (1));
i__9123__auto___15085 = G__15086;
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
var G__15078 = parent;
G__15078.insertBefore(child,parent.firstChild);

return G__15078;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__15079_15087 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__15080_15088 = null;
var count__15081_15089 = (0);
var i__15082_15090 = (0);
while(true){
if((i__15082_15090 < count__15081_15089)){
var c_15091 = chunk__15080_15088.cljs$core$IIndexed$_nth$arity$2(null,i__15082_15090);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15091);

var G__15092 = seq__15079_15087;
var G__15093 = chunk__15080_15088;
var G__15094 = count__15081_15089;
var G__15095 = (i__15082_15090 + (1));
seq__15079_15087 = G__15092;
chunk__15080_15088 = G__15093;
count__15081_15089 = G__15094;
i__15082_15090 = G__15095;
continue;
} else {
var temp__4657__auto___15096 = cljs.core.seq(seq__15079_15087);
if(temp__4657__auto___15096){
var seq__15079_15097__$1 = temp__4657__auto___15096;
if(cljs.core.chunked_seq_QMARK_(seq__15079_15097__$1)){
var c__8792__auto___15098 = cljs.core.chunk_first(seq__15079_15097__$1);
var G__15099 = cljs.core.chunk_rest(seq__15079_15097__$1);
var G__15100 = c__8792__auto___15098;
var G__15101 = cljs.core.count(c__8792__auto___15098);
var G__15102 = (0);
seq__15079_15087 = G__15099;
chunk__15080_15088 = G__15100;
count__15081_15089 = G__15101;
i__15082_15090 = G__15102;
continue;
} else {
var c_15103 = cljs.core.first(seq__15079_15097__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_15103);

var G__15104 = cljs.core.next(seq__15079_15097__$1);
var G__15105 = null;
var G__15106 = (0);
var G__15107 = (0);
seq__15079_15087 = G__15104;
chunk__15080_15088 = G__15105;
count__15081_15089 = G__15106;
i__15082_15090 = G__15107;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq15074){
var G__15075 = cljs.core.first(seq15074);
var seq15074__$1 = cljs.core.next(seq15074);
var G__15076 = cljs.core.first(seq15074__$1);
var seq15074__$2 = cljs.core.next(seq15074__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15075,G__15076,seq15074__$2);
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
var temp__4655__auto___15108 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___15108)){
var next_15109 = temp__4655__auto___15108;
dommy.core.insert_before_BANG_(elem,next_15109);
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
var G__15111 = arguments.length;
switch (G__15111) {
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
var G__15112 = p;
G__15112.removeChild(elem);

return G__15112;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15114){
var vec__15115 = p__15114;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15115,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15115,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__15115,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__15115,special_mouse_event,real_mouse_event){
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
;})(vec__15115,special_mouse_event,real_mouse_event))
});})(vec__15115,special_mouse_event,real_mouse_event))
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
var len__9122__auto___15121 = arguments.length;
var i__9123__auto___15122 = (0);
while(true){
if((i__9123__auto___15122 < len__9122__auto___15121)){
args__9129__auto__.push((arguments[i__9123__auto___15122]));

var G__15123 = (i__9123__auto___15122 + (1));
i__9123__auto___15122 = G__15123;
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

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq15118){
var G__15119 = cljs.core.first(seq15118);
var seq15118__$1 = cljs.core.next(seq15118);
var G__15120 = cljs.core.first(seq15118__$1);
var seq15118__$2 = cljs.core.next(seq15118__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15119,G__15120,seq15118__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__15124 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__15124.cljs$core$IFn$_invoke$arity$1 ? fexpr__15124.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__15124.call(null,elem_sel));
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
var len__9122__auto___15172 = arguments.length;
var i__9123__auto___15173 = (0);
while(true){
if((i__9123__auto___15173 < len__9122__auto___15172)){
args__9129__auto__.push((arguments[i__9123__auto___15173]));

var G__15174 = (i__9123__auto___15173 + (1));
i__9123__auto___15173 = G__15174;
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

var vec__15127_15175 = dommy.core.elem_and_selector(elem_sel);
var elem_15176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127_15175,(0),null);
var selector_15177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15127_15175,(1),null);
var seq__15130_15178 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15137_15179 = null;
var count__15138_15180 = (0);
var i__15139_15181 = (0);
while(true){
if((i__15139_15181 < count__15138_15180)){
var vec__15146_15182 = chunk__15137_15179.cljs$core$IIndexed$_nth$arity$2(null,i__15139_15181);
var orig_type_15183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15146_15182,(0),null);
var f_15184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15146_15182,(1),null);
var seq__15140_15185 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15183,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15183,cljs.core.identity])));
var chunk__15142_15186 = null;
var count__15143_15187 = (0);
var i__15144_15188 = (0);
while(true){
if((i__15144_15188 < count__15143_15187)){
var vec__15149_15189 = chunk__15142_15186.cljs$core$IIndexed$_nth$arity$2(null,i__15144_15188);
var actual_type_15190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15149_15189,(0),null);
var factory_15191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15149_15189,(1),null);
var canonical_f_15192 = (function (){var G__15153 = (factory_15191.cljs$core$IFn$_invoke$arity$1 ? factory_15191.cljs$core$IFn$_invoke$arity$1(f_15184) : factory_15191.call(null,f_15184));
var fexpr__15152 = (cljs.core.truth_(selector_15177)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15176,selector_15177):cljs.core.identity);
return (fexpr__15152.cljs$core$IFn$_invoke$arity$1 ? fexpr__15152.cljs$core$IFn$_invoke$arity$1(G__15153) : fexpr__15152.call(null,G__15153));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15176,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15177,actual_type_15190,f_15184], null),canonical_f_15192], 0));

if(cljs.core.truth_(elem_15176.addEventListener)){
elem_15176.addEventListener(cljs.core.name(actual_type_15190),canonical_f_15192);
} else {
elem_15176.attachEvent(cljs.core.name(actual_type_15190),canonical_f_15192);
}

var G__15193 = seq__15140_15185;
var G__15194 = chunk__15142_15186;
var G__15195 = count__15143_15187;
var G__15196 = (i__15144_15188 + (1));
seq__15140_15185 = G__15193;
chunk__15142_15186 = G__15194;
count__15143_15187 = G__15195;
i__15144_15188 = G__15196;
continue;
} else {
var temp__4657__auto___15197 = cljs.core.seq(seq__15140_15185);
if(temp__4657__auto___15197){
var seq__15140_15198__$1 = temp__4657__auto___15197;
if(cljs.core.chunked_seq_QMARK_(seq__15140_15198__$1)){
var c__8792__auto___15199 = cljs.core.chunk_first(seq__15140_15198__$1);
var G__15200 = cljs.core.chunk_rest(seq__15140_15198__$1);
var G__15201 = c__8792__auto___15199;
var G__15202 = cljs.core.count(c__8792__auto___15199);
var G__15203 = (0);
seq__15140_15185 = G__15200;
chunk__15142_15186 = G__15201;
count__15143_15187 = G__15202;
i__15144_15188 = G__15203;
continue;
} else {
var vec__15154_15204 = cljs.core.first(seq__15140_15198__$1);
var actual_type_15205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15204,(0),null);
var factory_15206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15204,(1),null);
var canonical_f_15207 = (function (){var G__15158 = (factory_15206.cljs$core$IFn$_invoke$arity$1 ? factory_15206.cljs$core$IFn$_invoke$arity$1(f_15184) : factory_15206.call(null,f_15184));
var fexpr__15157 = (cljs.core.truth_(selector_15177)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15176,selector_15177):cljs.core.identity);
return (fexpr__15157.cljs$core$IFn$_invoke$arity$1 ? fexpr__15157.cljs$core$IFn$_invoke$arity$1(G__15158) : fexpr__15157.call(null,G__15158));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15176,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15177,actual_type_15205,f_15184], null),canonical_f_15207], 0));

if(cljs.core.truth_(elem_15176.addEventListener)){
elem_15176.addEventListener(cljs.core.name(actual_type_15205),canonical_f_15207);
} else {
elem_15176.attachEvent(cljs.core.name(actual_type_15205),canonical_f_15207);
}

var G__15208 = cljs.core.next(seq__15140_15198__$1);
var G__15209 = null;
var G__15210 = (0);
var G__15211 = (0);
seq__15140_15185 = G__15208;
chunk__15142_15186 = G__15209;
count__15143_15187 = G__15210;
i__15144_15188 = G__15211;
continue;
}
} else {
}
}
break;
}

var G__15212 = seq__15130_15178;
var G__15213 = chunk__15137_15179;
var G__15214 = count__15138_15180;
var G__15215 = (i__15139_15181 + (1));
seq__15130_15178 = G__15212;
chunk__15137_15179 = G__15213;
count__15138_15180 = G__15214;
i__15139_15181 = G__15215;
continue;
} else {
var temp__4657__auto___15216 = cljs.core.seq(seq__15130_15178);
if(temp__4657__auto___15216){
var seq__15130_15217__$1 = temp__4657__auto___15216;
if(cljs.core.chunked_seq_QMARK_(seq__15130_15217__$1)){
var c__8792__auto___15218 = cljs.core.chunk_first(seq__15130_15217__$1);
var G__15219 = cljs.core.chunk_rest(seq__15130_15217__$1);
var G__15220 = c__8792__auto___15218;
var G__15221 = cljs.core.count(c__8792__auto___15218);
var G__15222 = (0);
seq__15130_15178 = G__15219;
chunk__15137_15179 = G__15220;
count__15138_15180 = G__15221;
i__15139_15181 = G__15222;
continue;
} else {
var vec__15159_15223 = cljs.core.first(seq__15130_15217__$1);
var orig_type_15224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159_15223,(0),null);
var f_15225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15159_15223,(1),null);
var seq__15131_15226 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15224,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15224,cljs.core.identity])));
var chunk__15133_15227 = null;
var count__15134_15228 = (0);
var i__15135_15229 = (0);
while(true){
if((i__15135_15229 < count__15134_15228)){
var vec__15162_15230 = chunk__15133_15227.cljs$core$IIndexed$_nth$arity$2(null,i__15135_15229);
var actual_type_15231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162_15230,(0),null);
var factory_15232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162_15230,(1),null);
var canonical_f_15233 = (function (){var G__15166 = (factory_15232.cljs$core$IFn$_invoke$arity$1 ? factory_15232.cljs$core$IFn$_invoke$arity$1(f_15225) : factory_15232.call(null,f_15225));
var fexpr__15165 = (cljs.core.truth_(selector_15177)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15176,selector_15177):cljs.core.identity);
return (fexpr__15165.cljs$core$IFn$_invoke$arity$1 ? fexpr__15165.cljs$core$IFn$_invoke$arity$1(G__15166) : fexpr__15165.call(null,G__15166));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15176,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15177,actual_type_15231,f_15225], null),canonical_f_15233], 0));

if(cljs.core.truth_(elem_15176.addEventListener)){
elem_15176.addEventListener(cljs.core.name(actual_type_15231),canonical_f_15233);
} else {
elem_15176.attachEvent(cljs.core.name(actual_type_15231),canonical_f_15233);
}

var G__15234 = seq__15131_15226;
var G__15235 = chunk__15133_15227;
var G__15236 = count__15134_15228;
var G__15237 = (i__15135_15229 + (1));
seq__15131_15226 = G__15234;
chunk__15133_15227 = G__15235;
count__15134_15228 = G__15236;
i__15135_15229 = G__15237;
continue;
} else {
var temp__4657__auto___15238__$1 = cljs.core.seq(seq__15131_15226);
if(temp__4657__auto___15238__$1){
var seq__15131_15239__$1 = temp__4657__auto___15238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15131_15239__$1)){
var c__8792__auto___15240 = cljs.core.chunk_first(seq__15131_15239__$1);
var G__15241 = cljs.core.chunk_rest(seq__15131_15239__$1);
var G__15242 = c__8792__auto___15240;
var G__15243 = cljs.core.count(c__8792__auto___15240);
var G__15244 = (0);
seq__15131_15226 = G__15241;
chunk__15133_15227 = G__15242;
count__15134_15228 = G__15243;
i__15135_15229 = G__15244;
continue;
} else {
var vec__15167_15245 = cljs.core.first(seq__15131_15239__$1);
var actual_type_15246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167_15245,(0),null);
var factory_15247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15167_15245,(1),null);
var canonical_f_15248 = (function (){var G__15171 = (factory_15247.cljs$core$IFn$_invoke$arity$1 ? factory_15247.cljs$core$IFn$_invoke$arity$1(f_15225) : factory_15247.call(null,f_15225));
var fexpr__15170 = (cljs.core.truth_(selector_15177)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_15176,selector_15177):cljs.core.identity);
return (fexpr__15170.cljs$core$IFn$_invoke$arity$1 ? fexpr__15170.cljs$core$IFn$_invoke$arity$1(G__15171) : fexpr__15170.call(null,G__15171));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15176,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15177,actual_type_15246,f_15225], null),canonical_f_15248], 0));

if(cljs.core.truth_(elem_15176.addEventListener)){
elem_15176.addEventListener(cljs.core.name(actual_type_15246),canonical_f_15248);
} else {
elem_15176.attachEvent(cljs.core.name(actual_type_15246),canonical_f_15248);
}

var G__15249 = cljs.core.next(seq__15131_15239__$1);
var G__15250 = null;
var G__15251 = (0);
var G__15252 = (0);
seq__15131_15226 = G__15249;
chunk__15133_15227 = G__15250;
count__15134_15228 = G__15251;
i__15135_15229 = G__15252;
continue;
}
} else {
}
}
break;
}

var G__15253 = cljs.core.next(seq__15130_15217__$1);
var G__15254 = null;
var G__15255 = (0);
var G__15256 = (0);
seq__15130_15178 = G__15253;
chunk__15137_15179 = G__15254;
count__15138_15180 = G__15255;
i__15139_15181 = G__15256;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq15125){
var G__15126 = cljs.core.first(seq15125);
var seq15125__$1 = cljs.core.next(seq15125);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15126,seq15125__$1);
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
var len__9122__auto___15296 = arguments.length;
var i__9123__auto___15297 = (0);
while(true){
if((i__9123__auto___15297 < len__9122__auto___15296)){
args__9129__auto__.push((arguments[i__9123__auto___15297]));

var G__15298 = (i__9123__auto___15297 + (1));
i__9123__auto___15297 = G__15298;
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

var vec__15259_15299 = dommy.core.elem_and_selector(elem_sel);
var elem_15300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259_15299,(0),null);
var selector_15301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259_15299,(1),null);
var seq__15262_15302 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15269_15303 = null;
var count__15270_15304 = (0);
var i__15271_15305 = (0);
while(true){
if((i__15271_15305 < count__15270_15304)){
var vec__15278_15306 = chunk__15269_15303.cljs$core$IIndexed$_nth$arity$2(null,i__15271_15305);
var orig_type_15307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278_15306,(0),null);
var f_15308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15278_15306,(1),null);
var seq__15272_15309 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15307,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15307,cljs.core.identity])));
var chunk__15274_15310 = null;
var count__15275_15311 = (0);
var i__15276_15312 = (0);
while(true){
if((i__15276_15312 < count__15275_15311)){
var vec__15281_15313 = chunk__15274_15310.cljs$core$IIndexed$_nth$arity$2(null,i__15276_15312);
var actual_type_15314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281_15313,(0),null);
var __15315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15281_15313,(1),null);
var keys_15316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15301,actual_type_15314,f_15308], null);
var canonical_f_15317 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15300),keys_15316);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15316], 0));

if(cljs.core.truth_(elem_15300.removeEventListener)){
elem_15300.removeEventListener(cljs.core.name(actual_type_15314),canonical_f_15317);
} else {
elem_15300.detachEvent(cljs.core.name(actual_type_15314),canonical_f_15317);
}

var G__15318 = seq__15272_15309;
var G__15319 = chunk__15274_15310;
var G__15320 = count__15275_15311;
var G__15321 = (i__15276_15312 + (1));
seq__15272_15309 = G__15318;
chunk__15274_15310 = G__15319;
count__15275_15311 = G__15320;
i__15276_15312 = G__15321;
continue;
} else {
var temp__4657__auto___15322 = cljs.core.seq(seq__15272_15309);
if(temp__4657__auto___15322){
var seq__15272_15323__$1 = temp__4657__auto___15322;
if(cljs.core.chunked_seq_QMARK_(seq__15272_15323__$1)){
var c__8792__auto___15324 = cljs.core.chunk_first(seq__15272_15323__$1);
var G__15325 = cljs.core.chunk_rest(seq__15272_15323__$1);
var G__15326 = c__8792__auto___15324;
var G__15327 = cljs.core.count(c__8792__auto___15324);
var G__15328 = (0);
seq__15272_15309 = G__15325;
chunk__15274_15310 = G__15326;
count__15275_15311 = G__15327;
i__15276_15312 = G__15328;
continue;
} else {
var vec__15284_15329 = cljs.core.first(seq__15272_15323__$1);
var actual_type_15330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284_15329,(0),null);
var __15331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15284_15329,(1),null);
var keys_15332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15301,actual_type_15330,f_15308], null);
var canonical_f_15333 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15300),keys_15332);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15332], 0));

if(cljs.core.truth_(elem_15300.removeEventListener)){
elem_15300.removeEventListener(cljs.core.name(actual_type_15330),canonical_f_15333);
} else {
elem_15300.detachEvent(cljs.core.name(actual_type_15330),canonical_f_15333);
}

var G__15334 = cljs.core.next(seq__15272_15323__$1);
var G__15335 = null;
var G__15336 = (0);
var G__15337 = (0);
seq__15272_15309 = G__15334;
chunk__15274_15310 = G__15335;
count__15275_15311 = G__15336;
i__15276_15312 = G__15337;
continue;
}
} else {
}
}
break;
}

var G__15338 = seq__15262_15302;
var G__15339 = chunk__15269_15303;
var G__15340 = count__15270_15304;
var G__15341 = (i__15271_15305 + (1));
seq__15262_15302 = G__15338;
chunk__15269_15303 = G__15339;
count__15270_15304 = G__15340;
i__15271_15305 = G__15341;
continue;
} else {
var temp__4657__auto___15342 = cljs.core.seq(seq__15262_15302);
if(temp__4657__auto___15342){
var seq__15262_15343__$1 = temp__4657__auto___15342;
if(cljs.core.chunked_seq_QMARK_(seq__15262_15343__$1)){
var c__8792__auto___15344 = cljs.core.chunk_first(seq__15262_15343__$1);
var G__15345 = cljs.core.chunk_rest(seq__15262_15343__$1);
var G__15346 = c__8792__auto___15344;
var G__15347 = cljs.core.count(c__8792__auto___15344);
var G__15348 = (0);
seq__15262_15302 = G__15345;
chunk__15269_15303 = G__15346;
count__15270_15304 = G__15347;
i__15271_15305 = G__15348;
continue;
} else {
var vec__15287_15349 = cljs.core.first(seq__15262_15343__$1);
var orig_type_15350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287_15349,(0),null);
var f_15351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15287_15349,(1),null);
var seq__15263_15352 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_15350,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_15350,cljs.core.identity])));
var chunk__15265_15353 = null;
var count__15266_15354 = (0);
var i__15267_15355 = (0);
while(true){
if((i__15267_15355 < count__15266_15354)){
var vec__15290_15356 = chunk__15265_15353.cljs$core$IIndexed$_nth$arity$2(null,i__15267_15355);
var actual_type_15357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290_15356,(0),null);
var __15358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15290_15356,(1),null);
var keys_15359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15301,actual_type_15357,f_15351], null);
var canonical_f_15360 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15300),keys_15359);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15359], 0));

if(cljs.core.truth_(elem_15300.removeEventListener)){
elem_15300.removeEventListener(cljs.core.name(actual_type_15357),canonical_f_15360);
} else {
elem_15300.detachEvent(cljs.core.name(actual_type_15357),canonical_f_15360);
}

var G__15361 = seq__15263_15352;
var G__15362 = chunk__15265_15353;
var G__15363 = count__15266_15354;
var G__15364 = (i__15267_15355 + (1));
seq__15263_15352 = G__15361;
chunk__15265_15353 = G__15362;
count__15266_15354 = G__15363;
i__15267_15355 = G__15364;
continue;
} else {
var temp__4657__auto___15365__$1 = cljs.core.seq(seq__15263_15352);
if(temp__4657__auto___15365__$1){
var seq__15263_15366__$1 = temp__4657__auto___15365__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15263_15366__$1)){
var c__8792__auto___15367 = cljs.core.chunk_first(seq__15263_15366__$1);
var G__15368 = cljs.core.chunk_rest(seq__15263_15366__$1);
var G__15369 = c__8792__auto___15367;
var G__15370 = cljs.core.count(c__8792__auto___15367);
var G__15371 = (0);
seq__15263_15352 = G__15368;
chunk__15265_15353 = G__15369;
count__15266_15354 = G__15370;
i__15267_15355 = G__15371;
continue;
} else {
var vec__15293_15372 = cljs.core.first(seq__15263_15366__$1);
var actual_type_15373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15293_15372,(0),null);
var __15374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15293_15372,(1),null);
var keys_15375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15301,actual_type_15373,f_15351], null);
var canonical_f_15376 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_15300),keys_15375);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_15300,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_15375], 0));

if(cljs.core.truth_(elem_15300.removeEventListener)){
elem_15300.removeEventListener(cljs.core.name(actual_type_15373),canonical_f_15376);
} else {
elem_15300.detachEvent(cljs.core.name(actual_type_15373),canonical_f_15376);
}

var G__15377 = cljs.core.next(seq__15263_15366__$1);
var G__15378 = null;
var G__15379 = (0);
var G__15380 = (0);
seq__15263_15352 = G__15377;
chunk__15265_15353 = G__15378;
count__15266_15354 = G__15379;
i__15267_15355 = G__15380;
continue;
}
} else {
}
}
break;
}

var G__15381 = cljs.core.next(seq__15262_15343__$1);
var G__15382 = null;
var G__15383 = (0);
var G__15384 = (0);
seq__15262_15302 = G__15381;
chunk__15269_15303 = G__15382;
count__15270_15304 = G__15383;
i__15271_15305 = G__15384;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq15257){
var G__15258 = cljs.core.first(seq15257);
var seq15257__$1 = cljs.core.next(seq15257);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15258,seq15257__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
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
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__15387_15403 = dommy.core.elem_and_selector(elem_sel);
var elem_15404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15387_15403,(0),null);
var selector_15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15387_15403,(1),null);
var seq__15390_15406 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__15391_15407 = null;
var count__15392_15408 = (0);
var i__15393_15409 = (0);
while(true){
if((i__15393_15409 < count__15392_15408)){
var vec__15394_15410 = chunk__15391_15407.cljs$core$IIndexed$_nth$arity$2(null,i__15393_15409);
var type_15411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394_15410,(0),null);
var f_15412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15394_15410,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15411,((function (seq__15390_15406,chunk__15391_15407,count__15392_15408,i__15393_15409,vec__15394_15410,type_15411,f_15412,vec__15387_15403,elem_15404,selector_15405){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15411,dommy$core$this_fn], 0));

return (f_15412.cljs$core$IFn$_invoke$arity$1 ? f_15412.cljs$core$IFn$_invoke$arity$1(e) : f_15412.call(null,e));
});})(seq__15390_15406,chunk__15391_15407,count__15392_15408,i__15393_15409,vec__15394_15410,type_15411,f_15412,vec__15387_15403,elem_15404,selector_15405))
], 0));

var G__15413 = seq__15390_15406;
var G__15414 = chunk__15391_15407;
var G__15415 = count__15392_15408;
var G__15416 = (i__15393_15409 + (1));
seq__15390_15406 = G__15413;
chunk__15391_15407 = G__15414;
count__15392_15408 = G__15415;
i__15393_15409 = G__15416;
continue;
} else {
var temp__4657__auto___15417 = cljs.core.seq(seq__15390_15406);
if(temp__4657__auto___15417){
var seq__15390_15418__$1 = temp__4657__auto___15417;
if(cljs.core.chunked_seq_QMARK_(seq__15390_15418__$1)){
var c__8792__auto___15419 = cljs.core.chunk_first(seq__15390_15418__$1);
var G__15420 = cljs.core.chunk_rest(seq__15390_15418__$1);
var G__15421 = c__8792__auto___15419;
var G__15422 = cljs.core.count(c__8792__auto___15419);
var G__15423 = (0);
seq__15390_15406 = G__15420;
chunk__15391_15407 = G__15421;
count__15392_15408 = G__15422;
i__15393_15409 = G__15423;
continue;
} else {
var vec__15397_15424 = cljs.core.first(seq__15390_15418__$1);
var type_15425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15424,(0),null);
var f_15426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15397_15424,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15425,((function (seq__15390_15406,chunk__15391_15407,count__15392_15408,i__15393_15409,vec__15397_15424,type_15425,f_15426,seq__15390_15418__$1,temp__4657__auto___15417,vec__15387_15403,elem_15404,selector_15405){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_15425,dommy$core$this_fn], 0));

return (f_15426.cljs$core$IFn$_invoke$arity$1 ? f_15426.cljs$core$IFn$_invoke$arity$1(e) : f_15426.call(null,e));
});})(seq__15390_15406,chunk__15391_15407,count__15392_15408,i__15393_15409,vec__15397_15424,type_15425,f_15426,seq__15390_15418__$1,temp__4657__auto___15417,vec__15387_15403,elem_15404,selector_15405))
], 0));

var G__15427 = cljs.core.next(seq__15390_15418__$1);
var G__15428 = null;
var G__15429 = (0);
var G__15430 = (0);
seq__15390_15406 = G__15427;
chunk__15391_15407 = G__15428;
count__15392_15408 = G__15429;
i__15393_15409 = G__15430;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq15385){
var G__15386 = cljs.core.first(seq15385);
var seq15385__$1 = cljs.core.next(seq15385);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15386,seq15385__$1);
});

