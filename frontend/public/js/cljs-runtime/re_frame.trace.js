goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22665){
var map__22666 = p__22665;
var map__22666__$1 = cljs.core.__destructure_map(map__22666);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22666__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22666__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22666__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22666__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22668_22699 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22669_22700 = null;
var count__22670_22701 = (0);
var i__22671_22702 = (0);
while(true){
if((i__22671_22702 < count__22670_22701)){
var vec__22682_22703 = chunk__22669_22700.cljs$core$IIndexed$_nth$arity$2(null, i__22671_22702);
var k_22704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22682_22703,(0),null);
var cb_22705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22682_22703,(1),null);
try{var G__22686_22710 = cljs.core.deref(re_frame.trace.traces);
(cb_22705.cljs$core$IFn$_invoke$arity$1 ? cb_22705.cljs$core$IFn$_invoke$arity$1(G__22686_22710) : cb_22705.call(null, G__22686_22710));
}catch (e22685){var e_22712 = e22685;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22704,"while storing",cljs.core.deref(re_frame.trace.traces),e_22712], 0));
}

var G__22713 = seq__22668_22699;
var G__22714 = chunk__22669_22700;
var G__22715 = count__22670_22701;
var G__22716 = (i__22671_22702 + (1));
seq__22668_22699 = G__22713;
chunk__22669_22700 = G__22714;
count__22670_22701 = G__22715;
i__22671_22702 = G__22716;
continue;
} else {
var temp__5804__auto___22717 = cljs.core.seq(seq__22668_22699);
if(temp__5804__auto___22717){
var seq__22668_22721__$1 = temp__5804__auto___22717;
if(cljs.core.chunked_seq_QMARK_(seq__22668_22721__$1)){
var c__5525__auto___22722 = cljs.core.chunk_first(seq__22668_22721__$1);
var G__22723 = cljs.core.chunk_rest(seq__22668_22721__$1);
var G__22724 = c__5525__auto___22722;
var G__22725 = cljs.core.count(c__5525__auto___22722);
var G__22726 = (0);
seq__22668_22699 = G__22723;
chunk__22669_22700 = G__22724;
count__22670_22701 = G__22725;
i__22671_22702 = G__22726;
continue;
} else {
var vec__22689_22727 = cljs.core.first(seq__22668_22721__$1);
var k_22728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22689_22727,(0),null);
var cb_22729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22689_22727,(1),null);
try{var G__22693_22730 = cljs.core.deref(re_frame.trace.traces);
(cb_22729.cljs$core$IFn$_invoke$arity$1 ? cb_22729.cljs$core$IFn$_invoke$arity$1(G__22693_22730) : cb_22729.call(null, G__22693_22730));
}catch (e22692){var e_22731 = e22692;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22728,"while storing",cljs.core.deref(re_frame.trace.traces),e_22731], 0));
}

var G__22732 = cljs.core.next(seq__22668_22721__$1);
var G__22733 = null;
var G__22734 = (0);
var G__22735 = (0);
seq__22668_22699 = G__22732;
chunk__22669_22700 = G__22733;
count__22670_22701 = G__22734;
i__22671_22702 = G__22735;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null, ));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
