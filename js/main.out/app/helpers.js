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
var seq__15555 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__15556 = null;
var count__15557 = (0);
var i__15558 = (0);
while(true){
if((i__15558 < count__15557)){
var c = chunk__15556.cljs$core$IIndexed$_nth$arity$2(null,i__15558);
var txt_15615 = (c["innerHTML"]);
var html_15616 = markdown.core.md__GT_html(txt_15615);
(c["innerHTML"] = html_15616);

var seq__15559_15617 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15560_15618 = null;
var count__15561_15619 = (0);
var i__15562_15620 = (0);
while(true){
if((i__15562_15620 < count__15561_15619)){
var table_15621 = chunk__15560_15618.cljs$core$IIndexed$_nth$arity$2(null,i__15562_15620);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15621,cljs.core.cst$kw$table);

var G__15622 = seq__15559_15617;
var G__15623 = chunk__15560_15618;
var G__15624 = count__15561_15619;
var G__15625 = (i__15562_15620 + (1));
seq__15559_15617 = G__15622;
chunk__15560_15618 = G__15623;
count__15561_15619 = G__15624;
i__15562_15620 = G__15625;
continue;
} else {
var temp__4657__auto___15626 = cljs.core.seq(seq__15559_15617);
if(temp__4657__auto___15626){
var seq__15559_15627__$1 = temp__4657__auto___15626;
if(cljs.core.chunked_seq_QMARK_(seq__15559_15627__$1)){
var c__8792__auto___15628 = cljs.core.chunk_first(seq__15559_15627__$1);
var G__15629 = cljs.core.chunk_rest(seq__15559_15627__$1);
var G__15630 = c__8792__auto___15628;
var G__15631 = cljs.core.count(c__8792__auto___15628);
var G__15632 = (0);
seq__15559_15617 = G__15629;
chunk__15560_15618 = G__15630;
count__15561_15619 = G__15631;
i__15562_15620 = G__15632;
continue;
} else {
var table_15633 = cljs.core.first(seq__15559_15627__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15633,cljs.core.cst$kw$table);

var G__15634 = cljs.core.next(seq__15559_15627__$1);
var G__15635 = null;
var G__15636 = (0);
var G__15637 = (0);
seq__15559_15617 = G__15634;
chunk__15560_15618 = G__15635;
count__15561_15619 = G__15636;
i__15562_15620 = G__15637;
continue;
}
} else {
}
}
break;
}

var seq__15563_15638 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15564_15639 = null;
var count__15565_15640 = (0);
var i__15566_15641 = (0);
while(true){
if((i__15566_15641 < count__15565_15640)){
var header_15642 = chunk__15564_15639.cljs$core$IIndexed$_nth$arity$2(null,i__15566_15641);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15642,cljs.core.cst$kw$s_DASH_title);

var G__15643 = seq__15563_15638;
var G__15644 = chunk__15564_15639;
var G__15645 = count__15565_15640;
var G__15646 = (i__15566_15641 + (1));
seq__15563_15638 = G__15643;
chunk__15564_15639 = G__15644;
count__15565_15640 = G__15645;
i__15566_15641 = G__15646;
continue;
} else {
var temp__4657__auto___15647 = cljs.core.seq(seq__15563_15638);
if(temp__4657__auto___15647){
var seq__15563_15648__$1 = temp__4657__auto___15647;
if(cljs.core.chunked_seq_QMARK_(seq__15563_15648__$1)){
var c__8792__auto___15649 = cljs.core.chunk_first(seq__15563_15648__$1);
var G__15650 = cljs.core.chunk_rest(seq__15563_15648__$1);
var G__15651 = c__8792__auto___15649;
var G__15652 = cljs.core.count(c__8792__auto___15649);
var G__15653 = (0);
seq__15563_15638 = G__15650;
chunk__15564_15639 = G__15651;
count__15565_15640 = G__15652;
i__15566_15641 = G__15653;
continue;
} else {
var header_15654 = cljs.core.first(seq__15563_15648__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15654,cljs.core.cst$kw$s_DASH_title);

var G__15655 = cljs.core.next(seq__15563_15648__$1);
var G__15656 = null;
var G__15657 = (0);
var G__15658 = (0);
seq__15563_15638 = G__15655;
chunk__15564_15639 = G__15656;
count__15565_15640 = G__15657;
i__15566_15641 = G__15658;
continue;
}
} else {
}
}
break;
}

