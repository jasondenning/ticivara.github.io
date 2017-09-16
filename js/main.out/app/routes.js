// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.state');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('clojure.string');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18514__auto___18665 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18659 = params__18515__auto__;
var map__18659__$1 = ((((!((map__18659 == null)))?((((map__18659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18659):map__18659);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18661 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18661,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18514__auto___18665);

app.routes.home_path = ((function (action__18514__auto___18665){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18666 = arguments.length;
var i__9123__auto___18667 = (0);
while(true){
if((i__9123__auto___18667 < len__9122__auto___18666)){
args__9129__auto__.push((arguments[i__9123__auto___18667]));

var G__18668 = (i__9123__auto___18667 + (1));
i__9123__auto___18667 = G__18668;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18665))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18665){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18513__auto__);
});})(action__18514__auto___18665))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18514__auto___18665){
return (function (seq18664){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18664));
});})(action__18514__auto___18665))
;

var action__18514__auto___18675 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18669 = params__18515__auto__;
var map__18669__$1 = ((((!((map__18669 == null)))?((((map__18669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18669):map__18669);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18671 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18514__auto___18675);

app.routes.sabong_path = ((function (action__18514__auto___18675){
return (function app$routes$sabong_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18676 = arguments.length;
var i__9123__auto___18677 = (0);
while(true){
if((i__9123__auto___18677 < len__9122__auto___18676)){
args__9129__auto__.push((arguments[i__9123__auto___18677]));

var G__18678 = (i__9123__auto___18677 + (1));
i__9123__auto___18677 = G__18678;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18675))
;

app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18675){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18513__auto__);
});})(action__18514__auto___18675))
;

app.routes.sabong_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_path.cljs$lang$applyTo = ((function (action__18514__auto___18675){
return (function (seq18674){
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18674));
});})(action__18514__auto___18675))
;

var action__18514__auto___18685 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18679 = params__18515__auto__;
var map__18679__$1 = ((((!((map__18679 == null)))?((((map__18679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18679):map__18679);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18679__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18681 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18514__auto___18685);

app.routes.civara_path = ((function (action__18514__auto___18685){
return (function app$routes$civara_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18686 = arguments.length;
var i__9123__auto___18687 = (0);
while(true){
if((i__9123__auto___18687 < len__9122__auto___18686)){
args__9129__auto__.push((arguments[i__9123__auto___18687]));

var G__18688 = (i__9123__auto___18687 + (1));
i__9123__auto___18687 = G__18688;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18685))
;

app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18685){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18513__auto__);
});})(action__18514__auto___18685))
;

app.routes.civara_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_path.cljs$lang$applyTo = ((function (action__18514__auto___18685){
return (function (seq18684){
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18684));
});})(action__18514__auto___18685))
;

var action__18514__auto___18695 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18689 = params__18515__auto__;
var map__18689__$1 = ((((!((map__18689 == null)))?((((map__18689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18689.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18689):map__18689);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18689__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18691 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18691,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18514__auto___18695);

app.routes.sanghati_path = ((function (action__18514__auto___18695){
return (function app$routes$sanghati_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18696 = arguments.length;
var i__9123__auto___18697 = (0);
while(true){
if((i__9123__auto___18697 < len__9122__auto___18696)){
args__9129__auto__.push((arguments[i__9123__auto___18697]));

var G__18698 = (i__9123__auto___18697 + (1));
i__9123__auto___18697 = G__18698;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18695))
;

app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18695){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18513__auto__);
});})(action__18514__auto___18695))
;

app.routes.sanghati_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_path.cljs$lang$applyTo = ((function (action__18514__auto___18695){
return (function (seq18694){
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18694));
});})(action__18514__auto___18695))
;

var action__18514__auto___18705 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18699 = params__18515__auto__;
var map__18699__$1 = ((((!((map__18699 == null)))?((((map__18699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18699.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18699):map__18699);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18699__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18701 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18701,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18514__auto___18705);

app.routes.borders_path = ((function (action__18514__auto___18705){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18706 = arguments.length;
var i__9123__auto___18707 = (0);
while(true){
if((i__9123__auto___18707 < len__9122__auto___18706)){
args__9129__auto__.push((arguments[i__9123__auto___18707]));

var G__18708 = (i__9123__auto___18707 + (1));
i__9123__auto___18707 = G__18708;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18705))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18705){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18513__auto__);
});})(action__18514__auto___18705))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18514__auto___18705){
return (function (seq18704){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18704));
});})(action__18514__auto___18705))
;

var action__18514__auto___18715 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18709 = params__18515__auto__;
var map__18709__$1 = ((((!((map__18709 == null)))?((((map__18709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18709):map__18709);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18709__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18711 = params__18515__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18711,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18514__auto___18715);

app.routes.tools_path = ((function (action__18514__auto___18715){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18716 = arguments.length;
var i__9123__auto___18717 = (0);
while(true){
if((i__9123__auto___18717 < len__9122__auto___18716)){
args__9129__auto__.push((arguments[i__9123__auto___18717]));

var G__18718 = (i__9123__auto___18717 + (1));
i__9123__auto___18717 = G__18718;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18715))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18715){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18513__auto__);
});})(action__18514__auto___18715))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18514__auto___18715){
return (function (seq18714){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18714));
});})(action__18514__auto___18715))
;

var action__18514__auto___18725 = (function (params__18515__auto__){
if(cljs.core.map_QMARK_(params__18515__auto__)){
var map__18719 = params__18515__auto__;
var map__18719__$1 = ((((!((map__18719 == null)))?((((map__18719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18719):map__18719);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18515__auto__)){
var vec__18721 = params__18515__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18514__auto___18725);

app.routes.default_path = ((function (action__18514__auto___18725){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18726 = arguments.length;
var i__9123__auto___18727 = (0);
while(true){
if((i__9123__auto___18727 < len__9122__auto___18726)){
args__9129__auto__.push((arguments[i__9123__auto___18727]));

var G__18728 = (i__9123__auto___18727 + (1));
i__9123__auto___18727 = G__18728;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18514__auto___18725))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18514__auto___18725){
return (function (args__18513__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18513__auto__);
});})(action__18514__auto___18725))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18514__auto___18725){
return (function (seq18724){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18724));
});})(action__18514__auto___18725))
;

