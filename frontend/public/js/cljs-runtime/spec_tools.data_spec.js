goog.provide('spec_tools.data_spec');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.data_spec.OptionalKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28045,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28051 = k28045;
var G__28051__$1 = (((G__28051 instanceof cljs.core.Keyword))?G__28051.fqn:null);
switch (G__28051__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28045,else__5303__auto__);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28053){
var vec__28055 = p__28053;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28055,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.OptionalKey{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28044){
var self__ = this;
var G__28044__$1 = this;
return (new cljs.core.RecordIter((0),G__28044__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-261180351 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28046,other28047){
var self__ = this;
var this28046__$1 = this;
return (((!((other28047 == null)))) && ((((this28046__$1.constructor === other28047.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28046__$1.k,other28047.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28046__$1.__extmap,other28047.__extmap)))))));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28045){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28071 = k28045;
var G__28071__$1 = (((G__28071 instanceof cljs.core.Keyword))?G__28071.fqn:null);
switch (G__28071__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28045);

}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28044){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28077 = cljs.core.keyword_identical_QMARK_;
var expr__28078 = k__5309__auto__;
if(cljs.core.truth_((pred__28077.cljs$core$IFn$_invoke$arity$2 ? pred__28077.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__28078) : pred__28077.call(null, new cljs.core.Keyword(null,"k","k",-2146297393),expr__28078)))){
return (new spec_tools.data_spec.OptionalKey(G__28044,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.OptionalKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28044),null));
}
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28044){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.OptionalKey(self__.k,G__28044,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.OptionalKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.OptionalKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$type = true);

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/OptionalKey",null,(1),null));
}));

(spec_tools.data_spec.OptionalKey.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/OptionalKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/OptionalKey.
 */
spec_tools.data_spec.__GT_OptionalKey = (function spec_tools$data_spec$__GT_OptionalKey(k){
return (new spec_tools.data_spec.OptionalKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/OptionalKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_OptionalKey = (function spec_tools$data_spec$map__GT_OptionalKey(G__28048){
var extmap__5342__auto__ = (function (){var G__28101 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28048,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__28048)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28101);
} else {
return G__28101;
}
})();
return (new spec_tools.data_spec.OptionalKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__28048),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.data_spec.RequiredKey = (function (k,__meta,__extmap,__hash){
this.k = k;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28104,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28117 = k28104;
var G__28117__$1 = (((G__28117 instanceof cljs.core.Keyword))?G__28117.fqn:null);
switch (G__28117__$1) {
case "k":
return self__.k;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28104,else__5303__auto__);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28126){
var vec__28127 = p__28126;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28127,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28127,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.RequiredKey{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28103){
var self__ = this;
var G__28103__$1 = this;
return (new cljs.core.RecordIter((0),G__28103__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-470971127 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28105,other28106){
var self__ = this;
var this28105__$1 = this;
return (((!((other28106 == null)))) && ((((this28105__$1.constructor === other28106.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28105__$1.k,other28106.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28105__$1.__extmap,other28106.__extmap)))))));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"k","k",-2146297393),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28104){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28163 = k28104;
var G__28163__$1 = (((G__28163 instanceof cljs.core.Keyword))?G__28163.fqn:null);
switch (G__28163__$1) {
case "k":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28104);

}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28103){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28167 = cljs.core.keyword_identical_QMARK_;
var expr__28168 = k__5309__auto__;
if(cljs.core.truth_((pred__28167.cljs$core$IFn$_invoke$arity$2 ? pred__28167.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"k","k",-2146297393),expr__28168) : pred__28167.call(null, new cljs.core.Keyword(null,"k","k",-2146297393),expr__28168)))){
return (new spec_tools.data_spec.RequiredKey(G__28103,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.RequiredKey(self__.k,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28103),null));
}
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"k","k",-2146297393),self__.k,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28103){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.RequiredKey(self__.k,G__28103,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.RequiredKey.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.RequiredKey.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null)], null);
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$type = true);

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/RequiredKey",null,(1),null));
}));

(spec_tools.data_spec.RequiredKey.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/RequiredKey");
}));

/**
 * Positional factory function for spec-tools.data-spec/RequiredKey.
 */
