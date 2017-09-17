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
var len__9122__auto___14905 = arguments.length;
var i__9123__auto___14906 = (0);
while(true){
if((i__9123__auto___14906 < len__9122__auto___14905)){
args__9129__auto__.push((arguments[i__9123__auto___14906]));

var G__14907 = (i__9123__auto___14906 + (1));
i__9123__auto___14906 = G__14907;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14901){
var vec__14902 = p__14901;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(0),null);
var temp_a = reagent.session.cursor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref(temp_a) == null))){
return cljs.core.deref(temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq14899){
var G__14900 = cljs.core.first(seq14899);
var seq14899__$1 = cljs.core.next(seq14899);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__14900,seq14899__$1);
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
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14910){
var vec__14911 = p__14910;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14911,(0),null);
var or__7953__auto__ = cljs.core.deref(reagent.session.cursor(ks));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq14908){
var G__14909 = cljs.core.first(seq14908);
var seq14908__$1 = cljs.core.next(seq14908);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__14909,seq14908__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14919 = arguments.length;
var i__9123__auto___14920 = (0);
while(true){
if((i__9123__auto___14920 < len__9122__auto___14919)){
args__9129__auto__.push((arguments[i__9123__auto___14920]));

var G__14921 = (i__9123__auto___14920 + (1));
i__9123__auto___14920 = G__14921;
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

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq14917){
var G__14918 = cljs.core.first(seq14917);
var seq14917__$1 = cljs.core.next(seq14917);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14918,seq14917__$1);
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
var len__9122__auto___14928 = arguments.length;
var i__9123__auto___14929 = (0);
while(true){
if((i__9123__auto___14929 < len__9122__auto___14928)){
args__9129__auto__.push((arguments[i__9123__auto___14929]));

var G__14930 = (i__9123__auto___14929 + (1));
i__9123__auto___14929 = G__14930;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__14924){
var vec__14925 = p__14924;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14925,(0),null);
var cur = reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.remove_BANG_(k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq14922){
var G__14923 = cljs.core.first(seq14922);
var seq14922__$1 = cljs.core.next(seq14922);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14923,seq14922__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14937 = arguments.length;
var i__9123__auto___14938 = (0);
while(true){
if((i__9123__auto___14938 < len__9122__auto___14937)){
args__9129__auto__.push((arguments[i__9123__auto___14938]));

var G__14939 = (i__9123__auto___14938 + (1));
i__9123__auto___14938 = G__14939;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__14933){
var vec__14934 = p__14933;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14934,(0),null);
var cur = reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(ks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
reagent.session.assoc_in_BANG_(ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq14931){
var G__14932 = cljs.core.first(seq14931);
var seq14931__$1 = cljs.core.next(seq14931);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14932,seq14931__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14944 = arguments.length;
var i__9123__auto___14945 = (0);
while(true){
if((i__9123__auto___14945 < len__9122__auto___14944)){
args__9129__auto__.push((arguments[i__9123__auto___14945]));

var G__14946 = (i__9123__auto___14945 + (1));
i__9123__auto___14945 = G__14946;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14940_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update,p1__14940_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq14941){
var G__14942 = cljs.core.first(seq14941);
var seq14941__$1 = cljs.core.next(seq14941);
var G__14943 = cljs.core.first(seq14941__$1);
var seq14941__$2 = cljs.core.next(seq14941__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14942,G__14943,seq14941__$2);
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
var len__9122__auto___14951 = arguments.length;
var i__9123__auto___14952 = (0);
while(true){
if((i__9123__auto___14952 < len__9122__auto___14951)){
args__9129__auto__.push((arguments[i__9123__auto___14952]));

var G__14953 = (i__9123__auto___14952 + (1));
i__9123__auto___14952 = G__14953;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((2) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9130__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.session.state,(function (p1__14947_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in,p1__14947_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq14948){
var G__14949 = cljs.core.first(seq14948);
var seq14948__$1 = cljs.core.next(seq14948);
var G__14950 = cljs.core.first(seq14948__$1);
var seq14948__$2 = cljs.core.next(seq14948__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14949,G__14950,seq14948__$2);
});

