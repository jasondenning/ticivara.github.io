// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.alpha');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.gen.alpha');
goog.require('clojure.string');
cljs.spec.alpha.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec.alpha._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec.alpha._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec.alpha._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.alpha.Spec = function(){};

cljs.spec.alpha.conform_STAR_ = (function cljs$spec$alpha$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.conform_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8637__auto__.call(null,spec,x));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.conform_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8637__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.alpha.unform_STAR_ = (function cljs$spec$alpha$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.unform_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8637__auto__.call(null,spec,y));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.unform_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8637__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.alpha.explain_STAR_ = (function cljs$spec$alpha$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$alpha$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.explain_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8637__auto__.call(null,spec,path,via,in$,x));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.explain_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8637__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.alpha.gen_STAR_ = (function cljs$spec$alpha$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$alpha$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.gen_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8637__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.gen_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8637__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.alpha.with_gen_STAR_ = (function cljs$spec$alpha$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.with_gen_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8637__auto__.call(null,spec,gfn));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.with_gen_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8637__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.alpha.describe_STAR_ = (function cljs$spec$alpha$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$alpha$Spec$describe_STAR_$arity$1(spec);
} else {
var x__8636__auto__ = (((spec == null))?null:spec);
var m__8637__auto__ = (cljs.spec.alpha.describe_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__8637__auto__.call(null,spec));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.describe_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__8637__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.alpha.registry_ref !== 'undefined'){
} else {
cljs.spec.alpha.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.alpha.deep_resolve = (function cljs$spec$alpha$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__16932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__16932;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve = (function cljs$spec$alpha$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = cljs.core.deref(cljs.spec.alpha.registry_ref);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.alpha.deep_resolve(reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.alpha.reg_resolve_BANG_ = (function cljs$spec$alpha$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__7953__auto__ = cljs.spec.alpha.reg_resolve(k);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.alpha.spec_QMARK_ = (function cljs$spec$alpha$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$alpha$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (cljs.spec.alpha) regex op, else logical false
 */
cljs.spec.alpha.regex_QMARK_ = (function cljs$spec$alpha$regex_QMARK_(x){
var and__7941__auto__ = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__7941__auto__)){
return x;
} else {
return and__7941__auto__;
}
});
cljs.spec.alpha.with_name = (function cljs$spec$alpha$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec$alpha_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.alpha.spec_name = (function cljs$spec$alpha$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.alpha.maybe_spec = (function cljs$spec$alpha$maybe_spec(spec_or_k){
var s = (function (){var or__7953__auto__ = (function (){var and__7941__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__7941__auto__){
return cljs.spec.alpha.reg_resolve(spec_or_k);
} else {
return and__7941__auto__;
}
})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = cljs.spec.alpha.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
var or__7953__auto____$2 = cljs.spec.alpha.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7953__auto____$2)){
return or__7953__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(s))){
return cljs.spec.alpha.with_name((cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.alpha.regex_spec_impl.call(null,s,null)),cljs.spec.alpha.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.alpha.the_spec = (function cljs$spec$alpha$the_spec(spec_or_k){
var or__7953__auto__ = cljs.spec.alpha.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error(["Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.alpha.Specize = function(){};

cljs.spec.alpha.specize_STAR_ = (function cljs$spec$alpha$specize_STAR_(var_args){
var G__16937 = arguments.length;
switch (G__16937) {
case 1:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$1(_);
} else {
var x__8636__auto__ = (((_ == null))?null:_);
var m__8637__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8637__auto__.call(null,_));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8637__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$alpha$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$alpha$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8636__auto__ = (((_ == null))?null:_);
var m__8637__auto__ = (cljs.spec.alpha.specize_STAR_[goog.typeOf(x__8636__auto__)]);
if(!((m__8637__auto__ == null))){
return (m__8637__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__8637__auto__.call(null,_,form));
} else {
var m__8637__auto____$1 = (cljs.spec.alpha.specize_STAR_["_"]);
if(!((m__8637__auto____$1 == null))){
return (m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8637__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__8637__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.alpha.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(s__$1));
});

goog.object.set(cljs.spec.alpha.Specize,"_",true);

var G__16939_16946 = cljs.spec.alpha.specize_STAR_;
var G__16940_16947 = "_";
var G__16941_16948 = ((function (G__16939_16946,G__16940_16947){
return (function() {
var G__16949 = null;
var G__16949__1 = (function (o){
var G__16942 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown;
var G__16943 = o;
var G__16944 = null;
var G__16945 = null;
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(G__16942,G__16943,G__16944,G__16945) : cljs.spec.alpha.spec_impl.call(null,G__16942,G__16943,G__16944,G__16945));
});
var G__16949__2 = (function (o,form){
return (cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.alpha.spec_impl.call(null,form,o,null,null));
});
G__16949 = function(o,form){
switch(arguments.length){
case 1:
return G__16949__1.call(this,o);
case 2:
return G__16949__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__16949.cljs$core$IFn$_invoke$arity$1 = G__16949__1;
G__16949.cljs$core$IFn$_invoke$arity$2 = G__16949__2;
return G__16949;
})()
;})(G__16939_16946,G__16940_16947))
;
goog.object.set(G__16939_16946,G__16940_16947,G__16941_16948);
cljs.spec.alpha.specize = (function cljs$spec$alpha$specize(var_args){
var G__16951 = arguments.length;
switch (G__16951) {
case 1:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__7953__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__7953__auto__ = cljs.spec.alpha.spec_QMARK_(s);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.spec.alpha.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.alpha.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.alpha.invalid_QMARK_ = (function cljs$spec$alpha$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :cljs.spec.alpha/invalid if value does
 *   not match spec, else the (possibly destructured) value.
 */
cljs.spec.alpha.conform = (function cljs$spec$alpha$conform(spec,x){
return cljs.spec.alpha.conform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.alpha.unform = (function cljs$spec$alpha$unform(spec,x){
return cljs.spec.alpha.unform_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.alpha.form = (function cljs$spec$alpha$form(spec){
return cljs.spec.alpha.describe_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.alpha.abbrev = (function cljs$spec$alpha$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__7941__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__7941__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__7941__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = (form instanceof cljs.core.Symbol);
if(and__7941__auto__){
return cljs.core.namespace(form);
} else {
return and__7941__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.alpha.describe = (function cljs$spec$alpha$describe(spec){
return cljs.spec.alpha.abbrev(cljs.spec.alpha.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.alpha.with_gen = (function cljs$spec$alpha$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.alpha.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn,gen_fn);
} else {
return cljs.spec.alpha.with_gen_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.alpha.explain_data_STAR_ = (function cljs$spec$alpha$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,probs,cljs.core.cst$kw$cljs$spec$alpha_SLASH_spec,spec,cljs.core.cst$kw$cljs$spec$alpha_SLASH_value,x], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.alpha.explain_data = (function cljs$spec$alpha$explain_data(spec,x){
return cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name(spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.alpha.explain_printer = (function cljs$spec$alpha$explain_printer(ed){
if(cljs.core.truth_(ed)){
var problems = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16953_SHARP_){
return (- cljs.core.count(cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(p1__16953_SHARP_)));
}),cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var sb__8980__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16954_17000 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16955_17001 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16954_17000,_STAR_print_fn_STAR_16955_17001,sb__8980__auto__,problems){
return (function (x__8981__auto__){
return sb__8980__auto__.append(x__8981__auto__);
});})(_STAR_print_newline_STAR_16954_17000,_STAR_print_fn_STAR_16955_17001,sb__8980__auto__,problems))
;

try{var seq__16956_17002 = cljs.core.seq(problems);
var chunk__16957_17003 = null;
var count__16958_17004 = (0);
var i__16959_17005 = (0);
while(true){
if((i__16959_17005 < count__16958_17004)){
var map__16960_17006 = chunk__16957_17003.cljs$core$IIndexed$_nth$arity$2(null,i__16959_17005);
var map__16960_17007__$1 = ((((!((map__16960_17006 == null)))?((((map__16960_17006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16960_17006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16960_17006):map__16960_17006);
var prob_17008 = map__16960_17007__$1;
var path_17009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$path);
var pred_17010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$pred);
var val_17011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$val);
var reason_17012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$reason);
var via_17013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$via);
var in_17014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960_17007__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_17014)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_17014], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_17011], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_17013)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_17013)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_17009)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_17009], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_17010)], 0));

if(cljs.core.truth_(reason_17012)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_17012], 0));
} else {
}

var seq__16962_17015 = cljs.core.seq(prob_17008);
var chunk__16963_17016 = null;
var count__16964_17017 = (0);
var i__16965_17018 = (0);
while(true){
if((i__16965_17018 < count__16964_17017)){
var vec__16966_17019 = chunk__16963_17016.cljs$core$IIndexed$_nth$arity$2(null,i__16965_17018);
var k_17020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16966_17019,(0),null);
var v_17021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16966_17019,(1),null);
if(cljs.core.truth_((function (){var fexpr__16969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__16969.cljs$core$IFn$_invoke$arity$1 ? fexpr__16969.cljs$core$IFn$_invoke$arity$1(k_17020) : fexpr__16969.call(null,k_17020));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17020], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17021], 0));
}

var G__17022 = seq__16962_17015;
var G__17023 = chunk__16963_17016;
var G__17024 = count__16964_17017;
var G__17025 = (i__16965_17018 + (1));
seq__16962_17015 = G__17022;
chunk__16963_17016 = G__17023;
count__16964_17017 = G__17024;
i__16965_17018 = G__17025;
continue;
} else {
var temp__4657__auto___17026 = cljs.core.seq(seq__16962_17015);
if(temp__4657__auto___17026){
var seq__16962_17027__$1 = temp__4657__auto___17026;
if(cljs.core.chunked_seq_QMARK_(seq__16962_17027__$1)){
var c__8792__auto___17028 = cljs.core.chunk_first(seq__16962_17027__$1);
var G__17029 = cljs.core.chunk_rest(seq__16962_17027__$1);
var G__17030 = c__8792__auto___17028;
var G__17031 = cljs.core.count(c__8792__auto___17028);
var G__17032 = (0);
seq__16962_17015 = G__17029;
chunk__16963_17016 = G__17030;
count__16964_17017 = G__17031;
i__16965_17018 = G__17032;
continue;
} else {
var vec__16970_17033 = cljs.core.first(seq__16962_17027__$1);
var k_17034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970_17033,(0),null);
var v_17035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16970_17033,(1),null);
if(cljs.core.truth_((function (){var fexpr__16973 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__16973.cljs$core$IFn$_invoke$arity$1 ? fexpr__16973.cljs$core$IFn$_invoke$arity$1(k_17034) : fexpr__16973.call(null,k_17034));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17034], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17035], 0));
}

var G__17036 = cljs.core.next(seq__16962_17027__$1);
var G__17037 = null;
var G__17038 = (0);
var G__17039 = (0);
seq__16962_17015 = G__17036;
chunk__16963_17016 = G__17037;
count__16964_17017 = G__17038;
i__16965_17018 = G__17039;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__17040 = seq__16956_17002;
var G__17041 = chunk__16957_17003;
var G__17042 = count__16958_17004;
var G__17043 = (i__16959_17005 + (1));
seq__16956_17002 = G__17040;
chunk__16957_17003 = G__17041;
count__16958_17004 = G__17042;
i__16959_17005 = G__17043;
continue;
} else {
var temp__4657__auto___17044 = cljs.core.seq(seq__16956_17002);
if(temp__4657__auto___17044){
var seq__16956_17045__$1 = temp__4657__auto___17044;
if(cljs.core.chunked_seq_QMARK_(seq__16956_17045__$1)){
var c__8792__auto___17046 = cljs.core.chunk_first(seq__16956_17045__$1);
var G__17047 = cljs.core.chunk_rest(seq__16956_17045__$1);
var G__17048 = c__8792__auto___17046;
var G__17049 = cljs.core.count(c__8792__auto___17046);
var G__17050 = (0);
seq__16956_17002 = G__17047;
chunk__16957_17003 = G__17048;
count__16958_17004 = G__17049;
i__16959_17005 = G__17050;
continue;
} else {
var map__16974_17051 = cljs.core.first(seq__16956_17045__$1);
var map__16974_17052__$1 = ((((!((map__16974_17051 == null)))?((((map__16974_17051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16974_17051.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16974_17051):map__16974_17051);
var prob_17053 = map__16974_17052__$1;
var path_17054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$path);
var pred_17055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$pred);
var val_17056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$val);
var reason_17057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$reason);
var via_17058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$via);
var in_17059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16974_17052__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_17059)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([in_17059], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val_17056], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" fails"], 0));

if(cljs.core.empty_QMARK_(via_17058)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(via_17058)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_17054)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_17054], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.abbrev(pred_17055)], 0));

if(cljs.core.truth_(reason_17057)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([", ",reason_17057], 0));
} else {
}

var seq__16976_17060 = cljs.core.seq(prob_17053);
var chunk__16977_17061 = null;
var count__16978_17062 = (0);
var i__16979_17063 = (0);
while(true){
if((i__16979_17063 < count__16978_17062)){
var vec__16980_17064 = chunk__16977_17061.cljs$core$IIndexed$_nth$arity$2(null,i__16979_17063);
var k_17065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16980_17064,(0),null);
var v_17066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16980_17064,(1),null);
if(cljs.core.truth_((function (){var fexpr__16983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__16983.cljs$core$IFn$_invoke$arity$1 ? fexpr__16983.cljs$core$IFn$_invoke$arity$1(k_17065) : fexpr__16983.call(null,k_17065));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17065], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17066], 0));
}

var G__17067 = seq__16976_17060;
var G__17068 = chunk__16977_17061;
var G__17069 = count__16978_17062;
var G__17070 = (i__16979_17063 + (1));
seq__16976_17060 = G__17067;
chunk__16977_17061 = G__17068;
count__16978_17062 = G__17069;
i__16979_17063 = G__17070;
continue;
} else {
var temp__4657__auto___17071__$1 = cljs.core.seq(seq__16976_17060);
if(temp__4657__auto___17071__$1){
var seq__16976_17072__$1 = temp__4657__auto___17071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16976_17072__$1)){
var c__8792__auto___17073 = cljs.core.chunk_first(seq__16976_17072__$1);
var G__17074 = cljs.core.chunk_rest(seq__16976_17072__$1);
var G__17075 = c__8792__auto___17073;
var G__17076 = cljs.core.count(c__8792__auto___17073);
var G__17077 = (0);
seq__16976_17060 = G__17074;
chunk__16977_17061 = G__17075;
count__16978_17062 = G__17076;
i__16979_17063 = G__17077;
continue;
} else {
var vec__16984_17078 = cljs.core.first(seq__16976_17072__$1);
var k_17079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984_17078,(0),null);
var v_17080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16984_17078,(1),null);
if(cljs.core.truth_((function (){var fexpr__16987 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null);
return (fexpr__16987.cljs$core$IFn$_invoke$arity$1 ? fexpr__16987.cljs$core$IFn$_invoke$arity$1(k_17079) : fexpr__16987.call(null,k_17079));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17079], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17080], 0));
}

var G__17081 = cljs.core.next(seq__16976_17072__$1);
var G__17082 = null;
var G__17083 = (0);
var G__17084 = (0);
seq__16976_17060 = G__17081;
chunk__16977_17061 = G__17082;
count__16978_17062 = G__17083;
i__16979_17063 = G__17084;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__17085 = cljs.core.next(seq__16956_17045__$1);
var G__17086 = null;
var G__17087 = (0);
var G__17088 = (0);
seq__16956_17002 = G__17085;
chunk__16957_17003 = G__17086;
count__16958_17004 = G__17087;
i__16959_17005 = G__17088;
continue;
}
} else {
}
}
break;
}

