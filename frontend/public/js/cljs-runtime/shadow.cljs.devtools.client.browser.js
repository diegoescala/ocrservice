goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21507 = arguments.length;
var i__5727__auto___21508 = (0);
while(true){
if((i__5727__auto___21508 < len__5726__auto___21507)){
args__5732__auto__.push((arguments[i__5727__auto___21508]));

var G__21509 = (i__5727__auto___21508 + (1));
i__5727__auto___21508 = G__21509;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20899){
var G__20900 = cljs.core.first(seq20899);
var seq20899__$1 = cljs.core.next(seq20899);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20900,seq20899__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20901 = cljs.core.seq(sources);
var chunk__20902 = null;
var count__20903 = (0);
var i__20904 = (0);
while(true){
if((i__20904 < count__20903)){
var map__20914 = chunk__20902.cljs$core$IIndexed$_nth$arity$2(null, i__20904);
var map__20914__$1 = cljs.core.__destructure_map(map__20914);
var src = map__20914__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20915){var e_21511 = e20915;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21511);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21511.message)].join('')));
}

var G__21512 = seq__20901;
var G__21513 = chunk__20902;
var G__21514 = count__20903;
var G__21515 = (i__20904 + (1));
seq__20901 = G__21512;
chunk__20902 = G__21513;
count__20903 = G__21514;
i__20904 = G__21515;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20901);
if(temp__5804__auto__){
var seq__20901__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20901__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20901__$1);
var G__21516 = cljs.core.chunk_rest(seq__20901__$1);
var G__21517 = c__5525__auto__;
var G__21518 = cljs.core.count(c__5525__auto__);
var G__21519 = (0);
seq__20901 = G__21516;
chunk__20902 = G__21517;
count__20903 = G__21518;
i__20904 = G__21519;
continue;
} else {
var map__20916 = cljs.core.first(seq__20901__$1);
var map__20916__$1 = cljs.core.__destructure_map(map__20916);
var src = map__20916__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20917){var e_21520 = e20917;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21520);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21520.message)].join('')));
}

var G__21521 = cljs.core.next(seq__20901__$1);
var G__21522 = null;
var G__21523 = (0);
var G__21524 = (0);
seq__20901 = G__21521;
chunk__20902 = G__21522;
count__20903 = G__21523;
i__20904 = G__21524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20934 = cljs.core.seq(js_requires);
var chunk__20935 = null;
var count__20936 = (0);
var i__20937 = (0);
while(true){
if((i__20937 < count__20936)){
var js_ns = chunk__20935.cljs$core$IIndexed$_nth$arity$2(null, i__20937);
var require_str_21526 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21526);


var G__21527 = seq__20934;
var G__21528 = chunk__20935;
var G__21529 = count__20936;
var G__21530 = (i__20937 + (1));
seq__20934 = G__21527;
chunk__20935 = G__21528;
count__20936 = G__21529;
i__20937 = G__21530;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20934);
if(temp__5804__auto__){
var seq__20934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20934__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20934__$1);
var G__21531 = cljs.core.chunk_rest(seq__20934__$1);
var G__21532 = c__5525__auto__;
var G__21533 = cljs.core.count(c__5525__auto__);
var G__21534 = (0);
seq__20934 = G__21531;
chunk__20935 = G__21532;
count__20936 = G__21533;
i__20937 = G__21534;
continue;
} else {
var js_ns = cljs.core.first(seq__20934__$1);
var require_str_21535 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21535);


