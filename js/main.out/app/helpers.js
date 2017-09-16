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
var seq__15942 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__15943 = null;
var count__15944 = (0);
var i__15945 = (0);
while(true){
if((i__15945 < count__15944)){
var c = chunk__15943.cljs$core$IIndexed$_nth$arity$2(null,i__15945);
var txt_16002 = (c["innerHTML"]);
var html_16003 = markdown.core.md__GT_html(txt_16002);
(c["innerHTML"] = html_16003);

var seq__15946_16004 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15947_16005 = null;
var count__15948_16006 = (0);
var i__15949_16007 = (0);
while(true){
if((i__15949_16007 < count__15948_16006)){
var table_16008 = chunk__15947_16005.cljs$core$IIndexed$_nth$arity$2(null,i__15949_16007);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16008,cljs.core.cst$kw$table);

var G__16009 = seq__15946_16004;
var G__16010 = chunk__15947_16005;
var G__16011 = count__15948_16006;
var G__16012 = (i__15949_16007 + (1));
seq__15946_16004 = G__16009;
chunk__15947_16005 = G__16010;
count__15948_16006 = G__16011;
i__15949_16007 = G__16012;
continue;
} else {
var temp__4657__auto___16013 = cljs.core.seq(seq__15946_16004);
if(temp__4657__auto___16013){
var seq__15946_16014__$1 = temp__4657__auto___16013;
if(cljs.core.chunked_seq_QMARK_(seq__15946_16014__$1)){
var c__8792__auto___16015 = cljs.core.chunk_first(seq__15946_16014__$1);
var G__16016 = cljs.core.chunk_rest(seq__15946_16014__$1);
var G__16017 = c__8792__auto___16015;
var G__16018 = cljs.core.count(c__8792__auto___16015);
var G__16019 = (0);
seq__15946_16004 = G__16016;
chunk__15947_16005 = G__16017;
count__15948_16006 = G__16018;
i__15949_16007 = G__16019;
continue;
} else {
var table_16020 = cljs.core.first(seq__15946_16014__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16020,cljs.core.cst$kw$table);

var G__16021 = cljs.core.next(seq__15946_16014__$1);
var G__16022 = null;
var G__16023 = (0);
var G__16024 = (0);
seq__15946_16004 = G__16021;
chunk__15947_16005 = G__16022;
count__15948_16006 = G__16023;
i__15949_16007 = G__16024;
continue;
}
} else {
}
}
break;
}

var seq__15950_16025 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15951_16026 = null;
var count__15952_16027 = (0);
var i__15953_16028 = (0);
while(true){
if((i__15953_16028 < count__15952_16027)){
var header_16029 = chunk__15951_16026.cljs$core$IIndexed$_nth$arity$2(null,i__15953_16028);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16029,cljs.core.cst$kw$s_DASH_title);

var G__16030 = seq__15950_16025;
var G__16031 = chunk__15951_16026;
var G__16032 = count__15952_16027;
var G__16033 = (i__15953_16028 + (1));
seq__15950_16025 = G__16030;
chunk__15951_16026 = G__16031;
count__15952_16027 = G__16032;
i__15953_16028 = G__16033;
continue;
} else {
var temp__4657__auto___16034 = cljs.core.seq(seq__15950_16025);
if(temp__4657__auto___16034){
var seq__15950_16035__$1 = temp__4657__auto___16034;
if(cljs.core.chunked_seq_QMARK_(seq__15950_16035__$1)){
var c__8792__auto___16036 = cljs.core.chunk_first(seq__15950_16035__$1);
var G__16037 = cljs.core.chunk_rest(seq__15950_16035__$1);
var G__16038 = c__8792__auto___16036;
var G__16039 = cljs.core.count(c__8792__auto___16036);
var G__16040 = (0);
seq__15950_16025 = G__16037;
chunk__15951_16026 = G__16038;
count__15952_16027 = G__16039;
i__15953_16028 = G__16040;
continue;
} else {
var header_16041 = cljs.core.first(seq__15950_16035__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16041,cljs.core.cst$kw$s_DASH_title);

var G__16042 = cljs.core.next(seq__15950_16035__$1);
var G__16043 = null;
var G__16044 = (0);
var G__16045 = (0);
seq__15950_16025 = G__16042;
chunk__15951_16026 = G__16043;
count__15952_16027 = G__16044;
i__15953_16028 = G__16045;
continue;
}
} else {
}
}
break;
}

