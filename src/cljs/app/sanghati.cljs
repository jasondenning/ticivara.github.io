(ns app.sanghati
  (:require
   ;; core libs
   [reagent.core :as r]
   [clojure.string :as string]
   ;; app
   [app.helpers :refer [load-text]]
   [app.text :refer [text]]))

(defn <content-sanghati> [data]
  (r/create-class
   {:component-did-mount
    (fn [] (load-text :#sanghati-guide-text :sanghati-guide nil))
    :component-will-update
    (fn [] (load-text :#sanghati-guide-text :sanghati-guide nil))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))]

      [:div.container {:id "sanghati"}
       [:h3.s-title
        [:a {:href "#sanghati", :class "anchor", :aria-hidden "true"} "#"] "Sanghati"]
       [:div.docs-note
        [:h5.s-title {:id "sanghati-pattern"}
         [:a {:href "#sanghati-pattern", :class "anchor", :aria-hidden "true"} "#"] "Pattern"]
        [:p "..."]]
       [:div.docs-note
        [:h5.s-title {:id "sanghati-guide"}
         [:a {:href "#sanghati-guide", :class "anchor", :aria-hidden "true"} "#"] "Guide"]
        [:div#sanghati-guide-text]
        ]])
    )}))
