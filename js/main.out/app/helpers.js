// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('app.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.session');
goog.require('markdown.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('decimal.core');
goog.require('app.canvas');
goog.require('app.state');
goog.require('app.text');
app.helpers.nav_BANG_ = (function app$helpers$nav_BANG_(loc){
return window.location.hash = loc;
});
app.helpers.render_markdown = (function app$helpers$render_markdown(){
var seq__15924 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__15925 = null;
var count__15926 = (0);
var i__15927 = (0);
while(true){
if((i__15927 < count__15926)){
var c = chunk__15925.cljs$core$IIndexed$_nth$arity$2(null,i__15927);
var txt_15984 = (c["innerHTML"]);
var html_15985 = markdown.core.md__GT_html(txt_15984);
(c["innerHTML"] = html_15985);

var seq__15928_15986 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15929_15987 = null;
var count__15930_15988 = (0);
var i__15931_15989 = (0);
while(true){
if((i__15931_15989 < count__15930_15988)){
var table_15990 = chunk__15929_15987.cljs$core$IIndexed$_nth$arity$2(null,i__15931_15989);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15990,cljs.core.cst$kw$table);

var G__15991 = seq__15928_15986;
var G__15992 = chunk__15929_15987;
var G__15993 = count__15930_15988;
var G__15994 = (i__15931_15989 + (1));
seq__15928_15986 = G__15991;
chunk__15929_15987 = G__15992;
count__15930_15988 = G__15993;
i__15931_15989 = G__15994;
continue;
} else {
var temp__4657__auto___15995 = cljs.core.seq(seq__15928_15986);
if(temp__4657__auto___15995){
var seq__15928_15996__$1 = temp__4657__auto___15995;
if(cljs.core.chunked_seq_QMARK_(seq__15928_15996__$1)){
var c__8792__auto___15997 = cljs.core.chunk_first(seq__15928_15996__$1);
var G__15998 = cljs.core.chunk_rest(seq__15928_15996__$1);
var G__15999 = c__8792__auto___15997;
var G__16000 = cljs.core.count(c__8792__auto___15997);
var G__16001 = (0);
seq__15928_15986 = G__15998;
chunk__15929_15987 = G__15999;
count__15930_15988 = G__16000;
i__15931_15989 = G__16001;
continue;
} else {
var table_16002 = cljs.core.first(seq__15928_15996__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16002,cljs.core.cst$kw$table);

var G__16003 = cljs.core.next(seq__15928_15996__$1);
var G__16004 = null;
var G__16005 = (0);
var G__16006 = (0);
seq__15928_15986 = G__16003;
chunk__15929_15987 = G__16004;
count__15930_15988 = G__16005;
i__15931_15989 = G__16006;
continue;
}
} else {
}
}
break;
}

var seq__15932_16007 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15933_16008 = null;
var count__15934_16009 = (0);
var i__15935_16010 = (0);
while(true){
if((i__15935_16010 < count__15934_16009)){
var header_16011 = chunk__15933_16008.cljs$core$IIndexed$_nth$arity$2(null,i__15935_16010);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16011,cljs.core.cst$kw$s_DASH_title);

var G__16012 = seq__15932_16007;
var G__16013 = chunk__15933_16008;
var G__16014 = count__15934_16009;
var G__16015 = (i__15935_16010 + (1));
seq__15932_16007 = G__16012;
chunk__15933_16008 = G__16013;
count__15934_16009 = G__16014;
i__15935_16010 = G__16015;
continue;
} else {
var temp__4657__auto___16016 = cljs.core.seq(seq__15932_16007);
if(temp__4657__auto___16016){
var seq__15932_16017__$1 = temp__4657__auto___16016;
if(cljs.core.chunked_seq_QMARK_(seq__15932_16017__$1)){
var c__8792__auto___16018 = cljs.core.chunk_first(seq__15932_16017__$1);
var G__16019 = cljs.core.chunk_rest(seq__15932_16017__$1);
var G__16020 = c__8792__auto___16018;
var G__16021 = cljs.core.count(c__8792__auto___16018);
var G__16022 = (0);
seq__15932_16007 = G__16019;
chunk__15933_16008 = G__16020;
count__15934_16009 = G__16021;
i__15935_16010 = G__16022;
continue;
} else {
var header_16023 = cljs.core.first(seq__15932_16017__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16023,cljs.core.cst$kw$s_DASH_title);

var G__16024 = cljs.core.next(seq__15932_16017__$1);
var G__16025 = null;
var G__16026 = (0);
var G__16027 = (0);
seq__15932_16007 = G__16024;
chunk__15933_16008 = G__16025;
count__15934_16009 = G__16026;
i__15935_16010 = G__16027;
continue;
}
} else {
}
}
break;
}

var seq__15936_16028 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15937_16029 = null;
var count__15938_16030 = (0);
var i__15939_16031 = (0);
while(true){
if((i__15939_16031 < count__15938_16030)){
var header_16032 = chunk__15937_16029.cljs$core$IIndexed$_nth$arity$2(null,i__15939_16031);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16032,cljs.core.cst$kw$s_DASH_title);

var G__16033 = seq__15936_16028;
var G__16034 = chunk__15937_16029;
var G__16035 = count__15938_16030;
var G__16036 = (i__15939_16031 + (1));
seq__15936_16028 = G__16033;
chunk__15937_16029 = G__16034;
count__15938_16030 = G__16035;
i__15939_16031 = G__16036;
continue;
} else {
var temp__4657__auto___16037 = cljs.core.seq(seq__15936_16028);
if(temp__4657__auto___16037){
var seq__15936_16038__$1 = temp__4657__auto___16037;
if(cljs.core.chunked_seq_QMARK_(seq__15936_16038__$1)){
var c__8792__auto___16039 = cljs.core.chunk_first(seq__15936_16038__$1);
var G__16040 = cljs.core.chunk_rest(seq__15936_16038__$1);
var G__16041 = c__8792__auto___16039;
var G__16042 = cljs.core.count(c__8792__auto___16039);
var G__16043 = (0);
seq__15936_16028 = G__16040;
chunk__15937_16029 = G__16041;
count__15938_16030 = G__16042;
i__15939_16031 = G__16043;
continue;
} else {
var header_16044 = cljs.core.first(seq__15936_16038__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16044,cljs.core.cst$kw$s_DASH_title);

var G__16045 = cljs.core.next(seq__15936_16038__$1);
var G__16046 = null;
var G__16047 = (0);
var G__16048 = (0);
seq__15936_16028 = G__16045;
chunk__15937_16029 = G__16046;
count__15938_16030 = G__16047;
i__15939_16031 = G__16048;
continue;
}
} else {
}
}
break;
}

var seq__15940_16049 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15941_16050 = null;
var count__15942_16051 = (0);
var i__15943_16052 = (0);
while(true){
if((i__15943_16052 < count__15942_16051)){
var header_16053 = chunk__15941_16050.cljs$core$IIndexed$_nth$arity$2(null,i__15943_16052);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16053,cljs.core.cst$kw$s_DASH_title);

var G__16054 = seq__15940_16049;
var G__16055 = chunk__15941_16050;
var G__16056 = count__15942_16051;
var G__16057 = (i__15943_16052 + (1));
seq__15940_16049 = G__16054;
chunk__15941_16050 = G__16055;
count__15942_16051 = G__16056;
i__15943_16052 = G__16057;
continue;
} else {
var temp__4657__auto___16058 = cljs.core.seq(seq__15940_16049);
if(temp__4657__auto___16058){
var seq__15940_16059__$1 = temp__4657__auto___16058;
if(cljs.core.chunked_seq_QMARK_(seq__15940_16059__$1)){
var c__8792__auto___16060 = cljs.core.chunk_first(seq__15940_16059__$1);
var G__16061 = cljs.core.chunk_rest(seq__15940_16059__$1);
var G__16062 = c__8792__auto___16060;
var G__16063 = cljs.core.count(c__8792__auto___16060);
var G__16064 = (0);
seq__15940_16049 = G__16061;
chunk__15941_16050 = G__16062;
count__15942_16051 = G__16063;
i__15943_16052 = G__16064;
continue;
} else {
var header_16065 = cljs.core.first(seq__15940_16059__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16065,cljs.core.cst$kw$s_DASH_title);

var G__16066 = cljs.core.next(seq__15940_16059__$1);
var G__16067 = null;
var G__16068 = (0);
var G__16069 = (0);
seq__15940_16049 = G__16066;
chunk__15941_16050 = G__16067;
count__15942_16051 = G__16068;
i__15943_16052 = G__16069;
continue;
}
} else {
}
}
break;
}

var seq__15944_16070 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15945_16071 = null;
var count__15946_16072 = (0);
var i__15947_16073 = (0);
while(true){
if((i__15947_16073 < count__15946_16072)){
var header_16074 = chunk__15945_16071.cljs$core$IIndexed$_nth$arity$2(null,i__15947_16073);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16074,cljs.core.cst$kw$s_DASH_title);

var G__16075 = seq__15944_16070;
var G__16076 = chunk__15945_16071;
var G__16077 = count__15946_16072;
var G__16078 = (i__15947_16073 + (1));
seq__15944_16070 = G__16075;
chunk__15945_16071 = G__16076;
count__15946_16072 = G__16077;
i__15947_16073 = G__16078;
continue;
} else {
var temp__4657__auto___16079 = cljs.core.seq(seq__15944_16070);
if(temp__4657__auto___16079){
var seq__15944_16080__$1 = temp__4657__auto___16079;
if(cljs.core.chunked_seq_QMARK_(seq__15944_16080__$1)){
var c__8792__auto___16081 = cljs.core.chunk_first(seq__15944_16080__$1);
var G__16082 = cljs.core.chunk_rest(seq__15944_16080__$1);
var G__16083 = c__8792__auto___16081;
var G__16084 = cljs.core.count(c__8792__auto___16081);
var G__16085 = (0);
seq__15944_16070 = G__16082;
chunk__15945_16071 = G__16083;
count__15946_16072 = G__16084;
i__15947_16073 = G__16085;
continue;
} else {
var header_16086 = cljs.core.first(seq__15944_16080__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16086,cljs.core.cst$kw$s_DASH_title);

var G__16087 = cljs.core.next(seq__15944_16080__$1);
var G__16088 = null;
var G__16089 = (0);
var G__16090 = (0);
seq__15944_16070 = G__16087;
chunk__15945_16071 = G__16088;
count__15946_16072 = G__16089;
i__15947_16073 = G__16090;
continue;
}
} else {
}
}
break;
}

