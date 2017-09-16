// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16450 = arguments.length;
var i__9123__auto___16451 = (0);
while(true){
if((i__9123__auto___16451 < len__9122__auto___16450)){
args__9129__auto__.push((arguments[i__9123__auto___16451]));

var G__16452 = (i__9123__auto___16451 + (1));
i__9123__auto___16451 = G__16452;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq16449){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16449));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16454 = arguments.length;
var i__9123__auto___16455 = (0);
while(true){
if((i__9123__auto___16455 < len__9122__auto___16454)){
args__9129__auto__.push((arguments[i__9123__auto___16455]));

var G__16456 = (i__9123__auto___16455 + (1));
i__9123__auto___16455 = G__16456;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq16453){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16453));
});

var g_QMARK__16460 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_))," never required"].join('')));
}
}),null));
var g_16461 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16460){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate))," never required"].join('')));
}
});})(g_QMARK__16460))
,null));
var mkg_16462 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__16460,g_16461){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator))," never required"].join('')));
}
});})(g_QMARK__16460,g_16461))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__16460,g_16461,mkg_16462){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
var fexpr__16457 = cljs.core.deref(g_QMARK__16460);
return (fexpr__16457.cljs$core$IFn$_invoke$arity$1 ? fexpr__16457.cljs$core$IFn$_invoke$arity$1(x) : fexpr__16457.call(null,x));
});})(g_QMARK__16460,g_16461,mkg_16462))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__16460,g_16461,mkg_16462){
return (function cljs$spec$gen$alpha$generator(gfn){
var fexpr__16458 = cljs.core.deref(mkg_16462);
return (fexpr__16458.cljs$core$IFn$_invoke$arity$1 ? fexpr__16458.cljs$core$IFn$_invoke$arity$1(gfn) : fexpr__16458.call(null,gfn));
});})(g_QMARK__16460,g_16461,mkg_16462))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__16460,g_16461,mkg_16462){
return (function cljs$spec$gen$alpha$generate(generator){
var fexpr__16459 = cljs.core.deref(g_16461);
return (fexpr__16459.cljs$core$IFn$_invoke$arity$1 ? fexpr__16459.cljs$core$IFn$_invoke$arity$1(generator) : fexpr__16459.call(null,generator));
});})(g_QMARK__16460,g_16461,mkg_16462))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator((function (rnd,size){
var fexpr__16463 = cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(gfnd));
return (fexpr__16463.cljs$core$IFn$_invoke$arity$2 ? fexpr__16463.cljs$core$IFn$_invoke$arity$2(rnd,size) : fexpr__16463.call(null,rnd,size));
}));
});
var g__16421__auto___16483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__16421__auto___16483){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16484 = arguments.length;
var i__9123__auto___16485 = (0);
while(true){
if((i__9123__auto___16485 < len__9122__auto___16484)){
args__9129__auto__.push((arguments[i__9123__auto___16485]));

var G__16486 = (i__9123__auto___16485 + (1));
i__9123__auto___16485 = G__16486;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16483))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16483){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16483),args);
});})(g__16421__auto___16483))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__16421__auto___16483){
return (function (seq16464){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16464));
});})(g__16421__auto___16483))
;


var g__16421__auto___16487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__16421__auto___16487){
return (function cljs$spec$gen$alpha$list(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16488 = arguments.length;
var i__9123__auto___16489 = (0);
while(true){
if((i__9123__auto___16489 < len__9122__auto___16488)){
args__9129__auto__.push((arguments[i__9123__auto___16489]));

var G__16490 = (i__9123__auto___16489 + (1));
i__9123__auto___16489 = G__16490;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16487))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16487){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16487),args);
});})(g__16421__auto___16487))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__16421__auto___16487){
return (function (seq16465){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16465));
});})(g__16421__auto___16487))
;


