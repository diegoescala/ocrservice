goog.provide('app.views.pages.dashboard');
app.views.pages.dashboard.dashboard_page = (function app$views$pages$dashboard$dashboard_page(){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.min-h-screen.bg-gray-50.dark:bg-gray-900","div.min-h-screen.bg-gray-50.dark:bg-gray-900",2001422263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.components.navbar.navbar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.max-w-7xl.mx-auto.py-12.px-4.sm:px-6.lg:px-8","main.max-w-7xl.mx-auto.py-12.px-4.sm:px-6.lg:px-8",1488620573),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prose.dark:prose-invert.max-w-none","div.prose.dark:prose-invert.max-w-none",1244893008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Welcome ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-6","div.mt-6",1928257716),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Dashboard Content"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Protected dashboard content here."], null)], null)], null)], null)], null);
});

//# sourceMappingURL=app.views.pages.dashboard.js.map