var seq__15948_16091 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15949_16092 = null;
var count__15950_16093 = (0);
var i__15951_16094 = (0);
while(true){
if((i__15951_16094 < count__15950_16093)){
var header_16095 = chunk__15949_16092.cljs$core$IIndexed$_nth$arity$2(null,i__15951_16094);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16095,cljs.core.cst$kw$s_DASH_title);

var G__16096 = seq__15948_16091;
var G__16097 = chunk__15949_16092;
var G__16098 = count__15950_16093;
var G__16099 = (i__15951_16094 + (1));
seq__15948_16091 = G__16096;
chunk__15949_16092 = G__16097;
count__15950_16093 = G__16098;
i__15951_16094 = G__16099;
continue;
} else {
var temp__4657__auto___16100 = cljs.core.seq(seq__15948_16091);
if(temp__4657__auto___16100){
var seq__15948_16101__$1 = temp__4657__auto___16100;
if(cljs.core.chunked_seq_QMARK_(seq__15948_16101__$1)){
var c__8792__auto___16102 = cljs.core.chunk_first(seq__15948_16101__$1);
var G__16103 = cljs.core.chunk_rest(seq__15948_16101__$1);
var G__16104 = c__8792__auto___16102;
var G__16105 = cljs.core.count(c__8792__auto___16102);
var G__16106 = (0);
seq__15948_16091 = G__16103;
chunk__15949_16092 = G__16104;
count__15950_16093 = G__16105;
i__15951_16094 = G__16106;
continue;
} else {
var header_16107 = cljs.core.first(seq__15948_16101__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16107,cljs.core.cst$kw$s_DASH_title);

var G__16108 = cljs.core.next(seq__15948_16101__$1);
var G__16109 = null;
var G__16110 = (0);
var G__16111 = (0);
seq__15948_16091 = G__16108;
chunk__15949_16092 = G__16109;
count__15950_16093 = G__16110;
i__15951_16094 = G__16111;
continue;
}
} else {
}
}
break;
}