var seq__16988_17089 = cljs.core.seq(ed);
var chunk__16989_17090 = null;
var count__16990_17091 = (0);
var i__16991_17092 = (0);
while(true){
if((i__16991_17092 < count__16990_17091)){
var vec__16992_17093 = chunk__16989_17090.cljs$core$IIndexed$_nth$arity$2(null,i__16991_17092);
var k_17094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16992_17093,(0),null);
var v_17095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16992_17093,(1),null);
if(cljs.core.truth_((function (){var fexpr__16995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__16995.cljs$core$IFn$_invoke$arity$1 ? fexpr__16995.cljs$core$IFn$_invoke$arity$1(k_17094) : fexpr__16995.call(null,k_17094));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17094], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17095], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__17096 = seq__16988_17089;
var G__17097 = chunk__16989_17090;
var G__17098 = count__16990_17091;
var G__17099 = (i__16991_17092 + (1));
seq__16988_17089 = G__17096;
chunk__16989_17090 = G__17097;
count__16990_17091 = G__17098;
i__16991_17092 = G__17099;
continue;
} else {
var temp__4657__auto___17100 = cljs.core.seq(seq__16988_17089);
if(temp__4657__auto___17100){
var seq__16988_17101__$1 = temp__4657__auto___17100;
if(cljs.core.chunked_seq_QMARK_(seq__16988_17101__$1)){
var c__8792__auto___17102 = cljs.core.chunk_first(seq__16988_17101__$1);
var G__17103 = cljs.core.chunk_rest(seq__16988_17101__$1);
var G__17104 = c__8792__auto___17102;
var G__17105 = cljs.core.count(c__8792__auto___17102);
var G__17106 = (0);
seq__16988_17089 = G__17103;
chunk__16989_17090 = G__17104;
count__16990_17091 = G__17105;
i__16991_17092 = G__17106;
continue;
} else {
var vec__16996_17107 = cljs.core.first(seq__16988_17101__$1);
var k_17108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996_17107,(0),null);
var v_17109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16996_17107,(1),null);
if(cljs.core.truth_((function (){var fexpr__16999 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems,null], null), null);
return (fexpr__16999.cljs$core$IFn$_invoke$arity$1 ? fexpr__16999.cljs$core$IFn$_invoke$arity$1(k_17108) : fexpr__16999.call(null,k_17108));
})())){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17108], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_17109], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__17110 = cljs.core.next(seq__16988_17101__$1);
var G__17111 = null;
var G__17112 = (0);
var G__17113 = (0);
seq__16988_17089 = G__17110;
chunk__16989_17090 = G__17111;
count__16990_17091 = G__17112;
i__16991_17092 = G__17113;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16955_17001;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16954_17000;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8980__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Success!"], 0));
}
});
cljs.spec.alpha._STAR_explain_out_STAR_ = cljs.spec.alpha.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.alpha.explain_out = (function cljs$spec$alpha$explain_out(ed){
return (cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec.alpha._STAR_explain_out_STAR_.call(null,ed));
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.alpha.explain = (function cljs$spec$alpha$explain(spec,x){
return cljs.spec.alpha.explain_out(cljs.spec.alpha.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.alpha.explain_str = (function cljs$spec$alpha$explain_str(spec,x){
var sb__8980__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17114_17116 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17115_17117 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17114_17116,_STAR_print_fn_STAR_17115_17117,sb__8980__auto__){
return (function (x__8981__auto__){
return sb__8980__auto__.append(x__8981__auto__);
});})(_STAR_print_newline_STAR_17114_17116,_STAR_print_fn_STAR_17115_17117,sb__8980__auto__))
;

try{cljs.spec.alpha.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17115_17117;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17114_17116;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8980__auto__)].join('');
});
cljs.spec.alpha.gensub = (function cljs$spec$alpha$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__4655__auto__ = (function (){var or__7953__auto__ = (function (){var temp__4657__auto__ = (function (){var or__7953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__7953__auto__ = cljs.spec.alpha.spec_name(spec__$1);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.spec.alpha.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__4655__auto__,spec__$1){
return (function (p1__17118_SHARP_){
return (cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__17118_SHARP_) : cljs.spec.alpha.valid_QMARK_.call(null,spec__$1,p1__17118_SHARP_));
});})(g,temp__4655__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error(["Unable to construct gen at: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," for: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.alpha.gen = (function cljs$spec$alpha$gen(var_args){
var G__17120 = arguments.length;
switch (G__17120) {
case 1:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.alpha.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit,cljs.spec.alpha._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.alpha.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.alpha.def_impl = (function cljs$spec$alpha$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__7941__auto__ = cljs.core.ident_QMARK_(k);
if(and__7941__auto__){
return cljs.core.namespace(k);
} else {
return and__7941__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","k must be namespaced keyword or resolveable symbol","\n","(c/and (ident? k) (namespace k))"].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__7953__auto__ = cljs.spec.alpha.spec_QMARK_(spec);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = cljs.spec.alpha.regex_QMARK_(spec);
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.spec.alpha.registry_ref),spec);
}
}
})())?spec:(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.alpha.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.alpha.registry_ref,cljs.core.assoc,k,cljs.spec.alpha.with_name(spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.alpha.registry = (function cljs$spec$alpha$registry(){
return cljs.core.deref(cljs.spec.alpha.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha.__GT_sym = (function cljs$spec$alpha$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.alpha.get_spec = (function cljs$spec$alpha$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.alpha.__GT_sym(k)));
});
cljs.spec.alpha.macroexpand_check = (function cljs$spec$alpha$macroexpand_check(v,args){
var specs = cljs.spec.alpha.get_spec(v);
var temp__4657__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name(arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec$alpha_SLASH_args,args);
throw (new Error(["Call to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.__GT_sym(v))," did not conform to spec:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8980__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17122_17124 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17123_17125 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17122_17124,_STAR_print_fn_STAR_17123_17125,sb__8980__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__8981__auto__){
return sb__8980__auto__.append(x__8981__auto__);
});})(_STAR_print_newline_STAR_17122_17124,_STAR_print_fn_STAR_17123_17125,sb__8980__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17123_17125;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17122_17124;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8980__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.alpha.recur_limit_QMARK_ = (function cljs$spec$alpha$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec$alpha_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.alpha.inck = (function cljs$spec$alpha$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__7953__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.alpha.dt = (function cljs$spec$alpha$dt(var_args){
var G__17127 = arguments.length;
switch (G__17127) {
case 3:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.alpha.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))," is not a fn, expected predicate fn"].join('')));
}
}
} else {
return x;
}
});

cljs.spec.alpha.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.valid_QMARK_ = (function cljs$spec$alpha$valid_QMARK_(var_args){
var G__17130 = arguments.length;
switch (G__17130) {
case 2:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.conform_STAR_(spec__$1,x)));
});

cljs.spec.alpha.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.alpha.pvalid_QMARK_ = (function cljs$spec$alpha$pvalid_QMARK_(var_args){
var G__17133 = arguments.length;
switch (G__17133) {
case 2:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec$alpha_SLASH_unknown)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.alpha.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.explain_1 = (function cljs$spec$alpha$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.alpha.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred__$1))){
return cljs.spec.alpha.explain_STAR_(pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name(pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,form,cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.alpha.map_spec_impl = (function cljs$spec$alpha$map_spec_impl(p__17138){
var map__17139 = p__17138;
var map__17139__$1 = ((((!((map__17139 == null)))?((((map__17139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17139):map__17139);
var argm = map__17139__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__17135_SHARP_){
var or__7953__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__17135_SHARP_) : k__GT_s.call(null,p1__17135_SHARP_));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return p1__17135_SHARP_;
}
});})(k__GT_s,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17141 = (function (keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__17139,p__17138,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta17142){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__17139 = map__17139;
this.p__17138 = p__17138;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta17142 = meta17142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_17143,meta17142__$1){
var self__ = this;
var _17143__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17141(self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__17139,self__.p__17138,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta17142__$1));
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_17143){
var self__ = this;
var _17143__$1 = this;
return self__.meta17142;
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__17150 = m;
var vec__17151 = G__17150;
var seq__17152 = cljs.core.seq(vec__17151);
var first__17153 = cljs.core.first(seq__17152);
var seq__17152__$1 = cljs.core.next(seq__17152);
var vec__17154 = first__17153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17154,(1),null);
var ks = seq__17152__$1;
var keys = vec__17151;
var ret__$1 = ret;
var G__17150__$1 = G__17150;
while(true){
var ret__$2 = ret__$1;
var vec__17157 = G__17150__$1;
var seq__17158 = cljs.core.seq(vec__17157);
var first__17159 = cljs.core.first(seq__17158);
var seq__17158__$1 = cljs.core.next(seq__17158);
var vec__17160 = first__17159;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(1),null);
var ks__$1 = seq__17158__$1;
var keys__$1 = vec__17157;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var cv = cljs.spec.alpha.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__17179 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__17180 = ks__$1;
ret__$1 = G__17179;
G__17150__$1 = G__17180;
continue;
}
} else {
var G__17181 = ret__$2;
var G__17182 = ks__$1;
ret__$1 = G__17181;
G__17150__$1 = G__17182;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.alpha.registry();
var ret = m;
var G__17166 = cljs.core.keys(m);
var vec__17167 = G__17166;
var seq__17168 = cljs.core.seq(vec__17167);
var first__17169 = cljs.core.first(seq__17168);
var seq__17168__$1 = cljs.core.next(seq__17168);
var k = first__17169;
var ks = seq__17168__$1;
var keys = vec__17167;
var ret__$1 = ret;
var G__17166__$1 = G__17166;
while(true){
var ret__$2 = ret__$1;
var vec__17170 = G__17166__$1;
var seq__17171 = cljs.core.seq(vec__17170);
var first__17172 = cljs.core.first(seq__17171);
var seq__17171__$1 = cljs.core.next(seq__17171);
var k__$1 = first__17172;
var ks__$1 = seq__17171__$1;
var keys__$1 = vec__17170;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.alpha.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__17183 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__17184 = ks__$1;
ret__$1 = G__17183;
G__17166__$1 = G__17184;
continue;
} else {
var G__17185 = ret__$2;
var G__17186 = ks__$1;
ret__$1 = G__17185;
G__17166__$1 = G__17186;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.alpha.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return form;
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__17136_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__17136_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__17173){
var vec__17174 = p__17173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17174,(1),null);
if(cljs.core.truth_((function (){var or__7953__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.alpha.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.alpha.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__17137_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__17137_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__17177 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__17177) : cljs.spec.alpha.map_spec_impl.call(null,G__17177));
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,(function (){var G__17178 = cljs.core.PersistentVector.EMPTY;
var G__17178__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__17178,cljs.core.cst$kw$req,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req], 0)):G__17178);
var G__17178__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__17178__$1,cljs.core.cst$kw$opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt], 0)):G__17178__$1);
var G__17178__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__17178__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.req_un], 0)):G__17178__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__17178__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opt_un], 0));
} else {
return G__17178__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$map__17139,cljs.core.cst$sym$p__17138,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta17142], null);
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.t_cljs$spec$alpha17141.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17141.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17141";