var g__16421__auto___16491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__16421__auto___16491){
return (function cljs$spec$gen$alpha$map(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16492 = arguments.length;
var i__9123__auto___16493 = (0);
while(true){
if((i__9123__auto___16493 < len__9122__auto___16492)){
args__9129__auto__.push((arguments[i__9123__auto___16493]));

var G__16494 = (i__9123__auto___16493 + (1));
i__9123__auto___16493 = G__16494;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16491))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16491){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16491),args);
});})(g__16421__auto___16491))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__16421__auto___16491){
return (function (seq16466){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16466));
});})(g__16421__auto___16491))
;


var g__16421__auto___16495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__16421__auto___16495){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16496 = arguments.length;
var i__9123__auto___16497 = (0);
while(true){
if((i__9123__auto___16497 < len__9122__auto___16496)){
args__9129__auto__.push((arguments[i__9123__auto___16497]));

var G__16498 = (i__9123__auto___16497 + (1));
i__9123__auto___16497 = G__16498;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16495))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16495){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16495),args);
});})(g__16421__auto___16495))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__16421__auto___16495){
return (function (seq16467){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16467));
});})(g__16421__auto___16495))
;


var g__16421__auto___16499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__16421__auto___16499){
return (function cljs$spec$gen$alpha$set(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16500 = arguments.length;
var i__9123__auto___16501 = (0);
while(true){
if((i__9123__auto___16501 < len__9122__auto___16500)){
args__9129__auto__.push((arguments[i__9123__auto___16501]));

var G__16502 = (i__9123__auto___16501 + (1));
i__9123__auto___16501 = G__16502;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16499))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16499){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16499),args);
});})(g__16421__auto___16499))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__16421__auto___16499){
return (function (seq16468){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16468));
});})(g__16421__auto___16499))
;


var g__16421__auto___16503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__16421__auto___16503){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16504 = arguments.length;
var i__9123__auto___16505 = (0);
while(true){
if((i__9123__auto___16505 < len__9122__auto___16504)){
args__9129__auto__.push((arguments[i__9123__auto___16505]));

var G__16506 = (i__9123__auto___16505 + (1));
i__9123__auto___16505 = G__16506;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16503))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16503){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16503),args);
});})(g__16421__auto___16503))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__16421__auto___16503){
return (function (seq16469){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16469));
});})(g__16421__auto___16503))
;


var g__16421__auto___16507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector_DASH_distinct))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__16421__auto___16507){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16508 = arguments.length;
var i__9123__auto___16509 = (0);
while(true){
if((i__9123__auto___16509 < len__9122__auto___16508)){
args__9129__auto__.push((arguments[i__9123__auto___16509]));

var G__16510 = (i__9123__auto___16509 + (1));
i__9123__auto___16509 = G__16510;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16507))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16507){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16507),args);
});})(g__16421__auto___16507))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__16421__auto___16507){
return (function (seq16470){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16470));
});})(g__16421__auto___16507))
;


var g__16421__auto___16511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__16421__auto___16511){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16512 = arguments.length;
var i__9123__auto___16513 = (0);
while(true){
if((i__9123__auto___16513 < len__9122__auto___16512)){
args__9129__auto__.push((arguments[i__9123__auto___16513]));

var G__16514 = (i__9123__auto___16513 + (1));
i__9123__auto___16513 = G__16514;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16511))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16511){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16511),args);
});})(g__16421__auto___16511))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__16421__auto___16511){
return (function (seq16471){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16471));
});})(g__16421__auto___16511))
;


var g__16421__auto___16515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__16421__auto___16515){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16516 = arguments.length;
var i__9123__auto___16517 = (0);
while(true){
if((i__9123__auto___16517 < len__9122__auto___16516)){
args__9129__auto__.push((arguments[i__9123__auto___16517]));

var G__16518 = (i__9123__auto___16517 + (1));
i__9123__auto___16517 = G__16518;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16515))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16515){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16515),args);
});})(g__16421__auto___16515))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__16421__auto___16515){
return (function (seq16472){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16472));
});})(g__16421__auto___16515))
;


