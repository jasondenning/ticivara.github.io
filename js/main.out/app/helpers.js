// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.session');
goog.require('markdown.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('monet.canvas');
goog.require('decimal.core');
goog.require('app.state');
goog.require('app.text');
app.helpers.nav_BANG_ = (function app$helpers$nav_BANG_(loc){
return window.location.hash = loc;
});
app.helpers.render_markdown = (function app$helpers$render_markdown(){
var seq__15944 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__15945 = null;
var count__15946 = (0);
var i__15947 = (0);
while(true){
if((i__15947 < count__15946)){
var c = chunk__15945.cljs$core$IIndexed$_nth$arity$2(null,i__15947);
var txt_16004 = (c["innerHTML"]);
var html_16005 = markdown.core.md__GT_html(txt_16004);
(c["innerHTML"] = html_16005);

var seq__15948_16006 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15949_16007 = null;
var count__15950_16008 = (0);
var i__15951_16009 = (0);
while(true){
if((i__15951_16009 < count__15950_16008)){
var table_16010 = chunk__15949_16007.cljs$core$IIndexed$_nth$arity$2(null,i__15951_16009);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16010,cljs.core.cst$kw$table);

var G__16011 = seq__15948_16006;
var G__16012 = chunk__15949_16007;
var G__16013 = count__15950_16008;
var G__16014 = (i__15951_16009 + (1));
seq__15948_16006 = G__16011;
chunk__15949_16007 = G__16012;
count__15950_16008 = G__16013;
i__15951_16009 = G__16014;
continue;
} else {
var temp__4657__auto___16015 = cljs.core.seq(seq__15948_16006);
if(temp__4657__auto___16015){
var seq__15948_16016__$1 = temp__4657__auto___16015;
if(cljs.core.chunked_seq_QMARK_(seq__15948_16016__$1)){
var c__8792__auto___16017 = cljs.core.chunk_first(seq__15948_16016__$1);
var G__16018 = cljs.core.chunk_rest(seq__15948_16016__$1);
var G__16019 = c__8792__auto___16017;
var G__16020 = cljs.core.count(c__8792__auto___16017);
var G__16021 = (0);
seq__15948_16006 = G__16018;
chunk__15949_16007 = G__16019;
count__15950_16008 = G__16020;
i__15951_16009 = G__16021;
continue;
} else {
var table_16022 = cljs.core.first(seq__15948_16016__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16022,cljs.core.cst$kw$table);

var G__16023 = cljs.core.next(seq__15948_16016__$1);
var G__16024 = null;
var G__16025 = (0);
var G__16026 = (0);
seq__15948_16006 = G__16023;
chunk__15949_16007 = G__16024;
count__15950_16008 = G__16025;
i__15951_16009 = G__16026;
continue;
}
} else {
}
}
break;
}

var seq__15952_16027 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15953_16028 = null;
var count__15954_16029 = (0);
var i__15955_16030 = (0);
while(true){
if((i__15955_16030 < count__15954_16029)){
var header_16031 = chunk__15953_16028.cljs$core$IIndexed$_nth$arity$2(null,i__15955_16030);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16031,cljs.core.cst$kw$s_DASH_title);

var G__16032 = seq__15952_16027;
var G__16033 = chunk__15953_16028;
var G__16034 = count__15954_16029;
var G__16035 = (i__15955_16030 + (1));
seq__15952_16027 = G__16032;
chunk__15953_16028 = G__16033;
count__15954_16029 = G__16034;
i__15955_16030 = G__16035;
continue;
} else {
var temp__4657__auto___16036 = cljs.core.seq(seq__15952_16027);
if(temp__4657__auto___16036){
var seq__15952_16037__$1 = temp__4657__auto___16036;
if(cljs.core.chunked_seq_QMARK_(seq__15952_16037__$1)){
var c__8792__auto___16038 = cljs.core.chunk_first(seq__15952_16037__$1);
var G__16039 = cljs.core.chunk_rest(seq__15952_16037__$1);
var G__16040 = c__8792__auto___16038;
var G__16041 = cljs.core.count(c__8792__auto___16038);
var G__16042 = (0);
seq__15952_16027 = G__16039;
chunk__15953_16028 = G__16040;
count__15954_16029 = G__16041;
i__15955_16030 = G__16042;
continue;
} else {
var header_16043 = cljs.core.first(seq__15952_16037__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16043,cljs.core.cst$kw$s_DASH_title);

var G__16044 = cljs.core.next(seq__15952_16037__$1);
var G__16045 = null;
var G__16046 = (0);
var G__16047 = (0);
seq__15952_16027 = G__16044;
chunk__15953_16028 = G__16045;
count__15954_16029 = G__16046;
i__15955_16030 = G__16047;
continue;
}
} else {
}
}
break;
}

var seq__15956_16048 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15957_16049 = null;
var count__15958_16050 = (0);
var i__15959_16051 = (0);
while(true){
if((i__15959_16051 < count__15958_16050)){
var header_16052 = chunk__15957_16049.cljs$core$IIndexed$_nth$arity$2(null,i__15959_16051);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16052,cljs.core.cst$kw$s_DASH_title);

var G__16053 = seq__15956_16048;
var G__16054 = chunk__15957_16049;
var G__16055 = count__15958_16050;
var G__16056 = (i__15959_16051 + (1));
seq__15956_16048 = G__16053;
chunk__15957_16049 = G__16054;
count__15958_16050 = G__16055;
i__15959_16051 = G__16056;
continue;
} else {
var temp__4657__auto___16057 = cljs.core.seq(seq__15956_16048);
if(temp__4657__auto___16057){
var seq__15956_16058__$1 = temp__4657__auto___16057;
if(cljs.core.chunked_seq_QMARK_(seq__15956_16058__$1)){
var c__8792__auto___16059 = cljs.core.chunk_first(seq__15956_16058__$1);
var G__16060 = cljs.core.chunk_rest(seq__15956_16058__$1);
var G__16061 = c__8792__auto___16059;
var G__16062 = cljs.core.count(c__8792__auto___16059);
var G__16063 = (0);
seq__15956_16048 = G__16060;
chunk__15957_16049 = G__16061;
count__15958_16050 = G__16062;
i__15959_16051 = G__16063;
continue;
} else {
var header_16064 = cljs.core.first(seq__15956_16058__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16064,cljs.core.cst$kw$s_DASH_title);

var G__16065 = cljs.core.next(seq__15956_16058__$1);
var G__16066 = null;
var G__16067 = (0);
var G__16068 = (0);
seq__15956_16048 = G__16065;
chunk__15957_16049 = G__16066;
count__15958_16050 = G__16067;
i__15959_16051 = G__16068;
continue;
}
} else {
}
}
break;
}

var seq__15960_16069 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15961_16070 = null;
var count__15962_16071 = (0);
var i__15963_16072 = (0);
while(true){
if((i__15963_16072 < count__15962_16071)){
var header_16073 = chunk__15961_16070.cljs$core$IIndexed$_nth$arity$2(null,i__15963_16072);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16073,cljs.core.cst$kw$s_DASH_title);

var G__16074 = seq__15960_16069;
var G__16075 = chunk__15961_16070;
var G__16076 = count__15962_16071;
var G__16077 = (i__15963_16072 + (1));
seq__15960_16069 = G__16074;
chunk__15961_16070 = G__16075;
count__15962_16071 = G__16076;
i__15963_16072 = G__16077;
continue;
} else {
var temp__4657__auto___16078 = cljs.core.seq(seq__15960_16069);
if(temp__4657__auto___16078){
var seq__15960_16079__$1 = temp__4657__auto___16078;
if(cljs.core.chunked_seq_QMARK_(seq__15960_16079__$1)){
var c__8792__auto___16080 = cljs.core.chunk_first(seq__15960_16079__$1);
var G__16081 = cljs.core.chunk_rest(seq__15960_16079__$1);
var G__16082 = c__8792__auto___16080;
var G__16083 = cljs.core.count(c__8792__auto___16080);
var G__16084 = (0);
seq__15960_16069 = G__16081;
chunk__15961_16070 = G__16082;
count__15962_16071 = G__16083;
i__15963_16072 = G__16084;
continue;
} else {
var header_16085 = cljs.core.first(seq__15960_16079__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16085,cljs.core.cst$kw$s_DASH_title);

var G__16086 = cljs.core.next(seq__15960_16079__$1);
var G__16087 = null;
var G__16088 = (0);
var G__16089 = (0);
seq__15960_16069 = G__16086;
chunk__15961_16070 = G__16087;
count__15962_16071 = G__16088;
i__15963_16072 = G__16089;
continue;
}
} else {
}
}
break;
}

var seq__15964_16090 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15965_16091 = null;
var count__15966_16092 = (0);
var i__15967_16093 = (0);
while(true){
if((i__15967_16093 < count__15966_16092)){
var header_16094 = chunk__15965_16091.cljs$core$IIndexed$_nth$arity$2(null,i__15967_16093);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16094,cljs.core.cst$kw$s_DASH_title);

var G__16095 = seq__15964_16090;
var G__16096 = chunk__15965_16091;
var G__16097 = count__15966_16092;
var G__16098 = (i__15967_16093 + (1));
seq__15964_16090 = G__16095;
chunk__15965_16091 = G__16096;
count__15966_16092 = G__16097;
i__15967_16093 = G__16098;
continue;
} else {
var temp__4657__auto___16099 = cljs.core.seq(seq__15964_16090);
if(temp__4657__auto___16099){
var seq__15964_16100__$1 = temp__4657__auto___16099;
if(cljs.core.chunked_seq_QMARK_(seq__15964_16100__$1)){
var c__8792__auto___16101 = cljs.core.chunk_first(seq__15964_16100__$1);
var G__16102 = cljs.core.chunk_rest(seq__15964_16100__$1);
var G__16103 = c__8792__auto___16101;
var G__16104 = cljs.core.count(c__8792__auto___16101);
var G__16105 = (0);
seq__15964_16090 = G__16102;
chunk__15965_16091 = G__16103;
count__15966_16092 = G__16104;
i__15967_16093 = G__16105;
continue;
} else {
var header_16106 = cljs.core.first(seq__15964_16100__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16106,cljs.core.cst$kw$s_DASH_title);

var G__16107 = cljs.core.next(seq__15964_16100__$1);
var G__16108 = null;
var G__16109 = (0);
var G__16110 = (0);
seq__15964_16090 = G__16107;
chunk__15965_16091 = G__16108;
count__15966_16092 = G__16109;
i__15967_16093 = G__16110;
continue;
}
} else {
}
}
break;
}

