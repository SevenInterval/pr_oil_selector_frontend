import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet>
                <title>Şanzıman yağları - Otomatik şanzımanlar</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/sanziman-yaglari-otomatik-sanzimanlar" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarFaq />
                <article>
                    <h1 className="hs"><span>Frequently asked questions</span> / Şanzıman yağları - Otomatik şanzımanlar</h1>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(1)}
                            className={activeAccordion === 1 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 1 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>ATF yağının ana işlevleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 1 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 1 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Otomatik şanzımanların çalışması göz önüne alındığında, ATF yağlarının aşağıdaki işlevleri vardır:</p>
                            <p>- Motordan otomatik şanzımanın mekanik parçalarına güç aktarma;</p>
                            <p>- Çalıştırma/durdurma sırasında sürtünme diskleri için yağlama yağı;</p>
                            <p>- Otomatik şanzıman hidrolik sisteminde bir yağlama ve çalışma sıvısı;</p>
                            <p>- Soğutma sıvısı.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(2)}
                            className={activeAccordion === 2 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 2 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Düz şanzıman yağlarıyla kıyaslandığında ATF sıvılarının ilave özellikleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 2 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 2 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- Hidrik ortam olarak, sürtünme diskleri için yağlama amaçlı ve hidrolik kavramalar (tork konvertörleri) için çalışma sıvısı olarak işlev görürler.</p>
                            <p>- ATF üretimi için, hem madeni hem sentetik baz yağlar farklı oranlarda ve çok sayıda işlevsel katkı maddeleri karıştırılarak kullanılır (bu ürünler azami miktarda işlevsel katkı maddesinin kullanılmasını gerektirir).</p>
                        </div>
                    </div>
                    <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Sürtünme özellikleri? Bu ne demek?"}
                        answer={"Sürtünme özellikleri, ATF'yi diğer şanzıman yağlarından ayıran spesifik gerekliliktir. Bu, şanzıman üreticisinin spesifikasyonlarında belirtilen sürtünme katsayısı değerlerinden (statik ve dinamik) belirlenir. ATF'nin sürtünme özellikleri, belirtilen yağ değiştirme aralığı içinde sabit kalmalıdır. Bu nedenle dişli kutusundaki ATF yağı her zaman düzgün seçilmiş bir ürünle takviye edilmeli veya değiştirilmelidir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(4)}
                            className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>ATF başka hangi uygulamalarda kullanılıyor?
                        </h2>
                        <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- ATF ayrıca çoğu araçların hidrolik direksiyon sistemlerinde kullanılır.</p>
                            <p>- ATF yağları bazı düz vites kutularında kullanılabilir (örn; Mercedes-Benz, BMW, Ford, Opel'in vs. bazı araç modellerinde)</p>
                            <p>- Belli endüstriyel hidrolik sistemlerinde de kullanılırlar.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Hidrolik direksiyon sisteminde ATF yerine sade bir hidrolik yağ kullanmak mümkün mü?"}
                        answer={"Aksi belirtilmedikçe, 'MHL' hidrolik yağ tipinin (piyasada yaygın olarak bulunan) kullanılması tavsiye edilmez."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(6)}
                            className={activeAccordion === 6 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 6 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>МТF ve ATF ilave etme?
                        </h2>
                        <div className={activeAccordion === 6 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 6 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Düz şanzıman yağları birbirleriyle uyumludur ancak, ilave yaparken bile taze yağ kullanmak gereklidir. İlave yaparken daima aynı viskozite dereceli ve performans seviyeli yağ kullanın.</p>
                            <p>ATF ile dolu bir dişli kutusuna MTF ilave etmek yanlıştır!</p>
                            <p>Otomatik şanzımanları rastgele bir ATF ürünle doldurmak da tehlikeli olabilir.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(7)}
                            className={activeAccordion === 7 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 7 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Düz şanzımanlardaki yağın değiştirilmesi. Önerilen mesafe nedir?
                        </h2>
                        <div className={activeAccordion === 7 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 7 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Çok iyi bilindiği gibi, şanzıman yağ kalitesi ve değiştirme aralıklarıyla ilgili tavsiyeler şanzıman veya araç üreticisi tarafından verilir. Bu nedenle, servis dokümanları çalışma koşullarına göre tavsiyeler içerir. Özetle, mesafe esaslı aralıklar şu şekildedir:</p>
                            <p>- Binek araçlar ve hafif ticari araçlar - aksi belirtilmedikçe, 60,000 -120,000 km;</p>
                            <p>- Büyük yük araçları - başka bir süre belirtilmedikçe, 20,000 - 100,000 km veya yılda bir;</p>
                            <p>- Ekskavatörler, bulldozerler, damperli kamyonlar - 1000 - 2000 motor çalışma saati</p>
                            <p>Önerilen çalışma süreleri yaklaşıktır ve yağların ekipman üreticilerinin gerekliliklerine göre seçildiği yola elverişli ekipmanda ulaşılabilir. Eğer üretici tarafından önerilen değiştirme aralığı yukarıda verilen aralıktan farklı ise, üreticinin taviyesi esas alınmalıdır.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={8} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Otomatik şanzıman yağının değiştirilmesi"}
                        answer={"Otomatik şanzımanlı modern araçlar için genellikle oldukça uzun bir yağ değiştirme aralığı tavsiye edilir – yaklaşık 80-100 000 km. Oldukça yüksek sayıda bakım gerektirmeyen şanzımanları olan araç mevcuttur ve yağın şanzımanın ömrü boyunca değiştirilmesi gerekmez. ‘80'li ve ‘90'lı yılların sonlarından kalan eski araçlarda yağ, aksi belirtilmedikçe, her 20-40 000 km'de değiştirilmelidir."} />


                </article >
            </div >
        </>
    )
}

export default OtomatikSanzimanYaglari;