var g__16421__auto___16519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__16421__auto___16519){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16520 = arguments.length;
var i__9123__auto___16521 = (0);
while(true){
if((i__9123__auto___16521 < len__9122__auto___16520)){
args__9129__auto__.push((arguments[i__9123__auto___16521]));

var G__16522 = (i__9123__auto___16521 + (1));
i__9123__auto___16521 = G__16522;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16519))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16519){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16519),args);
});})(g__16421__auto___16519))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__16421__auto___16519){
return (function (seq16473){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16473));
});})(g__16421__auto___16519))
;


var g__16421__auto___16523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__16421__auto___16523){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16524 = arguments.length;
var i__9123__auto___16525 = (0);
while(true){
if((i__9123__auto___16525 < len__9122__auto___16524)){
args__9129__auto__.push((arguments[i__9123__auto___16525]));

var G__16526 = (i__9123__auto___16525 + (1));
i__9123__auto___16525 = G__16526;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16523))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16523){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16523),args);
});})(g__16421__auto___16523))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__16421__auto___16523){
return (function (seq16474){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16474));
});})(g__16421__auto___16523))
;


var g__16421__auto___16527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__16421__auto___16527){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16528 = arguments.length;
var i__9123__auto___16529 = (0);
while(true){
if((i__9123__auto___16529 < len__9122__auto___16528)){
args__9129__auto__.push((arguments[i__9123__auto___16529]));

var G__16530 = (i__9123__auto___16529 + (1));
i__9123__auto___16529 = G__16530;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16527))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16527){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16527),args);
});})(g__16421__auto___16527))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__16421__auto___16527){
return (function (seq16475){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16475));
});})(g__16421__auto___16527))
;


var g__16421__auto___16531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__16421__auto___16531){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16532 = arguments.length;
var i__9123__auto___16533 = (0);
while(true){
if((i__9123__auto___16533 < len__9122__auto___16532)){
args__9129__auto__.push((arguments[i__9123__auto___16533]));

var G__16534 = (i__9123__auto___16533 + (1));
i__9123__auto___16533 = G__16534;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16531))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16531){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16531),args);
});})(g__16421__auto___16531))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__16421__auto___16531){
return (function (seq16476){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16476));
});})(g__16421__auto___16531))
;


var g__16421__auto___16535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__16421__auto___16535){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16536 = arguments.length;
var i__9123__auto___16537 = (0);
while(true){
if((i__9123__auto___16537 < len__9122__auto___16536)){
args__9129__auto__.push((arguments[i__9123__auto___16537]));

var G__16538 = (i__9123__auto___16537 + (1));
i__9123__auto___16537 = G__16538;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16535))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16535){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16535),args);
});})(g__16421__auto___16535))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__16421__auto___16535){
return (function (seq16477){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16477));
});})(g__16421__auto___16535))
;


var g__16421__auto___16539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__16421__auto___16539){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16540 = arguments.length;
var i__9123__auto___16541 = (0);
while(true){
if((i__9123__auto___16541 < len__9122__auto___16540)){
args__9129__auto__.push((arguments[i__9123__auto___16541]));

var G__16542 = (i__9123__auto___16541 + (1));
i__9123__auto___16541 = G__16542;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16539))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16539){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16539),args);
});})(g__16421__auto___16539))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__16421__auto___16539){
return (function (seq16478){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16478));
});})(g__16421__auto___16539))
;


var g__16421__auto___16543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__16421__auto___16543){
return (function cljs$spec$gen$alpha$return(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16544 = arguments.length;
var i__9123__auto___16545 = (0);
while(true){
if((i__9123__auto___16545 < len__9122__auto___16544)){
args__9129__auto__.push((arguments[i__9123__auto___16545]));

var G__16546 = (i__9123__auto___16545 + (1));
i__9123__auto___16545 = G__16546;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16543))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16543){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16543),args);
});})(g__16421__auto___16543))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__16421__auto___16543){
return (function (seq16479){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16479));
});})(g__16421__auto___16543))
;


var g__16421__auto___16547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__16421__auto___16547){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16548 = arguments.length;
var i__9123__auto___16549 = (0);
while(true){
if((i__9123__auto___16549 < len__9122__auto___16548)){
args__9129__auto__.push((arguments[i__9123__auto___16549]));

var G__16550 = (i__9123__auto___16549 + (1));
i__9123__auto___16549 = G__16550;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16547))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16547){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16547),args);
});})(g__16421__auto___16547))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__16421__auto___16547){
return (function (seq16480){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16480));
});})(g__16421__auto___16547))
;


