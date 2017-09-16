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
         [:h3.s-title (text :civara)]
         [:div.docs-note
          [:h5.s-title {:id "civara-pattern"} (text :pattern)]
          [:p "..."]]

         [:div.docs-note
          [:h5.s-title {:id "civara-guide"} (text :guide)]
          [:div.render-markdown
           (text :civara-guide)]]]
        ))}))
