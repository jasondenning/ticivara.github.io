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
var seq__15537 = cljs.core.seq(dommy.utils.__GT_Array(document.getElementsByClassName("render-markdown")));
var chunk__15538 = null;
var count__15539 = (0);
var i__15540 = (0);
while(true){
if((i__15540 < count__15539)){
var c = chunk__15538.cljs$core$IIndexed$_nth$arity$2(null,i__15540);
var txt_15597 = (c["innerHTML"]);
var html_15598 = markdown.core.md__GT_html(txt_15597);
(c["innerHTML"] = html_15598);

var seq__15541_15599 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15542_15600 = null;
var count__15543_15601 = (0);
var i__15544_15602 = (0);
while(true){
if((i__15544_15602 < count__15543_15601)){
var table_15603 = chunk__15542_15600.cljs$core$IIndexed$_nth$arity$2(null,i__15544_15602);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15603,cljs.core.cst$kw$table);

var G__15604 = seq__15541_15599;
var G__15605 = chunk__15542_15600;
var G__15606 = count__15543_15601;
var G__15607 = (i__15544_15602 + (1));
seq__15541_15599 = G__15604;
chunk__15542_15600 = G__15605;
count__15543_15601 = G__15606;
i__15544_15602 = G__15607;
continue;
} else {
var temp__4657__auto___15608 = cljs.core.seq(seq__15541_15599);
if(temp__4657__auto___15608){
var seq__15541_15609__$1 = temp__4657__auto___15608;
if(cljs.core.chunked_seq_QMARK_(seq__15541_15609__$1)){
var c__8792__auto___15610 = cljs.core.chunk_first(seq__15541_15609__$1);
var G__15611 = cljs.core.chunk_rest(seq__15541_15609__$1);
var G__15612 = c__8792__auto___15610;
var G__15613 = cljs.core.count(c__8792__auto___15610);
var G__15614 = (0);
seq__15541_15599 = G__15611;
chunk__15542_15600 = G__15612;
count__15543_15601 = G__15613;
i__15544_15602 = G__15614;
continue;
} else {
var table_15615 = cljs.core.first(seq__15541_15609__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15615,cljs.core.cst$kw$table);

var G__15616 = cljs.core.next(seq__15541_15609__$1);
var G__15617 = null;
var G__15618 = (0);
var G__15619 = (0);
seq__15541_15599 = G__15616;
chunk__15542_15600 = G__15617;
count__15543_15601 = G__15618;
i__15544_15602 = G__15619;
continue;
}
} else {
}
}
break;
}

var seq__15545_15620 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15546_15621 = null;
var count__15547_15622 = (0);
var i__15548_15623 = (0);
while(true){
if((i__15548_15623 < count__15547_15622)){
var header_15624 = chunk__15546_15621.cljs$core$IIndexed$_nth$arity$2(null,i__15548_15623);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15624,cljs.core.cst$kw$s_DASH_title);

var G__15625 = seq__15545_15620;
var G__15626 = chunk__15546_15621;
var G__15627 = count__15547_15622;
var G__15628 = (i__15548_15623 + (1));
seq__15545_15620 = G__15625;
chunk__15546_15621 = G__15626;
count__15547_15622 = G__15627;
i__15548_15623 = G__15628;
continue;
} else {
var temp__4657__auto___15629 = cljs.core.seq(seq__15545_15620);
if(temp__4657__auto___15629){
var seq__15545_15630__$1 = temp__4657__auto___15629;
if(cljs.core.chunked_seq_QMARK_(seq__15545_15630__$1)){
var c__8792__auto___15631 = cljs.core.chunk_first(seq__15545_15630__$1);
var G__15632 = cljs.core.chunk_rest(seq__15545_15630__$1);
var G__15633 = c__8792__auto___15631;
var G__15634 = cljs.core.count(c__8792__auto___15631);
var G__15635 = (0);
seq__15545_15620 = G__15632;
chunk__15546_15621 = G__15633;
count__15547_15622 = G__15634;
i__15548_15623 = G__15635;
continue;
} else {
var header_15636 = cljs.core.first(seq__15545_15630__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15636,cljs.core.cst$kw$s_DASH_title);

var G__15637 = cljs.core.next(seq__15545_15630__$1);
var G__15638 = null;
var G__15639 = (0);
var G__15640 = (0);
seq__15545_15620 = G__15637;
chunk__15546_15621 = G__15638;
count__15547_15622 = G__15639;
i__15548_15623 = G__15640;
continue;
}
} else {
}
}
break;
}

