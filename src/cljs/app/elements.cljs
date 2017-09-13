(ns app.elements)

(declare <sidebar> <navbar> <footer> <container>)

(defn <container> [content data]
  (fn []
    [:div.s-container.container
     [:div.columns

      [<sidebar>]
      [:a#sidebar-close.docs-nav-clear {:href "#sidebar-close"}]
      [<navbar>]

      [:div#content.s-content
       [content data]

       [<footer>]]]]
    )
  )

(defn <sidebar> []
  [:div {:id "sidebar", :class "s-sidebar"}
   [:div.s-brand
    [:a {:href "index.html", :class "s-logo"}
     #_[:img {:src "img/spectre-logo.svg", :alt "Spectre.css CSS Framework"}]
     [:h2  "Robe Sewing"] ] ]
   [:div.s-nav
    [:div.accordion
     [:div.accordion-item
      [:input {:type "checkbox", :id "docs-accordion-1", :name "docs-accordion-checkbox", :hidden "true"}]
      [:label {:class "accordion-header c-hand", :for "docs-accordion-1"} "Sabong"]
      [:div.accordion-body
       [:ul.menu.menu-nav
        [:li.menu-item
         [:a {:href "#/en/sabong"} "EN"]]
        [:li.menu-item
         [:a {:href "#/th/sabong"} "TH"]]]]]
     [:div.accordion-item
      [:input {:type "checkbox", :id "docs-accordion-2", :name "docs-accordion-checkbox", :hidden "true"}]
      [:label {:class "accordion-header c-hand", :for "docs-accordion-2"} "Civara"]
      [:div.accordion-body
       [:ul.menu.menu-nav
        [:li.menu-item
         [:a {:href "#/en/civara"} "EN"]]
        [:li.menu-item
         [:a {:href "#/th/civara"} "TH"]]]]]
     [:div.accordion-item
      [:input {:type "checkbox", :id "docs-accordion-3", :name "docs-accordion-checkbox", :hidden "true"}]
      [:label {:class "accordion-header c-hand", :for "docs-accordion-3"} "Sanghati"]
      [:div.accordion-body
       [:ul.menu.menu-nav
        [:li.menu-item
         [:a {:href "#/en/sanghati"} "EN"]]
        [:li.menu-item
         [:a {:href "#/th/sanghati"} "TH"]]]]]
     ]]])

(defn <navbar> []
  [:div.s-navbar
   [:div.menu-btn
    [:a {:href "#sidebar", :class "btn btn-link btn-action"}
     [:i.icon.icon-menu]] ]
   #_[:a {:href "index.html", :class "s-logo"}
      [:img {:src "img/spectre-logo.svg", :alt "Spectre.css CSS Framework"}] ]
   #_[:div.float-btn
      [:a {:href "https://github.com/picturepan2/spectre", :target "_blank", :class "btn btn-primary"} "GitHub"]]])

(defn <footer> []
  [:footer.s-footer])
