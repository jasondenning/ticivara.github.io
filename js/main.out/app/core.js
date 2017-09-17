// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('weasel.repl');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('app.state');
goog.require('app.text');
goog.require('app.helpers');
goog.require('app.routes');
goog.require('app.elements');
goog.require('app.sabong');
goog.require('app.civara');
goog.require('app.sanghati');
goog.require('app.content_page');
goog.require('goog.History');
app.core._LT_page_home_GT_ = (function app$core$_LT_page_home_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.content_page._LT_content_page_GT_,app.state.state], null);
});
});
app.core._LT_page_sabong_GT_ = (function app$core$_LT_page_sabong_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.sabong._LT_content_sabong_GT_,app.state.state], null);
});
});
app.core._LT_page_civara_GT_ = (function app$core$_LT_page_civara_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.civara._LT_content_civara_GT_,app.state.state], null);
});
});
app.core._LT_page_sanghati_GT_ = (function app$core$_LT_page_sanghati_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.sanghati._LT_content_sanghati_GT_,app.state.state], null);
});
});
app.core._LT_page_borders_GT_ = (function app$core$_LT_page_borders_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.content_page._LT_content_page_GT_,app.state.state], null);
});
});
app.core._LT_page_tools_GT_ = (function app$core$_LT_page_tools_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.elements._LT_container_GT_,app.content_page._LT_content_page_GT_,app.state.state], null);
});
});
app.core.pages = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$home,new cljs.core.Var(function(){return app.core._LT_page_home_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_home_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_home_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",18,1,30,30,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_home_GT_)?app.core._LT_page_home_GT_.cljs$lang$test:null)])),cljs.core.cst$kw$sabong,new cljs.core.Var(function(){return app.core._LT_page_sabong_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_sabong_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_sabong_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",20,1,33,33,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_sabong_GT_)?app.core._LT_page_sabong_GT_.cljs$lang$test:null)])),cljs.core.cst$kw$civara,new cljs.core.Var(function(){return app.core._LT_page_civara_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_civara_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_civara_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",20,1,36,36,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_civara_GT_)?app.core._LT_page_civara_GT_.cljs$lang$test:null)])),cljs.core.cst$kw$sanghati,new cljs.core.Var(function(){return app.core._LT_page_sanghati_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_sanghati_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_sanghati_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",22,1,39,39,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_sanghati_GT_)?app.core._LT_page_sanghati_GT_.cljs$lang$test:null)])),cljs.core.cst$kw$borders,new cljs.core.Var(function(){return app.core._LT_page_borders_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_borders_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_borders_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",21,1,42,42,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_borders_GT_)?app.core._LT_page_borders_GT_.cljs$lang$test:null)])),cljs.core.cst$kw$tools,new cljs.core.Var(function(){return app.core._LT_page_tools_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_DASH_tools_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_DASH_tools_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",19,1,45,45,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_tools_GT_)?app.core._LT_page_tools_GT_.cljs$lang$test:null)]))], null);
app.core.get_pagekey = (function app$core$get_pagekey(){
var p = reagent.session.get(cljs.core.cst$kw$page);
if(!((p == null))){
return p;
} else {
return cljs.core.cst$kw$home;

}
});
app.core._LT_page_GT_ = (function app$core$_LT_page_GT_(){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18726 = app.core.get_pagekey();
return (app.core.pages.cljs$core$IFn$_invoke$arity$1 ? app.core.pages.cljs$core$IFn$_invoke$arity$1(G__18726) : app.core.pages.call(null,G__18726));
})()], null);
});
});
app.core.hook_browser_navigation_BANG_ = (function app$core$hook_browser_navigation_BANG_(){
var G__18727 = (new goog.History());
var G__18728_18731 = G__18727;
var G__18729_18732 = goog.history.EventType.NAVIGATE;
var G__18730_18733 = ((function (G__18728_18731,G__18729_18732,G__18727){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__18728_18731,G__18729_18732,G__18727))
;
goog.events.listen(G__18728_18731,G__18729_18732,G__18730_18733);

G__18727.setEnabled(true);

return G__18727;
});
app.core.mount_components = (function app$core$mount_components(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core._LT_page_GT_;},cljs.core.cst$sym$app$core_SLASH__LT_page_GT_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$_LT_page_GT_,"/home/yume/.boot/cache/tmp/home/yume/prods/apps/ticivara.github.io/j3x/-of1h48/app/core.cljs",13,1,62,62,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(app.core._LT_page_GT_)?app.core._LT_page_GT_.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
if(typeof app.core.history !== 'undefined'){
} else {
app.core.history = app.core.hook_browser_navigation_BANG_();
}
app.core.main = (function app$core$main(){
return app.core.mount_components();
});