var seq__15968_16111 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15969_16112 = null;
var count__15970_16113 = (0);
var i__15971_16114 = (0);
while(true){
if((i__15971_16114 < count__15970_16113)){
var header_16115 = chunk__15969_16112.cljs$core$IIndexed$_nth$arity$2(null,i__15971_16114);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16115,cljs.core.cst$kw$s_DASH_title);

var G__16116 = seq__15968_16111;
var G__16117 = chunk__15969_16112;
var G__16118 = count__15970_16113;
var G__16119 = (i__15971_16114 + (1));
seq__15968_16111 = G__16116;
chunk__15969_16112 = G__16117;
count__15970_16113 = G__16118;
i__15971_16114 = G__16119;
continue;
} else {
var temp__4657__auto___16120 = cljs.core.seq(seq__15968_16111);
if(temp__4657__auto___16120){
var seq__15968_16121__$1 = temp__4657__auto___16120;
if(cljs.core.chunked_seq_QMARK_(seq__15968_16121__$1)){
var c__8792__auto___16122 = cljs.core.chunk_first(seq__15968_16121__$1);
var G__16123 = cljs.core.chunk_rest(seq__15968_16121__$1);
var G__16124 = c__8792__auto___16122;
var G__16125 = cljs.core.count(c__8792__auto___16122);
var G__16126 = (0);
seq__15968_16111 = G__16123;
chunk__15969_16112 = G__16124;
count__15970_16113 = G__16125;
i__15971_16114 = G__16126;
continue;
} else {
var header_16127 = cljs.core.first(seq__15968_16121__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16127,cljs.core.cst$kw$s_DASH_title);

var G__16128 = cljs.core.next(seq__15968_16121__$1);
var G__16129 = null;
var G__16130 = (0);
var G__16131 = (0);
seq__15968_16111 = G__16128;
chunk__15969_16112 = G__16129;
count__15970_16113 = G__16130;
i__15971_16114 = G__16131;
continue;
}
} else {
}
}
break;
}