var seq__15954_16046 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15955_16047 = null;
var count__15956_16048 = (0);
var i__15957_16049 = (0);
while(true){
if((i__15957_16049 < count__15956_16048)){
var header_16050 = chunk__15955_16047.cljs$core$IIndexed$_nth$arity$2(null,i__15957_16049);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16050,cljs.core.cst$kw$s_DASH_title);

var G__16051 = seq__15954_16046;
var G__16052 = chunk__15955_16047;
var G__16053 = count__15956_16048;
var G__16054 = (i__15957_16049 + (1));
seq__15954_16046 = G__16051;
chunk__15955_16047 = G__16052;
count__15956_16048 = G__16053;
i__15957_16049 = G__16054;
continue;
} else {
var temp__4657__auto___16055 = cljs.core.seq(seq__15954_16046);
if(temp__4657__auto___16055){
var seq__15954_16056__$1 = temp__4657__auto___16055;
if(cljs.core.chunked_seq_QMARK_(seq__15954_16056__$1)){
var c__8792__auto___16057 = cljs.core.chunk_first(seq__15954_16056__$1);
var G__16058 = cljs.core.chunk_rest(seq__15954_16056__$1);
var G__16059 = c__8792__auto___16057;
var G__16060 = cljs.core.count(c__8792__auto___16057);
var G__16061 = (0);
seq__15954_16046 = G__16058;
chunk__15955_16047 = G__16059;
count__15956_16048 = G__16060;
i__15957_16049 = G__16061;
continue;
} else {
var header_16062 = cljs.core.first(seq__15954_16056__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16062,cljs.core.cst$kw$s_DASH_title);

var G__16063 = cljs.core.next(seq__15954_16056__$1);
var G__16064 = null;
var G__16065 = (0);
var G__16066 = (0);
seq__15954_16046 = G__16063;
chunk__15955_16047 = G__16064;
count__15956_16048 = G__16065;
i__15957_16049 = G__16066;
continue;
}
} else {
}
}
break;
}

var seq__15958_16067 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15959_16068 = null;
var count__15960_16069 = (0);
var i__15961_16070 = (0);
while(true){
if((i__15961_16070 < count__15960_16069)){
var header_16071 = chunk__15959_16068.cljs$core$IIndexed$_nth$arity$2(null,i__15961_16070);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16071,cljs.core.cst$kw$s_DASH_title);

var G__16072 = seq__15958_16067;
var G__16073 = chunk__15959_16068;
var G__16074 = count__15960_16069;
var G__16075 = (i__15961_16070 + (1));
seq__15958_16067 = G__16072;
chunk__15959_16068 = G__16073;
count__15960_16069 = G__16074;
i__15961_16070 = G__16075;
continue;
} else {
var temp__4657__auto___16076 = cljs.core.seq(seq__15958_16067);
if(temp__4657__auto___16076){
var seq__15958_16077__$1 = temp__4657__auto___16076;
if(cljs.core.chunked_seq_QMARK_(seq__15958_16077__$1)){
var c__8792__auto___16078 = cljs.core.chunk_first(seq__15958_16077__$1);
var G__16079 = cljs.core.chunk_rest(seq__15958_16077__$1);
var G__16080 = c__8792__auto___16078;
var G__16081 = cljs.core.count(c__8792__auto___16078);
var G__16082 = (0);
seq__15958_16067 = G__16079;
chunk__15959_16068 = G__16080;
count__15960_16069 = G__16081;
i__15961_16070 = G__16082;
continue;
} else {
var header_16083 = cljs.core.first(seq__15958_16077__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16083,cljs.core.cst$kw$s_DASH_title);

var G__16084 = cljs.core.next(seq__15958_16077__$1);
var G__16085 = null;
var G__16086 = (0);
var G__16087 = (0);
seq__15958_16067 = G__16084;
chunk__15959_16068 = G__16085;
count__15960_16069 = G__16086;
i__15961_16070 = G__16087;
continue;
}
} else {
}
}
break;
}