var seq__15549_15641 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15550_15642 = null;
var count__15551_15643 = (0);
var i__15552_15644 = (0);
while(true){
if((i__15552_15644 < count__15551_15643)){
var header_15645 = chunk__15550_15642.cljs$core$IIndexed$_nth$arity$2(null,i__15552_15644);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15645,cljs.core.cst$kw$s_DASH_title);

var G__15646 = seq__15549_15641;
var G__15647 = chunk__15550_15642;
var G__15648 = count__15551_15643;
var G__15649 = (i__15552_15644 + (1));
seq__15549_15641 = G__15646;
chunk__15550_15642 = G__15647;
count__15551_15643 = G__15648;
i__15552_15644 = G__15649;
continue;
} else {
var temp__4657__auto___15650 = cljs.core.seq(seq__15549_15641);
if(temp__4657__auto___15650){
var seq__15549_15651__$1 = temp__4657__auto___15650;
if(cljs.core.chunked_seq_QMARK_(seq__15549_15651__$1)){
var c__8792__auto___15652 = cljs.core.chunk_first(seq__15549_15651__$1);
var G__15653 = cljs.core.chunk_rest(seq__15549_15651__$1);
var G__15654 = c__8792__auto___15652;
var G__15655 = cljs.core.count(c__8792__auto___15652);
var G__15656 = (0);
seq__15549_15641 = G__15653;
chunk__15550_15642 = G__15654;
count__15551_15643 = G__15655;
i__15552_15644 = G__15656;
continue;
} else {
var header_15657 = cljs.core.first(seq__15549_15651__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15657,cljs.core.cst$kw$s_DASH_title);

var G__15658 = cljs.core.next(seq__15549_15651__$1);
var G__15659 = null;
var G__15660 = (0);
var G__15661 = (0);
seq__15549_15641 = G__15658;
chunk__15550_15642 = G__15659;
count__15551_15643 = G__15660;
i__15552_15644 = G__15661;
continue;
}
} else {
}
}
break;
}

var seq__15553_15662 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15554_15663 = null;
var count__15555_15664 = (0);
var i__15556_15665 = (0);
while(true){
if((i__15556_15665 < count__15555_15664)){
var header_15666 = chunk__15554_15663.cljs$core$IIndexed$_nth$arity$2(null,i__15556_15665);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15666,cljs.core.cst$kw$s_DASH_title);

var G__15667 = seq__15553_15662;
var G__15668 = chunk__15554_15663;
var G__15669 = count__15555_15664;
var G__15670 = (i__15556_15665 + (1));
seq__15553_15662 = G__15667;
chunk__15554_15663 = G__15668;
count__15555_15664 = G__15669;
i__15556_15665 = G__15670;
continue;
} else {
var temp__4657__auto___15671 = cljs.core.seq(seq__15553_15662);
if(temp__4657__auto___15671){
var seq__15553_15672__$1 = temp__4657__auto___15671;
if(cljs.core.chunked_seq_QMARK_(seq__15553_15672__$1)){
var c__8792__auto___15673 = cljs.core.chunk_first(seq__15553_15672__$1);
var G__15674 = cljs.core.chunk_rest(seq__15553_15672__$1);
var G__15675 = c__8792__auto___15673;
var G__15676 = cljs.core.count(c__8792__auto___15673);
var G__15677 = (0);
seq__15553_15662 = G__15674;
chunk__15554_15663 = G__15675;
count__15555_15664 = G__15676;
i__15556_15665 = G__15677;
continue;
} else {
var header_15678 = cljs.core.first(seq__15553_15672__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15678,cljs.core.cst$kw$s_DASH_title);

var G__15679 = cljs.core.next(seq__15553_15672__$1);
var G__15680 = null;
var G__15681 = (0);
var G__15682 = (0);
seq__15553_15662 = G__15679;
chunk__15554_15663 = G__15680;
count__15555_15664 = G__15681;
i__15556_15665 = G__15682;
continue;
}
} else {
}
}
break;
}

