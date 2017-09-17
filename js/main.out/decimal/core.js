// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('decimal.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
decimal.core._PLUS_decimal_PLUS_ = Decimal.noConflict();
decimal.core._STAR_decimal_STAR_ = decimal.core._PLUS_decimal_PLUS_;
decimal.core.round_mapping = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$round_DASH_ceil,cljs.core.cst$kw$round_DASH_floor,cljs.core.cst$kw$round_DASH_half_DASH_even,cljs.core.cst$kw$round_DASH_half_DASH_down,cljs.core.cst$kw$round_DASH_half_DASH_ceil,cljs.core.cst$kw$round_DASH_half_DASH_up,cljs.core.cst$kw$round_DASH_half_DASH_floor,cljs.core.cst$kw$round_DASH_down,cljs.core.cst$kw$round_DASH_up,cljs.core.cst$kw$euclid],[(2),(3),(6),(5),(7),(4),(8),(1),(0),(9)]);
decimal.core.modulo_mapping = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$round_DASH_up,(0),cljs.core.cst$kw$round_DASH_down,(1),cljs.core.cst$kw$round_DASH_floor,(3),cljs.core.cst$kw$round_DASH_half_DASH_even,(6),cljs.core.cst$kw$euclid,(9)], null);
/**
 * Set the global configuration for the decimal constructor.
 * 
 *   Possible options:
 * 
 *   - `precision`: The maximum number of significant digits of
 *  the result of an operation (integer 1 to 1e+9 inclusive,
 *  default: 20).
 *   - `rounding`: The default rounding mode used when rounding
 *  the result of an operation (integer 0 to 8 inclusive,
 *  default: :round-half-up).
 *   - `min-e`: The negative exponent limit, i.e. the exponent value below
 *  which underflow to zero occurs (integer, -9e15 to 0 inclusive, default:
 *  -9e15).
 *   - `max-e`: The positive exponent limit, i.e. the exponent value above
 *  which overflow to Infinity occurs (integer, 0 to 9e15 inclusive, default:
 *  9e15).
 *   - `to-exp-neg`: The negative exponent value at and below which `toString`
 *  returns exponential notation. (integer, -9e15 to 0 inclusive, default: -7)
 *   - `to-exp-pos`: The positive exponent value at and above which `toString`
 *  returns exponential notation. (integer, 0 to 9e15 inclusive, default: 20)
 *   - `modulo`: The modulo mode used when calculating the modulus: `a mod n`.
 *  (integer, 0 to 9 inclusive, default: :round-down)
 *   - `crypto`: The value that determines whether cryptographically-secure
 *  pseudo-random number generation is used. (boolean, default: false)
 * 
 *   **Rounding modes**
 * 
 *   Rounding modes are:
 * 
 *   Keyword           |  Description
 *   ------------------|-------------
 *   :round-up         |  Rounds away from zero
 *   :round-down       |  Rounds towards zero
 *   :round-ceil       |  Rounds towards Infinity
 *   :round-floor      |  Rounds towards -Infinity
 *   :round-half-up    |  Rounds towards nearest neighbour. If equidistant, rounds away from zero
 *   :round-half-down  |  Rounds towards nearest neighbour. If equidistant, rounds towards zero
 *   :round-half-even  |  Rounds towards nearest neighbour. If equidistant, rounds towards even neighbour
 *   :round-half-ceil  |  Rounds towards nearest neighbour. If equidistant, rounds towards Infinity
 *   :round-half-floor |  Rounds towards nearest neighbour. If equidistant, rounds towards -Infinity
 *   :euclid           |  Not a rounding mode, see modulo
 * 
 *   **Modulo modes**
 * 
 *   The modes that are most commonly used for the modulus/remainder operation
 *   are shown in the following table. Although the other rounding modes can be used,
 *   they may not give useful results.
 * 
 *   Keyword           | Description
 *   ------------------|------------
 *   :round-up         | The remainder is positive if the dividend is negative, else is negative
 *   :round-down       | The remainder has the same sign as the dividend. This uses truncating division and matches the behaviour of JavaScript's remainder operator %.
 *   :round-floor      | The remainder has the same sign as the divisor. (This matches Python's % operator)
 *   :round-half-even  | The IEEE 754 remainder function
 *   :euclid           | The remainder is always positive.
 * 
 *   **Other options**
 * 
 *   The underlying library supports more options that and this
 *   function also accepts. You can read more about here:
 *   http://mikemcl.github.io/decimal.js/#Dconfig
 */
