// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('monet.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
monet.core.animation_frame = (function (){var or__7953__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__7953__auto__)){
return or__7953__auto__;
} else {
var or__7953__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__7953__auto____$1)){
return or__7953__auto____$1;
} else {
var or__7953__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__7953__auto____$2)){
return or__7953__auto____$2;
} else {
var or__7953__auto____$3 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__7953__auto____$3)){
return or__7953__auto____$3;
} else {
var or__7953__auto____$4 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__7953__auto____$4)){
return or__7953__auto____$4;
} else {
return ((function (or__7953__auto____$4,or__7953__auto____$3,or__7953__auto____$2,or__7953__auto____$1,or__7953__auto__){
return (function (callback){
return setTimeout(callback,(17));
});
;})(or__7953__auto____$4,or__7953__auto____$3,or__7953__auto____$2,or__7953__auto____$1,or__7953__auto__))
}
}
}
}
}
})();
