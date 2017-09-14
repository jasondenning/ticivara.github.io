(ns app.civara
  (:require
   ;; core libs
   [reagent.core :as r]
   [clojure.string :as string]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn <content-civara> [data]
  (r/create-class
   {:component-did-mount
    (fn [] (h/load-text :#civara-guide-text :civara-guide nil))
    :component-will-update
    (fn [] (h/load-text :#civara-guide-text :civara-guide nil))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))]

        [:div.container {:id "civara"}
         [:h3.s-title
          [:a {:href "#civara", :class "anchor", :aria-hidden "true"} "#"] "Civara"]
         [:div.docs-note
          [:h5.s-title {:id "civara-pattern"}
           [:a {:href "#civara-pattern", :class "anchor", :aria-hidden "true"} "#"] "Pattern"]
          [:p "..."]]

         [:div.docs-note
          [:h5.s-title {:id "civara-guide"}
           [:a {:href "#civara-guide", :class "anchor", :aria-hidden "true"} "#"] "Guide"]
          [:div#civara-guide-text]
          ]])
      )}))