var g__16421__auto___16551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double_STAR_))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__16421__auto___16551){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16552 = arguments.length;
var i__9123__auto___16553 = (0);
while(true){
if((i__9123__auto___16553 < len__9122__auto___16552)){
args__9129__auto__.push((arguments[i__9123__auto___16553]));

var G__16554 = (i__9123__auto___16553 + (1));
i__9123__auto___16553 = G__16554;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16551))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16551){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16551),args);
});})(g__16421__auto___16551))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__16421__auto___16551){
return (function (seq16481){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16481));
});})(g__16421__auto___16551))
;


var g__16421__auto___16555 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_frequency))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__16421__auto___16555){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16556 = arguments.length;
var i__9123__auto___16557 = (0);
while(true){
if((i__9123__auto___16557 < len__9122__auto___16556)){
args__9129__auto__.push((arguments[i__9123__auto___16557]));

var G__16558 = (i__9123__auto___16557 + (1));
i__9123__auto___16557 = G__16558;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16421__auto___16555))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16421__auto___16555){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(g__16421__auto___16555),args);
});})(g__16421__auto___16555))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__16421__auto___16555){
return (function (seq16482){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16482));
});})(g__16421__auto___16555))
;

var g__16434__auto___16580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__16434__auto___16580){
return (function cljs$spec$gen$alpha$any(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16581 = arguments.length;
var i__9123__auto___16582 = (0);
while(true){
if((i__9123__auto___16582 < len__9122__auto___16581)){
args__9129__auto__.push((arguments[i__9123__auto___16582]));

var G__16583 = (i__9123__auto___16582 + (1));
i__9123__auto___16582 = G__16583;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16580))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16580){
return (function (args){
return cljs.core.deref(g__16434__auto___16580);
});})(g__16434__auto___16580))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__16434__auto___16580){
return (function (seq16559){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16559));
});})(g__16434__auto___16580))
;


var g__16434__auto___16584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__16434__auto___16584){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16585 = arguments.length;
var i__9123__auto___16586 = (0);
while(true){
if((i__9123__auto___16586 < len__9122__auto___16585)){
args__9129__auto__.push((arguments[i__9123__auto___16586]));

var G__16587 = (i__9123__auto___16586 + (1));
i__9123__auto___16586 = G__16587;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16584))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16584){
return (function (args){
return cljs.core.deref(g__16434__auto___16584);
});})(g__16434__auto___16584))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__16434__auto___16584){
return (function (seq16560){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16560));
});})(g__16434__auto___16584))
;


var g__16434__auto___16588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__16434__auto___16588){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16589 = arguments.length;
var i__9123__auto___16590 = (0);
while(true){
if((i__9123__auto___16590 < len__9122__auto___16589)){
args__9129__auto__.push((arguments[i__9123__auto___16590]));

var G__16591 = (i__9123__auto___16590 + (1));
i__9123__auto___16590 = G__16591;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16588))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16588){
return (function (args){
return cljs.core.deref(g__16434__auto___16588);
});})(g__16434__auto___16588))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__16434__auto___16588){
return (function (seq16561){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16561));
});})(g__16434__auto___16588))
;


var g__16434__auto___16592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__16434__auto___16592){
return (function cljs$spec$gen$alpha$char(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16593 = arguments.length;
var i__9123__auto___16594 = (0);
while(true){
if((i__9123__auto___16594 < len__9122__auto___16593)){
args__9129__auto__.push((arguments[i__9123__auto___16594]));

var G__16595 = (i__9123__auto___16594 + (1));
i__9123__auto___16594 = G__16595;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16592))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16592){
return (function (args){
return cljs.core.deref(g__16434__auto___16592);
});})(g__16434__auto___16592))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__16434__auto___16592){
return (function (seq16562){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16562));
});})(g__16434__auto___16592))
;


