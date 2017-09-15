(ns app.helpers
  (:require
   [markdown.core :refer [md->html]]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   [monet.canvas :as canvas]
   [cljsjs.pdfmake]
   [cljsjs.pdfmakefonts]
   [decimal.core :as dc]
   [app.text :refer [text]]
   ))

(defn render-markdown []
  (doseq [c (sel :.render-markdown)]
    (let [txt (aget c "innerHTML")
          html (md->html txt)]
      (do (aset c "innerHTML" html)
          (doseq [table (sel [:.render-markdown :table])] (dommy/add-class! table :table))
          (doseq [header (sel [:.render-markdown :h1])] (dommy/add-class! header :s-title))
          (doseq [header (sel [:.render-markdown :h2])] (dommy/add-class! header :s-title))
          (doseq [header (sel [:.render-markdown :h3])] (dommy/add-class! header :s-title))
          (doseq [header (sel [:.render-markdown :h4])] (dommy/add-class! header :s-title))
          (doseq [header (sel [:.render-markdown :h5])] (dommy/add-class! header :s-title))
          (doseq [header (sel [:.render-markdown :h6])] (dommy/add-class! header :s-title))
          ))))

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
  (let [x (dc/decimal n)
        s (dc/to-string (dc/to-decimal-places x 1))
        res (if (re-find #"\." (str s)) (str s) (str s ".0"))]
    res))

(defn calc-shrinking-lengths [robe]
  (let [final-width       (js/Number (:width robe))
        final-height      (js/Number (:height robe))
        buffer-width      (js/Number (:buffer-width robe))
        kusi-width        (js/Number (:kusi-width robe))
        orig-border-width (js/Number (:border-width robe))
        ;; inner width: scaled final width, not including the edge buffers
        ;; iw = fw * (1 + sc / 100)
        inner-width (* final-width (+ 1 (/ (:shrink-percent-width robe) 100)))
        inner-height (* final-height (+ 1 (/ (:shrink-percent-height robe) 100)))
        ;; cut width includes the edge buffers
        cut-width (+ inner-width (* 2 buffer-width))
        cut-height (+ inner-height (* 2 buffer-width))
        ;; mandala width without scaling
        ;; m = (fw - 2b - 4k) / 5
        orig-mandala-width   (/ (- final-width (* 2 orig-border-width) (* 4 kusi-width)) 5)
        orig-mandala-height (/ (- final-height (* 2 orig-border-width) (* 2 kusi-width)) 3)
        ;; orig border to mandala ratio, width and height
        ;; i.e. one border equals this much of a mandala
        ;; r = b / m
        b2m-w (/ orig-border-width orig-mandala-width)
        b2m-h (/ orig-border-width orig-mandala-height)
        ;; remainder cut width, taking the kusi off the cut size
        ;; rw = iw - 4k
        rem-w (- inner-width (* 4 kusi-width))
        rem-h (- inner-height (* 2 kusi-width))
        ;; five mandalas in the remainder width, plus two borders expressed as mandalas
        ;; w = 5m + 2b = 5m + 2rm
        ;; w = (5+2r)m
        ;; w / (5+2r) = m
        mandala-width (/ rem-w (+ 5 (* 2 b2m-w)))
        mandala-height (/ rem-h (+ 3 (* 2 b2m-h)))
        border-width (* mandala-width b2m-w)
        border-height (* mandala-height b2m-h)]

    [cut-width cut-height mandala-width mandala-height border-width border-height]))
