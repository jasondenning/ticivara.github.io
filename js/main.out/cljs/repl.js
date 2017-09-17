// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18184){
var map__18185 = p__18184;
var map__18185__$1 = ((((!((map__18185 == null)))?((((map__18185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18185):map__18185);
var m = map__18185__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18185__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18185__$1,cljs.core.cst$kw$name);
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
var seq__18187_18209 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18188_18210 = null;
var count__18189_18211 = (0);
var i__18190_18212 = (0);
while(true){
if((i__18190_18212 < count__18189_18211)){
var f_18213 = chunk__18188_18210.cljs$core$IIndexed$_nth$arity$2(null,i__18190_18212);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18213], 0));

var G__18214 = seq__18187_18209;
var G__18215 = chunk__18188_18210;
var G__18216 = count__18189_18211;
var G__18217 = (i__18190_18212 + (1));
seq__18187_18209 = G__18214;
chunk__18188_18210 = G__18215;
count__18189_18211 = G__18216;
i__18190_18212 = G__18217;
continue;
} else {
var temp__4657__auto___18218 = cljs.core.seq(seq__18187_18209);
if(temp__4657__auto___18218){
var seq__18187_18219__$1 = temp__4657__auto___18218;
if(cljs.core.chunked_seq_QMARK_(seq__18187_18219__$1)){
var c__8792__auto___18220 = cljs.core.chunk_first(seq__18187_18219__$1);
var G__18221 = cljs.core.chunk_rest(seq__18187_18219__$1);
var G__18222 = c__8792__auto___18220;
var G__18223 = cljs.core.count(c__8792__auto___18220);
var G__18224 = (0);
seq__18187_18209 = G__18221;
chunk__18188_18210 = G__18222;
count__18189_18211 = G__18223;
i__18190_18212 = G__18224;
continue;
} else {
var f_18225 = cljs.core.first(seq__18187_18219__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18225], 0));

var G__18226 = cljs.core.next(seq__18187_18219__$1);
var G__18227 = null;
var G__18228 = (0);
var G__18229 = (0);
seq__18187_18209 = G__18226;
chunk__18188_18210 = G__18227;
count__18189_18211 = G__18228;
i__18190_18212 = G__18229;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18230 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18230], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_18230)))?cljs.core.second(arglists_18230):arglists_18230)], 0));
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
var seq__18191_18231 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__18192_18232 = null;
var count__18193_18233 = (0);
var i__18194_18234 = (0);
while(true){
if((i__18194_18234 < count__18193_18233)){
var vec__18195_18235 = chunk__18192_18232.cljs$core$IIndexed$_nth$arity$2(null,i__18194_18234);
var name_18236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18195_18235,(0),null);
var map__18198_18237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18195_18235,(1),null);
var map__18198_18238__$1 = ((((!((map__18198_18237 == null)))?((((map__18198_18237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18198_18237.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18198_18237):map__18198_18237);
var doc_18239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18198_18238__$1,cljs.core.cst$kw$doc);
var arglists_18240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18198_18238__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18236], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18240], 0));

if(cljs.core.truth_(doc_18239)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18239], 0));
} else {
}

var G__18241 = seq__18191_18231;
var G__18242 = chunk__18192_18232;
var G__18243 = count__18193_18233;
var G__18244 = (i__18194_18234 + (1));
seq__18191_18231 = G__18241;
chunk__18192_18232 = G__18242;
count__18193_18233 = G__18243;
i__18194_18234 = G__18244;
continue;
} else {
var temp__4657__auto___18245 = cljs.core.seq(seq__18191_18231);
if(temp__4657__auto___18245){
var seq__18191_18246__$1 = temp__4657__auto___18245;
if(cljs.core.chunked_seq_QMARK_(seq__18191_18246__$1)){
var c__8792__auto___18247 = cljs.core.chunk_first(seq__18191_18246__$1);
var G__18248 = cljs.core.chunk_rest(seq__18191_18246__$1);
var G__18249 = c__8792__auto___18247;
var G__18250 = cljs.core.count(c__8792__auto___18247);
var G__18251 = (0);
seq__18191_18231 = G__18248;
chunk__18192_18232 = G__18249;
count__18193_18233 = G__18250;
i__18194_18234 = G__18251;
continue;
} else {
var vec__18200_18252 = cljs.core.first(seq__18191_18246__$1);
var name_18253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200_18252,(0),null);
var map__18203_18254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18200_18252,(1),null);
var map__18203_18255__$1 = ((((!((map__18203_18254 == null)))?((((map__18203_18254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18203_18254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18203_18254):map__18203_18254);
var doc_18256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18203_18255__$1,cljs.core.cst$kw$doc);
var arglists_18257 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18203_18255__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18253], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18257], 0));

if(cljs.core.truth_(doc_18256)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18256], 0));
} else {
}

var G__18258 = cljs.core.next(seq__18191_18246__$1);
var G__18259 = null;
var G__18260 = (0);
var G__18261 = (0);
seq__18191_18231 = G__18258;
chunk__18192_18232 = G__18259;
count__18193_18233 = G__18260;
i__18194_18234 = G__18261;
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

var seq__18205 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__18206 = null;
var count__18207 = (0);
var i__18208 = (0);
while(true){
if((i__18208 < count__18207)){
var role = chunk__18206.cljs$core$IIndexed$_nth$arity$2(null,i__18208);
var temp__4657__auto___18262__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18262__$1)){
var spec_18263 = temp__4657__auto___18262__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18263)], 0));
} else {
}

var G__18264 = seq__18205;
var G__18265 = chunk__18206;
var G__18266 = count__18207;
var G__18267 = (i__18208 + (1));
seq__18205 = G__18264;
chunk__18206 = G__18265;
count__18207 = G__18266;
i__18208 = G__18267;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__18205);
if(temp__4657__auto____$1){
var seq__18205__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18205__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__18205__$1);
var G__18268 = cljs.core.chunk_rest(seq__18205__$1);
var G__18269 = c__8792__auto__;
var G__18270 = cljs.core.count(c__8792__auto__);
var G__18271 = (0);
seq__18205 = G__18268;
chunk__18206 = G__18269;
count__18207 = G__18270;
i__18208 = G__18271;
continue;
} else {
var role = cljs.core.first(seq__18205__$1);
var temp__4657__auto___18272__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18272__$2)){
var spec_18273 = temp__4657__auto___18272__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_18273)], 0));
} else {
}

var G__18274 = cljs.core.next(seq__18205__$1);
var G__18275 = null;
var G__18276 = (0);
var G__18277 = (0);
seq__18205 = G__18274;
chunk__18206 = G__18275;
count__18207 = G__18276;
i__18208 = G__18277;
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
