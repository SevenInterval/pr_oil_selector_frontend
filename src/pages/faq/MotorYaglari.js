import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const MotorYaglari = () => {
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
                <h1 className="hs"><span className="titleOfHeader">Frequently asked questions / Motor yağları</span>  </h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Aracınız için doğru motor yağı nasıl seçilir?"}
                    answer={"Motor yağının seçimi araç üreticisi tarafından yapılır. Servis dokümanları motor yağının karşılaması gereken gerekliliklerle ilgili tavsiyeler içermektedir. Bu gereklilikler performans ve viskozite parametreleriyle ilgilidir."} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Önerilen performans seviyesi nedir?"}
                    answer={"Optimum performans sağlamak için motor yağlarının karşılaması (veya geçmesi) gereken teknik gerekliliklere performans seviyesi denilmektedir. Bu, en yaygın olanları ACEA (Avrupa Otomobil Üreticileri Derneği) ve API (Amerika Petrol Enstitüsü) olan spesifikasyonlara göre belirlenir."} />
                <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"АСЕА nedir?"}
                    answer={"АСЕА özelliği, binek ve hafif ticari araç ile büyük yük araçlarının motorları için tasarlanan serviste doldurulan yağların karşılaması gereken belli parametreleri ve değerleri düzenler."} />


            </article >
        </div >
    )
}

export default MotorYaglari;