spec_tools.data_spec.__GT_RequiredKey = (function spec_tools$data_spec$__GT_RequiredKey(k){
return (new spec_tools.data_spec.RequiredKey(k,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/RequiredKey, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_RequiredKey = (function spec_tools$data_spec$map__GT_RequiredKey(G__28115){
var extmap__5342__auto__ = (function (){var G__28203 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28115,new cljs.core.Keyword(null,"k","k",-2146297393));
if(cljs.core.record_QMARK_(G__28115)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28203);
} else {
return G__28203;
}
})();
return (new spec_tools.data_spec.RequiredKey(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__28115),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.data_spec.Maybe = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28206,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28229 = k28206;
var G__28229__$1 = (((G__28229 instanceof cljs.core.Keyword))?G__28229.fqn:null);
switch (G__28229__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28206,else__5303__auto__);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28234){
var vec__28235 = p__28234;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28235,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.Maybe{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28205){
var self__ = this;
var G__28205__$1 = this;
return (new cljs.core.RecordIter((0),G__28205__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1150224619 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28207,other28208){
var self__ = this;
var this28207__$1 = this;
return (((!((other28208 == null)))) && ((((this28207__$1.constructor === other28208.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28207__$1.v,other28208.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28207__$1.__extmap,other28208.__extmap)))))));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28206){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28249 = k28206;
var G__28249__$1 = (((G__28249 instanceof cljs.core.Keyword))?G__28249.fqn:null);
switch (G__28249__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28206);

}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28205){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28251 = cljs.core.keyword_identical_QMARK_;
var expr__28252 = k__5309__auto__;
if(cljs.core.truth_((pred__28251.cljs$core$IFn$_invoke$arity$2 ? pred__28251.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__28252) : pred__28251.call(null, new cljs.core.Keyword(null,"v","v",21465059),expr__28252)))){
return (new spec_tools.data_spec.Maybe(G__28205,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Maybe(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28205),null));
}
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28205){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.Maybe(self__.v,G__28205,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Maybe.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.Maybe.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Maybe.cljs$lang$type = true);

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Maybe",null,(1),null));
}));

(spec_tools.data_spec.Maybe.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/Maybe");
}));

/**
 * Positional factory function for spec-tools.data-spec/Maybe.
 */
spec_tools.data_spec.__GT_Maybe = (function spec_tools$data_spec$__GT_Maybe(v){
return (new spec_tools.data_spec.Maybe(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Maybe, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Maybe = (function spec_tools$data_spec$map__GT_Maybe(G__28216){
var extmap__5342__auto__ = (function (){var G__28255 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28216,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__28216)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28255);
} else {
return G__28255;
}
})();
return (new spec_tools.data_spec.Maybe(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__28216),null,cljs.core.not_empty(extmap__5342__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.data_spec.Or = (function (v,__meta,__extmap,__hash){
this.v = v;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k28257,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__28262 = k28257;
var G__28262__$1 = (((G__28262 instanceof cljs.core.Keyword))?G__28262.fqn:null);
switch (G__28262__$1) {
case "v":
return self__.v;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28257,else__5303__auto__);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__28264){
var vec__28265 = p__28264;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28265,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#spec-tools.data-spec.Or{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28256){
var self__ = this;
var G__28256__$1 = this;
return (new cljs.core.RecordIter((0),G__28256__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1620079539 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28258,other28259){
var self__ = this;
var this28258__$1 = this;
return (((!((other28259 == null)))) && ((((this28258__$1.constructor === other28259.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28258__$1.v,other28259.v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28258__$1.__extmap,other28259.__extmap)))))));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k28257){
var self__ = this;
var this__5307__auto____$1 = this;
var G__28268 = k28257;
var G__28268__$1 = (((G__28268 instanceof cljs.core.Keyword))?G__28268.fqn:null);
switch (G__28268__$1) {
case "v":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28257);

}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__28256){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__28270 = cljs.core.keyword_identical_QMARK_;
var expr__28271 = k__5309__auto__;
if(cljs.core.truth_((pred__28270.cljs$core$IFn$_invoke$arity$2 ? pred__28270.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"v","v",21465059),expr__28271) : pred__28270.call(null, new cljs.core.Keyword(null,"v","v",21465059),expr__28271)))){
return (new spec_tools.data_spec.Or(G__28256,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.data_spec.Or(self__.v,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__28256),null));
}
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"v","v",21465059),self__.v,null))], null),self__.__extmap));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__28256){
var self__ = this;
var this__5299__auto____$1 = this;
return (new spec_tools.data_spec.Or(self__.v,G__28256,self__.__extmap,self__.__hash));
}));

