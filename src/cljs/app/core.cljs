(ns app.core
  (:require
   ;; core libs
   [reagent.core :as r]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   ;; browser repl
   [weasel.repl :as repl]
   ;; routing
   [reagent.session :as session]
   [secretary.core :as secretary :refer-macros [defroute]]
   [goog.events :as events]
   [goog.history.EventType :as HistoryEventType]
   ;; app
   [app.state :as state]
   [app.text :as text]
   [app.helpers :as helpers]
   [app.routes :as routes]
   [app.elements :refer [<container>]]
   [app.home :refer [<content-home>]]
   [app.sabong :refer [<content-sabong>]]
   [app.civara :refer [<content-civara>]]
   [app.sanghati :refer [<content-sanghati>]])
  ;; history for routing
  (:import goog.History))

;; -------------------------
;; Pages

(defn <page-home> []
  (fn [] [<container> <content-home> state/state]))

(defn <page-sabong> []
  (fn [] [<container> <content-sabong> state/state]))

(defn <page-civara> []
  (fn [] [<container> <content-civara> state/state]))

(defn <page-sanghati> []
  (fn [] [<container> <content-sanghati> state/state]))

(def pages
  {:home #'<page-home>
   :sabong #'<page-sabong>
   :civara #'<page-civara>
   :sanghati #'<page-sanghati>
   })

(defn get-pagekey []
  (let [p (session/get :page)]
    (cond (not (nil? p)) p
          :else :home)))

(defn <page> []
  (fn [] [(pages (get-pagekey))]))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     HistoryEventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn mount-components []
  (r/render [#'<page>] (.getElementById js/document "app")))

(defn main []
  (hook-browser-navigation!)
  (mount-components))

;;(when-not (repl/alive?)
;;  (repl/connect "ws://localhost:9001"))