var seq__15972_16132 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15973_16133 = null;
var count__15974_16134 = (0);
var i__15975_16135 = (0);
while(true){
if((i__15975_16135 < count__15974_16134)){
var header_16136 = chunk__15973_16133.cljs$core$IIndexed$_nth$arity$2(null,i__15975_16135);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16136,cljs.core.cst$kw$s_DASH_title);

var G__16137 = seq__15972_16132;
var G__16138 = chunk__15973_16133;
var G__16139 = count__15974_16134;
var G__16140 = (i__15975_16135 + (1));
seq__15972_16132 = G__16137;
chunk__15973_16133 = G__16138;
count__15974_16134 = G__16139;
i__15975_16135 = G__16140;
continue;
} else {
var temp__4657__auto___16141 = cljs.core.seq(seq__15972_16132);
if(temp__4657__auto___16141){
var seq__15972_16142__$1 = temp__4657__auto___16141;
if(cljs.core.chunked_seq_QMARK_(seq__15972_16142__$1)){
var c__8792__auto___16143 = cljs.core.chunk_first(seq__15972_16142__$1);
var G__16144 = cljs.core.chunk_rest(seq__15972_16142__$1);
var G__16145 = c__8792__auto___16143;
var G__16146 = cljs.core.count(c__8792__auto___16143);
var G__16147 = (0);
seq__15972_16132 = G__16144;
chunk__15973_16133 = G__16145;
count__15974_16134 = G__16146;
i__15975_16135 = G__16147;
continue;
} else {
var header_16148 = cljs.core.first(seq__15972_16142__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16148,cljs.core.cst$kw$s_DASH_title);

var G__16149 = cljs.core.next(seq__15972_16142__$1);
var G__16150 = null;
var G__16151 = (0);
var G__16152 = (0);
seq__15972_16132 = G__16149;
chunk__15973_16133 = G__16150;
count__15974_16134 = G__16151;
i__15975_16135 = G__16152;
continue;
}
} else {
}
}
break;
}