var seq__15557_15683 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15558_15684 = null;
var count__15559_15685 = (0);
var i__15560_15686 = (0);
while(true){
if((i__15560_15686 < count__15559_15685)){
var header_15687 = chunk__15558_15684.cljs$core$IIndexed$_nth$arity$2(null,i__15560_15686);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15687,cljs.core.cst$kw$s_DASH_title);

var G__15688 = seq__15557_15683;
var G__15689 = chunk__15558_15684;
var G__15690 = count__15559_15685;
var G__15691 = (i__15560_15686 + (1));
seq__15557_15683 = G__15688;
chunk__15558_15684 = G__15689;
count__15559_15685 = G__15690;
i__15560_15686 = G__15691;
continue;
} else {
var temp__4657__auto___15692 = cljs.core.seq(seq__15557_15683);
if(temp__4657__auto___15692){
var seq__15557_15693__$1 = temp__4657__auto___15692;
if(cljs.core.chunked_seq_QMARK_(seq__15557_15693__$1)){
var c__8792__auto___15694 = cljs.core.chunk_first(seq__15557_15693__$1);
var G__15695 = cljs.core.chunk_rest(seq__15557_15693__$1);
var G__15696 = c__8792__auto___15694;
var G__15697 = cljs.core.count(c__8792__auto___15694);
var G__15698 = (0);
seq__15557_15683 = G__15695;
chunk__15558_15684 = G__15696;
count__15559_15685 = G__15697;
i__15560_15686 = G__15698;
continue;
} else {
var header_15699 = cljs.core.first(seq__15557_15693__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15699,cljs.core.cst$kw$s_DASH_title);

var G__15700 = cljs.core.next(seq__15557_15693__$1);
var G__15701 = null;
var G__15702 = (0);
var G__15703 = (0);
seq__15557_15683 = G__15700;
chunk__15558_15684 = G__15701;
count__15559_15685 = G__15702;
i__15560_15686 = G__15703;
continue;
}
} else {
}
}
break;
}

var seq__15561_15704 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15562_15705 = null;
var count__15563_15706 = (0);
var i__15564_15707 = (0);
while(true){
if((i__15564_15707 < count__15563_15706)){
var header_15708 = chunk__15562_15705.cljs$core$IIndexed$_nth$arity$2(null,i__15564_15707);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15708,cljs.core.cst$kw$s_DASH_title);

var G__15709 = seq__15561_15704;
var G__15710 = chunk__15562_15705;
var G__15711 = count__15563_15706;
var G__15712 = (i__15564_15707 + (1));
seq__15561_15704 = G__15709;
chunk__15562_15705 = G__15710;
count__15563_15706 = G__15711;
i__15564_15707 = G__15712;
continue;
} else {
var temp__4657__auto___15713 = cljs.core.seq(seq__15561_15704);
if(temp__4657__auto___15713){
var seq__15561_15714__$1 = temp__4657__auto___15713;
if(cljs.core.chunked_seq_QMARK_(seq__15561_15714__$1)){
var c__8792__auto___15715 = cljs.core.chunk_first(seq__15561_15714__$1);
var G__15716 = cljs.core.chunk_rest(seq__15561_15714__$1);
var G__15717 = c__8792__auto___15715;
var G__15718 = cljs.core.count(c__8792__auto___15715);
var G__15719 = (0);
seq__15561_15704 = G__15716;
chunk__15562_15705 = G__15717;
count__15563_15706 = G__15718;
i__15564_15707 = G__15719;
continue;
} else {
var header_15720 = cljs.core.first(seq__15561_15714__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15720,cljs.core.cst$kw$s_DASH_title);

var G__15721 = cljs.core.next(seq__15561_15714__$1);
var G__15722 = null;
var G__15723 = (0);
var G__15724 = (0);
seq__15561_15704 = G__15721;
chunk__15562_15705 = G__15722;
count__15563_15706 = G__15723;
i__15564_15707 = G__15724;
continue;
}
} else {
}
}
break;
}