var seq__15567_15659 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15568_15660 = null;
var count__15569_15661 = (0);
var i__15570_15662 = (0);
while(true){
if((i__15570_15662 < count__15569_15661)){
var header_15663 = chunk__15568_15660.cljs$core$IIndexed$_nth$arity$2(null,i__15570_15662);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15663,cljs.core.cst$kw$s_DASH_title);

var G__15664 = seq__15567_15659;
var G__15665 = chunk__15568_15660;
var G__15666 = count__15569_15661;
var G__15667 = (i__15570_15662 + (1));
seq__15567_15659 = G__15664;
chunk__15568_15660 = G__15665;
count__15569_15661 = G__15666;
i__15570_15662 = G__15667;
continue;
} else {
var temp__4657__auto___15668 = cljs.core.seq(seq__15567_15659);
if(temp__4657__auto___15668){
var seq__15567_15669__$1 = temp__4657__auto___15668;
if(cljs.core.chunked_seq_QMARK_(seq__15567_15669__$1)){
var c__8792__auto___15670 = cljs.core.chunk_first(seq__15567_15669__$1);
var G__15671 = cljs.core.chunk_rest(seq__15567_15669__$1);
var G__15672 = c__8792__auto___15670;
var G__15673 = cljs.core.count(c__8792__auto___15670);
var G__15674 = (0);
seq__15567_15659 = G__15671;
chunk__15568_15660 = G__15672;
count__15569_15661 = G__15673;
i__15570_15662 = G__15674;
continue;
} else {
var header_15675 = cljs.core.first(seq__15567_15669__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15675,cljs.core.cst$kw$s_DASH_title);

var G__15676 = cljs.core.next(seq__15567_15669__$1);
var G__15677 = null;
var G__15678 = (0);
var G__15679 = (0);
seq__15567_15659 = G__15676;
chunk__15568_15660 = G__15677;
count__15569_15661 = G__15678;
i__15570_15662 = G__15679;
continue;
}
} else {
}
}
break;
}

var seq__15571_15680 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15572_15681 = null;
var count__15573_15682 = (0);
var i__15574_15683 = (0);
while(true){
if((i__15574_15683 < count__15573_15682)){
var header_15684 = chunk__15572_15681.cljs$core$IIndexed$_nth$arity$2(null,i__15574_15683);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15684,cljs.core.cst$kw$s_DASH_title);

var G__15685 = seq__15571_15680;
var G__15686 = chunk__15572_15681;
var G__15687 = count__15573_15682;
var G__15688 = (i__15574_15683 + (1));
seq__15571_15680 = G__15685;
chunk__15572_15681 = G__15686;
count__15573_15682 = G__15687;
i__15574_15683 = G__15688;
continue;
} else {
var temp__4657__auto___15689 = cljs.core.seq(seq__15571_15680);
if(temp__4657__auto___15689){
var seq__15571_15690__$1 = temp__4657__auto___15689;
if(cljs.core.chunked_seq_QMARK_(seq__15571_15690__$1)){
var c__8792__auto___15691 = cljs.core.chunk_first(seq__15571_15690__$1);
var G__15692 = cljs.core.chunk_rest(seq__15571_15690__$1);
var G__15693 = c__8792__auto___15691;
var G__15694 = cljs.core.count(c__8792__auto___15691);
var G__15695 = (0);
seq__15571_15680 = G__15692;
chunk__15572_15681 = G__15693;
count__15573_15682 = G__15694;
i__15574_15683 = G__15695;
continue;
} else {
var header_15696 = cljs.core.first(seq__15571_15690__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15696,cljs.core.cst$kw$s_DASH_title);

var G__15697 = cljs.core.next(seq__15571_15690__$1);
var G__15698 = null;
var G__15699 = (0);
var G__15700 = (0);
seq__15571_15680 = G__15697;
chunk__15572_15681 = G__15698;
count__15573_15682 = G__15699;
i__15574_15683 = G__15700;
continue;
}
} else {
}
}
break;
}