var G__16153 = seq__15944;
var G__16154 = chunk__15945;
var G__16155 = count__15946;
var G__16156 = (i__15947 + (1));
seq__15944 = G__16153;
chunk__15945 = G__16154;
count__15946 = G__16155;
i__15947 = G__16156;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15944);
if(temp__4657__auto__){
var seq__15944__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15944__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15944__$1);
var G__16157 = cljs.core.chunk_rest(seq__15944__$1);
var G__16158 = c__8792__auto__;
var G__16159 = cljs.core.count(c__8792__auto__);
var G__16160 = (0);
seq__15944 = G__16157;
chunk__15945 = G__16158;
count__15946 = G__16159;
i__15947 = G__16160;
continue;
} else {
var c = cljs.core.first(seq__15944__$1);
var txt_16161 = (c["innerHTML"]);
var html_16162 = markdown.core.md__GT_html(txt_16161);
(c["innerHTML"] = html_16162);

var seq__15976_16163 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15977_16164 = null;
var count__15978_16165 = (0);
var i__15979_16166 = (0);
while(true){
if((i__15979_16166 < count__15978_16165)){
var table_16167 = chunk__15977_16164.cljs$core$IIndexed$_nth$arity$2(null,i__15979_16166);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16167,cljs.core.cst$kw$table);

var G__16168 = seq__15976_16163;
var G__16169 = chunk__15977_16164;
var G__16170 = count__15978_16165;
var G__16171 = (i__15979_16166 + (1));
seq__15976_16163 = G__16168;
chunk__15977_16164 = G__16169;
count__15978_16165 = G__16170;
i__15979_16166 = G__16171;
continue;
} else {
var temp__4657__auto___16172__$1 = cljs.core.seq(seq__15976_16163);
if(temp__4657__auto___16172__$1){
var seq__15976_16173__$1 = temp__4657__auto___16172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15976_16173__$1)){
var c__8792__auto___16174 = cljs.core.chunk_first(seq__15976_16173__$1);
var G__16175 = cljs.core.chunk_rest(seq__15976_16173__$1);
var G__16176 = c__8792__auto___16174;
var G__16177 = cljs.core.count(c__8792__auto___16174);
var G__16178 = (0);
seq__15976_16163 = G__16175;
chunk__15977_16164 = G__16176;
count__15978_16165 = G__16177;
i__15979_16166 = G__16178;
continue;
} else {
var table_16179 = cljs.core.first(seq__15976_16173__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16179,cljs.core.cst$kw$table);

var G__16180 = cljs.core.next(seq__15976_16173__$1);
var G__16181 = null;
var G__16182 = (0);
var G__16183 = (0);
seq__15976_16163 = G__16180;
chunk__15977_16164 = G__16181;
count__15978_16165 = G__16182;
i__15979_16166 = G__16183;
continue;
}
} else {
}
}
break;
}

