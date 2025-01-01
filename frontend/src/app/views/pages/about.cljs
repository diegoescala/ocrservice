(ns app.views.pages.about
  (:require [app.views.components.navbar :refer [navbar]]))

(defn about-page []
  [:div.min-h-screen.bg-gray-50.dark:bg-gray-900
   [navbar]
   [:main.max-w-7xl.mx-auto.py-12.px-4.sm:px-6.lg:px-8
    [:div.prose.dark:prose-invert.max-w-none
     [:h1 "About Us"]
     [:p "Your company description here."]]]]) 