var seq__15575_15701 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15576_15702 = null;
var count__15577_15703 = (0);
var i__15578_15704 = (0);
while(true){
if((i__15578_15704 < count__15577_15703)){
var header_15705 = chunk__15576_15702.cljs$core$IIndexed$_nth$arity$2(null,i__15578_15704);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15705,cljs.core.cst$kw$s_DASH_title);

var G__15706 = seq__15575_15701;
var G__15707 = chunk__15576_15702;
var G__15708 = count__15577_15703;
var G__15709 = (i__15578_15704 + (1));
seq__15575_15701 = G__15706;
chunk__15576_15702 = G__15707;
count__15577_15703 = G__15708;
i__15578_15704 = G__15709;
continue;
} else {
var temp__4657__auto___15710 = cljs.core.seq(seq__15575_15701);
if(temp__4657__auto___15710){
var seq__15575_15711__$1 = temp__4657__auto___15710;
if(cljs.core.chunked_seq_QMARK_(seq__15575_15711__$1)){
var c__8792__auto___15712 = cljs.core.chunk_first(seq__15575_15711__$1);
var G__15713 = cljs.core.chunk_rest(seq__15575_15711__$1);
var G__15714 = c__8792__auto___15712;
var G__15715 = cljs.core.count(c__8792__auto___15712);
var G__15716 = (0);
seq__15575_15701 = G__15713;
chunk__15576_15702 = G__15714;
count__15577_15703 = G__15715;
i__15578_15704 = G__15716;
continue;
} else {
var header_15717 = cljs.core.first(seq__15575_15711__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15717,cljs.core.cst$kw$s_DASH_title);

var G__15718 = cljs.core.next(seq__15575_15711__$1);
var G__15719 = null;
var G__15720 = (0);
var G__15721 = (0);
seq__15575_15701 = G__15718;
chunk__15576_15702 = G__15719;
count__15577_15703 = G__15720;
i__15578_15704 = G__15721;
continue;
}
} else {
}
}
break;
}

var seq__15579_15722 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15580_15723 = null;
var count__15581_15724 = (0);
var i__15582_15725 = (0);
while(true){
if((i__15582_15725 < count__15581_15724)){
var header_15726 = chunk__15580_15723.cljs$core$IIndexed$_nth$arity$2(null,i__15582_15725);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15726,cljs.core.cst$kw$s_DASH_title);

var G__15727 = seq__15579_15722;
var G__15728 = chunk__15580_15723;
var G__15729 = count__15581_15724;
var G__15730 = (i__15582_15725 + (1));
seq__15579_15722 = G__15727;
chunk__15580_15723 = G__15728;
count__15581_15724 = G__15729;
i__15582_15725 = G__15730;
continue;
} else {
var temp__4657__auto___15731 = cljs.core.seq(seq__15579_15722);
if(temp__4657__auto___15731){
var seq__15579_15732__$1 = temp__4657__auto___15731;
if(cljs.core.chunked_seq_QMARK_(seq__15579_15732__$1)){
var c__8792__auto___15733 = cljs.core.chunk_first(seq__15579_15732__$1);
var G__15734 = cljs.core.chunk_rest(seq__15579_15732__$1);
var G__15735 = c__8792__auto___15733;
var G__15736 = cljs.core.count(c__8792__auto___15733);
var G__15737 = (0);
seq__15579_15722 = G__15734;
chunk__15580_15723 = G__15735;
count__15581_15724 = G__15736;
i__15582_15725 = G__15737;
continue;
} else {
var header_15738 = cljs.core.first(seq__15579_15732__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15738,cljs.core.cst$kw$s_DASH_title);

var G__15739 = cljs.core.next(seq__15579_15732__$1);
var G__15740 = null;
var G__15741 = (0);
var G__15742 = (0);
seq__15579_15722 = G__15739;
chunk__15580_15723 = G__15740;
count__15581_15724 = G__15741;
i__15582_15725 = G__15742;
continue;
}
} else {
}
}
break;
}