var g__16434__auto___16596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__16434__auto___16596){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16597 = arguments.length;
var i__9123__auto___16598 = (0);
while(true){
if((i__9123__auto___16598 < len__9122__auto___16597)){
args__9129__auto__.push((arguments[i__9123__auto___16598]));

var G__16599 = (i__9123__auto___16598 + (1));
i__9123__auto___16598 = G__16599;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16596))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16596){
return (function (args){
return cljs.core.deref(g__16434__auto___16596);
});})(g__16434__auto___16596))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__16434__auto___16596){
return (function (seq16563){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16563));
});})(g__16434__auto___16596))
;


var g__16434__auto___16600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__16434__auto___16600){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16601 = arguments.length;
var i__9123__auto___16602 = (0);
while(true){
if((i__9123__auto___16602 < len__9122__auto___16601)){
args__9129__auto__.push((arguments[i__9123__auto___16602]));

var G__16603 = (i__9123__auto___16602 + (1));
i__9123__auto___16602 = G__16603;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16600))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16600){
return (function (args){
return cljs.core.deref(g__16434__auto___16600);
});})(g__16434__auto___16600))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__16434__auto___16600){
return (function (seq16564){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16564));
});})(g__16434__auto___16600))
;


var g__16434__auto___16604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__16434__auto___16604){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16605 = arguments.length;
var i__9123__auto___16606 = (0);
while(true){
if((i__9123__auto___16606 < len__9122__auto___16605)){
args__9129__auto__.push((arguments[i__9123__auto___16606]));

var G__16607 = (i__9123__auto___16606 + (1));
i__9123__auto___16606 = G__16607;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16604))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16604){
return (function (args){
return cljs.core.deref(g__16434__auto___16604);
});})(g__16434__auto___16604))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__16434__auto___16604){
return (function (seq16565){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16565));
});})(g__16434__auto___16604))
;


var g__16434__auto___16608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__16434__auto___16608){
return (function cljs$spec$gen$alpha$double(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16609 = arguments.length;
var i__9123__auto___16610 = (0);
while(true){
if((i__9123__auto___16610 < len__9122__auto___16609)){
args__9129__auto__.push((arguments[i__9123__auto___16610]));

var G__16611 = (i__9123__auto___16610 + (1));
i__9123__auto___16610 = G__16611;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16608))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16608){
return (function (args){
return cljs.core.deref(g__16434__auto___16608);
});})(g__16434__auto___16608))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__16434__auto___16608){
return (function (seq16566){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16566));
});})(g__16434__auto___16608))
;


var g__16434__auto___16612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__16434__auto___16612){
return (function cljs$spec$gen$alpha$int(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16613 = arguments.length;
var i__9123__auto___16614 = (0);
while(true){
if((i__9123__auto___16614 < len__9122__auto___16613)){
args__9129__auto__.push((arguments[i__9123__auto___16614]));

var G__16615 = (i__9123__auto___16614 + (1));
i__9123__auto___16614 = G__16615;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16612))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16612){
return (function (args){
return cljs.core.deref(g__16434__auto___16612);
});})(g__16434__auto___16612))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__16434__auto___16612){
return (function (seq16567){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16567));
});})(g__16434__auto___16612))
;


var g__16434__auto___16616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__16434__auto___16616){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16617 = arguments.length;
var i__9123__auto___16618 = (0);
while(true){
if((i__9123__auto___16618 < len__9122__auto___16617)){
args__9129__auto__.push((arguments[i__9123__auto___16618]));

var G__16619 = (i__9123__auto___16618 + (1));
i__9123__auto___16618 = G__16619;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16616))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16616){
return (function (args){
return cljs.core.deref(g__16434__auto___16616);
});})(g__16434__auto___16616))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__16434__auto___16616){
return (function (seq16568){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16568));
});})(g__16434__auto___16616))
;