var seq__15980_16184 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15981_16185 = null;
var count__15982_16186 = (0);
var i__15983_16187 = (0);
while(true){
if((i__15983_16187 < count__15982_16186)){
var header_16188 = chunk__15981_16185.cljs$core$IIndexed$_nth$arity$2(null,i__15983_16187);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16188,cljs.core.cst$kw$s_DASH_title);

var G__16189 = seq__15980_16184;
var G__16190 = chunk__15981_16185;
var G__16191 = count__15982_16186;
var G__16192 = (i__15983_16187 + (1));
seq__15980_16184 = G__16189;
chunk__15981_16185 = G__16190;
count__15982_16186 = G__16191;
i__15983_16187 = G__16192;
continue;
} else {
var temp__4657__auto___16193__$1 = cljs.core.seq(seq__15980_16184);
if(temp__4657__auto___16193__$1){
var seq__15980_16194__$1 = temp__4657__auto___16193__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15980_16194__$1)){
var c__8792__auto___16195 = cljs.core.chunk_first(seq__15980_16194__$1);
var G__16196 = cljs.core.chunk_rest(seq__15980_16194__$1);
var G__16197 = c__8792__auto___16195;
var G__16198 = cljs.core.count(c__8792__auto___16195);
var G__16199 = (0);
seq__15980_16184 = G__16196;
chunk__15981_16185 = G__16197;
count__15982_16186 = G__16198;
i__15983_16187 = G__16199;
continue;
} else {
var header_16200 = cljs.core.first(seq__15980_16194__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16200,cljs.core.cst$kw$s_DASH_title);

var G__16201 = cljs.core.next(seq__15980_16194__$1);
var G__16202 = null;
var G__16203 = (0);
var G__16204 = (0);
seq__15980_16184 = G__16201;
chunk__15981_16185 = G__16202;
count__15982_16186 = G__16203;
i__15983_16187 = G__16204;
continue;
}
} else {
}
}
break;
}

var seq__15984_16205 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15985_16206 = null;
var count__15986_16207 = (0);
var i__15987_16208 = (0);
while(true){
if((i__15987_16208 < count__15986_16207)){
var header_16209 = chunk__15985_16206.cljs$core$IIndexed$_nth$arity$2(null,i__15987_16208);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16209,cljs.core.cst$kw$s_DASH_title);

var G__16210 = seq__15984_16205;
var G__16211 = chunk__15985_16206;
var G__16212 = count__15986_16207;
var G__16213 = (i__15987_16208 + (1));
seq__15984_16205 = G__16210;
chunk__15985_16206 = G__16211;
count__15986_16207 = G__16212;
i__15987_16208 = G__16213;
continue;
} else {
var temp__4657__auto___16214__$1 = cljs.core.seq(seq__15984_16205);
if(temp__4657__auto___16214__$1){
var seq__15984_16215__$1 = temp__4657__auto___16214__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15984_16215__$1)){
var c__8792__auto___16216 = cljs.core.chunk_first(seq__15984_16215__$1);
var G__16217 = cljs.core.chunk_rest(seq__15984_16215__$1);
var G__16218 = c__8792__auto___16216;
var G__16219 = cljs.core.count(c__8792__auto___16216);
var G__16220 = (0);
seq__15984_16205 = G__16217;
chunk__15985_16206 = G__16218;
count__15986_16207 = G__16219;
i__15987_16208 = G__16220;
continue;
} else {
var header_16221 = cljs.core.first(seq__15984_16215__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16221,cljs.core.cst$kw$s_DASH_title);

var G__16222 = cljs.core.next(seq__15984_16215__$1);
var G__16223 = null;
var G__16224 = (0);
var G__16225 = (0);
seq__15984_16205 = G__16222;
chunk__15985_16206 = G__16223;
count__15986_16207 = G__16224;
i__15987_16208 = G__16225;
continue;
}
} else {
}
}
break;
}