var seq__15565_15725 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15566_15726 = null;
var count__15567_15727 = (0);
var i__15568_15728 = (0);
while(true){
if((i__15568_15728 < count__15567_15727)){
var header_15729 = chunk__15566_15726.cljs$core$IIndexed$_nth$arity$2(null,i__15568_15728);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15729,cljs.core.cst$kw$s_DASH_title);

var G__15730 = seq__15565_15725;
var G__15731 = chunk__15566_15726;
var G__15732 = count__15567_15727;
var G__15733 = (i__15568_15728 + (1));
seq__15565_15725 = G__15730;
chunk__15566_15726 = G__15731;
count__15567_15727 = G__15732;
i__15568_15728 = G__15733;
continue;
} else {
var temp__4657__auto___15734 = cljs.core.seq(seq__15565_15725);
if(temp__4657__auto___15734){
var seq__15565_15735__$1 = temp__4657__auto___15734;
if(cljs.core.chunked_seq_QMARK_(seq__15565_15735__$1)){
var c__8792__auto___15736 = cljs.core.chunk_first(seq__15565_15735__$1);
var G__15737 = cljs.core.chunk_rest(seq__15565_15735__$1);
var G__15738 = c__8792__auto___15736;
var G__15739 = cljs.core.count(c__8792__auto___15736);
var G__15740 = (0);
seq__15565_15725 = G__15737;
chunk__15566_15726 = G__15738;
count__15567_15727 = G__15739;
i__15568_15728 = G__15740;
continue;
} else {
var header_15741 = cljs.core.first(seq__15565_15735__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15741,cljs.core.cst$kw$s_DASH_title);

var G__15742 = cljs.core.next(seq__15565_15735__$1);
var G__15743 = null;
var G__15744 = (0);
var G__15745 = (0);
seq__15565_15725 = G__15742;
chunk__15566_15726 = G__15743;
count__15567_15727 = G__15744;
i__15568_15728 = G__15745;
continue;
}
} else {
}
}
break;
}

var G__15746 = seq__15537;
var G__15747 = chunk__15538;
var G__15748 = count__15539;
var G__15749 = (i__15540 + (1));
seq__15537 = G__15746;
chunk__15538 = G__15747;
count__15539 = G__15748;
i__15540 = G__15749;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15537);
if(temp__4657__auto__){
var seq__15537__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15537__$1)){
var c__8792__auto__ = cljs.core.chunk_first(seq__15537__$1);
var G__15750 = cljs.core.chunk_rest(seq__15537__$1);
var G__15751 = c__8792__auto__;
var G__15752 = cljs.core.count(c__8792__auto__);
var G__15753 = (0);
seq__15537 = G__15750;
chunk__15538 = G__15751;
count__15539 = G__15752;
i__15540 = G__15753;
continue;
} else {
var c = cljs.core.first(seq__15537__$1);
var txt_15754 = (c["innerHTML"]);
var html_15755 = markdown.core.md__GT_html(txt_15754);
(c["innerHTML"] = html_15755);

var seq__15569_15756 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown table")));
var chunk__15570_15757 = null;
var count__15571_15758 = (0);
var i__15572_15759 = (0);
while(true){
if((i__15572_15759 < count__15571_15758)){
var table_15760 = chunk__15570_15757.cljs$core$IIndexed$_nth$arity$2(null,i__15572_15759);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15760,cljs.core.cst$kw$table);

var G__15761 = seq__15569_15756;
var G__15762 = chunk__15570_15757;
var G__15763 = count__15571_15758;
var G__15764 = (i__15572_15759 + (1));
seq__15569_15756 = G__15761;
chunk__15570_15757 = G__15762;
count__15571_15758 = G__15763;
i__15572_15759 = G__15764;
continue;
} else {
var temp__4657__auto___15765__$1 = cljs.core.seq(seq__15569_15756);
if(temp__4657__auto___15765__$1){
var seq__15569_15766__$1 = temp__4657__auto___15765__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15569_15766__$1)){
var c__8792__auto___15767 = cljs.core.chunk_first(seq__15569_15766__$1);
var G__15768 = cljs.core.chunk_rest(seq__15569_15766__$1);
var G__15769 = c__8792__auto___15767;
var G__15770 = cljs.core.count(c__8792__auto___15767);
var G__15771 = (0);
seq__15569_15756 = G__15768;
chunk__15570_15757 = G__15769;
count__15571_15758 = G__15770;
i__15572_15759 = G__15771;
continue;
} else {
var table_15772 = cljs.core.first(seq__15569_15766__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(table_15772,cljs.core.cst$kw$table);

var G__15773 = cljs.core.next(seq__15569_15766__$1);
var G__15774 = null;
var G__15775 = (0);
var G__15776 = (0);
seq__15569_15756 = G__15773;
chunk__15570_15757 = G__15774;
count__15571_15758 = G__15775;
i__15572_15759 = G__15776;
continue;
}
} else {
}
}
break;
}

