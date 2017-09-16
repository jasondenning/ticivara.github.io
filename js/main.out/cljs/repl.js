// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18217){
var map__18218 = p__18217;
var map__18218__$1 = ((((!((map__18218 == null)))?((((map__18218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18218):map__18218);
var m = map__18218__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18218__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18218__$1,cljs.core.cst$kw$name);
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
var seq__18220_18242 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18221_18243 = null;
var count__18222_18244 = (0);
var i__18223_18245 = (0);
while(true){
if((i__18223_18245 < count__18222_18244)){
var f_18246 = chunk__18221_18243.cljs$core$IIndexed$_nth$arity$2(null,i__18223_18245);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18246], 0));

var G__18247 = seq__18220_18242;
var G__18248 = chunk__18221_18243;
var G__18249 = count__18222_18244;
var G__18250 = (i__18223_18245 + (1));
seq__18220_18242 = G__18247;
chunk__18221_18243 = G__18248;
count__18222_18244 = G__18249;
i__18223_18245 = G__18250;
continue;
} else {
var temp__4657__auto___18251 = cljs.core.seq(seq__18220_18242);
if(temp__4657__auto___18251){
var seq__18220_18252__$1 = temp__4657__auto___18251;
if(cljs.core.chunked_seq_QMARK_(seq__18220_18252__$1)){
var c__8792__auto___18253 = cljs.core.chunk_first(seq__18220_18252__$1);
var G__18254 = cljs.core.chunk_rest(seq__18220_18252__$1);
var G__18255 = c__8792__auto___18253;
var G__18256 = cljs.core.count(c__8792__auto___18253);
var G__18257 = (0);
seq__18220_18242 = G__18254;
chunk__18221_18243 = G__18255;
count__18222_18244 = G__18256;
i__18223_18245 = G__18257;
continue;
} else {
var f_18258 = cljs.core.first(seq__18220_18252__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18258], 0));

var G__18259 = cljs.core.next(seq__18220_18252__$1);
var G__18260 = null;
var G__18261 = (0);
var G__18262 = (0);
seq__18220_18242 = G__18259;
chunk__18221_18243 = G__18260;
count__18222_18244 = G__18261;
i__18223_18245 = G__18262;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18263 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18263], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18263)))?cljs.core.second(arglists_18263):arglists_18263)], 0));
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
var seq__18224_18264 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18225_18265 = null;
var count__18226_18266 = (0);
var i__18227_18267 = (0);
while(true){
if((i__18227_18267 < count__18226_18266)){
var vec__18228_18268 = chunk__18225_18265.cljs$core$IIndexed$_nth$arity$2(null,i__18227_18267);
var name_18269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228_18268,(0),null);
var map__18231_18270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18228_18268,(1),null);
var map__18231_18271__$1 = ((((!((map__18231_18270 == null)))?((((map__18231_18270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18231_18270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18231_18270):map__18231_18270);
var doc_18272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231_18271__$1,cljs.core.cst$kw$doc);
var arglists_18273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18231_18271__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18269], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18273], 0));

if(cljs.core.truth_(doc_18272)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18272], 0));
} else {
}

var G__18274 = seq__18224_18264;
var G__18275 = chunk__18225_18265;
var G__18276 = count__18226_18266;
var G__18277 = (i__18227_18267 + (1));
seq__18224_18264 = G__18274;
chunk__18225_18265 = G__18275;
count__18226_18266 = G__18276;
i__18227_18267 = G__18277;
continue;
} else {
var temp__4657__auto___18278 = cljs.core.seq(seq__18224_18264);
if(temp__4657__auto___18278){
var seq__18224_18279__$1 = temp__4657__auto___18278;
if(cljs.core.chunked_seq_QMARK_(seq__18224_18279__$1)){
var c__8792__auto___18280 = cljs.core.chunk_first(seq__18224_18279__$1);
var G__18281 = cljs.core.chunk_rest(seq__18224_18279__$1);
var G__18282 = c__8792__auto___18280;
var G__18283 = cljs.core.count(c__8792__auto___18280);
var G__18284 = (0);
seq__18224_18264 = G__18281;
chunk__18225_18265 = G__18282;
count__18226_18266 = G__18283;
i__18227_18267 = G__18284;
continue;
} else {
var vec__18233_18285 = cljs.core.first(seq__18224_18279__$1);
var name_18286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18233_18285,(0),null);
var map__18236_18287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18233_18285,(1),null);
var map__18236_18288__$1 = ((((!((map__18236_18287 == null)))?((((map__18236_18287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18236_18287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18236_18287):map__18236_18287);
var doc_18289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236_18288__$1,cljs.core.cst$kw$doc);
var arglists_18290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236_18288__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18286], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18290], 0));

if(cljs.core.truth_(doc_18289)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18289], 0));
} else {
}

var G__18291 = cljs.core.next(seq__18224_18279__$1);
var G__18292 = null;
var G__18293 = (0);
var G__18294 = (0);
seq__18224_18264 = G__18291;
chunk__18225_18265 = G__18292;
count__18226_18266 = G__18293;
i__18227_18267 = G__18294;
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

var seq__18238 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18239 = null;
var count__18240 = (0);
var i__18241 = (0);
while(true){
if((i__18241 < count__18240)){
var role = chunk__18239.cljs$core$IIndexed$_nth$arity$2(null,i__18241);
var temp__4657__auto___18295__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18295__$1)){
var spec_18296 = temp__4657__auto___18295__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18296)], 0));
} else {
}

var G__18297 = seq__18238;
var G__18298 = chunk__18239;
var G__18299 = count__18240;
var G__18300 = (i__18241 + (1));
seq__18238 = G__18297;
chunk__18239 = G__18298;
count__18240 = G__18299;
i__18241 = G__18300;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18238);
if(temp__4657__auto____$1){
var seq__18238__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18238__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18238__$1);
var G__18301 = cljs.core.chunk_rest(seq__18238__$1);
var G__18302 = c__8792__auto__;
var G__18303 = cljs.core.count(c__8792__auto__);
var G__18304 = (0);
seq__18238 = G__18301;
chunk__18239 = G__18302;
count__18240 = G__18303;
i__18241 = G__18304;
continue;
} else {
var role = cljs.core.first(seq__18238__$1);
var temp__4657__auto___18305__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18305__$2)){
var spec_18306 = temp__4657__auto___18305__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18306)], 0));
} else {
}

var G__18307 = cljs.core.next(seq__18238__$1);
var G__18308 = null;
var G__18309 = (0);
var G__18310 = (0);
seq__18238 = G__18307;
chunk__18239 = G__18308;
count__18240 = G__18309;
i__18241 = G__18310;
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
