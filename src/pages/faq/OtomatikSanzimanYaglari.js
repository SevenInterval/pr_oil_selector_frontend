import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const OtomatikSanzimanYaglari = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Şanzıman yağları - Otomatik şanzımanlar</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"ATF yağının ana işlevleri nelerdir?"}
                    answer={""} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                   question={"Düz şanzıman yağlarıyla kıyaslandığında ATF sıvılarının ilave özellikleri nelerdir?"}
                   answer={""} />
                 <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sürtünme özellikleri? Bu ne demek?"}
                    answer={"Sürtünme özellikleri, ATF'yi diğer şanzıman yağlarından ayıran spesifik gerekliliktir. Bu, şanzıman üreticisinin spesifikasyonlarında belirtilen sürtünme katsayısı değerlerinden (statik ve dinamik) belirlenir. ATF'nin sürtünme özellikleri, belirtilen yağ değiştirme aralığı içinde sabit kalmalıdır. Bu nedenle dişli kutusundaki ATF yağı her zaman düzgün seçilmiş bir ürünle takviye edilmeli veya değiştirilmelidir."} />
                <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"ATF başka hangi uygulamalarda kullanılıyor?"}
                    answer={""} />
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Hidrolik direksiyon sisteminde ATF yerine sade bir hidrolik yağ kullanmak mümkün mü?"}
                    answer={"Aksi belirtilmedikçe, 'MHL' hidrolik yağ tipinin (piyasada yaygın olarak bulunan) kullanılması tavsiye edilmez."} />
                <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"МТF ve ATF ilave etme?"}
                    answer={""} />
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Düz şanzımanlardaki yağın değiştirilmesi. Önerilen mesafe nedir?"}
                    answer={""} />
                <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Otomatik şanzıman yağının değiştirilmesi"}
                    answer={"Otomatik şanzımanlı modern araçlar için genellikle oldukça uzun bir yağ değiştirme aralığı tavsiye edilir – yaklaşık 80-100 000 km. Oldukça yüksek sayıda bakım gerektirmeyen şanzımanları olan araç mevcuttur ve yağın şanzımanın ömrü boyunca değiştirilmesi gerekmez. ‘80'li ve ‘90'lı yılların sonlarından kalan eski araçlarda yağ, aksi belirtilmedikçe, her 20-40 000 km'de değiştirilmelidir."} />
                
                
            </article >
        </div >
    )
}

export default OtomatikSanzimanYaglari;