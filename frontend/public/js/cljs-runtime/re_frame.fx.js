goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null, re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23037 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23038 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23038);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23159 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23159)){
var new_db_23160 = temp__5804__auto___23159;
var fexpr__23044_23161 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23044_23161.cljs$core$IFn$_invoke$arity$1 ? fexpr__23044_23161.cljs$core$IFn$_invoke$arity$1(new_db_23160) : fexpr__23044_23161.call(null, new_db_23160));
} else {
}

var seq__23045 = cljs.core.seq(effects_without_db);
var chunk__23046 = null;
var count__23047 = (0);
var i__23048 = (0);
while(true){
if((i__23048 < count__23047)){
var vec__23065 = chunk__23046.cljs$core$IIndexed$_nth$arity$2(null, i__23048);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23065,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23065,(1),null);
var temp__5802__auto___23162 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23162)){
var effect_fn_23163 = temp__5802__auto___23162;
(effect_fn_23163.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23163.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23163.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23164 = seq__23045;
var G__23165 = chunk__23046;
var G__23166 = count__23047;
var G__23167 = (i__23048 + (1));
seq__23045 = G__23164;
chunk__23046 = G__23165;
count__23047 = G__23166;
i__23048 = G__23167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23045);
if(temp__5804__auto__){
var seq__23045__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23045__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23045__$1);
var G__23168 = cljs.core.chunk_rest(seq__23045__$1);
var G__23169 = c__5525__auto__;
var G__23170 = cljs.core.count(c__5525__auto__);
var G__23171 = (0);
seq__23045 = G__23168;
chunk__23046 = G__23169;
count__23047 = G__23170;
i__23048 = G__23171;
continue;
} else {
var vec__23073 = cljs.core.first(seq__23045__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23073,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23073,(1),null);
var temp__5802__auto___23172 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23172)){
var effect_fn_23173 = temp__5802__auto___23172;
(effect_fn_23173.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23173.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23173.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23174 = cljs.core.next(seq__23045__$1);
var G__23175 = null;
var G__23176 = (0);
var G__23177 = (0);
seq__23045 = G__23174;
chunk__23046 = G__23175;
count__23047 = G__23176;
i__23048 = G__23177;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22644__auto___23178 = re_frame.interop.now();
var duration__22645__auto___23179 = (end__22644__auto___23178 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22645__auto___23179,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22644__auto___23178);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23037);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23180 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23180)){
var new_db_23181 = temp__5804__auto___23180;
var fexpr__23076_23182 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23076_23182.cljs$core$IFn$_invoke$arity$1 ? fexpr__23076_23182.cljs$core$IFn$_invoke$arity$1(new_db_23181) : fexpr__23076_23182.call(null, new_db_23181));
} else {
}

