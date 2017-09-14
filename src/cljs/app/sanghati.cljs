(ns app.sanghati
  (:require
   ;; core libs
   [reagent.core :as r]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   ;; features
   [monet.canvas :as canvas]
   ;; app
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn draw-guide [data]
  (let [sanghati (:sanghati @data)
        title (:title sanghati)
        ;; values from the SVG for positioning
        pos-pattern-width 297
        pos-pattern-height 210
        ;; scale
        pattern-scale 11.3

        ;; draws from the TOP LEFT corner
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* x sc)
                                   y (* y sc)]
                               (canvas/font-style ctx "24px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        text-title (fn [ctx s size x y]
                     (let [sc pattern-scale
                           x (* x sc)
                           y (* y sc)]
                       (canvas/font-style ctx (str size " \"Butler\""))
                       (canvas/fill-style ctx "#000000")
                       (canvas/text ctx {:text s :x x :y y})))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        [canvas-guide img-guide] (h/init-canvas :#sanghati-guide-canvas "img/sanghati-guide.svg")]

    (canvas/add-entity
     canvas-guide
     :background
     (canvas/entity
      nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-guide {:x 0 :y 0 :w (* pos-pattern-width pattern-scale) :h (* pos-pattern-height pattern-scale)})

            (text-title title "150px" 20 20)
            (text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 20 45.0)

            ))))

    ))

(defn draw-panels-1 [data]
  (let [sanghati (:sanghati @data)
        title (:title sanghati)
        ;; values from the SVG for positioning
        pos-pattern-width 270
        pos-pattern-height 140
        pos-img-offset-x 5
        pos-img-offset-y 5
        pos-text-offset-x (+ 4.8 pos-img-offset-x)
        pos-text-offset-y (+ -0.7 pos-img-offset-y)
        ;; scale
        pattern-scale 11.8

        ;; draws text with x y from the bottom left corner of the pattern image
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* (+ x pos-text-offset-x) sc)
                                   y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                               (canvas/font-style ctx "24px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        text-title (fn [ctx s size x y]
                     (let [sc pattern-scale
                           x (* (+ x pos-text-offset-x) sc)
                           y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                       (canvas/font-style ctx (str size " \"Butler\""))
                       (canvas/fill-style ctx "#000000")
                       (canvas/text ctx {:text s :x x :y y})))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        [canvas-panels-1 img-1] (h/init-canvas :#sanghati-panels-1-2-3-canvas "img/sanghati-panels-1-2-3.svg")]

    (canvas/add-entity
     canvas-panels-1
     :background
     (canvas/entity
      nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-1 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-title title "60px" 0 0)
            (text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    ))

(defn draw-panels-4 [data]
  (let [sanghati (:sanghati @data)
        title (:title sanghati)
        ;; values from the SVG for positioning
        pos-pattern-width 270
        pos-pattern-height 140
        pos-img-offset-x 5
        pos-img-offset-y 5
        pos-text-offset-x (+ 4.8 pos-img-offset-x)
        pos-text-offset-y (+ -3.0 pos-img-offset-y)
        ;; scale
        pattern-scale 11.8

        ;; draws text with x y from the bottom left corner of the pattern image
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* (+ x pos-text-offset-x) sc)
                                   y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                               (canvas/font-style ctx "24px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        text-title (fn [ctx s size x y]
                     (let [sc pattern-scale
                           x (* (+ x pos-text-offset-x) sc)
                           y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                       (canvas/font-style ctx (str size " \"Butler\""))
                       (canvas/fill-style ctx "#000000")
                       (canvas/text ctx {:text s :x x :y y})))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        [canvas-panels-4 img-4] (h/init-canvas :#sanghati-panels-4-5-6-canvas "img/sanghati-panels-4-5-6.svg")]

    (canvas/add-entity
     canvas-panels-4
     :background
     (canvas/entity
      nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-4 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-title title "60px" 0 0)
            (text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    ))

(defn draw-panels-7 [data]
  (let [sanghati (:sanghati @data)
        title (:title sanghati)
        ;; values from the SVG for positioning
        pos-pattern-width 270
        pos-pattern-height 140
        pos-img-offset-x 5
        pos-img-offset-y 5
        pos-text-offset-x (+ 4.8 pos-img-offset-x)
        pos-text-offset-y (+ -0.7 pos-img-offset-y)
        ;; scale
        pattern-scale 11.8

        ;; draws text with x y from the bottom left corner of the pattern image
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* (+ x pos-text-offset-x) sc)
                                   y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                               (canvas/font-style ctx "24px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        text-title (fn [ctx s size x y]
                     (let [sc pattern-scale
                           x (* (+ x pos-text-offset-x) sc)
                           y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                       (canvas/font-style ctx (str size " \"Butler\""))
                       (canvas/fill-style ctx "#000000")
                       (canvas/text ctx {:text s :x x :y y})))

        text-num (fn [ctx s x y]
                   (text ctx (h/num-pad s) x y))

        [canvas-panels-7 img-7] (h/init-canvas :#sanghati-panels-7-8-9-canvas "img/sanghati-panels-7-8-9.svg")]

    (canvas/add-entity
     canvas-panels-7
     :background
     (canvas/entity
      nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img-7 {:x (* pos-img-offset-x pattern-scale)
                                      :y (* pos-img-offset-y pattern-scale)
                                      :w (* pos-pattern-width pattern-scale)
                                      :h (* pos-pattern-height pattern-scale)})

            (text-title title "60px" 0 0)
            (text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    ))

(defn draw-sanghati-pattern [data]
  (draw-guide data)
  (draw-panels-1 data)
  (draw-panels-4 data)
  (draw-panels-7 data))

(defn sanghati-update [data]
  (h/load-text :#sanghati-guide-text :sanghati-guide (fn [] (draw-sanghati-pattern data))))

(defn <content-sanghati> [data]
  (r/create-class
   {:component-did-mount (fn [] (sanghati-update data))
    :component-will-update (fn [] (sanghati-update data))

    :reagent-render
    (fn []
      (let [sanghati (:sanghati @data)]

      [:div.container {:id "sanghati"}
       [:h3.s-title
        [:a {:href "#sanghati", :class "anchor", :aria-hidden "true"} "#"] "Sanghati"]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-pattern"}
         [:a {:href "#sanghati-pattern", :class "anchor", :aria-hidden "true"} "#"] "Pattern"]

       [:div.docs-note
        [:button.btn.btn-primary
         {:on-click (fn [_] (h/download-pdf-fourpage
                             [:#sanghati-guide-canvas
                              :#sanghati-panels-1-2-3-canvas
                              :#sanghati-panels-4-5-6-canvas
                              :#sanghati-panels-7-8-9-canvas]
                             (:title sanghati)
                             [0 0 0 0]))}
         "Download PDF"]]

        [:canvas {:id "sanghati-guide-canvas" :width 3500 :height 2400 :style {:max-width "1600px"}}]
        [:canvas {:id "sanghati-panels-1-2-3-canvas" :width 3500 :height 2400 :style {:max-width "1600px"}}]
        [:canvas {:id "sanghati-panels-4-5-6-canvas" :width 3500 :height 2400 :style {:max-width "1600px"}}]
        [:canvas {:id "sanghati-panels-7-8-9-canvas" :width 3500 :height 2400 :style {:max-width "1600px"}}]
       ]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-guide"}
         [:a {:href "#sanghati-guide", :class "anchor", :aria-hidden "true"} "#"] "Guide"]
        [:div#sanghati-guide-text]
        ]])
    )}))