var seq__15988_16226 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15989_16227 = null;
var count__15990_16228 = (0);
var i__15991_16229 = (0);
while(true){
if((i__15991_16229 < count__15990_16228)){
var header_16230 = chunk__15989_16227.cljs$core$IIndexed$_nth$arity$2(null,i__15991_16229);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16230,cljs.core.cst$kw$s_DASH_title);

var G__16231 = seq__15988_16226;
var G__16232 = chunk__15989_16227;
var G__16233 = count__15990_16228;
var G__16234 = (i__15991_16229 + (1));
seq__15988_16226 = G__16231;
chunk__15989_16227 = G__16232;
count__15990_16228 = G__16233;
i__15991_16229 = G__16234;
continue;
} else {
var temp__4657__auto___16235__$1 = cljs.core.seq(seq__15988_16226);
if(temp__4657__auto___16235__$1){
var seq__15988_16236__$1 = temp__4657__auto___16235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15988_16236__$1)){
var c__8792__auto___16237 = cljs.core.chunk_first(seq__15988_16236__$1);
var G__16238 = cljs.core.chunk_rest(seq__15988_16236__$1);
var G__16239 = c__8792__auto___16237;
var G__16240 = cljs.core.count(c__8792__auto___16237);
var G__16241 = (0);
seq__15988_16226 = G__16238;
chunk__15989_16227 = G__16239;
count__15990_16228 = G__16240;
i__15991_16229 = G__16241;
continue;
} else {
var header_16242 = cljs.core.first(seq__15988_16236__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16242,cljs.core.cst$kw$s_DASH_title);

var G__16243 = cljs.core.next(seq__15988_16236__$1);
var G__16244 = null;
var G__16245 = (0);
var G__16246 = (0);
seq__15988_16226 = G__16243;
chunk__15989_16227 = G__16244;
count__15990_16228 = G__16245;
i__15991_16229 = G__16246;
continue;
}
} else {
}
}
break;
}

var seq__15992_16247 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15993_16248 = null;
var count__15994_16249 = (0);
var i__15995_16250 = (0);
while(true){
if((i__15995_16250 < count__15994_16249)){
var header_16251 = chunk__15993_16248.cljs$core$IIndexed$_nth$arity$2(null,i__15995_16250);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16251,cljs.core.cst$kw$s_DASH_title);

var G__16252 = seq__15992_16247;
var G__16253 = chunk__15993_16248;
var G__16254 = count__15994_16249;
var G__16255 = (i__15995_16250 + (1));
seq__15992_16247 = G__16252;
chunk__15993_16248 = G__16253;
count__15994_16249 = G__16254;
i__15995_16250 = G__16255;
continue;
} else {
var temp__4657__auto___16256__$1 = cljs.core.seq(seq__15992_16247);
if(temp__4657__auto___16256__$1){
var seq__15992_16257__$1 = temp__4657__auto___16256__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15992_16257__$1)){
var c__8792__auto___16258 = cljs.core.chunk_first(seq__15992_16257__$1);
var G__16259 = cljs.core.chunk_rest(seq__15992_16257__$1);
var G__16260 = c__8792__auto___16258;
var G__16261 = cljs.core.count(c__8792__auto___16258);
var G__16262 = (0);
seq__15992_16247 = G__16259;
chunk__15993_16248 = G__16260;
count__15994_16249 = G__16261;
i__15995_16250 = G__16262;
continue;
} else {
var header_16263 = cljs.core.first(seq__15992_16257__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16263,cljs.core.cst$kw$s_DASH_title);

var G__16264 = cljs.core.next(seq__15992_16257__$1);
var G__16265 = null;
var G__16266 = (0);
var G__16267 = (0);
seq__15992_16247 = G__16264;
chunk__15993_16248 = G__16265;
count__15994_16249 = G__16266;
i__15995_16250 = G__16267;
continue;
}
} else {
}
}
break;
}

