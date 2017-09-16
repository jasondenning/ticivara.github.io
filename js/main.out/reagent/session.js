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
var len__9122__auto___14801 = arguments.length;
var i__9123__auto___14802 = (0);
while(true){
if((i__9123__auto___14802 < len__9122__auto___14801)){
args__9129__auto__.push((arguments[i__9123__auto___14802]));

var G__14803 = (i__9123__auto___14802 + (1));
i__9123__auto___14802 = G__14803;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14797){
var vec__14798 = p__14797;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14798,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14795){
var G__14796 = cljs.core.first(seq14795);
var seq14795__$1 = cljs.core.next(seq14795);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14796,seq14795__$1);
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
var len__9122__auto___14810 = arguments.length;
var i__9123__auto___14811 = (0);
while(true){
if((i__9123__auto___14811 < len__9122__auto___14810)){
args__9129__auto__.push((arguments[i__9123__auto___14811]));

var G__14812 = (i__9123__auto___14811 + (1));
i__9123__auto___14811 = G__14812;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14806){
var vec__14807 = p__14806;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14807,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14804){
var G__14805 = cljs.core.first(seq14804);
var seq14804__$1 = cljs.core.next(seq14804);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14805,seq14804__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14815 = arguments.length;
var i__9123__auto___14816 = (0);
while(true){
if((i__9123__auto___14816 < len__9122__auto___14815)){
args__9129__auto__.push((arguments[i__9123__auto___14816]));

var G__14817 = (i__9123__auto___14816 + (1));
i__9123__auto___14816 = G__14817;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14813){
var G__14814 = cljs.core.first(seq14813);
var seq14813__$1 = cljs.core.next(seq14813);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14814,seq14813__$1);
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
var len__9122__auto___14824 = arguments.length;
var i__9123__auto___14825 = (0);
while(true){
if((i__9123__auto___14825 < len__9122__auto___14824)){
args__9129__auto__.push((arguments[i__9123__auto___14825]));

var G__14826 = (i__9123__auto___14825 + (1));
i__9123__auto___14825 = G__14826;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14820){
var vec__14821 = p__14820;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14821,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14818){
var G__14819 = cljs.core.first(seq14818);
var seq14818__$1 = cljs.core.next(seq14818);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14819,seq14818__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14833 = arguments.length;
var i__9123__auto___14834 = (0);
while(true){
if((i__9123__auto___14834 < len__9122__auto___14833)){
args__9129__auto__.push((arguments[i__9123__auto___14834]));

var G__14835 = (i__9123__auto___14834 + (1));
i__9123__auto___14834 = G__14835;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14829){
var vec__14830 = p__14829;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14830,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14827){
var G__14828 = cljs.core.first(seq14827);
var seq14827__$1 = cljs.core.next(seq14827);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14828,seq14827__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14840 = arguments.length;
var i__9123__auto___14841 = (0);
while(true){
if((i__9123__auto___14841 < len__9122__auto___14840)){
args__9129__auto__.push((arguments[i__9123__auto___14841]));

var G__14842 = (i__9123__auto___14841 + (1));
i__9123__auto___14841 = G__14842;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14836_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14836_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14837){
var G__14838 = cljs.core.first(seq14837);
var seq14837__$1 = cljs.core.next(seq14837);
var G__14839 = cljs.core.first(seq14837__$1);
var seq14837__$2 = cljs.core.next(seq14837__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14838,G__14839,seq14837__$2);
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
var len__9122__auto___14847 = arguments.length;
var i__9123__auto___14848 = (0);
while(true){
if((i__9123__auto___14848 < len__9122__auto___14847)){
args__9129__auto__.push((arguments[i__9123__auto___14848]));

var G__14849 = (i__9123__auto___14848 + (1));
i__9123__auto___14848 = G__14849;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14843_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14843_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14844){
var G__14845 = cljs.core.first(seq14844);
var seq14844__$1 = cljs.core.next(seq14844);
var G__14846 = cljs.core.first(seq14844__$1);
var seq14844__$2 = cljs.core.next(seq14844__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14845,G__14846,seq14844__$2);
});

