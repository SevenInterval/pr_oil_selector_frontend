import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const MotorYaglariBt = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Büyük ticari araçlar için yağlar</h1>

                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(1)}
                        className={activeAccordion === 1 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 1 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>"Binek araçlar, büyük ticari araçlar ve büyük yük araçlarında kullanım için tasarlanan yağlar arasında fark var mı?
                    </h3>
                    <div className={activeAccordion === 1 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 1 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Büyük ticari araçlarda kullanım için amaçlanan motor yağları, şu nedenlerden dolayı binek araç ile hafif ticari araçlarda kullanılan yağlardan farklıdır:</p>
                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yüksek yüklerde çalışırlar</p>
                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yüksek güçlü motorlara doldurulurlar</p>
                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100&nbsp;000 km veya 250 çalışma saatine kadar (hatta bazı durumlarda 400 çalışma saati) uzun yağ değiştirme aralıkları gereklidir.</p>
                     </div>
                </div>
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(2)}
                        className={activeAccordion === 2 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 2 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Aracım oldukça eski. Hangi yağı kullanmalıyım?
                    </h3>
                    <div className={activeAccordion === 2 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 2 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Genellikle, düşük performans özellikli yağlar yüksek tüketim oranları ve fiyatları göz önünde bulundurularak kullanılmalıdır ve elbette bu bazen belirleyici bir faktördür. Bulunduğumuz enlemlerden ötürü hava sıcaklığında ciddi değişiklikler olduğundan, SAE 30, SAE 40, SAE 50 yağlarını kullanmak her zaman doğru bir karar değildir. Tüm yıl boyunca koruma göz önünde bulundurularak, 15W-50, 20W-50 gibi çok mevsimli yağların standart mesafe esaslı değiştirme aralıklarında kullanılması tavsiye edilebilir.</p>
                            <p>Örneğin, M 10D, M 16D ve M 20D gibi bilinen yağ tipleri Prista Super 15W-50 ve 20W-50 ve Texaco Ursa Super LA 20W-50 ile değiştirilebilir.</p>
                            <p>Prista ve Expert Oil Service uzman oto bakım servislerinde, profesyonel tavsiyenin yanında, size tüm mevcut ürünler ve arafcınızın eksiksiz bir bakımı sunulacaktır. Eğer kendi tamir yeriniz varsa, bizim işletme ve teknik danışmanlarımız yerinde gerekli uzman değerlendirmeyi yapabilir ve esnek lojistik çözümlerimiz, size gerekli ürünü en kısa zamanda ve uygun koşullarda sağlayacaktır.<br/>
                        &nbsp;</p>
                     </div>
                </div>
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(3)}
                        className={activeAccordion === 3 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 3 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Tarım aletleri için tasarlanan yağlar farklı mı?
                    </h3>
                    <div className={activeAccordion === 3 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 3 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Evet, farklıdır.</p>
                            <p>Tarım sektöründe, uygulanan yağların çok yönlü kullanımını sağlamak için, önerilen ürün grupları STOU (Süper Evrensel Traktör Yağı) ve UTTO (Evrensel Traktör Şanzıman Yağı) dur.</p>
                            <p>STOU tipi bir yağın belirtilmediği durumda, aracın kullanım kılavuzuna göre bir motor yağı kullanılmalıdır.</p>
                     </div>
                </div>
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(4)}
                        className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>STOU nedir?
                    </h3>
                    <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                     <p>Tarım araç ve makinalarının motor, ıslak frenler, şanzıman, diferansiyel dişlisi ve hidrolik sistemlerinin yağlanması için kullanılan bir yağdır.</p>
                     <p>Bu tip ürünler Prista STOU 10W-30, 10W-40 15W-40 ve &nbsp;Texaco SUTO Extra 10W-30 dir.</p>
                     </div>
                </div>
                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"UTTO nedir?"}
                    answer={"Modern tarım traktörlerinin ve diğer aletlerin dişli kutusu, diferansiyel dişlisi, ıslak frenler ve hidrolik sistemlerinin yağlanması için kullanılan bir yağdır."} />
             
            </article >
        </div >
    )
}

export default MotorYaglariBt;