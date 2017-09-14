(ns app.state
  (:require [reagent.core :as r]))

(defonce state
  (r/atom {:sabong {:title (str "Sabong " (.getFullYear (js/Date.)))
                    :width 230
                    :height 100}
           :civara {:title (str "Civara " (.getFullYear (js/Date.)))
                    :width 355
                    :height 214}
           :sanghati {:title (str "Sanghati " (.getFullYear (js/Date.)))
                      :width 355
                      :height 214}
           :params {:lang :en}}))
