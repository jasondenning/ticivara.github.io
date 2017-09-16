// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14264){
var map__14265 = p__14264;
var map__14265__$1 = ((((!((map__14265 == null)))?((((map__14265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14265):map__14265);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14265__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14265__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14265__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__14265,map__14265__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_14267 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__14268 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_14267,map__14265,map__14265__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__14271,transformer){
var vec__14272 = p__14271;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14272,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14272,(1),null);
var G__14275 = text;
var G__14276 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__14275,G__14276) : transformer.call(null,G__14275,G__14276));
});})(_STAR_inhibit_separator_STAR_14267,map__14265,map__14265__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14268,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_14267;
}});
;})(map__14265,map__14265__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14279 = arguments.length;
var i__9123__auto___14280 = (0);
while(true){
if((i__9123__auto___14280 < len__9122__auto___14279)){
args__9129__auto__.push((arguments[i__9123__auto___14280]));

var G__14281 = (i__9123__auto___14280 + (1));
i__9123__auto___14280 = G__14281;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq14277){
var G__14278 = cljs.core.first(seq14277);
var seq14277__$1 = cljs.core.next(seq14277);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14278,seq14277__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__14282_14286 = cljs.core.seq(lines);
var chunk__14283_14287 = null;
var count__14284_14288 = (0);
var i__14285_14289 = (0);
while(true){
if((i__14285_14289 < count__14284_14288)){
var line_14290 = chunk__14283_14287.cljs$core$IIndexed$_nth$arity$2(null,i__14285_14289);
markdown.links.parse_reference_link(line_14290,references);

var G__14291 = seq__14282_14286;
var G__14292 = chunk__14283_14287;
var G__14293 = count__14284_14288;
var G__14294 = (i__14285_14289 + (1));
seq__14282_14286 = G__14291;
chunk__14283_14287 = G__14292;
count__14284_14288 = G__14293;
i__14285_14289 = G__14294;
continue;
} else {
var temp__4657__auto___14295 = cljs.core.seq(seq__14282_14286);
if(temp__4657__auto___14295){
var seq__14282_14296__$1 = temp__4657__auto___14295;
if(cljs.core.chunked_seq_QMARK_(seq__14282_14296__$1)){
var c__8792__auto___14297 = cljs.core.chunk_first(seq__14282_14296__$1);
var G__14298 = cljs.core.chunk_rest(seq__14282_14296__$1);
var G__14299 = c__8792__auto___14297;
var G__14300 = cljs.core.count(c__8792__auto___14297);
var G__14301 = (0);
seq__14282_14286 = G__14298;
chunk__14283_14287 = G__14299;
count__14284_14288 = G__14300;
i__14285_14289 = G__14301;
continue;
} else {
var line_14302 = cljs.core.first(seq__14282_14296__$1);
markdown.links.parse_reference_link(line_14302,references);

var G__14303 = cljs.core.next(seq__14282_14296__$1);
var G__14304 = null;
var G__14305 = (0);
var G__14306 = (0);
seq__14282_14286 = G__14303;
chunk__14283_14287 = G__14304;
count__14284_14288 = G__14305;
i__14285_14289 = G__14306;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null));
var seq__14307_14311 = cljs.core.seq(lines);
var chunk__14308_14312 = null;
var count__14309_14313 = (0);
var i__14310_14314 = (0);
while(true){
if((i__14310_14314 < count__14309_14313)){
var line_14315 = chunk__14308_14312.cljs$core$IIndexed$_nth$arity$2(null,i__14310_14314);
markdown.links.parse_footnote_link(line_14315,footnotes);

var G__14316 = seq__14307_14311;
var G__14317 = chunk__14308_14312;
var G__14318 = count__14309_14313;
var G__14319 = (i__14310_14314 + (1));
seq__14307_14311 = G__14316;
chunk__14308_14312 = G__14317;
count__14309_14313 = G__14318;
i__14310_14314 = G__14319;
continue;
} else {
var temp__4657__auto___14320 = cljs.core.seq(seq__14307_14311);
if(temp__4657__auto___14320){
var seq__14307_14321__$1 = temp__4657__auto___14320;
if(cljs.core.chunked_seq_QMARK_(seq__14307_14321__$1)){
var c__8792__auto___14322 = cljs.core.chunk_first(seq__14307_14321__$1);
var G__14323 = cljs.core.chunk_rest(seq__14307_14321__$1);
var G__14324 = c__8792__auto___14322;
var G__14325 = cljs.core.count(c__8792__auto___14322);
var G__14326 = (0);
seq__14307_14311 = G__14323;
chunk__14308_14312 = G__14324;
count__14309_14313 = G__14325;
i__14310_14314 = G__14326;
continue;
} else {
var line_14327 = cljs.core.first(seq__14307_14321__$1);
markdown.links.parse_footnote_link(line_14327,footnotes);

var G__14328 = cljs.core.next(seq__14307_14321__$1);
var G__14329 = null;
var G__14330 = (0);
var G__14331 = (0);
seq__14307_14311 = G__14328;
chunk__14308_14312 = G__14329;
count__14309_14313 = G__14330;
i__14310_14314 = G__14331;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__14333 = cljs.core.split_with((function (p1__14332_SHARP_){
return cljs.core.not_empty(p1__14332_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14333,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14333,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14336 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_14337 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14336,_STAR_formatter_STAR_14337){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14336,_STAR_formatter_STAR_14337))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14338 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14344_14363 = lines__$1;
var vec__14345_14364 = G__14344_14363;
var seq__14346_14365 = cljs.core.seq(vec__14345_14364);
var first__14347_14366 = cljs.core.first(seq__14346_14365);
var seq__14346_14367__$1 = cljs.core.next(seq__14346_14365);
var line_14368 = first__14347_14366;
var more_14369 = seq__14346_14367__$1;
var state_14370 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14344_14371__$1 = G__14344_14363;
var state_14372__$1 = state_14370;
while(true){
var vec__14348_14373 = G__14344_14371__$1;
var seq__14349_14374 = cljs.core.seq(vec__14348_14373);
var first__14350_14375 = cljs.core.first(seq__14349_14374);
var seq__14349_14376__$1 = cljs.core.next(seq__14349_14374);
var line_14377__$1 = first__14350_14375;
var more_14378__$1 = seq__14349_14376__$1;
var state_14379__$2 = state_14372__$1;
var line_14380__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_14379__$2))?"":line_14377__$1);
var state_14381__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14379__$2))?(function (){var G__14351 = html;
var G__14352 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14379__$2);
var G__14353 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_14379__$2);
var G__14354 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14379__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14351,G__14352,G__14353,G__14354) : transformer.call(null,G__14351,G__14352,G__14353,G__14354));
})():state_14379__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14378__$1))){
var G__14382 = more_14378__$1;
var G__14383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14355 = html;
var G__14356 = line_14380__$2;
var G__14357 = cljs.core.first(more_14378__$1);
var G__14358 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_14381__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14355,G__14356,G__14357,G__14358) : transformer.call(null,G__14355,G__14356,G__14357,G__14358));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14380__$2));
G__14344_14371__$1 = G__14382;
state_14372__$1 = G__14383;
continue;
} else {
var G__14359_14384 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14381__$3)));
var G__14360_14385 = line_14380__$2;
var G__14361_14386 = "";
var G__14362_14387 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14381__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14359_14384,G__14360_14385,G__14361_14386,G__14362_14387) : transformer.call(null,G__14359_14384,G__14360_14385,G__14361_14386,G__14362_14387));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_14337;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14336;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14390 = arguments.length;
var i__9123__auto___14391 = (0);
while(true){
if((i__9123__auto___14391 < len__9122__auto___14390)){
args__9129__auto__.push((arguments[i__9123__auto___14391]));

var G__14392 = (i__9123__auto___14391 + (1));
i__9123__auto___14391 = G__14392;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14388){
var G__14389 = cljs.core.first(seq14388);
var seq14388__$1 = cljs.core.next(seq14388);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14389,seq14388__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14395 = arguments.length;
var i__9123__auto___14396 = (0);
while(true){
if((i__9123__auto___14396 < len__9122__auto___14395)){
args__9129__auto__.push((arguments[i__9123__auto___14396]));

var G__14397 = (i__9123__auto___14396 + (1));
i__9123__auto___14396 = G__14397;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((1) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9130__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14393){
var G__14394 = cljs.core.first(seq14393);
var seq14393__$1 = cljs.core.next(seq14393);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14394,seq14393__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14399 = arguments.length;
var i__9123__auto___14400 = (0);
while(true){
if((i__9123__auto___14400 < len__9122__auto___14399)){
args__9129__auto__.push((arguments[i__9123__auto___14400]));

var G__14401 = (i__9123__auto___14400 + (1));
i__9123__auto___14400 = G__14401;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14398){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14398));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14403 = arguments.length;
var i__9123__auto___14404 = (0);
while(true){
if((i__9123__auto___14404 < len__9122__auto___14403)){
args__9129__auto__.push((arguments[i__9123__auto___14404]));

var G__14405 = (i__9123__auto___14404 + (1));
i__9123__auto___14404 = G__14405;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14402){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14402));
});