var seq__15952_16112 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15953_16113 = null;
var count__15954_16114 = (0);
var i__15955_16115 = (0);
while(true){
if((i__15955_16115 < count__15954_16114)){
var header_16116 = chunk__15953_16113.cljs$core$IIndexed$_nth$arity$2(null,i__15955_16115);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16116,cljs.core.cst$kw$s_DASH_title);

var G__16117 = seq__15952_16112;
var G__16118 = chunk__15953_16113;
var G__16119 = count__15954_16114;
var G__16120 = (i__15955_16115 + (1));
seq__15952_16112 = G__16117;
chunk__15953_16113 = G__16118;
count__15954_16114 = G__16119;
i__15955_16115 = G__16120;
continue;
} else {
var temp__4657__auto___16121 = cljs.core.seq(seq__15952_16112);
if(temp__4657__auto___16121){
var seq__15952_16122__$1 = temp__4657__auto___16121;
if(cljs.core.chunked_seq_QMARK_(seq__15952_16122__$1)){
var c__8792__auto___16123 = cljs.core.chunk_first(seq__15952_16122__$1);
var G__16124 = cljs.core.chunk_rest(seq__15952_16122__$1);
var G__16125 = c__8792__auto___16123;
var G__16126 = cljs.core.count(c__8792__auto___16123);
var G__16127 = (0);
seq__15952_16112 = G__16124;
chunk__15953_16113 = G__16125;
count__15954_16114 = G__16126;
i__15955_16115 = G__16127;
continue;
} else {
var header_16128 = cljs.core.first(seq__15952_16122__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16128,cljs.core.cst$kw$s_DASH_title);

var G__16129 = cljs.core.next(seq__15952_16122__$1);
var G__16130 = null;
var G__16131 = (0);
var G__16132 = (0);
seq__15952_16112 = G__16129;
chunk__15953_16113 = G__16130;
count__15954_16114 = G__16131;
i__15955_16115 = G__16132;
continue;
}
} else {
}
}
break;
}

