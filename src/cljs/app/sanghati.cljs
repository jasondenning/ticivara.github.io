(ns app.sanghati
  (:require
   ;; core libs
   [reagent.core :as r]
   [dommy.core :as dommy :refer-macros [sel sel1]]
   [clojure.string :as string]
   ;; app
   [app.canvas :as canvas]
   [app.helpers :as h]
   [app.text :refer [text]]))

(defn draw-guide [data]
  (let [sanghati (:sanghati @data)
        title (:title sanghati)
        ;; values from the SVG for positioning
        pos-pattern-width 297
        pos-pattern-height 210
        pos-buffer-width 1.0
        pos-border-width 14.0
        pos-kusi-width 6.0
        pos-mandala-width 31.0
        pos-mandala-height 58.0
        ;; scale
        pattern-scale 11.3

        ;; calcualted size values to display, these could be user inputs
        val-buffer-width pos-buffer-width
        val-inner-width (js/Number (:width sanghati))
        val-inner-height (js/Number (:height sanghati))
        ;; TODO inputs
        val-cut-width (+ val-inner-width (* 2 val-buffer-width))
        val-cut-height (+ val-inner-height (* 2 val-buffer-width))
        val-border-width pos-border-width
        val-kusi-width pos-kusi-width
        val-mandala-width   (/ (- val-inner-width (* 2 val-border-width) (* 4 val-kusi-width)) 5)
        val-mandala-height (/ (- val-inner-height (* 2 val-border-width) (* 2 val-kusi-width)) 3)

        ;; draws from the TOP LEFT corner
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* x sc)
                                   y (* y sc)]
                               (canvas/font-style ctx "30px \"Fira Sans\"")
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
            (text (str "Final width: " val-inner-width) 20 45.0)
            (text (str "Final height: " val-inner-height) 20 49.0)
            (text (str "Cut width: " val-cut-width) 20 54.0)
            (text (str "Cut height: " val-cut-height) 20 58.0)

            ))))

    (canvas/draw-once canvas-guide)
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

            ;;(text-title title "60px" 0 0)
            ;;(text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    (canvas/draw-once canvas-panels-1)
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

            ;;(text-title title "60px" 0 0)
            ;;(text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    (canvas/draw-once canvas-panels-4)
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

            ;;(text-title title "60px" 0 0)
            ;;(text (str "Pos Width: " pos-pattern-width ", Pos Height: " pos-pattern-height) 50.0 -8.0)

            ))))

    (canvas/draw-once canvas-panels-7)
    ))

(defn draw-sanghati-pattern [data]
  (h/render-markdown)
  (draw-guide data)
  (draw-panels-1 data)
  (draw-panels-4 data)
  (draw-panels-7 data))

(defn sanghati-update [data]
  (h/render-markdown)
  (draw-sanghati-pattern data))

(defn <content-sanghati> [data]
  (r/create-class
   {:component-did-mount (fn [] (sanghati-update data))
    :component-did-update (fn [] (sanghati-update data))

    :reagent-render
    (fn []
      (let [sanghati (:sanghati @data)]

      [:div.container {:id "sanghati"}
       [:h3.s-title (text :sanghati)]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-pattern"} "Pattern"]

           ;; Forms
           [:div.columns
            [:div.col-6

             [:form
              [:div.form-group
               [:label.form-label {:for "pattern_title"} "Title:"]
               [:input.form-input {:id "pattern_title" :type "text"
                                   :value (:title sanghati)
                                   :on-change (fn [e]
                                                (do (swap! data assoc-in [:sanghati :title] (.-target.value e))
                                                    (draw-sanghati-pattern data)))}]]]

             [:div.columns
              [:div.col-4
               [:form.form-horizontal

                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "robe_width"} "Final width:"]]
                 [:div.col-6
                  [:input.form-input {:id "robe_width" :type "number"
                                      :value (:width sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :width] (.-target.value e))
                                                       (draw-sanghati-pattern data)))}]]]

                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "robe_height"} "Final height:"]]
                 [:div.col-6
                  [:input.form-input {:id "robe_height" :type "number"
                                      :value (:height sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :height] (.-target.value e))
                                                       (draw-sanghati-pattern data)))
                                      }]]]]]

              [:div.col-8
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-8
                  [:label.form-label {:for "shrinking_width_percent"} "Shrinking width percent:"]]
                 [:div.col-4
                  [:input.form-input {:id "shrinking_width_percent" :type "number"
                                      :value (:shrink-percent-width sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :shrink-percent-width] (.-target.value e))
                                                       (draw-sanghati-pattern data)))
                                      }]]]

                [:div.form-group
                 [:div.col-8
                  [:label.form-label {:for "shrinking_height_percent"} "Shrinking height percent:"]]
                 [:div.col-4
                  [:input.form-input {:id "shrinking_height_percent" :type "number"
                                      :value (:shrink-percent-height sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :shrink-percent-height] (.-target.value e))
                                                       (draw-sanghati-pattern data)))
                                      }]]]]
               ]]

             [:div.columns

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "kusi_width"} "Kusi:"]]
                 [:div.col-6
                  [:input.form-input {:id "kusi_width" :type "number"
                                      :value (:kusi-width sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :kusi-width] (.-target.value e))
                                                       (draw-sanghati-pattern data)))}]]]]]

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "border_width"} "Border:"]]
                 [:div.col-6
                  [:input.form-input {:id "border_width" :type "number"
                                      :value (:border-width sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :border-width] (.-target.value e))
                                                       (draw-sanghati-pattern data)))}]]]]]

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "buffer_width"} "Buffer:"]]
                 [:div.col-6
                  [:input.form-input {:id "buffer_width" :type "number"
                                      :value (:buffer-width sanghati)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sanghati :buffer-width] (.-target.value e))
                                                       (draw-sanghati-pattern data)))}]]]]]

              ]

             [:div.docs-note
              [:button.btn.btn-primary
               {:on-click (fn [_] (h/download-pdf-fourpage
                                   [:#sanghati-guide-canvas
                                    :#sanghati-panels-1-2-3-canvas
                                    :#sanghati-panels-4-5-6-canvas
                                    :#sanghati-panels-7-8-9-canvas]
                                   (:title sanghati)
                                   [0 0 0 0]))}
               "Download PDF"]]]

            [:div.col-1]

            [:div.col-5

             [:div.docs-note.render-markdown
              (text :robe-size-note)]]]
           ;; end of Forms

        [:canvas.pattern {:id "sanghati-guide-canvas" :width 3500 :height 2400}]
        [:canvas.pattern {:id "sanghati-panels-1-2-3-canvas" :width 3500 :height 2400}]
        [:canvas.pattern {:id "sanghati-panels-4-5-6-canvas" :width 3500 :height 2400}]
        [:canvas.pattern {:id "sanghati-panels-7-8-9-canvas" :width 3500 :height 2400}]
       ]

       [:div.docs-note
        [:h5.s-title {:id "sanghati-guide"} "Guide"]
        [:div.render-markdown
         (text :sanghati-guide)]
        ]])
    )}))
