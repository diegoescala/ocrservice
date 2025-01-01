(ns app.views.components.navbar
  (:require [re-frame.core :as rf]
            [reitit.frontend.easy :as rfe]))

(defn navbar []
  (let [user @(rf/subscribe [:user])
        dark-mode? @(rf/subscribe [:dark-mode?])]
    [:nav.bg-white.dark:bg-gray-800.shadow
     [:div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8
      [:div.flex.justify-between.h-16
       [:div.flex
        [:div.flex-shrink-0.flex.items-center
         [:a {:href (rfe/href :home)} "Logo"]]
        [:div.hidden.sm:ml-6.sm:flex.sm:space-x-8
         [:a.text-gray-900.dark:text-white.px-3.py-2.rounded-md
          {:href (rfe/href :home)} "Home"]
         [:a.text-gray-900.dark:text-white.px-3.py-2.rounded-md
          {:href (rfe/href :about)} "About"]
         (when user
           [:a.text-gray-900.dark:text-white.px-3.py-2.rounded-md
            {:href (rfe/href :dashboard)} "Dashboard"])]]
       [:div.flex.items-center
        [:button.p-2.rounded-md
         {:on-click #(rf/dispatch [:toggle-theme])}
         (if dark-mode? "🌞" "🌙")]
        (if user
          [:button.btn-primary
           {:on-click #(rf/dispatch [:logout])}
           "Logout"]
          [:button.btn-primary
           {:on-click #(rf/dispatch [:show-login-modal])}
           "Login"])]]]])) 