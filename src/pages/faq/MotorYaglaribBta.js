import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

const MotorYaglariBta = () => {
    const [activeAccordion, setActiveAccordion] = useState();

    const changeActiveAccordion = (changeAcc) => {
        if (activeAccordion === changeAcc) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(changeAcc);
        }
    }

    return (
        <>
            <Helmet>
                <title>Binek ve hafif ticari araçlar için motor yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/binek-ve-hafif-ticari-araclar-icin-motor-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarFaq />
                <article>
                    <h1 className="hs"><span>FAQ</span> / Binek ve hafif ticari araçlar için motor yağları</h1>

                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(1)}
                            className={activeAccordion === 1 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 1 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Yağ satın alırken ürün etiketinde neyin okunması önemlidir?
                        </h2>
                        <div className={activeAccordion === 1 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 1 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Performans karakteristiklerinin (<strong style={{ fontFamily: "sans-serif" }}>ACEA ve API</strong>) ile viskozite derecesinin yanında, araç üreticilerinin spesifikasyonlarına da (<strong style={{ fontFamily: "sans-serif" }}>OEM</strong>) dikkat edilmelidir.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(2)}
                            className={activeAccordion === 2 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 2 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>OEM spesifikasyonu nedir?
                        </h2>
                        <div className={activeAccordion === 2 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 2 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p><strong style={{ fontFamily: "sans-serif" }}>OEM (Orijinal Ekipman Üreticisi)</strong> spesifikasyonları, fabrikada ve bakımda doldurulan yağlar tarafından karşılanması gereken somut parametreleri ve değerleri düzenler.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(3)}
                            className={activeAccordion === 3 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 3 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Bana ACEA A3/B4-08, MB 229.3, SAE 5W-40 yağı önerildi. Hangi yağı almalıyım?
                        </h2>
                        <div className={activeAccordion === 3 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 3 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Basit cevap şudur: "Bu spesifikasyonlara uygun her motor yağı uygundur”</p>
                            <p>İyi seçim РRISTA® ULTRA 5W-40 gibi bir Prista Oil ürünüdür</p>
                            <p>-API SN/SM/CF</p>
                            <p>-ACEA A3/B4-08</p>
                            <p>-MB 229.1, MB 229.3</p>
                            <p>-VW 502 00 / 505 00</p>
                            <p>-Opel GM-LL-B-025</p>
                            <p>-Renault RN 700 / 710</p>
                            <p>-Porsche A40</p>
                        </div>
                    </div>
                    <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Yiyecek maddesi veya yapı malzemeleri sunan hipermarketlerden motor yağı satın alabilir miyim?"}
                        answer={"Aslında, bu tip hipermarketlerin otomotiv ürün departmanlarında motor yağlarını çok uygun fiyata bulabilirsiniz. Alıcılar, markayı ve viskozite derecesini ürünün üzerinde büyük harflerle yazılı olduğunu göreceklerdir. Geriye kalan bilgiler paketin üzerinde bir yerlerde çok küçük fontlarla görünecektir. Fiyat düşük ve hatta korkunç şekilde düşüktür. Bu durumda yaptığımız şey belli bir markası ve fiyatı olan ürünü hemen satın almaktır ancak, bu ürünün kalite parametreleri tatmin edici mi? Herkes bu soruya kendisi cevap verebilir. Diğer bir husus uygun ambalaj ve miktardır. Motor yağı kutularda veya bidondan toptan satın alınabilir. İkinci durumda, kutunun temizliği ve uygun şekilde saklanması çok önemlidir. İyi seçimler Prista, Expert Oil Service oto servis merkezleri ile aracınızın üreticisinin resmi satış ve servis temsilcisidir."} />
                    <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Prista ve Техасо yağlarını benzin istasyonunda satın alabilir miyim?"}
                        answer={"Prista ve Техасо motor yağları benzin istasyonlarının tüm 'Petrol' AD zincirinde ve diğer bir çok parekende satış yerlerinde mevcuttur. Yeniden dolum gerektiğinde, gerekli miktarı hemen temin edebilirsiniz. Bu, sizi başka bir ürünü doldurma riskinden kurtaracaktır."} />
                    <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Bana belli bir yağ markası önerildi. Bu diğerlerinden daha mı iyi?"}
                        answer={"Başka bir motor yağının kullanılması bazen sadece 'modaya' uymak için yapılır. Sıklıkla kullanıcılar, tüm araçların belli yağ tipleriyle optimum performansı göstermeyeceklerini göz önünde bulundurmadan bir ticari markada ısrar etmektedirler."} />
                    <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Sentetik yağ tüm motorlu araçlar için uygun mu?"}
                        answer={"Hayır. Sentetik yağlar piyasadaki en yüksek kaliteli ürünlerdir ancak, teknik koşulları kötü olan eski araçlarda kullanılmaları uygun değildir. Sıklıkla sentetik yağların uygunsuz kullanımı birçok kullanıcıda hayal kırıklığına sebep olmaktadır."} />

                </article >
            </div >
        </>
    )
}

export default MotorYaglariBta;