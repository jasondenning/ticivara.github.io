// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.core');
goog.require('dommy.core');
goog.require('app.text');
app.helpers.load_text = (function app$helpers$load_text(dom_id,text_key,draw){
var c = document.querySelector(dommy.core.selector(dom_id));
var html = markdown.core.md__GT_html(app.text.text(text_key));
(c["innerHTML"] = html);

var seq__15621_15625 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom_id,cljs.core.cst$kw$table], null)))));
var chunk__15622_15626 = null;
var count__15623_15627 = (0);
var i__15624_15628 = (0);
while(true){
if((i__15624_15628 < count__15623_15627)){
var table_15629 = chunk__15622_15626.cljs$core$IIndexed$_nth$arity$2(null,i__15624_15628);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15629,cljs.core.cst$kw$table);

var G__15630 = seq__15621_15625;
var G__15631 = chunk__15622_15626;
var G__15632 = count__15623_15627;
var G__15633 = (i__15624_15628 + (1));
seq__15621_15625 = G__15630;
chunk__15622_15626 = G__15631;
count__15623_15627 = G__15632;
i__15624_15628 = G__15633;
continue;
} else {
var temp__4657__auto___15634 = cljs.core.seq(seq__15621_15625);
if(temp__4657__auto___15634){
var seq__15621_15635__$1 = temp__4657__auto___15634;
if(cljs.core.chunked_seq_QMARK_(seq__15621_15635__$1)){
var c__8792__auto___15636 = cljs.core.chunk_first(seq__15621_15635__$1);
var G__15637 = cljs.core.chunk_rest(seq__15621_15635__$1);
var G__15638 = c__8792__auto___15636;
var G__15639 = cljs.core.count(c__8792__auto___15636);
var G__15640 = (0);
seq__15621_15625 = G__15637;
chunk__15622_15626 = G__15638;
count__15623_15627 = G__15639;
i__15624_15628 = G__15640;
continue;
} else {
var table_15641 = cljs.core.first(seq__15621_15635__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15641,cljs.core.cst$kw$table);

var G__15642 = cljs.core.next(seq__15621_15635__$1);
var G__15643 = null;
var G__15644 = (0);
var G__15645 = (0);
seq__15621_15625 = G__15642;
chunk__15622_15626 = G__15643;
count__15623_15627 = G__15644;
i__15624_15628 = G__15645;
continue;
}
} else {
}
}
break;
}

if(!((draw == null))){
return (draw.cljs$core$IFn$_invoke$arity$0 ? draw.cljs$core$IFn$_invoke$arity$0() : draw.call(null));
} else {
return null;
}
});