var g__16434__auto___16620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__16434__auto___16620){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16621 = arguments.length;
var i__9123__auto___16622 = (0);
while(true){
if((i__9123__auto___16622 < len__9122__auto___16621)){
args__9129__auto__.push((arguments[i__9123__auto___16622]));

var G__16623 = (i__9123__auto___16622 + (1));
i__9123__auto___16622 = G__16623;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16620))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16620){
return (function (args){
return cljs.core.deref(g__16434__auto___16620);
});})(g__16434__auto___16620))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__16434__auto___16620){
return (function (seq16569){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16569));
});})(g__16434__auto___16620))
;


var g__16434__auto___16624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__16434__auto___16624){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16625 = arguments.length;
var i__9123__auto___16626 = (0);
while(true){
if((i__9123__auto___16626 < len__9122__auto___16625)){
args__9129__auto__.push((arguments[i__9123__auto___16626]));

var G__16627 = (i__9123__auto___16626 + (1));
i__9123__auto___16626 = G__16627;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16624))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16624){
return (function (args){
return cljs.core.deref(g__16434__auto___16624);
});})(g__16434__auto___16624))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__16434__auto___16624){
return (function (seq16570){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16570));
});})(g__16434__auto___16624))
;


var g__16434__auto___16628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__16434__auto___16628){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16629 = arguments.length;
var i__9123__auto___16630 = (0);
while(true){
if((i__9123__auto___16630 < len__9122__auto___16629)){
args__9129__auto__.push((arguments[i__9123__auto___16630]));

var G__16631 = (i__9123__auto___16630 + (1));
i__9123__auto___16630 = G__16631;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16628))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16628){
return (function (args){
return cljs.core.deref(g__16434__auto___16628);
});})(g__16434__auto___16628))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__16434__auto___16628){
return (function (seq16571){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16571));
});})(g__16434__auto___16628))
;


var g__16434__auto___16632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__16434__auto___16632){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16633 = arguments.length;
var i__9123__auto___16634 = (0);
while(true){
if((i__9123__auto___16634 < len__9122__auto___16633)){
args__9129__auto__.push((arguments[i__9123__auto___16634]));

var G__16635 = (i__9123__auto___16634 + (1));
i__9123__auto___16634 = G__16635;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16632))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16632){
return (function (args){
return cljs.core.deref(g__16434__auto___16632);
});})(g__16434__auto___16632))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__16434__auto___16632){
return (function (seq16572){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16572));
});})(g__16434__auto___16632))
;


var g__16434__auto___16636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__16434__auto___16636){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16637 = arguments.length;
var i__9123__auto___16638 = (0);
while(true){
if((i__9123__auto___16638 < len__9122__auto___16637)){
args__9129__auto__.push((arguments[i__9123__auto___16638]));

var G__16639 = (i__9123__auto___16638 + (1));
i__9123__auto___16638 = G__16639;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16636))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16636){
return (function (args){
return cljs.core.deref(g__16434__auto___16636);
});})(g__16434__auto___16636))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__16434__auto___16636){
return (function (seq16573){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16573));
});})(g__16434__auto___16636))
;


var g__16434__auto___16640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__16434__auto___16640){
return (function cljs$spec$gen$alpha$string(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16641 = arguments.length;
var i__9123__auto___16642 = (0);
while(true){
if((i__9123__auto___16642 < len__9122__auto___16641)){
args__9129__auto__.push((arguments[i__9123__auto___16642]));

var G__16643 = (i__9123__auto___16642 + (1));
i__9123__auto___16642 = G__16643;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16640))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16640){
return (function (args){
return cljs.core.deref(g__16434__auto___16640);
});})(g__16434__auto___16640))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__16434__auto___16640){
return (function (seq16574){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16574));
});})(g__16434__auto___16640))
;


var g__16434__auto___16644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__16434__auto___16644){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16645 = arguments.length;
var i__9123__auto___16646 = (0);
while(true){
if((i__9123__auto___16646 < len__9122__auto___16645)){
args__9129__auto__.push((arguments[i__9123__auto___16646]));

var G__16647 = (i__9123__auto___16646 + (1));
i__9123__auto___16646 = G__16647;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16644))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16644){
return (function (args){
return cljs.core.deref(g__16434__auto___16644);
});})(g__16434__auto___16644))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__16434__auto___16644){
return (function (seq16575){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16575));
});})(g__16434__auto___16644))
;