var G__16133 = seq__15924;
var G__16134 = chunk__15925;
var G__16135 = count__15926;
var G__16136 = (i__15927 + (1));
seq__15924 = G__16133;
chunk__15925 = G__16134;
count__15926 = G__16135;
i__15927 = G__16136;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15924);
if(temp__4657__auto__){
var seq__15924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15924__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15924__$1);
var G__16137 = cljs.core.chunk_rest(seq__15924__$1);
var G__16138 = c__8792__auto__;
var G__16139 = cljs.core.count(c__8792__auto__);
var G__16140 = (0);
seq__15924 = G__16137;
chunk__15925 = G__16138;
count__15926 = G__16139;
i__15927 = G__16140;
continue;
} else {
var c = cljs.core.first(seq__15924__$1);
var txt_16141 = (c["innerHTML"]);
var html_16142 = markdown.core.md__GT_html(txt_16141);
(c["innerHTML"] = html_16142);

var seq__15956_16143 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15957_16144 = null;
var count__15958_16145 = (0);
var i__15959_16146 = (0);
while(true){
if((i__15959_16146 < count__15958_16145)){
var table_16147 = chunk__15957_16144.cljs$core$IIndexed$_nth$arity$2(null,i__15959_16146);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16147,cljs.core.cst$kw$table);

var G__16148 = seq__15956_16143;
var G__16149 = chunk__15957_16144;
var G__16150 = count__15958_16145;
var G__16151 = (i__15959_16146 + (1));
seq__15956_16143 = G__16148;
chunk__15957_16144 = G__16149;
count__15958_16145 = G__16150;
i__15959_16146 = G__16151;
continue;
} else {
var temp__4657__auto___16152__$1 = cljs.core.seq(seq__15956_16143);
if(temp__4657__auto___16152__$1){
var seq__15956_16153__$1 = temp__4657__auto___16152__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15956_16153__$1)){
var c__8792__auto___16154 = cljs.core.chunk_first(seq__15956_16153__$1);
var G__16155 = cljs.core.chunk_rest(seq__15956_16153__$1);
var G__16156 = c__8792__auto___16154;
var G__16157 = cljs.core.count(c__8792__auto___16154);
var G__16158 = (0);
seq__15956_16143 = G__16155;
chunk__15957_16144 = G__16156;
count__15958_16145 = G__16157;
i__15959_16146 = G__16158;
continue;
} else {
var table_16159 = cljs.core.first(seq__15956_16153__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16159,cljs.core.cst$kw$table);

var G__16160 = cljs.core.next(seq__15956_16153__$1);
var G__16161 = null;
var G__16162 = (0);
var G__16163 = (0);
seq__15956_16143 = G__16160;
chunk__15957_16144 = G__16161;
count__15958_16145 = G__16162;
i__15959_16146 = G__16163;
continue;
}
} else {
}
}
break;
}

