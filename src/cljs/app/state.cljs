(ns app.state
  (:require [reagent.core :as r]))

(defonce state (r/atom {:title (str "Kathina " (.getFullYear (js/Date.)))
                        :width 230
                        :height 100
                        :params {:lang :en}}))
