// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.state');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('clojure.string');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18512__auto___18663 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18657 = params__18513__auto__;
var map__18657__$1 = ((((!((map__18657 == null)))?((((map__18657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18657):map__18657);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18657__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18659 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18659,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18512__auto___18663);

app.routes.home_path = ((function (action__18512__auto___18663){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18664 = arguments.length;
var i__9123__auto___18665 = (0);
while(true){
if((i__9123__auto___18665 < len__9122__auto___18664)){
args__9129__auto__.push((arguments[i__9123__auto___18665]));

var G__18666 = (i__9123__auto___18665 + (1));
i__9123__auto___18665 = G__18666;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18663))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18663){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18511__auto__);
});})(action__18512__auto___18663))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18512__auto___18663){
return (function (seq18662){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18662));
});})(action__18512__auto___18663))
;

var action__18512__auto___18673 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18667 = params__18513__auto__;
var map__18667__$1 = ((((!((map__18667 == null)))?((((map__18667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18667):map__18667);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18669 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18669,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__18512__auto___18673);

app.routes.home_alt_path = ((function (action__18512__auto___18673){
return (function app$routes$home_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18674 = arguments.length;
var i__9123__auto___18675 = (0);
while(true){
if((i__9123__auto___18675 < len__9122__auto___18674)){
args__9129__auto__.push((arguments[i__9123__auto___18675]));

var G__18676 = (i__9123__auto___18675 + (1));
i__9123__auto___18675 = G__18676;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18673))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18673){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__18511__auto__);
});})(action__18512__auto___18673))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__18512__auto___18673){
return (function (seq18672){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18672));
});})(action__18512__auto___18673))
;

var action__18512__auto___18683 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18677 = params__18513__auto__;
var map__18677__$1 = ((((!((map__18677 == null)))?((((map__18677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18677.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18677):map__18677);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18679 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18679,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18512__auto___18683);

app.routes.sabong_path = ((function (action__18512__auto___18683){
return (function app$routes$sabong_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18684 = arguments.length;
var i__9123__auto___18685 = (0);
while(true){
if((i__9123__auto___18685 < len__9122__auto___18684)){
args__9129__auto__.push((arguments[i__9123__auto___18685]));

var G__18686 = (i__9123__auto___18685 + (1));
i__9123__auto___18685 = G__18686;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18683))
;

app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18683){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18511__auto__);
});})(action__18512__auto___18683))
;

app.routes.sabong_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_path.cljs$lang$applyTo = ((function (action__18512__auto___18683){
return (function (seq18682){
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18682));
});})(action__18512__auto___18683))
;

var action__18512__auto___18693 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18687 = params__18513__auto__;
var map__18687__$1 = ((((!((map__18687 == null)))?((((map__18687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18687):map__18687);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18687__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18689 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18689,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18512__auto___18693);

app.routes.civara_path = ((function (action__18512__auto___18693){
return (function app$routes$civara_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18694 = arguments.length;
var i__9123__auto___18695 = (0);
while(true){
if((i__9123__auto___18695 < len__9122__auto___18694)){
args__9129__auto__.push((arguments[i__9123__auto___18695]));

var G__18696 = (i__9123__auto___18695 + (1));
i__9123__auto___18695 = G__18696;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18693))
;

app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18693){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18511__auto__);
});})(action__18512__auto___18693))
;

app.routes.civara_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_path.cljs$lang$applyTo = ((function (action__18512__auto___18693){
return (function (seq18692){
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18692));
});})(action__18512__auto___18693))
;

var action__18512__auto___18703 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18697 = params__18513__auto__;
var map__18697__$1 = ((((!((map__18697 == null)))?((((map__18697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18697):map__18697);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18697__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18699 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18699,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18512__auto___18703);

app.routes.sanghati_path = ((function (action__18512__auto___18703){
return (function app$routes$sanghati_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18704 = arguments.length;
var i__9123__auto___18705 = (0);
while(true){
if((i__9123__auto___18705 < len__9122__auto___18704)){
args__9129__auto__.push((arguments[i__9123__auto___18705]));

var G__18706 = (i__9123__auto___18705 + (1));
i__9123__auto___18705 = G__18706;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18703))
;

app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18703){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18511__auto__);
});})(action__18512__auto___18703))
;

app.routes.sanghati_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_path.cljs$lang$applyTo = ((function (action__18512__auto___18703){
return (function (seq18702){
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18702));
});})(action__18512__auto___18703))
;

var action__18512__auto___18713 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18707 = params__18513__auto__;
var map__18707__$1 = ((((!((map__18707 == null)))?((((map__18707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18707):map__18707);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18707__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18709 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18709,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18512__auto___18713);

app.routes.borders_path = ((function (action__18512__auto___18713){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18714 = arguments.length;
var i__9123__auto___18715 = (0);
while(true){
if((i__9123__auto___18715 < len__9122__auto___18714)){
args__9129__auto__.push((arguments[i__9123__auto___18715]));

var G__18716 = (i__9123__auto___18715 + (1));
i__9123__auto___18715 = G__18716;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18713))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18713){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18511__auto__);
});})(action__18512__auto___18713))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18512__auto___18713){
return (function (seq18712){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18712));
});})(action__18512__auto___18713))
;

var action__18512__auto___18723 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18717 = params__18513__auto__;
var map__18717__$1 = ((((!((map__18717 == null)))?((((map__18717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18717.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18717):map__18717);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18717__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18719 = params__18513__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18719,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18512__auto___18723);

app.routes.tools_path = ((function (action__18512__auto___18723){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18724 = arguments.length;
var i__9123__auto___18725 = (0);
while(true){
if((i__9123__auto___18725 < len__9122__auto___18724)){
args__9129__auto__.push((arguments[i__9123__auto___18725]));

var G__18726 = (i__9123__auto___18725 + (1));
i__9123__auto___18725 = G__18726;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18723))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18723){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18511__auto__);
});})(action__18512__auto___18723))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18512__auto___18723){
return (function (seq18722){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18722));
});})(action__18512__auto___18723))
;

var action__18512__auto___18733 = (function (params__18513__auto__){
if(cljs.core.map_QMARK_(params__18513__auto__)){
var map__18727 = params__18513__auto__;
var map__18727__$1 = ((((!((map__18727 == null)))?((((map__18727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18727.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18727):map__18727);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18513__auto__)){
var vec__18729 = params__18513__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18512__auto___18733);

app.routes.default_path = ((function (action__18512__auto___18733){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18734 = arguments.length;
var i__9123__auto___18735 = (0);
while(true){
if((i__9123__auto___18735 < len__9122__auto___18734)){
args__9129__auto__.push((arguments[i__9123__auto___18735]));

var G__18736 = (i__9123__auto___18735 + (1));
i__9123__auto___18735 = G__18736;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18512__auto___18733))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18512__auto___18733){
return (function (args__18511__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18511__auto__);
});})(action__18512__auto___18733))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18512__auto___18733){
return (function (seq18732){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18732));
});})(action__18512__auto___18733))
;

