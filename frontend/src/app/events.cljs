(ns app.events
  (:require [re-frame.core :as rf]
            [app.db :as db]))

;; Initialize db
(rf/reg-event-fx
 :initialize-db
 (fn [_ _]
   {:db db/default-db}))

;; Navigation
(rf/reg-event-db
 :set-current-route
 (fn [db [_ route]]
   (assoc db :current-route route)))

;; Auth events
(rf/reg-event-fx
 :login
 (fn [{:keys [db]} [_ credentials]]
   {:db (assoc db :loading true)
    :http-xhrio {:method :post
                 :uri (str (:api-url db) "/login")
                 :params credentials
                 :format :json
                 :response-format :json
                 :on-success [:login-success]
                 :on-failure [:login-failure]}}))

;; Theme toggle
(rf/reg-event-db
 :toggle-theme
 (fn [db [_]]
   (update db :dark-mode? not))) 