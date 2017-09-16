// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18199){
var map__18200 = p__18199;
var map__18200__$1 = ((((!((map__18200 == null)))?((((map__18200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18200):map__18200);
var m = map__18200__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18200__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18200__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18202_18224 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18203_18225 = null;
var count__18204_18226 = (0);
var i__18205_18227 = (0);
while(true){
if((i__18205_18227 < count__18204_18226)){
var f_18228 = chunk__18203_18225.cljs$core$IIndexed$_nth$arity$2(null,i__18205_18227);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18228], 0));

var G__18229 = seq__18202_18224;
var G__18230 = chunk__18203_18225;
var G__18231 = count__18204_18226;
var G__18232 = (i__18205_18227 + (1));
seq__18202_18224 = G__18229;
chunk__18203_18225 = G__18230;
count__18204_18226 = G__18231;
i__18205_18227 = G__18232;
continue;
} else {
var temp__4657__auto___18233 = cljs.core.seq(seq__18202_18224);
if(temp__4657__auto___18233){
var seq__18202_18234__$1 = temp__4657__auto___18233;
if(cljs.core.chunked_seq_QMARK_(seq__18202_18234__$1)){
var c__8792__auto___18235 = cljs.core.chunk_first(seq__18202_18234__$1);
var G__18236 = cljs.core.chunk_rest(seq__18202_18234__$1);
var G__18237 = c__8792__auto___18235;
var G__18238 = cljs.core.count(c__8792__auto___18235);
var G__18239 = (0);
seq__18202_18224 = G__18236;
chunk__18203_18225 = G__18237;
count__18204_18226 = G__18238;
i__18205_18227 = G__18239;
continue;
} else {
var f_18240 = cljs.core.first(seq__18202_18234__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18240], 0));

var G__18241 = cljs.core.next(seq__18202_18234__$1);
var G__18242 = null;
var G__18243 = (0);
var G__18244 = (0);
seq__18202_18224 = G__18241;
chunk__18203_18225 = G__18242;
count__18204_18226 = G__18243;
i__18205_18227 = G__18244;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18245 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18245], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18245)))?cljs.core.second(arglists_18245):arglists_18245)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__18206_18246 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18207_18247 = null;
var count__18208_18248 = (0);
var i__18209_18249 = (0);
while(true){
if((i__18209_18249 < count__18208_18248)){
var vec__18210_18250 = chunk__18207_18247.cljs$core$IIndexed$_nth$arity$2(null,i__18209_18249);
var name_18251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18210_18250,(0),null);
var map__18213_18252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18210_18250,(1),null);
var map__18213_18253__$1 = ((((!((map__18213_18252 == null)))?((((map__18213_18252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18213_18252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18213_18252):map__18213_18252);
var doc_18254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18213_18253__$1,cljs.core.cst$kw$doc);
var arglists_18255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18213_18253__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18251], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18255], 0));

if(cljs.core.truth_(doc_18254)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18254], 0));
} else {
}

var G__18256 = seq__18206_18246;
var G__18257 = chunk__18207_18247;
var G__18258 = count__18208_18248;
var G__18259 = (i__18209_18249 + (1));
seq__18206_18246 = G__18256;
chunk__18207_18247 = G__18257;
count__18208_18248 = G__18258;
i__18209_18249 = G__18259;
continue;
} else {
var temp__4657__auto___18260 = cljs.core.seq(seq__18206_18246);
if(temp__4657__auto___18260){
var seq__18206_18261__$1 = temp__4657__auto___18260;
if(cljs.core.chunked_seq_QMARK_(seq__18206_18261__$1)){
var c__8792__auto___18262 = cljs.core.chunk_first(seq__18206_18261__$1);
var G__18263 = cljs.core.chunk_rest(seq__18206_18261__$1);
var G__18264 = c__8792__auto___18262;
var G__18265 = cljs.core.count(c__8792__auto___18262);
var G__18266 = (0);
seq__18206_18246 = G__18263;
chunk__18207_18247 = G__18264;
count__18208_18248 = G__18265;
i__18209_18249 = G__18266;
continue;
} else {
var vec__18215_18267 = cljs.core.first(seq__18206_18261__$1);
var name_18268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18215_18267,(0),null);
var map__18218_18269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18215_18267,(1),null);
var map__18218_18270__$1 = ((((!((map__18218_18269 == null)))?((((map__18218_18269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18218_18269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18218_18269):map__18218_18269);
var doc_18271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18218_18270__$1,cljs.core.cst$kw$doc);
var arglists_18272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18218_18270__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18268], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18272], 0));

if(cljs.core.truth_(doc_18271)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18271], 0));
} else {
}

var G__18273 = cljs.core.next(seq__18206_18261__$1);
var G__18274 = null;
var G__18275 = (0);
var G__18276 = (0);
seq__18206_18246 = G__18273;
chunk__18207_18247 = G__18274;
count__18208_18248 = G__18275;
i__18209_18249 = G__18276;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18220 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18221 = null;
var count__18222 = (0);
var i__18223 = (0);
while(true){
if((i__18223 < count__18222)){
var role = chunk__18221.cljs$core$IIndexed$_nth$arity$2(null,i__18223);
var temp__4657__auto___18277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18277__$1)){
var spec_18278 = temp__4657__auto___18277__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18278)], 0));
} else {
}

var G__18279 = seq__18220;
var G__18280 = chunk__18221;
var G__18281 = count__18222;
var G__18282 = (i__18223 + (1));
seq__18220 = G__18279;
chunk__18221 = G__18280;
count__18222 = G__18281;
i__18223 = G__18282;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18220);
if(temp__4657__auto____$1){
var seq__18220__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18220__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18220__$1);
var G__18283 = cljs.core.chunk_rest(seq__18220__$1);
var G__18284 = c__8792__auto__;
var G__18285 = cljs.core.count(c__8792__auto__);
var G__18286 = (0);
seq__18220 = G__18283;
chunk__18221 = G__18284;
count__18222 = G__18285;
i__18223 = G__18286;
continue;
} else {
var role = cljs.core.first(seq__18220__$1);
var temp__4657__auto___18287__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18287__$2)){
var spec_18288 = temp__4657__auto___18287__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18288)], 0));
} else {
}

var G__18289 = cljs.core.next(seq__18220__$1);
var G__18290 = null;
var G__18291 = (0);
var G__18292 = (0);
seq__18220 = G__18289;
chunk__18221 = G__18290;
count__18222 = G__18291;
i__18223 = G__18292;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
