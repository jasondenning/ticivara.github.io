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
var len__9122__auto___14414 = arguments.length;
var i__9123__auto___14415 = (0);
while(true){
if((i__9123__auto___14415 < len__9122__auto___14414)){
args__9129__auto__.push((arguments[i__9123__auto___14415]));

var G__14416 = (i__9123__auto___14415 + (1));
i__9123__auto___14415 = G__14416;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14410){
var vec__14411 = p__14410;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14408){
var G__14409 = cljs.core.first(seq14408);
var seq14408__$1 = cljs.core.next(seq14408);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14409,seq14408__$1);
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
var len__9122__auto___14423 = arguments.length;
var i__9123__auto___14424 = (0);
while(true){
if((i__9123__auto___14424 < len__9122__auto___14423)){
args__9129__auto__.push((arguments[i__9123__auto___14424]));

var G__14425 = (i__9123__auto___14424 + (1));
i__9123__auto___14424 = G__14425;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14419){
var vec__14420 = p__14419;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14420,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14417){
var G__14418 = cljs.core.first(seq14417);
var seq14417__$1 = cljs.core.next(seq14417);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14418,seq14417__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14428 = arguments.length;
var i__9123__auto___14429 = (0);
while(true){
if((i__9123__auto___14429 < len__9122__auto___14428)){
args__9129__auto__.push((arguments[i__9123__auto___14429]));

var G__14430 = (i__9123__auto___14429 + (1));
i__9123__auto___14429 = G__14430;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14426){
var G__14427 = cljs.core.first(seq14426);
var seq14426__$1 = cljs.core.next(seq14426);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14427,seq14426__$1);
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
var len__9122__auto___14437 = arguments.length;
var i__9123__auto___14438 = (0);
while(true){
if((i__9123__auto___14438 < len__9122__auto___14437)){
args__9129__auto__.push((arguments[i__9123__auto___14438]));

var G__14439 = (i__9123__auto___14438 + (1));
i__9123__auto___14438 = G__14439;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14433){
var vec__14434 = p__14433;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14434,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14431){
var G__14432 = cljs.core.first(seq14431);
var seq14431__$1 = cljs.core.next(seq14431);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14432,seq14431__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14446 = arguments.length;
var i__9123__auto___14447 = (0);
while(true){
if((i__9123__auto___14447 < len__9122__auto___14446)){
args__9129__auto__.push((arguments[i__9123__auto___14447]));

var G__14448 = (i__9123__auto___14447 + (1));
i__9123__auto___14447 = G__14448;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14442){
var vec__14443 = p__14442;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14440){
var G__14441 = cljs.core.first(seq14440);
var seq14440__$1 = cljs.core.next(seq14440);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14441,seq14440__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14453 = arguments.length;
var i__9123__auto___14454 = (0);
while(true){
if((i__9123__auto___14454 < len__9122__auto___14453)){
args__9129__auto__.push((arguments[i__9123__auto___14454]));

var G__14455 = (i__9123__auto___14454 + (1));
i__9123__auto___14454 = G__14455;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14449_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14449_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14450){
var G__14451 = cljs.core.first(seq14450);
var seq14450__$1 = cljs.core.next(seq14450);
var G__14452 = cljs.core.first(seq14450__$1);
var seq14450__$2 = cljs.core.next(seq14450__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14451,G__14452,seq14450__$2);
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
var len__9122__auto___14460 = arguments.length;
var i__9123__auto___14461 = (0);
while(true){
if((i__9123__auto___14461 < len__9122__auto___14460)){
args__9129__auto__.push((arguments[i__9123__auto___14461]));

var G__14462 = (i__9123__auto___14461 + (1));
i__9123__auto___14461 = G__14462;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14456_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14456_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14457){
var G__14458 = cljs.core.first(seq14457);
var seq14457__$1 = cljs.core.next(seq14457);
var G__14459 = cljs.core.first(seq14457__$1);
var seq14457__$2 = cljs.core.next(seq14457__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14458,G__14459,seq14457__$2);
});

