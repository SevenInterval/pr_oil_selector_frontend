import { useState } from "react";
import SideBarFaq from "../../components/SidebarFaq";
import Accordion from "../../components/Accordion";
import { Helmet } from "react-helmet-async";

const FrenHidroligi = () => {
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
                <title>Fren hidroliği</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/faq/fren-hidroligi" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarFaq />
                <article>
                    <h1 className="hs"><span>Frequently asked questions</span> / Fren hidroliği</h1>

                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(1)}
                            className={activeAccordion === 1 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 1 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Fren hidroliği nedir?
                        </h2>
                        <div className={activeAccordion === 1 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 1 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Fren hidroliği</strong>, fren sistemlerinde kullanılan özel bir hidrolik yağ tipidir. Günümüzdeki çoğu fren hidrolikleri korozyon önleyiciler eklenmiş sentetik bileşenler esaslıdır.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={2} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Fren hidrolikleri nerelerde kullanılır?"}
                        answer={"Fren hidrolikleri, binek araçların ve hafif ticari araçların hidrolik fren sistemlerinde basıncı fren mekanizmalarına aktarmak için kullanılırlar. Başka bir uygulama alanı ise hidrolik debriyaj sistemleridir. Ayrıca, motosikletlerin fren sistemlerinde de kullanılmaktadırlar."} />
                    <Accordion changeAcc={3} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Fren hidrolikleri için hangi teknik gereklilikler mevcut?"}
                        answer={"Fren sistemi çalıştığında, büyük miktarda ısı oluşur ve bu nedenle fren hidroliğinin, etkili çalışması için yüksek bir kaynama noktasına sahip olması gerekir (kuru ve ıslak kaynama noktası). Fren hidrolikleri eksi hava sıcaklıklarında donmamalıdır. Bu gereklilikler, su bazlı fren hidroliklerinin kullanımı seçeneği için geçerli değildir."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(4)}
                            className={activeAccordion === 4 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 4 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Fren hidroliğinin özellikleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 4 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 4 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- Yüksek kaynama sıcaklığı;<br />
                                - Doğru viskozite ve düşük sıcaklıklarda iyi akma kabiliyeti;<br />
                                - Eskimeye karşı direnç;<br />
                                - Geniş çalışma sıcaklık aralığı ve düşük uçuculuk;<br />
                                - Sızdırmazlık malzemeleriyle mükemmel uyum.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(5)}
                            className={activeAccordion === 5 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 5 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Sınıflamalar ve Spesifikasyonlar. Bu kısaltmalar ne anlama geliyor?
                        </h2>
                        <div className={activeAccordion === 5 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 5 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Fren hidroliklerinin temel özellikleri aşağıdaki spesifikasyonlar tarafından düzenlenmektedir:</p>
                            <p>- <strong style={{ fontFamily: "sans-serif" }}>SAE J1702, J1703, J1704</strong><br />
                                - <strong style={{ fontFamily: "sans-serif" }}>ISO 4925 Sınıf X; X=3,4</strong>…..<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>FMVSS №116 –&nbsp;ABD</strong> Ulusal Motorlu Araç Güvenlik Standardı;<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>JIS K2233 Sınıf X; X=3,4</strong>&nbsp;– Japon Endüstriyel Standartları;<br />
                                - <strong style={{ fontFamily: "sans-serif" }}>ATE-DOT X; X=3,4,5.1</strong>–&nbsp;Çalışma Uygulamaları Standardı;</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Eskiden kullanılan spesifikasyonlar:</strong></p>
                            <p>- SAE 70 R 1 ve 3; SAE J70C; SAE J 1703 А, F ve SAE J 1703 Ocak ’80, Kasım ’83 ve Ekim’85'e kadar.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={6} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"DOT ne anlama geliyor?"}
                        answer={"DOT, fren hidroliği için genel bir ad haline gelmiştir. ABD Ulaştırma Bakanlığı (US Department оf Transportation - DOT) ifadesinin kısaltmasıdır."} />

                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(7)}
                            className={activeAccordion === 7 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 7 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Farklı DOT spesifikasyonları nelerdir?
                        </h2>
                        <div className={activeAccordion === 7 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 7 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Fren hidrolikleri, ABD Ulaştırma Bakanlığı spesifikasyonlarını karşılayan farklı biçimlerde mevcuttur.</p>
                            <p>- Bu spesifikasyonlar DOT 3, DOT 4 ve DOT 5.1 dir.<br />
                                - DOT 5, bazı uygulamalarda kullanılabilir ancak kimyasal bileşenleri bakımından yukarıdaki spesifikasyonlardan farklıdır. Bu fren hidroliği türü, sıradan araçlarda kullanılamaz.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(8)}
                            className={activeAccordion === 8 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 8 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Fen hidroliklerinin bileşimi nedir?
                        </h2>
                        <div className={activeAccordion === 8 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 8 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p><strong style={{ fontFamily: "sans-serif" }}>DOT 3, DOT 4 ve DOT 5.1</strong> polietilen glikol bazlı, DOT 5 ise silikon bazlı sıvılardır.</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>DOT 3, DOT 4 ve DOT 5.1</strong>&nbsp;higroskopiktir ve atmosferdeki suyu ve nemi absorbe edecektir. Su emilimi hidroliğin performans karakteristiklerini zayıflatır ve kaynama noktasında büyük düşüş yaratır (değiştirilmesini gerektiren nedenlerden birisi).<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(9)}
                            className={activeAccordion === 9 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 9 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Bu sıvıların diğer özellikleri nelerdir?
                        </h2>
                        <div className={activeAccordion === 9 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 9 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Glikol bazlı sıvılar</strong>:</p>
                            <p>- Isındıklarında bile silikon bazlı sıvılardan iki kat daha az sıkıştırılırlar;&nbsp;<br />
                                - Sıvıların düşük sıkıştırılabilirlik özellikleri daha iyi sistem performansı sağlar ve fren pedalının sertlik hissini arttırır;</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Depolama:</strong> glikoller higroskopiktir ve atmosferdeki suyu emerek şunlara yol açar:</p>
                            <p>- Fren hidroliğinin düşük kaynama noktası<br />
                                - Zayıf hidrolik verimliliği.</p>
                            <p>Su içeriği düşük sıcaklıklarda viskoziteyi artırır ve korozyon aktivitesini yoğunlaştırır.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(10)}
                            className={activeAccordion === 10 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 10 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>DOT 5 – farkı nedir?
                        </h2>
                        <div className={activeAccordion === 10 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 10 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p><strong style={{ fontFamily: "sans-serif" }}>DOT 5</strong>, silikon bazlı bir sıvı olup diğer polietilen glikol bazlı sıvılarla uyumlu değildir. Ana fark silikon bazlı sıvının higroskopik olmasııdır.</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(11)}
                            className={activeAccordion === 11 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 11 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Fren hidroliği - değiştirmenin faydaları
                        </h2>
                        <div className={activeAccordion === 11 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 11 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Fren hidroliğinin değiştirilmesi normal ve güvenli fren sistemi çalışması sağlayacaktır. Diğer yandan, düzenli olarak değiştirilmesi fren parçalarının ömrünü uzatacaktır.</p>
                            <p>Fren hidroliğinin kullanımı esnasında dikkat edilmesi gereken TEMEL HUSUSLAR:</p>
                            <p>- Bu sıvı tipi toksik ve yanıcıdır; gerekli özen gösterilerek ve önlemler alınarak kullanılmalıdır;<br />
                                - Fren hidroliği aracın hidro-pnömatik sisteminin içine boşaltılmamalıdır (bu sistem diğer ürünlerle doldurulur; LHM gibi);&nbsp;<br />
                                - Fren hidroliği saklama kapları, havadaki nemin girmesini önlemek için her zaman çok temiz ve hava geçirmez olmalıdır.<br />
                                - Fren hidroliğinin içindeki maddelerin araç boyası, lake ve krom kaplamalı parçalar üzerinde güçlü korozyon etkisi vardır ve bu durum, ürünü kullanırken göz önünde bulundurulmalıdır.<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(12)}
                            className={activeAccordion === 12 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 12 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Farklı DOT oranlı fren hidroliklerini karıştırmak mümkün mü?
                        </h2>
                        <div className={activeAccordion === 12 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 12 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- DOT 3, DOT 4 ile karıştırılabilir.<br />
                                - DOT 3 ve DOT 4 oranlı hidrolikler de DOT 5.1 oranlı fren hidrolikleriyle karıştırılabilir;<br />
                                - DOT 5(silikon bazlı) diğer DOT oranlı hidroliklerle UYUMLU DEĞİLDİR<br />
                                &nbsp;</p>
                        </div>
                    </div>
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(13)}
                            className={activeAccordion === 13 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 13 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Hangi sıvının takviye edilmesi daha iyidir?
                        </h2>
                        <div className={activeAccordion === 13 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 13 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>Takviye için, teknik gereklilikler karşılandığı sürece herhangi bir ticari marka kullanılabilir. Daha düşük spesifikasyonlu bir sıvı daha yüksek DOT oranlı bir sıvı ile değiştirilebilir (örneğin DOT3, DOT4 ile değiştirilebilir).</p>
                            <p>DOT5 ile doldurulmuş bir araç sistemine, başka oranlara sahip herhangi bir fren hidroliği (örn; DOT 3, DOT 4 veya DOT 5.1) ilave edilmemelidir.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={14} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Fren hidroliğinin değiştirilmesi veya takviye edilmesi gerekiyor mu?"}
                        answer={"İlave yapma, eskiyen hidrolikte meydana gelen geri dönüşü olmayan değişiklikleri dengeleyemez. Kaynama noktası düşer. Kimyasal bileşimi değişir. Korozyon inhibitörler zamanla zayıflar."} />
                    <Accordion changeAcc={15} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Fren hidroliğinin ne zaman değiştirileceğini nasıl bilebilirim?"}
                        answer={"Özel araç servis merkezleri, test cihazıyla kontrol yapmaktadırlar. Eğer fren hidroliğinin değiştirilme zamanı ile veya değiştirilip değiştirilmediği ile ilgili herhangi bir bilgi yoksa, ya zaman kaybetmeden değiştirin ya da fren sistemini kontrol ettirin."} />
                    <div id="object-list" className="faq-object-list ui-accordion ui-widget ui-helper-reset" role="tablist">
                        <h2 onClick={() => changeActiveAccordion(16)}
                            className={activeAccordion === 16 ? "ui-accordion-header ui-state-default ui-accordion-icons ui-accordion-header-active ui-state-active ui-corner-top" : "ui-accordion-header ui-state-default ui-corner-all ui-accordion-icons"}
                            role="tab" id="ui-id-1" aria-controls="ui-id-2" aria-selected="false" aria-expanded="false" tabIndex="0"
                            style={{ transition: "0.4s" }}>
                            <span className={activeAccordion === 16 ? "ui-accordion-header-icon ui-icon ui-icon-triangle-1-s" : "ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"}></span>Neden Prista ve Texaco ürünleri talep edilmelidir?
                        </h2>
                        <div className={activeAccordion === 16 ? "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content-active" : "cont ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"}
                            id="ui-id-2" aria-labelledby="ui-id-1" role="tabpanel" aria-hidden="true" style={activeAccordion === 16 ? { transform: "scaleY(1)", transformOrigin: "top", transition: "transform 0.5s ease" } : { transform: "scaleY(0)", transition: "transform 0.3s ease", transformOrigin: "top", height: "0px", padding: "0", margin: "0" }}>
                            <p>- Garantili menşe ve kalite;&nbsp;<br />
                                - Geniş ticari dağıtım ağı;<br />
                                - Standartlaştırılmış ürünler;<br />
                                - Ülke çapındaki markalı oto servis merkezlerimizde profesyonel yaklaşım.</p>
                        </div>
                    </div>
                    <Accordion changeAcc={17} activeAccordion={activeAccordion} changeActiveAccordion={changeActiveAccordion}
                        question={"Recommendation for mileage and fluid change intervals?"}
                        answer={"The recommended brake fluid change interval is every two years!"} />



                </article >
            </div >
        </>
    )
}

export default FrenHidroligi;