import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const AdBlue = () => {
    const [activeAccordion, setActiveAccordion] = useState();

    const changeActiveAccordion = (changeAcc) => {
        if (activeAccordion === changeAcc) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(changeAcc);
        }
    }

    return (
        <div className="body_with_sidebar catalog">
            <SideBarFaq />
            <article>
                <h1 className="hs"><span>Frequently asked questions</span> / AdBlue</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"SCR-teknolojisi tüm ağır vasıta araç üreticileri tarafından seçiliyor mu?"}
                    answer={""} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"SCR teknolojisinin avantajları nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"SCR teknolojisinin dezavantajları nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Bu teknoloji alanda test edildi mi?"}
                    answer={"Bu yeni teknolojiyi test etmek için milyonlarca kilometre test sürüşleri yapıldı. Ayrıca, İspanya ve Finlandiya'da zorlu hava koşullarında da test edilmiştir."} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"AdBlue'yu çok özel kılan nedir?"}
                    answer={""} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"AdBlue'nun saklama ömrü ne kadardır?"}
                    answer={"Üretici tarafından belirtilen saklama koşulları altında azami saklama süresi 1 yıldır. Saklamada sıcaklık, kutunun kapalı olması, kuru ve iyi havalandırılan bir saklama yeri çok önemli faktörlerdir. Ürün doğrudan güneş ışığına maruz bırakılmamalıdır!"} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Ağır görev tipi bir motor AdBlue olmadan çalıştırılırsa ne olur?"}
                    answer={""} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"AdBlue benzin istasyonlarında bulunur mu?"}
                    answer={""} />
              

            </article >
        </div >
    )
}

export default AdBlue;