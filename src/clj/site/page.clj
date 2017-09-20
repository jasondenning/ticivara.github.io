(ns site.page
  (:require [hiccup.page :as hp]))

(defn render [data]
  (hp/html5 {:lang "en"}
   [:head
    [:title "Guide"];; FIXME
    [:meta {:charset "utf-8"}]
    [:link {:rel "stylesheet" :type "text/css" :href "/main.css"}]
    [:link {:rel "icon" :href "/favicon.ico"}]]

   [:body
    [:div.s-container.container
     [:div.columns
      [:div#content.s-content {:style "max-width: 900px; margin: 0 auto;"}
       (get-in data [:entry :content])
       ]]]
    ]))
