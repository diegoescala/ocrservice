(ns app.views.pages.home
  (:require [app.views.components.navbar :refer [navbar]]))

(defn home-page []
  [:div.min-h-screen.bg-gray-50.dark:bg-gray-900
   [navbar]
   [:main.max-w-7xl.mx-auto.py-12.px-4.sm:px-6.lg:px-8
    [:div.text-center
     [:h1.text-4xl.font-bold.text-gray-900.dark:text-white
      "Welcome to Your App"]
     [:p.mt-4.text-xl.text-gray-600.dark:text-gray-300
      "This is a SEO-friendly, fast-rendering web application built with ClojureScript."]]]]) 