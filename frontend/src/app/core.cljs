(ns app.core
  (:require [reagent.dom.client :as rdom]
            [re-frame.core :as rf]
            [app.config :as config]
            [app.routes :as routes]
            [app.events]
            [app.subs]))

(defonce root (atom nil))

(defn app []
  [:div.app-container
   [routes/router-component]])

(defn ^:dev/after-load mount-root []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdom/create-root root-el)))
    (rdom/render @root [app])))

(defn init []
  (rf/dispatch-sync [:initialize-db])
  (routes/init-routes!)
  (mount-root)) 