cljs.spec.alpha.t_cljs$spec$alpha17141.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17141");
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17141 = ((function (k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$alpha$map_spec_impl_$___GT_t_cljs$spec$alpha17141(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__17139__$2,p__17138__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta17142){
return (new cljs.spec.alpha.t_cljs$spec$alpha17141(keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__17139__$2,p__17138__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta17142));
});})(k__GT_s,keys__GT_specnames,id,map__17139,map__17139__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17141(keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__17139__$1,p__17138,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.alpha.spec_impl = (function cljs$spec$alpha$spec_impl(var_args){
var G__17188 = arguments.length;
switch (G__17188) {
case 4:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(pred))){
var G__17189 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__17189,gfn);
} else {
return G__17189;
}
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(pred))){
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.alpha.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__17190 = cljs.spec.alpha.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.alpha.with_gen(G__17190,gfn);
} else {
return G__17190;
}
} else {
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17191 = (function (form,pred,gfn,cpred_QMARK_,unc,meta17192){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta17192 = meta17192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17193,meta17192__$1){
var self__ = this;
var _17193__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17191(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta17192__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17193){
var self__ = this;
var _17193__$1 = this;
return self__.meta17192;
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.gen_for_pred(self__.pred);
}
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.alpha.t_cljs$spec$alpha17191.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.alpha.t_cljs$spec$alpha17191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta17192], null);
});

cljs.spec.alpha.t_cljs$spec$alpha17191.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17191.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17191";

cljs.spec.alpha.t_cljs$spec$alpha17191.cljs$lang$ctorPrWriter = (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17191");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha17191 = (function cljs$spec$alpha$__GT_t_cljs$spec$alpha17191(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta17192){
return (new cljs.spec.alpha.t_cljs$spec$alpha17191(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta17192));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17191(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.alpha.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.alpha.multi_spec_impl = (function cljs$spec$alpha$multi_spec_impl(var_args){
var G__17201 = arguments.length;
switch (G__17201) {
case 3:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__17195_SHARP_){
var mm = cljs.core.deref(mmvar);
var and__7941__auto__ = cljs.core._get_method(mm,(function (){var fexpr__17203 = cljs.core._dispatch_fn(mm);
return (fexpr__17203.cljs$core$IFn$_invoke$arity$1 ? fexpr__17203.cljs$core$IFn$_invoke$arity$1(p1__17195_SHARP_) : fexpr__17203.call(null,p1__17195_SHARP_));
})());
if(cljs.core.truth_(and__7941__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__17195_SHARP_) : mm.call(null,p1__17195_SHARP_));
} else {
return and__7941__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__17196_SHARP_){
var fexpr__17204 = cljs.core._dispatch_fn(cljs.core.deref(mmvar));
return (fexpr__17204.cljs$core$IFn$_invoke$arity$1 ? fexpr__17204.cljs$core$IFn$_invoke$arity$1(p1__17196_SHARP_) : fexpr__17204.call(null,p1__17196_SHARP_));
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__17197_SHARP_,p2__17198_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17197_SHARP_,retag,p2__17198_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17205 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta17206){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta17206 = meta17206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_17207,meta17206__$1){
var self__ = this;
var _17207__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17205(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta17206__$1));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_17207){
var self__ = this;
var _17207__$1 = this;
return self__.meta17206;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.unform(pred,x);
} else {
throw (new Error(["No method of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)," for dispatch value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.alpha.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__17208){
var vec__17209 = p__17208;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__17209,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (rmap__$1,p,vec__17209,k,f,___$1,id,predx,dval,tag){
return (function (p1__17199_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__17199_SHARP_,k) : self__.tag.call(null,p1__17199_SHARP_,k));
});})(rmap__$1,p,vec__17209,k,f,___$1,id,predx,dval,tag))
,cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__8815__auto__ = self__.form;
return cljs.core._conj((function (){var x__8815__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto____$1);
})(),x__8815__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__17209,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__17212){
var vec__17213 = p__17212;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(0),null);
return cljs.spec.alpha.invalid_QMARK_(k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$(cljs.core.deref(self__.mmvar)))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_multi_DASH_spec),(function (){var x__8815__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8815__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta17206], null);
});})(id,predx,dval,tag))
;