var seq__15583_15743 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15584_15744 = null;
var count__15585_15745 = (0);
var i__15586_15746 = (0);
while(true){
if((i__15586_15746 < count__15585_15745)){
var header_15747 = chunk__15584_15744.cljs$core$IIndexed$_nth$arity$2(null,i__15586_15746);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15747,cljs.core.cst$kw$s_DASH_title);

var G__15748 = seq__15583_15743;
var G__15749 = chunk__15584_15744;
var G__15750 = count__15585_15745;
var G__15751 = (i__15586_15746 + (1));
seq__15583_15743 = G__15748;
chunk__15584_15744 = G__15749;
count__15585_15745 = G__15750;
i__15586_15746 = G__15751;
continue;
} else {
var temp__4657__auto___15752 = cljs.core.seq(seq__15583_15743);
if(temp__4657__auto___15752){
var seq__15583_15753__$1 = temp__4657__auto___15752;
if(cljs.core.chunked_seq_QMARK_(seq__15583_15753__$1)){
var c__8792__auto___15754 = cljs.core.chunk_first(seq__15583_15753__$1);
var G__15755 = cljs.core.chunk_rest(seq__15583_15753__$1);
var G__15756 = c__8792__auto___15754;
var G__15757 = cljs.core.count(c__8792__auto___15754);
var G__15758 = (0);
seq__15583_15743 = G__15755;
chunk__15584_15744 = G__15756;
count__15585_15745 = G__15757;
i__15586_15746 = G__15758;
continue;
} else {
var header_15759 = cljs.core.first(seq__15583_15753__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15759,cljs.core.cst$kw$s_DASH_title);

var G__15760 = cljs.core.next(seq__15583_15753__$1);
var G__15761 = null;
var G__15762 = (0);
var G__15763 = (0);
seq__15583_15743 = G__15760;
chunk__15584_15744 = G__15761;
count__15585_15745 = G__15762;
i__15586_15746 = G__15763;
continue;
}
} else {
}
}
break;
}

var G__15764 = seq__15555;
var G__15765 = chunk__15556;
var G__15766 = count__15557;
var G__15767 = (i__15558 + (1));
seq__15555 = G__15764;
chunk__15556 = G__15765;
count__15557 = G__15766;
i__15558 = G__15767;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15555);
if(temp__4657__auto__){
var seq__15555__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15555__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15555__$1);
var G__15768 = cljs.core.chunk_rest(seq__15555__$1);
var G__15769 = c__8792__auto__;
var G__15770 = cljs.core.count(c__8792__auto__);
var G__15771 = (0);
seq__15555 = G__15768;
chunk__15556 = G__15769;
count__15557 = G__15770;
i__15558 = G__15771;
continue;
} else {
var c = cljs.core.first(seq__15555__$1);
var txt_15772 = (c["innerHTML"]);
var html_15773 = markdown.core.md__GT_html(txt_15772);
(c["innerHTML"] = html_15773);

var seq__15587_15774 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15588_15775 = null;
var count__15589_15776 = (0);
var i__15590_15777 = (0);
while(true){
if((i__15590_15777 < count__15589_15776)){
var table_15778 = chunk__15588_15775.cljs$core$IIndexed$_nth$arity$2(null,i__15590_15777);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15778,cljs.core.cst$kw$table);

var G__15779 = seq__15587_15774;
var G__15780 = chunk__15588_15775;
var G__15781 = count__15589_15776;
var G__15782 = (i__15590_15777 + (1));
seq__15587_15774 = G__15779;
chunk__15588_15775 = G__15780;
count__15589_15776 = G__15781;
i__15590_15777 = G__15782;
continue;
} else {
var temp__4657__auto___15783__$1 = cljs.core.seq(seq__15587_15774);
if(temp__4657__auto___15783__$1){
var seq__15587_15784__$1 = temp__4657__auto___15783__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15587_15784__$1)){
var c__8792__auto___15785 = cljs.core.chunk_first(seq__15587_15784__$1);
var G__15786 = cljs.core.chunk_rest(seq__15587_15784__$1);
var G__15787 = c__8792__auto___15785;
var G__15788 = cljs.core.count(c__8792__auto___15785);
var G__15789 = (0);
seq__15587_15774 = G__15786;
chunk__15588_15775 = G__15787;
count__15589_15776 = G__15788;
i__15590_15777 = G__15789;
continue;
} else {
var table_15790 = cljs.core.first(seq__15587_15784__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15790,cljs.core.cst$kw$table);

var G__15791 = cljs.core.next(seq__15587_15784__$1);
var G__15792 = null;
var G__15793 = (0);
var G__15794 = (0);
seq__15587_15774 = G__15791;
chunk__15588_15775 = G__15792;
count__15589_15776 = G__15793;
i__15590_15777 = G__15794;
continue;
}
} else {
}
}
break;
}

