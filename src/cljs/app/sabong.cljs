(ns app.sabong
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

(defn draw-sabong-pattern [data]
  (let [sabong (:sabong @data)
        title (:title sabong)
        ;; values from the SVG for positioning
        ;; don't use a hash, not very readable in the expressions
        pos-pattern-width 232
        pos-pattern-height 102
        pos-img-offset-x 5
        pos-img-offset-y 5
        pos-text-offset-x (+ 0.0 pos-img-offset-x)
        pos-text-offset-y (+ 0.0 pos-img-offset-y)
        pos-buffer-width 1.0
        pos-border-width 12.5
        pos-kusi-width 6.0
        pos-mandala-width 36.2
        pos-mandala-height 21.0
        ;; scale
        pattern-scale 14
        ;; calcualted size values to display, these could be user inputs
        ;; don't use a hash, not very readable in the expressions
        val-buffer-width (js/Number (:buffer-width sabong))
        val-inner-width (js/Number (:width sabong))
        val-inner-height (js/Number (:height sabong))
        val-kusi-width (js/Number (:kusi-width sabong))
        [val-cut-width
         val-cut-height
         val-mandala-width
         val-mandala-height
         val-border-width
         val-border-height] (h/calc-shrinking-lengths (:sabong @data))

        ;; draws text with x y from the bottom left corner of the pattern image
        text (fn [ctx s x y] (let [sc pattern-scale
                                   x (* (+ x pos-text-offset-x) sc)
                                   y (* (+ (- pos-pattern-height y) pos-text-offset-y) sc)]
                               (canvas/font-style ctx "28px \"Fira Sans\"")
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

        text-mandala-width (fn [ctx n]
                             (text-num ctx val-mandala-width
                                       (- (+ pos-buffer-width
                                             pos-border-width
                                             (* n (+ pos-mandala-width pos-kusi-width))
                                             (/ pos-mandala-width 2)) 1)
                                       10.2))

        text-kusi-width (fn [ctx n]
                          (text-num ctx val-kusi-width
                                    (- (+ pos-buffer-width
                                          pos-border-width
                                          pos-mandala-width
                                          (* n (+ pos-mandala-width pos-kusi-width))
                                          (/ pos-kusi-width 2)) 1)
                                    10.2))

        text-kusi-height (fn [ctx n]
                           (text-num ctx val-kusi-width
                                     9.0
                                     (- (+ pos-buffer-width
                                           pos-border-width
                                           pos-mandala-height
                                           (* n (+ pos-mandala-height pos-kusi-width))
                                           (/ pos-kusi-width 2)) 1)))

        text-mandala-height (fn [ctx n]
                              (text-num ctx val-mandala-height
                                        9.0
                                        (- (+ pos-buffer-width
                                              pos-border-width
                                              (* n (+ pos-mandala-height pos-kusi-width))
                                              (/ pos-mandala-height 2)) 1)))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-horiz (fn [ctx m k b c x-offset]
                                (text-num ctx (+ (* m val-mandala-width)
                                                 (* k val-kusi-width)
                                                 (* b val-border-width)
                                                 (* c val-buffer-width))
                                          (+ 0.5 x-offset
                                             (* m pos-mandala-width)
                                             (* k pos-kusi-width)
                                             (* b pos-border-width)
                                             (* c pos-buffer-width))
                                          99))

        ;; mandala, kusi, border, cut buffer
        text-accumulate-vert (fn [ctx m k b c y-offset]
                                (text-num ctx (+ (* m val-mandala-height)
                                                 (* k val-kusi-width)
                                                 (* b val-border-height)
                                                 (* c val-buffer-width))
                                          226
                                          (+ 1.0 y-offset
                                             (* m pos-mandala-height)
                                             (* k pos-kusi-width)
                                             (* b pos-border-width)
                                             (* c pos-buffer-width))))

        ;; canvas
        canvas-dom (.getElementById js/document "sabong-pattern-canvas")
        monet-canvas (canvas/init canvas-dom "2d")
        ctx (canvas/get-context canvas-dom "2d")
        img (js/Image.)
        _ (aset img "src" "img/sabong-pattern.svg")]

    (canvas/add-entity monet-canvas :background
     (canvas/entity nil nil
      (fn [ctx val]
        (-> ctx
            (canvas/draw-image img {:x (* pos-img-offset-x pattern-scale)
                                    :y (* pos-img-offset-y pattern-scale)
                                    :w (* pos-pattern-width pattern-scale)
                                    :h (* pos-pattern-height pattern-scale)})

            (text-title title "60px" 0 -8.0)
            (text (str "Cut Width: " (h/num-pad val-cut-width)
                       ", Cut Height: " (h/num-pad val-cut-height))
                  50.0 -8.0)

            ;; buffer at the edges
            (text-num val-buffer-width 1.5 10.2)
            (text-num val-buffer-width (- (- pos-pattern-width 2.5) 1) 10.2)

            ;; border width
            (text-num val-border-width 6.0 10.2)
            (text-num val-border-width (- (- pos-pattern-width 7.5) 1) 10.2)

            ;; border height
            (text-num val-border-height 9.0 5.4)
            (text-num val-border-height (- (- pos-pattern-width 11.0) 1) 5.4)

            ;; mandala width
            (text-mandala-width 0)
            (text-mandala-width 1)
            (text-mandala-width 2)
            (text-mandala-width 3)
            (text-mandala-width 4)

            ;; kusi width
            (text-kusi-width 0)
            (text-kusi-width 1)
            (text-kusi-width 2)
            (text-kusi-width 3)

            ;; kusi
            (text-kusi-height 0)
            (text-kusi-height 1)

            ;; mandala height
            (text-mandala-height 0)
            (text-mandala-height 1)
            (text-mandala-height 2)

            ;; horizontal accumulative length
            (text-accumulate-horiz 0 0 0 1 0)
            (text-accumulate-horiz 0 0 1 1 0)
            (text-accumulate-horiz 1 0 1 1 0)
            (text-accumulate-horiz 1 1 1 1 0)
            (text-accumulate-horiz 2 1 1 1 0)
            (text-accumulate-horiz 2 2 1 1 0)
            (text-accumulate-horiz 3 2 1 1 0)
            (text-accumulate-horiz 3 3 1 1 0)
            (text-accumulate-horiz 4 3 1 1 0)
            (text-accumulate-horiz 4 4 1 1 0)
            (text-accumulate-horiz 5 4 1 1 0)
            (text-accumulate-horiz 5 4 2 1 -6.0)
            (text-accumulate-horiz 5 4 2 2 0)

            ;; vertical accumulative length
            (text-accumulate-vert 0 0 0 1 0)
            (text-accumulate-vert 0 0 1 1 0)
            (text-accumulate-vert 1 0 1 1 0)
            (text-accumulate-vert 1 1 1 1 0)
            (text-accumulate-vert 2 1 1 1 0)
            (text-accumulate-vert 2 2 1 1 0)
            (text-accumulate-vert 3 2 1 1 0)
            (text-accumulate-vert 3 2 2 1 -6.0)
            (text-accumulate-vert 3 2 2 2 0)

            ))))
    ))

(defn sabong-update [data]
  (h/render-markdown)
  (draw-sabong-pattern data))

(defn <content-sabong> [data]
  (r/create-class
   {:component-did-mount (fn [] (sabong-update data))
    :component-did-update (fn [] (sabong-update data))

    :reagent-render
    (fn []
      (let [sabong (:sabong @data)]

         [:div.container {:id "sabong"}
          [:h3.s-title (text :sabong)]
          [:div.docs-note
           [:h5.s-title {:id "sabong-pattern"} (text :pattern)]

           ;; Forms
           [:div.columns
            [:div.col-6

             [:form
              [:div.form-group
               [:label.form-label {:for "pattern_title"} (str (text :title) ":")]
               [:input.form-input {:id "pattern_title" :type "text"
                                   :value (:title sabong)
                                   :on-change (fn [e]
                                                (do (swap! data assoc-in [:sabong :title] (.-target.value e))
                                                    (draw-sabong-pattern data)))}]]]

             [:div.columns
              [:div.col-4
               [:form.form-horizontal

                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "robe_width"} (str (text :final-width) ":")]]
                 [:div.col-6
                  [:input.form-input {:id "robe_width" :type "number"
                                      :value (:width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :width] (.-target.value e))
                                                       (draw-sabong-pattern data)))}]]]

                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "robe_height"} (str (text :final-height) ":")]]
                 [:div.col-6
                  [:input.form-input {:id "robe_height" :type "number"
                                      :value (:height sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :height] (.-target.value e))
                                                       (draw-sabong-pattern data)))
                                      }]]]]]

              [:div.col-8
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-8
                  [:label.form-label {:for "shrinking_width_percent"} (str (text :shrinking-width-percent) ":")]]
                 [:div.col-4
                  [:input.form-input {:id "shrinking_width_percent" :type "number"
                                      :value (:shrink-percent-width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :shrink-percent-width] (.-target.value e))
                                                       (draw-sabong-pattern data)))
                                      }]]]

                [:div.form-group
                 [:div.col-8
                  [:label.form-label {:for "shrinking_height_percent"} (str (text :shrinking-height-percent) ":")]]
                 [:div.col-4
                  [:input.form-input {:id "shrinking_height_percent" :type "number"
                                      :value (:shrink-percent-height sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :shrink-percent-height] (.-target.value e))
                                                       (draw-sabong-pattern data)))
                                      }]]]]
               ]]

             [:div.columns

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "kusi_width"} (str (text :kusi) ":")]]
                 [:div.col-6
                  [:input.form-input {:id "kusi_width" :type "number"
                                      :value (:kusi-width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :kusi-width] (.-target.value e))
                                                       (draw-sabong-pattern data)))}]]]]]

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "border_width"} (str (text :border) ":")]]
                 [:div.col-6
                  [:input.form-input {:id "border_width" :type "number"
                                      :value (:border-width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :border-width] (.-target.value e))
                                                       (draw-sabong-pattern data)))}]]]]]

              [:div.col-4
               [:form.form-horizontal
                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "buffer_width"} (str (text :cutting-buffer) ":")]]
                 [:div.col-6
                  [:input.form-input {:id "buffer_width" :type "number"
                                      :value (:buffer-width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :buffer-width] (.-target.value e))
                                                       (draw-sabong-pattern data)))}]]]]]

              ]

             [:div.docs-note
              [:button.btn.btn-primary
               {:on-click (fn [_] (h/download-pdf :#sabong-pattern-canvas
                                                  (:title sabong)
                                                  [0 0 0 0]))}
               (text :download-pdf)]]]

            [:div.col-1]

            [:div.col-5

             [:div.docs-note.render-markdown
              (text :robe-size-note)]]]
           ;; end of Forms

           [:canvas.pattern {:id "sabong-pattern-canvas" :width 3500 :height 2400}]]

          [:div.docs-note
           [:h5.s-title {:id "sabong-guide"} (text :guide)]
           [:div.render-markdown
            (text :sabong-guide)]]]
        ))}))