cljs.spec.alpha.t_cljs$spec$alpha17205.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17205.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17205";

cljs.spec.alpha.t_cljs$spec$alpha17205.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17205");
});})(id,predx,dval,tag))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17205 = ((function (id,predx,dval,tag){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha17205(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta17206){
return (new cljs.spec.alpha.t_cljs$spec$alpha17205(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta17206));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17205(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.alpha.tuple_impl = (function cljs$spec$alpha$tuple_impl(var_args){
var G__17218 = arguments.length;
switch (G__17218) {
case 2:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17219 = (function (forms,preds,gfn,specs,cnt,meta17220){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta17220 = meta17220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_17221,meta17220__$1){
var self__ = this;
var _17221__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17219(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta17220__$1));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_17221){
var self__ = this;
var _17221__$1 = this;
return self__.meta17220;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref(self__.specs);
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__17223 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__17224 = (i + (1));
ret = G__17223;
i = G__17224;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.alpha.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__17225 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__17226 = (i + (1));
ret = G__17225;
i = G__17226;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8815__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8815__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta17220], null);
});})(specs,cnt))
;

cljs.spec.alpha.t_cljs$spec$alpha17219.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17219.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17219";

cljs.spec.alpha.t_cljs$spec$alpha17219.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17219");
});})(specs,cnt))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17219 = ((function (specs,cnt){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha17219(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta17220){
return (new cljs.spec.alpha.t_cljs$spec$alpha17219(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta17220));
});})(specs,cnt))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17219(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.alpha.tagged_ret = (function cljs$spec$alpha$tagged_ret(v){
var x17227 = v;
x17227.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x17227.cljs$core$IMapEntry$_key$arity$1 = ((function (x17227){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x17227))
;

x17227.cljs$core$IMapEntry$_val$arity$1 = ((function (x17227){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x17227))
;

return x17227;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.alpha.or_spec_impl = (function cljs$spec$alpha$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__17228 = cljs.core.count(preds);
switch (G__17228) {
case (2):
return ((function (G__17228,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__17228,id,kps,specs))

break;
case (3):
return ((function (G__17228,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__17228,id,kps,specs))

break;
default:
return ((function (G__17228,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.alpha.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
var G__17237 = (i + (1));
i = G__17237;
continue;
} else {
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
break;
}
});
;})(G__17228,id,kps,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17229 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta17230){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta17230 = meta17230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_17231,meta17230__$1){
var self__ = this;
var _17231__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17229(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta17230__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_17231){
var self__ = this;
var _17231__$1 = this;
return self__.meta17230;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__17232){
var self__ = this;
var vec__17233 = p__17232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(1),null);
var ___$1 = this;
return cljs.spec.alpha.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.alpha.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.alpha.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.alpha.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.alpha.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta17230], null);
});})(id,kps,specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17229.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17229.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17229";

cljs.spec.alpha.t_cljs$spec$alpha17229.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17229");
});})(id,kps,specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17229 = ((function (id,kps,specs,cform){
return (function cljs$spec$alpha$or_spec_impl_$___GT_t_cljs$spec$alpha17229(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta17230){
return (new cljs.spec.alpha.t_cljs$spec$alpha17229(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta17230));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17229(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.and_preds = (function cljs$spec$alpha$and_preds(x,preds,forms){
var ret = x;
var G__17244 = preds;
var vec__17246 = G__17244;
var seq__17247 = cljs.core.seq(vec__17246);
var first__17248 = cljs.core.first(seq__17247);
var seq__17247__$1 = cljs.core.next(seq__17247);
var pred = first__17248;
var preds__$1 = seq__17247__$1;
var G__17245 = forms;
var vec__17249 = G__17245;
var seq__17250 = cljs.core.seq(vec__17249);
var first__17251 = cljs.core.first(seq__17250);
var seq__17250__$1 = cljs.core.next(seq__17250);
var form = first__17251;
var forms__$1 = seq__17250__$1;
var ret__$1 = ret;
var G__17244__$1 = G__17244;
var G__17245__$1 = G__17245;
while(true){
var ret__$2 = ret__$1;
var vec__17252 = G__17244__$1;
var seq__17253 = cljs.core.seq(vec__17252);
var first__17254 = cljs.core.first(seq__17253);
var seq__17253__$1 = cljs.core.next(seq__17253);
var pred__$1 = first__17254;
var preds__$2 = seq__17253__$1;
var vec__17255 = G__17245__$1;
var seq__17256 = cljs.core.seq(vec__17255);
var first__17257 = cljs.core.first(seq__17256);
var seq__17256__$1 = cljs.core.next(seq__17256);
var form__$1 = first__17257;
var forms__$2 = seq__17256__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__17258 = nret;
var G__17259 = preds__$2;
var G__17260 = forms__$2;
ret__$1 = G__17258;
G__17244__$1 = G__17259;
G__17245__$1 = G__17260;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.alpha.explain_pred_list = (function cljs$spec$alpha$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__17267 = forms;
var vec__17269 = G__17267;
var seq__17270 = cljs.core.seq(vec__17269);
var first__17271 = cljs.core.first(seq__17270);
var seq__17270__$1 = cljs.core.next(seq__17270);
var form = first__17271;
var forms__$1 = seq__17270__$1;
var G__17268 = preds;
var vec__17272 = G__17268;
var seq__17273 = cljs.core.seq(vec__17272);
var first__17274 = cljs.core.first(seq__17273);
var seq__17273__$1 = cljs.core.next(seq__17273);
var pred = first__17274;
var preds__$1 = seq__17273__$1;
var ret__$1 = ret;
var G__17267__$1 = G__17267;
var G__17268__$1 = G__17268;
while(true){
var ret__$2 = ret__$1;
var vec__17275 = G__17267__$1;
var seq__17276 = cljs.core.seq(vec__17275);
var first__17277 = cljs.core.first(seq__17276);
var seq__17276__$1 = cljs.core.next(seq__17276);
var form__$1 = first__17277;
var forms__$2 = seq__17276__$1;
var vec__17278 = G__17268__$1;
var seq__17279 = cljs.core.seq(vec__17278);
var first__17280 = cljs.core.first(seq__17279);
var seq__17279__$1 = cljs.core.next(seq__17279);
var pred__$1 = first__17280;
var preds__$2 = seq__17279__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.spec.alpha.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__17281 = nret;
var G__17282 = forms__$2;
var G__17283 = preds__$2;
ret__$1 = G__17281;
G__17267__$1 = G__17282;
G__17268__$1 = G__17283;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.alpha.and_spec_impl = (function cljs$spec$alpha$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.specize,preds,forms);
}),null));
var cform = (function (){var G__17286 = cljs.core.count(preds);
switch (G__17286) {
case (2):
return ((function (G__17286,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__17286,specs))

break;
case (3):
return ((function (G__17286,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__17286,specs))

break;
default:
return ((function (G__17286,specs){
return (function (x){
var specs__$1 = cljs.core.deref(specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.alpha.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__17291 = nret;
var G__17292 = (i + (1));
ret = G__17291;
i = G__17292;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__17286,specs))

}
})();
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17287 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17287 = (function (forms,preds,gfn,specs,cform,meta17288){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta17288 = meta17288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_17289,meta17288__$1){
var self__ = this;
var _17289__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17287(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta17288__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_17289){
var self__ = this;
var _17289__$1 = this;
return self__.meta17288;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__17285_SHARP_,p2__17284_SHARP_){
return cljs.spec.alpha.unform(p2__17284_SHARP_,p1__17285_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_and),self__.forms)));
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta17288], null);
});})(specs,cform))
;

cljs.spec.alpha.t_cljs$spec$alpha17287.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17287.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17287";

cljs.spec.alpha.t_cljs$spec$alpha17287.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17287");
});})(specs,cform))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17287 = ((function (specs,cform){
return (function cljs$spec$alpha$and_spec_impl_$___GT_t_cljs$spec$alpha17287(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta17288){
return (new cljs.spec.alpha.t_cljs$spec$alpha17287(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta17288));
});})(specs,cform))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17287(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.coll_prob = (function cljs$spec$alpha$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__7953__auto__ = kfn;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__7953__auto__ = kform;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.alpha.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = count;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8815__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8815__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = (function (){var or__7953__auto__ = min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__7941__auto__)){
return !((((function (){var or__7953__auto__ = min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__7953__auto__ = max_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (9007199254740991);
}
})())));
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__8815__auto__ = (function (){var or__7953__auto__ = min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8815__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),(function (){var x__8815__auto__ = (function (){var or__7953__auto__ = max_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (9007199254740991);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = distinct;
if(cljs.core.truth_(and__7941__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.alpha.merge_spec_impl = (function cljs$spec$alpha$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17301 = (function (forms,preds,gfn,meta17302){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta17302 = meta17302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17303,meta17302__$1){
var self__ = this;
var _17303__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17301(self__.forms,self__.preds,self__.gfn,meta17302__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17303){
var self__ = this;
var _17303__$1 = this;
return self__.meta17302;
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__17293_SHARP_,p2__17294_SHARP_){
return cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p1__17293_SHARP_,x,p2__17294_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.alpha.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__17295_SHARP_){
return cljs.spec.alpha.unform(p1__17295_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__17296_SHARP_,p2__17297_SHARP_){
return cljs.spec.alpha.explain_1(p1__17296_SHARP_,p2__17297_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$1){
return (function (p1__17298_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__17298_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__17299_SHARP_,p2__17300_SHARP_){
return cljs.spec.alpha.gensub(p1__17299_SHARP_,overrides,path,rmap,p2__17300_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.alpha.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha17301.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_merge),self__.forms)));
});

cljs.spec.alpha.t_cljs$spec$alpha17301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta17302], null);
});

cljs.spec.alpha.t_cljs$spec$alpha17301.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17301.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17301";

cljs.spec.alpha.t_cljs$spec$alpha17301.cljs$lang$ctorPrWriter = (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17301");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha17301 = (function cljs$spec$alpha$merge_spec_impl_$___GT_t_cljs$spec$alpha17301(forms__$1,preds__$1,gfn__$1,meta17302){
return (new cljs.spec.alpha.t_cljs$spec$alpha17301(forms__$1,preds__$1,gfn__$1,meta17302));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17301(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.alpha.every_impl = (function cljs$spec$alpha$every_impl(var_args){
var G__17309 = arguments.length;
switch (G__17309) {
case 3:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__17310,gfn){
var map__17311 = p__17310;
var map__17311__$1 = ((((!((map__17311 == null)))?((((map__17311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17311):map__17311);
var opts = map__17311__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$max_DASH_count);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kind_DASH_form);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17311__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_cpred);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$distinct);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_kfn);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$kind);
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17311__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_conform_DASH_all);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__17304_SHARP_){
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(spec),p1__17304_SHARP_);
});})(conform_into,spec,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var kfn__$1 = (function (){var or__7953__auto__ = kfn;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return ((function (or__7953__auto__,conform_into,spec,check_QMARK_,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
return i;
});
;})(or__7953__auto__,conform_into,spec,check_QMARK_,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = cljs.core.map_QMARK_(x);
if(and__7941__auto__){
var or__7953__auto__ = (function (){var and__7941__auto____$1 = kind;
if(cljs.core.truth_(and__7941__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__7941__auto____$1;
}
})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__17305_SHARP_){
return cljs.core.empty((function (){var or__7953__auto__ = conform_into;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return p1__17305_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17313 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17313 = (function (form,max_count,check_QMARK_,gfn,gen_max,map__17311,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn,gen_into,count,min_count,opts,kind,conform_all,conform_into,p__17310,meta17314){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.map__17311 = map__17311;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.p__17310 = p__17310;
this.meta17314 = meta17314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_17315,meta17314__$1){
var self__ = this;
var _17315__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17313(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.map__17311,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.conform_into,self__.p__17310,meta17314__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_17315){
var self__ = this;
var _17315__$1 = this;
return self__.meta17314;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref(self__.spec);
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__17316 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17316,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17316,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17316,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__17322 = cljs.core.seq(x);
var vec__17323 = G__17322;
var seq__17324 = cljs.core.seq(vec__17323);
var first__17325 = cljs.core.first(seq__17324);
var seq__17324__$1 = cljs.core.next(seq__17324);
var v = first__17325;
var vs = seq__17324__$1;
var vseq = vec__17323;
var ret__$1 = ret;
var i__$1 = i;
var G__17322__$1 = G__17322;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__17326 = G__17322__$1;
var seq__17327 = cljs.core.seq(vec__17326);
var first__17328 = cljs.core.first(seq__17327);
var seq__17327__$1 = cljs.core.next(seq__17327);
var v__$1 = first__17328;
var vs__$1 = seq__17327__$1;
var vseq__$1 = vec__17326;
if(vseq__$1){
var cv = cljs.spec.alpha.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
var G__17359 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__17360 = (i__$2 + (1));
var G__17361 = vs__$1;
ret__$1 = G__17359;
i__$1 = G__17360;
G__17322__$1 = G__17361;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__8303__auto__ = (1);
var y__8304__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec.alpha._STAR_coll_check_limit_STAR_));
return ((x__8303__auto__ > y__8304__auto__) ? x__8303__auto__ : y__8304__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__17362 = (i + step);
i = G__17362;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec.alpha._STAR_coll_check_limit_STAR_;
var i = (0);
var G__17332 = cljs.core.seq(x);
var vec__17333 = G__17332;
var seq__17334 = cljs.core.seq(vec__17333);
var first__17335 = cljs.core.first(seq__17334);
var seq__17334__$1 = cljs.core.next(seq__17334);
var v = first__17335;
var vs = seq__17334__$1;
var vseq = vec__17333;
var i__$1 = i;
var G__17332__$1 = G__17332;
while(true){
var i__$2 = i__$1;
var vec__17336 = G__17332__$1;
var seq__17337 = cljs.core.seq(vec__17336);
var first__17338 = cljs.core.first(seq__17337);
var seq__17337__$1 = cljs.core.next(seq__17337);
var v__$1 = first__17338;
var vs__$1 = seq__17337__$1;
var vseq__$1 = vec__17336;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__17363 = (i__$2 + (1));
var G__17364 = vs__$1;
i__$1 = G__17363;
G__17332__$1 = G__17364;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.conform_all)){
var spec__$1 = cljs.core.deref(self__.spec);
var vec__17339 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17339,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17339,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17339,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__17345 = cljs.core.seq(x);
var vec__17346 = G__17345;
var seq__17347 = cljs.core.seq(vec__17346);
var first__17348 = cljs.core.first(seq__17347);
var seq__17347__$1 = cljs.core.next(seq__17347);
var v = first__17348;
var vs = seq__17347__$1;
var vseq = vec__17346;
var ret__$1 = ret;
var i__$1 = i;
var G__17345__$1 = G__17345;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__17349 = G__17345__$1;
var seq__17350 = cljs.core.seq(vec__17349);
var first__17351 = cljs.core.first(seq__17350);
var seq__17350__$1 = cljs.core.next(seq__17350);
var v__$1 = first__17351;
var vs__$1 = seq__17350__$1;
var vseq__$1 = vec__17349;
if((i__$2 >= cljs.core.count(x))){
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
} else {
var G__17365 = (function (){var G__17352 = ret__$2;
var G__17353 = i__$2;
var G__17354 = v__$1;
var G__17355 = cljs.spec.alpha.unform_STAR_(spec__$1,v__$1);
return (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(G__17352,G__17353,G__17354,G__17355) : add.call(null,G__17352,G__17353,G__17354,G__17355));
})();
var G__17366 = (i__$2 + (1));
var G__17367 = vs__$1;
ret__$1 = G__17365;
i__$1 = G__17366;
G__17345__$1 = G__17367;
continue;
}
break;
}
} else {
return x;
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__7953__auto__ = cljs.spec.alpha.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__17357 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__7953__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.alpha.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__7953__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x));
var fexpr__17356 = (cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec.alpha._STAR_coll_error_limit_STAR_));
return (fexpr__17356.cljs$core$IFn$_invoke$arity$1 ? fexpr__17356.cljs$core$IFn$_invoke$arity$1(G__17357) : fexpr__17356.call(null,G__17357));
})());
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.alpha.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(self__.gen_into)?cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__17306_SHARP_){
if(cljs.core.empty_QMARK_(p1__17306_SHARP_)){
return p1__17306_SHARP_;
} else {
return cljs.core.empty(p1__17306_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,cljs.spec.alpha.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (init){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (p1__17307_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__17307_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__17307_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__7953__auto__ = self__.min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__7953__auto__ = self__.max_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var x__8303__auto__ = self__.gen_max;
var y__8304__auto__ = ((2) * (function (){var or__7953__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return (0);
}
})());
return ((x__8303__auto__ > y__8304__auto__) ? x__8303__auto__ : y__8304__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__7953__auto__ = self__.min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(function (){var or__7953__auto__ = self__.min_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})(),(function (){var or__7953__auto__ = self__.max_count;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var x__8303__auto__ = self__.gen_max;
var y__8304__auto__ = ((2) * (function (){var or__7953__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return (0);
}
})());
return ((x__8303__auto__ > y__8304__auto__) ? x__8303__auto__ : y__8304__auto__);
}
})()], 0)):cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__7953__auto__ = self__.describe_form;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_every),(function (){var x__8815__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts], 0))], 0))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$map__17311,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$p__17310,cljs.core.cst$sym$meta17314], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.t_cljs$spec$alpha17313.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17313.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17313";

cljs.spec.alpha.t_cljs$spec$alpha17313.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17313");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17313 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all){
return (function cljs$spec$alpha$__GT_t_cljs$spec$alpha17313(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__17311__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,p__17310__$1,meta17314){
return (new cljs.spec.alpha.t_cljs$spec$alpha17313(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,map__17311__$2,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,conform_into__$1,p__17310__$1,meta17314));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__17311,map__17311__$1,opts,max_count,kind_form,gen_max,cpred,conform_keys,describe_form,distinct,kfn,gen_into,count,min_count,kind,conform_all))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17313(form,max_count,check_QMARK_,gfn,gen_max,map__17311__$1,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,conform_into,p__17310,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.alpha.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.alpha.accept = (function cljs$spec$alpha$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.alpha.accept_QMARK_ = (function cljs$spec$alpha$accept_QMARK_(p__17368){
var map__17369 = p__17368;
var map__17369__$1 = ((((!((map__17369 == null)))?((((map__17369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17369):map__17369);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17369__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,op);
});
cljs.spec.alpha.pcat_STAR_ = (function cljs$spec$alpha$pcat_STAR_(p__17371){
var map__17372 = p__17371;
var map__17372__$1 = ((((!((map__17372 == null)))?((((map__17372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17372.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17372):map__17372);
var vec__17373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,cljs.core.cst$kw$ps);
var seq__17374 = cljs.core.seq(vec__17373);
var first__17375 = cljs.core.first(seq__17374);
var seq__17374__$1 = cljs.core.next(seq__17374);
var p1 = first__17375;
var pr = seq__17374__$1;
var ps = vec__17373;
var vec__17376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,cljs.core.cst$kw$ks);
var seq__17377 = cljs.core.seq(vec__17376);
var first__17378 = cljs.core.first(seq__17377);
var seq__17377__$1 = cljs.core.next(seq__17377);
var k1 = first__17378;
var kr = seq__17377__$1;
var ks = vec__17376;
var vec__17379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,cljs.core.cst$kw$forms);
var seq__17380 = cljs.core.seq(vec__17379);
var first__17381 = cljs.core.first(seq__17380);
var seq__17380__$1 = cljs.core.next(seq__17380);
var f1 = first__17381;
var fr = seq__17380__$1;
var forms = vec__17379;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17372__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__17383 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__17383) : cljs.spec.alpha.pcat_STAR_.call(null,G__17383));
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.alpha.pcat = (function cljs$spec$alpha$pcat(var_args){
var args__9129__auto__ = [];
var len__9122__auto___17385 = arguments.length;
var i__9123__auto___17386 = (0);
while(true){
if((i__9123__auto___17386 < len__9122__auto___17385)){
args__9129__auto__.push((arguments[i__9123__auto___17386]));

var G__17387 = (i__9123__auto___17386 + (1));
i__9123__auto___17386 = G__17387;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.alpha.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.pcat.cljs$lang$applyTo = (function (seq17384){
return cljs.spec.alpha.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17384));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.alpha.cat_impl = (function cljs$spec$alpha$cat_impl(ks,ps,forms){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.alpha.rep_STAR_ = (function cljs$spec$alpha$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.alpha.rep_impl = (function cljs$spec$alpha$rep_impl(form,p){
return cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.alpha.rep_PLUS_impl = (function cljs$spec$alpha$rep_PLUS_impl(form,p){
return cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8815__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),(function (){var x__8815__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_),(function (){var x__8815__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.alpha.amp_impl = (function cljs$spec$alpha$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.alpha.filter_alt = (function cljs$spec$alpha$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__7953__auto__ = ks;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17388_SHARP_){
var G__17390 = cljs.core.first(p1__17388_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17390) : f.call(null,G__17390));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7953__auto__ = cljs.core.seq(ks);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7953__auto__ = cljs.core.seq(forms);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__17389_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__17389_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alpha.alt_STAR_ = (function cljs$spec$alpha$alt_STAR_(ps,ks,forms){
var vec__17391 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__17394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(0),null);
var seq__17395 = cljs.core.seq(vec__17394);
var first__17396 = cljs.core.first(seq__17395);
var seq__17395__$1 = cljs.core.next(seq__17395);
var p1 = first__17396;
var pr = seq__17395__$1;
var ps__$1 = vec__17394;
var vec__17397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17397,(0),null);
var ks__$1 = vec__17397;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_op,cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p1))){
return cljs.spec.alpha.accept(cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alpha.alts = (function cljs$spec$alpha$alts(var_args){
var args__9129__auto__ = [];
var len__9122__auto___17401 = arguments.length;
var i__9123__auto___17402 = (0);
while(true){
if((i__9123__auto___17402 < len__9122__auto___17401)){
args__9129__auto__.push((arguments[i__9123__auto___17402]));

var G__17403 = (i__9123__auto___17402 + (1));
i__9123__auto___17402 = G__17403;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});

cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alpha.alt_STAR_(ps,null,null);
});

cljs.spec.alpha.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alpha.alts.cljs$lang$applyTo = (function (seq17400){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17400));
});

cljs.spec.alpha.alt2 = (function cljs$spec$alpha$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__7941__auto__ = p1;
if(cljs.core.truth_(and__7941__auto__)){
return p2;
} else {
return and__7941__auto__;
}
})())){
return cljs.spec.alpha.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));
} else {
var or__7953__auto__ = p1;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alpha.alt_impl = (function cljs$spec$alpha$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.alpha.maybe_impl = (function cljs$spec$alpha$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.alpha.accept(cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.alpha.noret_QMARK_ = (function cljs$spec$alpha$noret_QMARK_(p1,pret){
var or__7953__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil);
if(or__7953__auto__){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = (function (){var and__7941__auto__ = (function (){var G__17415 = cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.reg_resolve_BANG_(p1));
var fexpr__17414 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,null,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,null], null), null);
return (fexpr__17414.cljs$core$IFn$_invoke$arity$1 ? fexpr__17414.cljs$core$IFn$_invoke$arity$1(G__17415) : fexpr__17414.call(null,G__17415));
})();
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__7941__auto__;
}
})();
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return null;
}
}
});
cljs.spec.alpha.accept_nil_QMARK_ = (function cljs$spec$alpha$accept_nil_QMARK_(p){
var map__17416 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17416__$1 = ((((!((map__17416 == null)))?((((map__17416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17416.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17416):map__17416);
var p__$1 = map__17416__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,cljs.core.cst$kw$forms);
var G__17418 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17418)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17418)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17418)){
var and__7941__auto__ = (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__7941__auto__)){
var or__7953__auto__ = cljs.spec.alpha.noret_QMARK_(p1,(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var ret = cljs.spec.alpha.and_preds((cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.alpha.invalid_QMARK_(ret));
}
} else {
return and__7941__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17418)){
var or__7953__auto__ = (p1 === p2);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return (cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17418)){
return cljs.core.every_QMARK_(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17418)){
return cljs.core.some(cljs.spec.alpha.accept_nil_QMARK_,ps);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17418)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.preturn = (function cljs$spec$alpha$preturn(p){
var map__17419 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17419__$1 = ((((!((map__17419 == null)))?((((map__17419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17419):map__17419);
var p__$1 = map__17419__$1;
var vec__17420 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$ps);
var seq__17421 = cljs.core.seq(vec__17420);
var first__17422 = cljs.core.first(seq__17421);
var seq__17421__$1 = cljs.core.next(seq__17421);
var p0 = first__17422;
var pr = seq__17421__$1;
var ps = vec__17420;
var vec__17423 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17423,(0),null);
var ks = vec__17423;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17419__$1,cljs.core.cst$kw$forms);
var G__17427 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17427)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17427)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17427)){
var pret = (cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.alpha.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil;
} else {
return cljs.spec.alpha.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17427)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.alpha.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17427)){
return (cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.alpha.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17427)){
var vec__17428 = cljs.spec.alpha.filter_alt(ps,ks,forms,cljs.spec.alpha.accept_nil_QMARK_);
var vec__17431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17428,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17431,(0),null);
var vec__17434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17428,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17434,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil:(cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.alpha.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.alpha.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17427)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.op_unform = (function cljs$spec$alpha$op_unform(p,x){
var map__17441 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17441__$1 = ((((!((map__17441 == null)))?((((map__17441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17441):map__17441);
var p__$1 = map__17441__$1;
var vec__17442 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$ps);
var seq__17443 = cljs.core.seq(vec__17442);
var first__17444 = cljs.core.first(seq__17443);
var seq__17443__$1 = cljs.core.next(seq__17443);
var p0 = first__17444;
var pr = seq__17443__$1;
var ps = vec__17442;
var vec__17445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17445,(0),null);
var ks = vec__17445;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17441__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__17449 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17449)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17449)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17449)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__17438_SHARP_,p2__17437_SHARP_){
return cljs.spec.alpha.unform(p2__17437_SHARP_,p1__17438_SHARP_);
});})(G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.alpha.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17449)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__17439_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__17439_SHARP_) : cljs.spec.alpha.op_unform.call(null,p1,p1__17439_SHARP_));
});})(G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17449)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__17440_SHARP_){
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__17440_SHARP_) : cljs.spec.alpha.op_unform.call(null,p0,p1__17440_SHARP_));
});})(G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__17450 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__17451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__17450,G__17451) : cljs.spec.alpha.op_unform.call(null,G__17450,G__17451));
} else {
return null;
}
});})(G__17449,map__17441,map__17441__$1,p__$1,vec__17442,seq__17443,first__17444,seq__17443__$1,p0,pr,ps,vec__17445,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17449)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.unform(p0,x)], null);
} else {
var vec__17452 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17452,(1),null);
var G__17455 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__17456 = v;
return (cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.op_unform.cljs$core$IFn$_invoke$arity$2(G__17455,G__17456) : cljs.spec.alpha.op_unform.call(null,G__17455,G__17456));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17449)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.add_ret = (function cljs$spec$alpha$add_ret(p,r,k){
var map__17457 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17457__$1 = ((((!((map__17457 == null)))?((((map__17457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17457):map__17457);
var p__$1 = map__17457__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17457__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17457__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17457__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__17457,map__17457__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
var G__17460 = r;
var G__17461 = (cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret);
var fexpr__17459 = (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj);
return (fexpr__17459.cljs$core$IFn$_invoke$arity$2 ? fexpr__17459.cljs$core$IFn$_invoke$arity$2(G__17460,G__17461) : fexpr__17459.call(null,G__17460,G__17461));
}
});})(map__17457,map__17457__$1,p__$1,op,ps,splice))
;
var G__17462 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17462)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17462)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17462)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17462)){
var ret = cljs.spec.alpha.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17462)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17462)){
return prop();
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17462)].join('')));

}
}
}
}
}
}
});
cljs.spec.alpha.deriv = (function cljs$spec$alpha$deriv(p,x){
var map__17464 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17464__$1 = ((((!((map__17464 == null)))?((((map__17464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17464):map__17464);
var p__$1 = map__17464__$1;
var vec__17465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$ps);
var seq__17466 = cljs.core.seq(vec__17465);
var first__17467 = cljs.core.first(seq__17466);
var seq__17466__$1 = cljs.core.next(seq__17466);
var p0 = first__17467;
var pr = seq__17466__$1;
var ps = vec__17465;
var vec__17468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$ks);
var seq__17469 = cljs.core.seq(vec__17468);
var first__17470 = cljs.core.first(seq__17469);
var seq__17469__$1 = cljs.core.next(seq__17469);
var k0 = first__17470;
var kr = seq__17469__$1;
var ks = vec__17468;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17464__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__17472 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17472)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17472)){
var ret__$1 = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17472)){
var temp__4657__auto__ = (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.alpha.and_preds(cljs.spec.alpha.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.alpha.accept(ret__$1);
}
} else {
return cljs.spec.alpha.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17472)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.alpha.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p0))?(function (){var G__17473 = cljs.spec.alpha.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.alpha.add_ret(p0,ret,k0)], null));
var G__17474 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__17473,G__17474) : cljs.spec.alpha.deriv.call(null,G__17473,G__17474));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17472)){
return cljs.spec.alpha.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__17472,map__17464,map__17464__$1,p__$1,vec__17465,seq__17466,first__17467,seq__17466__$1,p0,pr,ps,vec__17468,seq__17469,first__17470,seq__17469__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__17463_SHARP_){
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1__17463_SHARP_,x) : cljs.spec.alpha.deriv.call(null,p1__17463_SHARP_,x));
});})(G__17472,map__17464,map__17464__$1,p__$1,vec__17465,seq__17466,first__17467,seq__17466__$1,p0,pr,ps,vec__17468,seq__17469,first__17470,seq__17469__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17472)){
return cljs.spec.alpha.alt2(cljs.spec.alpha.rep_STAR_((cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.alpha.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))?(function (){var G__17475 = cljs.spec.alpha.rep_STAR_(p2,p2,cljs.spec.alpha.add_ret(p1,ret,null),splice,forms);
var G__17476 = x;
return (cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.deriv.cljs$core$IFn$_invoke$arity$2(G__17475,G__17476) : cljs.spec.alpha.deriv.call(null,G__17475,G__17476));
})():null));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17472)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_describe = (function cljs$spec$alpha$op_describe(p){
var map__17477 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17477__$1 = ((((!((map__17477 == null)))?((((map__17477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17477):map__17477);
var p__$1 = map__17477__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17477__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__17479 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17479)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17479)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17479)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$spec$alpha_SLASH__AMPERSAND_,(cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.alpha.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17479)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__8815__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__7953__auto__ = cljs.core.seq(ks);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17479)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__8815__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core.cst$sym$cljs$spec$alpha_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec$alpha_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17479)){
var x__8815__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec$alpha_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_);
return cljs.core._conj((function (){var x__8815__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto____$1);
})(),x__8815__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17479)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.op_explain = (function cljs$spec$alpha$op_explain(form,p,path,via,in$,input){
var vec__17480 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17480,(0),null);
var input__$1 = vec__17480;
var map__17483 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17483__$1 = ((((!((map__17483 == null)))?((((map__17483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17483):map__17483);
var p__$1 = map__17483__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17483__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.alpha.spec_name(p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,form__$1,cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__17485 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17485)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17485)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.alpha.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17485)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p1))){
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1));
} else {
return insufficient(path,cljs.spec.alpha.op_describe(p1));
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv(p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.alpha.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.alpha.preturn(p1__$1));
} else {
var G__17486 = cljs.spec.alpha.op_describe(p1);
var G__17487 = p1;
var G__17488 = path;
var G__17489 = via__$1;
var G__17490 = in$;
var G__17491 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__17486,G__17487,G__17488,G__17489,G__17490,G__17491) : cljs.spec.alpha.op_explain.call(null,G__17486,G__17487,G__17488,G__17489,G__17490,G__17491));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17485)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7953__auto__ = cljs.core.seq(ks);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7953__auto__ = cljs.core.seq(forms);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__17492 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__17485,vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__17495){
var vec__17496 = p__17495;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17496,(0),null);
return cljs.spec.alpha.accept_nil_QMARK_(p__$2);
});})(pkfs,G__17485,vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17492,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__7953__auto__ = form__$1;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.alpha.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17485)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.alpha.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__17485,vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__17499 = (function (){var or__7953__auto__ = form__$1;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.spec.alpha.op_describe(pred);
}
})();
var G__17500 = pred;
var G__17501 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__17502 = via__$1;
var G__17503 = in$;
var G__17504 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__17499,G__17500,G__17501,G__17502,G__17503,G__17504) : cljs.spec.alpha.op_explain.call(null,G__17499,G__17500,G__17501,G__17502,G__17503,G__17504));
});})(G__17485,vec__17480,x,input__$1,map__17483,map__17483__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__7953__auto__ = cljs.core.seq(ks);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7953__auto__ = cljs.core.seq(forms);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17485)){
var G__17505 = (((p1 === p2))?forms:cljs.spec.alpha.op_describe(p1));
var G__17506 = p1;
var G__17507 = path;
var G__17508 = via__$1;
var G__17509 = in$;
var G__17510 = input__$1;
return (cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.alpha.op_explain.cljs$core$IFn$_invoke$arity$6(G__17505,G__17506,G__17507,G__17508,G__17509,G__17510) : cljs.spec.alpha.op_explain.call(null,G__17505,G__17506,G__17507,G__17508,G__17509,G__17510));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17485)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.alpha.re_gen = (function cljs$spec$alpha$re_gen(p,overrides,path,rmap,f){
var map__17512 = cljs.spec.alpha.reg_resolve_BANG_(p);
var map__17512__$1 = ((((!((map__17512 == null)))?((((map__17512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17512):map__17512);
var p__$1 = map__17512__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$ret);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_gfn);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$cljs$spec$alpha_SLASH_op);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$p1);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17512__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.alpha.inck(rmap,id):rmap);
var ggens = ((function (map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__7941__auto__ = rmap__$1;
if(cljs.core.truth_(and__7941__auto__)){
var and__7941__auto____$1 = id;
if(cljs.core.truth_(and__7941__auto____$1)){
var and__7941__auto____$2 = k;
if(cljs.core.truth_(and__7941__auto____$2)){
return cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__7941__auto____$2;
}
} else {
return and__7941__auto____$1;
}
} else {
return and__7941__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1){
return (function (){
var G__17514 = p__$2;
var G__17515 = overrides;
var G__17516 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__17517 = rmap__$1;
var G__17518 = (function (){var or__7953__auto__ = f__$1;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__17514,G__17515,G__17516,G__17517,G__17518) : cljs.spec.alpha.re_gen.call(null,G__17514,G__17515,G__17516,G__17517,G__17518));
});})(map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
,null)));
} else {
var G__17519 = p__$2;
var G__17520 = overrides;
var G__17521 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__17522 = rmap__$1;
var G__17523 = (function (){var or__7953__auto__ = f__$1;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__17519,G__17520,G__17521,G__17522,G__17523) : cljs.spec.alpha.re_gen.call(null,G__17519,G__17520,G__17521,G__17522,G__17523));
}
}
});})(map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__7953__auto__ = cljs.core.seq(ks__$1);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7953__auto__ = cljs.core.seq(forms__$1);
if(or__7953__auto__){
return or__7953__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1))
;
var or__7953__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__17525 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__17525)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17525)){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__17526 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_accept,G__17526)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17526)){
var temp__4657__auto__ = cljs.spec.alpha.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_amp,G__17526)){
var G__17527 = p1;
var G__17528 = overrides;
var G__17529 = path;
var G__17530 = rmap__$1;
var G__17531 = cljs.spec.alpha.op_describe(p1);
return (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(G__17527,G__17528,G__17529,G__17530,G__17531) : cljs.spec.alpha.re_gen.call(null,G__17527,G__17528,G__17529,G__17530,G__17531));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat,G__17526)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.gen.alpha.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_alt,G__17526)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_rep,G__17526)){
if(cljs.core.truth_(cljs.spec.alpha.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__4657__auto__ = (cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.alpha.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.alpha.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (g,temp__4657__auto__,G__17526,or__7953__auto____$1,or__7953__auto__,map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens){
return (function (p1__17511_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__17511_SHARP_);
});})(g,temp__4657__auto__,G__17526,or__7953__auto____$1,or__7953__auto__,map__17512,map__17512__$1,p__$1,ps,forms,p2,ret,gfn,op,splice,ks,p1,id,rmap__$1,ggens))
,cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17526)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.alpha.re_conform = (function cljs$spec$alpha$re_conform(p,p__17532){
while(true){
var vec__17533 = p__17532;
var seq__17534 = cljs.core.seq(vec__17533);
var first__17535 = cljs.core.first(seq__17534);
var seq__17534__$1 = cljs.core.next(seq__17534);
var x = first__17535;
var xs = seq__17534__$1;
var data = vec__17533;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p))){
var ret = cljs.spec.alpha.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv(p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__17536 = dp;
var G__17537 = xs;
p = G__17536;
p__17532 = G__17537;
continue;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
}
break;
}
});
cljs.spec.alpha.re_explain = (function cljs$spec$alpha$re_explain(path,via,in$,re,input){
var p = re;
var G__17541 = input;
var vec__17542 = G__17541;
var seq__17543 = cljs.core.seq(vec__17542);
var first__17544 = cljs.core.first(seq__17543);
var seq__17543__$1 = cljs.core.next(seq__17543);
var x = first__17544;
var xs = seq__17543__$1;
var data = vec__17542;
var i = (0);
var p__$1 = p;
var G__17541__$1 = G__17541;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__17545 = G__17541__$1;
var seq__17546 = cljs.core.seq(vec__17545);
var first__17547 = cljs.core.first(seq__17546);
var seq__17546__$1 = cljs.core.next(seq__17546);
var x__$1 = first__17547;
var xs__$1 = seq__17546__$1;
var data__$1 = vec__17545;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.alpha.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.alpha.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__17548 = dp;
var G__17549 = xs__$1;
var G__17550 = (i__$2 + (1));
p__$1 = G__17548;
G__17541__$1 = G__17549;
i__$1 = G__17550;
continue;
} else {
if(cljs.core.truth_(cljs.spec.alpha.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec$alpha_SLASH_pcat)){
return cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(re),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__7953__auto__ = cljs.spec.alpha.op_explain(cljs.spec.alpha.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(p__$2),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.alpha.regex_spec_impl = (function cljs$spec$alpha$regex_spec_impl(re,gfn){
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17551 = (function (re,gfn,meta17552){
this.re = re;
this.gfn = gfn;
this.meta17552 = meta17552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17553,meta17552__$1){
var self__ = this;
var _17553__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17551(self__.re,self__.gfn,meta17552__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17553){
var self__ = this;
var _17553__$1 = this;
return self__.meta17552;
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_unform(self__.re,x);
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.alpha.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.alpha.op_describe(self__.re),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.alpha.re_gen(self__.re,overrides,path,rmap,cljs.spec.alpha.op_describe(self__.re));
}
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.alpha.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.alpha.t_cljs$spec$alpha17551.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.op_describe(self__.re);
});

cljs.spec.alpha.t_cljs$spec$alpha17551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta17552], null);
});

cljs.spec.alpha.t_cljs$spec$alpha17551.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17551.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17551";

cljs.spec.alpha.t_cljs$spec$alpha17551.cljs$lang$ctorPrWriter = (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17551");
});

cljs.spec.alpha.__GT_t_cljs$spec$alpha17551 = (function cljs$spec$alpha$regex_spec_impl_$___GT_t_cljs$spec$alpha17551(re__$1,gfn__$1,meta17552){
return (new cljs.spec.alpha.t_cljs$spec$alpha17551(re__$1,gfn__$1,meta17552));
});

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17551(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.call_valid_QMARK_ = (function cljs$spec$alpha$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.alpha.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.alpha.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__7941__auto__ = cljs.core.not(cljs.spec.alpha.invalid_QMARK_(cret));
if(and__7941__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__7941__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.alpha.validate_fn = (function cljs$spec$alpha$validate_fn(f,specs,iters){
var g = cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__17554_SHARP_){
return cljs.spec.alpha.call_valid_QMARK_(f,specs,p1__17554_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([iters,prop], 0));
var temp__4655__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__17555 = temp__4655__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17555,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.alpha.fspec_impl = (function cljs$spec$alpha$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.alpha.t_cljs$spec$alpha17558 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta17559){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta17559 = meta17559;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_17560,meta17559__$1){
var self__ = this;
var _17560__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17558(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta17559__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_17560){
var self__ = this;
var _17560__$1 = this;
return self__.meta17559;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.alpha.validate_fn(f,self__.specs,cljs.spec.alpha._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.alpha.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e17561){if((e17561 instanceof Error)){
var t = e17561;
return t;
} else {
throw e17561;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.alpha.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(cret))){
return cljs.spec.alpha.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.alpha.conform(self__.argspec,args);
return cljs.spec.alpha.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((function (___$3,specs){
return (function() { 
var G__17564__delegate = function (args){
if(cljs.core.truth_(cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8980__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17562_17565 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17563_17566 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17562_17565,_STAR_print_fn_STAR_17563_17566,sb__8980__auto__,___$3,specs){
return (function (x__8981__auto__){
return sb__8980__auto__.append(x__8981__auto__);
});})(_STAR_print_newline_STAR_17562_17565,_STAR_print_fn_STAR_17563_17566,sb__8980__auto__,___$3,specs))
;

try{cljs.spec.alpha.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17563_17566;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17562_17565;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8980__auto__)].join('');
})()),"\n","(pvalid? argspec args)"].join('')));
}

return cljs.spec.gen.alpha.generate(cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__17564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17567__i = 0, G__17567__a = new Array(arguments.length -  0);
while (G__17567__i < G__17567__a.length) {G__17567__a[G__17567__i] = arguments[G__17567__i + 0]; ++G__17567__i;}
  args = new cljs.core.IndexedSeq(G__17567__a,0,null);
} 
return G__17564__delegate.call(this,args);};
G__17564.cljs$lang$maxFixedArity = 0;
G__17564.cljs$lang$applyTo = (function (arglist__17568){
var args = cljs.core.seq(arglist__17568);
return G__17564__delegate(args);
});
G__17564.cljs$core$IFn$_invoke$arity$variadic = G__17564__delegate;
return G__17564;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.alpha.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.alpha.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__8815__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__8815__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__8815__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta17559], null);
});})(specs))
;