var seq__15960_16164 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15961_16165 = null;
var count__15962_16166 = (0);
var i__15963_16167 = (0);
while(true){
if((i__15963_16167 < count__15962_16166)){
var header_16168 = chunk__15961_16165.cljs$core$IIndexed$_nth$arity$2(null,i__15963_16167);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16168,cljs.core.cst$kw$s_DASH_title);

var G__16169 = seq__15960_16164;
var G__16170 = chunk__15961_16165;
var G__16171 = count__15962_16166;
var G__16172 = (i__15963_16167 + (1));
seq__15960_16164 = G__16169;
chunk__15961_16165 = G__16170;
count__15962_16166 = G__16171;
i__15963_16167 = G__16172;
continue;
} else {
var temp__4657__auto___16173__$1 = cljs.core.seq(seq__15960_16164);
if(temp__4657__auto___16173__$1){
var seq__15960_16174__$1 = temp__4657__auto___16173__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15960_16174__$1)){
var c__8792__auto___16175 = cljs.core.chunk_first(seq__15960_16174__$1);
var G__16176 = cljs.core.chunk_rest(seq__15960_16174__$1);
var G__16177 = c__8792__auto___16175;
var G__16178 = cljs.core.count(c__8792__auto___16175);
var G__16179 = (0);
seq__15960_16164 = G__16176;
chunk__15961_16165 = G__16177;
count__15962_16166 = G__16178;
i__15963_16167 = G__16179;
continue;
} else {
var header_16180 = cljs.core.first(seq__15960_16174__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16180,cljs.core.cst$kw$s_DASH_title);

var G__16181 = cljs.core.next(seq__15960_16174__$1);
var G__16182 = null;
var G__16183 = (0);
var G__16184 = (0);
seq__15960_16164 = G__16181;
chunk__15961_16165 = G__16182;
count__15962_16166 = G__16183;
i__15963_16167 = G__16184;
continue;
}
} else {
}
}
break;
}

var seq__15964_16185 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15965_16186 = null;
var count__15966_16187 = (0);
var i__15967_16188 = (0);
while(true){
if((i__15967_16188 < count__15966_16187)){
var header_16189 = chunk__15965_16186.cljs$core$IIndexed$_nth$arity$2(null,i__15967_16188);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16189,cljs.core.cst$kw$s_DASH_title);

var G__16190 = seq__15964_16185;
var G__16191 = chunk__15965_16186;
var G__16192 = count__15966_16187;
var G__16193 = (i__15967_16188 + (1));
seq__15964_16185 = G__16190;
chunk__15965_16186 = G__16191;
count__15966_16187 = G__16192;
i__15967_16188 = G__16193;
continue;
} else {
var temp__4657__auto___16194__$1 = cljs.core.seq(seq__15964_16185);
if(temp__4657__auto___16194__$1){
var seq__15964_16195__$1 = temp__4657__auto___16194__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15964_16195__$1)){
var c__8792__auto___16196 = cljs.core.chunk_first(seq__15964_16195__$1);
var G__16197 = cljs.core.chunk_rest(seq__15964_16195__$1);
var G__16198 = c__8792__auto___16196;
var G__16199 = cljs.core.count(c__8792__auto___16196);
var G__16200 = (0);
seq__15964_16185 = G__16197;
chunk__15965_16186 = G__16198;
count__15966_16187 = G__16199;
i__15967_16188 = G__16200;
continue;
} else {
var header_16201 = cljs.core.first(seq__15964_16195__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16201,cljs.core.cst$kw$s_DASH_title);

var G__16202 = cljs.core.next(seq__15964_16195__$1);
var G__16203 = null;
var G__16204 = (0);
var G__16205 = (0);
seq__15964_16185 = G__16202;
chunk__15965_16186 = G__16203;
count__15966_16187 = G__16204;
i__15967_16188 = G__16205;
continue;
}
} else {
}
}
break;
}

