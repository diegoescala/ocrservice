goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__23362 = libspec;
var seq__23363 = cljs.core.seq(vec__23362);
var first__23364 = cljs.core.first(seq__23363);
var seq__23363__$1 = cljs.core.next(seq__23363);
var lib = first__23364;
var spec = seq__23363__$1;
var libspec__$1 = vec__23362;
var vec__23365 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23365,(0),null);
var vec__23368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23365,(1),null);
var seq__23369 = cljs.core.seq(vec__23368);
var first__23370 = cljs.core.first(seq__23369);
var seq__23369__$1 = cljs.core.next(seq__23369);
var _ = first__23370;
var first__23370__$1 = cljs.core.first(seq__23369__$1);
var seq__23369__$2 = cljs.core.next(seq__23369__$1);
var alias = first__23370__$1;
var post_spec = seq__23369__$2;
var post = vec__23368;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__23375 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23375,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__23375;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__23381 = cljs.core.seq(new_as_aliases);
var chunk__23382 = null;
var count__23383 = (0);
var i__23384 = (0);
while(true){
if((i__23384 < count__23383)){
var vec__23406 = chunk__23382.cljs$core$IIndexed$_nth$arity$2(null, i__23384);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23406,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__23439 = seq__23381;
var G__23440 = chunk__23382;
var G__23441 = count__23383;
var G__23442 = (i__23384 + (1));
seq__23381 = G__23439;
chunk__23382 = G__23440;
count__23383 = G__23441;
i__23384 = G__23442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23381);
if(temp__5804__auto__){
var seq__23381__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23381__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23381__$1);
var G__23443 = cljs.core.chunk_rest(seq__23381__$1);
var G__23444 = c__5525__auto__;
var G__23445 = cljs.core.count(c__5525__auto__);
var G__23446 = (0);
seq__23381 = G__23443;
chunk__23382 = G__23444;
count__23383 = G__23445;
i__23384 = G__23446;
continue;
} else {
var vec__23411 = cljs.core.first(seq__23381__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23411,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__23447 = cljs.core.next(seq__23381__$1);
var G__23448 = null;
var G__23449 = (0);
var G__23450 = (0);
seq__23381 = G__23447;
chunk__23382 = G__23448;
count__23383 = G__23449;
i__23384 = G__23450;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__23420 = arguments.length;
switch (G__23420) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__23422 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__23422__$1 = cljs.core.__destructure_map(map__23422);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23422__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23422__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__23423 = ret__$1;
var G__23423__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__23423,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__23423);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__23423__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__23423__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__23424,p__23425){
var map__23426 = p__23424;
var map__23426__$1 = cljs.core.__destructure_map(map__23426);
var ret__$1 = map__23426__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23426__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__23427 = p__23425;
var seq__23428 = cljs.core.seq(vec__23427);
var first__23429 = cljs.core.first(seq__23428);
var seq__23428__$1 = cljs.core.next(seq__23428);
var spec_key = first__23429;
var libspecs = seq__23428__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__23430 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__23430__$1 = cljs.core.__destructure_map(map__23430);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23430__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__23431 = ret__$1;
var G__23431__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__23431,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__23431);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__23431__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__23431__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
