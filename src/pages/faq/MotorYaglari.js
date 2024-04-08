import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

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
        <>
            <Helmet>
                <title>Motor yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/motor-yaglari" />
            </Helmet>
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
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(4)}
                            className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>АСЕА, yağları nasıl derecelendirir?
                        </h2>
                        <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>ACEA'ya göre yağlar, performans seviyesinin uygulama yılına göre her bir sınıf ve tip için ilgili kategorileri olan 3 ana sınıfa ayrılır:</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>A/B</strong>&nbsp;- Binek ve ticari araçların benzinli ve dizel motorları;</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>C</strong>&nbsp;– Egzos son işlem sistemleri bulunan katalizör uyumlu benzinli ve hafif ticari dizel motorlar: DPF ve TWC / DPF - dizel partikül filtresi; TWC - üç yollu katalizör;</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>E</strong>&nbsp;- Ağır görev dizel motorlar;</p>
                            <p>- Kategoriler sınıfı izleyen numara ile belirtilir: Örneğin, C1, C2 ... A3/B3; A3/B4 ... E6, E7, vs.</p>
                            <p>- Performans seviyesinin uygulama yılı: Örneğin, E5-02 ..., A3/B4-08, C1-10.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(5)}
                            className={activeAccordion === 5 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 5 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>API nedir ve yağları nasıl kategorize eder?
                        </h2>
                        <div className={activeAccordion === 5 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 5 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Amerika Petrol Enstitüsü, dizel için "C" ve benzinli için "S" ile belirtilen iki motor tipini birbirinden ayırır. "C" ve "S"den sonra gelen harfler alfabetik sırayı izler ve kategori geliştirme sırasına karşılık gelir: A, B, C, D, E, F ...</p>
                            <p>- Benzinli - API: SA, SB, SC, SD, SE, SF, SG, SH (eski) ve API: SJ, SL, SM, SN&nbsp;(mevcut)</p>
                            <p>- Dizel - API: CA, CB, CC, CD, CD-II, CE, CF, CF-2, CF-4, CG-4 (eski) ve &nbsp;CH-4, CI-4, CI-4 PLUS, CJ -4&nbsp;(mevcut)<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(6)}
                            className={activeAccordion === 6 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 6 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Viskozite derecesi ne demek?
                        </h2>
                        <div className={activeAccordion === 6 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 6 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Viskozite derecesi (<strong style={{ fontFamily: "sans-serif" }}>SAE</strong>), motor yağlarının viskozite-sıcaklık özellikleriyle ilgili bilgi sağlar. Bunlar, kinematik veya dinamik viskozite &nbsp;(veya başka bir deyişle, farklı sıcaklıklarda yağın kalınlığı) ile tanımlanır.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(7)}
                            className={activeAccordion === 7 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 7 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Motor yağları viskozite derecelerine göre mi 'mevsimsel' olarak tanımlanıyor?
                        </h2>
                        <div className={activeAccordion === 7 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 7 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Evet, yağlar tek mevsimli veya çok mevsimli olarak sınflanmaktadır:</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Kullanıldığı </strong>mevsime göre, tek mevsimli yağlar, yaz mevsimi yağları (SAE 20, .. SAE 60) ve kış mevsimi yağlarıdır (SAE 0W, ... SAE 20W); burada W harfi İngilizce'deki “Winter” (Kış) kelimesini ifade etmektedir. Bu yağların kullanımları iklime bağlıdır ve yüksek yüksek tüketim oranlı çok eski araçların dışında, modern araçlarda etkili değildir ve hatta tehlikeli olabilir.</p>
                            <p>-&nbsp;<strong style={{ fontFamily: "sans-serif" }}>Çok mevsimli</strong> yağlar tüm yıl boyunca kullanım için tasarlanmıştır. Şu şekilde işaretlenmişlerdir: SAE 0W-30 .. SAE 5W-40, ... 15W-50."W" harfinin önündeki numara, yağın düşük sıcaklık özellikleri hakkında bilgi verir. Bu sayı ne kadar düşükse, yağ düşük sıcaklıkta o kadar hızlı akar ve motoru çalıştırmak o kadar kolaylaşır. W harfinden sonraki numara, 100°C'de yağ viskozitesini belirtir.</p>
                            <p>Bu, SAE 5W-40 ve SAE 10W-40 yağ derecelerinin 100°C'de aynı viskoziteye sahip oldukları ancak, düşük-sıcaklık özelliklerinin farklı olduğu anlamına gelir.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(8)}
                            className={activeAccordion === 8 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 8 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Tüm SAE 10W-40 yağlarının aynı olduğu doğru mu?
                        </h2>
                        <div className={activeAccordion === 8 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 8 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>HAYIR, doğru değil! Motor yağını sadece viskozite derecesine göre seçmek yanlıştır.</p>
                            <p>Örneğin, SAE 10W-40, yağın &nbsp;düşük-sıcaklık özelliklerini ve 100°C'de kinematik viskozitesini gösterir ancak, performans özellikleri hakkında bilgi vermez.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Taze yağın rengi nasıldır?"}
                        answer={"Taze motor yağının rengi kalitesinin bir göstergesi değildir; miktara ve yağın üretiminde kullanılan bileşenlerin (baz yağlar ve katkı maddeleri) rengine bağlıdır."} />
                    <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Hangi markayı ve ürün grubunu seçmeliyim?"}
                        answer={"PRISTA, TEXACO, vs. gibi her marka kendi ürün gruplarını geliştirmiştir. Fazla ürün çeşitliliği kullanıcıların, çok sayıda yağ arasından uygulamaya göre farklı gereklilikleri karşılayan yağı seçmelerine imkan verir. Yağ ürün grupları binek araçlar, hafif ticari araçlar veya büyük yük araçları için özel olarak tasarlanmıştır. Örneğin, TEXACO'nun HAVOLINE grubu hafif ticari araçlar için amaçlanmışken URSA, ağır görev dizel motorlar için tasarlanmıştır."} />
                    <Accordion changeAcc={11} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Optimum yağ değiştirme aralığı nedir?"}
                        answer={"Yağ imalatçıları, mesafe esaslı aralıkları belirlemezler. Performans seviyesini belirleyen ve bir viskozite derecesi öneren çalışma koşulları ve araç bakım aralıkları ekipman üreticisi tarafından servis dokümanlarında belirtilir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(12)}
                            className={activeAccordion === 12 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 12 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Mesafe esaslı yağ değiştirme aralığını belirlemek için başka kriterler var mı?
                        </h2>
                        <div className={activeAccordion === 12 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 12 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Evet, aşağıdakiler gibi başka kriterleri de göz önünde bulundurularak optimum mesafe daha iyi belirlenir:</p>
                            <p>- Motor çalışma modu (normal veya spor modu; örneğin daha ağır motor yükü)</p>
                            <p>- Sürüş koşulları (kırsal alan, otoban veya genellikle şehir içinde kullanım (örn; motorun sık sık çalıştırılıp durdurulduğu kısa mesafelerde ve motor soğuk çalıştırılarak kullanıldığında)&nbsp;</p>
                            <p>- Ortamın toz seviyesi</p>
                            <p>- Aracın teknik koşulları, üretim yılı ve yıla göre kat edilen gerçek mesafe<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Neden bazı etiketlerde hem benzinli hem de dizel motorlar için teknik özellikler veriliyor?"}
                        answer={"Çünkü bu yağlar hem benzinli hem de dizel motorlarda kullanım için uygundur ve özellikle karışık araç filolarında kullanım amaçlıdır."} />
                    <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Sonuç"}
                        answer={"Belli bir motor tipi için motor yağı seçimi, fiyat veya ürünün markası tarafından belirlenmeyen kişisel bir karardır ve üreticinin gereklilikleri ile aracın teknik durumu doğru değerlendirilerek yapılır."} />

                </article >
            </div >
        </>
    )
}

export default MotorYaglari;