decimal.core.config_BANG_ = (function decimal$core$config_BANG_(options){
var opts = ({"precision": cljs.core.cst$kw$precision.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": (function (){var G__14957 = decimal.core.round_mapping;
var G__14958 = decimal.core._PLUS_decimal_PLUS_.rounding;
var fexpr__14956 = cljs.core.cst$kw$rounding.cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__14956.cljs$core$IFn$_invoke$arity$2 ? fexpr__14956.cljs$core$IFn$_invoke$arity$2(G__14957,G__14958) : fexpr__14956.call(null,G__14957,G__14958));
})(), "modulo": (function (){var G__14960 = decimal.core.modulo_mapping;
var G__14961 = decimal.core._PLUS_decimal_PLUS_.modulo;
var fexpr__14959 = cljs.core.cst$kw$modulo.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$round_DASH_down);
return (fexpr__14959.cljs$core$IFn$_invoke$arity$2 ? fexpr__14959.cljs$core$IFn$_invoke$arity$2(G__14960,G__14961) : fexpr__14959.call(null,G__14960,G__14961));
})(), "minE": cljs.core.cst$kw$min_DASH_e.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.minE), "maxE": cljs.core.cst$kw$max_DASH_e.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.maxE), "toExpNeg": cljs.core.cst$kw$to_DASH_exp_DASH_neg.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpNeg), "toExpPos": cljs.core.cst$kw$to_DASH_exp_DASH_pos.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpPos), "crypto": cljs.core.cst$kw$crypto.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.crypto)});
decimal.core._STAR_decimal_STAR_.set(opts);

return null;
});
/**
 * The same as `config` but returns an constructor
 *   of decimals that can be used for create new instances
 *   with provided configuration.
 */
decimal.core.config = (function decimal$core$config(options){
var opts = ({"precision": cljs.core.cst$kw$precision.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": (function (){var G__14963 = decimal.core.round_mapping;
var G__14964 = decimal.core._PLUS_decimal_PLUS_.rounding;
var fexpr__14962 = cljs.core.cst$kw$rounding.cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__14962.cljs$core$IFn$_invoke$arity$2 ? fexpr__14962.cljs$core$IFn$_invoke$arity$2(G__14963,G__14964) : fexpr__14962.call(null,G__14963,G__14964));
})(), "modulo": (function (){var G__14966 = decimal.core.modulo_mapping;
var G__14967 = decimal.core._PLUS_decimal_PLUS_.modulo;
var fexpr__14965 = cljs.core.cst$kw$modulo.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$round_DASH_down);
return (fexpr__14965.cljs$core$IFn$_invoke$arity$2 ? fexpr__14965.cljs$core$IFn$_invoke$arity$2(G__14966,G__14967) : fexpr__14965.call(null,G__14966,G__14967));
})(), "minE": cljs.core.cst$kw$min_DASH_e.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.minE), "maxE": cljs.core.cst$kw$max_DASH_e.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.maxE), "toExpNeg": cljs.core.cst$kw$to_DASH_exp_DASH_neg.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpNeg), "toExpPos": cljs.core.cst$kw$to_DASH_exp_DASH_pos.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.toExpPos), "crypto": cljs.core.cst$kw$crypto.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.crypto)});
return decimal.core._PLUS_decimal_PLUS_.clone(opts);
});

/**
 * @interface
 */
decimal.core.IDecimal = function(){};

/**
 * return a decimal instance.
 */
decimal.core._decimal = (function decimal$core$_decimal(v){
if((!((v == null))) && (!((v.decimal$core$IDecimal$_decimal$arity$1 == null)))){
return v.decimal$core$IDecimal$_decimal$arity$1(v);
} else {
var x__8636__auto__ = (((v == null))?null:v);
var m__8637__auto__ = (decimal.core._decimal[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$1(v) : m__8637__auto__.call(null,v));
} else {
var m__8637__auto____$1 = (decimal.core._decimal["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1(v) : m__8637__auto____$1.call(null,v));
} else {
throw cljs.core.missing_protocol("IDecimal.-decimal",v);
}
}
}
});

/**
 * Create a new Decimal instance from `v` value.
 */
decimal.core.decimal = (function decimal$core$decimal(v){
return decimal.core._decimal(v);
});
/**
 * Return true if `v` is a instance of Decimal.
 */
decimal.core.decimal_QMARK_ = (function decimal$core$decimal_QMARK_(v){
return (v instanceof decimal.core._STAR_decimal_STAR_);
});
/**
 * Returns true if the value of this Decimal is a finite
 *   number, otherwise returns false.
 *   The only possible non-finite values of a Decimal are
 *   NaN, Infinity and -Infinity.
 */
decimal.core.finite_QMARK_ = (function decimal$core$finite_QMARK_(v){
return decimal.core._decimal(v).isFinite();
});
/**
 * Returns true if the value of this Decimal is a whole
 *   number, otherwise returns false.
 */
decimal.core.integer_QMARK_ = (function decimal$core$integer_QMARK_(v){
return decimal.core._decimal(v).isInt();
});
/**
 * Returns true if the value of this Decimal is NaN,
 *   otherwise returns false.
 */
decimal.core.NaN_QMARK_ = (function decimal$core$NaN_QMARK_(v){
return decimal.core._decimal(v).isNaN();
});
/**
 * Returns true if the value of this Decimal is negative,
 *   otherwise returns false.
 */
decimal.core.neg_QMARK_ = (function decimal$core$neg_QMARK_(v){
return decimal.core._decimal(v).isNegative();
});
/**
 * Returns true if the value of this Decimal is negative,
 *   otherwise returns false.
 */
decimal.core.pos_QMARK_ = (function decimal$core$pos_QMARK_(v){
return decimal.core._decimal(v).isPositive();
});
/**
 * Returns true if the value of this Decimal is zero or
 *   minus zero, otherwise returns false.
 */
decimal.core.zero_QMARK_ = (function decimal$core$zero_QMARK_(v){
return decimal.core._decimal(v).isZero();
});
/**
 * Returns true if the value of this Decimal is less than
 *   the value of x, otherwise returns false.
 */
decimal.core._LT_ = (function decimal$core$_LT_(var_args){
var G__14972 = arguments.length;
switch (G__14972) {
case 2:
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14974 = arguments.length;
var i__9123__auto___14975 = (0);
while(true){
if((i__9123__auto___14975 < len__9122__auto___14974)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14975]));

var G__14976 = (i__9123__auto___14975 + (1));
i__9123__auto___14975 = G__14976;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core._LT_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).lt(x);
});

decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._LT_.cljs$core$IFn$_invoke$arity$2(v,x)){
if(cljs.core.next(more)){
var G__14977 = x;
var G__14978 = cljs.core.first(more);
var G__14979 = cljs.core.next(more);
v = G__14977;
x = G__14978;
more = G__14979;
continue;
} else {
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

decimal.core._LT_.cljs$lang$applyTo = (function (seq14969){
var G__14970 = cljs.core.first(seq14969);
var seq14969__$1 = cljs.core.next(seq14969);
var G__14971 = cljs.core.first(seq14969__$1);
var seq14969__$2 = cljs.core.next(seq14969__$1);
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic(G__14970,G__14971,seq14969__$2);
});

decimal.core._LT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is less than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._LT__EQ_ = (function decimal$core$_LT__EQ_(var_args){
var G__14984 = arguments.length;
switch (G__14984) {
case 2:
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).lte(x);
});

decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(v,x)){
if(cljs.core.next(more)){
var G__14989 = x;
var G__14990 = cljs.core.first(more);
var G__14991 = cljs.core.next(more);
v = G__14989;
x = G__14990;
more = G__14991;
continue;
} else {
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

decimal.core._LT__EQ_.cljs$lang$applyTo = (function (seq14981){
var G__14982 = cljs.core.first(seq14981);
var seq14981__$1 = cljs.core.next(seq14981);
var G__14983 = cljs.core.first(seq14981__$1);
var seq14981__$2 = cljs.core.next(seq14981__$1);
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14982,G__14983,seq14981__$2);
});

decimal.core._LT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   the value of x, otherwise returns false.
 */
decimal.core._GT_ = (function decimal$core$_GT_(var_args){
var G__14996 = arguments.length;
switch (G__14996) {
case 2:
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14998 = arguments.length;
var i__9123__auto___14999 = (0);
while(true){
if((i__9123__auto___14999 < len__9122__auto___14998)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14999]));

var G__15000 = (i__9123__auto___14999 + (1));
i__9123__auto___14999 = G__15000;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core._GT_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).gt(x);
});

decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT_.cljs$core$IFn$_invoke$arity$2(v,x)){
if(cljs.core.next(more)){
var G__15001 = x;
var G__15002 = cljs.core.first(more);
var G__15003 = cljs.core.next(more);
v = G__15001;
x = G__15002;
more = G__15003;
continue;
} else {
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

decimal.core._GT_.cljs$lang$applyTo = (function (seq14993){
var G__14994 = cljs.core.first(seq14993);
var seq14993__$1 = cljs.core.next(seq14993);
var G__14995 = cljs.core.first(seq14993__$1);
var seq14993__$2 = cljs.core.next(seq14993__$1);
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic(G__14994,G__14995,seq14993__$2);
});

decimal.core._GT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._GT__EQ_ = (function decimal$core$_GT__EQ_(var_args){
var G__15008 = arguments.length;
switch (G__15008) {
case 2:
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15010 = arguments.length;
var i__9123__auto___15011 = (0);
while(true){
if((i__9123__auto___15011 < len__9122__auto___15010)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15011]));

var G__15012 = (i__9123__auto___15011 + (1));
i__9123__auto___15011 = G__15012;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).gte(x);
});

decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(v,x)){
if(cljs.core.next(more)){
var G__15013 = x;
var G__15014 = cljs.core.first(more);
var G__15015 = cljs.core.next(more);
v = G__15013;
x = G__15014;
more = G__15015;
continue;
} else {
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

decimal.core._GT__EQ_.cljs$lang$applyTo = (function (seq15005){
var G__15006 = cljs.core.first(seq15005);
var seq15005__$1 = cljs.core.next(seq15005);
var G__15007 = cljs.core.first(seq15005__$1);
var seq15005__$2 = cljs.core.next(seq15005__$1);
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__15006,G__15007,seq15005__$2);
});

decimal.core._GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is equal to the
 *   value of x, otherwise returns false.
 */
decimal.core._EQ_ = (function decimal$core$_EQ_(var_args){
var G__15020 = arguments.length;
switch (G__15020) {
case 2:
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15022 = arguments.length;
var i__9123__auto___15023 = (0);
while(true){
if((i__9123__auto___15023 < len__9122__auto___15022)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15023]));

var G__15024 = (i__9123__auto___15023 + (1));
i__9123__auto___15023 = G__15024;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core._EQ_.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).eq(x);
});

decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (v,x,more){
while(true){
if(decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(v,x)){
if(cljs.core.next(more)){
var G__15025 = x;
var G__15026 = cljs.core.first(more);
var G__15027 = cljs.core.next(more);
v = G__15025;
x = G__15026;
more = G__15027;
continue;
} else {
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2(x,cljs.core.first(more));
}
} else {
return false;
}
break;
}
});

decimal.core._EQ_.cljs$lang$applyTo = (function (seq15017){
var G__15018 = cljs.core.first(seq15017);
var seq15017__$1 = cljs.core.next(seq15017);
var G__15019 = cljs.core.first(seq15017__$1);
var seq15017__$2 = cljs.core.next(seq15017__$1);
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(G__15018,G__15019,seq15017__$2);
});

decimal.core._EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns 1 if the value of this Decimal is greater than
 *   the value of x, -1 if the value of this Decimal is less
 *   than the value of x, 0 if the value of Decimal is equal
 *   to the value of x and NaN if the value of this Decimal or
 *   the value of x is NaN
 */
decimal.core.cmp = (function decimal$core$cmp(v,x){
return decimal.core._decimal(v).cmp(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal plus x, rounded to significant digits.
 */
decimal.core.plus = (function decimal$core$plus(v,x){
return decimal.core._decimal(v).plus(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal minus x, rounded to significant digits.
 */
decimal.core.minus = (function decimal$core$minus(v,x){
return decimal.core._decimal(v).minus(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal times x, rounded to significant digits using.
 */
decimal.core.mul = (function decimal$core$mul(v,x){
return decimal.core._decimal(v).times(x);
});
/**
 * Returns a new Decimal whose value is the value of this
 *   Decimal divided by x, rounded to significant digits.
 */
decimal.core.div = (function decimal$core$div(v,x){
return decimal.core._decimal(v).div(x);
});
/**
 * Return a new Decimal whose value is the integer part
 *   of dividing this Decimal by x, rounded to significant digits.
 */
decimal.core.div_SINGLEQUOTE_ = (function decimal$core$div_SINGLEQUOTE_(v,x){
return decimal.core._decimal(v).divToInt(x);
});
/**
 * Returns a new Decimal whose value is the maximum.
 */
decimal.core.max = (function decimal$core$max(var_args){
var G__15032 = arguments.length;
switch (G__15032) {
case 1:
return decimal.core.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15034 = arguments.length;
var i__9123__auto___15035 = (0);
while(true){
if((i__9123__auto___15035 < len__9122__auto___15034)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15035]));

var G__15036 = (i__9123__auto___15035 + (1));
i__9123__auto___15035 = G__15036;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return decimal.core._decimal(a);
});

decimal.core.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = decimal.core._decimal(a);
var b__$1 = decimal.core._decimal(b);
if(decimal.core._GT_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return a__$1;
} else {
return b__$1;
}
});

decimal.core.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(decimal.core.max,decimal.core.max.cljs$core$IFn$_invoke$arity$2(a,b),more);
});

decimal.core.max.cljs$lang$applyTo = (function (seq15029){
var G__15030 = cljs.core.first(seq15029);
var seq15029__$1 = cljs.core.next(seq15029);
var G__15031 = cljs.core.first(seq15029__$1);
var seq15029__$2 = cljs.core.next(seq15029__$1);
return decimal.core.max.cljs$core$IFn$_invoke$arity$variadic(G__15030,G__15031,seq15029__$2);
});

decimal.core.max.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new Decimal whose value is the minimum.
 */
decimal.core.min = (function decimal$core$min(var_args){
var G__15041 = arguments.length;
switch (G__15041) {
case 1:
return decimal.core.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___15043 = arguments.length;
var i__9123__auto___15044 = (0);
while(true){
if((i__9123__auto___15044 < len__9122__auto___15043)){
args_arr__9141__auto__.push((arguments[i__9123__auto___15044]));

var G__15045 = (i__9123__auto___15044 + (1));
i__9123__auto___15044 = G__15045;
continue;
} else {
}
break;
}

var argseq__9142__auto__ = (new cljs.core.IndexedSeq(args_arr__9141__auto__.slice((2)),(0),null));
return decimal.core.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9142__auto__);

}
});

decimal.core.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return decimal.core._decimal(a);
});

decimal.core.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = decimal.core._decimal(a);
var b__$1 = decimal.core._decimal(b);
if(decimal.core._GT_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return b__$1;
} else {
return a__$1;
}
});

decimal.core.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(decimal.core.min,decimal.core.min.cljs$core$IFn$_invoke$arity$2(a,b),more);
});

