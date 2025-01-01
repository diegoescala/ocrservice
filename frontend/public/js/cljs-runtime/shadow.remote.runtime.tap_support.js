goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20332,p__20333){
var map__20334 = p__20332;
var map__20334__$1 = cljs.core.__destructure_map(map__20334);
var svc = map__20334__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20334__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20334__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20334__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20335 = p__20333;
var map__20335__$1 = cljs.core.__destructure_map(map__20335);
var msg = map__20335__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20335__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20335__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20335__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20335__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20336,p__20337){
var map__20338 = p__20336;
var map__20338__$1 = cljs.core.__destructure_map(map__20338);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20338__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20339 = p__20337;
var map__20339__$1 = cljs.core.__destructure_map(map__20339);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20339__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20342,p__20343){
var map__20344 = p__20342;
var map__20344__$1 = cljs.core.__destructure_map(map__20344);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20344__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20344__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20345 = p__20343;
var map__20345__$1 = cljs.core.__destructure_map(map__20345);
var msg = map__20345__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20345__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20346,tid){
var map__20347 = p__20346;
var map__20347__$1 = cljs.core.__destructure_map(map__20347);
var svc = map__20347__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20347__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20353 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20354 = null;
var count__20355 = (0);
var i__20356 = (0);
while(true){
if((i__20356 < count__20355)){
var vec__20374 = chunk__20354.cljs$core$IIndexed$_nth$arity$2(null, i__20356);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20419 = seq__20353;
var G__20420 = chunk__20354;
var G__20421 = count__20355;
var G__20422 = (i__20356 + (1));
seq__20353 = G__20419;
chunk__20354 = G__20420;
count__20355 = G__20421;
i__20356 = G__20422;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20353);
if(temp__5804__auto__){
var seq__20353__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20353__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20353__$1);
var G__20424 = cljs.core.chunk_rest(seq__20353__$1);
var G__20425 = c__5525__auto__;
var G__20426 = cljs.core.count(c__5525__auto__);
var G__20427 = (0);
seq__20353 = G__20424;
chunk__20354 = G__20425;
count__20355 = G__20426;
i__20356 = G__20427;
continue;
} else {
var vec__20382 = cljs.core.first(seq__20353__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20382,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20382,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20428 = cljs.core.next(seq__20353__$1);
var G__20429 = null;
var G__20430 = (0);
var G__20431 = (0);
seq__20353 = G__20428;
chunk__20354 = G__20429;
count__20355 = G__20430;
i__20356 = G__20431;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20349_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20349_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20350_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20350_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20351_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20351_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20352_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20352_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20389){
var map__20393 = p__20389;
var map__20393__$1 = cljs.core.__destructure_map(map__20393);
var svc = map__20393__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20393__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20393__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
