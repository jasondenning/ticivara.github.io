(ns app.helpers
  (:require
   [markdown.core :refer [md->html]]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   [monet.canvas :as canvas]
   [cljsjs.pdfmake]
   [cljsjs.pdfmakefonts]
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

;; page-margins: [left, top, right, bottom]

(defn download-pdf [dom-id title page-margins]
  (let [canvas-dom (sel1 dom-id)
        img (.toDataURL canvas-dom)
        filename (str (if (string/blank? title) "pattern" title) ".pdf")
        doc (clj->js {:pageSize "A4"
                      :pageOrientation "landscape"
                      :pageMargins page-margins
                      :content [{:image img
                                 :width 860
                                 :margin [0 0 0 0]}]
                      :info {:title title}})]
    (.download (.createPdf js/pdfMake doc) filename)))

;; TODO refactor with map
(defn download-pdf-fourpage [dom-ids title page-margins]
  (let [canvas-doms [(sel1 (dom-ids 0))
                     (sel1 (dom-ids 1))
                     (sel1 (dom-ids 2))
                     (sel1 (dom-ids 3))]
        imgs [(.toDataURL (canvas-doms 0))
              (.toDataURL (canvas-doms 1))
              (.toDataURL (canvas-doms 2))
              (.toDataURL (canvas-doms 3))]
        filename (str (if (string/blank? title) "pattern" title) ".pdf")
        doc (clj->js {:pageSize "A4"
                      :pageOrientation "landscape"
                      :pageMargins page-margins
                      :content [{:image (imgs 0) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 1) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 2) :width 860 :margin [0 0 0 0]}
                                {:image (imgs 3) :width 860 :margin [0 0 0 0]}]
                      :info {:title title}})]
    (.download (.createPdf js/pdfMake doc) filename)))

(defn init-canvas [dom-id svg-path]
  (let [canvas-dom (sel1 dom-id)
        monet-canvas (canvas/init canvas-dom "2d")
        ctx (canvas/get-context canvas-dom "2d")
        img (js/Image.)]
    (aset img "src" svg-path)
    [monet-canvas img]))

(defn num-pad [n]
  (let [s (if (re-find #"\." (str n)) (str n) (str n ".0"))
        [_ res] (re-matches #"([0-9]+\.[0-9])[0-9]*" s)]
    res))
