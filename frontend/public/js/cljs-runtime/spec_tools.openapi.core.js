goog.provide('spec_tools.openapi.core');
spec_tools.openapi.core.spec_dispatch = (function spec_tools$openapi$core$spec_dispatch(dispatch,_,___$1,___$2){
return dispatch;
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.accept_spec !== 'undefined')){
} else {
spec_tools.openapi.core.accept_spec = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28352 = cljs.core.get_global_hierarchy;
return (fexpr__28352.cljs$core$IFn$_invoke$arity$0 ? fexpr__28352.cljs$core$IFn$_invoke$arity$0() : fexpr__28352.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","accept-spec"),spec_tools.openapi.core.spec_dispatch,new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("clojure.core","float?","clojure.core/float?",-99660463,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"float"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("clojure.core","double?","clojure.core/double?",1847770331,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("clojure.spec.alpha","tuple","clojure.spec.alpha/tuple",800350846,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("clojure.core","sequential?","clojure.core/sequential?",1943138316,null),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentArrayMap.EMPTY], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Symbol("clojure.spec.alpha","alt","clojure.spec.alpha/alt",-612316618,null),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),children], null)], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.visitor","set","spec-tools.visitor/set",1650075415),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enum","enum",1679018432),children,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.visitor","spec","spec-tools.visitor/spec",1770325200),(function (dispatch,spec,children,options){
var vec__28355 = spec_tools.impl.extract_form(spec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(1),null);
var openapi_meta = spec_tools.impl.unlift_keys(data,"openapi");
var or__5002__auto__ = new cljs.core.Keyword(null,"openapi","openapi",1860088859).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options),openapi_meta], 0));
}
}));
spec_tools.openapi.core.accept_spec.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.openapi.core","default","spec-tools.openapi.core/default",-940305094),(function (dispatch,spec,children,options){
return spec_tools.json_schema.accept_spec.cljs$core$IFn$_invoke$arity$4(dispatch,spec,children,options);
}));
/**
 * Generate OpenAPI3 schema matching the given clojure.spec spec.
 */
spec_tools.openapi.core.transform = (function spec_tools$openapi$core$transform(var_args){
var G__28360 = arguments.length;
switch (G__28360) {
case 1:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2(spec,null);
}));

(spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2 = (function (spec,options){
return spec_tools.visitor.visit.cljs$core$IFn$_invoke$arity$3(spec,spec_tools.openapi.core.accept_spec,options);
}));

(spec_tools.openapi.core.transform.cljs$lang$maxFixedArity = 2);