var seq__15996_16268 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15997_16269 = null;
var count__15998_16270 = (0);
var i__15999_16271 = (0);
while(true){
if((i__15999_16271 < count__15998_16270)){
var header_16272 = chunk__15997_16269.cljs$core$IIndexed$_nth$arity$2(null,i__15999_16271);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16272,cljs.core.cst$kw$s_DASH_title);

var G__16273 = seq__15996_16268;
var G__16274 = chunk__15997_16269;
var G__16275 = count__15998_16270;
var G__16276 = (i__15999_16271 + (1));
seq__15996_16268 = G__16273;
chunk__15997_16269 = G__16274;
count__15998_16270 = G__16275;
i__15999_16271 = G__16276;
continue;
} else {
var temp__4657__auto___16277__$1 = cljs.core.seq(seq__15996_16268);
if(temp__4657__auto___16277__$1){
var seq__15996_16278__$1 = temp__4657__auto___16277__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15996_16278__$1)){
var c__8792__auto___16279 = cljs.core.chunk_first(seq__15996_16278__$1);
var G__16280 = cljs.core.chunk_rest(seq__15996_16278__$1);
var G__16281 = c__8792__auto___16279;
var G__16282 = cljs.core.count(c__8792__auto___16279);
var G__16283 = (0);
seq__15996_16268 = G__16280;
chunk__15997_16269 = G__16281;
count__15998_16270 = G__16282;
i__15999_16271 = G__16283;
continue;
} else {
var header_16284 = cljs.core.first(seq__15996_16278__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16284,cljs.core.cst$kw$s_DASH_title);

var G__16285 = cljs.core.next(seq__15996_16278__$1);
var G__16286 = null;
var G__16287 = (0);
var G__16288 = (0);
seq__15996_16268 = G__16285;
chunk__15997_16269 = G__16286;
count__15998_16270 = G__16287;
i__15999_16271 = G__16288;
continue;
}
} else {
}
}
break;
}

var seq__16000_16289 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__16001_16290 = null;
var count__16002_16291 = (0);
var i__16003_16292 = (0);
while(true){
if((i__16003_16292 < count__16002_16291)){
var header_16293 = chunk__16001_16290.cljs$core$IIndexed$_nth$arity$2(null,i__16003_16292);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16293,cljs.core.cst$kw$s_DASH_title);

var G__16294 = seq__16000_16289;
var G__16295 = chunk__16001_16290;
var G__16296 = count__16002_16291;
var G__16297 = (i__16003_16292 + (1));
seq__16000_16289 = G__16294;
chunk__16001_16290 = G__16295;
count__16002_16291 = G__16296;
i__16003_16292 = G__16297;
continue;
} else {
var temp__4657__auto___16298__$1 = cljs.core.seq(seq__16000_16289);
if(temp__4657__auto___16298__$1){
var seq__16000_16299__$1 = temp__4657__auto___16298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16000_16299__$1)){
var c__8792__auto___16300 = cljs.core.chunk_first(seq__16000_16299__$1);
var G__16301 = cljs.core.chunk_rest(seq__16000_16299__$1);
var G__16302 = c__8792__auto___16300;
var G__16303 = cljs.core.count(c__8792__auto___16300);
var G__16304 = (0);
seq__16000_16289 = G__16301;
chunk__16001_16290 = G__16302;
count__16002_16291 = G__16303;
i__16003_16292 = G__16304;
continue;
} else {
var header_16305 = cljs.core.first(seq__16000_16299__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16305,cljs.core.cst$kw$s_DASH_title);

var G__16306 = cljs.core.next(seq__16000_16299__$1);
var G__16307 = null;
var G__16308 = (0);
var G__16309 = (0);
seq__16000_16289 = G__16306;
chunk__16001_16290 = G__16307;
count__16002_16291 = G__16308;
i__16003_16292 = G__16309;
continue;
}
} else {
}
}
break;
}