var seq__15573_15777 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h1")));
var chunk__15574_15778 = null;
var count__15575_15779 = (0);
var i__15576_15780 = (0);
while(true){
if((i__15576_15780 < count__15575_15779)){
var header_15781 = chunk__15574_15778.cljs$core$IIndexed$_nth$arity$2(null,i__15576_15780);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15781,cljs.core.cst$kw$s_DASH_title);

var G__15782 = seq__15573_15777;
var G__15783 = chunk__15574_15778;
var G__15784 = count__15575_15779;
var G__15785 = (i__15576_15780 + (1));
seq__15573_15777 = G__15782;
chunk__15574_15778 = G__15783;
count__15575_15779 = G__15784;
i__15576_15780 = G__15785;
continue;
} else {
var temp__4657__auto___15786__$1 = cljs.core.seq(seq__15573_15777);
if(temp__4657__auto___15786__$1){
var seq__15573_15787__$1 = temp__4657__auto___15786__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15573_15787__$1)){
var c__8792__auto___15788 = cljs.core.chunk_first(seq__15573_15787__$1);
var G__15789 = cljs.core.chunk_rest(seq__15573_15787__$1);
var G__15790 = c__8792__auto___15788;
var G__15791 = cljs.core.count(c__8792__auto___15788);
var G__15792 = (0);
seq__15573_15777 = G__15789;
chunk__15574_15778 = G__15790;
count__15575_15779 = G__15791;
i__15576_15780 = G__15792;
continue;
} else {
var header_15793 = cljs.core.first(seq__15573_15787__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15793,cljs.core.cst$kw$s_DASH_title);

var G__15794 = cljs.core.next(seq__15573_15787__$1);
var G__15795 = null;
var G__15796 = (0);
var G__15797 = (0);
seq__15573_15777 = G__15794;
chunk__15574_15778 = G__15795;
count__15575_15779 = G__15796;
i__15576_15780 = G__15797;
continue;
}
} else {
}
}
break;
}

var seq__15577_15798 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h2")));
var chunk__15578_15799 = null;
var count__15579_15800 = (0);
var i__15580_15801 = (0);
while(true){
if((i__15580_15801 < count__15579_15800)){
var header_15802 = chunk__15578_15799.cljs$core$IIndexed$_nth$arity$2(null,i__15580_15801);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15802,cljs.core.cst$kw$s_DASH_title);

var G__15803 = seq__15577_15798;
var G__15804 = chunk__15578_15799;
var G__15805 = count__15579_15800;
var G__15806 = (i__15580_15801 + (1));
seq__15577_15798 = G__15803;
chunk__15578_15799 = G__15804;
count__15579_15800 = G__15805;
i__15580_15801 = G__15806;
continue;
} else {
var temp__4657__auto___15807__$1 = cljs.core.seq(seq__15577_15798);
if(temp__4657__auto___15807__$1){
var seq__15577_15808__$1 = temp__4657__auto___15807__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15577_15808__$1)){
var c__8792__auto___15809 = cljs.core.chunk_first(seq__15577_15808__$1);
var G__15810 = cljs.core.chunk_rest(seq__15577_15808__$1);
var G__15811 = c__8792__auto___15809;
var G__15812 = cljs.core.count(c__8792__auto___15809);
var G__15813 = (0);
seq__15577_15798 = G__15810;
chunk__15578_15799 = G__15811;
count__15579_15800 = G__15812;
i__15580_15801 = G__15813;
continue;
} else {
var header_15814 = cljs.core.first(seq__15577_15808__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15814,cljs.core.cst$kw$s_DASH_title);

var G__15815 = cljs.core.next(seq__15577_15808__$1);
var G__15816 = null;
var G__15817 = (0);
var G__15818 = (0);
seq__15577_15798 = G__15815;
chunk__15578_15799 = G__15816;
count__15579_15800 = G__15817;
i__15580_15801 = G__15818;
continue;
}
} else {
}
}
break;
}

