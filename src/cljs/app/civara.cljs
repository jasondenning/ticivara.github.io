(ns app.civara
  (:require
   ;; core libs
   [reagent.core :as r]
   [clojure.string :as string]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

;; FIXME Cannot read property 'call' of undefined
(defn civara-update [data]
  (h/render-markdown))

(defn <content-civara> [data]
  (r/create-class
   {:component-did-mount (fn [] (civara-update data))
    :component-did-update (fn [] (civara-update data))

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
          [:div.render-markdown
           (text :civara-guide)]]]
        ))}))
