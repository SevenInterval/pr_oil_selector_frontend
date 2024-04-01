import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";

const OnCamYikamaSivisi = () => {
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
                <h1 className="hs"><span>Frequently asked questions</span> / Ön cam yıkama sıvısı</h1>

                <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Ön cam yıkama sıvısı nedir?"}
                    answer={"Bu tipin en yaygın kullanılan yüksek kaliteli ürünleri denatüre alkol ve özel temizlik ürünleri (emülsiyonlaştırıcılar), yağlama bileşenleri, renklendiriciler ve koku bileşenlerinin bir karışımıdır."} />
                <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Nerede kullanılır?"}
                    answer={"Ön cam yıkama sıvısı depoya doldurulur ve gerektiğinde aracın ön cam sileceklerine verilir. Aracın ön camını temizlemek için kullanılır. Yıkama sıvısı aktif temizlik ürünleri içerdiğinden böcek kalıntıları, toz vs. gibi görüşü zayıflatan tüm kirleri hızlı ve kolay bir şekilde temizler."} />
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(3)}
                        className={activeAccordion === 3 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 3 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Normal suyun ön cam yıkama sıvısı olarak kullanılması problem yaratır mı?
                    </h3>
                    <div className={activeAccordion === 3 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 3 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
<p>Evet yaratır; bu problemler şunlardır:</p>
<p>- Su, organik kalıntıları (sinek, kelebek ve diğer böcekler) hızlı ve kolay temizlemez. Ön cama yapıştıklarından görüş olumsuz etkilenir.<br/>
- Su 0°C'de donar ve donma, hacmin genleşmesine sebep olarak sıvı saklama deposunda çatlağa yol açabilir.<br/>
- Bileşimine bağlı olarak, su sert (mineral içerikli) veya yumuşak (düşük mineral konsantrasyonu) olabilir. Yüksek su sertliği yüzeylerde atıkların (kireç) birikmesine ve tıkanmaya yol açar.<br/>
&nbsp;</p>
                   </div>
                </div>
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(4)}
                        className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Piyasada 'sahte' ürünler var mı?
                    </h3>
                    <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Menşei şüpheli her ürünün riskler barındırabileceği unutulmamalıdır. Bilindiği gibi, yıkama sıvılarının üretiminde ana bileşen olarak alkol kullanılmaktadır. En yaygın olanları etanol veya izopropanoldir. Metanolun kullanılması kabul edilmez ve çok tehlikelidir. Metanolun alımı insan vücudu üzerinde ciddi etkileri vardır. Başlangıçta baş ağrısı, mide bulantısı ve kusma meydana gelir, bunu nöbetler ve görme kaybı izler. Metanol, endüstriyel kullanım için birçok ürün için önemli bir maddedir ancak, temas etme olasılığı olan ve insan vücudu üzerinde etkisi olan ürünlerde bulunmasına izin verilmez. Eğer ön cam yıkama sıvısında varsa, buharı yolcu bölmesine ulaşır ve uzun mesafeli sürüşlerde etkisi zararlı ve tehlikelidir.</p>
                            <p>Bazı ürünlerin menşei bilinmez ancak, zararlı içeriğini maskeleyen çok güzel kokuları vardır ve elbette fiyatları çok uygundur.<br/>
&nbsp;</p>
                   </div>
                </div>

                <Accordion changeAcc={5} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Metanol nedir?"}
                    answer={"Metil alkol veya metanol, ağacın kuru distilasyonu ile veya metanın oksidasyonu ile elde edilen renksiz, toksik bir sıvıdır. Metanolun, Sağlık Bakanlığı'nın 1 Eylül 1995 tarihli 35 Nolu Düzenlemesine göre evde kullanılan sıvı kimyasalların bileşiminde kullanılması yasaklanmıştır."} />
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(6)}
                        className={activeAccordion === 6 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 6 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Neden aracın boyasında ve silecek lastiklerinde sorunlar çıkıyor?
                    </h3>
                    <div className={activeAccordion === 6 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 6 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Sorunlar, uyumsuzluklardan ve silecek lastikleri ile araç boyası üzerinde aşındırıcı etkisi olan yıkama sıvısındaki zararlı maddelerden kaynaklanır.</p>
                            <p>Uyumluluğundan emin olmak için, belirlenen yöntemlere göre testler yapılmaktadır. Prista kış tipi ön cam yıkama sıvısı lastik contalar, malzemeler ve boya kaplamaları üzerindeki etkiye yönelik uyumluluk testlerinden başarıyla geçmiştir. Bu testler Almanya'da, belirlenen uluslararası yöntemlere uygun olarak gerçekleştirilmiştir.</p>
                   </div>
                </div>
                <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Suyla uyumluluk"}
                    answer={"Sıkça ihmal edilen diğer bir test ise suyla uyumluluktur. Sıklıkla kullanılan bileşenler farklı su sertlik seviyeleriyle uyumlu değildir. Suyla karıştırdıktan sonra, saklama deposunda çözülmeyen maddeler birikir. Bu maddeler dibe çöker veya yüzerek zamanla memeleri tıkar ve böylece sistemin püskürtme ve cam temizleme kabiliyetini zayıflatır."} />
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(8)}
                        className={activeAccordion === 8 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 8 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Mevsime göre farklı yıkama sıvısı tipleri var mı?
                    </h3>
                    <div className={activeAccordion === 8 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 8 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                   <p>Evet. Yıkama sıvıları kış ve yaz mevsimi formülasyonlarında mevcuttur. Ayrıca ürün, belli oranda seyreltme gerektiren bir konsantre sıvı ya da kullanıma hazır bir yıkama sıvısı şeklinde olabilir.</p>
                   <p>Saklama deposunu DOLDURMADAN ÖNCE, mevsime göre doğru sıvıyı kullandığınızdan emin olun. Saklama deposu, başka kullanımlar için amaçlanmış ürünlerle doldurulmamalıdır (donmadığından dolayı, antifriz vs.).</p>
                   <p>Örneğin:</p>
                   <p>- Prista kış tipi ön cam yıkama sıvıları, eksi 20 °C'ye kadar bir donma sıcaklığı elde etmek için 1:3 oranında suyla seyreltilir.<br/>
- Prista yaz tipi ön cam yıkama sıvıları 1:10 oranında suyla seyreltilir.</p>
<p>Aşağıdaki sorular ürünün uygulanması ile ilgilidir.<br/>
&nbsp;</p>
                   </div>
                </div>
                <Accordion changeAcc={9} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yaz tipi sıvıyı kışın kullanabilir miyiz?"}
                    answer={"Hayır! Düşük sıcaklık özelliklerine sahip değildir ve bu yüzden donma riski vardır."} />
                <Accordion changeAcc={10} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Yazın kış tipi sıvıyı kullanmak akıllıca mı?"}
                    answer={"Hayır! Kış tipi sıvı, kışın böcek olmadığından sadece minimum miktarda orgranik kir temizleyici katkı maddesi içerir."} />
                <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                    <h3 onClick={() => changeActiveAccordion(11)}
                        className={activeAccordion === 11 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                        role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                        style={{ transition: "0.4s" }}>
                        <span className={activeAccordion === 11 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Yazın ve sonbaharda normal su kullanmak mümkün mü?
                    </h3>
                    <div className={activeAccordion === 11 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                        id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 11 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                   <p>Sıcak havalarda sadece normal su kullanmak ucuzdur ancak, aşağıda belirtilen riskleri taşıyan tehlikeli bir solüsyondur:</p>
                   <p>- Kireç oluşumu;<br/>
- Zayıf yıkama kabiliyeti;&nbsp;<br/>
- Tıkanma.<br/>
&nbsp;</p>
                   </div>
                </div>
                <Accordion changeAcc={12} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sıvının rengi önemli mi?"}
                    answer={"Renk, kalitenin veya mevsimsel kullanımın bir göstergesi değildir. Ticari bir göstergedir ve ürünü sudan ayırt etmek için kullanılan bir boya maddesidir."} />
                <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Ürünün konsantrasyonu nedir?"}
                    answer={"Ürün, kışın kullanılması daha kolay olan ön karışımlı bir solüsyon ve konsantre şeklinde mevcuttur. Optimum performans için, kutu üzerindeki üretici tavsiyelerine uyun."} />
                <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                    question={"Sonuç"}
                    answer={"Sürüşü eğlenceli hale getirmek için, yüksek ürün kalitesi ile ün yapmış, ürün etiketleri içerik ve dilüsyon talimatları hakkında doğru bilgiler içeren üreticilerin ön cam sıvılarını kullanmanızı tavsiye ediyoruz. Bu ürün sadece takviye edilmeyi gerektirmesine ve harcama yapmak lüzumsuz gibi görünmesine karşın, sulu solüsyonun doğru konsantrasyonunun korunması ve ön cam yıkama sisteminin - memeler, pükürtücüler ve silecek lastikleri - iyi durumda olması yolculuk sırasında görüşün iyi olmasını sağlayacak ve yol güvenliği için önemli bir faktördür."} />


            </article >
        </div >
    )
}

export default OnCamYikamaSivisi;