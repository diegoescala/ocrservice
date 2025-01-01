goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14667 = (function (f,blockable,meta14668){
this.f = f;
this.blockable = blockable;
this.meta14668 = meta14668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14669,meta14668__$1){
var self__ = this;
var _14669__$1 = this;
return (new cljs.core.async.t_cljs$core$async14667(self__.f,self__.blockable,meta14668__$1));
}));

(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14669){
var self__ = this;
var _14669__$1 = this;
return self__.meta14668;
}));

(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14668","meta14668",-1670892638,null)], null);
}));

(cljs.core.async.t_cljs$core$async14667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14667");

(cljs.core.async.t_cljs$core$async14667.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14667.
 */
cljs.core.async.__GT_t_cljs$core$async14667 = (function cljs$core$async$__GT_t_cljs$core$async14667(f,blockable,meta14668){
return (new cljs.core.async.t_cljs$core$async14667(f,blockable,meta14668));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14659 = arguments.length;
switch (G__14659) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14667(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14723 = arguments.length;
switch (G__14723) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14734 = arguments.length;
switch (G__14734) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14748 = arguments.length;
switch (G__14748) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18021 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18021) : fn1.call(null, val_18021));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18021) : fn1.call(null, val_18021));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14759 = arguments.length;
switch (G__14759) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18038 = n;
var x_18039 = (0);
while(true){
if((x_18039 < n__5593__auto___18038)){
(a[x_18039] = x_18039);

var G__18040 = (x_18039 + (1));
x_18039 = G__18040;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14771 = (function (flag,meta14772){
this.flag = flag;
this.meta14772 = meta14772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14773,meta14772__$1){
var self__ = this;
var _14773__$1 = this;
return (new cljs.core.async.t_cljs$core$async14771(self__.flag,meta14772__$1));
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14773){
var self__ = this;
var _14773__$1 = this;
return self__.meta14772;
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14772","meta14772",1973484857,null)], null);
}));

(cljs.core.async.t_cljs$core$async14771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14771");

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14771.
 */
cljs.core.async.__GT_t_cljs$core$async14771 = (function cljs$core$async$__GT_t_cljs$core$async14771(flag,meta14772){
return (new cljs.core.async.t_cljs$core$async14771(flag,meta14772));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14771(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14780 = (function (flag,cb,meta14781){
this.flag = flag;
this.cb = cb;
this.meta14781 = meta14781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14782,meta14781__$1){
var self__ = this;
var _14782__$1 = this;
return (new cljs.core.async.t_cljs$core$async14780(self__.flag,self__.cb,meta14781__$1));
}));

(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14782){
var self__ = this;
var _14782__$1 = this;
return self__.meta14781;
}));

(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14780.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14781","meta14781",1919391449,null)], null);
}));

(cljs.core.async.t_cljs$core$async14780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14780");

(cljs.core.async.t_cljs$core$async14780.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14780.
 */
cljs.core.async.__GT_t_cljs$core$async14780 = (function cljs$core$async$__GT_t_cljs$core$async14780(flag,cb,meta14781){
return (new cljs.core.async.t_cljs$core$async14780(flag,cb,meta14781));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14780(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14785_SHARP_){
var G__14833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14833) : fret.call(null, G__14833));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14786_SHARP_){
var G__14834 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14834) : fret.call(null, G__14834));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18071 = (i + (1));
i = G__18071;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18075 = arguments.length;
var i__5727__auto___18076 = (0);
while(true){
if((i__5727__auto___18076 < len__5726__auto___18075)){
args__5732__auto__.push((arguments[i__5727__auto___18076]));

var G__18078 = (i__5727__auto___18076 + (1));
i__5727__auto___18076 = G__18078;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14843){
var map__14844 = p__14843;
var map__14844__$1 = cljs.core.__destructure_map(map__14844);
var opts = map__14844__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14838){
var G__14839 = cljs.core.first(seq14838);
var seq14838__$1 = cljs.core.next(seq14838);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14839,seq14838__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14853 = arguments.length;
switch (G__14853) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14558__auto___18089 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15007){
var state_val_15010 = (state_15007[(1)]);
if((state_val_15010 === (7))){
var inst_14994 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15058_18092 = state_15007__$1;
(statearr_15058_18092[(2)] = inst_14994);

(statearr_15058_18092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (1))){
var state_15007__$1 = state_15007;
var statearr_15063_18093 = state_15007__$1;
(statearr_15063_18093[(2)] = null);

(statearr_15063_18093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (4))){
var inst_14967 = (state_15007[(7)]);
var inst_14967__$1 = (state_15007[(2)]);
var inst_14972 = (inst_14967__$1 == null);
var state_15007__$1 = (function (){var statearr_15070 = state_15007;
(statearr_15070[(7)] = inst_14967__$1);

return statearr_15070;
})();
if(cljs.core.truth_(inst_14972)){
var statearr_15072_18106 = state_15007__$1;
(statearr_15072_18106[(1)] = (5));

} else {
var statearr_15073_18107 = state_15007__$1;
(statearr_15073_18107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (13))){
var state_15007__$1 = state_15007;
var statearr_15080_18109 = state_15007__$1;
(statearr_15080_18109[(2)] = null);

(statearr_15080_18109[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (6))){
var inst_14967 = (state_15007[(7)]);
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15007__$1,(11),to,inst_14967);
} else {
if((state_val_15010 === (3))){
var inst_15002 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15007__$1,inst_15002);
} else {
if((state_val_15010 === (12))){
var state_15007__$1 = state_15007;
var statearr_15090_18112 = state_15007__$1;
(statearr_15090_18112[(2)] = null);

(statearr_15090_18112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (2))){
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(4),from);
} else {
if((state_val_15010 === (11))){
var inst_14982 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
if(cljs.core.truth_(inst_14982)){
var statearr_15094_18113 = state_15007__$1;
(statearr_15094_18113[(1)] = (12));

} else {
var statearr_15095_18114 = state_15007__$1;
(statearr_15095_18114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (9))){
var state_15007__$1 = state_15007;
var statearr_15099_18115 = state_15007__$1;
(statearr_15099_18115[(2)] = null);

(statearr_15099_18115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (5))){
var state_15007__$1 = state_15007;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15105_18117 = state_15007__$1;
(statearr_15105_18117[(1)] = (8));

} else {
var statearr_15108_18120 = state_15007__$1;
(statearr_15108_18120[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (14))){
var inst_14992 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15109_18121 = state_15007__$1;
(statearr_15109_18121[(2)] = inst_14992);

(statearr_15109_18121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (10))){
var inst_14979 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15110_18124 = state_15007__$1;
(statearr_15110_18124[(2)] = inst_14979);

(statearr_15110_18124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (8))){
var inst_14976 = cljs.core.async.close_BANG_(to);
var state_15007__$1 = state_15007;
var statearr_15112_18125 = state_15007__$1;
(statearr_15112_18125[(2)] = inst_14976);

(statearr_15112_18125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15115 = [null,null,null,null,null,null,null,null];
(statearr_15115[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15115[(1)] = (1));

return statearr_15115;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15007){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15007);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15116){var ex__14298__auto__ = e15116;
var statearr_15117_18142 = state_15007;
(statearr_15117_18142[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15007[(4)]))){
var statearr_15118_18143 = state_15007;
(statearr_15118_18143[(1)] = cljs.core.first((state_15007[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18144 = state_15007;
state_15007 = G__18144;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15119 = f__14559__auto__();
(statearr_15119[(6)] = c__14558__auto___18089);

return statearr_15119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15138){
var vec__15146 = p__15138;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15146,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15146,(1),null);
var job = vec__15146;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14558__auto___18148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15170){
var state_val_15171 = (state_15170[(1)]);
if((state_val_15171 === (1))){
var state_15170__$1 = state_15170;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15170__$1,(2),res,v);
} else {
if((state_val_15171 === (2))){
var inst_15166 = (state_15170[(2)]);
var inst_15167 = cljs.core.async.close_BANG_(res);
var state_15170__$1 = (function (){var statearr_15172 = state_15170;
(statearr_15172[(7)] = inst_15166);

return statearr_15172;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15170__$1,inst_15167);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_15174 = [null,null,null,null,null,null,null,null];
(statearr_15174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_15174[(1)] = (1));

return statearr_15174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_15170){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15170);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15175){var ex__14298__auto__ = e15175;
var statearr_15176_18152 = state_15170;
(statearr_15176_18152[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15170[(4)]))){
var statearr_15177_18154 = state_15170;
(statearr_15177_18154[(1)] = cljs.core.first((state_15170[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18155 = state_15170;
state_15170 = G__18155;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_15170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_15170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15178 = f__14559__auto__();
(statearr_15178[(6)] = c__14558__auto___18148);

return statearr_15178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15180){
var vec__15181 = p__15180;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15181,(1),null);
var job = vec__15181;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18157 = n;
var __18158 = (0);
while(true){
if((__18158 < n__5593__auto___18157)){
var G__15184_18159 = type;
var G__15184_18160__$1 = (((G__15184_18159 instanceof cljs.core.Keyword))?G__15184_18159.fqn:null);
switch (G__15184_18160__$1) {
case "compute":
var c__14558__auto___18162 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18158,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = ((function (__18158,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function (state_15197){
var state_val_15198 = (state_15197[(1)]);
if((state_val_15198 === (1))){
var state_15197__$1 = state_15197;
var statearr_15199_18163 = state_15197__$1;
(statearr_15199_18163[(2)] = null);

(statearr_15199_18163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (2))){
var state_15197__$1 = state_15197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15197__$1,(4),jobs);
} else {
if((state_val_15198 === (3))){
var inst_15195 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15197__$1,inst_15195);
} else {
if((state_val_15198 === (4))){
var inst_15187 = (state_15197[(2)]);
var inst_15188 = process__$1(inst_15187);
var state_15197__$1 = state_15197;
if(cljs.core.truth_(inst_15188)){
var statearr_15206_18165 = state_15197__$1;
(statearr_15206_18165[(1)] = (5));

} else {
var statearr_15207_18167 = state_15197__$1;
(statearr_15207_18167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (5))){
var state_15197__$1 = state_15197;
var statearr_15208_18168 = state_15197__$1;
(statearr_15208_18168[(2)] = null);

(statearr_15208_18168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (6))){
var state_15197__$1 = state_15197;
var statearr_15209_18172 = state_15197__$1;
(statearr_15209_18172[(2)] = null);

(statearr_15209_18172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15198 === (7))){
var inst_15193 = (state_15197[(2)]);
var state_15197__$1 = state_15197;
var statearr_15210_18173 = state_15197__$1;
(statearr_15210_18173[(2)] = inst_15193);

(statearr_15210_18173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18158,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
;
return ((function (__18158,switch__14294__auto__,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_15214 = [null,null,null,null,null,null,null];
(statearr_15214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_15214[(1)] = (1));

return statearr_15214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_15197){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15197);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15219){var ex__14298__auto__ = e15219;
var statearr_15220_18178 = state_15197;
(statearr_15220_18178[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15197[(4)]))){
var statearr_15221_18179 = state_15197;
(statearr_15221_18179[(1)] = cljs.core.first((state_15197[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18180 = state_15197;
state_15197 = G__18180;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_15197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_15197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(__18158,switch__14294__auto__,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
})();
var state__14560__auto__ = (function (){var statearr_15223 = f__14559__auto__();
(statearr_15223[(6)] = c__14558__auto___18162);

return statearr_15223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
});})(__18158,c__14558__auto___18162,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
);


break;
case "async":
var c__14558__auto___18185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18158,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = ((function (__18158,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function (state_15240){
var state_val_15241 = (state_15240[(1)]);
if((state_val_15241 === (1))){
var state_15240__$1 = state_15240;
var statearr_15251_18187 = state_15240__$1;
(statearr_15251_18187[(2)] = null);

(statearr_15251_18187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (2))){
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15240__$1,(4),jobs);
} else {
if((state_val_15241 === (3))){
var inst_15238 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15240__$1,inst_15238);
} else {
if((state_val_15241 === (4))){
var inst_15230 = (state_15240[(2)]);
var inst_15231 = async(inst_15230);
var state_15240__$1 = state_15240;
if(cljs.core.truth_(inst_15231)){
var statearr_15258_18192 = state_15240__$1;
(statearr_15258_18192[(1)] = (5));

} else {
var statearr_15259_18193 = state_15240__$1;
(statearr_15259_18193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (5))){
var state_15240__$1 = state_15240;
var statearr_15260_18194 = state_15240__$1;
(statearr_15260_18194[(2)] = null);

(statearr_15260_18194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (6))){
var state_15240__$1 = state_15240;
var statearr_15268_18195 = state_15240__$1;
(statearr_15268_18195[(2)] = null);

(statearr_15268_18195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15241 === (7))){
var inst_15236 = (state_15240[(2)]);
var state_15240__$1 = state_15240;
var statearr_15269_18202 = state_15240__$1;
(statearr_15269_18202[(2)] = inst_15236);

(statearr_15269_18202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18158,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
;
return ((function (__18158,switch__14294__auto__,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_15270 = [null,null,null,null,null,null,null];
(statearr_15270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_15270[(1)] = (1));

return statearr_15270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_15240){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15240);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15271){var ex__14298__auto__ = e15271;
var statearr_15272_18205 = state_15240;
(statearr_15272_18205[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15240[(4)]))){
var statearr_15273_18208 = state_15240;
(statearr_15273_18208[(1)] = cljs.core.first((state_15240[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18211 = state_15240;
state_15240 = G__18211;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_15240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_15240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
;})(__18158,switch__14294__auto__,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
})();
var state__14560__auto__ = (function (){var statearr_15278 = f__14559__auto__();
(statearr_15278[(6)] = c__14558__auto___18185);

return statearr_15278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
});})(__18158,c__14558__auto___18185,G__15184_18159,G__15184_18160__$1,n__5593__auto___18157,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15184_18160__$1)].join('')));

}

var G__18215 = (__18158 + (1));
__18158 = G__18215;
continue;
} else {
}
break;
}

var c__14558__auto___18217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15316){
var state_val_15317 = (state_15316[(1)]);
if((state_val_15317 === (7))){
var inst_15306 = (state_15316[(2)]);
var state_15316__$1 = state_15316;
var statearr_15327_18218 = state_15316__$1;
(statearr_15327_18218[(2)] = inst_15306);

(statearr_15327_18218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15317 === (1))){
var state_15316__$1 = state_15316;
var statearr_15330_18219 = state_15316__$1;
(statearr_15330_18219[(2)] = null);

(statearr_15330_18219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15317 === (4))){
var inst_15284 = (state_15316[(7)]);
var inst_15284__$1 = (state_15316[(2)]);
var inst_15285 = (inst_15284__$1 == null);
var state_15316__$1 = (function (){var statearr_15334 = state_15316;
(statearr_15334[(7)] = inst_15284__$1);

return statearr_15334;
})();
if(cljs.core.truth_(inst_15285)){
var statearr_15335_18225 = state_15316__$1;
(statearr_15335_18225[(1)] = (5));

} else {
var statearr_15337_18226 = state_15316__$1;
(statearr_15337_18226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15317 === (6))){
var inst_15295 = (state_15316[(8)]);
var inst_15284 = (state_15316[(7)]);
var inst_15295__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15298 = [inst_15284,inst_15295__$1];
var inst_15299 = (new cljs.core.PersistentVector(null,2,(5),inst_15297,inst_15298,null));
var state_15316__$1 = (function (){var statearr_15341 = state_15316;
(statearr_15341[(8)] = inst_15295__$1);

return statearr_15341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15316__$1,(8),jobs,inst_15299);
} else {
if((state_val_15317 === (3))){
var inst_15308 = (state_15316[(2)]);
var state_15316__$1 = state_15316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15316__$1,inst_15308);
} else {
if((state_val_15317 === (2))){
var state_15316__$1 = state_15316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15316__$1,(4),from);
} else {
if((state_val_15317 === (9))){
var inst_15303 = (state_15316[(2)]);
var state_15316__$1 = (function (){var statearr_15350 = state_15316;
(statearr_15350[(9)] = inst_15303);

return statearr_15350;
})();
var statearr_15351_18237 = state_15316__$1;
(statearr_15351_18237[(2)] = null);

(statearr_15351_18237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15317 === (5))){
var inst_15287 = cljs.core.async.close_BANG_(jobs);
var state_15316__$1 = state_15316;
var statearr_15356_18238 = state_15316__$1;
(statearr_15356_18238[(2)] = inst_15287);

(statearr_15356_18238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15317 === (8))){
var inst_15295 = (state_15316[(8)]);
var inst_15301 = (state_15316[(2)]);
var state_15316__$1 = (function (){var statearr_15357 = state_15316;
(statearr_15357[(10)] = inst_15301);

return statearr_15357;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15316__$1,(9),results,inst_15295);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_15358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_15358[(1)] = (1));

return statearr_15358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_15316){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15316);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15363){var ex__14298__auto__ = e15363;
var statearr_15365_18242 = state_15316;
(statearr_15365_18242[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15316[(4)]))){
var statearr_15366_18243 = state_15316;
(statearr_15366_18243[(1)] = cljs.core.first((state_15316[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18256 = state_15316;
state_15316 = G__18256;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_15316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_15316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15367 = f__14559__auto__();
(statearr_15367[(6)] = c__14558__auto___18217);

return statearr_15367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


var c__14558__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15406){
var state_val_15407 = (state_15406[(1)]);
if((state_val_15407 === (7))){
var inst_15401 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15411_18258 = state_15406__$1;
(statearr_15411_18258[(2)] = inst_15401);

(statearr_15411_18258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (20))){
var state_15406__$1 = state_15406;
var statearr_15412_18260 = state_15406__$1;
(statearr_15412_18260[(2)] = null);

(statearr_15412_18260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (1))){
var state_15406__$1 = state_15406;
var statearr_15414_18262 = state_15406__$1;
(statearr_15414_18262[(2)] = null);

(statearr_15414_18262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (4))){
var inst_15370 = (state_15406[(7)]);
var inst_15370__$1 = (state_15406[(2)]);
var inst_15371 = (inst_15370__$1 == null);
var state_15406__$1 = (function (){var statearr_15415 = state_15406;
(statearr_15415[(7)] = inst_15370__$1);

return statearr_15415;
})();
if(cljs.core.truth_(inst_15371)){
var statearr_15417_18271 = state_15406__$1;
(statearr_15417_18271[(1)] = (5));

} else {
var statearr_15418_18272 = state_15406__$1;
(statearr_15418_18272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (15))){
var inst_15383 = (state_15406[(8)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15406__$1,(18),to,inst_15383);
} else {
if((state_val_15407 === (21))){
var inst_15396 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15419_18274 = state_15406__$1;
(statearr_15419_18274[(2)] = inst_15396);

(statearr_15419_18274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (13))){
var inst_15398 = (state_15406[(2)]);
var state_15406__$1 = (function (){var statearr_15421 = state_15406;
(statearr_15421[(9)] = inst_15398);

return statearr_15421;
})();
var statearr_15424_18275 = state_15406__$1;
(statearr_15424_18275[(2)] = null);

(statearr_15424_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (6))){
var inst_15370 = (state_15406[(7)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15406__$1,(11),inst_15370);
} else {
if((state_val_15407 === (17))){
var inst_15391 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
if(cljs.core.truth_(inst_15391)){
var statearr_15427_18278 = state_15406__$1;
(statearr_15427_18278[(1)] = (19));

} else {
var statearr_15428_18280 = state_15406__$1;
(statearr_15428_18280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (3))){
var inst_15404 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15406__$1,inst_15404);
} else {
if((state_val_15407 === (12))){
var inst_15380 = (state_15406[(10)]);
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15406__$1,(14),inst_15380);
} else {
if((state_val_15407 === (2))){
var state_15406__$1 = state_15406;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15406__$1,(4),results);
} else {
if((state_val_15407 === (19))){
var state_15406__$1 = state_15406;
var statearr_15429_18283 = state_15406__$1;
(statearr_15429_18283[(2)] = null);

(statearr_15429_18283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (11))){
var inst_15380 = (state_15406[(2)]);
var state_15406__$1 = (function (){var statearr_15430 = state_15406;
(statearr_15430[(10)] = inst_15380);

return statearr_15430;
})();
var statearr_15431_18284 = state_15406__$1;
(statearr_15431_18284[(2)] = null);

(statearr_15431_18284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (9))){
var state_15406__$1 = state_15406;
var statearr_15432_18287 = state_15406__$1;
(statearr_15432_18287[(2)] = null);

(statearr_15432_18287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (5))){
var state_15406__$1 = state_15406;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15433_18289 = state_15406__$1;
(statearr_15433_18289[(1)] = (8));

} else {
var statearr_15434_18290 = state_15406__$1;
(statearr_15434_18290[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (14))){
var inst_15383 = (state_15406[(8)]);
var inst_15385 = (state_15406[(11)]);
var inst_15383__$1 = (state_15406[(2)]);
var inst_15384 = (inst_15383__$1 == null);
var inst_15385__$1 = cljs.core.not(inst_15384);
var state_15406__$1 = (function (){var statearr_15437 = state_15406;
(statearr_15437[(8)] = inst_15383__$1);

(statearr_15437[(11)] = inst_15385__$1);

return statearr_15437;
})();
if(inst_15385__$1){
var statearr_15438_18294 = state_15406__$1;
(statearr_15438_18294[(1)] = (15));

} else {
var statearr_15439_18295 = state_15406__$1;
(statearr_15439_18295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (16))){
var inst_15385 = (state_15406[(11)]);
var state_15406__$1 = state_15406;
var statearr_15440_18296 = state_15406__$1;
(statearr_15440_18296[(2)] = inst_15385);

(statearr_15440_18296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (10))){
var inst_15377 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15442_18300 = state_15406__$1;
(statearr_15442_18300[(2)] = inst_15377);

(statearr_15442_18300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (18))){
var inst_15388 = (state_15406[(2)]);
var state_15406__$1 = state_15406;
var statearr_15443_18304 = state_15406__$1;
(statearr_15443_18304[(2)] = inst_15388);

(statearr_15443_18304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15407 === (8))){
var inst_15374 = cljs.core.async.close_BANG_(to);
var state_15406__$1 = state_15406;
var statearr_15445_18306 = state_15406__$1;
(statearr_15445_18306[(2)] = inst_15374);

(statearr_15445_18306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_15446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__);

(statearr_15446[(1)] = (1));

return statearr_15446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1 = (function (state_15406){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15406);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15450){var ex__14298__auto__ = e15450;
var statearr_15451_18311 = state_15406;
(statearr_15451_18311[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15406[(4)]))){
var statearr_15453_18312 = state_15406;
(statearr_15453_18312[(1)] = cljs.core.first((state_15406[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18318 = state_15406;
state_15406 = G__18318;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__ = function(state_15406){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1.call(this,state_15406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15455 = f__14559__auto__();
(statearr_15455[(6)] = c__14558__auto__);

return statearr_15455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

return c__14558__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15461 = arguments.length;
switch (G__15461) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15471 = arguments.length;
switch (G__15471) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15481 = arguments.length;
switch (G__15481) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14558__auto___18337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15508){
var state_val_15509 = (state_15508[(1)]);
if((state_val_15509 === (7))){
var inst_15503 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15519_18338 = state_15508__$1;
(statearr_15519_18338[(2)] = inst_15503);

(statearr_15519_18338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (1))){
var state_15508__$1 = state_15508;
var statearr_15520_18344 = state_15508__$1;
(statearr_15520_18344[(2)] = null);

(statearr_15520_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (4))){
var inst_15484 = (state_15508[(7)]);
var inst_15484__$1 = (state_15508[(2)]);
var inst_15485 = (inst_15484__$1 == null);
var state_15508__$1 = (function (){var statearr_15522 = state_15508;
(statearr_15522[(7)] = inst_15484__$1);

return statearr_15522;
})();
if(cljs.core.truth_(inst_15485)){
var statearr_15523_18350 = state_15508__$1;
(statearr_15523_18350[(1)] = (5));

} else {
var statearr_15524_18351 = state_15508__$1;
(statearr_15524_18351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (13))){
var state_15508__$1 = state_15508;
var statearr_15525_18352 = state_15508__$1;
(statearr_15525_18352[(2)] = null);

(statearr_15525_18352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (6))){
var inst_15484 = (state_15508[(7)]);
var inst_15490 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15484) : p.call(null, inst_15484));
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15490)){
var statearr_15526_18355 = state_15508__$1;
(statearr_15526_18355[(1)] = (9));

} else {
var statearr_15527_18359 = state_15508__$1;
(statearr_15527_18359[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (3))){
var inst_15506 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15508__$1,inst_15506);
} else {
if((state_val_15509 === (12))){
var state_15508__$1 = state_15508;
var statearr_15530_18362 = state_15508__$1;
(statearr_15530_18362[(2)] = null);

(statearr_15530_18362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (2))){
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15508__$1,(4),ch);
} else {
if((state_val_15509 === (11))){
var inst_15484 = (state_15508[(7)]);
var inst_15494 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15508__$1,(8),inst_15494,inst_15484);
} else {
if((state_val_15509 === (9))){
var state_15508__$1 = state_15508;
var statearr_15533_18368 = state_15508__$1;
(statearr_15533_18368[(2)] = tc);

(statearr_15533_18368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (5))){
var inst_15487 = cljs.core.async.close_BANG_(tc);
var inst_15488 = cljs.core.async.close_BANG_(fc);
var state_15508__$1 = (function (){var statearr_15539 = state_15508;
(statearr_15539[(8)] = inst_15487);

return statearr_15539;
})();
var statearr_15540_18374 = state_15508__$1;
(statearr_15540_18374[(2)] = inst_15488);

(statearr_15540_18374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (14))){
var inst_15501 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15543_18380 = state_15508__$1;
(statearr_15543_18380[(2)] = inst_15501);

(statearr_15543_18380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (10))){
var state_15508__$1 = state_15508;
var statearr_15544_18381 = state_15508__$1;
(statearr_15544_18381[(2)] = fc);

(statearr_15544_18381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (8))){
var inst_15496 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15496)){
var statearr_15545_18386 = state_15508__$1;
(statearr_15545_18386[(1)] = (12));

} else {
var statearr_15547_18391 = state_15508__$1;
(statearr_15547_18391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15549 = [null,null,null,null,null,null,null,null,null];
(statearr_15549[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15549[(1)] = (1));

return statearr_15549;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15508){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15508);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15552){var ex__14298__auto__ = e15552;
var statearr_15553_18403 = state_15508;
(statearr_15553_18403[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15508[(4)]))){
var statearr_15556_18404 = state_15508;
(statearr_15556_18404[(1)] = cljs.core.first((state_15508[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18405 = state_15508;
state_15508 = G__18405;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15557 = f__14559__auto__();
(statearr_15557[(6)] = c__14558__auto___18337);

return statearr_15557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14558__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15585){
var state_val_15587 = (state_15585[(1)]);
if((state_val_15587 === (7))){
var inst_15581 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
var statearr_15591_18416 = state_15585__$1;
(statearr_15591_18416[(2)] = inst_15581);

(statearr_15591_18416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (1))){
var inst_15563 = init;
var inst_15564 = inst_15563;
var state_15585__$1 = (function (){var statearr_15592 = state_15585;
(statearr_15592[(7)] = inst_15564);

return statearr_15592;
})();
var statearr_15593_18420 = state_15585__$1;
(statearr_15593_18420[(2)] = null);

(statearr_15593_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (4))){
var inst_15567 = (state_15585[(8)]);
var inst_15567__$1 = (state_15585[(2)]);
var inst_15568 = (inst_15567__$1 == null);
var state_15585__$1 = (function (){var statearr_15596 = state_15585;
(statearr_15596[(8)] = inst_15567__$1);

return statearr_15596;
})();
if(cljs.core.truth_(inst_15568)){
var statearr_15597_18424 = state_15585__$1;
(statearr_15597_18424[(1)] = (5));

} else {
var statearr_15599_18425 = state_15585__$1;
(statearr_15599_18425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (6))){
var inst_15567 = (state_15585[(8)]);
var inst_15571 = (state_15585[(9)]);
var inst_15564 = (state_15585[(7)]);
var inst_15571__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15564,inst_15567) : f.call(null, inst_15564,inst_15567));
var inst_15572 = cljs.core.reduced_QMARK_(inst_15571__$1);
var state_15585__$1 = (function (){var statearr_15603 = state_15585;
(statearr_15603[(9)] = inst_15571__$1);

return statearr_15603;
})();
if(inst_15572){
var statearr_15604_18426 = state_15585__$1;
(statearr_15604_18426[(1)] = (8));

} else {
var statearr_15605_18427 = state_15585__$1;
(statearr_15605_18427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (3))){
var inst_15583 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15585__$1,inst_15583);
} else {
if((state_val_15587 === (2))){
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15585__$1,(4),ch);
} else {
if((state_val_15587 === (9))){
var inst_15571 = (state_15585[(9)]);
var inst_15564 = inst_15571;
var state_15585__$1 = (function (){var statearr_15608 = state_15585;
(statearr_15608[(7)] = inst_15564);

return statearr_15608;
})();
var statearr_15612_18433 = state_15585__$1;
(statearr_15612_18433[(2)] = null);

(statearr_15612_18433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (5))){
var inst_15564 = (state_15585[(7)]);
var state_15585__$1 = state_15585;
var statearr_15613_18437 = state_15585__$1;
(statearr_15613_18437[(2)] = inst_15564);

(statearr_15613_18437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (10))){
var inst_15579 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
var statearr_15615_18438 = state_15585__$1;
(statearr_15615_18438[(2)] = inst_15579);

(statearr_15615_18438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15587 === (8))){
var inst_15571 = (state_15585[(9)]);
var inst_15575 = cljs.core.deref(inst_15571);
var state_15585__$1 = state_15585;
var statearr_15616_18439 = state_15585__$1;
(statearr_15616_18439[(2)] = inst_15575);

(statearr_15616_18439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14295__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14295__auto____0 = (function (){
var statearr_15621 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15621[(0)] = cljs$core$async$reduce_$_state_machine__14295__auto__);

(statearr_15621[(1)] = (1));

return statearr_15621;
});
var cljs$core$async$reduce_$_state_machine__14295__auto____1 = (function (state_15585){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15585);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15622){var ex__14298__auto__ = e15622;
var statearr_15624_18442 = state_15585;
(statearr_15624_18442[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15585[(4)]))){
var statearr_15625_18446 = state_15585;
(statearr_15625_18446[(1)] = cljs.core.first((state_15585[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18447 = state_15585;
state_15585 = G__18447;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14295__auto__ = function(state_15585){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14295__auto____1.call(this,state_15585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14295__auto____0;
cljs$core$async$reduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14295__auto____1;
return cljs$core$async$reduce_$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15627 = f__14559__auto__();
(statearr_15627[(6)] = c__14558__auto__);

return statearr_15627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

return c__14558__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__14558__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15638){
var state_val_15639 = (state_15638[(1)]);
if((state_val_15639 === (1))){
var inst_15633 = cljs.core.async.reduce(f__$1,init,ch);
var state_15638__$1 = state_15638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15638__$1,(2),inst_15633);
} else {
if((state_val_15639 === (2))){
var inst_15635 = (state_15638[(2)]);
var inst_15636 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15635) : f__$1.call(null, inst_15635));
var state_15638__$1 = state_15638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15638__$1,inst_15636);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14295__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14295__auto____0 = (function (){
var statearr_15648 = [null,null,null,null,null,null,null];
(statearr_15648[(0)] = cljs$core$async$transduce_$_state_machine__14295__auto__);

(statearr_15648[(1)] = (1));

return statearr_15648;
});
var cljs$core$async$transduce_$_state_machine__14295__auto____1 = (function (state_15638){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15638);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15652){var ex__14298__auto__ = e15652;
var statearr_15653_18448 = state_15638;
(statearr_15653_18448[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15638[(4)]))){
var statearr_15654_18453 = state_15638;
(statearr_15654_18453[(1)] = cljs.core.first((state_15638[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18462 = state_15638;
state_15638 = G__18462;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14295__auto__ = function(state_15638){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14295__auto____1.call(this,state_15638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14295__auto____0;
cljs$core$async$transduce_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14295__auto____1;
return cljs$core$async$transduce_$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15658 = f__14559__auto__();
(statearr_15658[(6)] = c__14558__auto__);

return statearr_15658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

return c__14558__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15661 = arguments.length;
switch (G__15661) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14558__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15692){
var state_val_15693 = (state_15692[(1)]);
if((state_val_15693 === (7))){
var inst_15673 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15697_18468 = state_15692__$1;
(statearr_15697_18468[(2)] = inst_15673);

(statearr_15697_18468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (1))){
var inst_15667 = cljs.core.seq(coll);
var inst_15668 = inst_15667;
var state_15692__$1 = (function (){var statearr_15698 = state_15692;
(statearr_15698[(7)] = inst_15668);

return statearr_15698;
})();
var statearr_15699_18470 = state_15692__$1;
(statearr_15699_18470[(2)] = null);

(statearr_15699_18470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (4))){
var inst_15668 = (state_15692[(7)]);
var inst_15671 = cljs.core.first(inst_15668);
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15692__$1,(7),ch,inst_15671);
} else {
if((state_val_15693 === (13))){
var inst_15685 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15705_18473 = state_15692__$1;
(statearr_15705_18473[(2)] = inst_15685);

(statearr_15705_18473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (6))){
var inst_15676 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
if(cljs.core.truth_(inst_15676)){
var statearr_15707_18475 = state_15692__$1;
(statearr_15707_18475[(1)] = (8));

} else {
var statearr_15708_18476 = state_15692__$1;
(statearr_15708_18476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (3))){
var inst_15689 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15692__$1,inst_15689);
} else {
if((state_val_15693 === (12))){
var state_15692__$1 = state_15692;
var statearr_15710_18479 = state_15692__$1;
(statearr_15710_18479[(2)] = null);

(statearr_15710_18479[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (2))){
var inst_15668 = (state_15692[(7)]);
var state_15692__$1 = state_15692;
if(cljs.core.truth_(inst_15668)){
var statearr_15711_18481 = state_15692__$1;
(statearr_15711_18481[(1)] = (4));

} else {
var statearr_15712_18482 = state_15692__$1;
(statearr_15712_18482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (11))){
var inst_15682 = cljs.core.async.close_BANG_(ch);
var state_15692__$1 = state_15692;
var statearr_15715_18486 = state_15692__$1;
(statearr_15715_18486[(2)] = inst_15682);

(statearr_15715_18486[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (9))){
var state_15692__$1 = state_15692;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15717_18489 = state_15692__$1;
(statearr_15717_18489[(1)] = (11));

} else {
var statearr_15718_18490 = state_15692__$1;
(statearr_15718_18490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (5))){
var inst_15668 = (state_15692[(7)]);
var state_15692__$1 = state_15692;
var statearr_15719_18492 = state_15692__$1;
(statearr_15719_18492[(2)] = inst_15668);

(statearr_15719_18492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (10))){
var inst_15687 = (state_15692[(2)]);
var state_15692__$1 = state_15692;
var statearr_15724_18493 = state_15692__$1;
(statearr_15724_18493[(2)] = inst_15687);

(statearr_15724_18493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15693 === (8))){
var inst_15668 = (state_15692[(7)]);
var inst_15678 = cljs.core.next(inst_15668);
var inst_15668__$1 = inst_15678;
var state_15692__$1 = (function (){var statearr_15726 = state_15692;
(statearr_15726[(7)] = inst_15668__$1);

return statearr_15726;
})();
var statearr_15727_18496 = state_15692__$1;
(statearr_15727_18496[(2)] = null);

(statearr_15727_18496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_15692){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15692);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e15731){var ex__14298__auto__ = e15731;
var statearr_15732_18507 = state_15692;
(statearr_15732_18507[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15692[(4)]))){
var statearr_15733_18508 = state_15692;
(statearr_15733_18508[(1)] = cljs.core.first((state_15692[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18509 = state_15692;
state_15692 = G__18509;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_15692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_15692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_15736 = f__14559__auto__();
(statearr_15736[(6)] = c__14558__auto__);

return statearr_15736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

return c__14558__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15747 = arguments.length;
switch (G__15747) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18515 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18515(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18522 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18522(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18559 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18559(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18563 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18563(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15780 = (function (ch,cs,meta15781){
this.ch = ch;
this.cs = cs;
this.meta15781 = meta15781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15782,meta15781__$1){
var self__ = this;
var _15782__$1 = this;
return (new cljs.core.async.t_cljs$core$async15780(self__.ch,self__.cs,meta15781__$1));
}));

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15782){
var self__ = this;
var _15782__$1 = this;
return self__.meta15781;
}));

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15780.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15781","meta15781",-1899912916,null)], null);
}));

(cljs.core.async.t_cljs$core$async15780.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15780");

(cljs.core.async.t_cljs$core$async15780.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15780");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15780.
 */
cljs.core.async.__GT_t_cljs$core$async15780 = (function cljs$core$async$__GT_t_cljs$core$async15780(ch,cs,meta15781){
return (new cljs.core.async.t_cljs$core$async15780(ch,cs,meta15781));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15780(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14558__auto___18585 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_15945){
var state_val_15946 = (state_15945[(1)]);
if((state_val_15946 === (7))){
var inst_15939 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15949_18586 = state_15945__$1;
(statearr_15949_18586[(2)] = inst_15939);

(statearr_15949_18586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (20))){
var inst_15833 = (state_15945[(7)]);
var inst_15846 = cljs.core.first(inst_15833);
var inst_15848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15846,(0),null);
var inst_15849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15846,(1),null);
var state_15945__$1 = (function (){var statearr_15955 = state_15945;
(statearr_15955[(8)] = inst_15848);

return statearr_15955;
})();
if(cljs.core.truth_(inst_15849)){
var statearr_15956_18592 = state_15945__$1;
(statearr_15956_18592[(1)] = (22));

} else {
var statearr_15957_18593 = state_15945__$1;
(statearr_15957_18593[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (27))){
var inst_15795 = (state_15945[(9)]);
var inst_15888 = (state_15945[(10)]);
var inst_15882 = (state_15945[(11)]);
var inst_15880 = (state_15945[(12)]);
var inst_15888__$1 = cljs.core._nth(inst_15880,inst_15882);
var inst_15889 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15888__$1,inst_15795,done);
var state_15945__$1 = (function (){var statearr_15962 = state_15945;
(statearr_15962[(10)] = inst_15888__$1);

return statearr_15962;
})();
if(cljs.core.truth_(inst_15889)){
var statearr_15963_18595 = state_15945__$1;
(statearr_15963_18595[(1)] = (30));

} else {
var statearr_15964_18596 = state_15945__$1;
(statearr_15964_18596[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (1))){
var state_15945__$1 = state_15945;
var statearr_15965_18597 = state_15945__$1;
(statearr_15965_18597[(2)] = null);

(statearr_15965_18597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (24))){
var inst_15833 = (state_15945[(7)]);
var inst_15855 = (state_15945[(2)]);
var inst_15857 = cljs.core.next(inst_15833);
var inst_15805 = inst_15857;
var inst_15806 = null;
var inst_15807 = (0);
var inst_15808 = (0);
var state_15945__$1 = (function (){var statearr_15967 = state_15945;
(statearr_15967[(13)] = inst_15806);

(statearr_15967[(14)] = inst_15807);

(statearr_15967[(15)] = inst_15855);

(statearr_15967[(16)] = inst_15808);

(statearr_15967[(17)] = inst_15805);

return statearr_15967;
})();
var statearr_15969_18598 = state_15945__$1;
(statearr_15969_18598[(2)] = null);

(statearr_15969_18598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (39))){
var state_15945__$1 = state_15945;
var statearr_15973_18599 = state_15945__$1;
(statearr_15973_18599[(2)] = null);

(statearr_15973_18599[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (4))){
var inst_15795 = (state_15945[(9)]);
var inst_15795__$1 = (state_15945[(2)]);
var inst_15796 = (inst_15795__$1 == null);
var state_15945__$1 = (function (){var statearr_15974 = state_15945;
(statearr_15974[(9)] = inst_15795__$1);

return statearr_15974;
})();
if(cljs.core.truth_(inst_15796)){
var statearr_15975_18601 = state_15945__$1;
(statearr_15975_18601[(1)] = (5));

} else {
var statearr_15977_18602 = state_15945__$1;
(statearr_15977_18602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (15))){
var inst_15806 = (state_15945[(13)]);
var inst_15807 = (state_15945[(14)]);
var inst_15808 = (state_15945[(16)]);
var inst_15805 = (state_15945[(17)]);
var inst_15827 = (state_15945[(2)]);
var inst_15828 = (inst_15808 + (1));
var tmp15970 = inst_15806;
var tmp15971 = inst_15807;
var tmp15972 = inst_15805;
var inst_15805__$1 = tmp15972;
var inst_15806__$1 = tmp15970;
var inst_15807__$1 = tmp15971;
var inst_15808__$1 = inst_15828;
var state_15945__$1 = (function (){var statearr_15980 = state_15945;
(statearr_15980[(13)] = inst_15806__$1);

(statearr_15980[(14)] = inst_15807__$1);

(statearr_15980[(18)] = inst_15827);

(statearr_15980[(16)] = inst_15808__$1);

(statearr_15980[(17)] = inst_15805__$1);

return statearr_15980;
})();
var statearr_15985_18603 = state_15945__$1;
(statearr_15985_18603[(2)] = null);

(statearr_15985_18603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (21))){
var inst_15860 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_15989_18608 = state_15945__$1;
(statearr_15989_18608[(2)] = inst_15860);

(statearr_15989_18608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (31))){
var inst_15888 = (state_15945[(10)]);
var inst_15892 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15888);
var state_15945__$1 = state_15945;
var statearr_15990_18613 = state_15945__$1;
(statearr_15990_18613[(2)] = inst_15892);

(statearr_15990_18613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (32))){
var inst_15881 = (state_15945[(19)]);
var inst_15882 = (state_15945[(11)]);
var inst_15880 = (state_15945[(12)]);
var inst_15879 = (state_15945[(20)]);
var inst_15894 = (state_15945[(2)]);
var inst_15895 = (inst_15882 + (1));
var tmp15986 = inst_15881;
var tmp15987 = inst_15880;
var tmp15988 = inst_15879;
var inst_15879__$1 = tmp15988;
var inst_15880__$1 = tmp15987;
var inst_15881__$1 = tmp15986;
var inst_15882__$1 = inst_15895;
var state_15945__$1 = (function (){var statearr_15992 = state_15945;
(statearr_15992[(19)] = inst_15881__$1);

(statearr_15992[(11)] = inst_15882__$1);

(statearr_15992[(21)] = inst_15894);

(statearr_15992[(12)] = inst_15880__$1);

(statearr_15992[(20)] = inst_15879__$1);

return statearr_15992;
})();
var statearr_15996_18618 = state_15945__$1;
(statearr_15996_18618[(2)] = null);

(statearr_15996_18618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (40))){
var inst_15907 = (state_15945[(22)]);
var inst_15916 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_15907);
var state_15945__$1 = state_15945;
var statearr_15998_18619 = state_15945__$1;
(statearr_15998_18619[(2)] = inst_15916);

(statearr_15998_18619[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (33))){
var inst_15898 = (state_15945[(23)]);
var inst_15900 = cljs.core.chunked_seq_QMARK_(inst_15898);
var state_15945__$1 = state_15945;
if(inst_15900){
var statearr_16000_18620 = state_15945__$1;
(statearr_16000_18620[(1)] = (36));

} else {
var statearr_16004_18621 = state_15945__$1;
(statearr_16004_18621[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (13))){
var inst_15821 = (state_15945[(24)]);
var inst_15824 = cljs.core.async.close_BANG_(inst_15821);
var state_15945__$1 = state_15945;
var statearr_16005_18622 = state_15945__$1;
(statearr_16005_18622[(2)] = inst_15824);

(statearr_16005_18622[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (22))){
var inst_15848 = (state_15945[(8)]);
var inst_15852 = cljs.core.async.close_BANG_(inst_15848);
var state_15945__$1 = state_15945;
var statearr_16006_18623 = state_15945__$1;
(statearr_16006_18623[(2)] = inst_15852);

(statearr_16006_18623[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (36))){
var inst_15898 = (state_15945[(23)]);
var inst_15902 = cljs.core.chunk_first(inst_15898);
var inst_15903 = cljs.core.chunk_rest(inst_15898);
var inst_15904 = cljs.core.count(inst_15902);
var inst_15879 = inst_15903;
var inst_15880 = inst_15902;
var inst_15881 = inst_15904;
var inst_15882 = (0);
var state_15945__$1 = (function (){var statearr_16008 = state_15945;
(statearr_16008[(19)] = inst_15881);

(statearr_16008[(11)] = inst_15882);

(statearr_16008[(12)] = inst_15880);

(statearr_16008[(20)] = inst_15879);

return statearr_16008;
})();
var statearr_16009_18624 = state_15945__$1;
(statearr_16009_18624[(2)] = null);

(statearr_16009_18624[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (41))){
var inst_15898 = (state_15945[(23)]);
var inst_15918 = (state_15945[(2)]);
var inst_15919 = cljs.core.next(inst_15898);
var inst_15879 = inst_15919;
var inst_15880 = null;
var inst_15881 = (0);
var inst_15882 = (0);
var state_15945__$1 = (function (){var statearr_16010 = state_15945;
(statearr_16010[(25)] = inst_15918);

(statearr_16010[(19)] = inst_15881);

(statearr_16010[(11)] = inst_15882);

(statearr_16010[(12)] = inst_15880);

(statearr_16010[(20)] = inst_15879);

return statearr_16010;
})();
var statearr_16012_18625 = state_15945__$1;
(statearr_16012_18625[(2)] = null);

(statearr_16012_18625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (43))){
var state_15945__$1 = state_15945;
var statearr_16014_18626 = state_15945__$1;
(statearr_16014_18626[(2)] = null);

(statearr_16014_18626[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (29))){
var inst_15927 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16019_18627 = state_15945__$1;
(statearr_16019_18627[(2)] = inst_15927);

(statearr_16019_18627[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (44))){
var inst_15936 = (state_15945[(2)]);
var state_15945__$1 = (function (){var statearr_16020 = state_15945;
(statearr_16020[(26)] = inst_15936);

return statearr_16020;
})();
var statearr_16021_18628 = state_15945__$1;
(statearr_16021_18628[(2)] = null);

(statearr_16021_18628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (6))){
var inst_15871 = (state_15945[(27)]);
var inst_15870 = cljs.core.deref(cs);
var inst_15871__$1 = cljs.core.keys(inst_15870);
var inst_15872 = cljs.core.count(inst_15871__$1);
var inst_15873 = cljs.core.reset_BANG_(dctr,inst_15872);
var inst_15878 = cljs.core.seq(inst_15871__$1);
var inst_15879 = inst_15878;
var inst_15880 = null;
var inst_15881 = (0);
var inst_15882 = (0);
var state_15945__$1 = (function (){var statearr_16026 = state_15945;
(statearr_16026[(28)] = inst_15873);

(statearr_16026[(19)] = inst_15881);

(statearr_16026[(11)] = inst_15882);

(statearr_16026[(12)] = inst_15880);

(statearr_16026[(20)] = inst_15879);

(statearr_16026[(27)] = inst_15871__$1);

return statearr_16026;
})();
var statearr_16028_18629 = state_15945__$1;
(statearr_16028_18629[(2)] = null);

(statearr_16028_18629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (28))){
var inst_15879 = (state_15945[(20)]);
var inst_15898 = (state_15945[(23)]);
var inst_15898__$1 = cljs.core.seq(inst_15879);
var state_15945__$1 = (function (){var statearr_16030 = state_15945;
(statearr_16030[(23)] = inst_15898__$1);

return statearr_16030;
})();
if(inst_15898__$1){
var statearr_16031_18630 = state_15945__$1;
(statearr_16031_18630[(1)] = (33));

} else {
var statearr_16032_18631 = state_15945__$1;
(statearr_16032_18631[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (25))){
var inst_15881 = (state_15945[(19)]);
var inst_15882 = (state_15945[(11)]);
var inst_15885 = (inst_15882 < inst_15881);
var inst_15886 = inst_15885;
var state_15945__$1 = state_15945;
if(cljs.core.truth_(inst_15886)){
var statearr_16034_18632 = state_15945__$1;
(statearr_16034_18632[(1)] = (27));

} else {
var statearr_16036_18633 = state_15945__$1;
(statearr_16036_18633[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (34))){
var state_15945__$1 = state_15945;
var statearr_16040_18634 = state_15945__$1;
(statearr_16040_18634[(2)] = null);

(statearr_16040_18634[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (17))){
var state_15945__$1 = state_15945;
var statearr_16045_18636 = state_15945__$1;
(statearr_16045_18636[(2)] = null);

(statearr_16045_18636[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (3))){
var inst_15942 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15945__$1,inst_15942);
} else {
if((state_val_15946 === (12))){
var inst_15866 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16048_18638 = state_15945__$1;
(statearr_16048_18638[(2)] = inst_15866);

(statearr_16048_18638[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (2))){
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15945__$1,(4),ch);
} else {
if((state_val_15946 === (23))){
var state_15945__$1 = state_15945;
var statearr_16051_18639 = state_15945__$1;
(statearr_16051_18639[(2)] = null);

(statearr_16051_18639[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (35))){
var inst_15925 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16052_18640 = state_15945__$1;
(statearr_16052_18640[(2)] = inst_15925);

(statearr_16052_18640[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (19))){
var inst_15833 = (state_15945[(7)]);
var inst_15837 = cljs.core.chunk_first(inst_15833);
var inst_15838 = cljs.core.chunk_rest(inst_15833);
var inst_15839 = cljs.core.count(inst_15837);
var inst_15805 = inst_15838;
var inst_15806 = inst_15837;
var inst_15807 = inst_15839;
var inst_15808 = (0);
var state_15945__$1 = (function (){var statearr_16055 = state_15945;
(statearr_16055[(13)] = inst_15806);

(statearr_16055[(14)] = inst_15807);

(statearr_16055[(16)] = inst_15808);

(statearr_16055[(17)] = inst_15805);

return statearr_16055;
})();
var statearr_16056_18644 = state_15945__$1;
(statearr_16056_18644[(2)] = null);

(statearr_16056_18644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (11))){
var inst_15833 = (state_15945[(7)]);
var inst_15805 = (state_15945[(17)]);
var inst_15833__$1 = cljs.core.seq(inst_15805);
var state_15945__$1 = (function (){var statearr_16057 = state_15945;
(statearr_16057[(7)] = inst_15833__$1);

return statearr_16057;
})();
if(inst_15833__$1){
var statearr_16058_18646 = state_15945__$1;
(statearr_16058_18646[(1)] = (16));

} else {
var statearr_16059_18647 = state_15945__$1;
(statearr_16059_18647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (9))){
var inst_15868 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16060_18648 = state_15945__$1;
(statearr_16060_18648[(2)] = inst_15868);

(statearr_16060_18648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (5))){
var inst_15803 = cljs.core.deref(cs);
var inst_15804 = cljs.core.seq(inst_15803);
var inst_15805 = inst_15804;
var inst_15806 = null;
var inst_15807 = (0);
var inst_15808 = (0);
var state_15945__$1 = (function (){var statearr_16062 = state_15945;
(statearr_16062[(13)] = inst_15806);

(statearr_16062[(14)] = inst_15807);

(statearr_16062[(16)] = inst_15808);

(statearr_16062[(17)] = inst_15805);

return statearr_16062;
})();
var statearr_16063_18652 = state_15945__$1;
(statearr_16063_18652[(2)] = null);

(statearr_16063_18652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (14))){
var state_15945__$1 = state_15945;
var statearr_16067_18653 = state_15945__$1;
(statearr_16067_18653[(2)] = null);

(statearr_16067_18653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (45))){
var inst_15933 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16069_18654 = state_15945__$1;
(statearr_16069_18654[(2)] = inst_15933);

(statearr_16069_18654[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (26))){
var inst_15871 = (state_15945[(27)]);
var inst_15929 = (state_15945[(2)]);
var inst_15930 = cljs.core.seq(inst_15871);
var state_15945__$1 = (function (){var statearr_16073 = state_15945;
(statearr_16073[(29)] = inst_15929);

return statearr_16073;
})();
if(inst_15930){
var statearr_16075_18655 = state_15945__$1;
(statearr_16075_18655[(1)] = (42));

} else {
var statearr_16077_18656 = state_15945__$1;
(statearr_16077_18656[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (16))){
var inst_15833 = (state_15945[(7)]);
var inst_15835 = cljs.core.chunked_seq_QMARK_(inst_15833);
var state_15945__$1 = state_15945;
if(inst_15835){
var statearr_16080_18657 = state_15945__$1;
(statearr_16080_18657[(1)] = (19));

} else {
var statearr_16081_18658 = state_15945__$1;
(statearr_16081_18658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (38))){
var inst_15922 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16082_18659 = state_15945__$1;
(statearr_16082_18659[(2)] = inst_15922);

(statearr_16082_18659[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (30))){
var state_15945__$1 = state_15945;
var statearr_16085_18660 = state_15945__$1;
(statearr_16085_18660[(2)] = null);

(statearr_16085_18660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (10))){
var inst_15806 = (state_15945[(13)]);
var inst_15808 = (state_15945[(16)]);
var inst_15820 = cljs.core._nth(inst_15806,inst_15808);
var inst_15821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15820,(0),null);
var inst_15822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15820,(1),null);
var state_15945__$1 = (function (){var statearr_16088 = state_15945;
(statearr_16088[(24)] = inst_15821);

return statearr_16088;
})();
if(cljs.core.truth_(inst_15822)){
var statearr_16089_18661 = state_15945__$1;
(statearr_16089_18661[(1)] = (13));

} else {
var statearr_16090_18662 = state_15945__$1;
(statearr_16090_18662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (18))){
var inst_15863 = (state_15945[(2)]);
var state_15945__$1 = state_15945;
var statearr_16092_18663 = state_15945__$1;
(statearr_16092_18663[(2)] = inst_15863);

(statearr_16092_18663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (42))){
var state_15945__$1 = state_15945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15945__$1,(45),dchan);
} else {
if((state_val_15946 === (37))){
var inst_15795 = (state_15945[(9)]);
var inst_15907 = (state_15945[(22)]);
var inst_15898 = (state_15945[(23)]);
var inst_15907__$1 = cljs.core.first(inst_15898);
var inst_15909 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15907__$1,inst_15795,done);
var state_15945__$1 = (function (){var statearr_16093 = state_15945;
(statearr_16093[(22)] = inst_15907__$1);

return statearr_16093;
})();
if(cljs.core.truth_(inst_15909)){
var statearr_16094_18664 = state_15945__$1;
(statearr_16094_18664[(1)] = (39));

} else {
var statearr_16095_18665 = state_15945__$1;
(statearr_16095_18665[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15946 === (8))){
var inst_15807 = (state_15945[(14)]);
var inst_15808 = (state_15945[(16)]);
var inst_15813 = (inst_15808 < inst_15807);
var inst_15814 = inst_15813;
var state_15945__$1 = state_15945;
if(cljs.core.truth_(inst_15814)){
var statearr_16100_18666 = state_15945__$1;
(statearr_16100_18666[(1)] = (10));

} else {
var statearr_16101_18667 = state_15945__$1;
(statearr_16101_18667[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14295__auto__ = null;
var cljs$core$async$mult_$_state_machine__14295__auto____0 = (function (){
var statearr_16104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16104[(0)] = cljs$core$async$mult_$_state_machine__14295__auto__);

(statearr_16104[(1)] = (1));

return statearr_16104;
});
var cljs$core$async$mult_$_state_machine__14295__auto____1 = (function (state_15945){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_15945);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16107){var ex__14298__auto__ = e16107;
var statearr_16108_18669 = state_15945;
(statearr_16108_18669[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_15945[(4)]))){
var statearr_16109_18670 = state_15945;
(statearr_16109_18670[(1)] = cljs.core.first((state_15945[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18671 = state_15945;
state_15945 = G__18671;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14295__auto__ = function(state_15945){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14295__auto____1.call(this,state_15945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14295__auto____0;
cljs$core$async$mult_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14295__auto____1;
return cljs$core$async$mult_$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_16115 = f__14559__auto__();
(statearr_16115[(6)] = c__14558__auto___18585);

return statearr_16115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16127 = arguments.length;
switch (G__16127) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18674 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18674(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18682 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18682(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18683 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18683(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18688 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18688(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18689 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18689(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18690 = arguments.length;
var i__5727__auto___18691 = (0);
while(true){
if((i__5727__auto___18691 < len__5726__auto___18690)){
args__5732__auto__.push((arguments[i__5727__auto___18691]));

var G__18692 = (i__5727__auto___18691 + (1));
i__5727__auto___18691 = G__18692;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16192){
var map__16193 = p__16192;
var map__16193__$1 = cljs.core.__destructure_map(map__16193);
var opts = map__16193__$1;
var statearr_16194_18693 = state;
(statearr_16194_18693[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16196_18694 = state;
(statearr_16196_18694[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16200_18696 = state;
(statearr_16200_18696[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16180){
var G__16181 = cljs.core.first(seq16180);
var seq16180__$1 = cljs.core.next(seq16180);
var G__16183 = cljs.core.first(seq16180__$1);
var seq16180__$2 = cljs.core.next(seq16180__$1);
var G__16184 = cljs.core.first(seq16180__$2);
var seq16180__$3 = cljs.core.next(seq16180__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16181,G__16183,G__16184,seq16180__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16226 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16227){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16227 = meta16227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16228,meta16227__$1){
var self__ = this;
var _16228__$1 = this;
return (new cljs.core.async.t_cljs$core$async16226(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16227__$1));
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16228){
var self__ = this;
var _16228__$1 = this;
return self__.meta16227;
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16226.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async16226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16227","meta16227",101194036,null)], null);
}));

(cljs.core.async.t_cljs$core$async16226.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16226");

(cljs.core.async.t_cljs$core$async16226.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16226");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16226.
 */
cljs.core.async.__GT_t_cljs$core$async16226 = (function cljs$core$async$__GT_t_cljs$core$async16226(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16227){
return (new cljs.core.async.t_cljs$core$async16226(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16227));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16226(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14558__auto___18723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_16348){
var state_val_16349 = (state_16348[(1)]);
if((state_val_16349 === (7))){
var inst_16307 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16307)){
var statearr_16353_18727 = state_16348__$1;
(statearr_16353_18727[(1)] = (8));

} else {
var statearr_16354_18729 = state_16348__$1;
(statearr_16354_18729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (20))){
var inst_16296 = (state_16348[(7)]);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16348__$1,(23),out,inst_16296);
} else {
if((state_val_16349 === (1))){
var inst_16272 = calc_state();
var inst_16273 = cljs.core.__destructure_map(inst_16272);
var inst_16274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16273,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16282 = inst_16272;
var state_16348__$1 = (function (){var statearr_16357 = state_16348;
(statearr_16357[(8)] = inst_16282);

(statearr_16357[(9)] = inst_16281);

(statearr_16357[(10)] = inst_16280);

(statearr_16357[(11)] = inst_16274);

return statearr_16357;
})();
var statearr_16360_18730 = state_16348__$1;
(statearr_16360_18730[(2)] = null);

(statearr_16360_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (24))){
var inst_16285 = (state_16348[(12)]);
var inst_16282 = inst_16285;
var state_16348__$1 = (function (){var statearr_16361 = state_16348;
(statearr_16361[(8)] = inst_16282);

return statearr_16361;
})();
var statearr_16362_18732 = state_16348__$1;
(statearr_16362_18732[(2)] = null);

(statearr_16362_18732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (4))){
var inst_16300 = (state_16348[(13)]);
var inst_16296 = (state_16348[(7)]);
var inst_16295 = (state_16348[(2)]);
var inst_16296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16295,(0),null);
var inst_16299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16295,(1),null);
var inst_16300__$1 = (inst_16296__$1 == null);
var state_16348__$1 = (function (){var statearr_16364 = state_16348;
(statearr_16364[(13)] = inst_16300__$1);

(statearr_16364[(14)] = inst_16299);

(statearr_16364[(7)] = inst_16296__$1);

return statearr_16364;
})();
if(cljs.core.truth_(inst_16300__$1)){
var statearr_16365_18737 = state_16348__$1;
(statearr_16365_18737[(1)] = (5));

} else {
var statearr_16366_18738 = state_16348__$1;
(statearr_16366_18738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (15))){
var inst_16286 = (state_16348[(15)]);
var inst_16321 = (state_16348[(16)]);
var inst_16321__$1 = cljs.core.empty_QMARK_(inst_16286);
var state_16348__$1 = (function (){var statearr_16369 = state_16348;
(statearr_16369[(16)] = inst_16321__$1);

return statearr_16369;
})();
if(inst_16321__$1){
var statearr_16370_18739 = state_16348__$1;
(statearr_16370_18739[(1)] = (17));

} else {
var statearr_16372_18742 = state_16348__$1;
(statearr_16372_18742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (21))){
var inst_16285 = (state_16348[(12)]);
var inst_16282 = inst_16285;
var state_16348__$1 = (function (){var statearr_16375 = state_16348;
(statearr_16375[(8)] = inst_16282);

return statearr_16375;
})();
var statearr_16376_18743 = state_16348__$1;
(statearr_16376_18743[(2)] = null);

(statearr_16376_18743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (13))){
var inst_16314 = (state_16348[(2)]);
var inst_16315 = calc_state();
var inst_16282 = inst_16315;
var state_16348__$1 = (function (){var statearr_16378 = state_16348;
(statearr_16378[(8)] = inst_16282);

(statearr_16378[(17)] = inst_16314);

return statearr_16378;
})();
var statearr_16380_18744 = state_16348__$1;
(statearr_16380_18744[(2)] = null);

(statearr_16380_18744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (22))){
var inst_16342 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16382_18748 = state_16348__$1;
(statearr_16382_18748[(2)] = inst_16342);

(statearr_16382_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (6))){
var inst_16299 = (state_16348[(14)]);
var inst_16305 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16299,change);
var state_16348__$1 = state_16348;
var statearr_16383_18749 = state_16348__$1;
(statearr_16383_18749[(2)] = inst_16305);

(statearr_16383_18749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (25))){
var state_16348__$1 = state_16348;
var statearr_16386_18750 = state_16348__$1;
(statearr_16386_18750[(2)] = null);

(statearr_16386_18750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (17))){
var inst_16287 = (state_16348[(18)]);
var inst_16299 = (state_16348[(14)]);
var inst_16323 = (inst_16287.cljs$core$IFn$_invoke$arity$1 ? inst_16287.cljs$core$IFn$_invoke$arity$1(inst_16299) : inst_16287.call(null, inst_16299));
var inst_16324 = cljs.core.not(inst_16323);
var state_16348__$1 = state_16348;
var statearr_16388_18751 = state_16348__$1;
(statearr_16388_18751[(2)] = inst_16324);

(statearr_16388_18751[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (3))){
var inst_16346 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16348__$1,inst_16346);
} else {
if((state_val_16349 === (12))){
var state_16348__$1 = state_16348;
var statearr_16390_18753 = state_16348__$1;
(statearr_16390_18753[(2)] = null);

(statearr_16390_18753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (2))){
var inst_16282 = (state_16348[(8)]);
var inst_16285 = (state_16348[(12)]);
var inst_16285__$1 = cljs.core.__destructure_map(inst_16282);
var inst_16286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16285__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16285__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16285__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16348__$1 = (function (){var statearr_16393 = state_16348;
(statearr_16393[(15)] = inst_16286);

(statearr_16393[(12)] = inst_16285__$1);

(statearr_16393[(18)] = inst_16287);

return statearr_16393;
})();
return cljs.core.async.ioc_alts_BANG_(state_16348__$1,(4),inst_16288);
} else {
if((state_val_16349 === (23))){
var inst_16333 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16333)){
var statearr_16395_18755 = state_16348__$1;
(statearr_16395_18755[(1)] = (24));

} else {
var statearr_16396_18756 = state_16348__$1;
(statearr_16396_18756[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (19))){
var inst_16327 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16398_18757 = state_16348__$1;
(statearr_16398_18757[(2)] = inst_16327);

(statearr_16398_18757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (11))){
var inst_16299 = (state_16348[(14)]);
var inst_16311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16299);
var state_16348__$1 = state_16348;
var statearr_16399_18759 = state_16348__$1;
(statearr_16399_18759[(2)] = inst_16311);

(statearr_16399_18759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (9))){
var inst_16286 = (state_16348[(15)]);
var inst_16318 = (state_16348[(19)]);
var inst_16299 = (state_16348[(14)]);
var inst_16318__$1 = (inst_16286.cljs$core$IFn$_invoke$arity$1 ? inst_16286.cljs$core$IFn$_invoke$arity$1(inst_16299) : inst_16286.call(null, inst_16299));
var state_16348__$1 = (function (){var statearr_16404 = state_16348;
(statearr_16404[(19)] = inst_16318__$1);

return statearr_16404;
})();
if(cljs.core.truth_(inst_16318__$1)){
var statearr_16405_18760 = state_16348__$1;
(statearr_16405_18760[(1)] = (14));

} else {
var statearr_16406_18761 = state_16348__$1;
(statearr_16406_18761[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (5))){
var inst_16300 = (state_16348[(13)]);
var state_16348__$1 = state_16348;
var statearr_16408_18762 = state_16348__$1;
(statearr_16408_18762[(2)] = inst_16300);

(statearr_16408_18762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (14))){
var inst_16318 = (state_16348[(19)]);
var state_16348__$1 = state_16348;
var statearr_16409_18764 = state_16348__$1;
(statearr_16409_18764[(2)] = inst_16318);

(statearr_16409_18764[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (26))){
var inst_16338 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16412_18770 = state_16348__$1;
(statearr_16412_18770[(2)] = inst_16338);

(statearr_16412_18770[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (16))){
var inst_16329 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16329)){
var statearr_16414_18771 = state_16348__$1;
(statearr_16414_18771[(1)] = (20));

} else {
var statearr_16415_18772 = state_16348__$1;
(statearr_16415_18772[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (10))){
var inst_16344 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16416_18773 = state_16348__$1;
(statearr_16416_18773[(2)] = inst_16344);

(statearr_16416_18773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (18))){
var inst_16321 = (state_16348[(16)]);
var state_16348__$1 = state_16348;
var statearr_16418_18777 = state_16348__$1;
(statearr_16418_18777[(2)] = inst_16321);

(statearr_16418_18777[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (8))){
var inst_16296 = (state_16348[(7)]);
var inst_16309 = (inst_16296 == null);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16309)){
var statearr_16420_18783 = state_16348__$1;
(statearr_16420_18783[(1)] = (11));

} else {
var statearr_16421_18784 = state_16348__$1;
(statearr_16421_18784[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14295__auto__ = null;
var cljs$core$async$mix_$_state_machine__14295__auto____0 = (function (){
var statearr_16425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16425[(0)] = cljs$core$async$mix_$_state_machine__14295__auto__);

(statearr_16425[(1)] = (1));

return statearr_16425;
});
var cljs$core$async$mix_$_state_machine__14295__auto____1 = (function (state_16348){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_16348);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16427){var ex__14298__auto__ = e16427;
var statearr_16429_18798 = state_16348;
(statearr_16429_18798[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_16348[(4)]))){
var statearr_16430_18806 = state_16348;
(statearr_16430_18806[(1)] = cljs.core.first((state_16348[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18808 = state_16348;
state_16348 = G__18808;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14295__auto__ = function(state_16348){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14295__auto____1.call(this,state_16348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14295__auto____0;
cljs$core$async$mix_$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14295__auto____1;
return cljs$core$async$mix_$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_16435 = f__14559__auto__();
(statearr_16435[(6)] = c__14558__auto___18723);

return statearr_16435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18830 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18830(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18836 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18836(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18841 = (function() {
var G__18842 = null;
var G__18842__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18842__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18842 = function(p,v){
switch(arguments.length){
case 1:
return G__18842__1.call(this,p);
case 2:
return G__18842__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18842.cljs$core$IFn$_invoke$arity$1 = G__18842__1;
G__18842.cljs$core$IFn$_invoke$arity$2 = G__18842__2;
return G__18842;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16493 = arguments.length;
switch (G__16493) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18841(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18841(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16532 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16533){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16533 = meta16533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16534,meta16533__$1){
var self__ = this;
var _16534__$1 = this;
return (new cljs.core.async.t_cljs$core$async16532(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16533__$1));
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16534){
var self__ = this;
var _16534__$1 = this;
return self__.meta16533;
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16532.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16532.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16533","meta16533",1471106735,null)], null);
}));

(cljs.core.async.t_cljs$core$async16532.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16532");

(cljs.core.async.t_cljs$core$async16532.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16532");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16532.
 */
cljs.core.async.__GT_t_cljs$core$async16532 = (function cljs$core$async$__GT_t_cljs$core$async16532(ch,topic_fn,buf_fn,mults,ensure_mult,meta16533){
return (new cljs.core.async.t_cljs$core$async16532(ch,topic_fn,buf_fn,mults,ensure_mult,meta16533));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16516 = arguments.length;
switch (G__16516) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16504_SHARP_){
if(cljs.core.truth_((p1__16504_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16504_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16504_SHARP_.call(null, topic)))){
return p1__16504_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16504_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16532(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14558__auto___18861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_16643){
var state_val_16644 = (state_16643[(1)]);
if((state_val_16644 === (7))){
var inst_16637 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16649_18862 = state_16643__$1;
(statearr_16649_18862[(2)] = inst_16637);

(statearr_16649_18862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (20))){
var state_16643__$1 = state_16643;
var statearr_16650_18863 = state_16643__$1;
(statearr_16650_18863[(2)] = null);

(statearr_16650_18863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (1))){
var state_16643__$1 = state_16643;
var statearr_16657_18864 = state_16643__$1;
(statearr_16657_18864[(2)] = null);

(statearr_16657_18864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (24))){
var inst_16617 = (state_16643[(7)]);
var inst_16629 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16617);
var state_16643__$1 = state_16643;
var statearr_16664_18865 = state_16643__$1;
(statearr_16664_18865[(2)] = inst_16629);

(statearr_16664_18865[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (4))){
var inst_16561 = (state_16643[(8)]);
var inst_16561__$1 = (state_16643[(2)]);
var inst_16565 = (inst_16561__$1 == null);
var state_16643__$1 = (function (){var statearr_16666 = state_16643;
(statearr_16666[(8)] = inst_16561__$1);

return statearr_16666;
})();
if(cljs.core.truth_(inst_16565)){
var statearr_16667_18866 = state_16643__$1;
(statearr_16667_18866[(1)] = (5));

} else {
var statearr_16668_18867 = state_16643__$1;
(statearr_16668_18867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (15))){
var inst_16611 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16673_18868 = state_16643__$1;
(statearr_16673_18868[(2)] = inst_16611);

(statearr_16673_18868[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (21))){
var inst_16634 = (state_16643[(2)]);
var state_16643__$1 = (function (){var statearr_16677 = state_16643;
(statearr_16677[(9)] = inst_16634);

return statearr_16677;
})();
var statearr_16678_18872 = state_16643__$1;
(statearr_16678_18872[(2)] = null);

(statearr_16678_18872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (13))){
var inst_16592 = (state_16643[(10)]);
var inst_16595 = cljs.core.chunked_seq_QMARK_(inst_16592);
var state_16643__$1 = state_16643;
if(inst_16595){
var statearr_16683_18873 = state_16643__$1;
(statearr_16683_18873[(1)] = (16));

} else {
var statearr_16684_18874 = state_16643__$1;
(statearr_16684_18874[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (22))){
var inst_16623 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
if(cljs.core.truth_(inst_16623)){
var statearr_16685_18875 = state_16643__$1;
(statearr_16685_18875[(1)] = (23));

} else {
var statearr_16688_18876 = state_16643__$1;
(statearr_16688_18876[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (6))){
var inst_16619 = (state_16643[(11)]);
var inst_16561 = (state_16643[(8)]);
var inst_16617 = (state_16643[(7)]);
var inst_16617__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16561) : topic_fn.call(null, inst_16561));
var inst_16618 = cljs.core.deref(mults);
var inst_16619__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16618,inst_16617__$1);
var state_16643__$1 = (function (){var statearr_16693 = state_16643;
(statearr_16693[(11)] = inst_16619__$1);

(statearr_16693[(7)] = inst_16617__$1);

return statearr_16693;
})();
if(cljs.core.truth_(inst_16619__$1)){
var statearr_16694_18886 = state_16643__$1;
(statearr_16694_18886[(1)] = (19));

} else {
var statearr_16695_18887 = state_16643__$1;
(statearr_16695_18887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (25))){
var inst_16631 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16696_18897 = state_16643__$1;
(statearr_16696_18897[(2)] = inst_16631);

(statearr_16696_18897[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (17))){
var inst_16592 = (state_16643[(10)]);
var inst_16602 = cljs.core.first(inst_16592);
var inst_16603 = cljs.core.async.muxch_STAR_(inst_16602);
var inst_16604 = cljs.core.async.close_BANG_(inst_16603);
var inst_16605 = cljs.core.next(inst_16592);
var inst_16575 = inst_16605;
var inst_16576 = null;
var inst_16577 = (0);
var inst_16578 = (0);
var state_16643__$1 = (function (){var statearr_16697 = state_16643;
(statearr_16697[(12)] = inst_16604);

(statearr_16697[(13)] = inst_16575);

(statearr_16697[(14)] = inst_16577);

(statearr_16697[(15)] = inst_16578);

(statearr_16697[(16)] = inst_16576);

return statearr_16697;
})();
var statearr_16698_18902 = state_16643__$1;
(statearr_16698_18902[(2)] = null);

(statearr_16698_18902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (3))){
var inst_16639 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16643__$1,inst_16639);
} else {
if((state_val_16644 === (12))){
var inst_16613 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16699_18904 = state_16643__$1;
(statearr_16699_18904[(2)] = inst_16613);

(statearr_16699_18904[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (2))){
var state_16643__$1 = state_16643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16643__$1,(4),ch);
} else {
if((state_val_16644 === (23))){
var state_16643__$1 = state_16643;
var statearr_16704_18906 = state_16643__$1;
(statearr_16704_18906[(2)] = null);

(statearr_16704_18906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (19))){
var inst_16619 = (state_16643[(11)]);
var inst_16561 = (state_16643[(8)]);
var inst_16621 = cljs.core.async.muxch_STAR_(inst_16619);
var state_16643__$1 = state_16643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16643__$1,(22),inst_16621,inst_16561);
} else {
if((state_val_16644 === (11))){
var inst_16575 = (state_16643[(13)]);
var inst_16592 = (state_16643[(10)]);
var inst_16592__$1 = cljs.core.seq(inst_16575);
var state_16643__$1 = (function (){var statearr_16705 = state_16643;
(statearr_16705[(10)] = inst_16592__$1);

return statearr_16705;
})();
if(inst_16592__$1){
var statearr_16707_18917 = state_16643__$1;
(statearr_16707_18917[(1)] = (13));

} else {
var statearr_16708_18918 = state_16643__$1;
(statearr_16708_18918[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (9))){
var inst_16615 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16709_18919 = state_16643__$1;
(statearr_16709_18919[(2)] = inst_16615);

(statearr_16709_18919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (5))){
var inst_16571 = cljs.core.deref(mults);
var inst_16572 = cljs.core.vals(inst_16571);
var inst_16573 = cljs.core.seq(inst_16572);
var inst_16575 = inst_16573;
var inst_16576 = null;
var inst_16577 = (0);
var inst_16578 = (0);
var state_16643__$1 = (function (){var statearr_16711 = state_16643;
(statearr_16711[(13)] = inst_16575);

(statearr_16711[(14)] = inst_16577);

(statearr_16711[(15)] = inst_16578);

(statearr_16711[(16)] = inst_16576);

return statearr_16711;
})();
var statearr_16712_18920 = state_16643__$1;
(statearr_16712_18920[(2)] = null);

(statearr_16712_18920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (14))){
var state_16643__$1 = state_16643;
var statearr_16716_18921 = state_16643__$1;
(statearr_16716_18921[(2)] = null);

(statearr_16716_18921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (16))){
var inst_16592 = (state_16643[(10)]);
var inst_16597 = cljs.core.chunk_first(inst_16592);
var inst_16598 = cljs.core.chunk_rest(inst_16592);
var inst_16599 = cljs.core.count(inst_16597);
var inst_16575 = inst_16598;
var inst_16576 = inst_16597;
var inst_16577 = inst_16599;
var inst_16578 = (0);
var state_16643__$1 = (function (){var statearr_16717 = state_16643;
(statearr_16717[(13)] = inst_16575);

(statearr_16717[(14)] = inst_16577);

(statearr_16717[(15)] = inst_16578);

(statearr_16717[(16)] = inst_16576);

return statearr_16717;
})();
var statearr_16718_18925 = state_16643__$1;
(statearr_16718_18925[(2)] = null);

(statearr_16718_18925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (10))){
var inst_16575 = (state_16643[(13)]);
var inst_16577 = (state_16643[(14)]);
var inst_16578 = (state_16643[(15)]);
var inst_16576 = (state_16643[(16)]);
var inst_16583 = cljs.core._nth(inst_16576,inst_16578);
var inst_16584 = cljs.core.async.muxch_STAR_(inst_16583);
var inst_16585 = cljs.core.async.close_BANG_(inst_16584);
var inst_16586 = (inst_16578 + (1));
var tmp16713 = inst_16575;
var tmp16714 = inst_16577;
var tmp16715 = inst_16576;
var inst_16575__$1 = tmp16713;
var inst_16576__$1 = tmp16715;
var inst_16577__$1 = tmp16714;
var inst_16578__$1 = inst_16586;
var state_16643__$1 = (function (){var statearr_16721 = state_16643;
(statearr_16721[(13)] = inst_16575__$1);

(statearr_16721[(14)] = inst_16577__$1);

(statearr_16721[(17)] = inst_16585);

(statearr_16721[(15)] = inst_16578__$1);

(statearr_16721[(16)] = inst_16576__$1);

return statearr_16721;
})();
var statearr_16722_18930 = state_16643__$1;
(statearr_16722_18930[(2)] = null);

(statearr_16722_18930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (18))){
var inst_16608 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16723_18931 = state_16643__$1;
(statearr_16723_18931[(2)] = inst_16608);

(statearr_16723_18931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (8))){
var inst_16577 = (state_16643[(14)]);
var inst_16578 = (state_16643[(15)]);
var inst_16580 = (inst_16578 < inst_16577);
var inst_16581 = inst_16580;
var state_16643__$1 = state_16643;
if(cljs.core.truth_(inst_16581)){
var statearr_16724_18932 = state_16643__$1;
(statearr_16724_18932[(1)] = (10));

} else {
var statearr_16725_18933 = state_16643__$1;
(statearr_16725_18933[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_16726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16726[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_16726[(1)] = (1));

return statearr_16726;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_16643){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_16643);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16727){var ex__14298__auto__ = e16727;
var statearr_16729_18937 = state_16643;
(statearr_16729_18937[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_16643[(4)]))){
var statearr_16730_18939 = state_16643;
(statearr_16730_18939[(1)] = cljs.core.first((state_16643[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18941 = state_16643;
state_16643 = G__18941;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_16643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_16643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_16732 = f__14559__auto__();
(statearr_16732[(6)] = c__14558__auto___18861);

return statearr_16732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16737 = arguments.length;
switch (G__16737) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16747 = arguments.length;
switch (G__16747) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16750 = arguments.length;
switch (G__16750) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14558__auto___18953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_16803){
var state_val_16804 = (state_16803[(1)]);
if((state_val_16804 === (7))){
var state_16803__$1 = state_16803;
var statearr_16805_18955 = state_16803__$1;
(statearr_16805_18955[(2)] = null);

(statearr_16805_18955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (1))){
var state_16803__$1 = state_16803;
var statearr_16820_18956 = state_16803__$1;
(statearr_16820_18956[(2)] = null);

(statearr_16820_18956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (4))){
var inst_16758 = (state_16803[(7)]);
var inst_16757 = (state_16803[(8)]);
var inst_16760 = (inst_16758 < inst_16757);
var state_16803__$1 = state_16803;
if(cljs.core.truth_(inst_16760)){
var statearr_16833_18964 = state_16803__$1;
(statearr_16833_18964[(1)] = (6));

} else {
var statearr_16834_18965 = state_16803__$1;
(statearr_16834_18965[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (15))){
var inst_16787 = (state_16803[(9)]);
var inst_16793 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16787);
var state_16803__$1 = state_16803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16803__$1,(17),out,inst_16793);
} else {
if((state_val_16804 === (13))){
var inst_16787 = (state_16803[(9)]);
var inst_16787__$1 = (state_16803[(2)]);
var inst_16788 = cljs.core.some(cljs.core.nil_QMARK_,inst_16787__$1);
var state_16803__$1 = (function (){var statearr_16835 = state_16803;
(statearr_16835[(9)] = inst_16787__$1);

return statearr_16835;
})();
if(cljs.core.truth_(inst_16788)){
var statearr_16836_18967 = state_16803__$1;
(statearr_16836_18967[(1)] = (14));

} else {
var statearr_16837_18969 = state_16803__$1;
(statearr_16837_18969[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (6))){
var state_16803__$1 = state_16803;
var statearr_16838_18970 = state_16803__$1;
(statearr_16838_18970[(2)] = null);

(statearr_16838_18970[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (17))){
var inst_16795 = (state_16803[(2)]);
var state_16803__$1 = (function (){var statearr_16850 = state_16803;
(statearr_16850[(10)] = inst_16795);

return statearr_16850;
})();
var statearr_16855_18975 = state_16803__$1;
(statearr_16855_18975[(2)] = null);

(statearr_16855_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (3))){
var inst_16801 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16803__$1,inst_16801);
} else {
if((state_val_16804 === (12))){
var _ = (function (){var statearr_16858 = state_16803;
(statearr_16858[(4)] = cljs.core.rest((state_16803[(4)])));

return statearr_16858;
})();
var state_16803__$1 = state_16803;
var ex16843 = (state_16803__$1[(2)]);
var statearr_16859_18980 = state_16803__$1;
(statearr_16859_18980[(5)] = ex16843);


if((ex16843 instanceof Object)){
var statearr_16862_18981 = state_16803__$1;
(statearr_16862_18981[(1)] = (11));

(statearr_16862_18981[(5)] = null);

} else {
throw ex16843;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (2))){
var inst_16756 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16757 = cnt;
var inst_16758 = (0);
var state_16803__$1 = (function (){var statearr_16866 = state_16803;
(statearr_16866[(7)] = inst_16758);

(statearr_16866[(8)] = inst_16757);

(statearr_16866[(11)] = inst_16756);

return statearr_16866;
})();
var statearr_16868_18988 = state_16803__$1;
(statearr_16868_18988[(2)] = null);

(statearr_16868_18988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (11))){
var inst_16766 = (state_16803[(2)]);
var inst_16767 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16803__$1 = (function (){var statearr_16874 = state_16803;
(statearr_16874[(12)] = inst_16766);

return statearr_16874;
})();
var statearr_16875_18991 = state_16803__$1;
(statearr_16875_18991[(2)] = inst_16767);

(statearr_16875_18991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (9))){
var inst_16758 = (state_16803[(7)]);
var _ = (function (){var statearr_16876 = state_16803;
(statearr_16876[(4)] = cljs.core.cons((12),(state_16803[(4)])));

return statearr_16876;
})();
var inst_16773 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16758) : chs__$1.call(null, inst_16758));
var inst_16774 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16758) : done.call(null, inst_16758));
var inst_16775 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16773,inst_16774);
var ___$1 = (function (){var statearr_16882 = state_16803;
(statearr_16882[(4)] = cljs.core.rest((state_16803[(4)])));

return statearr_16882;
})();
var state_16803__$1 = state_16803;
var statearr_16885_18994 = state_16803__$1;
(statearr_16885_18994[(2)] = inst_16775);

(statearr_16885_18994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (5))){
var inst_16785 = (state_16803[(2)]);
var state_16803__$1 = (function (){var statearr_16887 = state_16803;
(statearr_16887[(13)] = inst_16785);

return statearr_16887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16803__$1,(13),dchan);
} else {
if((state_val_16804 === (14))){
var inst_16790 = cljs.core.async.close_BANG_(out);
var state_16803__$1 = state_16803;
var statearr_16893_18997 = state_16803__$1;
(statearr_16893_18997[(2)] = inst_16790);

(statearr_16893_18997[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (16))){
var inst_16799 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16896_19000 = state_16803__$1;
(statearr_16896_19000[(2)] = inst_16799);

(statearr_16896_19000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (10))){
var inst_16758 = (state_16803[(7)]);
var inst_16778 = (state_16803[(2)]);
var inst_16779 = (inst_16758 + (1));
var inst_16758__$1 = inst_16779;
var state_16803__$1 = (function (){var statearr_16900 = state_16803;
(statearr_16900[(14)] = inst_16778);

(statearr_16900[(7)] = inst_16758__$1);

return statearr_16900;
})();
var statearr_16901_19001 = state_16803__$1;
(statearr_16901_19001[(2)] = null);

(statearr_16901_19001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16804 === (8))){
var inst_16783 = (state_16803[(2)]);
var state_16803__$1 = state_16803;
var statearr_16905_19019 = state_16803__$1;
(statearr_16905_19019[(2)] = inst_16783);

(statearr_16905_19019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_16906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16906[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_16906[(1)] = (1));

return statearr_16906;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_16803){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_16803);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e16912){var ex__14298__auto__ = e16912;
var statearr_16913_19020 = state_16803;
(statearr_16913_19020[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_16803[(4)]))){
var statearr_16918_19021 = state_16803;
(statearr_16918_19021[(1)] = cljs.core.first((state_16803[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_16803;
state_16803 = G__19022;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_16803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_16803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_16928 = f__14559__auto__();
(statearr_16928[(6)] = c__14558__auto___18953);

return statearr_16928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16953 = arguments.length;
switch (G__16953) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17014){
var state_val_17015 = (state_17014[(1)]);
if((state_val_17015 === (7))){
var inst_16988 = (state_17014[(7)]);
var inst_16987 = (state_17014[(8)]);
var inst_16987__$1 = (state_17014[(2)]);
var inst_16988__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16987__$1,(0),null);
var inst_16989 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16987__$1,(1),null);
var inst_16990 = (inst_16988__$1 == null);
var state_17014__$1 = (function (){var statearr_17022 = state_17014;
(statearr_17022[(9)] = inst_16989);

(statearr_17022[(7)] = inst_16988__$1);

(statearr_17022[(8)] = inst_16987__$1);

return statearr_17022;
})();
if(cljs.core.truth_(inst_16990)){
var statearr_17024_19038 = state_17014__$1;
(statearr_17024_19038[(1)] = (8));

} else {
var statearr_17026_19039 = state_17014__$1;
(statearr_17026_19039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (1))){
var inst_16977 = cljs.core.vec(chs);
var inst_16978 = inst_16977;
var state_17014__$1 = (function (){var statearr_17027 = state_17014;
(statearr_17027[(10)] = inst_16978);

return statearr_17027;
})();
var statearr_17028_19041 = state_17014__$1;
(statearr_17028_19041[(2)] = null);

(statearr_17028_19041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (4))){
var inst_16978 = (state_17014[(10)]);
var state_17014__$1 = state_17014;
return cljs.core.async.ioc_alts_BANG_(state_17014__$1,(7),inst_16978);
} else {
if((state_val_17015 === (6))){
var inst_17004 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17040_19047 = state_17014__$1;
(statearr_17040_19047[(2)] = inst_17004);

(statearr_17040_19047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (3))){
var inst_17006 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17014__$1,inst_17006);
} else {
if((state_val_17015 === (2))){
var inst_16978 = (state_17014[(10)]);
var inst_16980 = cljs.core.count(inst_16978);
var inst_16981 = (inst_16980 > (0));
var state_17014__$1 = state_17014;
if(cljs.core.truth_(inst_16981)){
var statearr_17044_19059 = state_17014__$1;
(statearr_17044_19059[(1)] = (4));

} else {
var statearr_17045_19060 = state_17014__$1;
(statearr_17045_19060[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (11))){
var inst_16978 = (state_17014[(10)]);
var inst_16997 = (state_17014[(2)]);
var tmp17041 = inst_16978;
var inst_16978__$1 = tmp17041;
var state_17014__$1 = (function (){var statearr_17048 = state_17014;
(statearr_17048[(10)] = inst_16978__$1);

(statearr_17048[(11)] = inst_16997);

return statearr_17048;
})();
var statearr_17049_19062 = state_17014__$1;
(statearr_17049_19062[(2)] = null);

(statearr_17049_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (9))){
var inst_16988 = (state_17014[(7)]);
var state_17014__$1 = state_17014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17014__$1,(11),out,inst_16988);
} else {
if((state_val_17015 === (5))){
var inst_17002 = cljs.core.async.close_BANG_(out);
var state_17014__$1 = state_17014;
var statearr_17053_19068 = state_17014__$1;
(statearr_17053_19068[(2)] = inst_17002);

(statearr_17053_19068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (10))){
var inst_17000 = (state_17014[(2)]);
var state_17014__$1 = state_17014;
var statearr_17054_19073 = state_17014__$1;
(statearr_17054_19073[(2)] = inst_17000);

(statearr_17054_19073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17015 === (8))){
var inst_16989 = (state_17014[(9)]);
var inst_16978 = (state_17014[(10)]);
var inst_16988 = (state_17014[(7)]);
var inst_16987 = (state_17014[(8)]);
var inst_16992 = (function (){var cs = inst_16978;
var vec__16983 = inst_16987;
var v = inst_16988;
var c = inst_16989;
return (function (p1__16946_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16946_SHARP_);
});
})();
var inst_16993 = cljs.core.filterv(inst_16992,inst_16978);
var inst_16978__$1 = inst_16993;
var state_17014__$1 = (function (){var statearr_17056 = state_17014;
(statearr_17056[(10)] = inst_16978__$1);

return statearr_17056;
})();
var statearr_17058_19074 = state_17014__$1;
(statearr_17058_19074[(2)] = null);

(statearr_17058_19074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17063[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17063[(1)] = (1));

return statearr_17063;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17014){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17014);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17064){var ex__14298__auto__ = e17064;
var statearr_17065_19080 = state_17014;
(statearr_17065_19080[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17014[(4)]))){
var statearr_17067_19081 = state_17014;
(statearr_17067_19081[(1)] = cljs.core.first((state_17014[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19082 = state_17014;
state_17014 = G__19082;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17072 = f__14559__auto__();
(statearr_17072[(6)] = c__14558__auto___19030);

return statearr_17072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17081 = arguments.length;
switch (G__17081) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17115){
var state_val_17116 = (state_17115[(1)]);
if((state_val_17116 === (7))){
var inst_17089 = (state_17115[(7)]);
var inst_17089__$1 = (state_17115[(2)]);
var inst_17092 = (inst_17089__$1 == null);
var inst_17093 = cljs.core.not(inst_17092);
var state_17115__$1 = (function (){var statearr_17124 = state_17115;
(statearr_17124[(7)] = inst_17089__$1);

return statearr_17124;
})();
if(inst_17093){
var statearr_17126_19120 = state_17115__$1;
(statearr_17126_19120[(1)] = (8));

} else {
var statearr_17127_19121 = state_17115__$1;
(statearr_17127_19121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (1))){
var inst_17082 = (0);
var state_17115__$1 = (function (){var statearr_17128 = state_17115;
(statearr_17128[(8)] = inst_17082);

return statearr_17128;
})();
var statearr_17129_19122 = state_17115__$1;
(statearr_17129_19122[(2)] = null);

(statearr_17129_19122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (4))){
var state_17115__$1 = state_17115;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17115__$1,(7),ch);
} else {
if((state_val_17116 === (6))){
var inst_17107 = (state_17115[(2)]);
var state_17115__$1 = state_17115;
var statearr_17136_19130 = state_17115__$1;
(statearr_17136_19130[(2)] = inst_17107);

(statearr_17136_19130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (3))){
var inst_17109 = (state_17115[(2)]);
var inst_17110 = cljs.core.async.close_BANG_(out);
var state_17115__$1 = (function (){var statearr_17138 = state_17115;
(statearr_17138[(9)] = inst_17109);

return statearr_17138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17115__$1,inst_17110);
} else {
if((state_val_17116 === (2))){
var inst_17082 = (state_17115[(8)]);
var inst_17084 = (inst_17082 < n);
var state_17115__$1 = state_17115;
if(cljs.core.truth_(inst_17084)){
var statearr_17142_19134 = state_17115__$1;
(statearr_17142_19134[(1)] = (4));

} else {
var statearr_17144_19135 = state_17115__$1;
(statearr_17144_19135[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (11))){
var inst_17082 = (state_17115[(8)]);
var inst_17099 = (state_17115[(2)]);
var inst_17100 = (inst_17082 + (1));
var inst_17082__$1 = inst_17100;
var state_17115__$1 = (function (){var statearr_17148 = state_17115;
(statearr_17148[(8)] = inst_17082__$1);

(statearr_17148[(10)] = inst_17099);

return statearr_17148;
})();
var statearr_17152_19140 = state_17115__$1;
(statearr_17152_19140[(2)] = null);

(statearr_17152_19140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (9))){
var state_17115__$1 = state_17115;
var statearr_17157_19145 = state_17115__$1;
(statearr_17157_19145[(2)] = null);

(statearr_17157_19145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (5))){
var state_17115__$1 = state_17115;
var statearr_17158_19149 = state_17115__$1;
(statearr_17158_19149[(2)] = null);

(statearr_17158_19149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (10))){
var inst_17104 = (state_17115[(2)]);
var state_17115__$1 = state_17115;
var statearr_17159_19157 = state_17115__$1;
(statearr_17159_19157[(2)] = inst_17104);

(statearr_17159_19157[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (8))){
var inst_17089 = (state_17115[(7)]);
var state_17115__$1 = state_17115;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17115__$1,(11),out,inst_17089);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17160 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17160[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17160[(1)] = (1));

return statearr_17160;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17115){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17115);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17161){var ex__14298__auto__ = e17161;
var statearr_17164_19195 = state_17115;
(statearr_17164_19195[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17115[(4)]))){
var statearr_17167_19198 = state_17115;
(statearr_17167_19198[(1)] = cljs.core.first((state_17115[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19217 = state_17115;
state_17115 = G__19217;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17172 = f__14559__auto__();
(statearr_17172[(6)] = c__14558__auto___19102);

return statearr_17172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17183 = (function (f,ch,meta17179,_,fn1,meta17184){
this.f = f;
this.ch = ch;
this.meta17179 = meta17179;
this._ = _;
this.fn1 = fn1;
this.meta17184 = meta17184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17185,meta17184__$1){
var self__ = this;
var _17185__$1 = this;
return (new cljs.core.async.t_cljs$core$async17183(self__.f,self__.ch,self__.meta17179,self__._,self__.fn1,meta17184__$1));
}));

(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17185){
var self__ = this;
var _17185__$1 = this;
return self__.meta17184;
}));

(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17173_SHARP_){
var G__17190 = (((p1__17173_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17173_SHARP_) : self__.f.call(null, p1__17173_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17190) : f1.call(null, G__17190));
});
}));

(cljs.core.async.t_cljs$core$async17183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17179","meta17179",-2051408035,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17178","cljs.core.async/t_cljs$core$async17178",2028732043,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17184","meta17184",1662069211,null)], null);
}));

(cljs.core.async.t_cljs$core$async17183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17183");

(cljs.core.async.t_cljs$core$async17183.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17183.
 */
cljs.core.async.__GT_t_cljs$core$async17183 = (function cljs$core$async$__GT_t_cljs$core$async17183(f,ch,meta17179,_,fn1,meta17184){
return (new cljs.core.async.t_cljs$core$async17183(f,ch,meta17179,_,fn1,meta17184));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17178 = (function (f,ch,meta17179){
this.f = f;
this.ch = ch;
this.meta17179 = meta17179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17180,meta17179__$1){
var self__ = this;
var _17180__$1 = this;
return (new cljs.core.async.t_cljs$core$async17178(self__.f,self__.ch,meta17179__$1));
}));

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17180){
var self__ = this;
var _17180__$1 = this;
return self__.meta17179;
}));

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17183(self__.f,self__.ch,self__.meta17179,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17195 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17195) : self__.f.call(null, G__17195));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17179","meta17179",-2051408035,null)], null);
}));

(cljs.core.async.t_cljs$core$async17178.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17178");

(cljs.core.async.t_cljs$core$async17178.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17178");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17178.
 */
cljs.core.async.__GT_t_cljs$core$async17178 = (function cljs$core$async$__GT_t_cljs$core$async17178(f,ch,meta17179){
return (new cljs.core.async.t_cljs$core$async17178(f,ch,meta17179));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17178(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17210 = (function (f,ch,meta17211){
this.f = f;
this.ch = ch;
this.meta17211 = meta17211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17212,meta17211__$1){
var self__ = this;
var _17212__$1 = this;
return (new cljs.core.async.t_cljs$core$async17210(self__.f,self__.ch,meta17211__$1));
}));

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17212){
var self__ = this;
var _17212__$1 = this;
return self__.meta17211;
}));

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17210.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17211","meta17211",1394404736,null)], null);
}));

(cljs.core.async.t_cljs$core$async17210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17210");

(cljs.core.async.t_cljs$core$async17210.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17210.
 */
cljs.core.async.__GT_t_cljs$core$async17210 = (function cljs$core$async$__GT_t_cljs$core$async17210(f,ch,meta17211){
return (new cljs.core.async.t_cljs$core$async17210(f,ch,meta17211));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17210(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17224 = (function (p,ch,meta17225){
this.p = p;
this.ch = ch;
this.meta17225 = meta17225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17226,meta17225__$1){
var self__ = this;
var _17226__$1 = this;
return (new cljs.core.async.t_cljs$core$async17224(self__.p,self__.ch,meta17225__$1));
}));

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17226){
var self__ = this;
var _17226__$1 = this;
return self__.meta17225;
}));

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17225","meta17225",-164984828,null)], null);
}));

(cljs.core.async.t_cljs$core$async17224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17224");

(cljs.core.async.t_cljs$core$async17224.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17224.
 */
cljs.core.async.__GT_t_cljs$core$async17224 = (function cljs$core$async$__GT_t_cljs$core$async17224(p,ch,meta17225){
return (new cljs.core.async.t_cljs$core$async17224(p,ch,meta17225));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17224(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17253 = arguments.length;
switch (G__17253) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17278){
var state_val_17279 = (state_17278[(1)]);
if((state_val_17279 === (7))){
var inst_17274 = (state_17278[(2)]);
var state_17278__$1 = state_17278;
var statearr_17280_19295 = state_17278__$1;
(statearr_17280_19295[(2)] = inst_17274);

(statearr_17280_19295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (1))){
var state_17278__$1 = state_17278;
var statearr_17281_19296 = state_17278__$1;
(statearr_17281_19296[(2)] = null);

(statearr_17281_19296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (4))){
var inst_17260 = (state_17278[(7)]);
var inst_17260__$1 = (state_17278[(2)]);
var inst_17261 = (inst_17260__$1 == null);
var state_17278__$1 = (function (){var statearr_17284 = state_17278;
(statearr_17284[(7)] = inst_17260__$1);

return statearr_17284;
})();
if(cljs.core.truth_(inst_17261)){
var statearr_17285_19299 = state_17278__$1;
(statearr_17285_19299[(1)] = (5));

} else {
var statearr_17286_19300 = state_17278__$1;
(statearr_17286_19300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (6))){
var inst_17260 = (state_17278[(7)]);
var inst_17265 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17260) : p.call(null, inst_17260));
var state_17278__$1 = state_17278;
if(cljs.core.truth_(inst_17265)){
var statearr_17288_19302 = state_17278__$1;
(statearr_17288_19302[(1)] = (8));

} else {
var statearr_17289_19303 = state_17278__$1;
(statearr_17289_19303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (3))){
var inst_17276 = (state_17278[(2)]);
var state_17278__$1 = state_17278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17278__$1,inst_17276);
} else {
if((state_val_17279 === (2))){
var state_17278__$1 = state_17278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17278__$1,(4),ch);
} else {
if((state_val_17279 === (11))){
var inst_17268 = (state_17278[(2)]);
var state_17278__$1 = state_17278;
var statearr_17290_19305 = state_17278__$1;
(statearr_17290_19305[(2)] = inst_17268);

(statearr_17290_19305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (9))){
var state_17278__$1 = state_17278;
var statearr_17291_19308 = state_17278__$1;
(statearr_17291_19308[(2)] = null);

(statearr_17291_19308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (5))){
var inst_17263 = cljs.core.async.close_BANG_(out);
var state_17278__$1 = state_17278;
var statearr_17294_19310 = state_17278__$1;
(statearr_17294_19310[(2)] = inst_17263);

(statearr_17294_19310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (10))){
var inst_17271 = (state_17278[(2)]);
var state_17278__$1 = (function (){var statearr_17295 = state_17278;
(statearr_17295[(8)] = inst_17271);

return statearr_17295;
})();
var statearr_17298_19315 = state_17278__$1;
(statearr_17298_19315[(2)] = null);

(statearr_17298_19315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17279 === (8))){
var inst_17260 = (state_17278[(7)]);
var state_17278__$1 = state_17278;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17278__$1,(11),out,inst_17260);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17309 = [null,null,null,null,null,null,null,null,null];
(statearr_17309[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17309[(1)] = (1));

return statearr_17309;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17278){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17278);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17316){var ex__14298__auto__ = e17316;
var statearr_17317_19318 = state_17278;
(statearr_17317_19318[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17278[(4)]))){
var statearr_17318_19319 = state_17278;
(statearr_17318_19319[(1)] = cljs.core.first((state_17278[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19320 = state_17278;
state_17278 = G__19320;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17278){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17327 = f__14559__auto__();
(statearr_17327[(6)] = c__14558__auto___19294);

return statearr_17327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17337 = arguments.length;
switch (G__17337) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14558__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17419){
var state_val_17420 = (state_17419[(1)]);
if((state_val_17420 === (7))){
var inst_17415 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17424_19331 = state_17419__$1;
(statearr_17424_19331[(2)] = inst_17415);

(statearr_17424_19331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (20))){
var inst_17384 = (state_17419[(7)]);
var inst_17396 = (state_17419[(2)]);
var inst_17397 = cljs.core.next(inst_17384);
var inst_17368 = inst_17397;
var inst_17369 = null;
var inst_17370 = (0);
var inst_17371 = (0);
var state_17419__$1 = (function (){var statearr_17428 = state_17419;
(statearr_17428[(8)] = inst_17371);

(statearr_17428[(9)] = inst_17369);

(statearr_17428[(10)] = inst_17370);

(statearr_17428[(11)] = inst_17368);

(statearr_17428[(12)] = inst_17396);

return statearr_17428;
})();
var statearr_17429_19333 = state_17419__$1;
(statearr_17429_19333[(2)] = null);

(statearr_17429_19333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (1))){
var state_17419__$1 = state_17419;
var statearr_17430_19338 = state_17419__$1;
(statearr_17430_19338[(2)] = null);

(statearr_17430_19338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (4))){
var inst_17355 = (state_17419[(13)]);
var inst_17355__$1 = (state_17419[(2)]);
var inst_17356 = (inst_17355__$1 == null);
var state_17419__$1 = (function (){var statearr_17431 = state_17419;
(statearr_17431[(13)] = inst_17355__$1);

return statearr_17431;
})();
if(cljs.core.truth_(inst_17356)){
var statearr_17432_19342 = state_17419__$1;
(statearr_17432_19342[(1)] = (5));

} else {
var statearr_17433_19348 = state_17419__$1;
(statearr_17433_19348[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (15))){
var state_17419__$1 = state_17419;
var statearr_17437_19350 = state_17419__$1;
(statearr_17437_19350[(2)] = null);

(statearr_17437_19350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (21))){
var state_17419__$1 = state_17419;
var statearr_17438_19357 = state_17419__$1;
(statearr_17438_19357[(2)] = null);

(statearr_17438_19357[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (13))){
var inst_17371 = (state_17419[(8)]);
var inst_17369 = (state_17419[(9)]);
var inst_17370 = (state_17419[(10)]);
var inst_17368 = (state_17419[(11)]);
var inst_17380 = (state_17419[(2)]);
var inst_17381 = (inst_17371 + (1));
var tmp17434 = inst_17369;
var tmp17435 = inst_17370;
var tmp17436 = inst_17368;
var inst_17368__$1 = tmp17436;
var inst_17369__$1 = tmp17434;
var inst_17370__$1 = tmp17435;
var inst_17371__$1 = inst_17381;
var state_17419__$1 = (function (){var statearr_17442 = state_17419;
(statearr_17442[(8)] = inst_17371__$1);

(statearr_17442[(9)] = inst_17369__$1);

(statearr_17442[(10)] = inst_17370__$1);

(statearr_17442[(11)] = inst_17368__$1);

(statearr_17442[(14)] = inst_17380);

return statearr_17442;
})();
var statearr_17443_19370 = state_17419__$1;
(statearr_17443_19370[(2)] = null);

(statearr_17443_19370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (22))){
var state_17419__$1 = state_17419;
var statearr_17444_19375 = state_17419__$1;
(statearr_17444_19375[(2)] = null);

(statearr_17444_19375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (6))){
var inst_17355 = (state_17419[(13)]);
var inst_17366 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17355) : f.call(null, inst_17355));
var inst_17367 = cljs.core.seq(inst_17366);
var inst_17368 = inst_17367;
var inst_17369 = null;
var inst_17370 = (0);
var inst_17371 = (0);
var state_17419__$1 = (function (){var statearr_17445 = state_17419;
(statearr_17445[(8)] = inst_17371);

(statearr_17445[(9)] = inst_17369);

(statearr_17445[(10)] = inst_17370);

(statearr_17445[(11)] = inst_17368);

return statearr_17445;
})();
var statearr_17446_19382 = state_17419__$1;
(statearr_17446_19382[(2)] = null);

(statearr_17446_19382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (17))){
var inst_17384 = (state_17419[(7)]);
var inst_17389 = cljs.core.chunk_first(inst_17384);
var inst_17390 = cljs.core.chunk_rest(inst_17384);
var inst_17391 = cljs.core.count(inst_17389);
var inst_17368 = inst_17390;
var inst_17369 = inst_17389;
var inst_17370 = inst_17391;
var inst_17371 = (0);
var state_17419__$1 = (function (){var statearr_17447 = state_17419;
(statearr_17447[(8)] = inst_17371);

(statearr_17447[(9)] = inst_17369);

(statearr_17447[(10)] = inst_17370);

(statearr_17447[(11)] = inst_17368);

return statearr_17447;
})();
var statearr_17448_19389 = state_17419__$1;
(statearr_17448_19389[(2)] = null);

(statearr_17448_19389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (3))){
var inst_17417 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17419__$1,inst_17417);
} else {
if((state_val_17420 === (12))){
var inst_17405 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17449_19394 = state_17419__$1;
(statearr_17449_19394[(2)] = inst_17405);

(statearr_17449_19394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (2))){
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17419__$1,(4),in$);
} else {
if((state_val_17420 === (23))){
var inst_17413 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17450_19396 = state_17419__$1;
(statearr_17450_19396[(2)] = inst_17413);

(statearr_17450_19396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (19))){
var inst_17400 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17451_19397 = state_17419__$1;
(statearr_17451_19397[(2)] = inst_17400);

(statearr_17451_19397[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (11))){
var inst_17384 = (state_17419[(7)]);
var inst_17368 = (state_17419[(11)]);
var inst_17384__$1 = cljs.core.seq(inst_17368);
var state_17419__$1 = (function (){var statearr_17453 = state_17419;
(statearr_17453[(7)] = inst_17384__$1);

return statearr_17453;
})();
if(inst_17384__$1){
var statearr_17454_19399 = state_17419__$1;
(statearr_17454_19399[(1)] = (14));

} else {
var statearr_17455_19401 = state_17419__$1;
(statearr_17455_19401[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (9))){
var inst_17407 = (state_17419[(2)]);
var inst_17408 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17419__$1 = (function (){var statearr_17456 = state_17419;
(statearr_17456[(15)] = inst_17407);

return statearr_17456;
})();
if(cljs.core.truth_(inst_17408)){
var statearr_17457_19402 = state_17419__$1;
(statearr_17457_19402[(1)] = (21));

} else {
var statearr_17461_19403 = state_17419__$1;
(statearr_17461_19403[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (5))){
var inst_17358 = cljs.core.async.close_BANG_(out);
var state_17419__$1 = state_17419;
var statearr_17464_19407 = state_17419__$1;
(statearr_17464_19407[(2)] = inst_17358);

(statearr_17464_19407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (14))){
var inst_17384 = (state_17419[(7)]);
var inst_17387 = cljs.core.chunked_seq_QMARK_(inst_17384);
var state_17419__$1 = state_17419;
if(inst_17387){
var statearr_17466_19408 = state_17419__$1;
(statearr_17466_19408[(1)] = (17));

} else {
var statearr_17467_19409 = state_17419__$1;
(statearr_17467_19409[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (16))){
var inst_17403 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17468_19411 = state_17419__$1;
(statearr_17468_19411[(2)] = inst_17403);

(statearr_17468_19411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (10))){
var inst_17371 = (state_17419[(8)]);
var inst_17369 = (state_17419[(9)]);
var inst_17376 = cljs.core._nth(inst_17369,inst_17371);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17419__$1,(13),out,inst_17376);
} else {
if((state_val_17420 === (18))){
var inst_17384 = (state_17419[(7)]);
var inst_17394 = cljs.core.first(inst_17384);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17419__$1,(20),out,inst_17394);
} else {
if((state_val_17420 === (8))){
var inst_17371 = (state_17419[(8)]);
var inst_17370 = (state_17419[(10)]);
var inst_17373 = (inst_17371 < inst_17370);
var inst_17374 = inst_17373;
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17374)){
var statearr_17469_19431 = state_17419__$1;
(statearr_17469_19431[(1)] = (10));

} else {
var statearr_17470_19437 = state_17419__$1;
(statearr_17470_19437[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0 = (function (){
var statearr_17471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17471[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__);

(statearr_17471[(1)] = (1));

return statearr_17471;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1 = (function (state_17419){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17419);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17472){var ex__14298__auto__ = e17472;
var statearr_17473_19443 = state_17419;
(statearr_17473_19443[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17419[(4)]))){
var statearr_17474_19446 = state_17419;
(statearr_17474_19446[(1)] = cljs.core.first((state_17419[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19447 = state_17419;
state_17419 = G__19447;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__ = function(state_17419){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1.call(this,state_17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14295__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17475 = f__14559__auto__();
(statearr_17475[(6)] = c__14558__auto__);

return statearr_17475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));

return c__14558__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17489 = arguments.length;
switch (G__17489) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17494 = arguments.length;
switch (G__17494) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17496 = arguments.length;
switch (G__17496) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17523){
var state_val_17524 = (state_17523[(1)]);
if((state_val_17524 === (7))){
var inst_17518 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17545_19493 = state_17523__$1;
(statearr_17545_19493[(2)] = inst_17518);

(statearr_17545_19493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (1))){
var inst_17500 = null;
var state_17523__$1 = (function (){var statearr_17548 = state_17523;
(statearr_17548[(7)] = inst_17500);

return statearr_17548;
})();
var statearr_17549_19499 = state_17523__$1;
(statearr_17549_19499[(2)] = null);

(statearr_17549_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (4))){
var inst_17503 = (state_17523[(8)]);
var inst_17503__$1 = (state_17523[(2)]);
var inst_17504 = (inst_17503__$1 == null);
var inst_17505 = cljs.core.not(inst_17504);
var state_17523__$1 = (function (){var statearr_17552 = state_17523;
(statearr_17552[(8)] = inst_17503__$1);

return statearr_17552;
})();
if(inst_17505){
var statearr_17553_19506 = state_17523__$1;
(statearr_17553_19506[(1)] = (5));

} else {
var statearr_17557_19508 = state_17523__$1;
(statearr_17557_19508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (6))){
var state_17523__$1 = state_17523;
var statearr_17558_19515 = state_17523__$1;
(statearr_17558_19515[(2)] = null);

(statearr_17558_19515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (3))){
var inst_17520 = (state_17523[(2)]);
var inst_17521 = cljs.core.async.close_BANG_(out);
var state_17523__$1 = (function (){var statearr_17560 = state_17523;
(statearr_17560[(9)] = inst_17520);

return statearr_17560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17523__$1,inst_17521);
} else {
if((state_val_17524 === (2))){
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17523__$1,(4),ch);
} else {
if((state_val_17524 === (11))){
var inst_17503 = (state_17523[(8)]);
var inst_17512 = (state_17523[(2)]);
var inst_17500 = inst_17503;
var state_17523__$1 = (function (){var statearr_17562 = state_17523;
(statearr_17562[(7)] = inst_17500);

(statearr_17562[(10)] = inst_17512);

return statearr_17562;
})();
var statearr_17563_19517 = state_17523__$1;
(statearr_17563_19517[(2)] = null);

(statearr_17563_19517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (9))){
var inst_17503 = (state_17523[(8)]);
var state_17523__$1 = state_17523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17523__$1,(11),out,inst_17503);
} else {
if((state_val_17524 === (5))){
var inst_17500 = (state_17523[(7)]);
var inst_17503 = (state_17523[(8)]);
var inst_17507 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17503,inst_17500);
var state_17523__$1 = state_17523;
if(inst_17507){
var statearr_17566_19520 = state_17523__$1;
(statearr_17566_19520[(1)] = (8));

} else {
var statearr_17568_19523 = state_17523__$1;
(statearr_17568_19523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (10))){
var inst_17515 = (state_17523[(2)]);
var state_17523__$1 = state_17523;
var statearr_17575_19527 = state_17523__$1;
(statearr_17575_19527[(2)] = inst_17515);

(statearr_17575_19527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17524 === (8))){
var inst_17500 = (state_17523[(7)]);
var tmp17564 = inst_17500;
var inst_17500__$1 = tmp17564;
var state_17523__$1 = (function (){var statearr_17576 = state_17523;
(statearr_17576[(7)] = inst_17500__$1);

return statearr_17576;
})();
var statearr_17579_19529 = state_17523__$1;
(statearr_17579_19529[(2)] = null);

(statearr_17579_19529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17583[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17583[(1)] = (1));

return statearr_17583;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17523){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17523);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17584){var ex__14298__auto__ = e17584;
var statearr_17585_19538 = state_17523;
(statearr_17585_19538[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17523[(4)]))){
var statearr_17586_19540 = state_17523;
(statearr_17586_19540[(1)] = cljs.core.first((state_17523[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19547 = state_17523;
state_17523 = G__19547;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17595 = f__14559__auto__();
(statearr_17595[(6)] = c__14558__auto___19491);

return statearr_17595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17601 = arguments.length;
switch (G__17601) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17650){
var state_val_17651 = (state_17650[(1)]);
if((state_val_17651 === (7))){
var inst_17646 = (state_17650[(2)]);
var state_17650__$1 = state_17650;
var statearr_17653_19560 = state_17650__$1;
(statearr_17653_19560[(2)] = inst_17646);

(statearr_17653_19560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (1))){
var inst_17611 = (new Array(n));
var inst_17612 = inst_17611;
var inst_17613 = (0);
var state_17650__$1 = (function (){var statearr_17654 = state_17650;
(statearr_17654[(7)] = inst_17612);

(statearr_17654[(8)] = inst_17613);

return statearr_17654;
})();
var statearr_17656_19571 = state_17650__$1;
(statearr_17656_19571[(2)] = null);

(statearr_17656_19571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (4))){
var inst_17616 = (state_17650[(9)]);
var inst_17616__$1 = (state_17650[(2)]);
var inst_17617 = (inst_17616__$1 == null);
var inst_17618 = cljs.core.not(inst_17617);
var state_17650__$1 = (function (){var statearr_17663 = state_17650;
(statearr_17663[(9)] = inst_17616__$1);

return statearr_17663;
})();
if(inst_17618){
var statearr_17664_19587 = state_17650__$1;
(statearr_17664_19587[(1)] = (5));

} else {
var statearr_17667_19588 = state_17650__$1;
(statearr_17667_19588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (15))){
var inst_17640 = (state_17650[(2)]);
var state_17650__$1 = state_17650;
var statearr_17670_19589 = state_17650__$1;
(statearr_17670_19589[(2)] = inst_17640);

(statearr_17670_19589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (13))){
var state_17650__$1 = state_17650;
var statearr_17672_19593 = state_17650__$1;
(statearr_17672_19593[(2)] = null);

(statearr_17672_19593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (6))){
var inst_17613 = (state_17650[(8)]);
var inst_17634 = (inst_17613 > (0));
var state_17650__$1 = state_17650;
if(cljs.core.truth_(inst_17634)){
var statearr_17675_19594 = state_17650__$1;
(statearr_17675_19594[(1)] = (12));

} else {
var statearr_17676_19595 = state_17650__$1;
(statearr_17676_19595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (3))){
var inst_17648 = (state_17650[(2)]);
var state_17650__$1 = state_17650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17650__$1,inst_17648);
} else {
if((state_val_17651 === (12))){
var inst_17612 = (state_17650[(7)]);
var inst_17638 = cljs.core.vec(inst_17612);
var state_17650__$1 = state_17650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17650__$1,(15),out,inst_17638);
} else {
if((state_val_17651 === (2))){
var state_17650__$1 = state_17650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17650__$1,(4),ch);
} else {
if((state_val_17651 === (11))){
var inst_17628 = (state_17650[(2)]);
var inst_17629 = (new Array(n));
var inst_17612 = inst_17629;
var inst_17613 = (0);
var state_17650__$1 = (function (){var statearr_17682 = state_17650;
(statearr_17682[(7)] = inst_17612);

(statearr_17682[(10)] = inst_17628);

(statearr_17682[(8)] = inst_17613);

return statearr_17682;
})();
var statearr_17683_19601 = state_17650__$1;
(statearr_17683_19601[(2)] = null);

(statearr_17683_19601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (9))){
var inst_17612 = (state_17650[(7)]);
var inst_17626 = cljs.core.vec(inst_17612);
var state_17650__$1 = state_17650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17650__$1,(11),out,inst_17626);
} else {
if((state_val_17651 === (5))){
var inst_17612 = (state_17650[(7)]);
var inst_17616 = (state_17650[(9)]);
var inst_17621 = (state_17650[(11)]);
var inst_17613 = (state_17650[(8)]);
var inst_17620 = (inst_17612[inst_17613] = inst_17616);
var inst_17621__$1 = (inst_17613 + (1));
var inst_17622 = (inst_17621__$1 < n);
var state_17650__$1 = (function (){var statearr_17687 = state_17650;
(statearr_17687[(11)] = inst_17621__$1);

(statearr_17687[(12)] = inst_17620);

return statearr_17687;
})();
if(cljs.core.truth_(inst_17622)){
var statearr_17688_19604 = state_17650__$1;
(statearr_17688_19604[(1)] = (8));

} else {
var statearr_17689_19606 = state_17650__$1;
(statearr_17689_19606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (14))){
var inst_17643 = (state_17650[(2)]);
var inst_17644 = cljs.core.async.close_BANG_(out);
var state_17650__$1 = (function (){var statearr_17691 = state_17650;
(statearr_17691[(13)] = inst_17643);

return statearr_17691;
})();
var statearr_17692_19613 = state_17650__$1;
(statearr_17692_19613[(2)] = inst_17644);

(statearr_17692_19613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (10))){
var inst_17632 = (state_17650[(2)]);
var state_17650__$1 = state_17650;
var statearr_17693_19619 = state_17650__$1;
(statearr_17693_19619[(2)] = inst_17632);

(statearr_17693_19619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17651 === (8))){
var inst_17612 = (state_17650[(7)]);
var inst_17621 = (state_17650[(11)]);
var tmp17690 = inst_17612;
var inst_17612__$1 = tmp17690;
var inst_17613 = inst_17621;
var state_17650__$1 = (function (){var statearr_17696 = state_17650;
(statearr_17696[(7)] = inst_17612__$1);

(statearr_17696[(8)] = inst_17613);

return statearr_17696;
})();
var statearr_17697_19630 = state_17650__$1;
(statearr_17697_19630[(2)] = null);

(statearr_17697_19630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17708[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17708[(1)] = (1));

return statearr_17708;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17650){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17650);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17709){var ex__14298__auto__ = e17709;
var statearr_17710_19631 = state_17650;
(statearr_17710_19631[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17650[(4)]))){
var statearr_17714_19632 = state_17650;
(statearr_17714_19632[(1)] = cljs.core.first((state_17650[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19639 = state_17650;
state_17650 = G__19639;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17715 = f__14559__auto__();
(statearr_17715[(6)] = c__14558__auto___19557);

return statearr_17715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17730 = arguments.length;
switch (G__17730) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14558__auto___19646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14559__auto__ = (function (){var switch__14294__auto__ = (function (state_17815){
var state_val_17816 = (state_17815[(1)]);
if((state_val_17816 === (7))){
var inst_17805 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17825_19648 = state_17815__$1;
(statearr_17825_19648[(2)] = inst_17805);

(statearr_17825_19648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (1))){
var inst_17758 = [];
var inst_17759 = inst_17758;
var inst_17760 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17815__$1 = (function (){var statearr_17826 = state_17815;
(statearr_17826[(7)] = inst_17760);

(statearr_17826[(8)] = inst_17759);

return statearr_17826;
})();
var statearr_17827_19653 = state_17815__$1;
(statearr_17827_19653[(2)] = null);

(statearr_17827_19653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (4))){
var inst_17766 = (state_17815[(9)]);
var inst_17766__$1 = (state_17815[(2)]);
var inst_17767 = (inst_17766__$1 == null);
var inst_17768 = cljs.core.not(inst_17767);
var state_17815__$1 = (function (){var statearr_17828 = state_17815;
(statearr_17828[(9)] = inst_17766__$1);

return statearr_17828;
})();
if(inst_17768){
var statearr_17833_19654 = state_17815__$1;
(statearr_17833_19654[(1)] = (5));

} else {
var statearr_17837_19655 = state_17815__$1;
(statearr_17837_19655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (15))){
var inst_17759 = (state_17815[(8)]);
var inst_17797 = cljs.core.vec(inst_17759);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17815__$1,(18),out,inst_17797);
} else {
if((state_val_17816 === (13))){
var inst_17792 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17847_19658 = state_17815__$1;
(statearr_17847_19658[(2)] = inst_17792);

(statearr_17847_19658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (6))){
var inst_17759 = (state_17815[(8)]);
var inst_17794 = inst_17759.length;
var inst_17795 = (inst_17794 > (0));
var state_17815__$1 = state_17815;
if(cljs.core.truth_(inst_17795)){
var statearr_17855_19664 = state_17815__$1;
(statearr_17855_19664[(1)] = (15));

} else {
var statearr_17857_19665 = state_17815__$1;
(statearr_17857_19665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (17))){
var inst_17802 = (state_17815[(2)]);
var inst_17803 = cljs.core.async.close_BANG_(out);
var state_17815__$1 = (function (){var statearr_17861 = state_17815;
(statearr_17861[(10)] = inst_17802);

return statearr_17861;
})();
var statearr_17862_19670 = state_17815__$1;
(statearr_17862_19670[(2)] = inst_17803);

(statearr_17862_19670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (3))){
var inst_17807 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17815__$1,inst_17807);
} else {
if((state_val_17816 === (12))){
var inst_17759 = (state_17815[(8)]);
var inst_17785 = cljs.core.vec(inst_17759);
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17815__$1,(14),out,inst_17785);
} else {
if((state_val_17816 === (2))){
var state_17815__$1 = state_17815;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17815__$1,(4),ch);
} else {
if((state_val_17816 === (11))){
var inst_17766 = (state_17815[(9)]);
var inst_17770 = (state_17815[(11)]);
var inst_17759 = (state_17815[(8)]);
var inst_17782 = inst_17759.push(inst_17766);
var tmp17863 = inst_17759;
var inst_17759__$1 = tmp17863;
var inst_17760 = inst_17770;
var state_17815__$1 = (function (){var statearr_17865 = state_17815;
(statearr_17865[(12)] = inst_17782);

(statearr_17865[(7)] = inst_17760);

(statearr_17865[(8)] = inst_17759__$1);

return statearr_17865;
})();
var statearr_17866_19685 = state_17815__$1;
(statearr_17866_19685[(2)] = null);

(statearr_17866_19685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (9))){
var inst_17760 = (state_17815[(7)]);
var inst_17778 = cljs.core.keyword_identical_QMARK_(inst_17760,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17815__$1 = state_17815;
var statearr_17871_19689 = state_17815__$1;
(statearr_17871_19689[(2)] = inst_17778);

(statearr_17871_19689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (5))){
var inst_17775 = (state_17815[(13)]);
var inst_17766 = (state_17815[(9)]);
var inst_17770 = (state_17815[(11)]);
var inst_17760 = (state_17815[(7)]);
var inst_17770__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17766) : f.call(null, inst_17766));
var inst_17775__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17770__$1,inst_17760);
var state_17815__$1 = (function (){var statearr_17880 = state_17815;
(statearr_17880[(13)] = inst_17775__$1);

(statearr_17880[(11)] = inst_17770__$1);

return statearr_17880;
})();
if(inst_17775__$1){
var statearr_17883_19694 = state_17815__$1;
(statearr_17883_19694[(1)] = (8));

} else {
var statearr_17884_19695 = state_17815__$1;
(statearr_17884_19695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (14))){
var inst_17766 = (state_17815[(9)]);
var inst_17770 = (state_17815[(11)]);
var inst_17787 = (state_17815[(2)]);
var inst_17788 = [];
var inst_17789 = inst_17788.push(inst_17766);
var inst_17759 = inst_17788;
var inst_17760 = inst_17770;
var state_17815__$1 = (function (){var statearr_17885 = state_17815;
(statearr_17885[(14)] = inst_17787);

(statearr_17885[(15)] = inst_17789);

(statearr_17885[(7)] = inst_17760);

(statearr_17885[(8)] = inst_17759);

return statearr_17885;
})();
var statearr_17886_19696 = state_17815__$1;
(statearr_17886_19696[(2)] = null);

(statearr_17886_19696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (16))){
var state_17815__$1 = state_17815;
var statearr_17888_19697 = state_17815__$1;
(statearr_17888_19697[(2)] = null);

(statearr_17888_19697[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (10))){
var inst_17780 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
if(cljs.core.truth_(inst_17780)){
var statearr_17900_19698 = state_17815__$1;
(statearr_17900_19698[(1)] = (11));

} else {
var statearr_17901_19699 = state_17815__$1;
(statearr_17901_19699[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (18))){
var inst_17799 = (state_17815[(2)]);
var state_17815__$1 = state_17815;
var statearr_17908_19701 = state_17815__$1;
(statearr_17908_19701[(2)] = inst_17799);

(statearr_17908_19701[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17816 === (8))){
var inst_17775 = (state_17815[(13)]);
var state_17815__$1 = state_17815;
var statearr_17909_19705 = state_17815__$1;
(statearr_17909_19705[(2)] = inst_17775);

(statearr_17909_19705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14295__auto__ = null;
var cljs$core$async$state_machine__14295__auto____0 = (function (){
var statearr_17916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17916[(0)] = cljs$core$async$state_machine__14295__auto__);

(statearr_17916[(1)] = (1));

return statearr_17916;
});
var cljs$core$async$state_machine__14295__auto____1 = (function (state_17815){
while(true){
var ret_value__14296__auto__ = (function (){try{while(true){
var result__14297__auto__ = switch__14294__auto__(state_17815);
if(cljs.core.keyword_identical_QMARK_(result__14297__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14297__auto__;
}
break;
}
}catch (e17921){var ex__14298__auto__ = e17921;
var statearr_17922_19709 = state_17815;
(statearr_17922_19709[(2)] = ex__14298__auto__);


if(cljs.core.seq((state_17815[(4)]))){
var statearr_17926_19710 = state_17815;
(statearr_17926_19710[(1)] = cljs.core.first((state_17815[(4)])));

} else {
throw ex__14298__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19713 = state_17815;
state_17815 = G__19713;
continue;
} else {
return ret_value__14296__auto__;
}
break;
}
});
cljs$core$async$state_machine__14295__auto__ = function(state_17815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14295__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14295__auto____1.call(this,state_17815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14295__auto____0;
cljs$core$async$state_machine__14295__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14295__auto____1;
return cljs$core$async$state_machine__14295__auto__;
})()
})();
var state__14560__auto__ = (function (){var statearr_17939 = f__14559__auto__();
(statearr_17939[(6)] = c__14558__auto___19646);

return statearr_17939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14560__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
