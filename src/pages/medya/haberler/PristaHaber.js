import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PristaOil } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";


const PristaHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">
                            <li id="galley_image_183">
                                <FancyBox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <a data-fancybox="gallery" href={PristaOil}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PristaOil} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">PRISTA OIL GRUBU: YENİDEN YAPILANIYOR</h3>
                        <div className="date">26-10-2016</div>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Daha önceden yatırım şirketi ADM Capital ve Avrupa Yeniden Yapılanma ve Kalkınma Bankası'nın (EBRD) sahip olduğu Prista Oil Grubu sermayesinin %30 hissesinin satın alım işlemi, ana hissedarlar Plamen Bobokov ve Atanas Bobokov tarafından başarıyla sonuçlandırıldı.</strong></p>
                        <p>İşlem yapısı, hissedar borcunun yeniden finansmanını ve Prista Oil'in ticari işlemlerini geliştirmeye yönelik teknoloji çözümlerinin ticari gelişimi ve uygulanması için EBRD tarafından verilen yatırım kredisinin kalanını içerdi. Bu anlaşma için UniCredit Bulbank'in verdiği 50 milyon Euro'ya kadar olan fon kullanıldı ve bu anlaşma sonucunda, azınlık payı fon hisseleri ve diğer finansal veya stratejik ortaklar olmaksızın Prista Oil Grubu'nun tam kontrolü ve yönetimi, ana hissedarlar olan Plamen Bobokov ve Atanas Bobokov'a geçti.</p>
                        <p>Geçtiğimiz dört yılda ADM Capital ve EBRD ile olan ortaklık ve işbirliği boyunca Prista Oil Grubu'nun işlettiği şirketler, ticari modelleme ve hedef belirlemede, kurumsal ortam içinde karar vermede, döner sermayenin aktif yönetimi ile bilançoyu optimize ederek, sağlıklı büyümenin ilk adımı olarak kısa vadeli borcu azaltarak ve (ana faaliyetin bir parçası olmayan) faaliyet dışı varlıkları ortadan kaldırarak önemli bir yeniden örgütlenme geçirdi. 2012 işleminin bir parçası olarak ADM Capital ve EBRD, grubun çift marka ticari stratejisinin uygulanması ve genişletilmesi amacına yönelik ana satın alımlara yardımcı olan fonlar sağladı.</p>
                        <p>Ticari modellemenin ve hedef belirlemenin yeniden düzenlenmesi, Grubun Finans Direktörünün yönettiği uzman finans ekibinin dâhil olmasıyla ve kaynak yönetimi, ticari süreç optimizasyonu ve ticari sınıflandırmaların uyumlu hale getirilmesine yönelik entegre bir ERP sisteminin uygulanmasını içeren bilgi teknolojileri temelli ticari çözümler sayesinde mümkün oldu; CRM (Müşteri İlişkileri Yönetimi) sisteminin uygulanması ise, müşterilere fiyatlar, siparişler, istekler, vb. hakkında bilgi sağlamaya yardımcı oldu.</p>
                        <p>Gelişmiş bir kurumsal ve ticari ortamın bir sonucu olarak Prista Oil Şirketler Grubu, müteakip optimizasyon sürecinde başarılı oldu. Bu sayede Ukrayna'da baz yağların terminalinin satışını yaptı ve takip eden yıl içinde, yönetim ekibine (emülsiyonlar, beyaz yağlar ve vazelinler üreten) Macaristan Bogdany Petrol'ün çoğunluk hisselerini sattı.</p>
                        <p>Bir yandan ADM Capital ve EBRD'nin sağladığı fonları kullanarak gelişim stratejisini hayata geçirirken, Prista Oil aynı zamanda iki önemli satın alıma imza attı: Orta ve Doğu Avrupa'daki 14 ülkede, Ukrayna'da, Türkiye'de ve Orta Asya'da Texaco markalı ürünlerin dağıtım haklarıyla birlikte belirli Texaco ürünlerinin üretim lisansını da içeren bir “paket anlaşma” ile 2013'te Chevron'dan Chevron Çek Cumhuriyeti ve Chevron Romanya şirketlerini satın aldı. Bugün, Premium Lubricants (eski adıyla Chevron Romanya) ve Uz-Prista (2011'de Prista Oil'in satın aldığı Uz-Texaco) en yüksek satış hacimleri ve kazançlarıyla Grubun madeni yağlar segmentindeki öncü şirketleridir.</p>
                        <p>Şu an, Grubun madeni yağlar bölümünün hedefi, faaliyette olduğu bölgelerde organik bir büyüme elde etmek, talep üzerine sipariş teslim ederek ve 80-90 milyon Euro satış hacmini ve 8-10 milyon Euro FAVÖK hedefleyerek Prista Oil'in iştiraklerle bulunmadığı fakat distribütörlerle işbirliği yaptığı ihracat pazarlarına da ayrıca odaklanmaktır.</p>
                        <p>Monbat Şirketler Grubu da sürdürülebilir kalkınmasını devam ettirmektedir. Grup iki ana alanda faaliyet göstermektedir: marş ve sabit bataryaların üretimi ve dağıtımı ile kurşun üretimi ve geri dönüşümü. Monbat Grubu, batarya faaliyetlerinin üretim kapasitesiyle birlikte geri dönüşüm tesislerinin kapasitesini artırmaya yönelik bir yatırım programını başarıyla hayata geçirdi.</p>
                        <p>Monbat şirketleri, Avrupa, Asya ve Afrika'daki 54'ü aşkın ülkede iyi işleyen bir dağıtım ağı aracılığıyla ihracat pazarlarında satışlarının %87'siyle kalıcı olarak ihracata dayalı olmaya devam ediyor. Yatırım programının hayata geçirilmesi, yıllık %9'luk bir ortalama ve bu sektörün %11'i için yaklaşık %20'lik FAVÖK marjlarıyla sürdürülebilir satış büyümesi elde etmeye yardımcı oldu.</p>
                        <p>Monbat, sadece üretim kapasitesini ve verimliliklerini artırmaya değil aynı zamanda yeni tip marş bataryaları üretimine yeni teknolojiler eklemeyi hedefleyen yatırım programı üzerinde çalışmayı sürdürecek.</p>
                        
                     <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PristaHaber;