var G__21536 = cljs.core.next(seq__20934__$1);
var G__21537 = null;
var G__21538 = (0);
var G__21539 = (0);
seq__20934 = G__21536;
chunk__20935 = G__21537;
count__20936 = G__21538;
i__20937 = G__21539;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20961){
var map__20965 = p__20961;
var map__20965__$1 = cljs.core.__destructure_map(map__20965);
var msg = map__20965__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20965__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20965__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20967(s__20968){
return (new cljs.core.LazySeq(null,(function (){
var s__20968__$1 = s__20968;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20968__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20981 = cljs.core.first(xs__6360__auto__);
var map__20981__$1 = cljs.core.__destructure_map(map__20981);
var src = map__20981__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20968__$1,map__20981,map__20981__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20965,map__20965__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20967_$_iter__20969(s__20970){
return (new cljs.core.LazySeq(null,((function (s__20968__$1,map__20981,map__20981__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20965,map__20965__$1,msg,info,reload_info){
return (function (){
var s__20970__$1 = s__20970;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20970__$1);
if(temp__5804__auto____$1){
var s__20970__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20970__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20970__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20972 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20971 = (0);
while(true){
if((i__20971 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20971);
cljs.core.chunk_append(b__20972,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21540 = (i__20971 + (1));
i__20971 = G__21540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20972),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20967_$_iter__20969(cljs.core.chunk_rest(s__20970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20972),null);
}
} else {
var warning = cljs.core.first(s__20970__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20967_$_iter__20969(cljs.core.rest(s__20970__$2)));
}
} else {
return null;
}
break;
}
});})(s__20968__$1,map__20981,map__20981__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20965,map__20965__$1,msg,info,reload_info))
,null,null));
});})(s__20968__$1,map__20981,map__20981__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20965,map__20965__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20967(cljs.core.rest(s__20968__$1)));
} else {
var G__21541 = cljs.core.rest(s__20968__$1);
s__20968__$1 = G__21541;
continue;
}
} else {
var G__21542 = cljs.core.rest(s__20968__$1);
s__20968__$1 = G__21542;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21007_21543 = cljs.core.seq(warnings);
var chunk__21008_21544 = null;
var count__21009_21545 = (0);
var i__21010_21546 = (0);
while(true){
if((i__21010_21546 < count__21009_21545)){
var map__21028_21547 = chunk__21008_21544.cljs$core$IIndexed$_nth$arity$2(null, i__21010_21546);
var map__21028_21548__$1 = cljs.core.__destructure_map(map__21028_21547);
var w_21549 = map__21028_21548__$1;
var msg_21550__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028_21548__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028_21548__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028_21548__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21028_21548__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21553)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21551),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21552),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21550__$1)].join(''));


var G__21554 = seq__21007_21543;
var G__21555 = chunk__21008_21544;
var G__21556 = count__21009_21545;
var G__21557 = (i__21010_21546 + (1));
seq__21007_21543 = G__21554;
chunk__21008_21544 = G__21555;
count__21009_21545 = G__21556;
i__21010_21546 = G__21557;
continue;
} else {
var temp__5804__auto___21558 = cljs.core.seq(seq__21007_21543);
if(temp__5804__auto___21558){
var seq__21007_21559__$1 = temp__5804__auto___21558;
if(cljs.core.chunked_seq_QMARK_(seq__21007_21559__$1)){
var c__5525__auto___21560 = cljs.core.chunk_first(seq__21007_21559__$1);
var G__21561 = cljs.core.chunk_rest(seq__21007_21559__$1);
var G__21562 = c__5525__auto___21560;
var G__21563 = cljs.core.count(c__5525__auto___21560);
var G__21564 = (0);
seq__21007_21543 = G__21561;
chunk__21008_21544 = G__21562;
count__21009_21545 = G__21563;
i__21010_21546 = G__21564;
continue;
} else {
var map__21034_21565 = cljs.core.first(seq__21007_21559__$1);
var map__21034_21566__$1 = cljs.core.__destructure_map(map__21034_21565);
var w_21567 = map__21034_21566__$1;
var msg_21568__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21034_21566__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21034_21566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21034_21566__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21034_21566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21571)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21569),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21570),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21568__$1)].join(''));


