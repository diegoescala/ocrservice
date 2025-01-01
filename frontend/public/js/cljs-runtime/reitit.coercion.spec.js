goog.provide('reitit.coercion.spec');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec28487 = (function (meta28488){
this.meta28488 = meta28488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28489,meta28488__$1){
var self__ = this;
var _28489__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec28487(meta28488__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28489){
var self__ = this;
var _28489__$1 = this;
return self__.meta28488;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta28488","meta28488",1543589251,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec28487.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec28487.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec28487");

(reitit.coercion.spec.t_reitit$coercion$spec28487.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.coercion.spec/t_reitit$coercion$spec28487");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec28487.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec28487 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec28487(meta28488){
return (new reitit.coercion.spec.t_reitit$coercion$spec28487(meta28488));
});


reitit.coercion.spec.no_op_transformer = (new reitit.coercion.spec.t_reitit$coercion$spec28487(cljs.core.PersistentArrayMap.EMPTY));

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_28517 = (function (this$,name){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5351__auto__.call(null, this$,name));
} else {
var m__5349__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5349__auto__.call(null, this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_28517(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__5002__auto__ = _QMARK_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.coercion.spec.IntoSpec["_"] = true);

(reitit.coercion.spec.into_spec["_"] = (function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

(reitit.coercion.spec.IntoSpec["null"] = true);

(reitit.coercion.spec.into_spec["null"] = (function (_,___$1){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28495 = cljs.core.get_global_hierarchy;
return (fexpr__28495.cljs$core$IFn$_invoke$arity$0 ? fexpr__28495.cljs$core$IFn$_invoke$arity$0() : fexpr__28495.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec28499 = (function (p__28497,map__28498,opts,transformers,coerce_response_QMARK_,meta28500){
this.p__28497 = p__28497;
this.map__28498 = map__28498;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta28500 = meta28500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28501,meta28500__$1){
var self__ = this;
var _28501__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec28499(self__.p__28497,self__.map__28498,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta28500__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28501){
var self__ = this;
var _28501__$1 = this;
return self__.meta28500;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,spec){
var self__ = this;
var ___$1 = this;
var map__28502 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null, type));
var map__28502__$1 = cljs.core.__destructure_map(map__28502);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28502__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28502__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5802__auto__ = (function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var transformer = temp__5802__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null, spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null, new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(model),(1)))?cljs.core.first(model):((cljs.core.every_QMARK_(cljs.core.map_QMARK_,model))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(meta_merge.core.meta_merge,model):reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.coercion.spec","model-error","reitit.coercion.spec/model-error",1299329279),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't merge nested clojure specs",new cljs.core.Keyword(null,"spec","spec",347520401),model], null))
)),name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_get_model_apidocs$arity$4 = (function (_,specification,model,options){
var self__ = this;
var ___$1 = this;
var G__28503 = specification;
var G__28503__$1 = (((G__28503 instanceof cljs.core.Keyword))?G__28503.fqn:null);
switch (G__28503__$1) {
case "openapi":
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2(model,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts,options], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28496_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__28496_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (_,specification,p__28504){
var self__ = this;
var map__28505 = p__28504;
var map__28505__$1 = cljs.core.__destructure_map(map__28505);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28505__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28505__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28505__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var content_types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28505__$1,new cljs.core.Keyword(null,"content-types","content-types",1736685783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null));
var ___$1 = this;
var G__28506 = specification;
var G__28506__$1 = (((G__28506 instanceof cljs.core.Keyword))?G__28506.fqn:null);
switch (G__28506__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),parameters], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__5480__auto__ = (function reitit$coercion$spec$iter__28507(s__28508){
return (new cljs.core.LazySeq(null,(function (){
var s__28508__$1 = s__28508;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28508__$1);
if(temp__5804__auto__){
var s__28508__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28508__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28508__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28510 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28509 = (0);
while(true){
if((i__28509 < size__5479__auto__)){
var vec__28511 = cljs.core._nth(c__5478__auto__,i__28509);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28511,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28511,(1),null);
cljs.core.chunk_append(b__28510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.set.rename_keys($__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
})()], null));

var G__28520 = (i__28509 + (1));
i__28509 = G__28520;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28510),reitit$coercion$spec$iter__28507(cljs.core.chunk_rest(s__28508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28510),null);
}
} else {
var vec__28514 = cljs.core.first(s__28508__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28514,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28514,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.set.rename_keys($__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
})()], null),reitit$coercion$spec$iter__28507(cljs.core.rest(s__28508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__28497","p__28497",-549958846,null),new cljs.core.Symbol(null,"map__28498","map__28498",225054600,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta28500","meta28500",1271158273,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec28499.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec28499.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec28499");

(reitit.coercion.spec.t_reitit$coercion$spec28499.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"reitit.coercion.spec/t_reitit$coercion$spec28499");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec28499.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec28499 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec28499(p__28497,map__28498,opts,transformers,coerce_response_QMARK_,meta28500){
return (new reitit.coercion.spec.t_reitit$coercion$spec28499(p__28497,map__28498,opts,transformers,coerce_response_QMARK_,meta28500));
});


reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__28497){
var map__28498 = p__28497;
var map__28498__$1 = cljs.core.__destructure_map(map__28498);
var opts = map__28498__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28498__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28498__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
return (new reitit.coercion.spec.t_reitit$coercion$spec28499(p__28497,map__28498__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
