goog.provide('app.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),app.db.default_db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-route","set-current-route",-154604093),(function (db,p__27109){
var vec__27110 = p__27109;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27110,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27110,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),route);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__27113,p__27114){
var map__27115 = p__27113;
var map__27115__$1 = cljs.core.__destructure_map(map__27115);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27115__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__27116 = p__27114;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27116,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"api-url","api-url",2037917643).cljs$core$IFn$_invoke$arity$1(db)),"/login"].join(''),new cljs.core.Keyword(null,"params","params",710516235),credentials,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-failure","login-failure",1293667845)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-theme","toggle-theme",-91905156),(function (db,p__27119){
var vec__27120 = p__27119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27120,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"dark-mode?","dark-mode?",2063785096),cljs.core.not);
}));

//# sourceMappingURL=app.events.js.map
