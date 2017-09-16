// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(text,link,state){
var vec__14052 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),link);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14052,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14052,(1),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<a href='"),link__$1,cljs.core.seq("'"),(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str," title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title)),">")):cljs.core.seq(">")),text,cljs.core.seq("</a>"),state], 0));
});
markdown.links.img = (function markdown$links$img(var_args){
var args__9129__auto__ = [];
var len__9122__auto___14063 = arguments.length;
var i__9123__auto___14064 = (0);
while(true){
if((i__9123__auto___14064 < len__9122__auto___14063)){
args__9129__auto__.push((arguments[i__9123__auto___14064]));

var G__14065 = (i__9123__auto___14064 + (1));
i__9123__auto___14064 = G__14065;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((3) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((3)),(0),null)):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9130__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__14059){
var vec__14060 = p__14059;
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14060,(0),null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("<img src=\""),url,cljs.core.seq("\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty(title))?cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"\" title=",clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)," />")):cljs.core.seq("\" />")),state], 0));
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq14055){
var G__14056 = cljs.core.first(seq14055);
var seq14055__$1 = cljs.core.next(seq14055);
var G__14057 = cljs.core.first(seq14055__$1);
var seq14055__$2 = cljs.core.next(seq14055__$1);
var G__14058 = cljs.core.first(seq14055__$2);
var seq14055__$3 = cljs.core.next(seq14055__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__14056,G__14057,G__14058,seq14055__$3);
});

markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),xs))){
var xs__$1 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),xs);
var vec__14066 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(0),null);
var xy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14066,(1),null);
var vec__14069 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),xy));
var url_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(0),null);
var zy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14069,(1),null);
var vec__14072 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14072,(1),null);
var vec__14075 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.not_empty(title)], 0));
var new_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14075,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14075,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic("[",new_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(zy)], 0)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14079_SHARP_,p2__14078_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(p2__14078_SHARP_,p1__14079_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__14080){
var map__14081 = p__14080;
var map__14081__$1 = ((((!((map__14081 == null)))?((((map__14081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14081.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14081):map__14081);
var state = map__14081__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14081__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__7953__auto__ = code;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq(text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(out),loop_state], null);
} else {
var vec__14083 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14083,(1),null);
var vec__14086 = markdown.links.handle_img_link(xs,loop_state);
var xs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(0),null);
var loop_state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14086,(1),null);
var vec__14089 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(0),null);
var ys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14089,(1),null);
var vec__14092 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092,(0),null);
var zs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14092,(1),null);
var vec__14095 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(0),null);
var tail = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14095,(1),null);
if(((cljs.core.count(link__$1) < (2))) || ((cljs.core.count(tail) < (1))) || ((cljs.core.count(dud) > (1)))){
var G__14107 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([markdown.links.process_link_title(title,state),dud,link__$1], 0));
var G__14108 = tail;
var G__14109 = loop_state__$1;
out = G__14107;
tokens = G__14108;
loop_state = G__14109;
continue;
} else {
if((cljs.core.not(img_QMARK_)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!"))){
var vec__14098 = markdown.links.href(cljs.core.rest(markdown.links.process_link_title(title,state)),cljs.core.rest(link__$1),loop_state__$1);
var link_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14098,(1),null);
var G__14110 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,head,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([link_text], 0));
var G__14111 = cljs.core.rest(tail);
var G__14112 = new_loop_state;
out = G__14110;
tokens = G__14111;
loop_state = G__14112;
continue;
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = img_QMARK_;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(head),"!");
} else {
return and__7941__auto__;
}
})())){
var alt = cljs.core.rest(title);
var vec__14101 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.rest(link__$1));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14101,(1),null);
var title__$2 = markdown.links.process_link_title(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(title__$1)),loop_state__$1);
var vec__14104 = markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(alt,url,loop_state__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title__$2], 0));
var img_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(0),null);
var new_loop_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14104,(1),null);
var G__14113 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(out,cljs.core.butlast(head),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([img_text], 0));
var G__14114 = cljs.core.rest(tail);
var G__14115 = new_loop_state;
out = G__14113;
tokens = G__14114;
loop_state = G__14115;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(out,tokens)),loop_state__$1], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link(false);
markdown.links.image = markdown.links.make_link(true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find(/^\[[a-zA-Z0-9 \-_\.]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.reference(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(references,cljs.core.assoc,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1))),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__14116 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(reference,/\]\s*/,(2));
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14116,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14116,(1),null);
var vec__14119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,id);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14119,(1),null);
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(alt)?[" title='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(alt,(1),(cljs.core.count(alt) - (1)))),"'"].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(title,(1))),"</a>"].join('');
});
markdown.links.encode_links = (function markdown$links$encode_links(links,i){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14122,link){
var vec__14123 = p__14122;
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(0),null);
var encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encoded,markdown.common.gen_token(i__$1),link)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.PersistentArrayMap.EMPTY], null),links));
});
markdown.links.parse_links = (function markdown$links$parse_links(references,links){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14126){
var vec__14127 = p__14126;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14127,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,markdown.links.replace_reference_link(references,v)], null);
}),links));
});
markdown.links.freeze_links = (function markdown$links$freeze_links(references,text,state){
var links = cljs.core.re_seq(/\[[^\]]+\]\s*\[[a-zA-Z0-9 \-_\.]+\]/,text);
var encoded_links = markdown.links.encode_links(links,(function (){var G__14131 = cljs.core.cst$kw$frozen_DASH_strings.cljs$core$IFn$_invoke$arity$1(state);
var fexpr__14130 = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.PersistentVector.EMPTY);
return (fexpr__14130.cljs$core$IFn$_invoke$arity$1 ? fexpr__14130.cljs$core$IFn$_invoke$arity$1(G__14131) : fexpr__14130.call(null,G__14131));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (links,encoded_links){
return (function (s,p__14132){
var vec__14133 = p__14132;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(0),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(1),null);
return clojure.string.replace(s,link,id);
});})(links,encoded_links))
,text,encoded_links),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$frozen_DASH_strings,cljs.core.merge,markdown.links.parse_links(references,encoded_links))], null);
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__14136){
var map__14137 = p__14136;
var map__14137__$1 = ((((!((map__14137 == null)))?((((map__14137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14137):map__14137);
var state = map__14137__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14137__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14137__$1,cljs.core.cst$kw$codeblock);
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14137__$1,cljs.core.cst$kw$references);
if(cljs.core.truth_((function (){var or__7953__auto__ = (references == null);
if(or__7953__auto__){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = code;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return markdown.links.freeze_links(references,text,state);

}
}
});
markdown.links.implicit_reference_link = (function markdown$links$implicit_reference_link(text,state){
var replacement_text = clojure.string.replace(text,/\[([^\]]+)\]\[\]/,"[$1][$1]");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [replacement_text,state], null);
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find(/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim(line);
var temp__4657__auto__ = markdown.links.footnote(trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$unprocessed,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(link,(0),(cljs.core.count(link) - (1)))], null),markdown.links.parse_reference(trimmed,(cljs.core.count(link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = cljs.core.cst$kw$next_DASH_fn_DASH_id.cljs$core$IFn$_invoke$arity$1(footnotes);
var link = ["#fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id)].join('');
return ["<a href='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(link),"' id='fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"'><sup>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn_id),"</sup></a>"].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__14139){
while(true){
var map__14140 = p__14139;
var map__14140__$1 = ((((!((map__14140 == null)))?((((map__14140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14140):map__14140);
var state = map__14140__$1;
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14140__$1,cljs.core.cst$kw$footnotes);
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find(matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first(text,matcher,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$processed,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$next_DASH_fn_DASH_id], null))], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footnotes,cljs.core.cst$kw$unprocessed,match], null)));
var G__14142 = next_text;
var G__14143 = next_state;
text = G__14142;
p__14139 = G__14143;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__14144){
var map__14145 = p__14144;
var map__14145__$1 = ((((!((map__14145 == null)))?((((map__14145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14145):map__14145);
var state = map__14145__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.cst$kw$codeblock);
var footnotes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14145__$1,cljs.core.cst$kw$footnotes);
if(cljs.core.truth_((function (){var or__7953__auto__ = (cljs.core.cst$kw$unprocessed.cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__7953__auto__){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = code;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote(clojure.string.trim(text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__14147 = markdown.links.replace_all_footnote_links(text,state);
var text__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14147,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});
markdown.links.make_image_reference = (function markdown$links$make_image_reference(src,alt,title){
var title_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(title)?["\" title=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(title)),""].join(''):"\""))].join('');
return ["<img src=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),"\" alt=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title_text)," />"].join('');
});
markdown.links.image_reference_link = (function markdown$links$image_reference_link(text,p__14150){
var map__14151 = p__14150;
var map__14151__$1 = ((((!((map__14151 == null)))?((((map__14151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14151):map__14151);
var state = map__14151__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14151__$1,cljs.core.cst$kw$references);
if((cljs.core.not(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(state))) || (cljs.core.empty_QMARK_(references))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var matcher = /!\[([^\]]+)\]\s*(\[[a-zA-Z0-9 ]+\])/;
var matches = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.re_seq(matcher,text));
var ms = matches;
var new_text = text;
while(true){
if(cljs.core.seq(ms)){
var vec__14153 = cljs.core.first(ms);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(0),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(1),null);
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14153,(2),null);
var refval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(references,ref);
var im = markdown.links.make_image_reference(cljs.core.first(refval),alt,cljs.core.second(refval));
var G__14156 = cljs.core.rest(ms);
var G__14157 = clojure.string.replace(new_text,m,im);
ms = G__14156;
new_text = G__14157;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_text,state], null);
}
break;
}
}
});