cljs.spec.alpha.t_cljs$spec$alpha17558.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17558.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17558";

cljs.spec.alpha.t_cljs$spec$alpha17558.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17558");
});})(specs))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17558 = ((function (specs){
return (function cljs$spec$alpha$fspec_impl_$___GT_t_cljs$spec$alpha17558(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta17559){
return (new cljs.spec.alpha.t_cljs$spec$alpha17558(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta17559));
});})(specs))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17558(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.alpha.def_impl(cljs.core.cst$kw$cljs$spec$alpha_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__17569_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$p1__17569_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$p1__17569_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__17570_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__17570_SHARP_))),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__17569_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,p1__17569_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,p1__17569_SHARP_));
}),null,true,(function (p1__17570_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17571){
var vec__17572 = p__17571;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17572,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec$alpha_SLASH_k,k,cljs.core.cst$kw$cljs$spec$alpha_SLASH_v,v], null);
}),p1__17570_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.alpha.nonconforming = (function cljs$spec$alpha$nonconforming(spec){
var spec__$1 = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17575 = (function (spec,meta17576){
this.spec = spec;
this.meta17576 = meta17576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_17577,meta17576__$1){
var self__ = this;
var _17577__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17575(self__.spec,meta17576__$1));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_17577){
var self__ = this;
var _17577__$1 = this;
return self__.meta17576;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.alpha.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.alpha.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__17578 = cljs.spec.alpha.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.alpha.nonconforming.cljs$core$IFn$_invoke$arity$1(G__17578) : cljs.spec.alpha.nonconforming.call(null,G__17578));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nonconforming),(function (){var x__8815__auto__ = cljs.spec.alpha.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})())));
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta17576], null);
});})(spec__$1))
;

