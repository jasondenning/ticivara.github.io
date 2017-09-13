// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17705){
var map__17706 = p__17705;
var map__17706__$1 = ((((!((map__17706 == null)))?((((map__17706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17706.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17706):map__17706);
var m = map__17706__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17706__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17706__$1,cljs.core.cst$kw$name);
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
var seq__17708_17730 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17709_17731 = null;
var count__17710_17732 = (0);
var i__17711_17733 = (0);
while(true){
if((i__17711_17733 < count__17710_17732)){
var f_17734 = chunk__17709_17731.cljs$core$IIndexed$_nth$arity$2(null,i__17711_17733);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17734], 0));

var G__17735 = seq__17708_17730;
var G__17736 = chunk__17709_17731;
var G__17737 = count__17710_17732;
var G__17738 = (i__17711_17733 + (1));
seq__17708_17730 = G__17735;
chunk__17709_17731 = G__17736;
count__17710_17732 = G__17737;
i__17711_17733 = G__17738;
continue;
} else {
var temp__4657__auto___17739 = cljs.core.seq(seq__17708_17730);
if(temp__4657__auto___17739){
var seq__17708_17740__$1 = temp__4657__auto___17739;
if(cljs.core.chunked_seq_QMARK_(seq__17708_17740__$1)){
var c__8792__auto___17741 = cljs.core.chunk_first(seq__17708_17740__$1);
var G__17742 = cljs.core.chunk_rest(seq__17708_17740__$1);
var G__17743 = c__8792__auto___17741;
var G__17744 = cljs.core.count(c__8792__auto___17741);
var G__17745 = (0);
seq__17708_17730 = G__17742;
chunk__17709_17731 = G__17743;
count__17710_17732 = G__17744;
i__17711_17733 = G__17745;
continue;
} else {
var f_17746 = cljs.core.first(seq__17708_17740__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17746], 0));

var G__17747 = cljs.core.next(seq__17708_17740__$1);
var G__17748 = null;
var G__17749 = (0);
var G__17750 = (0);
seq__17708_17730 = G__17747;
chunk__17709_17731 = G__17748;
count__17710_17732 = G__17749;
i__17711_17733 = G__17750;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17751 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7953__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17751], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_17751)))?cljs.core.second(arglists_17751):arglists_17751)], 0));
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
var seq__17712_17752 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__17713_17753 = null;
var count__17714_17754 = (0);
var i__17715_17755 = (0);
while(true){
if((i__17715_17755 < count__17714_17754)){
var vec__17716_17756 = chunk__17713_17753.cljs$core$IIndexed$_nth$arity$2(null,i__17715_17755);
var name_17757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17716_17756,(0),null);
var map__17719_17758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17716_17756,(1),null);
var map__17719_17759__$1 = ((((!((map__17719_17758 == null)))?((((map__17719_17758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17719_17758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17719_17758):map__17719_17758);
var doc_17760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719_17759__$1,cljs.core.cst$kw$doc);
var arglists_17761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17719_17759__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17757], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17761], 0));

if(cljs.core.truth_(doc_17760)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17760], 0));
} else {
}

var G__17762 = seq__17712_17752;
var G__17763 = chunk__17713_17753;
var G__17764 = count__17714_17754;
var G__17765 = (i__17715_17755 + (1));
seq__17712_17752 = G__17762;
chunk__17713_17753 = G__17763;
count__17714_17754 = G__17764;
i__17715_17755 = G__17765;
continue;
} else {
var temp__4657__auto___17766 = cljs.core.seq(seq__17712_17752);
if(temp__4657__auto___17766){
var seq__17712_17767__$1 = temp__4657__auto___17766;
if(cljs.core.chunked_seq_QMARK_(seq__17712_17767__$1)){
var c__8792__auto___17768 = cljs.core.chunk_first(seq__17712_17767__$1);
var G__17769 = cljs.core.chunk_rest(seq__17712_17767__$1);
var G__17770 = c__8792__auto___17768;
var G__17771 = cljs.core.count(c__8792__auto___17768);
var G__17772 = (0);
seq__17712_17752 = G__17769;
chunk__17713_17753 = G__17770;
count__17714_17754 = G__17771;
i__17715_17755 = G__17772;
continue;
} else {
var vec__17721_17773 = cljs.core.first(seq__17712_17767__$1);
var name_17774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17773,(0),null);
var map__17724_17775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17721_17773,(1),null);
var map__17724_17776__$1 = ((((!((map__17724_17775 == null)))?((((map__17724_17775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17724_17775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17724_17775):map__17724_17775);
var doc_17777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17724_17776__$1,cljs.core.cst$kw$doc);
var arglists_17778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17724_17776__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17774], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17778], 0));

if(cljs.core.truth_(doc_17777)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17777], 0));
} else {
}

var G__17779 = cljs.core.next(seq__17712_17767__$1);
var G__17780 = null;
var G__17781 = (0);
var G__17782 = (0);
seq__17712_17752 = G__17779;
chunk__17713_17753 = G__17780;
count__17714_17754 = G__17781;
i__17715_17755 = G__17782;
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

var seq__17726 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__17727 = null;
var count__17728 = (0);
var i__17729 = (0);
while(true){
if((i__17729 < count__17728)){
var role = chunk__17727.cljs$core$IIndexed$_nth$arity$2(null,i__17729);
var temp__4657__auto___17783__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17783__$1)){
var spec_17784 = temp__4657__auto___17783__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17784)], 0));
} else {
}

var G__17785 = seq__17726;
var G__17786 = chunk__17727;
var G__17787 = count__17728;
var G__17788 = (i__17729 + (1));
seq__17726 = G__17785;
chunk__17727 = G__17786;
count__17728 = G__17787;
i__17729 = G__17788;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__17726);
if(temp__4657__auto____$1){
var seq__17726__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17726__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__17726__$1);
var G__17789 = cljs.core.chunk_rest(seq__17726__$1);
var G__17790 = c__8792__auto__;
var G__17791 = cljs.core.count(c__8792__auto__);
var G__17792 = (0);
seq__17726 = G__17789;
chunk__17727 = G__17790;
count__17728 = G__17791;
i__17729 = G__17792;
continue;
} else {
var role = cljs.core.first(seq__17726__$1);
var temp__4657__auto___17793__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17793__$2)){
var spec_17794 = temp__4657__auto___17793__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_17794)], 0));
} else {
}

var G__17795 = cljs.core.next(seq__17726__$1);
var G__17796 = null;
var G__17797 = (0);
var G__17798 = (0);
seq__17726 = G__17795;
chunk__17727 = G__17796;
count__17728 = G__17797;
i__17729 = G__17798;
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