var seq__15591_15795 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15592_15796 = null;
var count__15593_15797 = (0);
var i__15594_15798 = (0);
while(true){
if((i__15594_15798 < count__15593_15797)){
var header_15799 = chunk__15592_15796.cljs$core$IIndexed$_nth$arity$2(null,i__15594_15798);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15799,cljs.core.cst$kw$s_DASH_title);

var G__15800 = seq__15591_15795;
var G__15801 = chunk__15592_15796;
var G__15802 = count__15593_15797;
var G__15803 = (i__15594_15798 + (1));
seq__15591_15795 = G__15800;
chunk__15592_15796 = G__15801;
count__15593_15797 = G__15802;
i__15594_15798 = G__15803;
continue;
} else {
var temp__4657__auto___15804__$1 = cljs.core.seq(seq__15591_15795);
if(temp__4657__auto___15804__$1){
var seq__15591_15805__$1 = temp__4657__auto___15804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15591_15805__$1)){
var c__8792__auto___15806 = cljs.core.chunk_first(seq__15591_15805__$1);
var G__15807 = cljs.core.chunk_rest(seq__15591_15805__$1);
var G__15808 = c__8792__auto___15806;
var G__15809 = cljs.core.count(c__8792__auto___15806);
var G__15810 = (0);
seq__15591_15795 = G__15807;
chunk__15592_15796 = G__15808;
count__15593_15797 = G__15809;
i__15594_15798 = G__15810;
continue;
} else {
var header_15811 = cljs.core.first(seq__15591_15805__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15811,cljs.core.cst$kw$s_DASH_title);

var G__15812 = cljs.core.next(seq__15591_15805__$1);
var G__15813 = null;
var G__15814 = (0);
var G__15815 = (0);
seq__15591_15795 = G__15812;
chunk__15592_15796 = G__15813;
count__15593_15797 = G__15814;
i__15594_15798 = G__15815;
continue;
}
} else {
}
}
break;
}

var seq__15595_15816 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15596_15817 = null;
var count__15597_15818 = (0);
var i__15598_15819 = (0);
while(true){
if((i__15598_15819 < count__15597_15818)){
var header_15820 = chunk__15596_15817.cljs$core$IIndexed$_nth$arity$2(null,i__15598_15819);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15820,cljs.core.cst$kw$s_DASH_title);

var G__15821 = seq__15595_15816;
var G__15822 = chunk__15596_15817;
var G__15823 = count__15597_15818;
var G__15824 = (i__15598_15819 + (1));
seq__15595_15816 = G__15821;
chunk__15596_15817 = G__15822;
count__15597_15818 = G__15823;
i__15598_15819 = G__15824;
continue;
} else {
var temp__4657__auto___15825__$1 = cljs.core.seq(seq__15595_15816);
if(temp__4657__auto___15825__$1){
var seq__15595_15826__$1 = temp__4657__auto___15825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15595_15826__$1)){
var c__8792__auto___15827 = cljs.core.chunk_first(seq__15595_15826__$1);
var G__15828 = cljs.core.chunk_rest(seq__15595_15826__$1);
var G__15829 = c__8792__auto___15827;
var G__15830 = cljs.core.count(c__8792__auto___15827);
var G__15831 = (0);
seq__15595_15816 = G__15828;
chunk__15596_15817 = G__15829;
count__15597_15818 = G__15830;
i__15598_15819 = G__15831;
continue;
} else {
var header_15832 = cljs.core.first(seq__15595_15826__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15832,cljs.core.cst$kw$s_DASH_title);

var G__15833 = cljs.core.next(seq__15595_15826__$1);
var G__15834 = null;
var G__15835 = (0);
var G__15836 = (0);
seq__15595_15816 = G__15833;
chunk__15596_15817 = G__15834;
count__15597_15818 = G__15835;
i__15598_15819 = G__15836;
continue;
}
} else {
}
}
break;
}

