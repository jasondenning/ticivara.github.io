// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.links');
goog.require('markdown.lists');
goog.require('markdown.tables');
goog.require('markdown.common');
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim(text):null);
var and__7941__auto__ = cljs.core.not_empty(trimmed);
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.every_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([type]),trimmed);
} else {
return and__7941__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_(text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,p__14193){
var map__14194 = p__14193;
var map__14194__$1 = ((((!((map__14194 == null)))?((((map__14194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14194.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14194):map__14194);
var state = map__14194__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14194__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__7953__auto__ = code;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__7953__auto__ = markdown.transformers.h1_QMARK_(text);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return markdown.transformers.h2_QMARK_(text);
}
})())?"":text),((clojure.string.blank_QMARK_(text))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$hr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$heading], 0)):state)], null);
}
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_(remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(buf),state], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__14196 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq("<sup>"),cljs.core.second(remaining),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq("</sup>")], 0)));
var G__14197 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),remaining);
buf = G__14196;
remaining = G__14197;
continue;
} else {
var G__14198 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.first(remaining));
var G__14199 = cljs.core.rest(remaining);
buf = G__14198;
remaining = G__14199;
continue;

}
}
break;
}
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,p__14200){
var map__14201 = p__14200;
var map__14201__$1 = ((((!((map__14201 == null)))?((((map__14201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14201):map__14201);
var state = map__14201__$1;
var buf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,cljs.core.cst$kw$buf);
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,cljs.core.cst$kw$next_DASH_line);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,cljs.core.cst$kw$codeblock);
var heading_anchors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14201__$1,cljs.core.cst$kw$heading_DASH_anchors);
if(cljs.core.truth_((function (){var or__7953__auto__ = codeblock;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return code;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_((function (){var or__7953__auto__ = buf;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h1>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h1>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_((function (){var or__7953__auto__ = buf;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return next_line;
}
})()))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<h2>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</h2>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$heading,true)], null);
} else {
var temp__4655__auto__ = markdown.common.make_heading(text,heading_anchors);
if(cljs.core.truth_(temp__4655__auto__)){
var heading = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$inline_DASH_heading,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__14203){
var map__14204 = p__14203;
var map__14204__$1 = ((((!((map__14204 == null)))?((((map__14204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14204):map__14204);
var state = map__14204__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14204__$1,cljs.core.cst$kw$code);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14204__$1,cljs.core.cst$kw$lists);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),text))) && (cljs.core.not((function (){var or__7953__auto__ = code;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return lists;
}
})())))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),text))),"<br />"].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,p__14207){
var map__14208 = p__14207;
var map__14208__$1 = ((((!((map__14208 == null)))?((((map__14208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14208):map__14208);
var state = map__14208__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$code);
var frozen_strings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14208__$1,cljs.core.cst$kw$frozen_DASH_strings);
if(cljs.core.truth_(code)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var currently_frozen = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$frozen_DASH_strings,frozen_strings], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace(text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,((function (currently_frozen,map__14208,map__14208__$1,state,code,frozen_strings){
return (function (p1__14206_SHARP_){
var vec__14210 = markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14206_SHARP_,(1),(cljs.core.count(p1__14206_SHARP_) - (1))),cljs.core.deref(currently_frozen)], 0));
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(0),null);
var frozen_strings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(1),null);
cljs.core.vreset_BANG_(currently_frozen,frozen_strings__$1);

return ["<a href=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"</a>"].join('');
});})(currently_frozen,map__14208,map__14208__$1,state,code,frozen_strings))
),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,cljs.core.deref(currently_frozen)], 0))], null);
}
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$codeblock.cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace(text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__14213_SHARP_){
var encoded = (cljs.core.truth_(cljs.core.cst$kw$clojurescript.cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14213_SHARP_,(1),(cljs.core.count(p1__14213_SHARP_) - (1))):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if((cljs.core.rand.cljs$core$IFn$_invoke$arity$0() > 0.5)){
var G__14214 = "&#x%02x;";
var G__14215 = (c | (0));
return (markdown.transformers._STAR_formatter_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.transformers._STAR_formatter_STAR_.cljs$core$IFn$_invoke$arity$2(G__14214,G__14215) : markdown.transformers._STAR_formatter_STAR_.call(null,G__14214,G__14215));
} else {
return c;
}
}),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p1__14213_SHARP_,(1),(cljs.core.count(p1__14213_SHARP_) - (1))))));
return ["<a href=\"mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded),"</a>"].join('');
}))),state], null);
});
markdown.transformers.set_line_state = (function markdown$transformers$set_line_state(text,p__14216){
var map__14217 = p__14216;
var map__14217__$1 = ((((!((map__14217 == null)))?((((map__14217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14217):map__14217);
var state = map__14217__$1;
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14217__$1,cljs.core.cst$kw$inline_DASH_heading);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$inline_DASH_heading),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$temp,cljs.core.cst$kw$inline_DASH_heading], null),inline_heading)], null);
});
markdown.transformers.clear_line_state = (function markdown$transformers$clear_line_state(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$temp)], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__7941__auto__ = cljs.core.not(last_line_empty_QMARK_);
if(and__7941__auto__){
return cljs.core.not_empty(text);
} else {
return and__7941__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join('');
} else {
return text;
}
});
markdown.transformers.open_paragraph = (function markdown$transformers$open_paragraph(text,p__14219){
var map__14220 = p__14219;
var map__14220__$1 = ((((!((map__14220 == null)))?((((map__14220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14220):map__14220);
var state = map__14220__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$eof);
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$paragraph);
var blockquote = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$blockquote);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$heading);
var hr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$hr);
var temp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$temp);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$lists);
var inline_heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$inline_DASH_heading);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14220__$1,cljs.core.cst$kw$code);
if(cljs.core.truth_((function (){var and__7941__auto__ = paragraph;
if(cljs.core.truth_(and__7941__auto__)){
return lists;
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
if(cljs.core.truth_((function (){var or__7953__auto__ = heading;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = inline_heading;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
var or__7953__auto____$2 = hr;
if(cljs.core.truth_(or__7953__auto____$2)){
return or__7953__auto____$2;
} else {
var or__7953__auto____$3 = code;
if(cljs.core.truth_(or__7953__auto____$3)){
return or__7953__auto____$3;
} else {
var or__7953__auto____$4 = lists;
if(cljs.core.truth_(or__7953__auto____$4)){
return or__7953__auto____$4;
} else {
return blockquote;
}
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph)){
if(cljs.core.truth_((function (){var or__7953__auto__ = eof;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.empty_QMARK_(clojure.string.trim(text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.transformers.paragraph_text(last_line_empty_QMARK_,text)),"</p>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text(last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = cljs.core.not(eof);
if(and__7941__auto__){
var and__7941__auto____$1 = !(clojure.string.blank_QMARK_(text));
if(and__7941__auto____$1){
var or__7953__auto__ = cljs.core.cst$kw$inline_DASH_heading.cljs$core$IFn$_invoke$arity$1(temp);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return last_line_empty_QMARK_;
}
} else {
return and__7941__auto____$1;
}
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$paragraph,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.close_paragraph = (function markdown$transformers$close_paragraph(text,p__14222){
var map__14223 = p__14222;
var map__14223__$1 = ((((!((map__14223 == null)))?((((map__14223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14223):map__14223);
var state = map__14223__$1;
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14223__$1,cljs.core.cst$kw$next_DASH_line);
var paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14223__$1,cljs.core.cst$kw$paragraph);
if(cljs.core.truth_((function (){var and__7941__auto__ = paragraph;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),(function (){var G__14225 = next_line;
if((G__14225 == null)){
return null;
} else {
return clojure.string.trim(G__14225);
}
})()));
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"</p>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$paragraph)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.transformers.close_paragraph,markdown.transformers.open_paragraph(text,state));
});
markdown.transformers.code = (function markdown$transformers$code(text,p__14226){
var map__14227 = p__14226;
var map__14227__$1 = ((((!((map__14227 == null)))?((((map__14227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14227):map__14227);
var state = map__14227__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,cljs.core.cst$kw$lists);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14227__$1,cljs.core.cst$kw$codeblock);
if(cljs.core.truth_((function (){var or__7953__auto__ = lists;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code)){
if(cljs.core.truth_((function (){var or__7953__auto__ = eof;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("    ",clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</code></pre>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$indented_DASH_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$code,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_(clojure.string.trim(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(clojure.string.replace_first(text,/    /,"")))].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$indented_DASH_code,true], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,p__14229){
var map__14230 = p__14229;
var map__14230__$1 = ((((!((map__14230 == null)))?((((map__14230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14230):map__14230);
var state = map__14230__$1;
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14230__$1,cljs.core.cst$kw$codeblock);
var codeblock_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14230__$1,cljs.core.cst$kw$codeblock_DASH_end);
var indented_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14230__$1,cljs.core.cst$kw$indented_DASH_code);
var next_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14230__$1,cljs.core.cst$kw$next_DASH_line);
var trimmed = clojure.string.trim(text);
var next_line_closes_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last((3),(function (){var G__14232 = next_line;
if((G__14232 == null)){
return null;
} else {
return clojure.string.trim(G__14232);
}
})()));
if(cljs.core.truth_(codeblock_end)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true),cljs.core.cst$kw$code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$codeblock,cljs.core.cst$kw$codeblock_DASH_end], 0))], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = next_line_closes_QMARK_;
if(and__7941__auto__){
return codeblock;
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code([cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(next_line,/```/))))].join(''))),"</code></pre>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$codeblock_DASH_end,true,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], 0))], null);
} else {
if((cljs.core.not(indented_code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),trimmed)))){
var vec__14233 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),trimmed));
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14233,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(code));
var formatter = cljs.core.cst$kw$code_DASH_style.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<pre><code",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty(lang))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(formatter)?(function (){var G__14236 = clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang);
return (formatter.cljs$core$IFn$_invoke$arity$1 ? formatter.cljs$core$IFn$_invoke$arity$1(G__14236) : formatter.call(null,G__14236));
})():["class=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(lang)),"\""].join('')))].join(''):null)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(((cljs.core.empty_QMARK_(s))?s:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\n"].join('')))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((next_line_closes_QMARK_)?"</code></pre>":null))].join(''),((next_line_closes_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$codeblock_DASH_end,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_,true], 0)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$code,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$codeblock,true], 0)))], null);
} else {
if(cljs.core.truth_(codeblock)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_code(text)),"\n"].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<hr/>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$hr,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
/**
 * Check for blockquotes and signal to blockquote-2 function with
 *   states blockquote-start and blockquote-end so that tags can be added.
 *   This approach enables lists to be included in blockquotes.
 */
markdown.transformers.blockquote_1 = (function markdown$transformers$blockquote_1(text,p__14237){
var map__14238 = p__14237;
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14238):map__14238);
var state = map__14238__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,cljs.core.cst$kw$eof);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,cljs.core.cst$kw$codeblock);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14238__$1,cljs.core.cst$kw$lists);
var trimmed = clojure.string.trim(text);
if(cljs.core.truth_((function (){var or__7953__auto__ = code;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(cljs.core.cst$kw$blockquote.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__7953__auto__ = eof;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.empty_QMARK_(trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote_DASH_end,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$blockquote,false], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),"<p>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);
} else {
if(((cljs.core.count(trimmed) >= (2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(2))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?"</p>":null)),"<footer>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(2))),"</footer>"].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,false)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1)))," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$blockquote_DASH_paragraph.cljs$core$IFn$_invoke$arity$1(state))?null:"<p>")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$blockquote_DASH_paragraph,true)], null);

}
}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",cljs.core.first(text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(text)))," "].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote_DASH_start,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$blockquote,true,cljs.core.cst$kw$blockquote_DASH_paragraph,true], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
/**
 * Check for change in blockquote states and add start or end tags.
 *   Closing a blockquote with a list in it is a bit more complex,
 *   as the list is not closed until the following blank line.
 */
markdown.transformers.blockquote_2 = (function markdown$transformers$blockquote_2(text,p__14240){
var map__14241 = p__14240;
var map__14241__$1 = ((((!((map__14241 == null)))?((((map__14241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14241):map__14241);
var state = map__14241__$1;
var blockquote_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14241__$1,cljs.core.cst$kw$blockquote_DASH_start);
var blockquote_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14241__$1,cljs.core.cst$kw$blockquote_DASH_end);
var blockquote_paragraph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14241__$1,cljs.core.cst$kw$blockquote_DASH_paragraph);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14241__$1,cljs.core.cst$kw$lists);
var not_in_list = (cljs.core.not(lists)) || (cljs.core.empty_QMARK_(lists));
if(cljs.core.truth_(blockquote_start)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<blockquote><p>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$blockquote_DASH_start)], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = blockquote_end;
if(cljs.core.truth_(and__7941__auto__)){
return not_in_list;
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(blockquote_paragraph)?"</p>":null)),"</blockquote>"].join(''),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$blockquote,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$blockquote_DASH_paragraph,cljs.core.cst$kw$blockquote_DASH_end], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
});
markdown.transformers.footer = (function markdown$transformers$footer(footnotes){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes))){
return "";
} else {
var G__14245 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (footnotes__$1,p__14246){
var vec__14247 = p__14246;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(footnotes__$1),"<li id='fn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",label))),"<a href='#fnref",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'>&#8617;</a></li>"].join('');
}),"",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.cst$kw$processed.cljs$core$IFn$_invoke$arity$1(footnotes)));
var fexpr__14244 = ((function (G__14245){
return (function (p1__14243_SHARP_){
return ["<ol class='footnotes'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14243_SHARP_),"</ol>"].join('');
});})(G__14245))
;
return fexpr__14244(G__14245);
}
});
/**
 * Given a line of metadata header text return either a list containing a parsed
 *   and normalizd key and the original text of the value, or if no header is found
 *   (this is a continuation or new value from a pervious header key) simply
 *   return the text. If a blank or invalid line is found return nil.
 */
markdown.transformers.parse_metadata_line = (function markdown$transformers$parse_metadata_line(line){
if(cljs.core.truth_(line)){
var vec__14250 = cljs.core.re_matches(/^([0-9A-Za-z_-]*):(.*)$/,line);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14250,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14250,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14250,(2),null);
var vec__14253 = cljs.core.re_matches(/^    (.*)$/,line);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14253,(0),null);
var next_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14253,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),"")){
if(cljs.core.truth_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),val], null);
} else {
if(cljs.core.truth_(next_val)){
return line;
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Given a list of maps which contain a single key/value, flatten them all into
 *   a single map with all the leading spaces removed. If an empty list is provided
 *   then return nil.
 */
markdown.transformers.flatten_metadata = (function markdown$transformers$flatten_metadata(metadata){
if((cljs.core.count(metadata) > (0))){
var acc = cljs.core.PersistentArrayMap.EMPTY;
var remain = metadata;
var prev_key = null;
while(true){
if(!(cljs.core.empty_QMARK_(remain))){
var data = cljs.core.first(remain);
var vec__14256 = ((cljs.core.sequential_QMARK_(data))?data:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_key,data], null));
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,(1),null);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc,key,cljs.core.PersistentVector.EMPTY);
var postfix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last((2),val)))?"\n":"");
var norm_val = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.trim(val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(postfix)].join('');
var new_val = ((!(cljs.core.empty_QMARK_(norm_val)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_val,norm_val):prev_val);
var G__14259 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([key,new_val])], 0));
var G__14260 = cljs.core.rest(remain);
var G__14261 = key;
acc = G__14259;
remain = G__14260;
prev_key = G__14261;
continue;
} else {
return acc;
}
break;
}
} else {
return null;
}
});
/**
 * Given a sequence of lines from a markdown document, attempt to parse a
 *   metadata header if it exists.
 */
markdown.transformers.parse_metadata_headers = (function markdown$transformers$parse_metadata_headers(lines_seq){
if(cljs.core.sequential_QMARK_(lines_seq)){
} else {
throw (new Error("Assert failed: (sequential? lines-seq)"));
}

if(cljs.core.every_QMARK_(cljs.core.string_QMARK_,lines_seq)){
} else {
throw (new Error("Assert failed: (every? string? lines-seq)"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,line){
var temp__4655__auto__ = markdown.transformers.parse_metadata_line(line);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,parsed);
} else {
return cljs.core.reduced(markdown.transformers.flatten_metadata(acc));
}
}),cljs.core.PersistentVector.EMPTY,lines_seq);
});
markdown.transformers.transformer_vector = cljs.core.PersistentVector.fromArray([markdown.transformers.set_line_state,markdown.transformers.empty_line,markdown.common.inhibit,markdown.common.escape_inhibit_separator,markdown.transformers.code,markdown.transformers.codeblock,markdown.common.escaped_chars,markdown.common.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.links.image,markdown.links.image_reference_link,markdown.links.link,markdown.links.implicit_reference_link,markdown.links.reference_link,markdown.links.footnote_link,markdown.transformers.hr,markdown.transformers.blockquote_1,markdown.lists.li,markdown.transformers.heading,markdown.transformers.blockquote_2,markdown.common.italics,markdown.common.bold_italic,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough,markdown.transformers.superscript,markdown.tables.table,markdown.transformers.paragraph,markdown.transformers.br,markdown.common.thaw_strings,markdown.common.dashes,markdown.transformers.clear_line_state], true);
