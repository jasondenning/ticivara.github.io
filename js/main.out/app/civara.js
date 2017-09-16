// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.civara');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('app.helpers');
goog.require('app.text');
app.civara.civara_update = (function app$civara$civara_update(data){
return app.helpers.render_markdown();
});
app.civara._LT_content_civara_GT_ = (function app$civara$_LT_content_civara_GT_(data){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
return app.civara.civara_update(data);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (){
return app.civara.civara_update(data);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
var _ = cljs.core.cst$kw$lang.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"civara"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3$s_DASH_title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#civara",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$civara)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"civara-pattern"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#civara-pattern",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$pattern)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$docs_DASH_note,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$s_DASH_title,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"civara-guide"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#civara-guide",cljs.core.cst$kw$class,"anchor",cljs.core.cst$kw$aria_DASH_hidden,"true"], null),"#"], null),app.text.text(cljs.core.cst$kw$guide)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$render_DASH_markdown,app.text.text(cljs.core.cst$kw$civara_DASH_guide)], null)], null)], null);
})], null));
});
