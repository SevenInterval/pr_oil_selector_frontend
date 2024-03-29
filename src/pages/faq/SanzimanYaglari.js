import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const SanzimanYaglari = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Şanzıman yağları</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Şanzıman yağı nedir?"}
                    answer={"Şanzıman yağı, çok iyi aşınma ve sürtünme önleme özelliği ve iyi termal oksidasyon kararlılığı olan bir baz yağ ve katkı maddesi karışımıdır."} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Şanzıman yağının işlevleri nelerdir?"}
                    answer={"Şanzıman yağının ana işlevi araçların ve kamyonların düz ve otomatik şanzımanlarındaki hipoid dişlileri yağlamaktır."} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Uygulamaya göre ana şanzıman yağ türleri nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Şanzıman yağında hangi ana katkı maddeleri kullanılır?"}
                    answer={""} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Otomatik şanzımanların yağları ne renktir?"}
                    answer={"Otomatik şanzımanların tüm yağları, düz şanzımanların yağlarından farklı renktedir. Çoğunlukla kırmızıdırlar."} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"MTF yağları nasıl sınıflandırılır?"}
                    answer={""} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"MTF yağları için API çalışma sınıfları nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"SAE J 306 viskozite sınıfı neyi temsil eder?"}
                    answer={"SAE J 306 viskozite sınıfı, şanzıman yağlarını kinetik viskozitelerine göre sınıflara ayırır. Sınıflar sıcak hava uygulamaları, soğuk hava uygulamaları veya yıl boyunca kullanım - çok mevsimli yağlar - şeklinde belirlenmiştir."} />
                <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"ATF yağları nasıl sınıflandırılır?"}
                    answer={"ATF ürünleri için uygulanan viskozite veya çalışma sınıfları yoktur. Karakteristikleri ve uygulamaları, otomatik şanzıman üreticilerinin (OEM) spesifikasyonlarından belirlenir."} />
                <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"ATF yağları için en yaygın OEM spesifikasyonları hangileridir?"}
                    answer={""} />
                
            </article >
        </div >
    )
}

export default SanzimanYaglari;