var seq__15962_16088 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15963_16089 = null;
var count__15964_16090 = (0);
var i__15965_16091 = (0);
while(true){
if((i__15965_16091 < count__15964_16090)){
var header_16092 = chunk__15963_16089.cljs$core$IIndexed$_nth$arity$2(null,i__15965_16091);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16092,cljs.core.cst$kw$s_DASH_title);

var G__16093 = seq__15962_16088;
var G__16094 = chunk__15963_16089;
var G__16095 = count__15964_16090;
var G__16096 = (i__15965_16091 + (1));
seq__15962_16088 = G__16093;
chunk__15963_16089 = G__16094;
count__15964_16090 = G__16095;
i__15965_16091 = G__16096;
continue;
} else {
var temp__4657__auto___16097 = cljs.core.seq(seq__15962_16088);
if(temp__4657__auto___16097){
var seq__15962_16098__$1 = temp__4657__auto___16097;
if(cljs.core.chunked_seq_QMARK_(seq__15962_16098__$1)){
var c__8792__auto___16099 = cljs.core.chunk_first(seq__15962_16098__$1);
var G__16100 = cljs.core.chunk_rest(seq__15962_16098__$1);
var G__16101 = c__8792__auto___16099;
var G__16102 = cljs.core.count(c__8792__auto___16099);
var G__16103 = (0);
seq__15962_16088 = G__16100;
chunk__15963_16089 = G__16101;
count__15964_16090 = G__16102;
i__15965_16091 = G__16103;
continue;
} else {
var header_16104 = cljs.core.first(seq__15962_16098__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16104,cljs.core.cst$kw$s_DASH_title);

var G__16105 = cljs.core.next(seq__15962_16098__$1);
var G__16106 = null;
var G__16107 = (0);
var G__16108 = (0);
seq__15962_16088 = G__16105;
chunk__15963_16089 = G__16106;
count__15964_16090 = G__16107;
i__15965_16091 = G__16108;
continue;
}
} else {
}
}
break;
}

var seq__15966_16109 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15967_16110 = null;
var count__15968_16111 = (0);
var i__15969_16112 = (0);
while(true){
if((i__15969_16112 < count__15968_16111)){
var header_16113 = chunk__15967_16110.cljs$core$IIndexed$_nth$arity$2(null,i__15969_16112);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16113,cljs.core.cst$kw$s_DASH_title);

var G__16114 = seq__15966_16109;
var G__16115 = chunk__15967_16110;
var G__16116 = count__15968_16111;
var G__16117 = (i__15969_16112 + (1));
seq__15966_16109 = G__16114;
chunk__15967_16110 = G__16115;
count__15968_16111 = G__16116;
i__15969_16112 = G__16117;
continue;
} else {
var temp__4657__auto___16118 = cljs.core.seq(seq__15966_16109);
if(temp__4657__auto___16118){
var seq__15966_16119__$1 = temp__4657__auto___16118;
if(cljs.core.chunked_seq_QMARK_(seq__15966_16119__$1)){
var c__8792__auto___16120 = cljs.core.chunk_first(seq__15966_16119__$1);
var G__16121 = cljs.core.chunk_rest(seq__15966_16119__$1);
var G__16122 = c__8792__auto___16120;
var G__16123 = cljs.core.count(c__8792__auto___16120);
var G__16124 = (0);
seq__15966_16109 = G__16121;
chunk__15967_16110 = G__16122;
count__15968_16111 = G__16123;
i__15969_16112 = G__16124;
continue;
} else {
var header_16125 = cljs.core.first(seq__15966_16119__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16125,cljs.core.cst$kw$s_DASH_title);

var G__16126 = cljs.core.next(seq__15966_16119__$1);
var G__16127 = null;
var G__16128 = (0);
var G__16129 = (0);
seq__15966_16109 = G__16126;
chunk__15967_16110 = G__16127;
count__15968_16111 = G__16128;
i__15969_16112 = G__16129;
continue;
}
} else {
}
}
break;
}