var seq__15599_15837 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15600_15838 = null;
var count__15601_15839 = (0);
var i__15602_15840 = (0);
while(true){
if((i__15602_15840 < count__15601_15839)){
var header_15841 = chunk__15600_15838.cljs$core$IIndexed$_nth$arity$2(null,i__15602_15840);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15841,cljs.core.cst$kw$s_DASH_title);

var G__15842 = seq__15599_15837;
var G__15843 = chunk__15600_15838;
var G__15844 = count__15601_15839;
var G__15845 = (i__15602_15840 + (1));
seq__15599_15837 = G__15842;
chunk__15600_15838 = G__15843;
count__15601_15839 = G__15844;
i__15602_15840 = G__15845;
continue;
} else {
var temp__4657__auto___15846__$1 = cljs.core.seq(seq__15599_15837);
if(temp__4657__auto___15846__$1){
var seq__15599_15847__$1 = temp__4657__auto___15846__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15599_15847__$1)){
var c__8792__auto___15848 = cljs.core.chunk_first(seq__15599_15847__$1);
var G__15849 = cljs.core.chunk_rest(seq__15599_15847__$1);
var G__15850 = c__8792__auto___15848;
var G__15851 = cljs.core.count(c__8792__auto___15848);
var G__15852 = (0);
seq__15599_15837 = G__15849;
chunk__15600_15838 = G__15850;
count__15601_15839 = G__15851;
i__15602_15840 = G__15852;
continue;
} else {
var header_15853 = cljs.core.first(seq__15599_15847__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15853,cljs.core.cst$kw$s_DASH_title);

var G__15854 = cljs.core.next(seq__15599_15847__$1);
var G__15855 = null;
var G__15856 = (0);
var G__15857 = (0);
seq__15599_15837 = G__15854;
chunk__15600_15838 = G__15855;
count__15601_15839 = G__15856;
i__15602_15840 = G__15857;
continue;
}
} else {
}
}
break;
}

var seq__15603_15858 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15604_15859 = null;
var count__15605_15860 = (0);
var i__15606_15861 = (0);
while(true){
if((i__15606_15861 < count__15605_15860)){
var header_15862 = chunk__15604_15859.cljs$core$IIndexed$_nth$arity$2(null,i__15606_15861);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15862,cljs.core.cst$kw$s_DASH_title);

var G__15863 = seq__15603_15858;
var G__15864 = chunk__15604_15859;
var G__15865 = count__15605_15860;
var G__15866 = (i__15606_15861 + (1));
seq__15603_15858 = G__15863;
chunk__15604_15859 = G__15864;
count__15605_15860 = G__15865;
i__15606_15861 = G__15866;
continue;
} else {
var temp__4657__auto___15867__$1 = cljs.core.seq(seq__15603_15858);
if(temp__4657__auto___15867__$1){
var seq__15603_15868__$1 = temp__4657__auto___15867__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15603_15868__$1)){
var c__8792__auto___15869 = cljs.core.chunk_first(seq__15603_15868__$1);
var G__15870 = cljs.core.chunk_rest(seq__15603_15868__$1);
var G__15871 = c__8792__auto___15869;
var G__15872 = cljs.core.count(c__8792__auto___15869);
var G__15873 = (0);
seq__15603_15858 = G__15870;
chunk__15604_15859 = G__15871;
count__15605_15860 = G__15872;
i__15606_15861 = G__15873;
continue;
} else {
var header_15874 = cljs.core.first(seq__15603_15868__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15874,cljs.core.cst$kw$s_DASH_title);

var G__15875 = cljs.core.next(seq__15603_15868__$1);
var G__15876 = null;
var G__15877 = (0);
var G__15878 = (0);
seq__15603_15858 = G__15875;
chunk__15604_15859 = G__15876;
count__15605_15860 = G__15877;
i__15606_15861 = G__15878;
continue;
}
} else {
}
}
break;
}

