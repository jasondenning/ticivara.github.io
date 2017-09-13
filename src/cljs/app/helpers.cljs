(ns app.helpers
  (:require
   [markdown.core :refer [md->html]]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [app.text :refer [text]]
   ))

(defn load-text [dom-id text-key draw]
  (let [c (sel1 dom-id)
        html (md->html (text text-key))]
    (do (aset c "innerHTML" html)
        (doseq [table (sel [dom-id :table])]
          (dommy/add-class! table :table))
        (when (not (nil? draw)) (draw))
        )))
