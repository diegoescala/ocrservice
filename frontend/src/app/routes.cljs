(ns app.routes
  (:require [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [re-frame.core :as re-frame]
            [app.views.pages.home :refer [home-page]]
            [app.views.pages.about :refer [about-page]]
            [app.views.pages.dashboard :refer [dashboard-page]]))

(def routes
  [["/"
    {:name :home
     :view home-page}]
   ["/about"
    {:name :about
     :view about-page}]
   ["/dashboard"
    {:name :dashboard
     :view dashboard-page
     :private? true}]])

(defn router-component []
  (let [current-route @(re-frame/subscribe [:current-route])]
    (when current-route
      (let [view (get-in current-route [:data :view])]
        [view]))))

(defn init-routes! []
  (rfe/start!
   (rf/router routes {:data {:coercion rcs/coercion}})
   (fn [new-match]
     (re-frame/dispatch [:set-current-route new-match]))
   {:use-fragment false})) 