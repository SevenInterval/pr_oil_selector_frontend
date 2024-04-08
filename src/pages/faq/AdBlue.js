import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet>
                <title>AdBlue</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/adblue-7" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarFaq />
                <article>
                    <h1 className="hs"><span>Frequently asked questions</span> / AdBlue</h1>

                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(1)}
                            className={activeAccordion === 1 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 1 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>SCR-teknolojisi tüm ağır vasıta araç üreticileri tarafından seçiliyor mu?
                        </h2>
                        <div className={activeAccordion === 1 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 1 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Euro 4 için: hayır, tüm üreticiler SCR teknolojisini benimsemez.</strong> MAN, EGR (Egzoz Gazı Devridaimi) tekniğini seçmiş ve Scania ise çoğu modellerinde EGR tekniğini kullanmaya karar vermiştir. Diğer tüm üreticiler, Euro 4 aşamasında SCR teknolojisini seçmişlerdir.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Euro 5 için: evet, tüm üreticiler - MAN ve Scania dahil</strong> - AdBlue'nun kullanılmasını gerektiren SCR tekniğinin uygulanmasına karar vermişlerdir.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(2)}
                            className={activeAccordion === 2 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 2 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>SCR teknolojisinin avantajları nelerdir?
                        </h2>
                        <div className={activeAccordion === 2 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 2 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Güvenilirlik: </strong>SCR tekniği, son birkaç yılda yapılan kapsamlı testler sonucunda oldukça güvenilir olduğunu kanıtlamıştır.<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>Daha uzun süreli çözüm :</strong>&nbsp;SCR teknolojisi ile Euro 4 ve Euro 5 standartları kolayca karşılanabilir. Yeni ve hala geliştirilmesi gereken emisyon standartları da bu teknolojiyi gerektirecektir.<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>Düşük yakıt tüketimi :</strong> dizel motorların daha ekonomik bir şekilde ayarlanabilme olasılığından dolayı, %5'lik bir ortalama yakıt tasarrufu elde edilebilir.<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>Vergi azaltma ve sübvansiyonlar</strong> - birkaç Avrupa üklesi, finansal teşvikler sunarak Euro 4 ve 5 standartlarıyla uyumluluğu teşvik etmektedir Örneğin, Almanya'da düşürülen otoyol ücretleri kilometrede 0,02-0,03 Euro'luk bir maddi kazanç sağlamıştır.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(3)}
                            className={activeAccordion === 3 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 3 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>SCR teknolojisinin dezavantajları nelerdir?
                        </h2>
                        <div className={activeAccordion === 3 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 3 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- AdBlue kullanmanız zorunludur.<br />
                                - Yeni araçlar daha pahalıdır. Ancak, emisyon standartlarıyla uyumlu hale gelmek için diğer tekniklerle donatılan araçlar da pahalıdır.<br />
                                &nbsp;</p>
                        </div>
                    </div>

                    <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Bu teknoloji alanda test edildi mi?"}
                        answer={"Bu yeni teknolojiyi test etmek için milyonlarca kilometre test sürüşleri yapıldı. Ayrıca, İspanya ve Finlandiya'da zorlu hava koşullarında da test edilmiştir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(5)}
                            className={activeAccordion === 5 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 5 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>AdBlue'yu çok özel kılan nedir?
                        </h2>
                        <div className={activeAccordion === 5 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 5 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>AdBlue oldukça saf bir solüsyondur. Sadece bir sulu üre bazlı solüsyon değil aynı zamanda, tıbbi cihazlarda kullanılandan daha yüksek saflık dereceli su kullanılarak teknoloji ile tam uyumlu biçimde ve en katı gereklilikler altında üretilmiş bir üründür. AdBlue'nun üretimi için Prista Oil, suyu arıtmak için çift ters ozmoz yöntemini kullanmaktadır. Ağır vasıta araç üreticileri, araçlarında verdikleri garantiden dolayı bu saflık seviyeli AdBlue'yu talep etmektedirler.</p>
                            <p>Ürünü püskürten memenin ağzı çok küçük olduğundan, ürün içinde çok küçük metallerin bile bulunması memeyi tıkar.<br />
                                &nbsp;</p>
                        </div>
                    </div>

                    <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"AdBlue'nun saklama ömrü ne kadardır?"}
                        answer={"Üretici tarafından belirtilen saklama koşulları altında azami saklama süresi 1 yıldır. Saklamada sıcaklık, kutunun kapalı olması, kuru ve iyi havalandırılan bir saklama yeri çok önemli faktörlerdir. Ürün doğrudan güneş ışığına maruz bırakılmamalıdır!"} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(7)}
                            className={activeAccordion === 7 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 7 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Ağır görev tipi bir motor AdBlue olmadan çalıştırılırsa ne olur?
                        </h2>
                        <div className={activeAccordion === 7 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 7 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Bu, izin verilen emisyon seviyelerinin aşılmasına yol açacaktır. Dizel motorlar, NOx emisyonu üzerinde olumsuz bir etki yapan yakıt optimizasyon yöntemi ile çalışmaktadırlar. Bu nedenle sensörler, NOx emisyonunu hassas bir şekilde ölçmek içi egzos borusunun içine yerleştirilmiştir. Ölçüm sonuçları OBD-sistemine (Cihaz İçi Arıza Teşhis - yerleşik bilgisayar) kaydedilir.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(8)}
                            className={activeAccordion === 8 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 8 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>AdBlue benzin istasyonlarında bulunur mu?
                        </h2>
                        <div className={activeAccordion === 8 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 8 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Prista Oil Holding EAD ve Petrol AD arasındaki mükemmel ortaklık ilişkilerinden dolayı AdBlue, Bulgaristan'daki çoğu "Benzin" istasyonlarında 10L ve 18L'lik kutularda mevcuttur.</p>
                            <p>Yakında, ülkedeki çoğu benzin istasyonlarında AdBlue'nun doldurulması için otomatik sistemler çalışır durumda olacaktır.<br />
                                &nbsp;</p>
                        </div>
                    </div>



                </article >
            </div >
        </>
    )
}

export default AdBlue;