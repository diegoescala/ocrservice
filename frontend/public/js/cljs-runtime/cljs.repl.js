goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18995){
var map__18996 = p__18995;
var map__18996__$1 = cljs.core.__destructure_map(map__18996);
var m = map__18996__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19023_19410 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19024_19412 = null;
var count__19025_19413 = (0);
var i__19026_19414 = (0);
while(true){
if((i__19026_19414 < count__19025_19413)){
var f_19415 = chunk__19024_19412.cljs$core$IIndexed$_nth$arity$2(null, i__19026_19414);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19415], 0));


var G__19416 = seq__19023_19410;
var G__19418 = chunk__19024_19412;
var G__19419 = count__19025_19413;
var G__19420 = (i__19026_19414 + (1));
seq__19023_19410 = G__19416;
chunk__19024_19412 = G__19418;
count__19025_19413 = G__19419;
i__19026_19414 = G__19420;
continue;
} else {
var temp__5804__auto___19421 = cljs.core.seq(seq__19023_19410);
if(temp__5804__auto___19421){
var seq__19023_19422__$1 = temp__5804__auto___19421;
if(cljs.core.chunked_seq_QMARK_(seq__19023_19422__$1)){
var c__5525__auto___19424 = cljs.core.chunk_first(seq__19023_19422__$1);
var G__19425 = cljs.core.chunk_rest(seq__19023_19422__$1);
var G__19426 = c__5525__auto___19424;
var G__19427 = cljs.core.count(c__5525__auto___19424);
var G__19428 = (0);
seq__19023_19410 = G__19425;
chunk__19024_19412 = G__19426;
count__19025_19413 = G__19427;
i__19026_19414 = G__19428;
continue;
} else {
var f_19429 = cljs.core.first(seq__19023_19422__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19429], 0));


var G__19432 = cljs.core.next(seq__19023_19422__$1);
var G__19433 = null;
var G__19434 = (0);
var G__19435 = (0);
seq__19023_19410 = G__19432;
chunk__19024_19412 = G__19433;
count__19025_19413 = G__19434;
i__19026_19414 = G__19435;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19438 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19438], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19438)))?cljs.core.second(arglists_19438):arglists_19438)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19043_19449 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19044_19450 = null;
var count__19045_19451 = (0);
var i__19046_19452 = (0);
while(true){
if((i__19046_19452 < count__19045_19451)){
var vec__19075_19454 = chunk__19044_19450.cljs$core$IIndexed$_nth$arity$2(null, i__19046_19452);
var name_19455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075_19454,(0),null);
var map__19078_19456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19075_19454,(1),null);
var map__19078_19457__$1 = cljs.core.__destructure_map(map__19078_19456);
var doc_19458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078_19457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078_19457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19455], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19459], 0));

if(cljs.core.truth_(doc_19458)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19458], 0));
} else {
}


var G__19465 = seq__19043_19449;
var G__19466 = chunk__19044_19450;
var G__19467 = count__19045_19451;
var G__19468 = (i__19046_19452 + (1));
seq__19043_19449 = G__19465;
chunk__19044_19450 = G__19466;
count__19045_19451 = G__19467;
i__19046_19452 = G__19468;
continue;
} else {
var temp__5804__auto___19469 = cljs.core.seq(seq__19043_19449);
if(temp__5804__auto___19469){
var seq__19043_19471__$1 = temp__5804__auto___19469;
if(cljs.core.chunked_seq_QMARK_(seq__19043_19471__$1)){
var c__5525__auto___19472 = cljs.core.chunk_first(seq__19043_19471__$1);
var G__19473 = cljs.core.chunk_rest(seq__19043_19471__$1);
var G__19474 = c__5525__auto___19472;
var G__19475 = cljs.core.count(c__5525__auto___19472);
var G__19476 = (0);
seq__19043_19449 = G__19473;
chunk__19044_19450 = G__19474;
count__19045_19451 = G__19475;
i__19046_19452 = G__19476;
continue;
} else {
var vec__19083_19477 = cljs.core.first(seq__19043_19471__$1);
var name_19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19477,(0),null);
var map__19086_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19083_19477,(1),null);
var map__19086_19480__$1 = cljs.core.__destructure_map(map__19086_19479);
var doc_19481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086_19480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19086_19480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19478], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19482], 0));

if(cljs.core.truth_(doc_19481)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19481], 0));
} else {
}


var G__19485 = cljs.core.next(seq__19043_19471__$1);
var G__19486 = null;
var G__19487 = (0);
var G__19488 = (0);
seq__19043_19449 = G__19485;
chunk__19044_19450 = G__19486;
count__19045_19451 = G__19487;
i__19046_19452 = G__19488;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19116 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19117 = null;
var count__19118 = (0);
var i__19119 = (0);
while(true){
if((i__19119 < count__19118)){
var role = chunk__19117.cljs$core$IIndexed$_nth$arity$2(null, i__19119);
var temp__5804__auto___19492__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19492__$1)){
var spec_19494 = temp__5804__auto___19492__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19494)], 0));
} else {
}


