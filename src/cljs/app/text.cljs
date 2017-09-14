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

(def text-lookup {:en {:sabong-guide   en-sabong-guide-md
                       :civara-guide   en-civara-guide-md
                       :sanghati-guide en-sanghati-guide-md}

                  :th {:sabong-guide   th-sabong-guide-md
                       :civara-guide   th-civara-guide-md
                       :sanghati-guide th-sanghati-guide-md}})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
