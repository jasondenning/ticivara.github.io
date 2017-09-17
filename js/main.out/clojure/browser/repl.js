// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.array');
goog.require('goog.userAgent.product');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('cljs.repl');
clojure.browser.repl.xpc_connection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
clojure.browser.repl.print_queue = [];
clojure.browser.repl.flush_print_queue_BANG_ = (function clojure$browser$repl$flush_print_queue_BANG_(conn){
var seq__18280_18284 = cljs.core.seq(clojure.browser.repl.print_queue);
var chunk__18281_18285 = null;
var count__18282_18286 = (0);
var i__18283_18287 = (0);
while(true){
if((i__18283_18287 < count__18282_18286)){
var str_18288 = chunk__18281_18285.cljs$core$IIndexed$_nth$arity$2(null,i__18283_18287);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,str_18288);

var G__18289 = seq__18280_18284;
var G__18290 = chunk__18281_18285;
var G__18291 = count__18282_18286;
var G__18292 = (i__18283_18287 + (1));
seq__18280_18284 = G__18289;
chunk__18281_18285 = G__18290;
count__18282_18286 = G__18291;
i__18283_18287 = G__18292;
continue;
} else {
var temp__4657__auto___18293 = cljs.core.seq(seq__18280_18284);
if(temp__4657__auto___18293){
var seq__18280_18294__$1 = temp__4657__auto___18293;
if(cljs.core.chunked_seq_QMARK_(seq__18280_18294__$1)){
var c__8792__auto___18295 = cljs.core.chunk_first(seq__18280_18294__$1);
var G__18296 = cljs.core.chunk_rest(seq__18280_18294__$1);
var G__18297 = c__8792__auto___18295;
var G__18298 = cljs.core.count(c__8792__auto___18295);
var G__18299 = (0);
seq__18280_18284 = G__18296;
chunk__18281_18285 = G__18297;
count__18282_18286 = G__18298;
i__18283_18287 = G__18299;
continue;
} else {
var str_18300 = cljs.core.first(seq__18280_18294__$1);
clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$print,str_18300);

var G__18301 = cljs.core.next(seq__18280_18294__$1);
var G__18302 = null;
var G__18303 = (0);
var G__18304 = (0);
seq__18280_18284 = G__18301;
chunk__18281_18285 = G__18302;
count__18282_18286 = G__18303;
i__18283_18287 = G__18304;
continue;
}
} else {
}
}
break;
}

return goog.array.clear(clojure.browser.repl.print_queue);
});
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
clojure.browser.repl.print_queue.push(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));

var temp__4657__auto__ = cljs.core.deref(clojure.browser.repl.xpc_connection);
if(cljs.core.truth_(temp__4657__auto__)){
var conn = temp__4657__auto__;
return clojure.browser.repl.flush_print_queue_BANG_(conn);
} else {
return null;
}
});
cljs.core._STAR_print_fn_STAR_ = clojure.browser.repl.repl_print;
cljs.core._STAR_print_err_fn_STAR_ = clojure.browser.repl.repl_print;
cljs.core._STAR_print_newline_STAR_ = true;
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval(block))].join('')], null);
}catch (e18305){var e = e18305;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,clojure.browser.repl.get_ua_product(),cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''),cljs.core.cst$kw$stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 *   up to 10 times.
 */
clojure.browser.repl.send_print = (function clojure$browser$repl$send_print(var_args){
var G__18307 = arguments.length;
switch (G__18307) {
case 2:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2 = (function (url,data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
});

clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.cst$kw$error,((function (conn){
return (function (_){
if((n < (10))){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log(["Could not send ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)," after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," attempts."].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
});

clojure.browser.repl.send_print.cljs$lang$maxFixedArity = 3;

clojure.browser.repl.order = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,t,cljs.core.cst$kw$content,data,cljs.core.cst$kw$order,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
 * Start the REPL server connection.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__4655__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__4655__auto__)){
var repl_connection = temp__4655__auto__;
var connection = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.cst$kw$success,((function (connection,repl_connection,temp__4655__auto__){
return (function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connection,temp__4655__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,((function (connection,repl_connection,temp__4655__auto__){
return (function (data){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.cst$kw$result,data));
});})(connection,repl_connection,temp__4655__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$print,((function (connection,repl_connection,temp__4655__auto__){
return (function (data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(cljs.core.cst$kw$print,data));
});})(connection,repl_connection,temp__4655__auto__))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.constantly(null));

var G__18309 = ((function (connection,repl_connection,temp__4655__auto__){
return (function (){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.cst$kw$ready,"ready"));
});})(connection,repl_connection,temp__4655__auto__))
;
var G__18310 = (50);
return setTimeout(G__18309,G__18310);
} else {
return alert("No 'xpc' param provided to child iframe.");
}
});
clojure.browser.repl.load_queue = null;
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
clojure.browser.repl.bootstrap = (function clojure$browser$repl$bootstrap(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require__ = goog.require;

goog.isProvided_ = (function (name){
return false;
});

goog.constructNamespace_("cljs.user");

goog.writeScriptTag__ = (function (src,opt_sourceText){
var loaded = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var onload = ((function (loaded){
return (function (){
if(cljs.core.truth_((function (){var and__7941__auto__ = clojure.browser.repl.load_queue;
if(cljs.core.truth_(and__7941__auto__)){
return cljs.core.deref(loaded) === false;
} else {
return and__7941__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loaded,cljs.core.not);

if((clojure.browser.repl.load_queue.length === (0))){
return clojure.browser.repl.load_queue = null;
} else {
return goog.writeScriptTag__.apply(null,clojure.browser.repl.load_queue.shift());
}
} else {
return null;
}
});})(loaded))
;
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__18311 = script;
goog.object.set(G__18311,"type","text/javascript");

goog.object.set(G__18311,"onload",onload);

goog.object.set(G__18311,"onreadystatechange",onload);

return G__18311;
})();
if((opt_sourceText == null)){
var G__18312 = script__$1;
goog.object.set(G__18312,"src",src);

return G__18312;
} else {
var G__18313 = script__$1;
goog.dom.setTextContext(G__18313,opt_sourceText);

return G__18313;
}
})());
});

goog.writeScriptTag_ = (function (src,opt_sourceText){
if(cljs.core.truth_(clojure.browser.repl.load_queue)){
return clojure.browser.repl.load_queue.push([src,opt_sourceText]);
} else {
clojure.browser.repl.load_queue = [];

return goog.writeScriptTag__(src,opt_sourceText);
}
});

return goog.require = (function (src,reload){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

var reload_QMARK_ = (function (){var or__7953__auto__ = reload;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
var path_18316 = goog.object.get(goog.dependencies_.nameToPath,src);
goog.object.remove(goog.dependencies_.visited,path_18316);

goog.object.remove(goog.dependencies_.written,path_18316);

var G__18314_18317 = goog.dependencies_.written;
var G__18315_18318 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_18316)].join('');
goog.object.remove(G__18314_18317,G__18315_18318);
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return ret;
});
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 *   connection is made, the REPL will evaluate forms in the context of
 *   the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$peer_uri,repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$evaluate_DASH_javascript,((function (repl_connection){
return (function (js){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.cst$kw$send_DASH_result,clojure.browser.repl.evaluate_javascript(repl_connection,js));
});})(repl_connection))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(repl_connection))
);

clojure.browser.repl.bootstrap();

return repl_connection;
});
