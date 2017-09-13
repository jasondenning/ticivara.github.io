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
var len__9122__auto___15783 = arguments.length;
var i__9123__auto___15784 = (0);
while(true){
if((i__9123__auto___15784 < len__9122__auto___15783)){
args__9129__auto__.push((arguments[i__9123__auto___15784]));

var G__15785 = (i__9123__auto___15784 + (1));
i__9123__auto___15784 = G__15785;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15779){
var vec__15780 = p__15779;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15780,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq15777){
var G__15778 = cljs.core.first(seq15777);
var seq15777__$1 = cljs.core.next(seq15777);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__15778,seq15777__$1);
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
var len__9122__auto___15792 = arguments.length;
var i__9123__auto___15793 = (0);
while(true){
if((i__9123__auto___15793 < len__9122__auto___15792)){
args__9129__auto__.push((arguments[i__9123__auto___15793]));

var G__15794 = (i__9123__auto___15793 + (1));
i__9123__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15788){
var vec__15789 = p__15788;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15789,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq15786){
var G__15787 = cljs.core.first(seq15786);
var seq15786__$1 = cljs.core.next(seq15786);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__15787,seq15786__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15797 = arguments.length;
var i__9123__auto___15798 = (0);
while(true){
if((i__9123__auto___15798 < len__9122__auto___15797)){
args__9129__auto__.push((arguments[i__9123__auto___15798]));

var G__15799 = (i__9123__auto___15798 + (1));
i__9123__auto___15798 = G__15799;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq15795){
var G__15796 = cljs.core.first(seq15795);
var seq15795__$1 = cljs.core.next(seq15795);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15796,seq15795__$1);
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
var len__9122__auto___15806 = arguments.length;
var i__9123__auto___15807 = (0);
while(true){
if((i__9123__auto___15807 < len__9122__auto___15806)){
args__9129__auto__.push((arguments[i__9123__auto___15807]));

var G__15808 = (i__9123__auto___15807 + (1));
i__9123__auto___15807 = G__15808;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__15802){
var vec__15803 = p__15802;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15803,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq15800){
var G__15801 = cljs.core.first(seq15800);
var seq15800__$1 = cljs.core.next(seq15800);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15801,seq15800__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15815 = arguments.length;
var i__9123__auto___15816 = (0);
while(true){
if((i__9123__auto___15816 < len__9122__auto___15815)){
args__9129__auto__.push((arguments[i__9123__auto___15816]));

var G__15817 = (i__9123__auto___15816 + (1));
i__9123__auto___15816 = G__15817;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__15811){
var vec__15812 = p__15811;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15812,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq15809){
var G__15810 = cljs.core.first(seq15809);
var seq15809__$1 = cljs.core.next(seq15809);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15810,seq15809__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15822 = arguments.length;
var i__9123__auto___15823 = (0);
while(true){
if((i__9123__auto___15823 < len__9122__auto___15822)){
args__9129__auto__.push((arguments[i__9123__auto___15823]));

var G__15824 = (i__9123__auto___15823 + (1));
i__9123__auto___15823 = G__15824;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15818_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__15818_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq15819){
var G__15820 = cljs.core.first(seq15819);
var seq15819__$1 = cljs.core.next(seq15819);
var G__15821 = cljs.core.first(seq15819__$1);
var seq15819__$2 = cljs.core.next(seq15819__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15820,G__15821,seq15819__$2);
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
var len__9122__auto___15829 = arguments.length;
var i__9123__auto___15830 = (0);
while(true){
if((i__9123__auto___15830 < len__9122__auto___15829)){
args__9129__auto__.push((arguments[i__9123__auto___15830]));

var G__15831 = (i__9123__auto___15830 + (1));
i__9123__auto___15830 = G__15831;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__15825_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__15825_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq15826){
var G__15827 = cljs.core.first(seq15826);
var seq15826__$1 = cljs.core.next(seq15826);
var G__15828 = cljs.core.first(seq15826__$1);
var seq15826__$2 = cljs.core.next(seq15826__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15827,G__15828,seq15826__$2);
});

