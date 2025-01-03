goog.provide('spec_tools.impl');
spec_tools.impl.cljs_sym = (function spec_tools$impl$cljs_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.impl.clj_sym = (function spec_tools$impl$clj_sym(x){
if(cljs.core.var_QMARK_(x)){
var v = x;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.ns().name()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(v.sym()));
} else {
return x;
}
});
spec_tools.impl.__GT_sym = (function spec_tools$impl$__GT_sym(x){
return spec_tools.impl.cljs_sym(x);
});
spec_tools.impl.unfn = (function spec_tools$impl$unfn(cljs_QMARK_,expr){
if(((cljs.core.seq_QMARK_(expr)) && ((((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))))){
var vec__26840 = cljs.core.rest(expr);
var seq__26841 = cljs.core.seq(vec__26840);
var first__26842 = cljs.core.first(seq__26841);
var seq__26841__$1 = cljs.core.next(seq__26841);
var vec__26843 = first__26842;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26843,(0),null);
var form = seq__26841__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs_QMARK_)?new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null):new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null))], 0));
} else {
return expr;
}
});
spec_tools.impl.polish = (function spec_tools$impl$polish(x){
if(cljs.core.seq_QMARK_(x)){
return cljs.core.flatten(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,x));
} else {
if((x instanceof cljs.core.Symbol)){
return null;
} else {
return x;

}
}
});
spec_tools.impl.polish_un = (function spec_tools$impl$polish_un(x){
var G__26846 = x;
var G__26846__$1 = (((G__26846 == null))?null:spec_tools.impl.polish(G__26846));
var G__26846__$2 = (((G__26846__$1 == null))?null:cljs.core.name(G__26846__$1));
if((G__26846__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__26846__$2);
}
});
spec_tools.impl.un_key = (function spec_tools$impl$un_key(x){
var G__26847 = x;
var G__26847__$1 = (((G__26847 == null))?null:cljs.core.name(G__26847));
if((G__26847__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__26847__$1);
}
});
spec_tools.impl.with_key__GT_spec = (function spec_tools$impl$with_key__GT_spec(p__26851){
var map__26852 = p__26851;
var map__26852__$1 = cljs.core.__destructure_map(map__26852);
var data = map__26852__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26852__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26852__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26852__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26852__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,req)));
var un_key__GT_spec = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.un_key,cljs.core.identity),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt_un,req_un)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"key->spec","key->spec",1088543019),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key__GT_spec,un_key__GT_spec], 0)));
});
spec_tools.impl.with_real_keys = (function spec_tools$impl$with_real_keys(p__26853){
var map__26854 = p__26853;
var map__26854__$1 = cljs.core.__destructure_map(map__26854);
var data = map__26854__$1;
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var G__26855 = data;
var G__26855__$1 = (cljs.core.truth_(req_un)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26855,new cljs.core.Keyword(null,"req-un","req-un",1074571008),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key)):G__26855);
if(cljs.core.truth_(opt_un)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26855__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,spec_tools.impl.un_key));
} else {
return G__26855__$1;
}
});
spec_tools.impl.parse_keys = (function spec_tools$impl$parse_keys(form){
var m = (function (){var G__26859 = form;
var G__26859__$1 = (((G__26859 == null))?null:cljs.core.rest(G__26859));
if((G__26859__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__26859__$1);
}
})();
var G__26860 = m;
var G__26860__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"req","req",-326448303).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26860,new cljs.core.Keyword(null,"req","req",-326448303),(function (p1__26856_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__26856_SHARP_)));
})):G__26860);
var G__26860__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"req-un","req-un",1074571008).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26860__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008),(function (p1__26857_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.flatten(p1__26857_SHARP_)));
})):G__26860__$1);
var G__26860__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"opt-un","opt-un",883442496).cljs$core$IFn$_invoke$arity$1(m))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__26860__$2,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),(function (p1__26858_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,p1__26858_SHARP_));
})):G__26860__$2);
return spec_tools.impl.with_real_keys(spec_tools.impl.with_key__GT_spec(G__26860__$3));

});
spec_tools.impl.extract_keys = (function spec_tools$impl$extract_keys(form){
var map__26861 = (function (){var G__26862 = form;
var G__26862__$1 = (((G__26862 == null))?null:cljs.core.rest(G__26862));
if((G__26862__$1 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__26862__$1);
}
})();
var map__26861__$1 = cljs.core.__destructure_map(map__26861);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26861__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req,opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req_un,opt_un], 0))));
});
spec_tools.impl.extract_pred_and_info = (function spec_tools$impl$extract_pred_and_info(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"spec","spec",347520401))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.PersistentArrayMap.EMPTY], null);
}
});
spec_tools.impl.strip_fn_if_needed = (function spec_tools$impl$strip_fn_if_needed(form){
var head = cljs.core.first(form);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(3))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
} else {
return form;
}
});
spec_tools.impl.normalize_symbol = (function spec_tools$impl$normalize_symbol(kw){
var G__26863 = (function (){var and__5000__auto__ = (kw instanceof cljs.core.Symbol);
if(and__5000__auto__){
return cljs.core.namespace(kw);
} else {
return and__5000__auto__;
}
})();
switch (G__26863) {
case "spec-tools.spec":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.core",cljs.core.name(kw));

break;
case "cljs.spec.alpha":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.spec.alpha",cljs.core.name(kw));

break;
default:
return kw;

}
});
spec_tools.impl.extract_form = (function spec_tools$impl$extract_form(spec){
if(cljs.core.seq_QMARK_(spec)){
return spec;
} else {
return cljs.spec.alpha.form(spec);
}
});
spec_tools.impl.qualified_name = (function spec_tools$impl$qualified_name(key){
if((key instanceof cljs.core.Keyword)){
var temp__5802__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5802__auto__)){
var nn = temp__5802__auto__;
return [nn,"/",cljs.core.name(key)].join('');
} else {
return cljs.core.name(key);
}
} else {
return key;
}
});
spec_tools.impl.nilable_spec_QMARK_ = (function spec_tools$impl$nilable_spec_QMARK_(spec){
var form = (function (){var and__5000__auto__ = spec;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.spec.alpha.form(spec);
} else {
return and__5000__auto__;
}
})();
return cljs.core.boolean$(((cljs.core.seq_QMARK_(form))?(function (){var G__26864 = form;
var G__26864__$1 = (((G__26864 == null))?null:cljs.core.seq(G__26864));
var G__26864__$2 = (((G__26864__$1 == null))?null:cljs.core.first(G__26864__$1));
if((G__26864__$2 == null)){
return null;
} else {
var fexpr__26865 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),null,new cljs.core.Symbol("clojure.spec.alpha","nilable","clojure.spec.alpha/nilable",-1718644550,null),null], null), null);
return (fexpr__26865.cljs$core$IFn$_invoke$arity$1 ? fexpr__26865.cljs$core$IFn$_invoke$arity$1(G__26864__$2) : fexpr__26865.call(null, G__26864__$2));
}
})():null));
});
/**
 * Unwrap [x] to x. Asserts that coll has exactly one element.
 */