var seq__15970_16130 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15971_16131 = null;
var count__15972_16132 = (0);
var i__15973_16133 = (0);
while(true){
if((i__15973_16133 < count__15972_16132)){
var header_16134 = chunk__15971_16131.cljs$core$IIndexed$_nth$arity$2(null,i__15973_16133);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16134,cljs.core.cst$kw$s_DASH_title);

var G__16135 = seq__15970_16130;
var G__16136 = chunk__15971_16131;
var G__16137 = count__15972_16132;
var G__16138 = (i__15973_16133 + (1));
seq__15970_16130 = G__16135;
chunk__15971_16131 = G__16136;
count__15972_16132 = G__16137;
i__15973_16133 = G__16138;
continue;
} else {
var temp__4657__auto___16139 = cljs.core.seq(seq__15970_16130);
if(temp__4657__auto___16139){
var seq__15970_16140__$1 = temp__4657__auto___16139;
if(cljs.core.chunked_seq_QMARK_(seq__15970_16140__$1)){
var c__8792__auto___16141 = cljs.core.chunk_first(seq__15970_16140__$1);
var G__16142 = cljs.core.chunk_rest(seq__15970_16140__$1);
var G__16143 = c__8792__auto___16141;
var G__16144 = cljs.core.count(c__8792__auto___16141);
var G__16145 = (0);
seq__15970_16130 = G__16142;
chunk__15971_16131 = G__16143;
count__15972_16132 = G__16144;
i__15973_16133 = G__16145;
continue;
} else {
var header_16146 = cljs.core.first(seq__15970_16140__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16146,cljs.core.cst$kw$s_DASH_title);

var G__16147 = cljs.core.next(seq__15970_16140__$1);
var G__16148 = null;
var G__16149 = (0);
var G__16150 = (0);
seq__15970_16130 = G__16147;
chunk__15971_16131 = G__16148;
count__15972_16132 = G__16149;
i__15973_16133 = G__16150;
continue;
}
} else {
}
}
break;
}

var G__16151 = seq__15942;
var G__16152 = chunk__15943;
var G__16153 = count__15944;
var G__16154 = (i__15945 + (1));
seq__15942 = G__16151;
chunk__15943 = G__16152;
count__15944 = G__16153;
i__15945 = G__16154;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15942);
if(temp__4657__auto__){
var seq__15942__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15942__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15942__$1);
var G__16155 = cljs.core.chunk_rest(seq__15942__$1);
var G__16156 = c__8792__auto__;
var G__16157 = cljs.core.count(c__8792__auto__);
var G__16158 = (0);
seq__15942 = G__16155;
chunk__15943 = G__16156;
count__15944 = G__16157;
i__15945 = G__16158;
continue;
} else {
var c = cljs.core.first(seq__15942__$1);
var txt_16159 = (c["innerHTML"]);
var html_16160 = markdown.core.md__GT_html(txt_16159);
(c["innerHTML"] = html_16160);

var seq__15974_16161 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15975_16162 = null;
var count__15976_16163 = (0);
var i__15977_16164 = (0);
while(true){
if((i__15977_16164 < count__15976_16163)){
var table_16165 = chunk__15975_16162.cljs$core$IIndexed$_nth$arity$2(null,i__15977_16164);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16165,cljs.core.cst$kw$table);

var G__16166 = seq__15974_16161;
var G__16167 = chunk__15975_16162;
var G__16168 = count__15976_16163;
var G__16169 = (i__15977_16164 + (1));
seq__15974_16161 = G__16166;
chunk__15975_16162 = G__16167;
count__15976_16163 = G__16168;
i__15977_16164 = G__16169;
continue;
} else {
var temp__4657__auto___16170__$1 = cljs.core.seq(seq__15974_16161);
if(temp__4657__auto___16170__$1){
var seq__15974_16171__$1 = temp__4657__auto___16170__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15974_16171__$1)){
var c__8792__auto___16172 = cljs.core.chunk_first(seq__15974_16171__$1);
var G__16173 = cljs.core.chunk_rest(seq__15974_16171__$1);
var G__16174 = c__8792__auto___16172;
var G__16175 = cljs.core.count(c__8792__auto___16172);
var G__16176 = (0);
seq__15974_16161 = G__16173;
chunk__15975_16162 = G__16174;
count__15976_16163 = G__16175;
i__15977_16164 = G__16176;
continue;
} else {
var table_16177 = cljs.core.first(seq__15974_16171__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_16177,cljs.core.cst$kw$table);

var G__16178 = cljs.core.next(seq__15974_16171__$1);
var G__16179 = null;
var G__16180 = (0);
var G__16181 = (0);
seq__15974_16161 = G__16178;
chunk__15975_16162 = G__16179;
count__15976_16163 = G__16180;
i__15977_16164 = G__16181;
continue;
}
} else {
}
}
break;
}