var G__19495 = seq__19116;
var G__19496 = chunk__19117;
var G__19497 = count__19118;
var G__19498 = (i__19119 + (1));
seq__19116 = G__19495;
chunk__19117 = G__19496;
count__19118 = G__19497;
i__19119 = G__19498;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19116);
if(temp__5804__auto____$1){
var seq__19116__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19116__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19116__$1);
var G__19500 = cljs.core.chunk_rest(seq__19116__$1);
var G__19501 = c__5525__auto__;
var G__19502 = cljs.core.count(c__5525__auto__);
var G__19503 = (0);
seq__19116 = G__19500;
chunk__19117 = G__19501;
count__19118 = G__19502;
i__19119 = G__19503;
continue;
} else {
var role = cljs.core.first(seq__19116__$1);
var temp__5804__auto___19504__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19504__$2)){
var spec_19507 = temp__5804__auto___19504__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19507)], 0));
} else {
}


var G__19511 = cljs.core.next(seq__19116__$1);
var G__19512 = null;
var G__19513 = (0);
var G__19514 = (0);
seq__19116 = G__19511;
chunk__19117 = G__19512;
count__19118 = G__19513;
i__19119 = G__19514;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19210 = datafied_throwable;
var map__19210__$1 = cljs.core.__destructure_map(map__19210);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19210__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19210__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19211 = cljs.core.last(via);
var map__19211__$1 = cljs.core.__destructure_map(map__19211);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19211__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19212 = data;
var map__19212__$1 = cljs.core.__destructure_map(map__19212);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19212__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19213 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19213__$1 = cljs.core.__destructure_map(map__19213);
var top_data = map__19213__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19230 = phase;
var G__19230__$1 = (((G__19230 instanceof cljs.core.Keyword))?G__19230.fqn:null);
switch (G__19230__$1) {
case "read-source":
var map__19231 = data;
var map__19231__$1 = cljs.core.__destructure_map(map__19231);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19231__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19238 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19238__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19238,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19238);
var G__19238__$2 = (cljs.core.truth_((function (){var fexpr__19243 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19243.cljs$core$IFn$_invoke$arity$1 ? fexpr__19243.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19243.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19238__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19238__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19238__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19238__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19251 = top_data;
var G__19251__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19251);
var G__19251__$2 = (cljs.core.truth_((function (){var fexpr__19252 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19252.cljs$core$IFn$_invoke$arity$1 ? fexpr__19252.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19252.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19251__$1);
var G__19251__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19251__$2);
var G__19251__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19251__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19251__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19259 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19259,(3),null);
var G__19266 = top_data;
var G__19266__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19266);
var G__19266__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19266__$1);
var G__19266__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19266__$2);
var G__19266__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19266__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19266__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19266__$4;
}

break;
case "execution":
var vec__19281 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19281,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19281,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19281,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19281,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19197_SHARP_){
var or__5002__auto__ = (p1__19197_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19284 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19284.cljs$core$IFn$_invoke$arity$1 ? fexpr__19284.cljs$core$IFn$_invoke$arity$1(p1__19197_SHARP_) : fexpr__19284.call(null, p1__19197_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19288 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19288__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19288,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19288);
var G__19288__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19288__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19288__$1);
var G__19288__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19288__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19288__$2);
var G__19288__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19288__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19288__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19230__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19306){
var map__19309 = p__19306;
var map__19309__$1 = cljs.core.__destructure_map(map__19309);
var triage_data = map__19309__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19309__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19321 = phase;
var G__19321__$1 = (((G__19321 instanceof cljs.core.Keyword))?G__19321.fqn:null);
switch (G__19321__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19323 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19324 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19325 = loc;
var G__19326 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19327_19626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19328_19627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19329_19628 = true;
var _STAR_print_fn_STAR__temp_val__19330_19629 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19329_19628);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19330_19629);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19301_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19301_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19328_19627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19327_19626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19323,G__19324,G__19325,G__19326) : format.call(null, G__19323,G__19324,G__19325,G__19326));

break;
case "macroexpansion":
var G__19343 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19344 = cause_type;
var G__19345 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19346 = loc;
var G__19347 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19343,G__19344,G__19345,G__19346,G__19347) : format.call(null, G__19343,G__19344,G__19345,G__19346,G__19347));

break;
case "compile-syntax-check":
var G__19352 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19353 = cause_type;
var G__19354 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19355 = loc;
var G__19356 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19352,G__19353,G__19354,G__19355,G__19356) : format.call(null, G__19352,G__19353,G__19354,G__19355,G__19356));

break;
case "compilation":
var G__19358 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19359 = cause_type;
var G__19360 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19361 = loc;
var G__19362 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19358,G__19359,G__19360,G__19361,G__19362) : format.call(null, G__19358,G__19359,G__19360,G__19361,G__19362));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19365 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19366 = symbol;
var G__19367 = loc;
var G__19368 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19371_19649 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19372_19650 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19373_19651 = true;
var _STAR_print_fn_STAR__temp_val__19374_19652 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19373_19651);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19374_19652);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19304_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19304_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19372_19650);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19371_19649);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19365,G__19366,G__19367,G__19368) : format.call(null, G__19365,G__19366,G__19367,G__19368));
} else {
var G__19384 = "Execution error%s at %s(%s).\n%s\n";
var G__19385 = cause_type;
var G__19386 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19387 = loc;
var G__19388 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19384,G__19385,G__19386,G__19387,G__19388) : format.call(null, G__19384,G__19385,G__19386,G__19387,G__19388));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19321__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
