// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__17871 = b.append("0");
b = G__17871;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not(cljs.reader.divisible_QMARK_(num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__7941__auto__ = cljs.reader.divisible_QMARK_(year,(4));
if(cljs.core.truth_(and__7941__auto__)){
var or__7953__auto__ = cljs.reader.indivisible_QMARK_(year,(100));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return cljs.reader.divisible_QMARK_(year,(400));
}
} else {
return and__7941__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__17872 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872,(10),null);
var v = vec__17872;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__7953__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__17875 = months__$1;
var G__17876 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__17875,G__17876) : cljs.reader.days_in_month.call(null,G__17875,G__17876));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4655__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__17877 = temp__4655__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17877,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__17880_17902 = cljs.core.seq(form);
var chunk__17881_17903 = null;
var count__17882_17904 = (0);
var i__17883_17905 = (0);
while(true){
if((i__17883_17905 < count__17882_17904)){
var x_17906 = chunk__17881_17903.cljs$core$IIndexed$_nth$arity$2(null,i__17883_17905);
arr.push(x_17906);

var G__17907 = seq__17880_17902;
var G__17908 = chunk__17881_17903;
var G__17909 = count__17882_17904;
var G__17910 = (i__17883_17905 + (1));
seq__17880_17902 = G__17907;
chunk__17881_17903 = G__17908;
count__17882_17904 = G__17909;
i__17883_17905 = G__17910;
continue;
} else {
var temp__4657__auto___17911 = cljs.core.seq(seq__17880_17902);
if(temp__4657__auto___17911){
var seq__17880_17912__$1 = temp__4657__auto___17911;
if(cljs.core.chunked_seq_QMARK_(seq__17880_17912__$1)){
var c__8792__auto___17913 = cljs.core.chunk_first(seq__17880_17912__$1);
var G__17914 = cljs.core.chunk_rest(seq__17880_17912__$1);
var G__17915 = c__8792__auto___17913;
var G__17916 = cljs.core.count(c__8792__auto___17913);
var G__17917 = (0);
seq__17880_17902 = G__17914;
chunk__17881_17903 = G__17915;
count__17882_17904 = G__17916;
i__17883_17905 = G__17917;
continue;
} else {
var x_17918 = cljs.core.first(seq__17880_17912__$1);
arr.push(x_17918);

var G__17919 = cljs.core.next(seq__17880_17912__$1);
var G__17920 = null;
var G__17921 = (0);
var G__17922 = (0);
seq__17880_17902 = G__17919;
chunk__17881_17903 = G__17920;
count__17882_17904 = G__17921;
i__17883_17905 = G__17922;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = {};
var seq__17886_17923 = cljs.core.seq(form);
var chunk__17887_17924 = null;
var count__17888_17925 = (0);
var i__17889_17926 = (0);
while(true){
if((i__17889_17926 < count__17888_17925)){
var vec__17890_17927 = chunk__17887_17924.cljs$core$IIndexed$_nth$arity$2(null,i__17889_17926);
var k_17928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890_17927,(0),null);
var v_17929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890_17927,(1),null);
var G__17893_17930 = obj;
var G__17894_17931 = cljs.core.name(k_17928);
var G__17895_17932 = v_17929;
goog.object.set(G__17893_17930,G__17894_17931,G__17895_17932);

var G__17933 = seq__17886_17923;
var G__17934 = chunk__17887_17924;
var G__17935 = count__17888_17925;
var G__17936 = (i__17889_17926 + (1));
seq__17886_17923 = G__17933;
chunk__17887_17924 = G__17934;
count__17888_17925 = G__17935;
i__17889_17926 = G__17936;
continue;
} else {
var temp__4657__auto___17937 = cljs.core.seq(seq__17886_17923);
if(temp__4657__auto___17937){
var seq__17886_17938__$1 = temp__4657__auto___17937;
if(cljs.core.chunked_seq_QMARK_(seq__17886_17938__$1)){
var c__8792__auto___17939 = cljs.core.chunk_first(seq__17886_17938__$1);
var G__17940 = cljs.core.chunk_rest(seq__17886_17938__$1);
var G__17941 = c__8792__auto___17939;
var G__17942 = cljs.core.count(c__8792__auto___17939);
var G__17943 = (0);
seq__17886_17923 = G__17940;
chunk__17887_17924 = G__17941;
count__17888_17925 = G__17942;
i__17889_17926 = G__17943;
continue;
} else {
var vec__17896_17944 = cljs.core.first(seq__17886_17938__$1);
var k_17945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17896_17944,(0),null);
var v_17946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17896_17944,(1),null);
var G__17899_17947 = obj;
var G__17900_17948 = cljs.core.name(k_17945);
var G__17901_17949 = v_17946;
goog.object.set(G__17899_17947,G__17900_17948,G__17901_17949);

var G__17950 = cljs.core.next(seq__17886_17938__$1);
var G__17951 = null;
var G__17952 = (0);
var G__17953 = (0);
seq__17886_17923 = G__17950;
chunk__17887_17924 = G__17951;
count__17888_17925 = G__17952;
i__17889_17926 = G__17953;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$sym$inst,cljs.reader.read_date,cljs.core.cst$sym$uuid,cljs.reader.read_uuid,cljs.core.cst$sym$queue,cljs.reader.read_queue,cljs.core.cst$sym$js,cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__17955 = arguments.length;
switch (G__17955) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__17956,reader){
var map__17957 = p__17956;
var map__17957__$1 = ((((!((map__17957 == null)))?((((map__17957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17957.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17957):map__17957);
var opts = map__17957__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957__$1,cljs.core.cst$kw$eof);
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,((function (map__17957,map__17957__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__17957,map__17957__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__17961 = arguments.length;
switch (G__17961) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$readers,cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),cljs.core.cst$kw$eof,null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),cljs.core.cst$kw$readers,(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});
