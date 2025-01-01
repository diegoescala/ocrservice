goog.provide('app.core');
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.core.app = (function app$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app-container","div.app-container",-164087897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.routes.router_component], null)], null);
});
app.core.mount_root = (function app$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(app.core.root))){
} else {
cljs.core.reset_BANG_(app.core.root,reagent.dom.client.create_root(root_el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app], null));
});
app.core.init = (function app$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

app.routes.init_routes_BANG_();

return app.core.mount_root();
});

//# sourceMappingURL=app.core.js.map
