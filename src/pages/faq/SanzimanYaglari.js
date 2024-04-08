import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet>
                <title>Şanzıman yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/sanziman-yaglari" />
            </Helmet>
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
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(3)}
                            className={activeAccordion === 3 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 3 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Uygulamaya göre ana şanzıman yağ türleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 3 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 3 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>İki ana tür mevcuttur:</p>
                            <p>- Düz şanzımanlar ve diferansiyel dişlileri için yağlar. Bunlara <strong style={{ fontFamily: "sans-serif" }}>MTF&nbsp;</strong>(Düz Şanzıman Yağı) de denir;<br />
                                &nbsp;<br />
                                - Otomatik şanzımanlar için yağlar; <strong style={{ fontFamily: "sans-serif" }}>ATF </strong>(Otomatik&nbsp;Şanzıman Yağı) olarak da bilinir.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(4)}
                            className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Şanzıman yağında hangi ana katkı maddeleri kullanılır?
                        </h2>
                        <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Aşınma önleme, sürtünme önleme ve EP (Aşırı Basınç) katkı maddeleri.</strong> Bunlar, hareketli parçaların metal yüzeylerinin doğrudan temas etmesini önleyen ve sürtünmeyi azaltan maddelerdir.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Akma noktası bastırıcı katkılar</strong>, donma sıcaklığını düşürür ve düşük sıcaklıklarda yağların viskozite özelliklerini iyileştirir (akma davranışı);</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Korozyon ve oksidasyon önleme katkılar</strong>, oksidasyon direncini arttırır. Çok iyi bilinen bir gerçek var ki, elde edilen oksidasyon ürünleri metallerde korozyona neden olur;</p>
                        </div>
                    </div>

                    <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Otomatik şanzımanların yağları ne renktir?"}
                        answer={"Otomatik şanzımanların tüm yağları, düz şanzımanların yağlarından farklı renktedir. Çoğunlukla kırmızıdırlar."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(6)}
                            className={activeAccordion === 6 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 6 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>MTF yağları nasıl sınıflandırılır?
                        </h2>
                        <div className={activeAccordion === 6 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 6 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Şanzıman yağlarının performans parametreleri <strong style={{ fontFamily: "sans-serif" }}>API</strong> sınıfına bağlıdır. Viskozite özellikleri SAE J 306 taraından belirlenir.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(7)}
                            className={activeAccordion === 7 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 7 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>MTF yağları için API çalışma sınıfları nelerdir?
                        </h2>
                        <div className={activeAccordion === 7 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 7 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Bu yağlar GL (Dişli Yağı) oranları kullanılarak sınıflandırılırlar. GL-1 ile GL-6 arasında altı performans sınıfı şeklinde alt bölümlere ayrılırlar ve bunlardan sadece 2 tanesi şu anda kullanılmaktadır.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>GL-1, GL-2, GL-3 ve GL-6 – ŞU ANDA KULLANILMAMAKTADIRLAR.</strong></p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>GL-4 – MEVCUT ORAN</strong>. Oldukça yüksek kayma hızlarında çalışan düz şanzımanlardaki dişliler, araçlardaki normal çalışma koşullarında çalışan özellikle helezon/sarmak konik dişliler ve hipoid dişliler ve yüksek devir/düşük torklu ve düşük devir/yüksek torklu motorları olan diğer otomotiv ekipmanları için performans karakteristiklerini belirtmek için kullanılır.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>GL-5 – MEVCUT ORAN</strong>. Binek araçlardaki dişliler, özellikle hipoid ve yüksek devir/azami yük, yüksek devir/yüksek tork ve düşük devir/yüksek torkla çalışan diğer araç tipleri için performans karakteristiklerini belirtir. Ağır görev dişli kutuları tasarlanmış olup aşınma ve sürtünme önleyici EP katkı maddeleriyle kullanılır;</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>MT-1 – MEVCUT ORAN</strong>. İyi termal kararlılığı, yüksek çevrim sıcaklıklarına direnç ve diğer API kategorileriyle kıyaslandığında bakır alaşımlarla daha iyi uyum gerektiren ağır görev düz şanzımanlar için tasarlanmış yağlar için kullanılır. Ağır yük araçlarının ve otobüslerin asenkronize düz şanzımanları için kullanılır.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"SAE J 306 viskozite sınıfı neyi temsil eder?"}
                        answer={"SAE J 306 viskozite sınıfı, şanzıman yağlarını kinetik viskozitelerine göre sınıflara ayırır. Sınıflar sıcak hava uygulamaları, soğuk hava uygulamaları veya yıl boyunca kullanım - çok mevsimli yağlar - şeklinde belirlenmiştir."} />
                    <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"ATF yağları nasıl sınıflandırılır?"}
                        answer={"ATF ürünleri için uygulanan viskozite veya çalışma sınıfları yoktur. Karakteristikleri ve uygulamaları, otomatik şanzıman üreticilerinin (OEM) spesifikasyonlarından belirlenir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(10)}
                            className={activeAccordion === 10 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 10 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>ATF yağları için en yaygın OEM spesifikasyonları hangileridir?
                        </h2>
                        <div className={activeAccordion === 10 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 10 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>En yaygın kullanılan ve pratikte çok talep gören General Motors (DEXRON) ve Ford Motor Company (MERCON) spesifikasyonlarıdır. Bunların dışında, otomatik şanzımanların diğer üreticileri de ATF yağları için kendi spesifikasyonlarını belirtmişlerdir.</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>GENERAL MOTORS – DEXRON</strong></p>
                            <p>TASA – 1957 , &nbsp;DEXRON II E – 1991, DEXRON III H – 2003</p>
                            <p>DEXRON II D – 1981&nbsp;, DEXRON III G – 1997, DEXRON VI - 2005</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>FORD MOTOR COMPANY – MERCON</strong></p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>FORD MOTOR COMPANY – MERCON</strong></p>
                            <p>- ESW M2C 33F/G (G Yağı) – 1967<br />
                                - ESP M2C 138-CJ (CJ Yağı) – 1975<br />
                                - ESP M2C 166 H (H Yağı) – 1981<br />
                                - MERCON WSP M2C 185 A – 1987<br />
                                - MERCON V – 1996<br />
                                - MERCON SP – 2005<br />
                                - MERCON LV (Düşük Viskoziteli) - 2008</p>
                            <p><em>M2C33 -F ve -G (G yağı) spesifikasyonlarını karşılayan yağlar, Ford'un diğer herhangi bir spesifikasyonuyla uyumlu yağlarla karıştırılmamalıdır.</em></p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Diğer ОЕМ spesifikasyonları:</strong></p>
                            <p>Allison C-4<br />
                                Caterpillar TO-4<br />
                                Chrysler Mopar ATF +4<br />
                                MAN tipi 339.X<br />
                                Mercedes-Benz 236.X<br />
                                Voith H55.63.35.XX<br />
                                Voith H55.63.36.XX<br />
                                VW parça No.<br />
                                ZF TE-ML XXZ<br />
                                &nbsp;</p>
                        </div>
                    </div>


                </article >
            </div >
        </>
    )
}

export default SanzimanYaglari;