cljs.spec.alpha.t_cljs$spec$alpha17575.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17575.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17575";

cljs.spec.alpha.t_cljs$spec$alpha17575.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17575");
});})(spec__$1))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17575 = ((function (spec__$1){
return (function cljs$spec$alpha$nonconforming_$___GT_t_cljs$spec$alpha17575(spec__$2,meta17576){
return (new cljs.spec.alpha.t_cljs$spec$alpha17575(spec__$2,meta17576));
});})(spec__$1))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17575(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.alpha.nilable_impl = (function cljs$spec$alpha$nilable_impl(form,pred,gfn){
var spec = cljs.spec.alpha.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.alpha.t_cljs$spec$alpha17579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.alpha.Specize}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.alpha.t_cljs$spec$alpha17579 = (function (form,pred,gfn,spec,meta17580){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta17580 = meta17580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_17581,meta17580__$1){
var self__ = this;
var _17581__$1 = this;
return (new cljs.spec.alpha.t_cljs$spec$alpha17579(self__.form,self__.pred,self__.gfn,self__.spec,meta17580__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_17581){
var self__ = this;
var _17581__$1 = this;
return self__.meta17580;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.conform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.alpha.unform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.spec.alpha.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.gen.alpha.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.alpha.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec$alpha_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.alpha.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.alpha.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec$alpha_SLASH_nilable),(function (){var x__8815__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8815__auto__);
})())));
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta17580], null);
});})(spec))
;

