// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor(reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14803 = arguments.length;
var i__9123__auto___14804 = (0);
while(true){
if((i__9123__auto___14804 < len__9122__auto___14803)){
args__9129__auto__.push((arguments[i__9123__auto___14804]));

var G__14805 = (i__9123__auto___14804 + (1));
i__9123__auto___14804 = G__14805;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14799){
var vec__14800 = p__14799;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14800,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14797){
var G__14798 = cljs.core.first(seq14797);
var seq14797__$1 = cljs.core.next(seq14797);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14798,seq14797__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14812 = arguments.length;
var i__9123__auto___14813 = (0);
while(true){
if((i__9123__auto___14813 < len__9122__auto___14812)){
args__9129__auto__.push((arguments[i__9123__auto___14813]));

var G__14814 = (i__9123__auto___14813 + (1));
i__9123__auto___14813 = G__14814;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14808){
var vec__14809 = p__14808;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14809,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14806){
var G__14807 = cljs.core.first(seq14806);
var seq14806__$1 = cljs.core.next(seq14806);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14807,seq14806__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14817 = arguments.length;
var i__9123__auto___14818 = (0);
while(true){
if((i__9123__auto___14818 < len__9122__auto___14817)){
args__9129__auto__.push((arguments[i__9123__auto___14818]));

var G__14819 = (i__9123__auto___14818 + (1));
i__9123__auto___14818 = G__14819;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14815){
var G__14816 = cljs.core.first(seq14815);
var seq14815__$1 = cljs.core.next(seq14815);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14816,seq14815__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_(reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_(reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14826 = arguments.length;
var i__9123__auto___14827 = (0);
while(true){
if((i__9123__auto___14827 < len__9122__auto___14826)){
args__9129__auto__.push((arguments[i__9123__auto___14827]));

var G__14828 = (i__9123__auto___14827 + (1));
i__9123__auto___14827 = G__14828;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14822){
var vec__14823 = p__14822;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14823,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14820){
var G__14821 = cljs.core.first(seq14820);
var seq14820__$1 = cljs.core.next(seq14820);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14821,seq14820__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14835 = arguments.length;
var i__9123__auto___14836 = (0);
while(true){
if((i__9123__auto___14836 < len__9122__auto___14835)){
args__9129__auto__.push((arguments[i__9123__auto___14836]));

var G__14837 = (i__9123__auto___14836 + (1));
i__9123__auto___14836 = G__14837;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14831){
var vec__14832 = p__14831;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14832,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14829){
var G__14830 = cljs.core.first(seq14829);
var seq14829__$1 = cljs.core.next(seq14829);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14830,seq14829__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14842 = arguments.length;
var i__9123__auto___14843 = (0);
while(true){
if((i__9123__auto___14843 < len__9122__auto___14842)){
args__9129__auto__.push((arguments[i__9123__auto___14843]));

var G__14844 = (i__9123__auto___14843 + (1));
i__9123__auto___14843 = G__14844;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14838_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14838_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14839){
var G__14840 = cljs.core.first(seq14839);
var seq14839__$1 = cljs.core.next(seq14839);
var G__14841 = cljs.core.first(seq14839__$1);
var seq14839__$2 = cljs.core.next(seq14839__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14840,G__14841,seq14839__$2);
});

/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14849 = arguments.length;
var i__9123__auto___14850 = (0);
while(true){
if((i__9123__auto___14850 < len__9122__auto___14849)){
args__9129__auto__.push((arguments[i__9123__auto___14850]));

var G__14851 = (i__9123__auto___14850 + (1));
i__9123__auto___14850 = G__14851;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14845_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14845_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14846){
var G__14847 = cljs.core.first(seq14846);
var seq14846__$1 = cljs.core.next(seq14846);
var G__14848 = cljs.core.first(seq14846__$1);
var seq14846__$2 = cljs.core.next(seq14846__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14847,G__14848,seq14846__$2);
});