var seq__15581_15819 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h3")));
var chunk__15582_15820 = null;
var count__15583_15821 = (0);
var i__15584_15822 = (0);
while(true){
if((i__15584_15822 < count__15583_15821)){
var header_15823 = chunk__15582_15820.cljs$core$IIndexed$_nth$arity$2(null,i__15584_15822);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15823,cljs.core.cst$kw$s_DASH_title);

var G__15824 = seq__15581_15819;
var G__15825 = chunk__15582_15820;
var G__15826 = count__15583_15821;
var G__15827 = (i__15584_15822 + (1));
seq__15581_15819 = G__15824;
chunk__15582_15820 = G__15825;
count__15583_15821 = G__15826;
i__15584_15822 = G__15827;
continue;
} else {
var temp__4657__auto___15828__$1 = cljs.core.seq(seq__15581_15819);
if(temp__4657__auto___15828__$1){
var seq__15581_15829__$1 = temp__4657__auto___15828__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15581_15829__$1)){
var c__8792__auto___15830 = cljs.core.chunk_first(seq__15581_15829__$1);
var G__15831 = cljs.core.chunk_rest(seq__15581_15829__$1);
var G__15832 = c__8792__auto___15830;
var G__15833 = cljs.core.count(c__8792__auto___15830);
var G__15834 = (0);
seq__15581_15819 = G__15831;
chunk__15582_15820 = G__15832;
count__15583_15821 = G__15833;
i__15584_15822 = G__15834;
continue;
} else {
var header_15835 = cljs.core.first(seq__15581_15829__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15835,cljs.core.cst$kw$s_DASH_title);

var G__15836 = cljs.core.next(seq__15581_15829__$1);
var G__15837 = null;
var G__15838 = (0);
var G__15839 = (0);
seq__15581_15819 = G__15836;
chunk__15582_15820 = G__15837;
count__15583_15821 = G__15838;
i__15584_15822 = G__15839;
continue;
}
} else {
}
}
break;
}

var seq__15585_15840 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h4")));
var chunk__15586_15841 = null;
var count__15587_15842 = (0);
var i__15588_15843 = (0);
while(true){
if((i__15588_15843 < count__15587_15842)){
var header_15844 = chunk__15586_15841.cljs$core$IIndexed$_nth$arity$2(null,i__15588_15843);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15844,cljs.core.cst$kw$s_DASH_title);

var G__15845 = seq__15585_15840;
var G__15846 = chunk__15586_15841;
var G__15847 = count__15587_15842;
var G__15848 = (i__15588_15843 + (1));
seq__15585_15840 = G__15845;
chunk__15586_15841 = G__15846;
count__15587_15842 = G__15847;
i__15588_15843 = G__15848;
continue;
} else {
var temp__4657__auto___15849__$1 = cljs.core.seq(seq__15585_15840);
if(temp__4657__auto___15849__$1){
var seq__15585_15850__$1 = temp__4657__auto___15849__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15585_15850__$1)){
var c__8792__auto___15851 = cljs.core.chunk_first(seq__15585_15850__$1);
var G__15852 = cljs.core.chunk_rest(seq__15585_15850__$1);
var G__15853 = c__8792__auto___15851;
var G__15854 = cljs.core.count(c__8792__auto___15851);
var G__15855 = (0);
seq__15585_15840 = G__15852;
chunk__15586_15841 = G__15853;
count__15587_15842 = G__15854;
i__15588_15843 = G__15855;
continue;
} else {
var header_15856 = cljs.core.first(seq__15585_15850__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15856,cljs.core.cst$kw$s_DASH_title);

var G__15857 = cljs.core.next(seq__15585_15850__$1);
var G__15858 = null;
var G__15859 = (0);
var G__15860 = (0);
seq__15585_15840 = G__15857;
chunk__15586_15841 = G__15858;
count__15587_15842 = G__15859;
i__15588_15843 = G__15860;
continue;
}
} else {
}
}
break;
}

