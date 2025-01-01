(ns app.views.pages.dashboard
  (:require [re-frame.core :as rf]
            [app.views.components.navbar :refer [navbar]]))

(defn dashboard-page []
  (let [user @(rf/subscribe [:user])]
    [:div.min-h-screen.bg-gray-50.dark:bg-gray-900
     [navbar]
     [:main.max-w-7xl.mx-auto.py-12.px-4.sm:px-6.lg:px-8
      [:div.prose.dark:prose-invert.max-w-none
       [:h1 (str "Welcome " (:name user))]
       [:div.mt-6
        [:h2 "Dashboard Content"]
        [:p "Protected dashboard content here."]]]]])) 