var G__21572 = cljs.core.next(seq__21007_21559__$1);
var G__21573 = null;
var G__21574 = (0);
var G__21575 = (0);
seq__21007_21543 = G__21572;
chunk__21008_21544 = G__21573;
count__21009_21545 = G__21574;
i__21010_21546 = G__21575;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20960_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20960_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21064){
var map__21066 = p__21064;
var map__21066__$1 = cljs.core.__destructure_map(map__21066);
var msg = map__21066__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21066__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21066__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21069 = cljs.core.seq(updates);
var chunk__21071 = null;
var count__21072 = (0);
var i__21073 = (0);
while(true){
if((i__21073 < count__21072)){
var path = chunk__21071.cljs$core$IIndexed$_nth$arity$2(null, i__21073);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21285_21576 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21289_21577 = null;
var count__21290_21578 = (0);
var i__21291_21579 = (0);
while(true){
if((i__21291_21579 < count__21290_21578)){
var node_21580 = chunk__21289_21577.cljs$core$IIndexed$_nth$arity$2(null, i__21291_21579);
if(cljs.core.not(node_21580.shadow$old)){
var path_match_21581 = shadow.cljs.devtools.client.browser.match_paths(node_21580.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21581)){
var new_link_21582 = (function (){var G__21341 = node_21580.cloneNode(true);
G__21341.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21581),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21341;
})();
(node_21580.shadow$old = true);

(new_link_21582.onload = ((function (seq__21285_21576,chunk__21289_21577,count__21290_21578,i__21291_21579,seq__21069,chunk__21071,count__21072,i__21073,new_link_21582,path_match_21581,node_21580,path,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21343_21583 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21345_21584 = null;
var count__21346_21585 = (0);
var i__21347_21586 = (0);
while(true){
if((i__21347_21586 < count__21346_21585)){
var map__21363_21587 = chunk__21345_21584.cljs$core$IIndexed$_nth$arity$2(null, i__21347_21586);
var map__21363_21588__$1 = cljs.core.__destructure_map(map__21363_21587);
var task_21589 = map__21363_21588__$1;
var fn_str_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363_21588__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363_21588__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21592 = goog.getObjectByName(fn_str_21590,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21591)].join(''));

(fn_obj_21592.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21592.cljs$core$IFn$_invoke$arity$2(path,new_link_21582) : fn_obj_21592.call(null, path,new_link_21582));


var G__21593 = seq__21343_21583;
var G__21594 = chunk__21345_21584;
var G__21595 = count__21346_21585;
var G__21596 = (i__21347_21586 + (1));
seq__21343_21583 = G__21593;
chunk__21345_21584 = G__21594;
count__21346_21585 = G__21595;
i__21347_21586 = G__21596;
continue;
} else {
var temp__5804__auto___21597 = cljs.core.seq(seq__21343_21583);
if(temp__5804__auto___21597){
var seq__21343_21598__$1 = temp__5804__auto___21597;
if(cljs.core.chunked_seq_QMARK_(seq__21343_21598__$1)){
var c__5525__auto___21599 = cljs.core.chunk_first(seq__21343_21598__$1);
var G__21600 = cljs.core.chunk_rest(seq__21343_21598__$1);
var G__21601 = c__5525__auto___21599;
var G__21602 = cljs.core.count(c__5525__auto___21599);
var G__21603 = (0);
seq__21343_21583 = G__21600;
chunk__21345_21584 = G__21601;
count__21346_21585 = G__21602;
i__21347_21586 = G__21603;
continue;
} else {
var map__21367_21604 = cljs.core.first(seq__21343_21598__$1);
var map__21367_21605__$1 = cljs.core.__destructure_map(map__21367_21604);
var task_21606 = map__21367_21605__$1;
var fn_str_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21605__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21367_21605__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21609 = goog.getObjectByName(fn_str_21607,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21608)].join(''));

(fn_obj_21609.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21609.cljs$core$IFn$_invoke$arity$2(path,new_link_21582) : fn_obj_21609.call(null, path,new_link_21582));


var G__21610 = cljs.core.next(seq__21343_21598__$1);
var G__21611 = null;
var G__21612 = (0);
var G__21613 = (0);
seq__21343_21583 = G__21610;
chunk__21345_21584 = G__21611;
count__21346_21585 = G__21612;
i__21347_21586 = G__21613;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21580);
});})(seq__21285_21576,chunk__21289_21577,count__21290_21578,i__21291_21579,seq__21069,chunk__21071,count__21072,i__21073,new_link_21582,path_match_21581,node_21580,path,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21581], 0));

goog.dom.insertSiblingAfter(new_link_21582,node_21580);


var G__21614 = seq__21285_21576;
var G__21615 = chunk__21289_21577;
var G__21616 = count__21290_21578;
var G__21617 = (i__21291_21579 + (1));
seq__21285_21576 = G__21614;
chunk__21289_21577 = G__21615;
count__21290_21578 = G__21616;
i__21291_21579 = G__21617;
continue;
} else {
var G__21618 = seq__21285_21576;
var G__21619 = chunk__21289_21577;
var G__21620 = count__21290_21578;
var G__21621 = (i__21291_21579 + (1));
seq__21285_21576 = G__21618;
chunk__21289_21577 = G__21619;
count__21290_21578 = G__21620;
i__21291_21579 = G__21621;
continue;
}
} else {
var G__21622 = seq__21285_21576;
var G__21623 = chunk__21289_21577;
var G__21624 = count__21290_21578;
var G__21625 = (i__21291_21579 + (1));
seq__21285_21576 = G__21622;
chunk__21289_21577 = G__21623;
count__21290_21578 = G__21624;
i__21291_21579 = G__21625;
continue;
}
} else {
var temp__5804__auto___21626 = cljs.core.seq(seq__21285_21576);
if(temp__5804__auto___21626){
var seq__21285_21627__$1 = temp__5804__auto___21626;
if(cljs.core.chunked_seq_QMARK_(seq__21285_21627__$1)){
var c__5525__auto___21628 = cljs.core.chunk_first(seq__21285_21627__$1);
var G__21629 = cljs.core.chunk_rest(seq__21285_21627__$1);
var G__21630 = c__5525__auto___21628;
var G__21631 = cljs.core.count(c__5525__auto___21628);
var G__21632 = (0);
seq__21285_21576 = G__21629;
chunk__21289_21577 = G__21630;
count__21290_21578 = G__21631;
i__21291_21579 = G__21632;
continue;
} else {
var node_21633 = cljs.core.first(seq__21285_21627__$1);
if(cljs.core.not(node_21633.shadow$old)){
var path_match_21634 = shadow.cljs.devtools.client.browser.match_paths(node_21633.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21634)){
var new_link_21635 = (function (){var G__21371 = node_21633.cloneNode(true);
G__21371.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21634),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21371;
})();
(node_21633.shadow$old = true);

(new_link_21635.onload = ((function (seq__21285_21576,chunk__21289_21577,count__21290_21578,i__21291_21579,seq__21069,chunk__21071,count__21072,i__21073,new_link_21635,path_match_21634,node_21633,seq__21285_21627__$1,temp__5804__auto___21626,path,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21373_21636 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21375_21637 = null;
var count__21376_21638 = (0);
var i__21377_21639 = (0);
while(true){
if((i__21377_21639 < count__21376_21638)){
var map__21385_21640 = chunk__21375_21637.cljs$core$IIndexed$_nth$arity$2(null, i__21377_21639);
var map__21385_21641__$1 = cljs.core.__destructure_map(map__21385_21640);
var task_21642 = map__21385_21641__$1;
var fn_str_21643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21641__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21385_21641__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21645 = goog.getObjectByName(fn_str_21643,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21644)].join(''));

(fn_obj_21645.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21645.cljs$core$IFn$_invoke$arity$2(path,new_link_21635) : fn_obj_21645.call(null, path,new_link_21635));


var G__21646 = seq__21373_21636;
var G__21647 = chunk__21375_21637;
var G__21648 = count__21376_21638;
var G__21649 = (i__21377_21639 + (1));
seq__21373_21636 = G__21646;
chunk__21375_21637 = G__21647;
count__21376_21638 = G__21648;
i__21377_21639 = G__21649;
continue;
} else {
var temp__5804__auto___21650__$1 = cljs.core.seq(seq__21373_21636);
if(temp__5804__auto___21650__$1){
var seq__21373_21651__$1 = temp__5804__auto___21650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21373_21651__$1)){
var c__5525__auto___21652 = cljs.core.chunk_first(seq__21373_21651__$1);
var G__21653 = cljs.core.chunk_rest(seq__21373_21651__$1);
var G__21654 = c__5525__auto___21652;
var G__21655 = cljs.core.count(c__5525__auto___21652);
var G__21656 = (0);
seq__21373_21636 = G__21653;
chunk__21375_21637 = G__21654;
count__21376_21638 = G__21655;
i__21377_21639 = G__21656;
continue;
} else {
var map__21386_21657 = cljs.core.first(seq__21373_21651__$1);
var map__21386_21658__$1 = cljs.core.__destructure_map(map__21386_21657);
var task_21659 = map__21386_21658__$1;
var fn_str_21660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21658__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21386_21658__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21662 = goog.getObjectByName(fn_str_21660,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21661)].join(''));

(fn_obj_21662.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21662.cljs$core$IFn$_invoke$arity$2(path,new_link_21635) : fn_obj_21662.call(null, path,new_link_21635));


var G__21663 = cljs.core.next(seq__21373_21651__$1);
var G__21664 = null;
var G__21665 = (0);
var G__21666 = (0);
seq__21373_21636 = G__21663;
chunk__21375_21637 = G__21664;
count__21376_21638 = G__21665;
i__21377_21639 = G__21666;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21633);
});})(seq__21285_21576,chunk__21289_21577,count__21290_21578,i__21291_21579,seq__21069,chunk__21071,count__21072,i__21073,new_link_21635,path_match_21634,node_21633,seq__21285_21627__$1,temp__5804__auto___21626,path,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21634], 0));