var g__16434__auto___16648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__16434__auto___16648){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16649 = arguments.length;
var i__9123__auto___16650 = (0);
while(true){
if((i__9123__auto___16650 < len__9122__auto___16649)){
args__9129__auto__.push((arguments[i__9123__auto___16650]));

var G__16651 = (i__9123__auto___16650 + (1));
i__9123__auto___16650 = G__16651;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16648))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16648){
return (function (args){
return cljs.core.deref(g__16434__auto___16648);
});})(g__16434__auto___16648))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__16434__auto___16648){
return (function (seq16576){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16576));
});})(g__16434__auto___16648))
;


var g__16434__auto___16652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__16434__auto___16652){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16653 = arguments.length;
var i__9123__auto___16654 = (0);
while(true){
if((i__9123__auto___16654 < len__9122__auto___16653)){
args__9129__auto__.push((arguments[i__9123__auto___16654]));

var G__16655 = (i__9123__auto___16654 + (1));
i__9123__auto___16654 = G__16655;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16652))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16652){
return (function (args){
return cljs.core.deref(g__16434__auto___16652);
});})(g__16434__auto___16652))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__16434__auto___16652){
return (function (seq16577){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16577));
});})(g__16434__auto___16652))
;


var g__16434__auto___16656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__16434__auto___16656){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16657 = arguments.length;
var i__9123__auto___16658 = (0);
while(true){
if((i__9123__auto___16658 < len__9122__auto___16657)){
args__9129__auto__.push((arguments[i__9123__auto___16658]));

var G__16659 = (i__9123__auto___16658 + (1));
i__9123__auto___16658 = G__16659;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16656))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16656){
return (function (args){
return cljs.core.deref(g__16434__auto___16656);
});})(g__16434__auto___16656))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__16434__auto___16656){
return (function (seq16578){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16578));
});})(g__16434__auto___16656))
;


var g__16434__auto___16660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__16434__auto___16660){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16661 = arguments.length;
var i__9123__auto___16662 = (0);
while(true){
if((i__9123__auto___16662 < len__9122__auto___16661)){
args__9129__auto__.push((arguments[i__9123__auto___16662]));

var G__16663 = (i__9123__auto___16662 + (1));
i__9123__auto___16662 = G__16663;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(g__16434__auto___16660))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16434__auto___16660){
return (function (args){
return cljs.core.deref(g__16434__auto___16660);
});})(g__16434__auto___16660))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__16434__auto___16660){
return (function (seq16579){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16579));
});})(g__16434__auto___16660))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__9129__auto__ = [];
var len__9122__auto___16666 = arguments.length;
var i__9123__auto___16667 = (0);
while(true){
if((i__9123__auto___16667 < len__9122__auto___16666)){
args__9129__auto__.push((arguments[i__9123__auto___16667]));

var G__16668 = (i__9123__auto___16667 + (1));
i__9123__auto___16667 = G__16668;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__16664_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__16664_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gens)], 0));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq16665){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16665));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace(ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns()], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.any_printable()], null)], 0)),cljs.spec.gen.alpha.boolean$(),cljs.spec.gen.alpha.char$(),cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (simple){
return (function (p1__16669_SHARP_){
return (new Date(p1__16669_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer()], 0)),cljs.spec.gen.alpha.symbol(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.gen.alpha.string_alphanumeric(),cljs.spec.gen.alpha.double$(),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0)),cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)),cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max,(-1)], null)], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns(),cljs.spec.gen.alpha.symbol_ns()], null)], 0))], 0)),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0)),cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(0)], null)], 0)),cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min,(1)], null)], 0)),cljs.spec.gen.alpha.uuid(),cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword(),cljs.spec.gen.alpha.symbol()], null)], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer(),cljs.spec.gen.alpha.double$()], null)], 0)),cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns()], 0)),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.string_alphanumeric()], null)], 0)),cljs.spec.gen.alpha.symbol_ns(),cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple,simple], 0)),cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0)),cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.gen.alpha.gen_builtins),pred);
}
});