spec_tools.openapi.core.is_nilable_QMARK_ = (function spec_tools$openapi$core$is_nilable_QMARK_(spec){
return ((cljs.core.contains_QMARK_(spec,new cljs.core.Keyword(null,"oneOf","oneOf",1209080187))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)))) && (cljs.core.contains_QMARK_(cljs.core.group_by(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)),"null")))));
});
spec_tools.openapi.core.extract_nilable = (function spec_tools$openapi$core$extract_nilable(spec){
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28362_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__28362_SHARP_),"null");
}),new cljs.core.Keyword(null,"oneOf","oneOf",1209080187).cljs$core$IFn$_invoke$arity$1(spec)));
});
spec_tools.openapi.core.extract_single_param = (function spec_tools$openapi$core$extract_single_param(in$,spec){
var nilable_QMARK_ = spec_tools.openapi.core.is_nilable_QMARK_(spec);
var new_spec = ((nilable_QMARK_)?spec_tools.openapi.core.extract_nilable(spec):spec);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new_spec);
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(new_spec);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__28368 = in$;
var G__28368__$1 = (((G__28368 instanceof cljs.core.Keyword))?G__28368.fqn:null);
switch (G__28368__$1) {
case "path":
return true;

break;
default:
return (!(nilable_QMARK_));

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),new_spec], null);
});
spec_tools.openapi.core.extract_object_param = (function spec_tools$openapi$core$extract_object_param(in$,p__28371){
var map__28372 = p__28371;
var map__28372__$1 = cljs.core.__destructure_map(map__28372);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28372__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__28374){
var vec__28375 = p__28374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(0),null);
var map__28378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28375,(1),null);
var map__28378__$1 = cljs.core.__destructure_map(map__28378);
var schema = map__28378__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28378__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"description","description",-1428560544),(function (){var or__5002__auto__ = description;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"required","required",1807647006),(function (){var G__28379 = in$;
var G__28379__$1 = (((G__28379 instanceof cljs.core.Keyword))?G__28379.fqn:null);
switch (G__28379__$1) {
case "path":
return true;

break;
default:
return cljs.core.contains_QMARK_(cljs.core.set(required),k);

}
})(),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null);
}),properties);
});
spec_tools.openapi.core.extract_parameter = (function spec_tools$openapi$core$extract_parameter(in$,spec){
var parameter_spec = spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec);
var object_QMARK_ = ((cljs.core.contains_QMARK_(parameter_spec,new cljs.core.Keyword(null,"properties","properties",685819552))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("object",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parameter_spec))));
if(object_QMARK_){
return spec_tools.openapi.core.extract_object_param(in$,parameter_spec);
} else {
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[spec_tools.openapi.core.extract_single_param(in$,parameter_spec)],null));
}
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.openapi !== 'undefined') && (typeof spec_tools.openapi.core !== 'undefined') && (typeof spec_tools.openapi.core.expand !== 'undefined')){
} else {
spec_tools.openapi.core.expand = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28381 = cljs.core.get_global_hierarchy;
return (fexpr__28381.cljs$core$IFn$_invoke$arity$0 ? fexpr__28381.cljs$core$IFn$_invoke$arity$0() : fexpr__28381.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.openapi.core","expand"),(function (k,_,___$1,___$2){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.openapi.core","schemas","spec-tools.openapi.core/schemas",-459896419),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"schemas","schemas",575070579).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5480__auto__ = (function spec_tools$openapi$core$iter__28389(s__28390){
return (new cljs.core.LazySeq(null,(function (){
var s__28390__$1 = s__28390;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28390__$1);
if(temp__5804__auto__){
var s__28390__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28390__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28390__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28392 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28391 = (0);
while(true){
if((i__28391 < size__5479__auto__)){
var vec__28393 = cljs.core._nth(c__5478__auto__,i__28391);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28393,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28393,(1),null);
cljs.core.chunk_append(b__28392,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]));

var G__28486 = (i__28391 + (1));
i__28391 = G__28486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28392),spec_tools$openapi$core$iter__28389(cljs.core.chunk_rest(s__28390__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28392),null);
}
} else {
var vec__28398 = cljs.core.first(s__28390__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28398,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28398,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)]),spec_tools$openapi$core$iter__28389(cljs.core.rest(s__28390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.openapi.core","content","spec-tools.openapi.core/content",-1096703814),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5480__auto__ = (function spec_tools$openapi$core$iter__28402(s__28403){
return (new cljs.core.LazySeq(null,(function (){
var s__28403__$1 = s__28403;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28403__$1);
if(temp__5804__auto__){
var s__28403__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28403__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28403__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28405 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28404 = (0);
while(true){
if((i__28404 < size__5479__auto__)){
var vec__28410 = cljs.core._nth(c__5478__auto__,i__28404);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28410,(1),null);
cljs.core.chunk_append(b__28405,cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]));

var G__28490 = (i__28404 + (1));
i__28404 = G__28490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28405),spec_tools$openapi$core$iter__28402(cljs.core.chunk_rest(s__28403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28405),null);
}
} else {
var vec__28416 = cljs.core.first(s__28403__$2);
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28416,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28416,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([content_type,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(schema)], null)]),spec_tools$openapi$core$iter__28402(cljs.core.rest(s__28403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.openapi.core","parameters","spec-tools.openapi.core/parameters",1686119738),(function (_,v,acc,___$1){
var old = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var new$ = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__28423){
var vec__28424 = p__28423;
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28424,(1),null);
return spec_tools.openapi.core.extract_parameter(in$,spec);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
var merged = cljs.core.vec(cljs.core.reverse(cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__28427,p){
var vec__28429 = p__28427;
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(0),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28429,(1),null);
var acc__$1 = vec__28429;
var c = cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.not((cache.cljs$core$IFn$_invoke$arity$1 ? cache.cljs$core$IFn$_invoke$arity$1(c) : cache.call(null, c)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,p),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cache,c)], null);
} else {
return acc__$1;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(old,new$))))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),merged], null);
}));
spec_tools.openapi.core.expand.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("spec-tools.openapi.core","headers","spec-tools.openapi.core/headers",336203721),(function (_,v,acc,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(acc);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5480__auto__ = (function spec_tools$openapi$core$iter__28439(s__28440){
return (new cljs.core.LazySeq(null,(function (){
var s__28440__$1 = s__28440;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28440__$1);
if(temp__5804__auto__){
var s__28440__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28440__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28440__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28442 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28441 = (0);
while(true){
if((i__28441 < size__5479__auto__)){
var vec__28443 = cljs.core._nth(c__5478__auto__,i__28441);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28443,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28443,(1),null);
cljs.core.chunk_append(b__28442,cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]));

var G__28492 = (i__28441 + (1));
i__28441 = G__28492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28442),spec_tools$openapi$core$iter__28439(cljs.core.chunk_rest(s__28440__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28442),null);
}
} else {
var vec__28446 = cljs.core.first(s__28440__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28446,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.openapi.core.extract_single_param(new cljs.core.Keyword(null,"header","header",119441134),spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$1(spec)),new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"name","name",1843675177))]),spec_tools$openapi$core$iter__28439(cljs.core.rest(s__28440__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})())], null);
}));
spec_tools.openapi.core.expand_qualified_keywords = (function spec_tools$openapi$core$expand_qualified_keywords(x,options){
var accept_QMARK_ = cljs.core.set(cljs.core.keys(cljs.core.methods$(spec_tools.openapi.core.expand)));
return clojure.walk.postwalk((function (x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((accept_QMARK_.cljs$core$IFn$_invoke$arity$1 ? accept_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : accept_QMARK_.call(null, k)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k),spec_tools.openapi.core.expand.cljs$core$IFn$_invoke$arity$4(k,v,acc,options)], 0));
} else {
return acc;
}
}),x__$1,x__$1);
} else {
return x__$1;
}
}),x);
});
/**
 * Transforms data into a OpenAPI3 spec. Input data must conform to the
 *   Swagger3 Spec (https://swagger.io/specification/) with a exception that it
 *   can have any qualified keywords which are expanded with the
 *   `spec-tools.openapi.core/expand` multimethod.
 */
spec_tools.openapi.core.openapi_spec = (function spec_tools$openapi$core$openapi_spec(var_args){
var G__28456 = arguments.length;
switch (G__28456) {
case 1:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$1 = (function (x){
return spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2(x,null);
}));

(spec_tools.openapi.core.openapi_spec.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return spec_tools.openapi.core.expand_qualified_keywords(x,options);
}));

(spec_tools.openapi.core.openapi_spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.openapi.core.js.map
