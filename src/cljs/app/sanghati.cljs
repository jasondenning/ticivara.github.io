(ns app.sanghati
  (:require
   ;; core libs
   [reagent.core :as r]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   ;; features
   [monet.canvas :as canvas]
   [markdown.core :refer [md->html]]
   [cljsjs.pdfmake]
   [cljsjs.pdfmakefonts]
   ;; app
   [app.helpers :refer [load-text]]
   [app.text :refer [text]]))

(defn draw-sanghati-pattern [data]
  (let [pos-pattern-width 282
        pos-pattern-height 167
        pattern-scale 11.8

        ;; draws text with x y from the bottom left corner of the pattern image
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* x sc)
                                   y (* (- pos-pattern-height y) sc)]
                               (canvas/font-style ctx "12px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        ;; canvas
        canvas-dom (.getElementById js/document "sanghati-pattern-canvas")
        monet-canvas (canvas/init canvas-dom "2d")
        ctx (canvas/get-context canvas-dom "2d")
        img (js/Image.)
        _ (aset img "src" "img/sanghati-pattern.svg")]
    (canvas/add-entity
     monet-canvas
     :background
     (canvas/entity
      nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img {:x 0 :y 0 :w (* pos-pattern-width pattern-scale)
                                    :h (* pos-pattern-height pattern-scale)})

            ))))
    ))

(defn <content-sanghati> [data]
  (r/create-class
   {:component-did-mount
    (fn [] (load-text :#sanghati-guide-text :sanghati-guide (fn [] (draw-sanghati-pattern data))))
    :component-will-update
    (fn [] (load-text :#sanghati-guide-text :sanghati-guide (fn [] (draw-sanghati-pattern data))))

    :reagent-render
    (fn []
      (let [;; this triggers React componentWillUpdate()
            _ (:lang (:params @data))
            download-pdf
            (fn []
              (let [canvas-dom (sel1 :#sanghati-pattern-canvas)
                    img (.toDataURL canvas-dom)
                    ;; TODO title (:title @data)
                    title "sanghati-pattern"
                    filename (str (if (string/blank? title) "robe-pattern" title) ".pdf")
                    doc (clj->js {:pageSize "A4"
                                  :pageOrientation "landscape"
                                  :pageMargins [0 0 0 0]
                                  :content [{:image img
                                             :width 860
                                             :margin [0 0 0 0]}]
                                  :info {:title title}})]
                (.download (.createPdf js/pdfMake doc) filename)))]

      [:div.container {:id "sanghati"}
       [:h3.s-title
        [:a {:href "#sanghati", :class "anchor", :aria-hidden "true"} "#"] "Sanghati"]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-pattern"}
         [:a {:href "#sanghati-pattern", :class "anchor", :aria-hidden "true"} "#"] "Pattern"]

       [:div.docs-note
        [:button.btn.btn-primary {:on-click (fn [e] (download-pdf))} "Download PDF"]]

        [:canvas {:id "sanghati-pattern-canvas" :width 3500 :height 2400 :style {:max-width "1600px"}}]]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-guide"}
         [:a {:href "#sanghati-guide", :class "anchor", :aria-hidden "true"} "#"] "Guide"]
        [:div#sanghati-guide-text]
        ]])
    )}))