var seq__15607_15879 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15608_15880 = null;
var count__15609_15881 = (0);
var i__15610_15882 = (0);
while(true){
if((i__15610_15882 < count__15609_15881)){
var header_15883 = chunk__15608_15880.cljs$core$IIndexed$_nth$arity$2(null,i__15610_15882);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15883,cljs.core.cst$kw$s_DASH_title);

var G__15884 = seq__15607_15879;
var G__15885 = chunk__15608_15880;
var G__15886 = count__15609_15881;
var G__15887 = (i__15610_15882 + (1));
seq__15607_15879 = G__15884;
chunk__15608_15880 = G__15885;
count__15609_15881 = G__15886;
i__15610_15882 = G__15887;
continue;
} else {
var temp__4657__auto___15888__$1 = cljs.core.seq(seq__15607_15879);
if(temp__4657__auto___15888__$1){
var seq__15607_15889__$1 = temp__4657__auto___15888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15607_15889__$1)){
var c__8792__auto___15890 = cljs.core.chunk_first(seq__15607_15889__$1);
var G__15891 = cljs.core.chunk_rest(seq__15607_15889__$1);
var G__15892 = c__8792__auto___15890;
var G__15893 = cljs.core.count(c__8792__auto___15890);
var G__15894 = (0);
seq__15607_15879 = G__15891;
chunk__15608_15880 = G__15892;
count__15609_15881 = G__15893;
i__15610_15882 = G__15894;
continue;
} else {
var header_15895 = cljs.core.first(seq__15607_15889__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15895,cljs.core.cst$kw$s_DASH_title);

var G__15896 = cljs.core.next(seq__15607_15889__$1);
var G__15897 = null;
var G__15898 = (0);
var G__15899 = (0);
seq__15607_15879 = G__15896;
chunk__15608_15880 = G__15897;
count__15609_15881 = G__15898;
i__15610_15882 = G__15899;
continue;
}
} else {
}
}
break;
}

var seq__15611_15900 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15612_15901 = null;
var count__15613_15902 = (0);
var i__15614_15903 = (0);
while(true){
if((i__15614_15903 < count__15613_15902)){
var header_15904 = chunk__15612_15901.cljs$core$IIndexed$_nth$arity$2(null,i__15614_15903);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15904,cljs.core.cst$kw$s_DASH_title);

var G__15905 = seq__15611_15900;
var G__15906 = chunk__15612_15901;
var G__15907 = count__15613_15902;
var G__15908 = (i__15614_15903 + (1));
seq__15611_15900 = G__15905;
chunk__15612_15901 = G__15906;
count__15613_15902 = G__15907;
i__15614_15903 = G__15908;
continue;
} else {
var temp__4657__auto___15909__$1 = cljs.core.seq(seq__15611_15900);
if(temp__4657__auto___15909__$1){
var seq__15611_15910__$1 = temp__4657__auto___15909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15611_15910__$1)){
var c__8792__auto___15911 = cljs.core.chunk_first(seq__15611_15910__$1);
var G__15912 = cljs.core.chunk_rest(seq__15611_15910__$1);
var G__15913 = c__8792__auto___15911;
var G__15914 = cljs.core.count(c__8792__auto___15911);
var G__15915 = (0);
seq__15611_15900 = G__15912;
chunk__15612_15901 = G__15913;
count__15613_15902 = G__15914;
i__15614_15903 = G__15915;
continue;
} else {
var header_15916 = cljs.core.first(seq__15611_15910__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15916,cljs.core.cst$kw$s_DASH_title);

var G__15917 = cljs.core.next(seq__15611_15910__$1);
var G__15918 = null;
var G__15919 = (0);
var G__15920 = (0);
seq__15611_15900 = G__15917;
chunk__15612_15901 = G__15918;
count__15613_15902 = G__15919;
i__15614_15903 = G__15920;
continue;
}
} else {
}
}
break;
}

var G__15921 = cljs.core.next(seq__15555__$1);
var G__15922 = null;
var G__15923 = (0);
var G__15924 = (0);
seq__15555 = G__15921;
chunk__15556 = G__15922;
count__15557 = G__15923;
i__15558 = G__15924;
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
var final_width = (function (){var G__15925 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15925);
})();
var final_height = (function (){var G__15926 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15926);
})();
var buffer_width = (function (){var G__15927 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15927);
})();
var kusi_width = (function (){var G__15928 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15928);
})();
var orig_border_width = (function (){var G__15929 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15929);
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
