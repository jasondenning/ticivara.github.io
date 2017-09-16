(ns app.text
  (:require [app.state :as state]))

(def en-sabong-guide-md "
The *sabong* has **five** khandakas.

#### Drawing

| mark | description |
| --- | --- |
| *b* | border |
| *k* | kusi |
| *m* | mandala width |
| *d* | mandala height |

#### Cutting

- one
- two
- three

Just like that.

")


(def th-sabong-guide-md "
เพียงเป้นการทดลองว่าพิมพ์ตรงนี้มันจะออกไปตรงไหน
")

(def en-civara-guide-md "
Hello Civara
")

(def th-civara-guide-md "
จีวร ผ้าที่เหมาะต่อการตัดจีวรควรเป็นผ้าไม่หนามาก เช่นผ้าป่านมัสลิน ผ้าลีนิน หรือป่านอินเดียเป็นต้น
")

(def en-sanghati-guide-md "
Hello Sanghati
")

(def th-sanghati-guide-md "
สังฆาฎิ ผ้าที่เหมาะแต่การตัดสังฆาฏิควรเป็นผ้าบาง เช่นป่านอินเดีย ป่านมัสลิน ผ้าลีนิน ป่านอินเดียจะเป็นผ้าที่บางมากตัดเป็นสังฆาฏิแล้วจะหนาเท่ากับจีวรที่ตัดด้วยผ้าป่านมัสลิน
")

(def en-robe-size-note-md "
The final size is reached when the cloth shrinks after the first washing. The
total cut size is scaled up to account for shrinking. The kusi size is not
changed for easier marking, the extra size is added by increasing only the
border and the mandala.

Units are in centimeters. On the pattern, fractions are rounded to millimeters
only when displayed, the internal calculations don't round the values.

Use the increasing width values along the edges for marking on the cloth, this
will not accumulate errors from rounding.
")

(def th-robe-size-note-md "
บางสิ่ง

บางสิ่ง

บางสิ่ง
")

(def en-borders-content-md "
TODO Later.
")

(def th-borders-content-md "
TODO บางสิ่ง
")

(def en-tools-content-md "

#### Checklist before sewing

- thread
- sewing machine condition
- extra machine needle in case it breaks
- large, sharp scissors
- tape measure
- long straight edge
- ruler
- marking pencil (2A soft)
- fabric dye
- rotary cutter
- cutting board

")

(def th-tools-content-md "
TODO บางสิ่ง
")

(def text-lookup {:en {:sabong-guide   en-sabong-guide-md
                       :civara-guide   en-civara-guide-md
                       :sanghati-guide en-sanghati-guide-md
                       :robe-size-note en-robe-size-note-md
                       :borders-content en-borders-content-md
                       :tools-content en-tools-content-md
                       :robe-sewing "Robe Sewing"
                       :sabong "Sabong"
                       :civara "Civara"
                       :sanghati "Sanghati"
                       :borders "Borders"
                       :tools "Tools"
                       :pattern "Pattern"
                       :download-pdf "Download PDF"
                       :guide "Guide"
                       :title "Title:"
                       :final-width "Final width"
                       :final-height "Final height"
                       :shrinking-width-percent "Shrinking width percent"
                       :shrinking-height-percent "Shrinking height percent"
                       :kusi "Kusi"
                       :border "Border"
                       :cutting-buffer "Cutting buffer"
                       }

                  :th {:sabong-guide   th-sabong-guide-md
                       :civara-guide   th-civara-guide-md
                       :sanghati-guide th-sanghati-guide-md
                       :robe-size-note th-robe-size-note-md
                       :borders-content th-borders-content-md
                       :tools-content th-tools-content-md
                       :robe-sewing "บางสิ่ง"
                       :sabong "บางสิ่ง"
                       :civara "บางสิ่ง"
                       :sanghati "บางสิ่ง"
                       :borders "บางสิ่ง"
                       :tools "บางสิ่ง"
                       :pattern "บางสิ่ง"
                       :download-pdf "บางสิ่ง"
                       :guide "บางสิ่ง"
                       :title "บางสิ่ง"
                       :final-width "บางสิ่ง"
                       :final-height "บางสิ่ง"
                       :shrinking-width-percent "บางสิ่ง"
                       :shrinking-height-percent "บางสิ่ง"
                       :kusi "บางสิ่ง"
                       :border "บางสิ่ง"
                       :cutting-buffer "บางสิ่ง"
                       }})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
