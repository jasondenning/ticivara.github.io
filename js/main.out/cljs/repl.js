// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18201){
var map__18202 = p__18201;
var map__18202__$1 = ((((!((map__18202 == null)))?((((map__18202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18202):map__18202);
var m = map__18202__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18202__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18202__$1,cljs.core.cst$kw$name);
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
var seq__18204_18226 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18205_18227 = null;
var count__18206_18228 = (0);
var i__18207_18229 = (0);
while(true){
if((i__18207_18229 < count__18206_18228)){
var f_18230 = chunk__18205_18227.cljs$core$IIndexed$_nth$arity$2(null,i__18207_18229);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18230], 0));

var G__18231 = seq__18204_18226;
var G__18232 = chunk__18205_18227;
var G__18233 = count__18206_18228;
var G__18234 = (i__18207_18229 + (1));
seq__18204_18226 = G__18231;
chunk__18205_18227 = G__18232;
count__18206_18228 = G__18233;
i__18207_18229 = G__18234;
continue;
} else {
var temp__4657__auto___18235 = cljs.core.seq(seq__18204_18226);
if(temp__4657__auto___18235){
var seq__18204_18236__$1 = temp__4657__auto___18235;
if(cljs.core.chunked_seq_QMARK_(seq__18204_18236__$1)){
var c__8792__auto___18237 = cljs.core.chunk_first(seq__18204_18236__$1);
var G__18238 = cljs.core.chunk_rest(seq__18204_18236__$1);
var G__18239 = c__8792__auto___18237;
var G__18240 = cljs.core.count(c__8792__auto___18237);
var G__18241 = (0);
seq__18204_18226 = G__18238;
chunk__18205_18227 = G__18239;
count__18206_18228 = G__18240;
i__18207_18229 = G__18241;
continue;
} else {
var f_18242 = cljs.core.first(seq__18204_18236__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18242], 0));

var G__18243 = cljs.core.next(seq__18204_18236__$1);
var G__18244 = null;
var G__18245 = (0);
var G__18246 = (0);
seq__18204_18226 = G__18243;
chunk__18205_18227 = G__18244;
count__18206_18228 = G__18245;
i__18207_18229 = G__18246;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18247 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18247], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18247)))?cljs.core.second(arglists_18247):arglists_18247)], 0));
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
var seq__18208_18248 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18209_18249 = null;
var count__18210_18250 = (0);
var i__18211_18251 = (0);
while(true){
if((i__18211_18251 < count__18210_18250)){
var vec__18212_18252 = chunk__18209_18249.cljs$core$IIndexed$_nth$arity$2(null,i__18211_18251);
var name_18253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212_18252,(0),null);
var map__18215_18254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18212_18252,(1),null);
var map__18215_18255__$1 = ((((!((map__18215_18254 == null)))?((((map__18215_18254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18215_18254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18215_18254):map__18215_18254);
var doc_18256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18215_18255__$1,cljs.core.cst$kw$doc);
var arglists_18257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18215_18255__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18253], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18257], 0));

if(cljs.core.truth_(doc_18256)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18256], 0));
} else {
}

var G__18258 = seq__18208_18248;
var G__18259 = chunk__18209_18249;
var G__18260 = count__18210_18250;
var G__18261 = (i__18211_18251 + (1));
seq__18208_18248 = G__18258;
chunk__18209_18249 = G__18259;
count__18210_18250 = G__18260;
i__18211_18251 = G__18261;
continue;
} else {
var temp__4657__auto___18262 = cljs.core.seq(seq__18208_18248);
if(temp__4657__auto___18262){
var seq__18208_18263__$1 = temp__4657__auto___18262;
if(cljs.core.chunked_seq_QMARK_(seq__18208_18263__$1)){
var c__8792__auto___18264 = cljs.core.chunk_first(seq__18208_18263__$1);
var G__18265 = cljs.core.chunk_rest(seq__18208_18263__$1);
var G__18266 = c__8792__auto___18264;
var G__18267 = cljs.core.count(c__8792__auto___18264);
var G__18268 = (0);
seq__18208_18248 = G__18265;
chunk__18209_18249 = G__18266;
count__18210_18250 = G__18267;
i__18211_18251 = G__18268;
continue;
} else {
var vec__18217_18269 = cljs.core.first(seq__18208_18263__$1);
var name_18270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18217_18269,(0),null);
var map__18220_18271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18217_18269,(1),null);
var map__18220_18272__$1 = ((((!((map__18220_18271 == null)))?((((map__18220_18271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18220_18271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18220_18271):map__18220_18271);
var doc_18273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220_18272__$1,cljs.core.cst$kw$doc);
var arglists_18274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18220_18272__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18270], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18274], 0));

if(cljs.core.truth_(doc_18273)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18273], 0));
} else {
}

var G__18275 = cljs.core.next(seq__18208_18263__$1);
var G__18276 = null;
var G__18277 = (0);
var G__18278 = (0);
seq__18208_18248 = G__18275;
chunk__18209_18249 = G__18276;
count__18210_18250 = G__18277;
i__18211_18251 = G__18278;
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

var seq__18222 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18223 = null;
var count__18224 = (0);
var i__18225 = (0);
while(true){
if((i__18225 < count__18224)){
var role = chunk__18223.cljs$core$IIndexed$_nth$arity$2(null,i__18225);
var temp__4657__auto___18279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18279__$1)){
var spec_18280 = temp__4657__auto___18279__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18280)], 0));
} else {
}

var G__18281 = seq__18222;
var G__18282 = chunk__18223;
var G__18283 = count__18224;
var G__18284 = (i__18225 + (1));
seq__18222 = G__18281;
chunk__18223 = G__18282;
count__18224 = G__18283;
i__18225 = G__18284;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18222);
if(temp__4657__auto____$1){
var seq__18222__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18222__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18222__$1);
var G__18285 = cljs.core.chunk_rest(seq__18222__$1);
var G__18286 = c__8792__auto__;
var G__18287 = cljs.core.count(c__8792__auto__);
var G__18288 = (0);
seq__18222 = G__18285;
chunk__18223 = G__18286;
count__18224 = G__18287;
i__18225 = G__18288;
continue;
} else {
var role = cljs.core.first(seq__18222__$1);
var temp__4657__auto___18289__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18289__$2)){
var spec_18290 = temp__4657__auto___18289__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18290)], 0));
} else {
}

var G__18291 = cljs.core.next(seq__18222__$1);
var G__18292 = null;
var G__18293 = (0);
var G__18294 = (0);
seq__18222 = G__18291;
chunk__18223 = G__18292;
count__18224 = G__18293;
i__18225 = G__18294;
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
