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
        pos-buffer-width 1.0
        pos-border-width 12.5
        pos-kusi-width 6.0
        pos-mandala-width 36.2
        pos-mandala-height 21.0
        ;; scale
        pattern-scale 6.5
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
                                   x (* x sc)
                                   y (* (- pos-pattern-height y) sc)]
                               (canvas/font-style ctx "12px \"Fira Sans\"")
                               (canvas/fill-style ctx "#000000")
                               (canvas/text ctx {:text s :x x :y y})))

        text-title (fn [ctx s size x y]
                     (let [sc pattern-scale
                           x (* x sc)
                           y (* (- pos-pattern-height y) sc)]
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

        text-accumulate-horiz (fn [ctx m k]
                                (text-num ctx (+ val-buffer-width
                                                 (when (< 0 (+ m k)) val-border-width)
                                                 (* m val-mandala-width)
                                                 (* k val-kusi-width))
                                          (+ 1.5
                                             (when (< 0 (+ m k)) pos-border-width)
                                             (* m pos-mandala-width)
                                             (* k pos-kusi-width))
                                          99))

        text-accumulate-vert (fn [ctx m k]
                                (text-num ctx (+ val-buffer-width
                                                 (when (< 0 (+ m k)) val-border-height)
                                                 (* m val-mandala-height)
                                                 (* k val-kusi-width))
                                          226
                                          (+ 1.5
                                             (when (< 0 (+ m k)) pos-border-width)
                                             (* m pos-mandala-height)
                                             (* k pos-kusi-width))))

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
            (canvas/draw-image img {:x 0 :y 0 :w (* pos-pattern-width pattern-scale)
                                    :h (* pos-pattern-height pattern-scale)})

            (text-title title "30px" 0 -8.0)
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
            (text-num val-border-height 12.0 5.0)
            (text-num val-border-height (- (- pos-pattern-width 7.5) 1) 5.0)

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
            ;; FIXME can't use an atom until the draw loop is fixed
            (text-accumulate-horiz 0 0)
            (text-accumulate-horiz 1 0)
            (text-accumulate-horiz 1 1)
            (text-accumulate-horiz 2 1)
            (text-accumulate-horiz 2 2)
            (text-accumulate-horiz 3 2)
            (text-accumulate-horiz 3 3)
            (text-accumulate-horiz 4 3)
            (text-accumulate-horiz 4 4)

            ;; vertical accumulative length
            ;; FIXME can't use an atom until the draw loop is fixed
            (text-accumulate-vert 0 0)
            (text-accumulate-vert 1 0)
            (text-accumulate-vert 1 1)
            (text-accumulate-vert 2 1)
            (text-accumulate-vert 2 2)

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
          [:h3.s-title
           [:a {:href "#sabong", :class "anchor", :aria-hidden "true"} "#"] "Sabong"]
          [:div.docs-note
           [:h5.s-title {:id "sabong-pattern"}
            [:a {:href "#sabong-pattern", :class "anchor", :aria-hidden "true"} "#"] "Pattern"]

           ;; Forms
           [:div.columns
            [:div.col-6

             [:form
              [:div.form-group
               [:label.form-label {:for "pattern_title"} "Title:"]
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
                  [:label.form-label {:for "robe_width"} "Final width:"]]
                 [:div.col-6
                  [:input.form-input {:id "robe_width" :type "number"
                                      :value (:width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :width] (.-target.value e))
                                                       (draw-sabong-pattern data)))}]]]

                [:div.form-group
                 [:div.col-6
                  [:label.form-label {:for "robe_height"} "Final height:"]]
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
                  [:label.form-label {:for "shrinking_width_percent"} "Shrinking width percent:"]]
                 [:div.col-4
                  [:input.form-input {:id "shrinking_width_percent" :type "number"
                                      :value (:shrink-percent-width sabong)
                                      :on-change (fn [e]
                                                   (do (swap! data assoc-in [:sabong :shrink-percent-width] (.-target.value e))
                                                       (draw-sabong-pattern data)))
                                      }]]]

                [:div.form-group
                 [:div.col-8
                  [:label.form-label {:for "shrinking_height_percent"} "Shrinking height percent:"]]
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
                  [:label.form-label {:for "kusi_width"} "Kusi:"]]
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
                  [:label.form-label {:for "border_width"} "Border:"]]
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
                  [:label.form-label {:for "buffer_width"} "Buffer:"]]
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
                                                  [15 15 15 15]))}
               "Download PDF"]]]

            [:div.col-1]

            [:div.col-5

             [:div.docs-note.render-markdown
              (text :robe-size-note)]]]
           ;; end of Forms

           [:canvas {:id "sabong-pattern-canvas" :width 1600 :height 1000}]]

          [:div.docs-note
           [:h5.s-title {:id "sabong-guide"}
            [:a {:href "#sabong-guide", :class "anchor", :aria-hidden "true"} "#"] "Guide"]
           [:div.render-markdown
            (text :sabong-guide)]]]
        ))}))
