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
var len__9122__auto___14518 = arguments.length;
var i__9123__auto___14519 = (0);
while(true){
if((i__9123__auto___14519 < len__9122__auto___14518)){
args__9129__auto__.push((arguments[i__9123__auto___14519]));

var G__14520 = (i__9123__auto___14519 + (1));
i__9123__auto___14519 = G__14520;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14514){
var vec__14515 = p__14514;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14515,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14512){
var G__14513 = cljs.core.first(seq14512);
var seq14512__$1 = cljs.core.next(seq14512);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14513,seq14512__$1);
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
var len__9122__auto___14527 = arguments.length;
var i__9123__auto___14528 = (0);
while(true){
if((i__9123__auto___14528 < len__9122__auto___14527)){
args__9129__auto__.push((arguments[i__9123__auto___14528]));

var G__14529 = (i__9123__auto___14528 + (1));
i__9123__auto___14528 = G__14529;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14523){
var vec__14524 = p__14523;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14524,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14521){
var G__14522 = cljs.core.first(seq14521);
var seq14521__$1 = cljs.core.next(seq14521);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14522,seq14521__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14532 = arguments.length;
var i__9123__auto___14533 = (0);
while(true){
if((i__9123__auto___14533 < len__9122__auto___14532)){
args__9129__auto__.push((arguments[i__9123__auto___14533]));

var G__14534 = (i__9123__auto___14533 + (1));
i__9123__auto___14533 = G__14534;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14530){
var G__14531 = cljs.core.first(seq14530);
var seq14530__$1 = cljs.core.next(seq14530);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14531,seq14530__$1);
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
var len__9122__auto___14541 = arguments.length;
var i__9123__auto___14542 = (0);
while(true){
if((i__9123__auto___14542 < len__9122__auto___14541)){
args__9129__auto__.push((arguments[i__9123__auto___14542]));

var G__14543 = (i__9123__auto___14542 + (1));
i__9123__auto___14542 = G__14543;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14537){
var vec__14538 = p__14537;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14538,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14535){
var G__14536 = cljs.core.first(seq14535);
var seq14535__$1 = cljs.core.next(seq14535);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14536,seq14535__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14550 = arguments.length;
var i__9123__auto___14551 = (0);
while(true){
if((i__9123__auto___14551 < len__9122__auto___14550)){
args__9129__auto__.push((arguments[i__9123__auto___14551]));

var G__14552 = (i__9123__auto___14551 + (1));
i__9123__auto___14551 = G__14552;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14546){
var vec__14547 = p__14546;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14544){
var G__14545 = cljs.core.first(seq14544);
var seq14544__$1 = cljs.core.next(seq14544);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14545,seq14544__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14557 = arguments.length;
var i__9123__auto___14558 = (0);
while(true){
if((i__9123__auto___14558 < len__9122__auto___14557)){
args__9129__auto__.push((arguments[i__9123__auto___14558]));

var G__14559 = (i__9123__auto___14558 + (1));
i__9123__auto___14558 = G__14559;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14553_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14553_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14554){
var G__14555 = cljs.core.first(seq14554);
var seq14554__$1 = cljs.core.next(seq14554);
var G__14556 = cljs.core.first(seq14554__$1);
var seq14554__$2 = cljs.core.next(seq14554__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14555,G__14556,seq14554__$2);
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
var len__9122__auto___14564 = arguments.length;
var i__9123__auto___14565 = (0);
while(true){
if((i__9123__auto___14565 < len__9122__auto___14564)){
args__9129__auto__.push((arguments[i__9123__auto___14565]));

var G__14566 = (i__9123__auto___14565 + (1));
i__9123__auto___14565 = G__14566;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14560_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14560_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14561){
var G__14562 = cljs.core.first(seq14561);
var seq14561__$1 = cljs.core.next(seq14561);
var G__14563 = cljs.core.first(seq14561__$1);
var seq14561__$2 = cljs.core.next(seq14561__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14562,G__14563,seq14561__$2);
});