cljs.spec.alpha.t_cljs$spec$alpha17579.cljs$lang$type = true;

cljs.spec.alpha.t_cljs$spec$alpha17579.cljs$lang$ctorStr = "cljs.spec.alpha/t_cljs$spec$alpha17579";

cljs.spec.alpha.t_cljs$spec$alpha17579.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8578__auto__,writer__8579__auto__,opt__8580__auto__){
return cljs.core._write(writer__8579__auto__,"cljs.spec.alpha/t_cljs$spec$alpha17579");
});})(spec))
;

cljs.spec.alpha.__GT_t_cljs$spec$alpha17579 = ((function (spec){
return (function cljs$spec$alpha$nilable_impl_$___GT_t_cljs$spec$alpha17579(form__$1,pred__$1,gfn__$1,spec__$1,meta17580){
return (new cljs.spec.alpha.t_cljs$spec$alpha17579(form__$1,pred__$1,gfn__$1,spec__$1,meta17580));
});})(spec))
;

}

return (new cljs.spec.alpha.t_cljs$spec$alpha17579(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.alpha.exercise = (function cljs$spec$alpha$exercise(var_args){
var G__17584 = arguments.length;
switch (G__17584) {
case 1:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.alpha.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17582_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__17582_SHARP_,cljs.spec.alpha.conform(spec,p1__17582_SHARP_)],null));
}),cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.alpha.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.alpha.inst_in_range_QMARK_ = (function cljs$spec$alpha$inst_in_range_QMARK_(start,end,inst){
var and__7941__auto__ = cljs.core.inst_QMARK_(inst);
if(and__7941__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__7941__auto__;
}
});
/**
 * Return true if start <= val, val < end and val is a fixed
 *   precision integer.
 */
cljs.spec.alpha.int_in_range_QMARK_ = (function cljs$spec$alpha$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__7941__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7941__auto__)){
return val.lessThan(end);
} else {
return and__7941__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__7941__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7941__auto__)){
return val.lessThan(end);
} else {
return and__7941__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec.alpha._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec.alpha._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec.alpha._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec.alpha._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.alpha.check_asserts_QMARK_ = (function cljs$spec$alpha$check_asserts_QMARK_(){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec.alpha/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.alpha.check_asserts = (function cljs$spec$alpha$check_asserts(flag){
return cljs.spec.alpha._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.alpha.assert_STAR_ = (function cljs$spec$alpha$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec$alpha_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
throw (new Error(["Spec assertion failed\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8980__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_17586_17588 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_17587_17589 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_17586_17588,_STAR_print_fn_STAR_17587_17589,sb__8980__auto__,ed){
return (function (x__8981__auto__){
return sb__8980__auto__.append(x__8981__auto__);
});})(_STAR_print_newline_STAR_17586_17588,_STAR_print_fn_STAR_17587_17589,sb__8980__auto__,ed))
;

try{cljs.spec.alpha.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17587_17589;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17586_17588;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8980__auto__)].join('');
})())].join('')));
}
});
