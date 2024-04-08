import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

const Antifriz = () => {
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
                <title>Antifriz</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/antifriz-2" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarFaq />
                <article>
                    <h1 className="hs"><span>Frequently asked questions</span> / Antifriz</h1>

                    <Accordion changeAcc={1} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifriz nedir?"}
                        answer={"Antifriz, içten yanmalı motorlarda suyla soğutma yöntemi ile etkili ısı değişimi sağlayan bir sıvıdır."} />
                    <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"En iyi soğutma özellikli sıvı hangisidir?"}
                        answer={"Su, etkili soğutma için en iyi kabiliyete sahiptir. Yüksek bir spesifik termal kapasiteye sahiptir; örneğin, en düşük olası hacmin içine büyük miktarda ısı absorbe eder."} />
                    <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Soğutma suyu olarak normal su kullanılabilir mi?"}
                        answer={"Hayır, kullanılamaz."} />
                    <Accordion changeAcc={4} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Düşük kaliteli soğutma sularından dolayı araçta meydana gelen en yaygın hasarlar nelerdir?"}
                        answer={"‘90'lı yıllarından sonlarından itibaren yapılan çalışmalar, ortalama her 10 araçtan 7'sinde pas ve kireç olduğunu göstermiştir. Devridaim pompalarının %60'ından fazlası, keçe ve conta sorunlarından dolayı arızalanmıştır. Motorların %20'sinden fazlası, soğutma sisteminden dolayı arızalanmıştır. Kireç oluşur ve sadece 0.6mm kireç, ısı kaybını %40 oranında azaltabilir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(5)}
                            className={activeAccordion === 5 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 5 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Antifrizin ana işlevleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 5 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 5 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Antifriz, aşağıdaki amaçlar için tasarlanmış bir sıvıdır:</p>
                            <p>-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;etkili ısı değişimi sağlamak<br />
                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;metal yüzeyleri korozyondan korumak<br />
                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;donmayı önlemek<br />
                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;plastik parçalarla ve lastik contalarla uyumlu olmak<br />
                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;düşük köpürme özelliğine sahip olmak<br />
                                -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hem düşük hem de yüksek sıcaklıklarda kimyasal olarak kararlı olmak</p>
                        </div>
                    </div>

                    <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Otomotiv endüstrisinde kullanılan hangi metal yüzeyler antifriz ile korozyondan korunmalıdır?"}
                        answer={"Korunması gereken ana metaller şunlardır: demir, çelik ve dökme demir, döküm veya damgalı parçalar şeklindeki alüminyum alaşımlar, bakır, pirinç ve kurşun bazlı lehimler. Sıradan bakır veya pirinç radyatörler, plastik taşma depolu alüminyum radyatörlerle değiştiriliyor."} />
                    <Accordion changeAcc={7} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Soğutma sularının bileşimi nedir?"}
                        answer={"Soğutma suları genellikle etilen glikol, propilen gliko, gliserin ve katkı maddelerinden yapılır."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(8)}
                            className={activeAccordion === 8 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 8 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Farklı antifriz tiplerinde hangi katkı maddeleri kulanılır ve amaçları nelerdir?
                        </h2>
                        <div className={activeAccordion === 8 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 8 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- Korozyon önleyiciler<br />
                                - Dengeleyiciler - korozyon inhibitörlerin salınmasını önler; örneğin, silikat dengeleyiciler<br />
                                - Seyreltme dengeleyiciler - sert suyun sebep olduğu atıkları önler<br />
                                - PH tampon maddesi - istenilen pH seviyesini korur<br />
                                - Köpük önleme - köpürme özelliğini kontrol eder<br />
                                - Renker - tanıma için kullanılır</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(9)}
                            className={activeAccordion === 9 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 9 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>İnhibitör nedir?
                        </h2>
                        <div className={activeAccordion === 9 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 9 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>İnhibitör, işlem geciktirici gibi çalışan bir maddedir. Antifriz sıvılarında, metal yüzeyleri korozyondan koruyan bir kimyasal katkı maddesidir.</p>
                            <p>Antifrizde en yaygın kullanılan inhibitörler borat, fosfat, benzoat, nitrit, silikat vs. içerir. İnhibitörler, metaller için gerekli korumak sağlamak için yeterli konsantrasyon oranında olmalıdır.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(10)}
                            className={activeAccordion === 10 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 10 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Piyasada hangi antifriz çeşitleri mevcuttur?
                        </h2>
                        <div className={activeAccordion === 10 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 10 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Geleneksel </strong>- bu, büyük oranda madeni katkı maddesi ve %10'a kadar organik katkı maddesi içeren bilinen bir üründür. 1995'ten önce üretilen motorlarda kullanım için uygundur.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Organik&nbsp;</strong>- bu antifriz organik madde esaslıdır (mono ve di-karboksilik asitler) ve silikat veya nitrat, amin ve fosfat gibi potansiyel olarak zararlı katkı maddeleri içermez. Bu tip soğutma suyu, modern otomotiv uygulamalarındaki alüminyum ve demir alaşımların uzun süreli korunması yüksek gereklilikleri karşılar. Antifrizin oldukça uzun bir değiştirme aralığı vardır ve 1996'dan sonra üretilen motorlar için uygundur.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Hibrid</strong>- organik madde esaslı olarak formüle edilmiş bir soğutma suyu (mono ve di-karboksilik asitler) ve silikat inhibitörleri veya nitrat, amin ve fosfat gibi potansiyel olarak zararlı katkı maddeleri içermez.</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>Lobrid&nbsp;</strong>- Bu soğutma suyu tipi nitrat, amin veya fosfat içermez. Korozyon korunumu için kullanılan bileşenler organik maddelerle formüle edilmiştir ve Hibrid tipi antifrizle kıyaslandığında çok daha düşük oranda silikat katkı maddesi içermektedir.</p>
                            <p>- Propilen Glikol bazlı antifriz ürünleri piyasada çok yüksek miktarda mevcuttur. Bu tip soğutma suları toksik olmadıklarından "ekolojik" antifrizi formüle etmede çok tercih edilmektedir.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={11} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifrizin rengi önemli mi?"}
                        answer={"Sıklıkla antifrizin rengi uygulamasıyla yanlış bir şekilde ilişkilendirilmektedir. Antifriz sarı, kırmızı, mor, mavi ve hatta pembe renkli bile olabilir. Rengin kalite parametrelerinde belirleyici olmadığını bilmek önemlidir!!! (Farklı formülasyonlar aynı renkli olabilir veya bunun tersi de mümkündür). Ancak, renk garanti bir gösterge olabilir."} />
                    <Accordion changeAcc={12} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"İlave için hangi antifrizi kullanmalıyım?"}
                        answer={"Her etilen glikol bazlı antifriz, diğer markalarla eşit derecede bileşenle karıştırılmıştır. Uzun ömürlü antifrizi düşük performans seviyeli bir soğutma suyu ile karıştırırken, yeni formüle edilen karışımda soğutma sistemi için güvenli olmayan bileşenler oluşabileceğinden sorunlar çıkabilir. Bu nedenle, elinizde aracınız için önerilen bir ürün yoksa, kış mevsiminden önce sistemi suyla doldurun ve sıvı seviyesini ölçtürün. Daha sonra, gerekirse, istenilen konsantrasyonu elde etmek içn uygun üründen ilave edin."} />
                    <Accordion changeAcc={13} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifrizi değiştirmek önemli mi?"}
                        answer={"Evet, önemli!"} />
                    <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Değiştirilmesini gerekli kılan nedir?"}
                        answer={"Sistemdeki metallerle veya diğer bileşimlerle etkileşime girmekten dolayı inhibitörlerin yok olması. İnhibitör içeriğinin yetersiz olması genel ve kavitasyon korozyonuna yol açar. Diğer taraftan, inhibitör içeriği arttıkça tortu oluşumu meydana gelir ve bunun sonucunda radyatörde kaçak ve aşırı ısınma ile karşılaşılır. Yüksek nitrit seviyeleri alüminyum bileşenlerde korozyonuna yol açarken yüksek katı partikül konsantrasyonu devridaim pompasının erken aşınmasına sebep olur."} />
                    <Accordion changeAcc={15} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Soğutma sistemi için optimum karışım oranı nedir?"}
                        answer={"Yol boyunca korunan % 40–50 antifriz konsantrasyonu."} />
                    <Accordion changeAcc={16} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Yanlış antifriz konsantrasyonu oranının riskleri nelerdir?"}
                        answer={"Uygun olmayan su - etilen glikol oranı zayıf ısı transferine ve sistemin aşırı ısınmasına yol açabilir. Etilen glikol miktarı (antifriz konsantrasyonu) arttıkça soğutma suyunun viskozitesi artar ve ısı önleme performansı zayıflar. Yüksek su miktarı, radyatörde çatlama gibi çok ciddi hasarla sonuçlanabilecek donma riski taşır."} />
                    <Accordion changeAcc={17} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifriz nasıl ilave edilir veya değiştirilir= Herhangi bir özel yöntemi var mı?"}
                        answer={"Elbette var. Önceden konsantrasyonu suyla karıştırın ve daha sonra sisteme ilave edin. Bu önemlidir çünkü, saf konsantrasyon tek başına ilave edilirse, homojenleşme süresi yeterli olmayabilir ve bunun sonucunda sistemde su alanları kalarak donma ve hacim genleşmesi sonrasında hasara yol açabilir."} />
                    <Accordion changeAcc={18} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifrizi musluk suyu ile birlikte ilave etmek mümkün mü?"}
                        answer={"Техасо'nun PRISTA ANTIFREEZE LONG LIFE ve HAVOLINE EXTENDED LIFE ANTIFREEZE COOLANT ürünleri, sert sudan dolayı kireçlenmeyi önlemek için gerekli dağıtıcı dengeleyiciler ihtiva etmektedir. Başka bir deyişle, kireçlenme problemi oluşmaz. Ancak, musluk suyunun sadece distile ya da yumuşak suyun bulunmadığı durumlarda kullanılmasını tavsiye ediyoruz."} />
                    <Accordion changeAcc={19} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifriz seviyesi ne zaman ve nasıl kontrol edilir?"}
                        answer={"Kaput açılarak soğutma suyu seviyesi gözle kontrol edilebilir. Kontrol etmenin başka bir yöntemi, kış mevsiminden önce bir refraktometre ile önleyici testin yapılmasıdır. Bu durumda donmaya karşı koruma ve kontroller 20°С'deki sıvı sıcaklığında yapılmalıdır; aksi halde, okuma değerleri doğru olmayabilir."} />
                    <Accordion changeAcc={20} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Antifriz için mesafe esaslı değiştirme aralığı nedir?"}
                        answer={"Mesafe, bir ürünün uyumlu olduğu kalite ve performans gerekliliklerine bağlı olacaktır. Ürünün markasına ve tipine ve aracın durumuna göre aralıklar, 30 000 - 650 000 km'lik mesafe ile 3-5 yıl arasında değişmektedir. Binek araçlar için, araç üreticisi tarafından aksi önerilmedikçe, azami mesafe 250.000 km'ye kadardır."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(21)}
                            className={activeAccordion === 21 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 21 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>G12? Ne tür bir antifrizdir?
                        </h2>
                        <div className={activeAccordion === 21 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 21 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>G12, VAG Auto Group'un OEM spesifikasyonunun bir kısaltmasıdır. TEXACO'nun "PRISTA ANTIFREEZE LONG LIFE“ ve “HAVOLINE EXTENDED LIFE ANTIFREEZE COOLANT” ürünleri, <strong style={{ fontFamily: "sans-serif" }}>TL-VW 774 D, F spesifikasyonunu karşılayan ve aynı zamanda G12 ve G12+ tipi antifrizler olarak bilinen iki üründür.</strong></p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(22)}
                            className={activeAccordion === 22 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 22 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Sınıflamalar ve Spesifikasyonlar. Bu kısaltmalar ne anlama geliyor?
                        </h2>
                        <div className={activeAccordion === 22 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 22 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Tüm mevcut antifriz standartlarının belli parametre oranları vardır:</p>
                            <p>-&nbsp;<strong style={{ fontFamily: "sans-serif" }}>ASTM&nbsp;</strong>– Amerikan Test ve Malzeme Kurumu;<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>BS&nbsp;</strong>– İngiliz Standardı;<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>AFNOR&nbsp;</strong>– Association française de Normalisation (Fransız ulusal standardizasyon teşkilatı)<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>MIL&nbsp;</strong>– Askeri Standart ;<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>NATO&nbsp;</strong>– Askeri Standart ;<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>SAE J&nbsp;</strong>– ABD Otomotiv Mühendisleri Derneği<br />
                                -&nbsp;<strong style={{ fontFamily: "sans-serif" }}>БДС&nbsp;</strong>– Bulgar Ülke Standardı</p>
                        </div>
                    </div>

                </article >
            </div >
        </>
    )
}

export default Antifriz;