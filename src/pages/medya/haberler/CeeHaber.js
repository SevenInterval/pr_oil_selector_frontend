import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { CeeImage1, CeeImage2, CeeImage3, CeeImage4, CeeImage5 } from "../../../images/news";

const CeeHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">

                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                                style={{ zIndex: 9999999 }}
                            >
                                <li id="galley_image_36">
                                    <a data-fancybox="gallery" href={CeeImage1}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={CeeImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_37">
                                    <a data-fancybox="gallery" href={CeeImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={CeeImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_38">
                                    <a data-fancybox="gallery" href={CeeImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={CeeImage3} />
                                    </a>
                                </li>
                                <li id="galley_image_39">
                                    <a data-fancybox="gallery" href={CeeImage4}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={CeeImage4} />
                                    </a>
                                </li>
                                <li id="galley_image_40">
                                    <a data-fancybox="gallery" href={CeeImage5}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={CeeImage5} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">CEE'DE ÖNE ÇIKANLAR</h3>
                        <div className="date">09-05-2016</div>
                        <p><span style={{ color: "#FF0000" }}><strong style={{ fontFamily: "sans-serif" }}>Çek Cumhuriyeti'ndeki Genişleme Devam Ediyor</strong></span></p>
                        <p>Müşteri kazançları, Prista Oil Çek Cumhuriyeti'nin hırslı büyüme planının kusursuz uygulanışına işaret ediyor. Son imzalanan sözleşmeler, otomotiv sektörlerinde Prista’ya önemli yeni faaliyetler kazandıracak.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>BusLine</strong>, Prag'da ve Çek Cumhuriyeti'nin kuzeyinde 500 otobüsle toplu taşıma sağlayan, çek pazarındaki ikinci en büyük oyuncudur. Kendi CNG (Sıkıştırılmış Doğal Gaz) istasyonlarına ve otobüs atölyelerine sahip, dinamik büyümesiyle yüksek bir profil çizen bir şirkettir. Prista Oil Çek Cumhuriyeti ve Slovakya Genel Müdürü Pavel Herynk, “Bu başarıdan oldukça memnunuz,” diyor. “20 yıl boyunca BusLine'a hizmet veren Shell'in yerine geçerek, ülkedeki tüm lokasyonlar için özel bir sözleşme yapmayı başardık.”</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>SIEN Solution</strong> ise, Çek ekibi için bir diğer önemli yeni müşteridir. Küçük atölyelere ve tüketicilere satış yapan 12 adet parça merkezine sahipler. Kendilerine ait atölyelerini de işletiyorlar.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Domitruck</strong>, DAF kamyonlarını satan ve tamir eden bağımsız bir büyük kamyon atölyesi. Artık Agip ve Q8'den Texaco yağlarına geçiş yaptılar. Tıpkı Çek Cumhuriyeti ve Slovakya'daki tüm diğer DAF atölyeleri gibi, mart ayında kendilerine Prista ekibi tarafından madeni yağ eğitimi verildi. “Atölyenin teknik ve müşteri hizmetleri personelinin madeni yağlar konusunda bilgili olması çok önemli, özellikle de Texaco gibi premium madeni yağlar satıyorsanız,” diyen eğitim organizatörü Satış Müdürü <strong style={{ fontFamily: "sans-serif" }}>Jakub Musil</strong> sözlerini şöyle sürdürdü: “Tüm DAF atölyeleri için bir teknik eğitim organizasyonu yapmamızın ve ayrıca Texaco markası üzerine bir sunum gerçekleştirmemizin sebebi de bu.”</p>
                        <p>Müşterileri eğitmek, Çek ekibinin de kanıtlamış olduğu gibi kesinlikle karşılığını veriyor: mart ayında DAF ciroları, önceki aylara kıyasla iki katına çıktı.</p>
                        <p>&nbsp;</p>
                        <p><span style={{ color: "#DAA520" }}><strong style={{ fontFamily: "sans-serif" }}>Macaristan: Her Dört Bosch araç atölyesinden biri Texaco madeni yağlarını satıyor.</strong></span></p>
                        <p>Bosch Genel Merkezi ve bayiler birliği ile geçen yılın sonlarında yapılan başarılı anlaşma sonrasında gittikçe daha fazla Bosch atölyesi Prista Macaristan'dan Texaco ürünleri satın almaya başladı. Kilit Müşteri Yöneticisi <strong style={{ fontFamily: "sans-serif" }}>Gábor Egri</strong>, Bosch Bölge Müdürleriyle birlikte tek tek atölyeleri ziyaret ediyor ve artık 21 atölye Havoline madeni yağlarını satın alıyor. “Şimdiye kadarki sonuçlardan memnunuz,” diyen Gábor şunları ekledi: “Artık yeni hedef, müşterilerin Texaco almaya devam etmelerini sağlamak. Bu nedenle, satın alımlarda etkileyici koşullar altında markalı pazarlama materyalleri ve atölyelere yönelik tek kullanımlık malzemeler sunarak Bosch ağı için bir sadakat programı başlatmayı planlıyoruz. Macaristan'da en büyük bağımsız atölye ağının Texaco madeni yağlarını kullanması hem bize pazar için harika bir referans oluyor hem de Havoline motor yağları için ve genel olarak Texaco marka yağlar için etkili bir marka farkındalığı katkısı sağlanıyor.”</p>
                        <p>&nbsp;</p>
                        <p><span style={{ color: "#33cc66" }}><strong style={{ fontFamily: "sans-serif" }}>Slovakya: Yeni Ekip Üyesi Aramızda</strong></span></p>
                        <p>Pavol Havasi, beraberinde Slovakya Satış Müdürü olarak bir temsilci sözleşmesiyle birlikte yakın zamanda Prista CEE'ye katıldı. Prista Dergisi kendisine hızlı bir tanıtım amacıyla bazı sorular yöneltti.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Bizlere mesleki geçmişinize dair kısa bir özet sunabilir misiniz?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> 2000 yılından beri madeni yağ sektöründe çalışıyorum. Shell Slovakya'da taşımacılık yağları uzmanı olarak çalışmaya başladım ve daha sonra dolaylı kanal müdürü olarak Shell'in Slovakya'daki distribütör ağını yönettim.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Kariyerinizde şimdiye kadarki en büyük başarınızın ne olduğunu düşünüyorsunuz?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> Shell Slovakya, 2005-2010 yılları arasında bayilik atölyesi segmentinde taşımacılık yağlarının %95 pazar payını elde etti. Kulağa komik geliyor ama doğru!</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Edindiğiniz en önemli profesyonel öğrenim nedir?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> Dürüst oynamak karşılığını verir.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Prista'ya ne getiriyorsunuz?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> Deneyim, şevk, enerji.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Prista'daki görevinize başlarken birinci önceliğiniz nedir?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> Markaya “dokunmak” ve yeni pazara nüfuz etmek. Otomotiv ve endüstri segmentlerinde fonksiyonel bir dağıtım ağı kurmaya ihtiyacımız var, böylece önümüzdeki 3 yıl içinde yılda 500.000 litre satabiliriz.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Yaşama dair ilkeniz nedir?</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Pavol Havasi:</strong> Daima sakin ve sabırlı kalmaya çalışmak.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Dergisi:</strong> Teşekkürler Pavol, başarılar diliyoruz!</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default CeeHaber;