var seq__15589_15861 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h5")));
var chunk__15590_15862 = null;
var count__15591_15863 = (0);
var i__15592_15864 = (0);
while(true){
if((i__15592_15864 < count__15591_15863)){
var header_15865 = chunk__15590_15862.cljs$core$IIndexed$_nth$arity$2(null,i__15592_15864);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15865,cljs.core.cst$kw$s_DASH_title);

var G__15866 = seq__15589_15861;
var G__15867 = chunk__15590_15862;
var G__15868 = count__15591_15863;
var G__15869 = (i__15592_15864 + (1));
seq__15589_15861 = G__15866;
chunk__15590_15862 = G__15867;
count__15591_15863 = G__15868;
i__15592_15864 = G__15869;
continue;
} else {
var temp__4657__auto___15870__$1 = cljs.core.seq(seq__15589_15861);
if(temp__4657__auto___15870__$1){
var seq__15589_15871__$1 = temp__4657__auto___15870__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15589_15871__$1)){
var c__8792__auto___15872 = cljs.core.chunk_first(seq__15589_15871__$1);
var G__15873 = cljs.core.chunk_rest(seq__15589_15871__$1);
var G__15874 = c__8792__auto___15872;
var G__15875 = cljs.core.count(c__8792__auto___15872);
var G__15876 = (0);
seq__15589_15861 = G__15873;
chunk__15590_15862 = G__15874;
count__15591_15863 = G__15875;
i__15592_15864 = G__15876;
continue;
} else {
var header_15877 = cljs.core.first(seq__15589_15871__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15877,cljs.core.cst$kw$s_DASH_title);

var G__15878 = cljs.core.next(seq__15589_15871__$1);
var G__15879 = null;
var G__15880 = (0);
var G__15881 = (0);
seq__15589_15861 = G__15878;
chunk__15590_15862 = G__15879;
count__15591_15863 = G__15880;
i__15592_15864 = G__15881;
continue;
}
} else {
}
}
break;
}

var seq__15593_15882 = cljs.core.seq(dommy.utils.__GT_Array(document.querySelectorAll(".render-markdown h6")));
var chunk__15594_15883 = null;
var count__15595_15884 = (0);
var i__15596_15885 = (0);
while(true){
if((i__15596_15885 < count__15595_15884)){
var header_15886 = chunk__15594_15883.cljs$core$IIndexed$_nth$arity$2(null,i__15596_15885);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15886,cljs.core.cst$kw$s_DASH_title);

var G__15887 = seq__15593_15882;
var G__15888 = chunk__15594_15883;
var G__15889 = count__15595_15884;
var G__15890 = (i__15596_15885 + (1));
seq__15593_15882 = G__15887;
chunk__15594_15883 = G__15888;
count__15595_15884 = G__15889;
i__15596_15885 = G__15890;
continue;
} else {
var temp__4657__auto___15891__$1 = cljs.core.seq(seq__15593_15882);
if(temp__4657__auto___15891__$1){
var seq__15593_15892__$1 = temp__4657__auto___15891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15593_15892__$1)){
var c__8792__auto___15893 = cljs.core.chunk_first(seq__15593_15892__$1);
var G__15894 = cljs.core.chunk_rest(seq__15593_15892__$1);
var G__15895 = c__8792__auto___15893;
var G__15896 = cljs.core.count(c__8792__auto___15893);
var G__15897 = (0);
seq__15593_15882 = G__15894;
chunk__15594_15883 = G__15895;
count__15595_15884 = G__15896;
i__15596_15885 = G__15897;
continue;
} else {
var header_15898 = cljs.core.first(seq__15593_15892__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(header_15898,cljs.core.cst$kw$s_DASH_title);

var G__15899 = cljs.core.next(seq__15593_15892__$1);
var G__15900 = null;
var G__15901 = (0);
var G__15902 = (0);
seq__15593_15882 = G__15899;
chunk__15594_15883 = G__15900;
count__15595_15884 = G__15901;
i__15596_15885 = G__15902;
continue;
}
} else {
}
}
break;
}

var G__15903 = cljs.core.next(seq__15537__$1);
var G__15904 = null;
var G__15905 = (0);
var G__15906 = (0);
seq__15537 = G__15903;
chunk__15538 = G__15904;
count__15539 = G__15905;
i__15540 = G__15906;
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
var final_width = (function (){var G__15907 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15907);
})();
var final_height = (function (){var G__15908 = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15908);
})();
var buffer_width = (function (){var G__15909 = cljs.core.cst$kw$buffer_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15909);
})();
var kusi_width = (function (){var G__15910 = cljs.core.cst$kw$kusi_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15910);
})();
var orig_border_width = (function (){var G__15911 = cljs.core.cst$kw$border_DASH_width.cljs$core$IFn$_invoke$arity$1(robe);
return Number(G__15911);
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