goog.dom.insertSiblingAfter(new_link_21635,node_21633);


var G__21667 = cljs.core.next(seq__21285_21627__$1);
var G__21668 = null;
var G__21669 = (0);
var G__21670 = (0);
seq__21285_21576 = G__21667;
chunk__21289_21577 = G__21668;
count__21290_21578 = G__21669;
i__21291_21579 = G__21670;
continue;
} else {
var G__21671 = cljs.core.next(seq__21285_21627__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21285_21576 = G__21671;
chunk__21289_21577 = G__21672;
count__21290_21578 = G__21673;
i__21291_21579 = G__21674;
continue;
}
} else {
var G__21675 = cljs.core.next(seq__21285_21627__$1);
var G__21676 = null;
var G__21677 = (0);
var G__21678 = (0);
seq__21285_21576 = G__21675;
chunk__21289_21577 = G__21676;
count__21290_21578 = G__21677;
i__21291_21579 = G__21678;
continue;
}
}
} else {
}
}
break;
}


var G__21679 = seq__21069;
var G__21680 = chunk__21071;
var G__21681 = count__21072;
var G__21682 = (i__21073 + (1));
seq__21069 = G__21679;
chunk__21071 = G__21680;
count__21072 = G__21681;
i__21073 = G__21682;
continue;
} else {
var G__21683 = seq__21069;
var G__21684 = chunk__21071;
var G__21685 = count__21072;
var G__21686 = (i__21073 + (1));
seq__21069 = G__21683;
chunk__21071 = G__21684;
count__21072 = G__21685;
i__21073 = G__21686;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21069);
if(temp__5804__auto__){
var seq__21069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21069__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21069__$1);
var G__21687 = cljs.core.chunk_rest(seq__21069__$1);
var G__21688 = c__5525__auto__;
var G__21689 = cljs.core.count(c__5525__auto__);
var G__21690 = (0);
seq__21069 = G__21687;
chunk__21071 = G__21688;
count__21072 = G__21689;
i__21073 = G__21690;
continue;
} else {
var path = cljs.core.first(seq__21069__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21389_21691 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21393_21692 = null;
var count__21394_21693 = (0);
var i__21395_21694 = (0);
while(true){
if((i__21395_21694 < count__21394_21693)){
var node_21695 = chunk__21393_21692.cljs$core$IIndexed$_nth$arity$2(null, i__21395_21694);
if(cljs.core.not(node_21695.shadow$old)){
var path_match_21696 = shadow.cljs.devtools.client.browser.match_paths(node_21695.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21696)){
var new_link_21697 = (function (){var G__21431 = node_21695.cloneNode(true);
G__21431.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21696),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21431;
})();
(node_21695.shadow$old = true);

(new_link_21697.onload = ((function (seq__21389_21691,chunk__21393_21692,count__21394_21693,i__21395_21694,seq__21069,chunk__21071,count__21072,i__21073,new_link_21697,path_match_21696,node_21695,path,seq__21069__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21432_21698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21434_21699 = null;
var count__21435_21700 = (0);
var i__21436_21701 = (0);
while(true){
if((i__21436_21701 < count__21435_21700)){
var map__21442_21702 = chunk__21434_21699.cljs$core$IIndexed$_nth$arity$2(null, i__21436_21701);
var map__21442_21703__$1 = cljs.core.__destructure_map(map__21442_21702);
var task_21704 = map__21442_21703__$1;
var fn_str_21705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21709 = goog.getObjectByName(fn_str_21705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21706)].join(''));

(fn_obj_21709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21709.cljs$core$IFn$_invoke$arity$2(path,new_link_21697) : fn_obj_21709.call(null, path,new_link_21697));


var G__21710 = seq__21432_21698;
var G__21711 = chunk__21434_21699;
var G__21712 = count__21435_21700;
var G__21713 = (i__21436_21701 + (1));
seq__21432_21698 = G__21710;
chunk__21434_21699 = G__21711;
count__21435_21700 = G__21712;
i__21436_21701 = G__21713;
continue;
} else {
var temp__5804__auto___21714__$1 = cljs.core.seq(seq__21432_21698);
if(temp__5804__auto___21714__$1){
var seq__21432_21715__$1 = temp__5804__auto___21714__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21432_21715__$1)){
var c__5525__auto___21716 = cljs.core.chunk_first(seq__21432_21715__$1);
var G__21717 = cljs.core.chunk_rest(seq__21432_21715__$1);
var G__21718 = c__5525__auto___21716;
var G__21719 = cljs.core.count(c__5525__auto___21716);
var G__21720 = (0);
seq__21432_21698 = G__21717;
chunk__21434_21699 = G__21718;
count__21435_21700 = G__21719;
i__21436_21701 = G__21720;
continue;
} else {
var map__21443_21721 = cljs.core.first(seq__21432_21715__$1);
var map__21443_21722__$1 = cljs.core.__destructure_map(map__21443_21721);
var task_21723 = map__21443_21722__$1;
var fn_str_21724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21443_21722__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21443_21722__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21726 = goog.getObjectByName(fn_str_21724,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21725)].join(''));

(fn_obj_21726.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21726.cljs$core$IFn$_invoke$arity$2(path,new_link_21697) : fn_obj_21726.call(null, path,new_link_21697));


var G__21727 = cljs.core.next(seq__21432_21715__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21432_21698 = G__21727;
chunk__21434_21699 = G__21728;
count__21435_21700 = G__21729;
i__21436_21701 = G__21730;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21695);
});})(seq__21389_21691,chunk__21393_21692,count__21394_21693,i__21395_21694,seq__21069,chunk__21071,count__21072,i__21073,new_link_21697,path_match_21696,node_21695,path,seq__21069__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21696], 0));

