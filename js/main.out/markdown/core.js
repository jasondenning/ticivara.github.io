// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14368){
var map__14369 = p__14368;
var map__14369__$1 = ((((!((map__14369 == null)))?((((map__14369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14369):map__14369);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14369__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14369__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14369__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__14369,map__14369__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_14371 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__14372 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_14371,map__14369,map__14369__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__14375,transformer){
var vec__14376 = p__14375;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14376,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14376,(1),null);
var G__14379 = text;
var G__14380 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__14379,G__14380) : transformer.call(null,G__14379,G__14380));
});})(_STAR_inhibit_separator_STAR_14371,map__14369,map__14369__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_14371;
}});
;})(map__14369,map__14369__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14383 = arguments.length;
var i__9123__auto___14384 = (0);
while(true){
if((i__9123__auto___14384 < len__9122__auto___14383)){
args__9129__auto__.push((arguments[i__9123__auto___14384]));

var G__14385 = (i__9123__auto___14384 + (1));
i__9123__auto___14384 = G__14385;
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

markdown.core.format.cljs$lang$applyTo = (function (seq14381){
var G__14382 = cljs.core.first(seq14381);
var seq14381__$1 = cljs.core.next(seq14381);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14382,seq14381__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__14386_14390 = cljs.core.seq(lines);
var chunk__14387_14391 = null;
var count__14388_14392 = (0);
var i__14389_14393 = (0);
while(true){
if((i__14389_14393 < count__14388_14392)){
var line_14394 = chunk__14387_14391.cljs$core$IIndexed$_nth$arity$2(null,i__14389_14393);
markdown.links.parse_reference_link(line_14394,references);

var G__14395 = seq__14386_14390;
var G__14396 = chunk__14387_14391;
var G__14397 = count__14388_14392;
var G__14398 = (i__14389_14393 + (1));
seq__14386_14390 = G__14395;
chunk__14387_14391 = G__14396;
count__14388_14392 = G__14397;
i__14389_14393 = G__14398;
continue;
} else {
var temp__4657__auto___14399 = cljs.core.seq(seq__14386_14390);
if(temp__4657__auto___14399){
var seq__14386_14400__$1 = temp__4657__auto___14399;
if(cljs.core.chunked_seq_QMARK_(seq__14386_14400__$1)){
var c__8792__auto___14401 = cljs.core.chunk_first(seq__14386_14400__$1);
var G__14402 = cljs.core.chunk_rest(seq__14386_14400__$1);
var G__14403 = c__8792__auto___14401;
var G__14404 = cljs.core.count(c__8792__auto___14401);
var G__14405 = (0);
seq__14386_14390 = G__14402;
chunk__14387_14391 = G__14403;
count__14388_14392 = G__14404;
i__14389_14393 = G__14405;
continue;
} else {
var line_14406 = cljs.core.first(seq__14386_14400__$1);
markdown.links.parse_reference_link(line_14406,references);

var G__14407 = cljs.core.next(seq__14386_14400__$1);
var G__14408 = null;
var G__14409 = (0);
var G__14410 = (0);
seq__14386_14390 = G__14407;
chunk__14387_14391 = G__14408;
count__14388_14392 = G__14409;
i__14389_14393 = G__14410;
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
var seq__14411_14415 = cljs.core.seq(lines);
var chunk__14412_14416 = null;
var count__14413_14417 = (0);
var i__14414_14418 = (0);
while(true){
if((i__14414_14418 < count__14413_14417)){
var line_14419 = chunk__14412_14416.cljs$core$IIndexed$_nth$arity$2(null,i__14414_14418);
markdown.links.parse_footnote_link(line_14419,footnotes);

var G__14420 = seq__14411_14415;
var G__14421 = chunk__14412_14416;
var G__14422 = count__14413_14417;
var G__14423 = (i__14414_14418 + (1));
seq__14411_14415 = G__14420;
chunk__14412_14416 = G__14421;
count__14413_14417 = G__14422;
i__14414_14418 = G__14423;
continue;
} else {
var temp__4657__auto___14424 = cljs.core.seq(seq__14411_14415);
if(temp__4657__auto___14424){
var seq__14411_14425__$1 = temp__4657__auto___14424;
if(cljs.core.chunked_seq_QMARK_(seq__14411_14425__$1)){
var c__8792__auto___14426 = cljs.core.chunk_first(seq__14411_14425__$1);
var G__14427 = cljs.core.chunk_rest(seq__14411_14425__$1);
var G__14428 = c__8792__auto___14426;
var G__14429 = cljs.core.count(c__8792__auto___14426);
var G__14430 = (0);
seq__14411_14415 = G__14427;
chunk__14412_14416 = G__14428;
count__14413_14417 = G__14429;
i__14414_14418 = G__14430;
continue;
} else {
var line_14431 = cljs.core.first(seq__14411_14425__$1);
markdown.links.parse_footnote_link(line_14431,footnotes);

var G__14432 = cljs.core.next(seq__14411_14425__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14411_14415 = G__14432;
chunk__14412_14416 = G__14433;
count__14413_14417 = G__14434;
i__14414_14418 = G__14435;
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
var vec__14437 = cljs.core.split_with((function (p1__14436_SHARP_){
return cljs.core.not_empty(p1__14436_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14437,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14440 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_14441 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14440,_STAR_formatter_STAR_14441){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14440,_STAR_formatter_STAR_14441))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14442 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14442,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14442,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14448_14467 = lines__$1;
var vec__14449_14468 = G__14448_14467;
var seq__14450_14469 = cljs.core.seq(vec__14449_14468);
var first__14451_14470 = cljs.core.first(seq__14450_14469);
var seq__14450_14471__$1 = cljs.core.next(seq__14450_14469);
var line_14472 = first__14451_14470;
var more_14473 = seq__14450_14471__$1;
var state_14474 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14448_14475__$1 = G__14448_14467;
var state_14476__$1 = state_14474;
while(true){
var vec__14452_14477 = G__14448_14475__$1;
var seq__14453_14478 = cljs.core.seq(vec__14452_14477);
var first__14454_14479 = cljs.core.first(seq__14453_14478);
var seq__14453_14480__$1 = cljs.core.next(seq__14453_14478);
var line_14481__$1 = first__14454_14479;
var more_14482__$1 = seq__14453_14480__$1;
var state_14483__$2 = state_14476__$1;
var line_14484__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_14483__$2))?"":line_14481__$1);
var state_14485__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14483__$2))?(function (){var G__14455 = html;
var G__14456 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14483__$2);
var G__14457 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_14483__$2);
var G__14458 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14483__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14455,G__14456,G__14457,G__14458) : transformer.call(null,G__14455,G__14456,G__14457,G__14458));
})():state_14483__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14482__$1))){
var G__14486 = more_14482__$1;
var G__14487 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14459 = html;
var G__14460 = line_14484__$2;
var G__14461 = cljs.core.first(more_14482__$1);
var G__14462 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_14485__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14459,G__14460,G__14461,G__14462) : transformer.call(null,G__14459,G__14460,G__14461,G__14462));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14484__$2));
G__14448_14475__$1 = G__14486;
state_14476__$1 = G__14487;
continue;
} else {
var G__14463_14488 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14485__$3)));
var G__14464_14489 = line_14484__$2;
var G__14465_14490 = "";
var G__14466_14491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14485__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14463_14488,G__14464_14489,G__14465_14490,G__14466_14491) : transformer.call(null,G__14463_14488,G__14464_14489,G__14465_14490,G__14466_14491));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_14441;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14440;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14494 = arguments.length;
var i__9123__auto___14495 = (0);
while(true){
if((i__9123__auto___14495 < len__9122__auto___14494)){
args__9129__auto__.push((arguments[i__9123__auto___14495]));

var G__14496 = (i__9123__auto___14495 + (1));
i__9123__auto___14495 = G__14496;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14492){
var G__14493 = cljs.core.first(seq14492);
var seq14492__$1 = cljs.core.next(seq14492);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14493,seq14492__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14499 = arguments.length;
var i__9123__auto___14500 = (0);
while(true){
if((i__9123__auto___14500 < len__9122__auto___14499)){
args__9129__auto__.push((arguments[i__9123__auto___14500]));

var G__14501 = (i__9123__auto___14500 + (1));
i__9123__auto___14500 = G__14501;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14497){
var G__14498 = cljs.core.first(seq14497);
var seq14497__$1 = cljs.core.next(seq14497);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14498,seq14497__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14503 = arguments.length;
var i__9123__auto___14504 = (0);
while(true){
if((i__9123__auto___14504 < len__9122__auto___14503)){
args__9129__auto__.push((arguments[i__9123__auto___14504]));

var G__14505 = (i__9123__auto___14504 + (1));
i__9123__auto___14504 = G__14505;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14502){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14502));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14507 = arguments.length;
var i__9123__auto___14508 = (0);
while(true){
if((i__9123__auto___14508 < len__9122__auto___14507)){
args__9129__auto__.push((arguments[i__9123__auto___14508]));

var G__14509 = (i__9123__auto___14508 + (1));
i__9123__auto___14508 = G__14509;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14506){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14506));
});