var G__16310 = cljs.core.next(seq__15944__$1);
var G__16311 = null;
var G__16312 = (0);
var G__16313 = (0);
seq__15944 = G__16310;
chunk__15945 = G__16311;
count__15946 = G__16312;
i__15947 = G__16313;
continue;
}
} else {
return null;
}
}
break;
}
});
app.helpers.download_pdf = (function app$helpers$download_pdf(dom_id,title,page_margins){
var canvas_dom = document.querySelector(dommy.core.selector(dom_id));
var img = canvas_dom.toDataURL();
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,page_margins,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,img,cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});
app.helpers.download_pdf_fourpage = (function app$helpers$download_pdf_fourpage(dom_ids,title,page_margins){
var canvas_doms = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((0)) : dom_ids.call(null,(0))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((1)) : dom_ids.call(null,(1))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((2)) : dom_ids.call(null,(2))))),document.querySelector(dommy.core.selector((dom_ids.cljs$core$IFn$_invoke$arity$1 ? dom_ids.cljs$core$IFn$_invoke$arity$1((3)) : dom_ids.call(null,(3)))))], null);
var imgs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((0)) : canvas_doms.call(null,(0))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((1)) : canvas_doms.call(null,(1))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((2)) : canvas_doms.call(null,(2))).toDataURL(),(canvas_doms.cljs$core$IFn$_invoke$arity$1 ? canvas_doms.cljs$core$IFn$_invoke$arity$1((3)) : canvas_doms.call(null,(3))).toDataURL()], null);
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((clojure.string.blank_QMARK_(title))?"pattern":title)),".pdf"].join('');
var doc = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pageSize,"A4",cljs.core.cst$kw$pageOrientation,"landscape",cljs.core.cst$kw$pageMargins,page_margins,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((0)) : imgs.call(null,(0))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((1)) : imgs.call(null,(1))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((2)) : imgs.call(null,(2))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$image,(imgs.cljs$core$IFn$_invoke$arity$1 ? imgs.cljs$core$IFn$_invoke$arity$1((3)) : imgs.call(null,(3))),cljs.core.cst$kw$width,(860),cljs.core.cst$kw$margin,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null)], null),cljs.core.cst$kw$info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$title,title], null)], null));
return pdfMake.createPdf(doc).download(filename);
});
app.helpers.init_canvas = (function app$helpers$init_canvas(dom_id,svg_path){
var canvas_dom = document.querySelector(dommy.core.selector(dom_id));
var monet_canvas = monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = monet.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
(img["src"] = svg_path);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [monet_canvas,img], null);
});
app.helpers.num_pad = (function app$helpers$num_pad(n){
var x = decimal.core.decimal(n);
var s = decimal.core.to_string(decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2(x,(1)));
var res = (cljs.core.truth_(cljs.core.re_find(/\./,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),".0"].join(''));
return res;
});
app.helpers.calc_shrinking_lengths = (function app$helpers$calc_shrinking_lengths(robe){
var final_width = (function (){var G__16314 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16314);
})();
var final_height = (function (){var G__16315 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16315);
})();
var buffer_width = (function (){var G__16316 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16316);
})();
var kusi_width = (function (){var G__16317 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16317);
})();
var orig_border_width = (function (){var G__16318 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16318);
})();
var inner_width = (final_width * ((1) + (cljs.core.cst$kw$shrink_DASH_percent_DASH_width.cljs$core$IFn$_invoke$arity$1(robe) / (100))));
var inner_height = (final_height * ((1) + (cljs.core.cst$kw$shrink_DASH_percent_DASH_height.cljs$core$IFn$_invoke$arity$1(robe) / (100))));
var cut_width = (inner_width + ((2) * buffer_width));
var cut_height = (inner_height + ((2) * buffer_width));
var orig_mandala_width = (((final_width - ((2) * orig_border_width)) - ((4) * kusi_width)) / (5));
var orig_mandala_height = (((final_height - ((2) * orig_border_width)) - ((2) * kusi_width)) / (3));
var b2m_w = (orig_border_width / orig_mandala_width);
var b2m_h = (orig_border_width / orig_mandala_height);
var rem_w = (inner_width - ((4) * kusi_width));
var rem_h = (inner_height - ((2) * kusi_width));
var mandala_width = (rem_w / ((5) + ((2) * b2m_w)));
var mandala_height = (rem_h / ((3) + ((2) * b2m_h)));
var border_width = (mandala_width * b2m_w);
var border_height = (mandala_height * b2m_h);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cut_width,cut_height,mandala_width,mandala_height,border_width,border_height], null);
});
app.helpers.href_to = (function app$helpers$href_to(page){
return ["/#/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$lang], null)))].join(''),(1))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page)].join('');
});
app.helpers.this_page_str = (function app$helpers$this_page_str(){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.session.get(cljs.core.cst$kw$page))].join(''),(1));
});
