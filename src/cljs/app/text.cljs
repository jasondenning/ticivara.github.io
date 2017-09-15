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

(def text-lookup {:en {:sabong-guide   en-sabong-guide-md
                       :civara-guide   en-civara-guide-md
                       :sanghati-guide en-sanghati-guide-md
                       :robe-size-note en-robe-size-note-md}

                  :th {:sabong-guide   th-sabong-guide-md
                       :civara-guide   th-civara-guide-md
                       :sanghati-guide th-sanghati-guide-md
                       :robe-size-note th-robe-size-note-md}})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