goog.dom.insertSiblingAfter(new_link_21697,node_21695);


var G__21731 = seq__21389_21691;
var G__21732 = chunk__21393_21692;
var G__21733 = count__21394_21693;
var G__21734 = (i__21395_21694 + (1));
seq__21389_21691 = G__21731;
chunk__21393_21692 = G__21732;
count__21394_21693 = G__21733;
i__21395_21694 = G__21734;
continue;
} else {
var G__21735 = seq__21389_21691;
var G__21736 = chunk__21393_21692;
var G__21737 = count__21394_21693;
var G__21738 = (i__21395_21694 + (1));
seq__21389_21691 = G__21735;
chunk__21393_21692 = G__21736;
count__21394_21693 = G__21737;
i__21395_21694 = G__21738;
continue;
}
} else {
var G__21739 = seq__21389_21691;
var G__21740 = chunk__21393_21692;
var G__21741 = count__21394_21693;
var G__21742 = (i__21395_21694 + (1));
seq__21389_21691 = G__21739;
chunk__21393_21692 = G__21740;
count__21394_21693 = G__21741;
i__21395_21694 = G__21742;
continue;
}
} else {
var temp__5804__auto___21743__$1 = cljs.core.seq(seq__21389_21691);
if(temp__5804__auto___21743__$1){
var seq__21389_21744__$1 = temp__5804__auto___21743__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21389_21744__$1)){
var c__5525__auto___21745 = cljs.core.chunk_first(seq__21389_21744__$1);
var G__21746 = cljs.core.chunk_rest(seq__21389_21744__$1);
var G__21747 = c__5525__auto___21745;
var G__21748 = cljs.core.count(c__5525__auto___21745);
var G__21749 = (0);
seq__21389_21691 = G__21746;
chunk__21393_21692 = G__21747;
count__21394_21693 = G__21748;
i__21395_21694 = G__21749;
continue;
} else {
var node_21751 = cljs.core.first(seq__21389_21744__$1);
if(cljs.core.not(node_21751.shadow$old)){
var path_match_21755 = shadow.cljs.devtools.client.browser.match_paths(node_21751.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21755)){
var new_link_21756 = (function (){var G__21444 = node_21751.cloneNode(true);
G__21444.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21755),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21444;
})();
(node_21751.shadow$old = true);

(new_link_21756.onload = ((function (seq__21389_21691,chunk__21393_21692,count__21394_21693,i__21395_21694,seq__21069,chunk__21071,count__21072,i__21073,new_link_21756,path_match_21755,node_21751,seq__21389_21744__$1,temp__5804__auto___21743__$1,path,seq__21069__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21445_21757 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21447_21758 = null;
var count__21448_21759 = (0);
var i__21449_21760 = (0);
while(true){
if((i__21449_21760 < count__21448_21759)){
var map__21453_21761 = chunk__21447_21758.cljs$core$IIndexed$_nth$arity$2(null, i__21449_21760);
var map__21453_21762__$1 = cljs.core.__destructure_map(map__21453_21761);
var task_21763 = map__21453_21762__$1;
var fn_str_21764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21453_21762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21766 = goog.getObjectByName(fn_str_21764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21765)].join(''));

(fn_obj_21766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21766.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21766.call(null, path,new_link_21756));


var G__21767 = seq__21445_21757;
var G__21768 = chunk__21447_21758;
var G__21769 = count__21448_21759;
var G__21770 = (i__21449_21760 + (1));
seq__21445_21757 = G__21767;
chunk__21447_21758 = G__21768;
count__21448_21759 = G__21769;
i__21449_21760 = G__21770;
continue;
} else {
var temp__5804__auto___21771__$2 = cljs.core.seq(seq__21445_21757);
if(temp__5804__auto___21771__$2){
var seq__21445_21772__$1 = temp__5804__auto___21771__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21445_21772__$1)){
var c__5525__auto___21773 = cljs.core.chunk_first(seq__21445_21772__$1);
var G__21774 = cljs.core.chunk_rest(seq__21445_21772__$1);
var G__21775 = c__5525__auto___21773;
var G__21776 = cljs.core.count(c__5525__auto___21773);
var G__21777 = (0);
seq__21445_21757 = G__21774;
chunk__21447_21758 = G__21775;
count__21448_21759 = G__21776;
i__21449_21760 = G__21777;
continue;
} else {
var map__21458_21778 = cljs.core.first(seq__21445_21772__$1);
var map__21458_21779__$1 = cljs.core.__destructure_map(map__21458_21778);
var task_21780 = map__21458_21779__$1;
var fn_str_21781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21458_21779__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21458_21779__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21783 = goog.getObjectByName(fn_str_21781,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21782)].join(''));

(fn_obj_21783.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21783.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21783.call(null, path,new_link_21756));


var G__21784 = cljs.core.next(seq__21445_21772__$1);
var G__21785 = null;
var G__21786 = (0);
var G__21787 = (0);
seq__21445_21757 = G__21784;
chunk__21447_21758 = G__21785;
count__21448_21759 = G__21786;
i__21449_21760 = G__21787;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21751);
});})(seq__21389_21691,chunk__21393_21692,count__21394_21693,i__21395_21694,seq__21069,chunk__21071,count__21072,i__21073,new_link_21756,path_match_21755,node_21751,seq__21389_21744__$1,temp__5804__auto___21743__$1,path,seq__21069__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21755], 0));

