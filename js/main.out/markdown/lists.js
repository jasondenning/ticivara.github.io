// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('markdown.lists');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.lists.close_lists = (function markdown$lists$close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__8761__auto__ = (function markdown$lists$close_lists_$_iter__14295(s__14296){
return (new cljs.core.LazySeq(null,(function (){
var s__14296__$1 = s__14296;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14296__$1);
if(temp__4657__auto__){
var s__14296__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14296__$2)){
var c__8759__auto__ = cljs.core.chunk_first(s__14296__$2);
var size__8760__auto__ = cljs.core.count(c__8759__auto__);
var b__14298 = cljs.core.chunk_buffer(size__8760__auto__);
if((function (){var i__14297 = (0);
while(true){
if((i__14297 < size__8760__auto__)){
var vec__14299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8759__auto__,i__14297);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14299,(0),null);
cljs.core.chunk_append(b__14298,["</li></",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(list_type)),">"].join(''));

var G__14305 = (i__14297 + (1));
i__14297 = G__14305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14298),markdown$lists$close_lists_$_iter__14295(cljs.core.chunk_rest(s__14296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14298),null);
}
} else {
var vec__14302 = cljs.core.first(s__14296__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14302,(0),null);
return cljs.core.cons(["</li></",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(list_type)),">"].join(''),markdown$lists$close_lists_$_iter__14295(cljs.core.rest(s__14296__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8761__auto__(lists);
})());
});
markdown.lists.add_row = (function markdown$lists$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14306_SHARP_){
return (cljs.core.second(p1__14306_SHARP_) > num_indents);
}),cljs.core.reverse(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.lists.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(row_type)),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lists], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</li><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(row_type)),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.lists.ul = (function markdown$lists$ul(text,state){
var vec__14307 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14307,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14307,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim((function (){var G__14310 = text;
var G__14311 = (num_indents + (1));
return (markdown.common._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.common._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2(G__14310,G__14311) : markdown.common._STAR_substring_STAR_.call(null,G__14310,G__14311));
})());
return markdown.lists.add_row(cljs.core.cst$kw$ul,list_type,num_indents,indents,(function (){var or__7953__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.ol = (function markdown$lists$ol(text,state){
var vec__14312 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14312,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14312,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.lists.add_row(cljs.core.cst$kw$ol,list_type,num_indents,indents,(function (){var or__7953__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.li = (function markdown$lists$li(text,p__14315){
var map__14316 = p__14315;
var map__14316__$1 = ((((!((map__14316 == null)))?((((map__14316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14316):map__14316);
var state = map__14316__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14316__$1,cljs.core.cst$kw$code);
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14316__$1,cljs.core.cst$kw$codeblock);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14316__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14316__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14316__$1,cljs.core.cst$kw$lists);
if(cljs.core.truth_((function (){var and__7941__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__7941__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.lists.close_lists(cljs.core.reverse(lists))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$lists),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
if(cljs.core.truth_((function (){var or__7953__auto__ = code;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__7941__auto__ = lists;
if(cljs.core.truth_(and__7941__auto__)){
var or__7953__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return eof;
}
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.lists.close_lists(cljs.core.reverse(lists))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$lists),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = cljs.core.not(eof);
if(and__7941__auto__){
var and__7941__auto____$1 = lists;
if(cljs.core.truth_(and__7941__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__7941__auto____$1;
}
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.lists.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.lists.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__7941__auto__ = (function (){var or__7953__auto__ = eof;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__7941__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.lists.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$lists,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$buf,text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
