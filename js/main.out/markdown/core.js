// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__14391){
var map__14392 = p__14391;
var map__14392__$1 = ((((!((map__14392 == null)))?((((map__14392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14392):map__14392);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14392__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__14392,map__14392__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR_14394 = markdown.common._STAR_inhibit_separator_STAR_;
markdown.common._STAR_inhibit_separator_STAR_ = inhibit_separator;

try{var vec__14395 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR_14394,map__14392,map__14392__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__14398,transformer){
var vec__14399 = p__14398;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399,(1),null);
var G__14402 = text;
var G__14403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__14402,G__14403) : transformer.call(null,G__14402,G__14403));
});})(_STAR_inhibit_separator_STAR_14394,map__14392,map__14392__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__7953__auto__ = replacement_transformers;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR_14394;
}});
;})(map__14392,map__14392__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14406 = arguments.length;
var i__9123__auto___14407 = (0);
while(true){
if((i__9123__auto___14407 < len__9122__auto___14406)){
args__9129__auto__.push((arguments[i__9123__auto___14407]));

var G__14408 = (i__9123__auto___14407 + (1));
i__9123__auto___14407 = G__14408;
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

markdown.core.format.cljs$lang$applyTo = (function (seq14404){
var G__14405 = cljs.core.first(seq14404);
var seq14404__$1 = cljs.core.next(seq14404);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__14405,seq14404__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__14409_14413 = cljs.core.seq(lines);
var chunk__14410_14414 = null;
var count__14411_14415 = (0);
var i__14412_14416 = (0);
while(true){
if((i__14412_14416 < count__14411_14415)){
var line_14417 = chunk__14410_14414.cljs$core$IIndexed$_nth$arity$2(null,i__14412_14416);
markdown.links.parse_reference_link(line_14417,references);

var G__14418 = seq__14409_14413;
var G__14419 = chunk__14410_14414;
var G__14420 = count__14411_14415;
var G__14421 = (i__14412_14416 + (1));
seq__14409_14413 = G__14418;
chunk__14410_14414 = G__14419;
count__14411_14415 = G__14420;
i__14412_14416 = G__14421;
continue;
} else {
var temp__4657__auto___14422 = cljs.core.seq(seq__14409_14413);
if(temp__4657__auto___14422){
var seq__14409_14423__$1 = temp__4657__auto___14422;
if(cljs.core.chunked_seq_QMARK_(seq__14409_14423__$1)){
var c__8792__auto___14424 = cljs.core.chunk_first(seq__14409_14423__$1);
var G__14425 = cljs.core.chunk_rest(seq__14409_14423__$1);
var G__14426 = c__8792__auto___14424;
var G__14427 = cljs.core.count(c__8792__auto___14424);
var G__14428 = (0);
seq__14409_14413 = G__14425;
chunk__14410_14414 = G__14426;
count__14411_14415 = G__14427;
i__14412_14416 = G__14428;
continue;
} else {
var line_14429 = cljs.core.first(seq__14409_14423__$1);
markdown.links.parse_reference_link(line_14429,references);

var G__14430 = cljs.core.next(seq__14409_14423__$1);
var G__14431 = null;
var G__14432 = (0);
var G__14433 = (0);
seq__14409_14413 = G__14430;
chunk__14410_14414 = G__14431;
count__14411_14415 = G__14432;
i__14412_14416 = G__14433;
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
var seq__14434_14438 = cljs.core.seq(lines);
var chunk__14435_14439 = null;
var count__14436_14440 = (0);
var i__14437_14441 = (0);
while(true){
if((i__14437_14441 < count__14436_14440)){
var line_14442 = chunk__14435_14439.cljs$core$IIndexed$_nth$arity$2(null,i__14437_14441);
markdown.links.parse_footnote_link(line_14442,footnotes);

var G__14443 = seq__14434_14438;
var G__14444 = chunk__14435_14439;
var G__14445 = count__14436_14440;
var G__14446 = (i__14437_14441 + (1));
seq__14434_14438 = G__14443;
chunk__14435_14439 = G__14444;
count__14436_14440 = G__14445;
i__14437_14441 = G__14446;
continue;
} else {
var temp__4657__auto___14447 = cljs.core.seq(seq__14434_14438);
if(temp__4657__auto___14447){
var seq__14434_14448__$1 = temp__4657__auto___14447;
if(cljs.core.chunked_seq_QMARK_(seq__14434_14448__$1)){
var c__8792__auto___14449 = cljs.core.chunk_first(seq__14434_14448__$1);
var G__14450 = cljs.core.chunk_rest(seq__14434_14448__$1);
var G__14451 = c__8792__auto___14449;
var G__14452 = cljs.core.count(c__8792__auto___14449);
var G__14453 = (0);
seq__14434_14438 = G__14450;
chunk__14435_14439 = G__14451;
count__14436_14440 = G__14452;
i__14437_14441 = G__14453;
continue;
} else {
var line_14454 = cljs.core.first(seq__14434_14448__$1);
markdown.links.parse_footnote_link(line_14454,footnotes);

var G__14455 = cljs.core.next(seq__14434_14448__$1);
var G__14456 = null;
var G__14457 = (0);
var G__14458 = (0);
seq__14434_14438 = G__14455;
chunk__14435_14439 = G__14456;
count__14436_14440 = G__14457;
i__14437_14441 = G__14458;
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
var vec__14460 = cljs.core.split_with((function (p1__14459_SHARP_){
return cljs.core.not_empty(p1__14459_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14460,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14460,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_14463 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR_14464 = markdown.transformers._STAR_formatter_STAR_;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_14463,_STAR_formatter_STAR_14464){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR_14463,_STAR_formatter_STAR_14464))
;

markdown.transformers._STAR_formatter_STAR_ = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__14465 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14465,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__14471_14490 = lines__$1;
var vec__14472_14491 = G__14471_14490;
var seq__14473_14492 = cljs.core.seq(vec__14472_14491);
var first__14474_14493 = cljs.core.first(seq__14473_14492);
var seq__14473_14494__$1 = cljs.core.next(seq__14473_14492);
var line_14495 = first__14474_14493;
var more_14496 = seq__14473_14494__$1;
var state_14497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__14471_14498__$1 = G__14471_14490;
var state_14499__$1 = state_14497;
while(true){
var vec__14475_14500 = G__14471_14498__$1;
var seq__14476_14501 = cljs.core.seq(vec__14475_14500);
var first__14477_14502 = cljs.core.first(seq__14476_14501);
var seq__14476_14503__$1 = cljs.core.next(seq__14476_14501);
var line_14504__$1 = first__14477_14502;
var more_14505__$1 = seq__14476_14503__$1;
var state_14506__$2 = state_14499__$1;
var line_14507__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_14506__$2))?"":line_14504__$1);
var state_14508__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14506__$2))?(function (){var G__14478 = html;
var G__14479 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_14506__$2);
var G__14480 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_14506__$2);
var G__14481 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_14506__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14478,G__14479,G__14480,G__14481) : transformer.call(null,G__14478,G__14479,G__14480,G__14481));
})():state_14506__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_14505__$1))){
var G__14509 = more_14505__$1;
var G__14510 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__14482 = html;
var G__14483 = line_14507__$2;
var G__14484 = cljs.core.first(more_14505__$1);
var G__14485 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_14508__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14482,G__14483,G__14484,G__14485) : transformer.call(null,G__14482,G__14483,G__14484,G__14485));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_14507__$2));
G__14471_14498__$1 = G__14509;
state_14499__$1 = G__14510;
continue;
} else {
var G__14486_14511 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_14508__$3)));
var G__14487_14512 = line_14507__$2;
var G__14488_14513 = "";
var G__14489_14514 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_14508__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__14486_14511,G__14487_14512,G__14488_14513,G__14489_14514) : transformer.call(null,G__14486_14511,G__14487_14512,G__14488_14513,G__14489_14514));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR_14464;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_14463;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14517 = arguments.length;
var i__9123__auto___14518 = (0);
while(true){
if((i__9123__auto___14518 < len__9122__auto___14517)){
args__9129__auto__.push((arguments[i__9123__auto___14518]));

var G__14519 = (i__9123__auto___14518 + (1));
i__9123__auto___14518 = G__14519;
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

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq14515){
var G__14516 = cljs.core.first(seq14515);
var seq14515__$1 = cljs.core.next(seq14515);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__14516,seq14515__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14522 = arguments.length;
var i__9123__auto___14523 = (0);
while(true){
if((i__9123__auto___14523 < len__9122__auto___14522)){
args__9129__auto__.push((arguments[i__9123__auto___14523]));

var G__14524 = (i__9123__auto___14523 + (1));
i__9123__auto___14523 = G__14524;
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

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq14520){
var G__14521 = cljs.core.first(seq14520);
var seq14520__$1 = cljs.core.next(seq14520);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__14521,seq14520__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14526 = arguments.length;
var i__9123__auto___14527 = (0);
while(true){
if((i__9123__auto___14527 < len__9122__auto___14526)){
args__9129__auto__.push((arguments[i__9123__auto___14527]));

var G__14528 = (i__9123__auto___14527 + (1));
i__9123__auto___14527 = G__14528;
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

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq14525){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14525));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14530 = arguments.length;
var i__9123__auto___14531 = (0);
while(true){
if((i__9123__auto___14531 < len__9122__auto___14530)){
args__9129__auto__.push((arguments[i__9123__auto___14531]));

var G__14532 = (i__9123__auto___14531 + (1));
i__9123__auto___14531 = G__14532;
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

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq14529){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14529));
});