decimal.core.min.cljs$lang$applyTo = (function (seq15038){
var G__15039 = cljs.core.first(seq15038);
var seq15038__$1 = cljs.core.next(seq15038);
var G__15040 = cljs.core.first(seq15038__$1);
var seq15038__$2 = cljs.core.next(seq15038__$1);
return decimal.core.min.cljs$core$IFn$_invoke$arity$variadic(G__15039,G__15040,seq15038__$2);
});

decimal.core.min.cljs$lang$maxFixedArity = (2);

decimal.core._SLASH_ = decimal.core.div;
decimal.core._PLUS_ = decimal.core.plus;
decimal.core._ = decimal.core.minus;
decimal.core._STAR_ = decimal.core.mul;
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number in the direction of negative Infinity.
 */
decimal.core.floor = (function decimal$core$floor(v){
return decimal.core._decimal(v).floor();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number in the direction of positive Infinity.
 */
decimal.core.ceil = (function decimal$core$ceil(v){
return decimal.core._decimal(v).ceil();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   rounded to a whole number.
 *   To emulate Math.round, set rounding to 7 (or :round/hanf-ceil).
 */
decimal.core.round = (function decimal$core$round(v){
return decimal.core._decimal(v).round();
});
/**
 * Returns a new Decimal whose value is the absolute value, i.e.
 *   the magnitude, of the value of this Decimal.
 */
decimal.core.abs = (function decimal$core$abs(v){
return decimal.core._decimal(v).absoluteValue();
});
/**
 * Returns a new Decimal whose value is the sine of the value
 *   in radians of this Decimal.
 */
decimal.core.sin = (function decimal$core$sin(v){
return decimal.core._decimal(v).sine();
});
/**
 * Returns a new Decimal whose value is the inverse sine in
 *   radians of the value of this Decimal.
 */
decimal.core.asin = (function decimal$core$asin(v){
return decimal.core._decimal(v).inverseSine();
});
/**
 * Returns a new Decimal whose value is the hyperbolic sine of
 *   the value in radians of this Decimal.
 */
decimal.core.sinh = (function decimal$core$sinh(v){
return decimal.core._decimal(v).hyperbolicSine();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   sine in radians of the value of this Decimal.
 */
decimal.core.asinh = (function decimal$core$asinh(v){
return decimal.core._decimal(v).inverseHyperbolicSine();
});
/**
 * Returns a new Decimal whose value is the cosine of the value
 *   in radians of this Decimal.
 */
decimal.core.cos = (function decimal$core$cos(v){
return decimal.core._decimal(v).cosine();
});
/**
 * Returns a new Decimal whose value is the inverse cosine
 *   in radians of the value of this Decimal.
 */
decimal.core.acos = (function decimal$core$acos(v){
return decimal.core._decimal(v).inverseCosine();
});
/**
 * Returns a new Decimal whose value is the hyperbolic cosine
 *   of the value in radians of this Decimal.
 */
decimal.core.cosh = (function decimal$core$cosh(v){
return decimal.core._decimal(v).hyperbolicCosine();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   cosine in radians of the value of this Decimal.
 */
decimal.core.acosh = (function decimal$core$acosh(v){
return decimal.core._decimal(v).inverseHyperbolicCosine();
});
/**
 * Returns a new Decimal whose value is the tangent of the value
 *   in radians of this Decimal.
 */
decimal.core.tan = (function decimal$core$tan(v){
return decimal.core._decimal(v).tangent();
});
/**
 * Returns a new Decimal whose value is the inverse tangent
 *   in radians of the value of this Decimal.
 */
decimal.core.atan = (function decimal$core$atan(v){
return decimal.core._decimal(v).inverseTangent();
});
/**
 * Returns a new Decimal whose value is the hyperbolic
 *   tangent of the value in radians of this Decimal.
 */
decimal.core.tanh = (function decimal$core$tanh(v){
return decimal.core._decimal(v).hyperbolicTangent();
});
/**
 * Returns a new Decimal whose value is the inverse hyperbolic
 *   tangent in radians of the value of this Decimal.
 */
decimal.core.atanh = (function decimal$core$atanh(v){
return decimal.core._decimal(v).inverseHyperbolicTangent();
});
/**
 * Returns a new Decimal whose value is the cube root of this Decimal.
 */
decimal.core.cbrt = (function decimal$core$cbrt(v){
return decimal.core._decimal(v).cubeRoot();
});
/**
 * Returns a new Decimal whose value is the square root of this Decimal.
 */
decimal.core.sqrt = (function decimal$core$sqrt(v){
return decimal.core._decimal(v).squareRoot();
});
/**
 * Returns a new Decimal whose value is the base `x` logarithm
 *   of the value of this Decimal.
 *   If x is omitted, the base 10 logarithm of the value of
 *   this Decimal will be returned.
 */
decimal.core.log = (function decimal$core$log(var_args){
var G__15047 = arguments.length;
switch (G__15047) {
case 1:
return decimal.core.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.log.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.log.cljs$core$IFn$_invoke$arity$2(v,(10));
});

decimal.core.log.cljs$core$IFn$_invoke$arity$2 = (function (v,x){
return decimal.core._decimal(v).log(x);
});

decimal.core.log.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new Decimal whose value is the base 2 logarithm of `x`.
 */
decimal.core.log2 = (function decimal$core$log2(x){
return decimal.core._STAR_decimal_STAR_.log2(x);
});
/**
 * Returns a new Decimal whose value is the base 10 logarithm of `x`.
 */
decimal.core.log10 = (function decimal$core$log10(x){
return decimal.core._STAR_decimal_STAR_.log10(x);
});
/**
 * Returns a new Decimal whose value is the value of
 *   this Decimal modulo `x`.
 * 
 *   The value returned, and in particular its sign, is
 *   dependent on the value of the modulo property of this
 *   Decimal's constructor. If it is 1 (default value), the
 *   result will have the same sign as this Decimal, and it
 *   will match that of Javascript's `%` operator (within
 *   the limits of double precision) and `BigDecimal`'s
 *   remainder method.
 * 
 *   See `config!` function docstrings for a description
 *   and available options for `modulo`.
 */
decimal.core.mod = (function decimal$core$mod(v,x){
return decimal.core._decimal(v).mod(x);
});
/**
 * Returns a new Decimal whose value is the base e (Euler's number,
 *   the base of the natural logarithm) exponential of the value of
 *   this Decimal.
 * 
 *   The `ln` is the invese of this function.
 */
decimal.core.exp = (function decimal$core$exp(v){
return decimal.core._decimal(v).naturalExponential();
});
/**
 * Returns a new Decimal whose value is the natural logarithm of
 *   the value of this Decimal.
 */
decimal.core.ln = (function decimal$core$ln(v){
return decimal.core._decimal(v).naturalLogarithm();
});
/**
 * Returns a new Decimal whose value is the square root of the sum
 *   of the squares of the arguments.
 */
decimal.core.hypot = (function decimal$core$hypot(var_args){
var args__9129__auto__ = [];
var len__9122__auto___15050 = arguments.length;
var i__9123__auto___15051 = (0);
while(true){
if((i__9123__auto___15051 < len__9122__auto___15050)){
args__9129__auto__.push((arguments[i__9123__auto___15051]));

var G__15052 = (i__9123__auto___15051 + (1));
i__9123__auto___15051 = G__15052;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return decimal.core._STAR_decimal_STAR_.hypot.apply(decimal.core._STAR_decimal_STAR_,cljs.core.clj__GT_js(params));
});

decimal.core.hypot.cljs$lang$maxFixedArity = (0);

decimal.core.hypot.cljs$lang$applyTo = (function (seq15049){
return decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15049));
});

/**
 * Returns a new Decimal whose value is the value of this Decimal negated.
 */
decimal.core.neg = (function decimal$core$neg(v){
return decimal.core._decimal(v).negated();
});
/**
 * Returns a new Decimal with a pseudo-random value equal to or greater
 *   than 0 and less than 1.
 *   The return value will have `dp` decimal places (or less if trailing
 *   zeros are produced). If dp is omitted then the default will be used.
 * 
 *   Detailed doc: http://mikemcl.github.io/decimal.js/#Drandom
 */
decimal.core.random = (function decimal$core$random(dp){
return decimal.core._STAR_decimal_STAR_.random(dp);
});
/**
 * Returns the number of decimal places, i.e. the number
 *   of digits after the decimal point, of the value of this Decimal.
 */
decimal.core.decimal_places = (function decimal$core$decimal_places(v){
return decimal.core._decimal(v).decimalPlaces();
});
/**
 * Returns a new Decimal whose value is the value of this Decimal
 *   truncated to a whole number.
 */
decimal.core.truncate = (function decimal$core$truncate(v){
return decimal.core._decimal(v).truncated();
});
/**
 * Returns the number of significant digits of the value of this Decimal.
 * 
 *   If `include-zeros` is `true`, then the trailing zeros of the integer
 *   part will be included in the counter of significant digits.
 */
decimal.core.precision = (function decimal$core$precision(var_args){
var G__15054 = arguments.length;
switch (G__15054) {
case 1:
return decimal.core.precision.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.precision.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.precision.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.precision.cljs$core$IFn$_invoke$arity$2(v,false);
});

decimal.core.precision.cljs$core$IFn$_invoke$arity$2 = (function (v,include_zeros){
return decimal.core._decimal(v).precision(cljs.core.boolean$(include_zeros));
});

decimal.core.precision.cljs$lang$maxFixedArity = 2;

/**
 * Returns the sign of the value of this Decimal.
 */
decimal.core.sign = (function decimal$core$sign(v){
return decimal.core._STAR_decimal_STAR_.sign(v);
});
/**
 * Returns a string representing the value of this Decimal in binary format.
 * 
 *   If `sd` is specified, the return value will use binary exponential notation.
 *   If `sd` is omitted, the return value will be rounded to default significant
 *   digits. If `rm` is omitted, default rounding mode will be used.
 */
decimal.core.to_binary = (function decimal$core$to_binary(var_args){
var G__15057 = arguments.length;
switch (G__15057) {
case 1:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3(v,sd,undefined);
});

decimal.core.to_binary.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
var v__$1 = decimal.core._decimal(v);
return v__$1.toBinary(sd,rm);
});

decimal.core.to_binary.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   exponential notation rounded using rounding mode `rm` to `dp`
 *   decimal places.
 * 
 *   If the value of this Decimal in exponential notation has fewer
 *   than `dp` fraction digits, the return value will be appended
 *   with zeros accordingly.
 * 
 *   If `dp` is omitted, the number of digits after the decimal
 *   point defaults to the minimum number of digits necessary to
 *   represent the value exactly.
 * 
 *   If `rm` is omitted, rounding mode rounding is used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_exponential = (function decimal$core$to_exponential(var_args){
var G__15060 = arguments.length;
switch (G__15060) {
case 1:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3(v,dp,undefined);
});

decimal.core.to_exponential.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal(v).toExponential(dp,rm);
});

decimal.core.to_exponential.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   normal (fixed-point) notation rounded to `dp` decimal places
 *   using rounding mode `rm`.
 * 
 *   If the value of this Decimal in normal notation has fewer
 *   than `dp` fraction digits, the return value will be appended
 *   with zeros accordingly.
 * 
 *   Unlike `Number/toFixed`, which returns exponential notation
 *   if a number is greater or equal to 10^21, this method will
 *   always return normal notation.
 * 
 *   If `dp` is omitted, the return value will be unrounded and
 *   in normal notation. This is unlike `Number/toFixed`, which
 *   returns the value to zero decimal places, but is useful when
 *   because of the current `toExpNeg` or `toExpNeg` values,
 *   toString returns exponential notation.
 * 
 *   If `rm` is omitted, default rounding mode is used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_fixed = (function decimal$core$to_fixed(var_args){
var G__15063 = arguments.length;
switch (G__15063) {
case 1:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3(v,dp,undefined);
});

decimal.core.to_fixed.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal(v).toFixed(dp,rm);
});

decimal.core.to_fixed.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   octal notation rounded to `sd` significant digits
 *   using rounding mode `rm`.
 * 
 *   If `sd` is defined, the return value will use binary
 *   exponential notation.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_octal = (function decimal$core$to_octal(var_args){
var G__15066 = arguments.length;
switch (G__15066) {
case 1:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3(v,sd,undefined);
});

decimal.core.to_octal.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal(v).toOctal(sd,rm);
});

decimal.core.to_octal.cljs$lang$maxFixedArity = 3;

/**
 * Returns a string representing the value of this Decimal in
 *   hexadecimal notation rounded to `sd` significant digits
 *   using rounding mode `rm`.
 * 
 *   If `sd` is defined, the return value will use binary
 *   exponential notation.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_hex = (function decimal$core$to_hex(var_args){
var G__15069 = arguments.length;
switch (G__15069) {
case 1:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3(v,sd,undefined);
});

decimal.core.to_hex.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal(v).toHexadecimal(sd,rm);
});

decimal.core.to_hex.cljs$lang$maxFixedArity = 3;

/**
 * Returns the value of this Decimal converted to a primitive number.
 * 
 *   Type coercion with, for example, JavaScript's unary plus operator will also
 *   work, except that a Decimal with the value minus zero will convert to
 *   positive zero.
 */
decimal.core.to_number = (function decimal$core$to_number(v){
return decimal.core._decimal(v).toNumber();
});
/**
 * Returns a string representing the value of this Decimal.
 * 
 *   If this Decimal has a positive exponent that is equal to or greater than
 *   `to-exp-pos`, or a negative exponent equal to or less than `to-exp-neg`, then
 *   exponential notation will be returned.
 */
decimal.core.to_string = (function decimal$core$to_string(v){
return decimal.core._decimal(v).toString();
});
/**
 * As toString, but zero is signed.
 */
decimal.core.value_of = (function decimal$core$value_of(v){
return decimal.core._decimal(v).valueOf();
});
/**
 * Returns a string representing the value of this Decimal in
 *   rounded to `sd` significant digits using rounding mode `rm`.
 * 
 *   If `sd` is less than the number of digits necessary to represent the integer
 *   part of the value in normal (fixed-point) notation, then exponential notation
 *   is used.
 * 
 *   If `sd` is omitted, the return value is the same as to-string.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_precision = (function decimal$core$to_precision(var_args){
var G__15072 = arguments.length;
switch (G__15072) {
case 1:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3(v,sd,undefined);
});

decimal.core.to_precision.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal(v).toPrecision(sd,rm);
});

decimal.core.to_precision.cljs$lang$maxFixedArity = 3;

/**
 * Returns a new Decimal whose value is the value of this Decimal rounded to
 *   `sd` significant digits using rounding mode `rm`.
 * 
 *   If `sd` is omitted, the return value will be rounded to
 *   `precision` significant digits.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `sd` or `rm` value.
 */
decimal.core.to_significant_digits = (function decimal$core$to_significant_digits(var_args){
var G__15075 = arguments.length;
switch (G__15075) {
case 1:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$2 = (function (v,sd){
return decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3(v,sd,undefined);
});

decimal.core.to_significant_digits.cljs$core$IFn$_invoke$arity$3 = (function (v,sd,rm){
return decimal.core._decimal(v).toSignificantDigits(sd,rm);
});

decimal.core.to_significant_digits.cljs$lang$maxFixedArity = 3;

/**
 * Returns a new Decimal whose value is the value of this Decimal rounded to
 *   `dp` decimal places using rounding mode `rm`.
 * 
 *   If `dp` is omitted, the return value will have the same value as this
 *   Decimal.
 * 
 *   If `rm` is omitted, rounding mode `rounding` will be used.
 * 
 *   Throws on an invalid `dp` or `rm` value.
 */
decimal.core.to_decimal_places = (function decimal$core$to_decimal_places(var_args){
var G__15078 = arguments.length;
switch (G__15078) {
case 1:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3(v,undefined,undefined);
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2 = (function (v,dp){
return decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3(v,dp,undefined);
});

decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$3 = (function (v,dp,rm){
return decimal.core._decimal(v).toDecimalPlaces(dp,rm);
});

decimal.core.to_decimal_places.cljs$lang$maxFixedArity = 3;

/**
 * Returns an array of two Decimals representing the value of this Decimal as a
 *   simple fraction with an integer numerator and an integer denominator. The
 *   denominator will be a positive non-zero value less than or equal to
 *   `max_denominator`.
 * 
 *   If a maximum denominator is omitted, the denominator will be the lowest value
 *   necessary to represent the number exactly.
 * 
 *   Throws on an invalid `max_denominator` value.
 */
decimal.core.to_fraction = (function decimal$core$to_fraction(var_args){
var G__15081 = arguments.length;
switch (G__15081) {
case 1:
return decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$1 = (function (v){
return decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$2(v,undefined);
});

decimal.core.to_fraction.cljs$core$IFn$_invoke$arity$2 = (function (v,max_denominator){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(decimal.core._decimal(v).toFraction(max_denominator));
});

decimal.core.to_fraction.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new Decimal whose value is the value of this Decimal raised to the
 *   power x, rounded to precision significant digits using rounding mode
 *   rounding.
 * 
 *   The performance of this method degrades exponentially with increasing digits.
 *   For non-integer exponents in particular, the performance of this method may
 *   not be adequate.
 */
decimal.core.pow = (function decimal$core$pow(v,x){
return decimal.core._decimal(v).toPower(x);
});
/**
 * Returns a new Decimal whose value is the nearest multiple of `x` to the value
 *   of this Decimal.
 * 
 *   If the value of this Decimal is equidistant from two multiples of `x`, the
 *   rounding mode `rm`, or `rounding` if `rm` is omitted, determines the
 *   direction of the nearest.
 * 
 *   In this context, rounding mode `:round-half-up` is interpreted the same as
 *   rounding mode `:round-up`, and so on, i.e. the rounding is either up, down,
 *   to ceil, to floor or to even.
 * 
 *   The return value will always have the same sign as this Decimal, unless
 *   either this Decimal or `x` is `NaN`, in which case the return value will be
 *   also be `NaN`.
 * 
 *   The return value is not affected by the value of the `precision` setting.
 */
decimal.core.to_nearest = (function decimal$core$to_nearest(var_args){
var G__15084 = arguments.length;
switch (G__15084) {
case 2:
return decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$2 = (function (v,n){
return decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$3(v,n,undefined);
});

decimal.core.to_nearest.cljs$core$IFn$_invoke$arity$3 = (function (v,n,rm){
return decimal.core._decimal(v).toNearest(n,rm);
});

decimal.core.to_nearest.cljs$lang$maxFixedArity = 3;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (v,other){
var v__$1 = this;
return v__$1.eq(other);
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (v){
var v__$1 = this;
var t = decimal.core._STAR_decimal_STAR_;
return (new t(v__$1));
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IDeref$_deref$arity$1 = (function (v){
var v__$1 = this;
return v__$1.toNumber();
});

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IComparable$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.cljs$core$IComparable$_compare$arity$2 = (function (v,other){
var v__$1 = this;
return v__$1.comparedTo(other);
});
decimal.core._STAR_decimal_STAR_.prototype.decimal$core$IDecimal$ = cljs.core.PROTOCOL_SENTINEL;

decimal.core._STAR_decimal_STAR_.prototype.decimal$core$IDecimal$_decimal$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

goog.object.set(decimal.core.IDecimal,"string",true);

var G__15086_15092 = decimal.core._decimal;
var G__15087_15093 = "string";
var G__15088_15094 = ((function (G__15086_15092,G__15087_15093){
return (function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
});})(G__15086_15092,G__15087_15093))
;
goog.object.set(G__15086_15092,G__15087_15093,G__15088_15094);

goog.object.set(decimal.core.IDecimal,"number",true);

var G__15089_15095 = decimal.core._decimal;
var G__15090_15096 = "number";
var G__15091_15097 = ((function (G__15089_15095,G__15090_15096){
return (function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
});})(G__15089_15095,G__15090_15096))
;
goog.object.set(G__15089_15095,G__15090_15096,G__15091_15097);