var seq__15978_16182 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15979_16183 = null;
var count__15980_16184 = (0);
var i__15981_16185 = (0);
while(true){
if((i__15981_16185 < count__15980_16184)){
var header_16186 = chunk__15979_16183.cljs$core$IIndexed$_nth$arity$2(null,i__15981_16185);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16186,cljs.core.cst$kw$s_DASH_title);

var G__16187 = seq__15978_16182;
var G__16188 = chunk__15979_16183;
var G__16189 = count__15980_16184;
var G__16190 = (i__15981_16185 + (1));
seq__15978_16182 = G__16187;
chunk__15979_16183 = G__16188;
count__15980_16184 = G__16189;
i__15981_16185 = G__16190;
continue;
} else {
var temp__4657__auto___16191__$1 = cljs.core.seq(seq__15978_16182);
if(temp__4657__auto___16191__$1){
var seq__15978_16192__$1 = temp__4657__auto___16191__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15978_16192__$1)){
var c__8792__auto___16193 = cljs.core.chunk_first(seq__15978_16192__$1);
var G__16194 = cljs.core.chunk_rest(seq__15978_16192__$1);
var G__16195 = c__8792__auto___16193;
var G__16196 = cljs.core.count(c__8792__auto___16193);
var G__16197 = (0);
seq__15978_16182 = G__16194;
chunk__15979_16183 = G__16195;
count__15980_16184 = G__16196;
i__15981_16185 = G__16197;
continue;
} else {
var header_16198 = cljs.core.first(seq__15978_16192__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16198,cljs.core.cst$kw$s_DASH_title);

var G__16199 = cljs.core.next(seq__15978_16192__$1);
var G__16200 = null;
var G__16201 = (0);
var G__16202 = (0);
seq__15978_16182 = G__16199;
chunk__15979_16183 = G__16200;
count__15980_16184 = G__16201;
i__15981_16185 = G__16202;
continue;
}
} else {
}
}
break;
}

var seq__15982_16203 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15983_16204 = null;
var count__15984_16205 = (0);
var i__15985_16206 = (0);
while(true){
if((i__15985_16206 < count__15984_16205)){
var header_16207 = chunk__15983_16204.cljs$core$IIndexed$_nth$arity$2(null,i__15985_16206);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16207,cljs.core.cst$kw$s_DASH_title);

var G__16208 = seq__15982_16203;
var G__16209 = chunk__15983_16204;
var G__16210 = count__15984_16205;
var G__16211 = (i__15985_16206 + (1));
seq__15982_16203 = G__16208;
chunk__15983_16204 = G__16209;
count__15984_16205 = G__16210;
i__15985_16206 = G__16211;
continue;
} else {
var temp__4657__auto___16212__$1 = cljs.core.seq(seq__15982_16203);
if(temp__4657__auto___16212__$1){
var seq__15982_16213__$1 = temp__4657__auto___16212__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15982_16213__$1)){
var c__8792__auto___16214 = cljs.core.chunk_first(seq__15982_16213__$1);
var G__16215 = cljs.core.chunk_rest(seq__15982_16213__$1);
var G__16216 = c__8792__auto___16214;
var G__16217 = cljs.core.count(c__8792__auto___16214);
var G__16218 = (0);
seq__15982_16203 = G__16215;
chunk__15983_16204 = G__16216;
count__15984_16205 = G__16217;
i__15985_16206 = G__16218;
continue;
} else {
var header_16219 = cljs.core.first(seq__15982_16213__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16219,cljs.core.cst$kw$s_DASH_title);

var G__16220 = cljs.core.next(seq__15982_16213__$1);
var G__16221 = null;
var G__16222 = (0);
var G__16223 = (0);
seq__15982_16203 = G__16220;
chunk__15983_16204 = G__16221;
count__15984_16205 = G__16222;
i__15985_16206 = G__16223;
continue;
}
} else {
}
}
break;
}

