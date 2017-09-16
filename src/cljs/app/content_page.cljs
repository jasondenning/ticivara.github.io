(ns app.content-page
  (:require
   ;; core libs
   [reagent.core :as r]
   [reagent.session :as session]
   [clojure.string :as string]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn page-update [data]
  (h/render-markdown))

(defn <content-page> [data]
  (r/create-class
   {:component-did-mount (fn [] (page-update data))
    :component-did-update (fn [] (page-update data))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))
            title (string/capitalize (subs (str (session/get :page)) 1))
            text-key (keyword (str (subs (str (session/get :page)) 1)
                                   "-content"))]

        [:div.container {:id "page"}
         [:h3.s-title
          [:a {:href "#page", :class "anchor", :aria-hidden "true"} "#"] title]
         [:div.render-markdown
          (text text-key)]]
        ))}))