(spec_tools.data_spec.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(spec_tools.data_spec.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null);
}));

(spec_tools.data_spec.Or.cljs$lang$type = true);

(spec_tools.data_spec.Or.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"spec-tools.data-spec/Or",null,(1),null));
}));

(spec_tools.data_spec.Or.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"spec-tools.data-spec/Or");
}));

/**
 * Positional factory function for spec-tools.data-spec/Or.
 */
spec_tools.data_spec.__GT_Or = (function spec_tools$data_spec$__GT_Or(v){
return (new spec_tools.data_spec.Or(v,null,null,null));
});

/**
 * Factory function for spec-tools.data-spec/Or, taking a map of keywords to field values.
 */
spec_tools.data_spec.map__GT_Or = (function spec_tools$data_spec$map__GT_Or(G__28260){
var extmap__5342__auto__ = (function (){var G__28275 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28260,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core.record_QMARK_(G__28260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28275);
} else {
return G__28275;
}
})();
return (new spec_tools.data_spec.Or(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__28260),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * Makes a key optional:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/opt :age) int?}
 *   ```
 */
spec_tools.data_spec.opt = (function spec_tools$data_spec$opt(k){
return spec_tools.data_spec.__GT_OptionalKey(k);
});
/**
 * Test if the key is wrapped with [[opt]]
 */
spec_tools.data_spec.opt_QMARK_ = (function spec_tools$data_spec$opt_QMARK_(x){
return (x instanceof spec_tools.data_spec.OptionalKey);
});
/**
 * Makes a key required:
 * 
 *   ```clojure
 *   {:name string?
 * (ds/req :age) int?}
 *   ```
 */
spec_tools.data_spec.req = (function spec_tools$data_spec$req(k){
return spec_tools.data_spec.__GT_RequiredKey(k);
});
/**
 * Test if the key is wrapped with [[req]]
 */
spec_tools.data_spec.req_QMARK_ = (function spec_tools$data_spec$req_QMARK_(x){
return (!(spec_tools.data_spec.opt_QMARK_(x)));
});
/**
 * Makes a value nillable:
 * 
 *   ```clojure
 *   {:name string?
 * :age (ds/maybe int?)}
 *   ```
 */
spec_tools.data_spec.maybe = (function spec_tools$data_spec$maybe(v){
return spec_tools.data_spec.__GT_Maybe(v);
});
/**
 * Test if the value is wrapped with [[maybe]]
 */
spec_tools.data_spec.maybe_QMARK_ = (function spec_tools$data_spec$maybe_QMARK_(x){
return (x instanceof spec_tools.data_spec.Maybe);
});
spec_tools.data_spec.or = (function spec_tools$data_spec$or(v){
return spec_tools.data_spec.__GT_Or(v);
});
spec_tools.data_spec.or_QMARK_ = (function spec_tools$data_spec$or_QMARK_(x){
return (x instanceof spec_tools.data_spec.Or);
});
/**
 * Test if the key is wrapped with [[opt]] or [[req]]
 */
spec_tools.data_spec.wrapped_key_QMARK_ = (function spec_tools$data_spec$wrapped_key_QMARK_(x){
return ((spec_tools.data_spec.opt_QMARK_(x)) || ((x instanceof spec_tools.data_spec.RequiredKey)));
});
/**
 * Unwrap the [[opt]] or [[req]] key.
 */
spec_tools.data_spec.unwrap_key = (function spec_tools$data_spec$unwrap_key(x){
if(spec_tools.data_spec.wrapped_key_QMARK_(x)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
spec_tools.data_spec._nested_key = (function spec_tools$data_spec$_nested_key(n,k){
if(cljs.core.qualified_keyword_QMARK_(n)){
} else {
throw (new Error(["Assert failed: ","spec must have a qualified name","\n","(qualified-keyword? n)"].join('')));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(n),"$",cljs.core.name(n),(function (){var temp__5802__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5802__auto__)){
var kns = temp__5802__auto__;
return ["$",kns].join('');
} else {
return null;
}
})(),"/",cljs.core.name(k)].join(''));
});
spec_tools.data_spec._map_spec = (function spec_tools$data_spec$_map_spec(data,p__28277){
var map__28278 = p__28277;
var map__28278__$1 = cljs.core.__destructure_map(map__28278);
var opts = map__28278__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var keys_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28278__$1,new cljs.core.Keyword(null,"keys-spec","keys-spec",920288948),spec_tools.impl.keys_spec);
var keys_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278__$1,new cljs.core.Keyword(null,"keys-default","keys-default",-1790373239));
var temp__5802__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data));
if(and__5000__auto__){
var vec__28279 = cljs.core.first(data);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28279,(1),null);
var and__5000__auto____$1 = (!((((k instanceof cljs.core.Keyword)) || (spec_tools.data_spec.wrapped_key_QMARK_(k)))));
if(and__5000__auto____$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var vec__28282 = temp__5802__auto__;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28282,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28282,(1),null);
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.map_of_spec((spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(n,k_SINGLEQUOTE_) : spec_tools.data_spec.spec.call(null, n,k_SINGLEQUOTE_)),(function (){var G__28285 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"spec","spec",347520401),v_SINGLEQUOTE_], null);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__28285) : spec_tools.data_spec.spec.call(null, G__28285));
})())], null));
} else {
var m = cljs.core.reduce_kv((function (acc,k,v){
var k__$1 = (cljs.core.truth_((function (){var and__5000__auto__ = keys_default;
if(cljs.core.truth_(and__5000__auto__)){
return (k instanceof cljs.core.Keyword);
} else {
return and__5000__auto__;
}
})())?(keys_default.cljs$core$IFn$_invoke$arity$1 ? keys_default.cljs$core$IFn$_invoke$arity$1(k) : keys_default.call(null, k)):k);
var kv = spec_tools.data_spec.unwrap_key(k__$1);
var rk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([((spec_tools.data_spec.req_QMARK_(k__$1))?"req":"opt"),(((!(cljs.core.qualified_keyword_QMARK_(kv))))?"-un":null)].join(''));
var vec__28286 = ((spec_tools.data_spec.maybe_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(v),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__28276_SHARP_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),p1__28276_SHARP_], null));
}),spec_tools.impl.nilable_spec)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.identity], null));
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(0),null);
var wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28286,(1),null);
var vec__28289 = ((cljs.core.qualified_keyword_QMARK_(kv))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kv,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kv,v__$1))?kv:null)], null):(function (){var k_SINGLEQUOTE_ = spec_tools.data_spec._nested_key(n,spec_tools.data_spec.unwrap_key(kv));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,k_SINGLEQUOTE_], null);
})());
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(0),null);
var n_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28289,(1),null);
var v_SINGLEQUOTE_ = (cljs.core.truth_(n_SINGLEQUOTE_)?(function (){var G__28292 = (function (){var G__28293 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),n_SINGLEQUOTE_),new cljs.core.Keyword(null,"spec","spec",347520401),v__$1);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(G__28293) : spec_tools.data_spec.spec.call(null, G__28293));
})();
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__28292) : wrap.call(null, G__28292));
})():null);
var G__28294 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,rk,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),k_SINGLEQUOTE_);
if(cljs.core.truth_(v_SINGLEQUOTE_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__28294,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,v_SINGLEQUOTE_], null));
} else {
return G__28294;
}
}),cljs.core.PersistentArrayMap.EMPTY,data);
var defs = new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298).cljs$core$IFn$_invoke$arity$1(m);
var data__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("spec-tools.data-spec","defs","spec-tools.data-spec/defs",-916917298))));
var seq__28295_28452 = cljs.core.seq(defs);
var chunk__28296_28453 = null;
var count__28297_28454 = (0);
var i__28298_28455 = (0);
while(true){
if((i__28298_28455 < count__28297_28454)){
var vec__28307_28457 = chunk__28296_28453.cljs$core$IIndexed$_nth$arity$2(null, i__28298_28455);
var k_28458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28307_28457,(0),null);
var s_28459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28307_28457,(1),null);
var synthetic_QMARK__28460 = (function (){var and__5000__auto__ = spec_tools.core.spec_QMARK_(s_28459);
if(cljs.core.truth_(and__5000__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_28459)));
} else {
return and__5000__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_28458,(function (){var G__28310 = s_28459;
if(cljs.core.truth_(synthetic_QMARK__28460)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28310,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__28310;
}
})());


var G__28461 = seq__28295_28452;
var G__28462 = chunk__28296_28453;
var G__28463 = count__28297_28454;
var G__28464 = (i__28298_28455 + (1));
seq__28295_28452 = G__28461;
chunk__28296_28453 = G__28462;
count__28297_28454 = G__28463;
i__28298_28455 = G__28464;
continue;
} else {
var temp__5804__auto___28465 = cljs.core.seq(seq__28295_28452);
if(temp__5804__auto___28465){
var seq__28295_28466__$1 = temp__5804__auto___28465;
if(cljs.core.chunked_seq_QMARK_(seq__28295_28466__$1)){
var c__5525__auto___28467 = cljs.core.chunk_first(seq__28295_28466__$1);
var G__28468 = cljs.core.chunk_rest(seq__28295_28466__$1);
var G__28469 = c__5525__auto___28467;
var G__28470 = cljs.core.count(c__5525__auto___28467);
var G__28471 = (0);
seq__28295_28452 = G__28468;
chunk__28296_28453 = G__28469;
count__28297_28454 = G__28470;
i__28298_28455 = G__28471;
continue;
} else {
var vec__28312_28472 = cljs.core.first(seq__28295_28466__$1);
var k_28473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312_28472,(0),null);
var s_28474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28312_28472,(1),null);
var synthetic_QMARK__28475 = (function (){var and__5000__auto__ = spec_tools.core.spec_QMARK_(s_28474);
if(cljs.core.truth_(and__5000__auto__)){
return (!(spec_tools.parse.collection_type_QMARK_(s_28474)));
} else {
return and__5000__auto__;
}
})();
spec_tools.impl.register_spec_BANG_(k_28473,(function (){var G__28315 = s_28474;
if(cljs.core.truth_(synthetic_QMARK__28475)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28315,new cljs.core.Keyword("spec-tools.core","synthetic?","spec-tools.core/synthetic?",-2118167094),true);
} else {
return G__28315;
}
})());


var G__28476 = cljs.core.next(seq__28295_28466__$1);
var G__28477 = null;
var G__28478 = (0);
var G__28479 = (0);
seq__28295_28452 = G__28476;
chunk__28296_28453 = G__28477;
count__28297_28454 = G__28478;
i__28298_28455 = G__28479;
continue;
}
} else {
}
}
break;
}

return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),(keys_spec.cljs$core$IFn$_invoke$arity$1 ? keys_spec.cljs$core$IFn$_invoke$arity$1(data__$1) : keys_spec.call(null, data__$1))], null));
}
});
spec_tools.data_spec._coll_spec = (function spec_tools$data_spec$_coll_spec(data,p__28316){
var map__28317 = p__28316;
var map__28317__$1 = cljs.core.__destructure_map(map__28317);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28317__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(data))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind)," should be homogeneous, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data))," values found"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"kind","kind",-717265803),kind,new cljs.core.Keyword(null,"values","values",372645556),data], null));
}

var spec = (function (){var G__28318 = n;
var G__28319 = cljs.core.first(data);
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__28318,G__28319) : spec_tools.data_spec.spec.call(null, G__28318,G__28319));
})();
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec_tools.impl.coll_of_spec(spec,kind)], null));
});
spec_tools.data_spec._or_spec = (function spec_tools$data_spec$_or_spec(n,v){
if(((cljs.core.map_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(v))))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["data-spec or must be a map of keyword keys -> specs, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)," found"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),n,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}

return spec_tools.impl.or_spec(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var iter__5480__auto__ = (function spec_tools$data_spec$_or_spec_$_iter__28320(s__28321){
return (new cljs.core.LazySeq(null,(function (){
var s__28321__$1 = s__28321;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28321__$1);
if(temp__5804__auto__){
var s__28321__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28321__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__28321__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__28323 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__28322 = (0);
while(true){
if((i__28322 < size__5479__auto__)){
var vec__28326 = cljs.core._nth(c__5478__auto__,i__28322);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28326,(1),null);
cljs.core.chunk_append(b__28323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__28329 = spec_tools.data_spec._nested_key(n,k);
var G__28330 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__28329,G__28330) : spec_tools.data_spec.spec.call(null, G__28329,G__28330));
})()], null));

var G__28480 = (i__28322 + (1));
i__28322 = G__28480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28323),spec_tools$data_spec$_or_spec_$_iter__28320(cljs.core.chunk_rest(s__28321__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28323),null);
}
} else {
var vec__28331 = cljs.core.first(s__28321__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28331,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__28334 = spec_tools.data_spec._nested_key(n,k);
var G__28335 = v__$1;
return (spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 ? spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(G__28334,G__28335) : spec_tools.data_spec.spec.call(null, G__28334,G__28335));
})()], null),spec_tools$data_spec$_or_spec_$_iter__28320(cljs.core.rest(s__28321__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(v);
})(),cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Creates a `clojure.spec.alpha/Spec` out of a data-spec. Supports 2 arities:
 * 
 *   ```clojure
 *   ;; arity1
 *   (ds/spec
 *  {:spec {:i int?}
 *   :name ::map})
 * 
 *   ;; arity2 (legacy)
 *   (ds/spec ::map {:i int?})
 *   ```
 * 
 *   The following options are valid for the 1 arity case:
 * 
 *   | Key              | Description
 *   | -----------------|----------------
 *   | `:spec`          | The wrapped data-spec.
 *   | `:name`          | Qualified root spec name - used to generate unique names for sub-specs.
 *   | `:keys-spec`     | Function to wrap not-wrapped keys, e.g. [[opt]] to make keys optional by default.
 *   | `:keys-default`  | Function to generate the keys-specs, default [[keys-specs]].
 */
spec_tools.data_spec.spec = (function spec_tools$data_spec$spec(var_args){
var G__28339 = arguments.length;
switch (G__28339) {
case 1:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1 = (function (p__28340){
var map__28341 = p__28340;
var map__28341__$1 = cljs.core.__destructure_map(map__28341);
var opts = map__28341__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var nested_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973));
if(cljs.core.truth_(spec_tools.data_spec.spec)){
} else {
throw (new Error(["Assert failed: ","missing :spec predicate in data-spec","\n","spec"].join('')));
}

var opts__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"name","name",1843675177),name),new cljs.core.Keyword(null,"spec","spec",347520401));
var named_spec = (function (p1__28336_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28336_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),name);
});
var maybe_named_spec = (function (p1__28337_SHARP_){
var G__28342 = p1__28337_SHARP_;
if(cljs.core.not(nested_QMARK_)){
return named_spec(G__28342);
} else {
return G__28342;
}
});
var nested_opts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword("spec-tools.data-spec","nested?","spec-tools.data-spec/nested?",-662981973),true);
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(data))){
return maybe_named_spec(data);
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(data))){
return data;
} else {
if(spec_tools.data_spec.or_QMARK_(data)){
return spec_tools.data_spec._or_spec(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(spec_tools.data_spec.maybe_QMARK_(data)){
return spec_tools.impl.nilable_spec(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if(cljs.core.map_QMARK_(data)){
return named_spec(spec_tools.data_spec._map_spec(data,nested_opts));
} else {
if(cljs.core.set_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentHashSet.EMPTY)));
} else {
if(cljs.core.vector_QMARK_(data)){
return maybe_named_spec(spec_tools.data_spec._coll_spec(data,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nested_opts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.PersistentVector.EMPTY)));
} else {
return maybe_named_spec(spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),data], null)));

}
}
}
}
}
}
}
}));

(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2 = (function (name,data){
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"spec","spec",347520401),data], null));
}));

(spec_tools.data_spec.spec.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=spec_tools.data_spec.js.map
