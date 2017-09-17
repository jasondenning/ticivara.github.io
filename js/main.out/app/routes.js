// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.routes');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('app.state');
goog.require('reagent.session');
goog.require('secretary.core');
goog.require('clojure.string');
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");
var action__18497__auto___18648 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18642 = params__18498__auto__;
var map__18642__$1 = ((((!((map__18642 == null)))?((((map__18642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18642):map__18642);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18642__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18644 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18644,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang",action__18497__auto___18648);

app.routes.home_path = ((function (action__18497__auto___18648){
return (function app$routes$home_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18649 = arguments.length;
var i__9123__auto___18650 = (0);
while(true){
if((i__9123__auto___18650 < len__9122__auto___18649)){
args__9129__auto__.push((arguments[i__9123__auto___18650]));

var G__18651 = (i__9123__auto___18650 + (1));
i__9123__auto___18650 = G__18651;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18648))
;

app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18648){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang",args__18496__auto__);
});})(action__18497__auto___18648))
;

app.routes.home_path.cljs$lang$maxFixedArity = (0);

app.routes.home_path.cljs$lang$applyTo = ((function (action__18497__auto___18648){
return (function (seq18647){
return app.routes.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18647));
});})(action__18497__auto___18648))
;

var action__18497__auto___18658 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18652 = params__18498__auto__;
var map__18652__$1 = ((((!((map__18652 == null)))?((((map__18652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18652):map__18652);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18652__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18654 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18654,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/home",action__18497__auto___18658);

app.routes.home_alt_path = ((function (action__18497__auto___18658){
return (function app$routes$home_alt_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18659 = arguments.length;
var i__9123__auto___18660 = (0);
while(true){
if((i__9123__auto___18660 < len__9122__auto___18659)){
args__9129__auto__.push((arguments[i__9123__auto___18660]));

var G__18661 = (i__9123__auto___18660 + (1));
i__9123__auto___18660 = G__18661;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18658))
;

app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18658){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/home",args__18496__auto__);
});})(action__18497__auto___18658))
;

app.routes.home_alt_path.cljs$lang$maxFixedArity = (0);

app.routes.home_alt_path.cljs$lang$applyTo = ((function (action__18497__auto___18658){
return (function (seq18657){
return app.routes.home_alt_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18657));
});})(action__18497__auto___18658))
;

var action__18497__auto___18668 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18662 = params__18498__auto__;
var map__18662__$1 = ((((!((map__18662 == null)))?((((map__18662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18662):map__18662);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18662__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18664 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sabong);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sabong",action__18497__auto___18668);

app.routes.sabong_path = ((function (action__18497__auto___18668){
return (function app$routes$sabong_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18669 = arguments.length;
var i__9123__auto___18670 = (0);
while(true){
if((i__9123__auto___18670 < len__9122__auto___18669)){
args__9129__auto__.push((arguments[i__9123__auto___18670]));

var G__18671 = (i__9123__auto___18670 + (1));
i__9123__auto___18670 = G__18671;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18668))
;

app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18668){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sabong",args__18496__auto__);
});})(action__18497__auto___18668))
;

app.routes.sabong_path.cljs$lang$maxFixedArity = (0);

app.routes.sabong_path.cljs$lang$applyTo = ((function (action__18497__auto___18668){
return (function (seq18667){
return app.routes.sabong_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18667));
});})(action__18497__auto___18668))
;

var action__18497__auto___18678 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18672 = params__18498__auto__;
var map__18672__$1 = ((((!((map__18672 == null)))?((((map__18672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18672):map__18672);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18672__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18674 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18674,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$civara);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/civara",action__18497__auto___18678);

app.routes.civara_path = ((function (action__18497__auto___18678){
return (function app$routes$civara_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18679 = arguments.length;
var i__9123__auto___18680 = (0);
while(true){
if((i__9123__auto___18680 < len__9122__auto___18679)){
args__9129__auto__.push((arguments[i__9123__auto___18680]));

var G__18681 = (i__9123__auto___18680 + (1));
i__9123__auto___18680 = G__18681;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18678))
;

app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18678){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/civara",args__18496__auto__);
});})(action__18497__auto___18678))
;

app.routes.civara_path.cljs$lang$maxFixedArity = (0);

app.routes.civara_path.cljs$lang$applyTo = ((function (action__18497__auto___18678){
return (function (seq18677){
return app.routes.civara_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18677));
});})(action__18497__auto___18678))
;

var action__18497__auto___18688 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18682 = params__18498__auto__;
var map__18682__$1 = ((((!((map__18682 == null)))?((((map__18682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18682):map__18682);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18682__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18684 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18684,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$sanghati);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/sanghati",action__18497__auto___18688);

app.routes.sanghati_path = ((function (action__18497__auto___18688){
return (function app$routes$sanghati_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18689 = arguments.length;
var i__9123__auto___18690 = (0);
while(true){
if((i__9123__auto___18690 < len__9122__auto___18689)){
args__9129__auto__.push((arguments[i__9123__auto___18690]));

var G__18691 = (i__9123__auto___18690 + (1));
i__9123__auto___18690 = G__18691;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18688))
;

app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18688){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/sanghati",args__18496__auto__);
});})(action__18497__auto___18688))
;

app.routes.sanghati_path.cljs$lang$maxFixedArity = (0);

app.routes.sanghati_path.cljs$lang$applyTo = ((function (action__18497__auto___18688){
return (function (seq18687){
return app.routes.sanghati_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18687));
});})(action__18497__auto___18688))
;

var action__18497__auto___18698 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18692 = params__18498__auto__;
var map__18692__$1 = ((((!((map__18692 == null)))?((((map__18692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18692.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18692):map__18692);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18692__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18694 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18694,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$borders);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/borders",action__18497__auto___18698);

app.routes.borders_path = ((function (action__18497__auto___18698){
return (function app$routes$borders_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18699 = arguments.length;
var i__9123__auto___18700 = (0);
while(true){
if((i__9123__auto___18700 < len__9122__auto___18699)){
args__9129__auto__.push((arguments[i__9123__auto___18700]));

var G__18701 = (i__9123__auto___18700 + (1));
i__9123__auto___18700 = G__18701;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18698))
;

app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18698){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/borders",args__18496__auto__);
});})(action__18497__auto___18698))
;

app.routes.borders_path.cljs$lang$maxFixedArity = (0);

app.routes.borders_path.cljs$lang$applyTo = ((function (action__18497__auto___18698){
return (function (seq18697){
return app.routes.borders_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18697));
});})(action__18497__auto___18698))
;

var action__18497__auto___18708 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18702 = params__18498__auto__;
var map__18702__$1 = ((((!((map__18702 == null)))?((((map__18702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18702.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18702):map__18702);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18702__$1,cljs.core.cst$kw$lang);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18704 = params__18498__auto__;
var lang = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18704,(0),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lang));

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$tools);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/:lang/tools",action__18497__auto___18708);

app.routes.tools_path = ((function (action__18497__auto___18708){
return (function app$routes$tools_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18709 = arguments.length;
var i__9123__auto___18710 = (0);
while(true){
if((i__9123__auto___18710 < len__9122__auto___18709)){
args__9129__auto__.push((arguments[i__9123__auto___18710]));

var G__18711 = (i__9123__auto___18710 + (1));
i__9123__auto___18710 = G__18711;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18708))
;

app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18708){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/:lang/tools",args__18496__auto__);
});})(action__18497__auto___18708))
;

app.routes.tools_path.cljs$lang$maxFixedArity = (0);

app.routes.tools_path.cljs$lang$applyTo = ((function (action__18497__auto___18708){
return (function (seq18707){
return app.routes.tools_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18707));
});})(action__18497__auto___18708))
;

var action__18497__auto___18718 = (function (params__18498__auto__){
if(cljs.core.map_QMARK_(params__18498__auto__)){
var map__18712 = params__18498__auto__;
var map__18712__$1 = ((((!((map__18712 == null)))?((((map__18712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18712):map__18712);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
if(cljs.core.vector_QMARK_(params__18498__auto__)){
var vec__18714 = params__18498__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null),cljs.core.cst$kw$en);

return reagent.session.put_BANG_(cljs.core.cst$kw$page,cljs.core.cst$kw$home);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("*",action__18497__auto___18718);

app.routes.default_path = ((function (action__18497__auto___18718){
return (function app$routes$default_path(var_args){
var args__9129__auto__ = [];
var len__9122__auto___18719 = arguments.length;
var i__9123__auto___18720 = (0);
while(true){
if((i__9123__auto___18720 < len__9122__auto___18719)){
args__9129__auto__.push((arguments[i__9123__auto___18720]));

var G__18721 = (i__9123__auto___18720 + (1));
i__9123__auto___18720 = G__18721;
continue;
} else {
}
break;
}

var argseq__9130__auto__ = ((((0) < args__9129__auto__.length))?(new cljs.core.IndexedSeq(args__9129__auto__.slice((0)),(0),null)):null);
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(argseq__9130__auto__);
});})(action__18497__auto___18718))
;

app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__18497__auto___18718){
return (function (args__18496__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"*",args__18496__auto__);
});})(action__18497__auto___18718))
;

app.routes.default_path.cljs$lang$maxFixedArity = (0);

app.routes.default_path.cljs$lang$applyTo = ((function (action__18497__auto___18718){
return (function (seq18717){
return app.routes.default_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18717));
});})(action__18497__auto___18718))
;