var seq__15968_16206 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15969_16207 = null;
var count__15970_16208 = (0);
var i__15971_16209 = (0);
while(true){
if((i__15971_16209 < count__15970_16208)){
var header_16210 = chunk__15969_16207.cljs$core$IIndexed$_nth$arity$2(null,i__15971_16209);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16210,cljs.core.cst$kw$s_DASH_title);

var G__16211 = seq__15968_16206;
var G__16212 = chunk__15969_16207;
var G__16213 = count__15970_16208;
var G__16214 = (i__15971_16209 + (1));
seq__15968_16206 = G__16211;
chunk__15969_16207 = G__16212;
count__15970_16208 = G__16213;
i__15971_16209 = G__16214;
continue;
} else {
var temp__4657__auto___16215__$1 = cljs.core.seq(seq__15968_16206);
if(temp__4657__auto___16215__$1){
var seq__15968_16216__$1 = temp__4657__auto___16215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15968_16216__$1)){
var c__8792__auto___16217 = cljs.core.chunk_first(seq__15968_16216__$1);
var G__16218 = cljs.core.chunk_rest(seq__15968_16216__$1);
var G__16219 = c__8792__auto___16217;
var G__16220 = cljs.core.count(c__8792__auto___16217);
var G__16221 = (0);
seq__15968_16206 = G__16218;
chunk__15969_16207 = G__16219;
count__15970_16208 = G__16220;
i__15971_16209 = G__16221;
continue;
} else {
var header_16222 = cljs.core.first(seq__15968_16216__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16222,cljs.core.cst$kw$s_DASH_title);

var G__16223 = cljs.core.next(seq__15968_16216__$1);
var G__16224 = null;
var G__16225 = (0);
var G__16226 = (0);
seq__15968_16206 = G__16223;
chunk__15969_16207 = G__16224;
count__15970_16208 = G__16225;
i__15971_16209 = G__16226;
continue;
}
} else {
}
}
break;
}

var seq__15972_16227 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15973_16228 = null;
var count__15974_16229 = (0);
var i__15975_16230 = (0);
while(true){
if((i__15975_16230 < count__15974_16229)){
var header_16231 = chunk__15973_16228.cljs$core$IIndexed$_nth$arity$2(null,i__15975_16230);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16231,cljs.core.cst$kw$s_DASH_title);

var G__16232 = seq__15972_16227;
var G__16233 = chunk__15973_16228;
var G__16234 = count__15974_16229;
var G__16235 = (i__15975_16230 + (1));
seq__15972_16227 = G__16232;
chunk__15973_16228 = G__16233;
count__15974_16229 = G__16234;
i__15975_16230 = G__16235;
continue;
} else {
var temp__4657__auto___16236__$1 = cljs.core.seq(seq__15972_16227);
if(temp__4657__auto___16236__$1){
var seq__15972_16237__$1 = temp__4657__auto___16236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15972_16237__$1)){
var c__8792__auto___16238 = cljs.core.chunk_first(seq__15972_16237__$1);
var G__16239 = cljs.core.chunk_rest(seq__15972_16237__$1);
var G__16240 = c__8792__auto___16238;
var G__16241 = cljs.core.count(c__8792__auto___16238);
var G__16242 = (0);
seq__15972_16227 = G__16239;
chunk__15973_16228 = G__16240;
count__15974_16229 = G__16241;
i__15975_16230 = G__16242;
continue;
} else {
var header_16243 = cljs.core.first(seq__15972_16237__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16243,cljs.core.cst$kw$s_DASH_title);

var G__16244 = cljs.core.next(seq__15972_16237__$1);
var G__16245 = null;
var G__16246 = (0);
var G__16247 = (0);
seq__15972_16227 = G__16244;
chunk__15973_16228 = G__16245;
count__15974_16229 = G__16246;
i__15975_16230 = G__16247;
continue;
}
} else {
}
}
break;
}

var seq__15976_16248 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15977_16249 = null;
var count__15978_16250 = (0);
var i__15979_16251 = (0);
while(true){
if((i__15979_16251 < count__15978_16250)){
var header_16252 = chunk__15977_16249.cljs$core$IIndexed$_nth$arity$2(null,i__15979_16251);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16252,cljs.core.cst$kw$s_DASH_title);

var G__16253 = seq__15976_16248;
var G__16254 = chunk__15977_16249;
var G__16255 = count__15978_16250;
var G__16256 = (i__15979_16251 + (1));
seq__15976_16248 = G__16253;
chunk__15977_16249 = G__16254;
count__15978_16250 = G__16255;
i__15979_16251 = G__16256;
continue;
} else {
var temp__4657__auto___16257__$1 = cljs.core.seq(seq__15976_16248);
if(temp__4657__auto___16257__$1){
var seq__15976_16258__$1 = temp__4657__auto___16257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15976_16258__$1)){
var c__8792__auto___16259 = cljs.core.chunk_first(seq__15976_16258__$1);
var G__16260 = cljs.core.chunk_rest(seq__15976_16258__$1);
var G__16261 = c__8792__auto___16259;
var G__16262 = cljs.core.count(c__8792__auto___16259);
var G__16263 = (0);
seq__15976_16248 = G__16260;
chunk__15977_16249 = G__16261;
count__15978_16250 = G__16262;
i__15979_16251 = G__16263;
continue;
} else {
var header_16264 = cljs.core.first(seq__15976_16258__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16264,cljs.core.cst$kw$s_DASH_title);

var G__16265 = cljs.core.next(seq__15976_16258__$1);
var G__16266 = null;
var G__16267 = (0);
var G__16268 = (0);
seq__15976_16248 = G__16265;
chunk__15977_16249 = G__16266;
count__15978_16250 = G__16267;
i__15979_16251 = G__16268;
continue;
}
} else {
}
}
break;
}

