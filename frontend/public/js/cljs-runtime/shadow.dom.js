goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12543 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12543(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12544 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12544(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11687 = coll;
var G__11688 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11687,G__11688) : shadow.dom.lazy_native_coll_seq.call(null, G__11687,G__11688));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11718 = arguments.length;
switch (G__11718) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11723 = arguments.length;
switch (G__11723) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11728 = arguments.length;
switch (G__11728) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11738 = arguments.length;
switch (G__11738) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11750 = arguments.length;
switch (G__11750) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11778 = arguments.length;
switch (G__11778) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e11783){if((e11783 instanceof Object)){
var e = e11783;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11783;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11790 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11791 = null;
var count__11792 = (0);
var i__11793 = (0);
while(true){
if((i__11793 < count__11792)){
var el = chunk__11791.cljs$core$IIndexed$_nth$arity$2(null, i__11793);
var handler_12591__$1 = ((function (seq__11790,chunk__11791,count__11792,i__11793,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11790,chunk__11791,count__11792,i__11793,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12591__$1);


var G__12595 = seq__11790;
var G__12596 = chunk__11791;
var G__12597 = count__11792;
var G__12598 = (i__11793 + (1));
seq__11790 = G__12595;
chunk__11791 = G__12596;
count__11792 = G__12597;
i__11793 = G__12598;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11790);
if(temp__5804__auto__){
var seq__11790__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11790__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11790__$1);
var G__12601 = cljs.core.chunk_rest(seq__11790__$1);
var G__12602 = c__5525__auto__;
var G__12603 = cljs.core.count(c__5525__auto__);
var G__12604 = (0);
seq__11790 = G__12601;
chunk__11791 = G__12602;
count__11792 = G__12603;
i__11793 = G__12604;
continue;
} else {
var el = cljs.core.first(seq__11790__$1);
var handler_12605__$1 = ((function (seq__11790,chunk__11791,count__11792,i__11793,el,seq__11790__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__11790,chunk__11791,count__11792,i__11793,el,seq__11790__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12605__$1);


var G__12608 = cljs.core.next(seq__11790__$1);
var G__12609 = null;
var G__12610 = (0);
var G__12611 = (0);
seq__11790 = G__12608;
chunk__11791 = G__12609;
count__11792 = G__12610;
i__11793 = G__12611;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11799 = arguments.length;
switch (G__11799) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11808 = cljs.core.seq(events);
var chunk__11809 = null;
var count__11810 = (0);
var i__11811 = (0);
while(true){
if((i__11811 < count__11810)){
var vec__11870 = chunk__11809.cljs$core$IIndexed$_nth$arity$2(null, i__11811);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11870,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12618 = seq__11808;
var G__12619 = chunk__11809;
var G__12620 = count__11810;
var G__12621 = (i__11811 + (1));
seq__11808 = G__12618;
chunk__11809 = G__12619;
count__11810 = G__12620;
i__11811 = G__12621;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11808);
if(temp__5804__auto__){
var seq__11808__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11808__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11808__$1);
var G__12625 = cljs.core.chunk_rest(seq__11808__$1);
var G__12626 = c__5525__auto__;
var G__12627 = cljs.core.count(c__5525__auto__);
var G__12628 = (0);
seq__11808 = G__12625;
chunk__11809 = G__12626;
count__11810 = G__12627;
i__11811 = G__12628;
continue;
} else {
var vec__11873 = cljs.core.first(seq__11808__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11873,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12630 = cljs.core.next(seq__11808__$1);
var G__12631 = null;
var G__12632 = (0);
var G__12633 = (0);
seq__11808 = G__12630;
chunk__11809 = G__12631;
count__11810 = G__12632;
i__11811 = G__12633;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11876 = cljs.core.seq(styles);
var chunk__11877 = null;
var count__11878 = (0);
var i__11879 = (0);
while(true){
if((i__11879 < count__11878)){
var vec__11891 = chunk__11877.cljs$core$IIndexed$_nth$arity$2(null, i__11879);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12640 = seq__11876;
var G__12641 = chunk__11877;
var G__12642 = count__11878;
var G__12643 = (i__11879 + (1));
seq__11876 = G__12640;
chunk__11877 = G__12641;
count__11878 = G__12642;
i__11879 = G__12643;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11876);
if(temp__5804__auto__){
var seq__11876__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11876__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11876__$1);
var G__12647 = cljs.core.chunk_rest(seq__11876__$1);
var G__12648 = c__5525__auto__;
var G__12649 = cljs.core.count(c__5525__auto__);
var G__12650 = (0);
seq__11876 = G__12647;
chunk__11877 = G__12648;
count__11878 = G__12649;
i__11879 = G__12650;
continue;
} else {
var vec__11894 = cljs.core.first(seq__11876__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11894,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12652 = cljs.core.next(seq__11876__$1);
var G__12653 = null;
var G__12654 = (0);
var G__12655 = (0);
seq__11876 = G__12652;
chunk__11877 = G__12653;
count__11878 = G__12654;
i__11879 = G__12655;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11897_12656 = key;
var G__11897_12657__$1 = (((G__11897_12656 instanceof cljs.core.Keyword))?G__11897_12656.fqn:null);
switch (G__11897_12657__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12664 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12664,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12664,"aria-");
}
})())){
el.setAttribute(ks_12664,value);
} else {
(el[ks_12664] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11902){
var map__11903 = p__11902;
var map__11903__$1 = cljs.core.__destructure_map(map__11903);
var props = map__11903__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11904 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11904,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11907 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11907,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11907;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11909 = arguments.length;
switch (G__11909) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11913){
var vec__11914 = p__11913;
var seq__11915 = cljs.core.seq(vec__11914);
var first__11916 = cljs.core.first(seq__11915);
var seq__11915__$1 = cljs.core.next(seq__11915);
var nn = first__11916;
var first__11916__$1 = cljs.core.first(seq__11915__$1);
var seq__11915__$2 = cljs.core.next(seq__11915__$1);
var np = first__11916__$1;
var nc = seq__11915__$2;
var node = vec__11914;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11917 = nn;
var G__11918 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11917,G__11918) : create_fn.call(null, G__11917,G__11918));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11919 = nn;
var G__11920 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11919,G__11920) : create_fn.call(null, G__11919,G__11920));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11921 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(1),null);
var seq__11924_12682 = cljs.core.seq(node_children);
var chunk__11925_12683 = null;
var count__11926_12684 = (0);
var i__11927_12686 = (0);
while(true){
if((i__11927_12686 < count__11926_12684)){
var child_struct_12689 = chunk__11925_12683.cljs$core$IIndexed$_nth$arity$2(null, i__11927_12686);
var children_12690 = shadow.dom.dom_node(child_struct_12689);
if(cljs.core.seq_QMARK_(children_12690)){
var seq__11976_12692 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12690));
var chunk__11978_12693 = null;
var count__11979_12694 = (0);
var i__11980_12695 = (0);
while(true){
if((i__11980_12695 < count__11979_12694)){
var child_12698 = chunk__11978_12693.cljs$core$IIndexed$_nth$arity$2(null, i__11980_12695);
if(cljs.core.truth_(child_12698)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12698);


var G__12699 = seq__11976_12692;
var G__12700 = chunk__11978_12693;
var G__12701 = count__11979_12694;
var G__12702 = (i__11980_12695 + (1));
seq__11976_12692 = G__12699;
chunk__11978_12693 = G__12700;
count__11979_12694 = G__12701;
i__11980_12695 = G__12702;
continue;
} else {
var G__12704 = seq__11976_12692;
var G__12705 = chunk__11978_12693;
var G__12706 = count__11979_12694;
var G__12707 = (i__11980_12695 + (1));
seq__11976_12692 = G__12704;
chunk__11978_12693 = G__12705;
count__11979_12694 = G__12706;
i__11980_12695 = G__12707;
continue;
}
} else {
var temp__5804__auto___12708 = cljs.core.seq(seq__11976_12692);
if(temp__5804__auto___12708){
var seq__11976_12709__$1 = temp__5804__auto___12708;
if(cljs.core.chunked_seq_QMARK_(seq__11976_12709__$1)){
var c__5525__auto___12710 = cljs.core.chunk_first(seq__11976_12709__$1);
var G__12711 = cljs.core.chunk_rest(seq__11976_12709__$1);
var G__12712 = c__5525__auto___12710;
var G__12713 = cljs.core.count(c__5525__auto___12710);
var G__12714 = (0);
seq__11976_12692 = G__12711;
chunk__11978_12693 = G__12712;
count__11979_12694 = G__12713;
i__11980_12695 = G__12714;
continue;
} else {
var child_12715 = cljs.core.first(seq__11976_12709__$1);
if(cljs.core.truth_(child_12715)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12715);


var G__12717 = cljs.core.next(seq__11976_12709__$1);
var G__12718 = null;
var G__12719 = (0);
var G__12720 = (0);
seq__11976_12692 = G__12717;
chunk__11978_12693 = G__12718;
count__11979_12694 = G__12719;
i__11980_12695 = G__12720;
continue;
} else {
var G__12722 = cljs.core.next(seq__11976_12709__$1);
var G__12723 = null;
var G__12724 = (0);
var G__12725 = (0);
seq__11976_12692 = G__12722;
chunk__11978_12693 = G__12723;
count__11979_12694 = G__12724;
i__11980_12695 = G__12725;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12690);
}


var G__12728 = seq__11924_12682;
var G__12729 = chunk__11925_12683;
var G__12730 = count__11926_12684;
var G__12731 = (i__11927_12686 + (1));
seq__11924_12682 = G__12728;
chunk__11925_12683 = G__12729;
count__11926_12684 = G__12730;
i__11927_12686 = G__12731;
continue;
} else {
var temp__5804__auto___12732 = cljs.core.seq(seq__11924_12682);
if(temp__5804__auto___12732){
var seq__11924_12737__$1 = temp__5804__auto___12732;
if(cljs.core.chunked_seq_QMARK_(seq__11924_12737__$1)){
var c__5525__auto___12738 = cljs.core.chunk_first(seq__11924_12737__$1);
var G__12739 = cljs.core.chunk_rest(seq__11924_12737__$1);
var G__12740 = c__5525__auto___12738;
var G__12741 = cljs.core.count(c__5525__auto___12738);
var G__12742 = (0);
seq__11924_12682 = G__12739;
chunk__11925_12683 = G__12740;
count__11926_12684 = G__12741;
i__11927_12686 = G__12742;
continue;
} else {
var child_struct_12749 = cljs.core.first(seq__11924_12737__$1);
var children_12750 = shadow.dom.dom_node(child_struct_12749);
if(cljs.core.seq_QMARK_(children_12750)){
var seq__11987_12751 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12750));
var chunk__11989_12752 = null;
var count__11990_12753 = (0);
var i__11991_12754 = (0);
while(true){
if((i__11991_12754 < count__11990_12753)){
var child_12755 = chunk__11989_12752.cljs$core$IIndexed$_nth$arity$2(null, i__11991_12754);
if(cljs.core.truth_(child_12755)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12755);


var G__12757 = seq__11987_12751;
var G__12758 = chunk__11989_12752;
var G__12759 = count__11990_12753;
var G__12760 = (i__11991_12754 + (1));
seq__11987_12751 = G__12757;
chunk__11989_12752 = G__12758;
count__11990_12753 = G__12759;
i__11991_12754 = G__12760;
continue;
} else {
var G__12761 = seq__11987_12751;
var G__12762 = chunk__11989_12752;
var G__12763 = count__11990_12753;
var G__12764 = (i__11991_12754 + (1));
seq__11987_12751 = G__12761;
chunk__11989_12752 = G__12762;
count__11990_12753 = G__12763;
i__11991_12754 = G__12764;
continue;
}
} else {
var temp__5804__auto___12765__$1 = cljs.core.seq(seq__11987_12751);
if(temp__5804__auto___12765__$1){
var seq__11987_12766__$1 = temp__5804__auto___12765__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11987_12766__$1)){
var c__5525__auto___12767 = cljs.core.chunk_first(seq__11987_12766__$1);
var G__12768 = cljs.core.chunk_rest(seq__11987_12766__$1);
var G__12769 = c__5525__auto___12767;
var G__12770 = cljs.core.count(c__5525__auto___12767);
var G__12771 = (0);
seq__11987_12751 = G__12768;
chunk__11989_12752 = G__12769;
count__11990_12753 = G__12770;
i__11991_12754 = G__12771;
continue;
} else {
var child_12772 = cljs.core.first(seq__11987_12766__$1);
if(cljs.core.truth_(child_12772)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12772);


var G__12774 = cljs.core.next(seq__11987_12766__$1);
var G__12775 = null;
var G__12776 = (0);
var G__12777 = (0);
seq__11987_12751 = G__12774;
chunk__11989_12752 = G__12775;
count__11990_12753 = G__12776;
i__11991_12754 = G__12777;
continue;
} else {
var G__12779 = cljs.core.next(seq__11987_12766__$1);
var G__12780 = null;
var G__12781 = (0);
var G__12782 = (0);
seq__11987_12751 = G__12779;
chunk__11989_12752 = G__12780;
count__11990_12753 = G__12781;
i__11991_12754 = G__12782;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12750);
}


var G__12783 = cljs.core.next(seq__11924_12737__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__11924_12682 = G__12783;
chunk__11925_12683 = G__12784;
count__11926_12684 = G__12785;
i__11927_12686 = G__12786;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12015 = cljs.core.seq(node);
var chunk__12016 = null;
var count__12017 = (0);
var i__12018 = (0);
while(true){
if((i__12018 < count__12017)){
var n = chunk__12016.cljs$core$IIndexed$_nth$arity$2(null, i__12018);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12793 = seq__12015;
var G__12794 = chunk__12016;
var G__12795 = count__12017;
var G__12796 = (i__12018 + (1));
seq__12015 = G__12793;
chunk__12016 = G__12794;
count__12017 = G__12795;
i__12018 = G__12796;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12015);
if(temp__5804__auto__){
var seq__12015__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12015__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12015__$1);
var G__12797 = cljs.core.chunk_rest(seq__12015__$1);
var G__12798 = c__5525__auto__;
var G__12799 = cljs.core.count(c__5525__auto__);
var G__12800 = (0);
seq__12015 = G__12797;
chunk__12016 = G__12798;
count__12017 = G__12799;
i__12018 = G__12800;
continue;
} else {
var n = cljs.core.first(seq__12015__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__12803 = cljs.core.next(seq__12015__$1);
var G__12804 = null;
var G__12805 = (0);
var G__12806 = (0);
seq__12015 = G__12803;
chunk__12016 = G__12804;
count__12017 = G__12805;
i__12018 = G__12806;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12028 = arguments.length;
switch (G__12028) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12032 = arguments.length;
switch (G__12032) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12041 = arguments.length;
switch (G__12041) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12821 = arguments.length;
var i__5727__auto___12822 = (0);
while(true){
if((i__5727__auto___12822 < len__5726__auto___12821)){
args__5732__auto__.push((arguments[i__5727__auto___12822]));

var G__12824 = (i__5727__auto___12822 + (1));
i__5727__auto___12822 = G__12824;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12051_12828 = cljs.core.seq(nodes);
var chunk__12052_12829 = null;
var count__12053_12830 = (0);
var i__12054_12831 = (0);
while(true){
if((i__12054_12831 < count__12053_12830)){
var node_12832 = chunk__12052_12829.cljs$core$IIndexed$_nth$arity$2(null, i__12054_12831);
fragment.appendChild(shadow.dom._to_dom(node_12832));


var G__12833 = seq__12051_12828;
var G__12834 = chunk__12052_12829;
var G__12835 = count__12053_12830;
var G__12836 = (i__12054_12831 + (1));
seq__12051_12828 = G__12833;
chunk__12052_12829 = G__12834;
count__12053_12830 = G__12835;
i__12054_12831 = G__12836;
continue;
} else {
var temp__5804__auto___12837 = cljs.core.seq(seq__12051_12828);
if(temp__5804__auto___12837){
var seq__12051_12838__$1 = temp__5804__auto___12837;
if(cljs.core.chunked_seq_QMARK_(seq__12051_12838__$1)){
var c__5525__auto___12839 = cljs.core.chunk_first(seq__12051_12838__$1);
var G__12840 = cljs.core.chunk_rest(seq__12051_12838__$1);
var G__12841 = c__5525__auto___12839;
var G__12842 = cljs.core.count(c__5525__auto___12839);
var G__12843 = (0);
seq__12051_12828 = G__12840;
chunk__12052_12829 = G__12841;
count__12053_12830 = G__12842;
i__12054_12831 = G__12843;
continue;
} else {
var node_12845 = cljs.core.first(seq__12051_12838__$1);
fragment.appendChild(shadow.dom._to_dom(node_12845));


var G__12846 = cljs.core.next(seq__12051_12838__$1);
var G__12847 = null;
var G__12848 = (0);
var G__12849 = (0);
seq__12051_12828 = G__12846;
chunk__12052_12829 = G__12847;
count__12053_12830 = G__12848;
i__12054_12831 = G__12849;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12050){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12050));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12057_12859 = cljs.core.seq(scripts);
var chunk__12058_12860 = null;
var count__12059_12861 = (0);
var i__12060_12862 = (0);
while(true){
if((i__12060_12862 < count__12059_12861)){
var vec__12071_12863 = chunk__12058_12860.cljs$core$IIndexed$_nth$arity$2(null, i__12060_12862);
var script_tag_12864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071_12863,(0),null);
var script_body_12865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12071_12863,(1),null);
eval(script_body_12865);


var G__12866 = seq__12057_12859;
var G__12867 = chunk__12058_12860;
var G__12868 = count__12059_12861;
var G__12869 = (i__12060_12862 + (1));
seq__12057_12859 = G__12866;
chunk__12058_12860 = G__12867;
count__12059_12861 = G__12868;
i__12060_12862 = G__12869;
continue;
} else {
var temp__5804__auto___12870 = cljs.core.seq(seq__12057_12859);
if(temp__5804__auto___12870){
var seq__12057_12871__$1 = temp__5804__auto___12870;
if(cljs.core.chunked_seq_QMARK_(seq__12057_12871__$1)){
var c__5525__auto___12872 = cljs.core.chunk_first(seq__12057_12871__$1);
var G__12873 = cljs.core.chunk_rest(seq__12057_12871__$1);
var G__12874 = c__5525__auto___12872;
var G__12875 = cljs.core.count(c__5525__auto___12872);
var G__12876 = (0);
seq__12057_12859 = G__12873;
chunk__12058_12860 = G__12874;
count__12059_12861 = G__12875;
i__12060_12862 = G__12876;
continue;
} else {
var vec__12074_12877 = cljs.core.first(seq__12057_12871__$1);
var script_tag_12878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_12877,(0),null);
var script_body_12879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12074_12877,(1),null);
eval(script_body_12879);


var G__12880 = cljs.core.next(seq__12057_12871__$1);
var G__12881 = null;
var G__12882 = (0);
var G__12883 = (0);
seq__12057_12859 = G__12880;
chunk__12058_12860 = G__12881;
count__12059_12861 = G__12882;
i__12060_12862 = G__12883;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12079){
var vec__12080 = p__12079;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12080,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12093 = arguments.length;
switch (G__12093) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12119 = cljs.core.seq(style_keys);
var chunk__12120 = null;
var count__12121 = (0);
var i__12122 = (0);
while(true){
if((i__12122 < count__12121)){
var it = chunk__12120.cljs$core$IIndexed$_nth$arity$2(null, i__12122);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12891 = seq__12119;
var G__12892 = chunk__12120;
var G__12893 = count__12121;
var G__12894 = (i__12122 + (1));
seq__12119 = G__12891;
chunk__12120 = G__12892;
count__12121 = G__12893;
i__12122 = G__12894;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12119);
if(temp__5804__auto__){
var seq__12119__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12119__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12119__$1);
var G__12895 = cljs.core.chunk_rest(seq__12119__$1);
var G__12896 = c__5525__auto__;
var G__12897 = cljs.core.count(c__5525__auto__);
var G__12898 = (0);
seq__12119 = G__12895;
chunk__12120 = G__12896;
count__12121 = G__12897;
i__12122 = G__12898;
continue;
} else {
var it = cljs.core.first(seq__12119__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12900 = cljs.core.next(seq__12119__$1);
var G__12901 = null;
var G__12902 = (0);
var G__12903 = (0);
seq__12119 = G__12900;
chunk__12120 = G__12901;
count__12121 = G__12902;
i__12122 = G__12903;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12136,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12158 = k12136;
var G__12158__$1 = (((G__12158 instanceof cljs.core.Keyword))?G__12158.fqn:null);
switch (G__12158__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12136,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12161){
var vec__12163 = p__12161;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12163,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12134){
var self__ = this;
var G__12134__$1 = this;
return (new cljs.core.RecordIter((0),G__12134__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12137,other12138){
var self__ = this;
var this12137__$1 = this;
return (((!((other12138 == null)))) && ((((this12137__$1.constructor === other12138.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.x,other12138.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.y,other12138.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12137__$1.__extmap,other12138.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12136){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12194 = k12136;
var G__12194__$1 = (((G__12194 instanceof cljs.core.Keyword))?G__12194.fqn:null);
switch (G__12194__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12136);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12134){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12196 = cljs.core.keyword_identical_QMARK_;
var expr__12197 = k__5309__auto__;
if(cljs.core.truth_((pred__12196.cljs$core$IFn$_invoke$arity$2 ? pred__12196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12197) : pred__12196.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__12197)))){
return (new shadow.dom.Coordinate(G__12134,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12196.cljs$core$IFn$_invoke$arity$2 ? pred__12196.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12197) : pred__12196.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__12197)))){
return (new shadow.dom.Coordinate(self__.x,G__12134,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12134),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12134){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12134,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12147){
var extmap__5342__auto__ = (function (){var G__12214 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12147,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12147)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12214);
} else {
return G__12214;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12147),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12147),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12246,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12254 = k12246;
var G__12254__$1 = (((G__12254 instanceof cljs.core.Keyword))?G__12254.fqn:null);
switch (G__12254__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12246,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12261){
var vec__12263 = p__12261;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12263,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12263,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12245){
var self__ = this;
var G__12245__$1 = this;
return (new cljs.core.RecordIter((0),G__12245__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12247,other12248){
var self__ = this;
var this12247__$1 = this;
return (((!((other12248 == null)))) && ((((this12247__$1.constructor === other12248.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12247__$1.w,other12248.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12247__$1.h,other12248.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12247__$1.__extmap,other12248.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12246){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12323 = k12246;
var G__12323__$1 = (((G__12323 instanceof cljs.core.Keyword))?G__12323.fqn:null);
switch (G__12323__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12246);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12245){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12324 = cljs.core.keyword_identical_QMARK_;
var expr__12325 = k__5309__auto__;
if(cljs.core.truth_((pred__12324.cljs$core$IFn$_invoke$arity$2 ? pred__12324.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12325) : pred__12324.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__12325)))){
return (new shadow.dom.Size(G__12245,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12324.cljs$core$IFn$_invoke$arity$2 ? pred__12324.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12325) : pred__12324.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__12325)))){
return (new shadow.dom.Size(self__.w,G__12245,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12245),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12245){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12245,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12251){
var extmap__5342__auto__ = (function (){var G__12328 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12251,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12251)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12328);
} else {
return G__12328;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12251),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12251),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12947 = (i + (1));
var G__12948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12947;
ret = G__12948;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12333){
var vec__12334 = p__12333;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12334,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12338 = arguments.length;
switch (G__12338) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12950 = ps;
var G__12951 = (i + (1));
el__$1 = G__12950;
i = G__12951;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12381 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12381,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12381,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12381,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12392_12953 = cljs.core.seq(props);
var chunk__12393_12954 = null;
var count__12394_12955 = (0);
var i__12395_12956 = (0);
while(true){
if((i__12395_12956 < count__12394_12955)){
var vec__12420_12958 = chunk__12393_12954.cljs$core$IIndexed$_nth$arity$2(null, i__12395_12956);
var k_12959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420_12958,(0),null);
var v_12960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420_12958,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12959);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12959),v_12960);


var G__12964 = seq__12392_12953;
var G__12965 = chunk__12393_12954;
var G__12966 = count__12394_12955;
var G__12967 = (i__12395_12956 + (1));
seq__12392_12953 = G__12964;
chunk__12393_12954 = G__12965;
count__12394_12955 = G__12966;
i__12395_12956 = G__12967;
continue;
} else {
var temp__5804__auto___12968 = cljs.core.seq(seq__12392_12953);
if(temp__5804__auto___12968){
var seq__12392_12969__$1 = temp__5804__auto___12968;
if(cljs.core.chunked_seq_QMARK_(seq__12392_12969__$1)){
var c__5525__auto___12971 = cljs.core.chunk_first(seq__12392_12969__$1);
var G__12972 = cljs.core.chunk_rest(seq__12392_12969__$1);
var G__12973 = c__5525__auto___12971;
var G__12974 = cljs.core.count(c__5525__auto___12971);
var G__12975 = (0);
seq__12392_12953 = G__12972;
chunk__12393_12954 = G__12973;
count__12394_12955 = G__12974;
i__12395_12956 = G__12975;
continue;
} else {
var vec__12428_12977 = cljs.core.first(seq__12392_12969__$1);
var k_12978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428_12977,(0),null);
var v_12979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12428_12977,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12978);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12978),v_12979);


var G__12981 = cljs.core.next(seq__12392_12969__$1);
var G__12982 = null;
var G__12983 = (0);
var G__12984 = (0);
seq__12392_12953 = G__12981;
chunk__12393_12954 = G__12982;
count__12394_12955 = G__12983;
i__12395_12956 = G__12984;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12437 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
var seq__12440_12994 = cljs.core.seq(node_children);
var chunk__12442_12995 = null;
var count__12443_12996 = (0);
var i__12444_12997 = (0);
while(true){
if((i__12444_12997 < count__12443_12996)){
var child_struct_12999 = chunk__12442_12995.cljs$core$IIndexed$_nth$arity$2(null, i__12444_12997);
if((!((child_struct_12999 == null)))){
if(typeof child_struct_12999 === 'string'){
var text_13000 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13000),child_struct_12999].join(''));
} else {
var children_13001 = shadow.dom.svg_node(child_struct_12999);
if(cljs.core.seq_QMARK_(children_13001)){
var seq__12485_13002 = cljs.core.seq(children_13001);
var chunk__12487_13003 = null;
var count__12488_13004 = (0);
var i__12489_13005 = (0);
while(true){
if((i__12489_13005 < count__12488_13004)){
var child_13006 = chunk__12487_13003.cljs$core$IIndexed$_nth$arity$2(null, i__12489_13005);
if(cljs.core.truth_(child_13006)){
node.appendChild(child_13006);


var G__13007 = seq__12485_13002;
var G__13008 = chunk__12487_13003;
var G__13009 = count__12488_13004;
var G__13010 = (i__12489_13005 + (1));
seq__12485_13002 = G__13007;
chunk__12487_13003 = G__13008;
count__12488_13004 = G__13009;
i__12489_13005 = G__13010;
continue;
} else {
var G__13011 = seq__12485_13002;
var G__13012 = chunk__12487_13003;
var G__13013 = count__12488_13004;
var G__13014 = (i__12489_13005 + (1));
seq__12485_13002 = G__13011;
chunk__12487_13003 = G__13012;
count__12488_13004 = G__13013;
i__12489_13005 = G__13014;
continue;
}
} else {
var temp__5804__auto___13015 = cljs.core.seq(seq__12485_13002);
if(temp__5804__auto___13015){
var seq__12485_13016__$1 = temp__5804__auto___13015;
if(cljs.core.chunked_seq_QMARK_(seq__12485_13016__$1)){
var c__5525__auto___13018 = cljs.core.chunk_first(seq__12485_13016__$1);
var G__13019 = cljs.core.chunk_rest(seq__12485_13016__$1);
var G__13020 = c__5525__auto___13018;
var G__13021 = cljs.core.count(c__5525__auto___13018);
var G__13022 = (0);
seq__12485_13002 = G__13019;
chunk__12487_13003 = G__13020;
count__12488_13004 = G__13021;
i__12489_13005 = G__13022;
continue;
} else {
var child_13023 = cljs.core.first(seq__12485_13016__$1);
if(cljs.core.truth_(child_13023)){
node.appendChild(child_13023);


var G__13024 = cljs.core.next(seq__12485_13016__$1);
var G__13025 = null;
var G__13026 = (0);
var G__13027 = (0);
seq__12485_13002 = G__13024;
chunk__12487_13003 = G__13025;
count__12488_13004 = G__13026;
i__12489_13005 = G__13027;
continue;
} else {
var G__13029 = cljs.core.next(seq__12485_13016__$1);
var G__13030 = null;
var G__13031 = (0);
var G__13032 = (0);
seq__12485_13002 = G__13029;
chunk__12487_13003 = G__13030;
count__12488_13004 = G__13031;
i__12489_13005 = G__13032;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13001);
}
}


var G__13033 = seq__12440_12994;
var G__13034 = chunk__12442_12995;
var G__13035 = count__12443_12996;
var G__13036 = (i__12444_12997 + (1));
seq__12440_12994 = G__13033;
chunk__12442_12995 = G__13034;
count__12443_12996 = G__13035;
i__12444_12997 = G__13036;
continue;
} else {
var G__13038 = seq__12440_12994;
var G__13039 = chunk__12442_12995;
var G__13040 = count__12443_12996;
var G__13041 = (i__12444_12997 + (1));
seq__12440_12994 = G__13038;
chunk__12442_12995 = G__13039;
count__12443_12996 = G__13040;
i__12444_12997 = G__13041;
continue;
}
} else {
var temp__5804__auto___13042 = cljs.core.seq(seq__12440_12994);
if(temp__5804__auto___13042){
var seq__12440_13044__$1 = temp__5804__auto___13042;
if(cljs.core.chunked_seq_QMARK_(seq__12440_13044__$1)){
var c__5525__auto___13045 = cljs.core.chunk_first(seq__12440_13044__$1);
var G__13046 = cljs.core.chunk_rest(seq__12440_13044__$1);
var G__13047 = c__5525__auto___13045;
var G__13048 = cljs.core.count(c__5525__auto___13045);
var G__13049 = (0);
seq__12440_12994 = G__13046;
chunk__12442_12995 = G__13047;
count__12443_12996 = G__13048;
i__12444_12997 = G__13049;
continue;
} else {
var child_struct_13051 = cljs.core.first(seq__12440_13044__$1);
if((!((child_struct_13051 == null)))){
if(typeof child_struct_13051 === 'string'){
var text_13052 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13052),child_struct_13051].join(''));
} else {
var children_13053 = shadow.dom.svg_node(child_struct_13051);
if(cljs.core.seq_QMARK_(children_13053)){
var seq__12498_13054 = cljs.core.seq(children_13053);
var chunk__12500_13055 = null;
var count__12501_13056 = (0);
var i__12502_13057 = (0);
while(true){
if((i__12502_13057 < count__12501_13056)){
var child_13058 = chunk__12500_13055.cljs$core$IIndexed$_nth$arity$2(null, i__12502_13057);
if(cljs.core.truth_(child_13058)){
node.appendChild(child_13058);


var G__13059 = seq__12498_13054;
var G__13060 = chunk__12500_13055;
var G__13061 = count__12501_13056;
var G__13062 = (i__12502_13057 + (1));
seq__12498_13054 = G__13059;
chunk__12500_13055 = G__13060;
count__12501_13056 = G__13061;
i__12502_13057 = G__13062;
continue;
} else {
var G__13064 = seq__12498_13054;
var G__13065 = chunk__12500_13055;
var G__13066 = count__12501_13056;
var G__13067 = (i__12502_13057 + (1));
seq__12498_13054 = G__13064;
chunk__12500_13055 = G__13065;
count__12501_13056 = G__13066;
i__12502_13057 = G__13067;
continue;
}
} else {
var temp__5804__auto___13068__$1 = cljs.core.seq(seq__12498_13054);
if(temp__5804__auto___13068__$1){
var seq__12498_13069__$1 = temp__5804__auto___13068__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12498_13069__$1)){
var c__5525__auto___13071 = cljs.core.chunk_first(seq__12498_13069__$1);
var G__13072 = cljs.core.chunk_rest(seq__12498_13069__$1);
var G__13073 = c__5525__auto___13071;
var G__13074 = cljs.core.count(c__5525__auto___13071);
var G__13075 = (0);
seq__12498_13054 = G__13072;
chunk__12500_13055 = G__13073;
count__12501_13056 = G__13074;
i__12502_13057 = G__13075;
continue;
} else {
var child_13076 = cljs.core.first(seq__12498_13069__$1);
if(cljs.core.truth_(child_13076)){
node.appendChild(child_13076);


var G__13077 = cljs.core.next(seq__12498_13069__$1);
var G__13078 = null;
var G__13079 = (0);
var G__13080 = (0);
seq__12498_13054 = G__13077;
chunk__12500_13055 = G__13078;
count__12501_13056 = G__13079;
i__12502_13057 = G__13080;
continue;
} else {
var G__13081 = cljs.core.next(seq__12498_13069__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__12498_13054 = G__13081;
chunk__12500_13055 = G__13082;
count__12501_13056 = G__13083;
i__12502_13057 = G__13084;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13053);
}
}


var G__13085 = cljs.core.next(seq__12440_13044__$1);
var G__13086 = null;
var G__13087 = (0);
var G__13088 = (0);
seq__12440_12994 = G__13085;
chunk__12442_12995 = G__13086;
count__12443_12996 = G__13087;
i__12444_12997 = G__13088;
continue;
} else {
var G__13089 = cljs.core.next(seq__12440_13044__$1);
var G__13090 = null;
var G__13091 = (0);
var G__13092 = (0);
seq__12440_12994 = G__13089;
chunk__12442_12995 = G__13090;
count__12443_12996 = G__13091;
i__12444_12997 = G__13092;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13095 = arguments.length;
var i__5727__auto___13096 = (0);
while(true){
if((i__5727__auto___13096 < len__5726__auto___13095)){
args__5732__auto__.push((arguments[i__5727__auto___13096]));

var G__13097 = (i__5727__auto___13096 + (1));
i__5727__auto___13096 = G__13097;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12530){
var G__12531 = cljs.core.first(seq12530);
var seq12530__$1 = cljs.core.next(seq12530);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12531,seq12530__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
