(ns app.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :current-route
 (fn [db]
   (:current-route db)))

(rf/reg-sub
 :user
 (fn [db]
   (:user db)))

(rf/reg-sub
 :loading?
 (fn [db]
   (:loading db)))

(rf/reg-sub
 :dark-mode?
 (fn [db]
   (:dark-mode? db))) 