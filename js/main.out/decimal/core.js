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
var opts = ({"precision": cljs.core.cst$kw$precision.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": (function (){var G__14853 = decimal.core.round_mapping;
var G__14854 = decimal.core._PLUS_decimal_PLUS_.rounding;
var fexpr__14852 = cljs.core.cst$kw$rounding.cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__14852.cljs$core$IFn$_invoke$arity$2 ? fexpr__14852.cljs$core$IFn$_invoke$arity$2(G__14853,G__14854) : fexpr__14852.call(null,G__14853,G__14854));
})(), "modulo": (function (){var G__14856 = decimal.core.modulo_mapping;
var G__14857 = decimal.core._PLUS_decimal_PLUS_.modulo;
var fexpr__14855 = cljs.core.cst$kw$modulo.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$round_DASH_down);
return (fexpr__14855.cljs$core$IFn$_invoke$arity$2 ? fexpr__14855.cljs$core$IFn$_invoke$arity$2(G__14856,G__14857) : fexpr__14855.call(null,G__14856,G__14857));
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
var opts = ({"precision": cljs.core.cst$kw$precision.cljs$core$IFn$_invoke$arity$2(options,decimal.core._PLUS_decimal_PLUS_.precision), "rounding": (function (){var G__14859 = decimal.core.round_mapping;
var G__14860 = decimal.core._PLUS_decimal_PLUS_.rounding;
var fexpr__14858 = cljs.core.cst$kw$rounding.cljs$core$IFn$_invoke$arity$1(options);
return (fexpr__14858.cljs$core$IFn$_invoke$arity$2 ? fexpr__14858.cljs$core$IFn$_invoke$arity$2(G__14859,G__14860) : fexpr__14858.call(null,G__14859,G__14860));
})(), "modulo": (function (){var G__14862 = decimal.core.modulo_mapping;
var G__14863 = decimal.core._PLUS_decimal_PLUS_.modulo;
var fexpr__14861 = cljs.core.cst$kw$modulo.cljs$core$IFn$_invoke$arity$2(options,cljs.core.cst$kw$round_DASH_down);
return (fexpr__14861.cljs$core$IFn$_invoke$arity$2 ? fexpr__14861.cljs$core$IFn$_invoke$arity$2(G__14862,G__14863) : fexpr__14861.call(null,G__14862,G__14863));
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
var G__14868 = arguments.length;
switch (G__14868) {
case 2:
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14870 = arguments.length;
var i__9123__auto___14871 = (0);
while(true){
if((i__9123__auto___14871 < len__9122__auto___14870)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14871]));

var G__14872 = (i__9123__auto___14871 + (1));
i__9123__auto___14871 = G__14872;
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
var G__14873 = x;
var G__14874 = cljs.core.first(more);
var G__14875 = cljs.core.next(more);
v = G__14873;
x = G__14874;
more = G__14875;
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

decimal.core._LT_.cljs$lang$applyTo = (function (seq14865){
var G__14866 = cljs.core.first(seq14865);
var seq14865__$1 = cljs.core.next(seq14865);
var G__14867 = cljs.core.first(seq14865__$1);
var seq14865__$2 = cljs.core.next(seq14865__$1);
return decimal.core._LT_.cljs$core$IFn$_invoke$arity$variadic(G__14866,G__14867,seq14865__$2);
});

decimal.core._LT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is less than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._LT__EQ_ = (function decimal$core$_LT__EQ_(var_args){
var G__14880 = arguments.length;
switch (G__14880) {
case 2:
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

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
var G__14885 = x;
var G__14886 = cljs.core.first(more);
var G__14887 = cljs.core.next(more);
v = G__14885;
x = G__14886;
more = G__14887;
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

decimal.core._LT__EQ_.cljs$lang$applyTo = (function (seq14877){
var G__14878 = cljs.core.first(seq14877);
var seq14877__$1 = cljs.core.next(seq14877);
var G__14879 = cljs.core.first(seq14877__$1);
var seq14877__$2 = cljs.core.next(seq14877__$1);
return decimal.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14878,G__14879,seq14877__$2);
});

decimal.core._LT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   the value of x, otherwise returns false.
 */
decimal.core._GT_ = (function decimal$core$_GT_(var_args){
var G__14892 = arguments.length;
switch (G__14892) {
case 2:
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14894 = arguments.length;
var i__9123__auto___14895 = (0);
while(true){
if((i__9123__auto___14895 < len__9122__auto___14894)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14895]));

var G__14896 = (i__9123__auto___14895 + (1));
i__9123__auto___14895 = G__14896;
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
var G__14897 = x;
var G__14898 = cljs.core.first(more);
var G__14899 = cljs.core.next(more);
v = G__14897;
x = G__14898;
more = G__14899;
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

decimal.core._GT_.cljs$lang$applyTo = (function (seq14889){
var G__14890 = cljs.core.first(seq14889);
var seq14889__$1 = cljs.core.next(seq14889);
var G__14891 = cljs.core.first(seq14889__$1);
var seq14889__$2 = cljs.core.next(seq14889__$1);
return decimal.core._GT_.cljs$core$IFn$_invoke$arity$variadic(G__14890,G__14891,seq14889__$2);
});

decimal.core._GT_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is greater than
 *   or equal to the value of x, otherwise returns false.
 */
decimal.core._GT__EQ_ = (function decimal$core$_GT__EQ_(var_args){
var G__14904 = arguments.length;
switch (G__14904) {
case 2:
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14906 = arguments.length;
var i__9123__auto___14907 = (0);
while(true){
if((i__9123__auto___14907 < len__9122__auto___14906)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14907]));

var G__14908 = (i__9123__auto___14907 + (1));
i__9123__auto___14907 = G__14908;
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
var G__14909 = x;
var G__14910 = cljs.core.first(more);
var G__14911 = cljs.core.next(more);
v = G__14909;
x = G__14910;
more = G__14911;
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

decimal.core._GT__EQ_.cljs$lang$applyTo = (function (seq14901){
var G__14902 = cljs.core.first(seq14901);
var seq14901__$1 = cljs.core.next(seq14901);
var G__14903 = cljs.core.first(seq14901__$1);
var seq14901__$2 = cljs.core.next(seq14901__$1);
return decimal.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14902,G__14903,seq14901__$2);
});

decimal.core._GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns true if the value of this Decimal is equal to the
 *   value of x, otherwise returns false.
 */
decimal.core._EQ_ = (function decimal$core$_EQ_(var_args){
var G__14916 = arguments.length;
switch (G__14916) {
case 2:
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14918 = arguments.length;
var i__9123__auto___14919 = (0);
while(true){
if((i__9123__auto___14919 < len__9122__auto___14918)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14919]));

var G__14920 = (i__9123__auto___14919 + (1));
i__9123__auto___14919 = G__14920;
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
var G__14921 = x;
var G__14922 = cljs.core.first(more);
var G__14923 = cljs.core.next(more);
v = G__14921;
x = G__14922;
more = G__14923;
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

decimal.core._EQ_.cljs$lang$applyTo = (function (seq14913){
var G__14914 = cljs.core.first(seq14913);
var seq14913__$1 = cljs.core.next(seq14913);
var G__14915 = cljs.core.first(seq14913__$1);
var seq14913__$2 = cljs.core.next(seq14913__$1);
return decimal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(G__14914,G__14915,seq14913__$2);
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
var G__14928 = arguments.length;
switch (G__14928) {
case 1:
return decimal.core.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14930 = arguments.length;
var i__9123__auto___14931 = (0);
while(true){
if((i__9123__auto___14931 < len__9122__auto___14930)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14931]));

var G__14932 = (i__9123__auto___14931 + (1));
i__9123__auto___14931 = G__14932;
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

decimal.core.max.cljs$lang$applyTo = (function (seq14925){
var G__14926 = cljs.core.first(seq14925);
var seq14925__$1 = cljs.core.next(seq14925);
var G__14927 = cljs.core.first(seq14925__$1);
var seq14925__$2 = cljs.core.next(seq14925__$1);
return decimal.core.max.cljs$core$IFn$_invoke$arity$variadic(G__14926,G__14927,seq14925__$2);
});

decimal.core.max.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new Decimal whose value is the minimum.
 */
decimal.core.min = (function decimal$core$min(var_args){
var G__14937 = arguments.length;
switch (G__14937) {
case 1:
return decimal.core.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return decimal.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9141__auto__ = [];
var len__9122__auto___14939 = arguments.length;
var i__9123__auto___14940 = (0);
while(true){
if((i__9123__auto___14940 < len__9122__auto___14939)){
args_arr__9141__auto__.push((arguments[i__9123__auto___14940]));

var G__14941 = (i__9123__auto___14940 + (1));
i__9123__auto___14940 = G__14941;
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

decimal.core.min.cljs$lang$applyTo = (function (seq14934){
var G__14935 = cljs.core.first(seq14934);
var seq14934__$1 = cljs.core.next(seq14934);
var G__14936 = cljs.core.first(seq14934__$1);
var seq14934__$2 = cljs.core.next(seq14934__$1);
return decimal.core.min.cljs$core$IFn$_invoke$arity$variadic(G__14935,G__14936,seq14934__$2);
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
var G__14943 = arguments.length;
switch (G__14943) {
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
var len__9122__auto___14946 = arguments.length;
var i__9123__auto___14947 = (0);
while(true){
if((i__9123__auto___14947 < len__9122__auto___14946)){
args__9129__auto__.push((arguments[i__9123__auto___14947]));

var G__14948 = (i__9123__auto___14947 + (1));
i__9123__auto___14947 = G__14948;
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

decimal.core.hypot.cljs$lang$applyTo = (function (seq14945){
return decimal.core.hypot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14945));
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
var G__14950 = arguments.length;
switch (G__14950) {
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
var G__14953 = arguments.length;
switch (G__14953) {
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
var G__14956 = arguments.length;
switch (G__14956) {
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
var G__14959 = arguments.length;
switch (G__14959) {
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
var G__14962 = arguments.length;
switch (G__14962) {
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
var G__14965 = arguments.length;
switch (G__14965) {
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
var G__14968 = arguments.length;
switch (G__14968) {
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
var G__14971 = arguments.length;
switch (G__14971) {
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
var G__14974 = arguments.length;
switch (G__14974) {
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
var G__14977 = arguments.length;
switch (G__14977) {
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
var G__14980 = arguments.length;
switch (G__14980) {
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

var G__14982_14988 = decimal.core._decimal;
var G__14983_14989 = "string";
var G__14984_14990 = ((function (G__14982_14988,G__14983_14989){
return (function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
});})(G__14982_14988,G__14983_14989))
;
goog.object.set(G__14982_14988,G__14983_14989,G__14984_14990);

goog.object.set(decimal.core.IDecimal,"number",true);

var G__14985_14991 = decimal.core._decimal;
var G__14986_14992 = "number";
var G__14987_14993 = ((function (G__14985_14991,G__14986_14992){
return (function (v){
return (new decimal.core._STAR_decimal_STAR_(v));
});})(G__14985_14991,G__14986_14992))
;
goog.object.set(G__14985_14991,G__14986_14992,G__14987_14993);
