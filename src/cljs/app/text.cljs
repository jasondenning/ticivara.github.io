(ns app.text
  (:require [app.state :as state]))

(def en-home-content-md "

This is a calculating tool and instruction guide for sewing robes.

As you will see it is very much work-in-progress, but the [Sabong](/#/en/sabong)
pattern is ready to use.

Enjoy your work!

")

(def th-home-content-md "

การคำนวน และแบบการตัดเย็บผ้าไตรจีวรจะอยูในส่วนนี้
อยู่ในระหว่างการเขียน

")

(def en-sabong-guide-md "
TODO Later.
")


(def th-sabong-guide-md "
TODO ผ้าสบง
")

(def en-civara-guide-md "
TODO Later.
")

(def th-civara-guide-md "
TODO ผ้าจีวร
")

(def en-sanghati-guide-md "
TODO Later.
")

(def th-sanghati-guide-md "
TODO ผ้าสังฆาฏิ
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
ขนาดผ้าไตรจีวร ที่ต้องการ

จะปรากฏตรงนี้

ต้องรออับเดท
")

(def en-borders-content-md "
TODO Later.
")

(def th-borders-content-md "
TODO อนุวาต
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
                       :home-content en-home-content-md
                       :home "Home"
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
                       :home-content th-home-content-md
                       :home "โปรแกรมคำนวณ"
                       :robe-sewing "การตัดเย็บผ้าไตรจีวร"
                       :sabong "สบง"
                       :civara "จีวร"
                       :sanghati "สังฆาฏิ"
                       :borders "อนุวาต"
                       :tools "เครื่องมือ"
                       :pattern "แบบในการขีด"
                       :download-pdf "ดาวน์โหลด PDF"
                       :guide "คำอธิบาย"
                       :title "หัวข้อ"
                       :final-width "ความกว้างที่ต้องการ"
                       :final-height "ความสูงที่ต้องการ"
                       :shrinking-width-percent "เปอร์เซ็นต์การหดของผ้าด้านกว้าง"
                       :shrinking-height-percent "เปอร์เซ็นต์การหดของผ้าด้านสูง"
                       :kusi "ขนาดกุสิ"
                       :border "ขนาดอนุวาต"
                       :cutting-buffer "ขนาดเผื่อการตัดเย็บ"
                       }})

(defn text [key]
  (let [lang (get-in @state/state [:params :lang])]
    (get-in text-lookup [lang key])))
