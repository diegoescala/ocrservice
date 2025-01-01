goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14498){
var map__14500 = p__14498;
var map__14500__$1 = cljs.core.__destructure_map(map__14500);
var runtime = map__14500__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14500__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14783 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14783)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14506 = runtime;
var G__14507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14783);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14506,G__14507) : shadow.remote.runtime.shared.process.call(null, G__14506,G__14507));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14517,res){
var map__14518 = p__14517;
var map__14518__$1 = cljs.core.__destructure_map(map__14518);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14518__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14518__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14521 = res;
var G__14521__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14521,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14521);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14521__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14521__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14537 = arguments.length;
switch (G__14537) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14551,msg,handlers,timeout_after_ms){
var map__14552 = p__14551;
var map__14552__$1 = cljs.core.__destructure_map(map__14552);
var runtime = map__14552__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14552__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14787 = arguments.length;
var i__5727__auto___14788 = (0);
while(true){
if((i__5727__auto___14788 < len__5726__auto___14787)){
args__5732__auto__.push((arguments[i__5727__auto___14788]));

var G__14789 = (i__5727__auto___14788 + (1));
i__5727__auto___14788 = G__14789;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14572,ev,args){
var map__14573 = p__14572;
var map__14573__$1 = cljs.core.__destructure_map(map__14573);
var runtime = map__14573__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14573__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14579 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14583 = null;
var count__14584 = (0);
var i__14585 = (0);
while(true){
if((i__14585 < count__14584)){
var ext = chunk__14583.cljs$core$IIndexed$_nth$arity$2(null, i__14585);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14790 = seq__14579;
var G__14791 = chunk__14583;
var G__14792 = count__14584;
var G__14793 = (i__14585 + (1));
seq__14579 = G__14790;
chunk__14583 = G__14791;
count__14584 = G__14792;
i__14585 = G__14793;
continue;
} else {
var G__14794 = seq__14579;
var G__14795 = chunk__14583;
var G__14796 = count__14584;
var G__14797 = (i__14585 + (1));
seq__14579 = G__14794;
chunk__14583 = G__14795;
count__14584 = G__14796;
i__14585 = G__14797;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14579);
if(temp__5804__auto__){
var seq__14579__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14579__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14579__$1);
var G__14798 = cljs.core.chunk_rest(seq__14579__$1);
var G__14799 = c__5525__auto__;
var G__14800 = cljs.core.count(c__5525__auto__);
var G__14801 = (0);
seq__14579 = G__14798;
chunk__14583 = G__14799;
count__14584 = G__14800;
i__14585 = G__14801;
continue;
} else {
var ext = cljs.core.first(seq__14579__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14806 = cljs.core.next(seq__14579__$1);
var G__14807 = null;
var G__14808 = (0);
var G__14809 = (0);
seq__14579 = G__14806;
chunk__14583 = G__14807;
count__14584 = G__14808;
i__14585 = G__14809;
continue;
} else {
var G__14811 = cljs.core.next(seq__14579__$1);
var G__14812 = null;
var G__14813 = (0);
var G__14814 = (0);
seq__14579 = G__14811;
chunk__14583 = G__14812;
count__14584 = G__14813;
i__14585 = G__14814;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14567){
var G__14568 = cljs.core.first(seq14567);
var seq14567__$1 = cljs.core.next(seq14567);
var G__14569 = cljs.core.first(seq14567__$1);
var seq14567__$2 = cljs.core.next(seq14567__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14568,G__14569,seq14567__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14641,p__14642){
var map__14643 = p__14641;
var map__14643__$1 = cljs.core.__destructure_map(map__14643);
var runtime = map__14643__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14643__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14644 = p__14642;
var map__14644__$1 = cljs.core.__destructure_map(map__14644);
var msg = map__14644__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14644__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14646 = cljs.core.deref(state_ref);
var map__14646__$1 = cljs.core.__destructure_map(map__14646);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14646__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14646__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14652,msg){
var map__14654 = p__14652;
var map__14654__$1 = cljs.core.__destructure_map(map__14654);
var runtime = map__14654__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14654__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14674,key,p__14675){
var map__14676 = p__14674;
var map__14676__$1 = cljs.core.__destructure_map(map__14676);
var state = map__14676__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14676__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14677 = p__14675;
var map__14677__$1 = cljs.core.__destructure_map(map__14677);
var spec = map__14677__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14677__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14677__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14692,key,spec){
var map__14694 = p__14692;
var map__14694__$1 = cljs.core.__destructure_map(map__14694);
var runtime = map__14694__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14694__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14940 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14940 == null)){
} else {
var on_welcome_14941 = temp__5808__auto___14940;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14941.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14941.cljs$core$IFn$_invoke$arity$0() : on_welcome_14941.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14707_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14707_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14708_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14708_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14709_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14709_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14713_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14713_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14714_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14714_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14732,key){
var map__14735 = p__14732;
var map__14735__$1 = cljs.core.__destructure_map(map__14735);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14744,msg){
var map__14747 = p__14744;
var map__14747__$1 = cljs.core.__destructure_map(map__14747);
var runtime = map__14747__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14753,p__14754){
var map__14755 = p__14753;
var map__14755__$1 = cljs.core.__destructure_map(map__14755);
var runtime = map__14755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14756 = p__14754;
var map__14756__$1 = cljs.core.__destructure_map(map__14756);
var msg = map__14756__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14756__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14760 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14763 = null;
var count__14764 = (0);
var i__14765 = (0);
while(true){
if((i__14765 < count__14764)){
var map__14769 = chunk__14763.cljs$core$IIndexed$_nth$arity$2(null, i__14765);
var map__14769__$1 = cljs.core.__destructure_map(map__14769);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14769__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15011 = seq__14760;
var G__15012 = chunk__14763;
var G__15013 = count__14764;
var G__15014 = (i__14765 + (1));
seq__14760 = G__15011;
chunk__14763 = G__15012;
count__14764 = G__15013;
i__14765 = G__15014;
continue;
} else {
var G__15017 = seq__14760;
var G__15018 = chunk__14763;
var G__15019 = count__14764;
var G__15020 = (i__14765 + (1));
seq__14760 = G__15017;
chunk__14763 = G__15018;
count__14764 = G__15019;
i__14765 = G__15020;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14760);
if(temp__5804__auto__){
var seq__14760__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14760__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14760__$1);
var G__15022 = cljs.core.chunk_rest(seq__14760__$1);
var G__15023 = c__5525__auto__;
var G__15024 = cljs.core.count(c__5525__auto__);
var G__15025 = (0);
seq__14760 = G__15022;
chunk__14763 = G__15023;
count__14764 = G__15024;
i__14765 = G__15025;
continue;
} else {
var map__14770 = cljs.core.first(seq__14760__$1);
var map__14770__$1 = cljs.core.__destructure_map(map__14770);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14770__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__15028 = cljs.core.next(seq__14760__$1);
var G__15029 = null;
var G__15030 = (0);
var G__15031 = (0);
seq__14760 = G__15028;
chunk__14763 = G__15029;
count__14764 = G__15030;
i__14765 = G__15031;
continue;
} else {
var G__15032 = cljs.core.next(seq__14760__$1);
var G__15033 = null;
var G__15034 = (0);
var G__15035 = (0);
seq__14760 = G__15032;
chunk__14763 = G__15033;
count__14764 = G__15034;
i__14765 = G__15035;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