spec_tools.impl.unwrap = (function spec_tools$impl$unwrap(coll){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coll))){
} else {
throw (new Error("Assert failed: (= 1 (count coll))"));
}

return cljs.core.first(coll);
});
spec_tools.impl.deep_merge = (function spec_tools$impl$deep_merge(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26907 = arguments.length;
var i__5727__auto___26908 = (0);
while(true){
if((i__5727__auto___26908 < len__5726__auto___26907)){
args__5732__auto__.push((arguments[i__5727__auto___26908]));

var G__26909 = (i__5727__auto___26908 + (1));
i__5727__auto___26908 = G__26909;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(spec_tools.impl.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (values){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,values)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,spec_tools.impl.deep_merge,values);
} else {
if(cljs.core.every_QMARK_(cljs.core.coll_QMARK_,values)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,values);
} else {
return cljs.core.last(values);

}
}
}));

(spec_tools.impl.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(spec_tools.impl.deep_merge.cljs$lang$applyTo = (function (seq26869){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26869));
}));

spec_tools.impl.unlift_keys = (function spec_tools$impl$unlift_keys(data,ns_name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__26874){
var vec__26875 = p__26874;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26875,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,cljs.core.namespace(k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
});
spec_tools.impl.register_spec_BANG_ = (function spec_tools$impl$register_spec_BANG_(k,s){
return cljs.spec.alpha.def_impl(k,cljs.spec.alpha.form(s),s);
});
spec_tools.impl.coll_of_spec = (function spec_tools$impl$coll_of_spec(pred,type){
var form = spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred);
var cpred = ((cljs.core.set_QMARK_(type))?cljs.core.set_QMARK_:cljs.core.vector_QMARK_);
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"into","into",-150836029),type,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,type,null,(1),null))], 0)))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cpred,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.map_of_spec = (function spec_tools$impl$map_of_spec(kpred,vpred){
var forms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
var tuple = cljs.spec.alpha.tuple_impl.cljs$core$IFn$_invoke$arity$2(forms,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kpred,vpred], null));
return cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),forms))),tuple,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),true,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (_,v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),forms,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null], null),null);
});
spec_tools.impl.keys_spec = (function spec_tools$impl$keys_spec(p__26880){
var map__26881 = p__26880;
var map__26881__$1 = cljs.core.__destructure_map(map__26881);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26881__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var req_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req,req_un)));
var opt_specs = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(opt,opt_un)));
var req_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,req),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,req_un)));
var opt_keys = cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish,opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.impl.polish_un,opt_un)));
var pred_exprs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__26878_SHARP_){
return cljs.core.map_QMARK_(p1__26878_SHARP_);
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return (function (p1__26879_SHARP_){
return cljs.core.contains_QMARK_(p1__26879_SHARP_,x);
});
}),req_keys));
var pred_forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))))),null,(1),null))], 0))))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))));
}),req_keys));
var keys_pred = (function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,p){
var or__5002__auto__ = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(x) : p.call(null, x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.reduced(false);
}
}),true,pred_exprs);
});
return cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[req_un,opt_un,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms,opt]));
});
spec_tools.impl.nilable_spec = (function spec_tools$impl$nilable_spec(pred){
var form = spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(pred);
return cljs.spec.alpha.nilable_impl(form,pred,null);
});
spec_tools.impl.or_spec = (function spec_tools$impl$or_spec(v){
var ks = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v);
var preds = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,v);
var forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(spec_tools.form.resolve_form,preds);
return cljs.spec.alpha.or_spec_impl(ks,forms,preds,null);
});

//# sourceMappingURL=spec_tools.impl.js.map