var seq__23077 = cljs.core.seq(effects_without_db);
var chunk__23078 = null;
var count__23079 = (0);
var i__23080 = (0);
while(true){
if((i__23080 < count__23079)){
var vec__23118 = chunk__23078.cljs$core$IIndexed$_nth$arity$2(null, i__23080);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23118,(1),null);
var temp__5802__auto___23183 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23183)){
var effect_fn_23184 = temp__5802__auto___23183;
(effect_fn_23184.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23184.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23184.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23185 = seq__23077;
var G__23186 = chunk__23078;
var G__23187 = count__23079;
var G__23188 = (i__23080 + (1));
seq__23077 = G__23185;
chunk__23078 = G__23186;
count__23079 = G__23187;
i__23080 = G__23188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23077);
if(temp__5804__auto__){
var seq__23077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23077__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23077__$1);
var G__23189 = cljs.core.chunk_rest(seq__23077__$1);
var G__23190 = c__5525__auto__;
var G__23191 = cljs.core.count(c__5525__auto__);
var G__23192 = (0);
seq__23077 = G__23189;
chunk__23078 = G__23190;
count__23079 = G__23191;
i__23080 = G__23192;
continue;
} else {
var vec__23121 = cljs.core.first(seq__23077__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(1),null);
var temp__5802__auto___23193 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23193)){
var effect_fn_23194 = temp__5802__auto___23193;
(effect_fn_23194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23194.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23195 = cljs.core.next(seq__23077__$1);
var G__23196 = null;
var G__23197 = (0);
var G__23198 = (0);
seq__23077 = G__23195;
chunk__23078 = G__23196;
count__23079 = G__23197;
i__23080 = G__23198;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23124){
var map__23125 = p__23124;
var map__23125__$1 = cljs.core.__destructure_map(map__23125);
var effect = map__23125__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23125__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23125__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23126 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23127 = null;
var count__23128 = (0);
var i__23129 = (0);
while(true){
if((i__23129 < count__23128)){
var effect = chunk__23127.cljs$core$IIndexed$_nth$arity$2(null, i__23129);
re_frame.fx.dispatch_later(effect);


var G__23199 = seq__23126;
var G__23200 = chunk__23127;
var G__23201 = count__23128;
var G__23202 = (i__23129 + (1));
seq__23126 = G__23199;
chunk__23127 = G__23200;
count__23128 = G__23201;
i__23129 = G__23202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23126);
if(temp__5804__auto__){
var seq__23126__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23126__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23126__$1);
var G__23203 = cljs.core.chunk_rest(seq__23126__$1);
var G__23204 = c__5525__auto__;
var G__23205 = cljs.core.count(c__5525__auto__);
var G__23206 = (0);
seq__23126 = G__23203;
chunk__23127 = G__23204;
count__23128 = G__23205;
i__23129 = G__23206;
continue;
} else {
var effect = cljs.core.first(seq__23126__$1);
re_frame.fx.dispatch_later(effect);


var G__23207 = cljs.core.next(seq__23126__$1);
var G__23208 = null;
var G__23209 = (0);
var G__23210 = (0);
seq__23126 = G__23207;
chunk__23127 = G__23208;
count__23128 = G__23209;
i__23129 = G__23210;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23134 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23135 = null;
var count__23136 = (0);
var i__23137 = (0);
while(true){
if((i__23137 < count__23136)){
var vec__23144 = chunk__23135.cljs$core$IIndexed$_nth$arity$2(null, i__23137);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23144,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23211)){
var effect_fn_23212 = temp__5802__auto___23211;
(effect_fn_23212.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23212.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23212.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23213 = seq__23134;
var G__23214 = chunk__23135;
var G__23215 = count__23136;
var G__23216 = (i__23137 + (1));
seq__23134 = G__23213;
chunk__23135 = G__23214;
count__23136 = G__23215;
i__23137 = G__23216;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23134);
if(temp__5804__auto__){
var seq__23134__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23134__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23134__$1);
var G__23217 = cljs.core.chunk_rest(seq__23134__$1);
var G__23218 = c__5525__auto__;
var G__23219 = cljs.core.count(c__5525__auto__);
var G__23220 = (0);
seq__23134 = G__23217;
chunk__23135 = G__23218;
count__23136 = G__23219;
i__23137 = G__23220;
continue;
} else {
var vec__23148 = cljs.core.first(seq__23134__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23148,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23221 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23221)){
var effect_fn_23222 = temp__5802__auto___23221;
(effect_fn_23222.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23222.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23222.call(null, effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23223 = cljs.core.next(seq__23134__$1);
var G__23224 = null;
var G__23225 = (0);
var G__23226 = (0);
seq__23134 = G__23223;
chunk__23135 = G__23224;
count__23136 = G__23225;
i__23137 = G__23226;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23151 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23152 = null;
var count__23153 = (0);
var i__23154 = (0);
while(true){
if((i__23154 < count__23153)){
var event = chunk__23152.cljs$core$IIndexed$_nth$arity$2(null, i__23154);
re_frame.router.dispatch(event);


var G__23227 = seq__23151;
var G__23228 = chunk__23152;
var G__23229 = count__23153;
var G__23230 = (i__23154 + (1));
seq__23151 = G__23227;
chunk__23152 = G__23228;
count__23153 = G__23229;
i__23154 = G__23230;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23151);
if(temp__5804__auto__){
var seq__23151__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23151__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23151__$1);
var G__23231 = cljs.core.chunk_rest(seq__23151__$1);
var G__23232 = c__5525__auto__;
var G__23233 = cljs.core.count(c__5525__auto__);
var G__23234 = (0);
seq__23151 = G__23231;
chunk__23152 = G__23232;
count__23153 = G__23233;
i__23154 = G__23234;
continue;
} else {
var event = cljs.core.first(seq__23151__$1);
re_frame.router.dispatch(event);


var G__23235 = cljs.core.next(seq__23151__$1);
var G__23236 = null;
var G__23237 = (0);
var G__23238 = (0);
seq__23151 = G__23235;
chunk__23152 = G__23236;
count__23153 = G__23237;
i__23154 = G__23238;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23155 = cljs.core.seq(value);
var chunk__23156 = null;
var count__23157 = (0);
var i__23158 = (0);
while(true){
if((i__23158 < count__23157)){
var event = chunk__23156.cljs$core$IIndexed$_nth$arity$2(null, i__23158);
clear_event(event);


var G__23239 = seq__23155;
var G__23240 = chunk__23156;
var G__23241 = count__23157;
var G__23242 = (i__23158 + (1));
seq__23155 = G__23239;
chunk__23156 = G__23240;
count__23157 = G__23241;
i__23158 = G__23242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23155);
if(temp__5804__auto__){
var seq__23155__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23155__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23155__$1);
var G__23243 = cljs.core.chunk_rest(seq__23155__$1);
var G__23244 = c__5525__auto__;
var G__23245 = cljs.core.count(c__5525__auto__);
var G__23246 = (0);
seq__23155 = G__23243;
chunk__23156 = G__23244;
count__23157 = G__23245;
i__23158 = G__23246;
continue;
} else {
var event = cljs.core.first(seq__23155__$1);
clear_event(event);


var G__23247 = cljs.core.next(seq__23155__$1);
var G__23248 = null;
var G__23249 = (0);
var G__23250 = (0);
seq__23155 = G__23247;
chunk__23156 = G__23248;
count__23157 = G__23249;
i__23158 = G__23250;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