goog.dom.insertSiblingAfter(new_link_21756,node_21751);


var G__21788 = cljs.core.next(seq__21389_21744__$1);
var G__21789 = null;
var G__21790 = (0);
var G__21791 = (0);
seq__21389_21691 = G__21788;
chunk__21393_21692 = G__21789;
count__21394_21693 = G__21790;
i__21395_21694 = G__21791;
continue;
} else {
var G__21792 = cljs.core.next(seq__21389_21744__$1);
var G__21793 = null;
var G__21794 = (0);
var G__21795 = (0);
seq__21389_21691 = G__21792;
chunk__21393_21692 = G__21793;
count__21394_21693 = G__21794;
i__21395_21694 = G__21795;
continue;
}
} else {
var G__21796 = cljs.core.next(seq__21389_21744__$1);
var G__21797 = null;
var G__21798 = (0);
var G__21799 = (0);
seq__21389_21691 = G__21796;
chunk__21393_21692 = G__21797;
count__21394_21693 = G__21798;
i__21395_21694 = G__21799;
continue;
}
}
} else {
}
}
break;
}


var G__21800 = cljs.core.next(seq__21069__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21069 = G__21800;
chunk__21071 = G__21801;
count__21072 = G__21802;
i__21073 = G__21803;
continue;
} else {
var G__21804 = cljs.core.next(seq__21069__$1);
var G__21805 = null;
var G__21806 = (0);
var G__21807 = (0);
seq__21069 = G__21804;
chunk__21071 = G__21805;
count__21072 = G__21806;
i__21073 = G__21807;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__21470){
var map__21471 = p__21470;
var map__21471__$1 = cljs.core.__destructure_map(map__21471);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21471__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21472,done,error){
var map__21473 = p__21472;
var map__21473__$1 = cljs.core.__destructure_map(map__21473);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21473__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21474,done,error){
var map__21475 = p__21474;
var map__21475__$1 = cljs.core.__destructure_map(map__21475);
var msg = map__21475__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21476){
var map__21480 = p__21476;
var map__21480__$1 = cljs.core.__destructure_map(map__21480);
var src = map__21480__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21480__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21481 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21481) : done.call(null, G__21481));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21482){
var map__21483 = p__21482;
var map__21483__$1 = cljs.core.__destructure_map(map__21483);
var msg__$1 = map__21483__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21483__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e21491){var ex = e21491;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21494){
var map__21495 = p__21494;
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var env = map__21495__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21497){
var map__21498 = p__21497;
var map__21498__$1 = cljs.core.__destructure_map(map__21498);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21498__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21500){
var map__21503 = p__21500;
var map__21503__$1 = cljs.core.__destructure_map(map__21503);
var svc = map__21503__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21503__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