var seq__15986_16224 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15987_16225 = null;
var count__15988_16226 = (0);
var i__15989_16227 = (0);
while(true){
if((i__15989_16227 < count__15988_16226)){
var header_16228 = chunk__15987_16225.cljs$core$IIndexed$_nth$arity$2(null,i__15989_16227);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16228,cljs.core.cst$kw$s_DASH_title);

var G__16229 = seq__15986_16224;
var G__16230 = chunk__15987_16225;
var G__16231 = count__15988_16226;
var G__16232 = (i__15989_16227 + (1));
seq__15986_16224 = G__16229;
chunk__15987_16225 = G__16230;
count__15988_16226 = G__16231;
i__15989_16227 = G__16232;
continue;
} else {
var temp__4657__auto___16233__$1 = cljs.core.seq(seq__15986_16224);
if(temp__4657__auto___16233__$1){
var seq__15986_16234__$1 = temp__4657__auto___16233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15986_16234__$1)){
var c__8792__auto___16235 = cljs.core.chunk_first(seq__15986_16234__$1);
var G__16236 = cljs.core.chunk_rest(seq__15986_16234__$1);
var G__16237 = c__8792__auto___16235;
var G__16238 = cljs.core.count(c__8792__auto___16235);
var G__16239 = (0);
seq__15986_16224 = G__16236;
chunk__15987_16225 = G__16237;
count__15988_16226 = G__16238;
i__15989_16227 = G__16239;
continue;
} else {
var header_16240 = cljs.core.first(seq__15986_16234__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16240,cljs.core.cst$kw$s_DASH_title);

var G__16241 = cljs.core.next(seq__15986_16234__$1);
var G__16242 = null;
var G__16243 = (0);
var G__16244 = (0);
seq__15986_16224 = G__16241;
chunk__15987_16225 = G__16242;
count__15988_16226 = G__16243;
i__15989_16227 = G__16244;
continue;
}
} else {
}
}
break;
}

var seq__15990_16245 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15991_16246 = null;
var count__15992_16247 = (0);
var i__15993_16248 = (0);
while(true){
if((i__15993_16248 < count__15992_16247)){
var header_16249 = chunk__15991_16246.cljs$core$IIndexed$_nth$arity$2(null,i__15993_16248);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16249,cljs.core.cst$kw$s_DASH_title);

var G__16250 = seq__15990_16245;
var G__16251 = chunk__15991_16246;
var G__16252 = count__15992_16247;
var G__16253 = (i__15993_16248 + (1));
seq__15990_16245 = G__16250;
chunk__15991_16246 = G__16251;
count__15992_16247 = G__16252;
i__15993_16248 = G__16253;
continue;
} else {
var temp__4657__auto___16254__$1 = cljs.core.seq(seq__15990_16245);
if(temp__4657__auto___16254__$1){
var seq__15990_16255__$1 = temp__4657__auto___16254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15990_16255__$1)){
var c__8792__auto___16256 = cljs.core.chunk_first(seq__15990_16255__$1);
var G__16257 = cljs.core.chunk_rest(seq__15990_16255__$1);
var G__16258 = c__8792__auto___16256;
var G__16259 = cljs.core.count(c__8792__auto___16256);
var G__16260 = (0);
seq__15990_16245 = G__16257;
chunk__15991_16246 = G__16258;
count__15992_16247 = G__16259;
i__15993_16248 = G__16260;
continue;
} else {
var header_16261 = cljs.core.first(seq__15990_16255__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16261,cljs.core.cst$kw$s_DASH_title);

var G__16262 = cljs.core.next(seq__15990_16255__$1);
var G__16263 = null;
var G__16264 = (0);
var G__16265 = (0);
seq__15990_16245 = G__16262;
chunk__15991_16246 = G__16263;
count__15992_16247 = G__16264;
i__15993_16248 = G__16265;
continue;
}
} else {
}
}
break;
}