var seq__15980_16269 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15981_16270 = null;
var count__15982_16271 = (0);
var i__15983_16272 = (0);
while(true){
if((i__15983_16272 < count__15982_16271)){
var header_16273 = chunk__15981_16270.cljs$core$IIndexed$_nth$arity$2(null,i__15983_16272);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16273,cljs.core.cst$kw$s_DASH_title);

var G__16274 = seq__15980_16269;
var G__16275 = chunk__15981_16270;
var G__16276 = count__15982_16271;
var G__16277 = (i__15983_16272 + (1));
seq__15980_16269 = G__16274;
chunk__15981_16270 = G__16275;
count__15982_16271 = G__16276;
i__15983_16272 = G__16277;
continue;
} else {
var temp__4657__auto___16278__$1 = cljs.core.seq(seq__15980_16269);
if(temp__4657__auto___16278__$1){
var seq__15980_16279__$1 = temp__4657__auto___16278__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15980_16279__$1)){
var c__8792__auto___16280 = cljs.core.chunk_first(seq__15980_16279__$1);
var G__16281 = cljs.core.chunk_rest(seq__15980_16279__$1);
var G__16282 = c__8792__auto___16280;
var G__16283 = cljs.core.count(c__8792__auto___16280);
var G__16284 = (0);
seq__15980_16269 = G__16281;
chunk__15981_16270 = G__16282;
count__15982_16271 = G__16283;
i__15983_16272 = G__16284;
continue;
} else {
var header_16285 = cljs.core.first(seq__15980_16279__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16285,cljs.core.cst$kw$s_DASH_title);

var G__16286 = cljs.core.next(seq__15980_16279__$1);
var G__16287 = null;
var G__16288 = (0);
var G__16289 = (0);
seq__15980_16269 = G__16286;
chunk__15981_16270 = G__16287;
count__15982_16271 = G__16288;
i__15983_16272 = G__16289;
continue;
}
} else {
}
}
break;
}

var G__16290 = cljs.core.next(seq__15924__$1);
var G__16291 = null;
var G__16292 = (0);
var G__16293 = (0);
seq__15924 = G__16290;
chunk__15925 = G__16291;
count__15926 = G__16292;
i__15927 = G__16293;
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
var monet_canvas = app.canvas.init.cljs$core$IFn$_invoke$arity$variadic(canvas_dom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["2d"], 0));
var ctx = app.canvas.get_context(canvas_dom,"2d");
var img = (new Image());
(img["src"] = svg_path);

(img["onload"] = ((function (canvas_dom,monet_canvas,ctx,img){
return (function (){
return app.canvas.draw_once(monet_canvas);
});})(canvas_dom,monet_canvas,ctx,img))
);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [monet_canvas,img], null);
});
app.helpers.num_pad = (function app$helpers$num_pad(n){
var x = decimal.core.decimal(n);
var s = decimal.core.to_string(decimal.core.to_decimal_places.cljs$core$IFn$_invoke$arity$2(x,(1)));
var res = (cljs.core.truth_(cljs.core.re_find(/\./,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),".0"].join(''));
return res;
});
app.helpers.calc_shrinking_lengths = (function app$helpers$calc_shrinking_lengths(robe){
var final_width = (function (){var G__16294 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16294);
})();
var final_height = (function (){var G__16295 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16295);
})();
var buffer_width = (function (){var G__16296 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16296);
})();
var kusi_width = (function (){var G__16297 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16297);
})();
var orig_border_width = (function (){var G__16298 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16298);
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
