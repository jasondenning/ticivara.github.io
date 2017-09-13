// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.state');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('clojure.string');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18004__auto___18155 = (function (params__18005__auto__){
if(cljs.core.map_QMARK_(params__18005__auto__)){
var map__18149 = params__18005__auto__;
var map__18149__$1 = ((((!((map__18149 == null)))?((((map__18149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18149):map__18149);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18149__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18005__auto__)){
var vec__18151 = params__18005__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18151,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18004__auto___18155);

app.routes.home_path = ((function (action__18004__auto___18155){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18156 = arguments.length;
var i__9123__auto___18157 = (0);
while(true){
if((i__9123__auto___18157 < len__9122__auto___18156)){
args__9129__auto__.push((arguments[i__9123__auto___18157]));

var G__18158 = (i__9123__auto___18157 + (1));
i__9123__auto___18157 = G__18158;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18004__auto___18155))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18004__auto___18155){
return (function (args__18003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18003__auto__);
});})(action__18004__auto___18155))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18004__auto___18155){
return (function (seq18154){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18154));
});})(action__18004__auto___18155))
;

var action__18004__auto___18165 = (function (params__18005__auto__){
if(cljs.core.map_QMARK_(params__18005__auto__)){
var map__18159 = params__18005__auto__;
var map__18159__$1 = ((((!((map__18159 == null)))?((((map__18159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18159):map__18159);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
if(cljs.core.vector_QMARK_(params__18005__auto__)){
var vec__18161 = params__18005__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18161,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18004__auto___18165);

app.routes.sabong_path = ((function (action__18004__auto___18165){
return (function app$routes$sabong_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18166 = arguments.length;
var i__9123__auto___18167 = (0);
while(true){
if((i__9123__auto___18167 < len__9122__auto___18166)){
args__9129__auto__.push((arguments[i__9123__auto___18167]));

var G__18168 = (i__9123__auto___18167 + (1));
i__9123__auto___18167 = G__18168;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18004__auto___18165))
;

app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18004__auto___18165){
return (function (args__18003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18003__auto__);
});})(action__18004__auto___18165))
;

app.routes.sabong_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_path.cljs$lang$applyTo = ((function (action__18004__auto___18165){
return (function (seq18164){
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18164));
});})(action__18004__auto___18165))
;

var action__18004__auto___18175 = (function (params__18005__auto__){
if(cljs.core.map_QMARK_(params__18005__auto__)){
var map__18169 = params__18005__auto__;
var map__18169__$1 = ((((!((map__18169 == null)))?((((map__18169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18169):map__18169);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
if(cljs.core.vector_QMARK_(params__18005__auto__)){
var vec__18171 = params__18005__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18171,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18004__auto___18175);

app.routes.civara_path = ((function (action__18004__auto___18175){
return (function app$routes$civara_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18176 = arguments.length;
var i__9123__auto___18177 = (0);
while(true){
if((i__9123__auto___18177 < len__9122__auto___18176)){
args__9129__auto__.push((arguments[i__9123__auto___18177]));

var G__18178 = (i__9123__auto___18177 + (1));
i__9123__auto___18177 = G__18178;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18004__auto___18175))
;

app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18004__auto___18175){
return (function (args__18003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18003__auto__);
});})(action__18004__auto___18175))
;

app.routes.civara_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_path.cljs$lang$applyTo = ((function (action__18004__auto___18175){
return (function (seq18174){
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18174));
});})(action__18004__auto___18175))
;

var action__18004__auto___18185 = (function (params__18005__auto__){
if(cljs.core.map_QMARK_(params__18005__auto__)){
var map__18179 = params__18005__auto__;
var map__18179__$1 = ((((!((map__18179 == null)))?((((map__18179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18179):map__18179);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18179__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
if(cljs.core.vector_QMARK_(params__18005__auto__)){
var vec__18181 = params__18005__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18181,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18004__auto___18185);

app.routes.sanghati_path = ((function (action__18004__auto___18185){
return (function app$routes$sanghati_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18186 = arguments.length;
var i__9123__auto___18187 = (0);
while(true){
if((i__9123__auto___18187 < len__9122__auto___18186)){
args__9129__auto__.push((arguments[i__9123__auto___18187]));

var G__18188 = (i__9123__auto___18187 + (1));
i__9123__auto___18187 = G__18188;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18004__auto___18185))
;

app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18004__auto___18185){
return (function (args__18003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18003__auto__);
});})(action__18004__auto___18185))
;

app.routes.sanghati_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_path.cljs$lang$applyTo = ((function (action__18004__auto___18185){
return (function (seq18184){
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18184));
});})(action__18004__auto___18185))
;

var action__18004__auto___18195 = (function (params__18005__auto__){
if(cljs.core.map_QMARK_(params__18005__auto__)){
var map__18189 = params__18005__auto__;
var map__18189__$1 = ((((!((map__18189 == null)))?((((map__18189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18189.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18189):map__18189);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18005__auto__)){
var vec__18191 = params__18005__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18004__auto___18195);

app.routes.default_path = ((function (action__18004__auto___18195){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18196 = arguments.length;
var i__9123__auto___18197 = (0);
while(true){
if((i__9123__auto___18197 < len__9122__auto___18196)){
args__9129__auto__.push((arguments[i__9123__auto___18197]));

var G__18198 = (i__9123__auto___18197 + (1));
i__9123__auto___18197 = G__18198;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18004__auto___18195))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18004__auto___18195){
return (function (args__18003__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18003__auto__);
});})(action__18004__auto___18195))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18004__auto___18195){
return (function (seq18194){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18194));
});})(action__18004__auto___18195))
;