var seq__15994_16266 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15995_16267 = null;
var count__15996_16268 = (0);
var i__15997_16269 = (0);
while(true){
if((i__15997_16269 < count__15996_16268)){
var header_16270 = chunk__15995_16267.cljs$core$IIndexed$_nth$arity$2(null,i__15997_16269);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16270,cljs.core.cst$kw$s_DASH_title);

var G__16271 = seq__15994_16266;
var G__16272 = chunk__15995_16267;
var G__16273 = count__15996_16268;
var G__16274 = (i__15997_16269 + (1));
seq__15994_16266 = G__16271;
chunk__15995_16267 = G__16272;
count__15996_16268 = G__16273;
i__15997_16269 = G__16274;
continue;
} else {
var temp__4657__auto___16275__$1 = cljs.core.seq(seq__15994_16266);
if(temp__4657__auto___16275__$1){
var seq__15994_16276__$1 = temp__4657__auto___16275__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15994_16276__$1)){
var c__8792__auto___16277 = cljs.core.chunk_first(seq__15994_16276__$1);
var G__16278 = cljs.core.chunk_rest(seq__15994_16276__$1);
var G__16279 = c__8792__auto___16277;
var G__16280 = cljs.core.count(c__8792__auto___16277);
var G__16281 = (0);
seq__15994_16266 = G__16278;
chunk__15995_16267 = G__16279;
count__15996_16268 = G__16280;
i__15997_16269 = G__16281;
continue;
} else {
var header_16282 = cljs.core.first(seq__15994_16276__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16282,cljs.core.cst$kw$s_DASH_title);

var G__16283 = cljs.core.next(seq__15994_16276__$1);
var G__16284 = null;
var G__16285 = (0);
var G__16286 = (0);
seq__15994_16266 = G__16283;
chunk__15995_16267 = G__16284;
count__15996_16268 = G__16285;
i__15997_16269 = G__16286;
continue;
}
} else {
}
}
break;
}

var seq__15998_16287 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15999_16288 = null;
var count__16000_16289 = (0);
var i__16001_16290 = (0);
while(true){
if((i__16001_16290 < count__16000_16289)){
var header_16291 = chunk__15999_16288.cljs$core$IIndexed$_nth$arity$2(null,i__16001_16290);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16291,cljs.core.cst$kw$s_DASH_title);

var G__16292 = seq__15998_16287;
var G__16293 = chunk__15999_16288;
var G__16294 = count__16000_16289;
var G__16295 = (i__16001_16290 + (1));
seq__15998_16287 = G__16292;
chunk__15999_16288 = G__16293;
count__16000_16289 = G__16294;
i__16001_16290 = G__16295;
continue;
} else {
var temp__4657__auto___16296__$1 = cljs.core.seq(seq__15998_16287);
if(temp__4657__auto___16296__$1){
var seq__15998_16297__$1 = temp__4657__auto___16296__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15998_16297__$1)){
var c__8792__auto___16298 = cljs.core.chunk_first(seq__15998_16297__$1);
var G__16299 = cljs.core.chunk_rest(seq__15998_16297__$1);
var G__16300 = c__8792__auto___16298;
var G__16301 = cljs.core.count(c__8792__auto___16298);
var G__16302 = (0);
seq__15998_16287 = G__16299;
chunk__15999_16288 = G__16300;
count__16000_16289 = G__16301;
i__16001_16290 = G__16302;
continue;
} else {
var header_16303 = cljs.core.first(seq__15998_16297__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_16303,cljs.core.cst$kw$s_DASH_title);

var G__16304 = cljs.core.next(seq__15998_16297__$1);
var G__16305 = null;
var G__16306 = (0);
var G__16307 = (0);
seq__15998_16287 = G__16304;
chunk__15999_16288 = G__16305;
count__16000_16289 = G__16306;
i__16001_16290 = G__16307;
continue;
}
} else {
}
}
break;
}

var G__16308 = cljs.core.next(seq__15942__$1);
var G__16309 = null;
var G__16310 = (0);
var G__16311 = (0);
seq__15942 = G__16308;
chunk__15943 = G__16309;
count__15944 = G__16310;
i__15945 = G__16311;
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
var final_width = (function (){var G__16312 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16312);
})();
var final_height = (function (){var G__16313 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16313);
})();
var buffer_width = (function (){var G__16314 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16314);
})();
var kusi_width = (function (){var G__16315 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16315);
})();
var orig_border_width = (function (){var G__16316 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__16316);
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
