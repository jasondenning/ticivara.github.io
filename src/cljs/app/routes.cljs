(ns app.routes
  (:require
   [app.state :as state]
   [reagent.session :as session]
   [secretary.core :as secretary :include-macros true]
   [clojure.string :as string]))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute home-path "/:lang" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :home))

(secretary/defroute sabong-path "/:lang/sabong" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sabong))

(secretary/defroute civara-path "/:lang/civara" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :civara))

(secretary/defroute sanghati-path "/:lang/sanghati" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :sanghati))

(secretary/defroute borders-path "/:lang/borders" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :borders))

(secretary/defroute tools-path "/:lang/tools" [lang]
  (swap! state/state assoc-in [:params :lang] (keyword lang))
  (session/put! :page :tools))

;; === Default path ===

(secretary/defroute default-path "*" []
  (swap! state/state assoc-in [:params :lang] :en)
  (session/put! :page :home))
