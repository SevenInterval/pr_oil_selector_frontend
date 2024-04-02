import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PristaRecLargeImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const PlamenRuseHaber = () => {
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
                                    <a data-fancybox="gallery" href={PristaRecLargeImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PristaRecLargeImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Plamen Bobokov: Ruse sadece kalbimde değil, aynı zamanda gelecekteki tüm projelerimde yer alıyor</h3>
                        <div className="date">22-03-2016</div>
                        <p><strong style={{ fontFamily: "sans-serif" }}>"Prista Oil“&nbsp;Bulgaristan'daki başarılı işletme alanında ve çok daha önemlisi uluslararası ölçekte bir sembol haline gelmiştir. Faaliyetleriniz kaç ülkeye uzanıyor ve yeni yılda hangi sonuçları bekliyorsunuz?</strong></p>
                        <p>Bence 2016 yılı tarihi olarak Prista Oil için en iyi yıl olacaktır. Ben, her an uygulamaya geçebilecek bir dizi anlaşma imzaladığımdan dolayı, mantık olarak mükemmel sonuçlardan daha fazlasını bekliyorum. Yani sonuçların iki katına değil, üç katına çıkacağını bekliyorum. &nbsp;Ancak peşin konuşmayalım; tahminlerin gerçeğe dönüşmesini bekleyeceğiz; geçen bir kaç yıldaki deneyimim bana daha dikkatli olmayı öğrettti. İşin coğrafyasıyla ilgili olarak, şu anda Bulgaristan'daki üretim tesislerimizle birlikte yurtdışındaki tesislerimizde de üretim yapıyoruz. Bizim için ana pazarlar olan Bulgaristan ve Romanya pazarının dışında Prista, AB üyesi olmayan ülkelere özel olarak yönelmiştir - şu anda 4 kıtada 40'tan fazla ülkeye ürün veriyoruz.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>2015&nbsp;yazından beri Güney Doğu Avrupa'daki ilk özel tesis olan Bulstrad Arena bunun somut bir örneğidir. Siz ve kardeşiniz Atanas'ın Ruse Belediyesiyle birlikte kamu özel ortaklığı ile geliştirip tamamladığınız türünün ilk projesi. Ruse şehri için olumlu etkileri nelerdir?</strong></p>
                        <p>Birkaç kez söyledim Bulstrad Arena şehrimizin görkemini ve büyüklüğünü geri getirecektir. Bu, projemizin şehri Bulgaristan'da bir kültür merkezi olarak "taçlandırmanın" önemli bir koşulu olan Ruse'nın yeniden canlandırılmasını ve Güney Doğu Avrupa'da kültür, spor, kamu, iş ve kongre faaliyetleri alanında hak ettiği yeri almasını amaçlayan parçasıdır. Uluslararası dikkati ve turistleri çekmek ve böylece şehrimizdeki ekonomik sıçramayı yapmak. Bir kez daha tesise yönelik taahütlerimizin yapım ve açılışla bitmediğini, bakımı ile ilgili ana harcamalarla devam edeceğini belirtmek istiyorum.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Tesisin geleceği ile ilgili beklentileriniz nelerdir?</strong></p>
                        <p>En büyük beklentimiz Bulstrad Arena'nın çevresinde ilginç, iş ve kültürel kültürel faaliyetlerin gerçekleştirildiği bir tesis ve Danube bölgesi için bir cazibe merkezi olmasıdır ve ben burada bölgenin sadece Bulgaristan kısmını değil ayrıca Romanya kısmını da dahil ediyorum. Dünya, Avrupa, ulusal, bölgesel ve yerel bazda tüm etkinliklerin gerçekleştirildiği bir yer. Aslında, bu tesis sadece başlangıç değil ve yaratmak istediğimiz her şeyin kalbinde yer almaktadır. Şu anda tesisi sportif, kültürel faaliyetler ve kongreler için daha çekici kılmak için ilave projeler üzerinde çalışıyoruz. Sonraki yatırımımız bu tesisin yakınında Mayıs ayında başlamasını umduğumuz bir otel olacaktır. Tesisin %100 çalışmasına katkı sağlayacaktır. Bu yapı "spor kampı" hizmetini başlatmamıza imkan tanıyacaktır. Modern otel tesisleri, küçük spor salonlarının yanında ana Bulstrad Arena Salonunu da kullanabilecek kulüp ve ulusal takımlar tarafıondan entrenman amaçlı olarak hizmet verebilecektir. Aynı durum bilet fiyatına kahvaltı, öğle yemeği, akşam yemeğini vs. içeren konaklama paketini ekleyen kültürel faaliyetleri izlemeye gelen misafirler için de geçerlidir.</p>
                        <p>Otelin modern ve hoş bir SPA alanı, bir yüzme havuzu ve bir fitness salonu olacaktır. Bu otel öncelikle farklı türde ve ölçekte orgranize edilen etkinlikler için geniş fırsatlar sunan modern ve erkonomik konferans salonu ile donatılmış Ruse şehri için planlanmaktadır - 250 kişilik küçük iş toplantıları, basın koferansları ve forumlardan 3&nbsp;000 kişiye kadar olan büyük ölçekli kongrelere kadar. Tüm beklentilerin karşılanması için her detaya özel dikkat gösterilmiştir. Otel ile Bulstrad Arena arasında müşterilerin rahatı ve aynı zamanda yeme-içme hizmetleri için sıcak bir bağlantı olacaktır. Otelin mutfağı yaklaşık 4000 kişiye hizmet vermemize olanak sağlayacak şekilde tasarlanacaktır. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
                            Uzun vadeli düşünmeliyiz çünkü sadece iki yıllık zaman içerisinde, 2018'de, Bulgaristan Avrupa Birliğinin önde gelen bir ülkesi olacaktır. Ve ardından Danube Nehri üzerindeki Bulgaristan'ın en büyük şehri ve Bulgaristan ile Romanya arasındaki Danube stratejisindeki merkez şehir olan Ruse, çok sayıda uluslararası etkinliğe ev sahipliği yapacaktır.</p>
                        <p>Bu beklentiye cevap vermek için hazır olmamız gerekir. Güzel bulvarların ve sevimli parkların yanında Ruse şehrinin aynı zamanda çok sayıda misafirin konaklayabileceği bir yere, buluşacakları ve Avrupa seviyesinde hizmete alabilecekleri bir salona ihtiyacı vardır.</p>
                        <p>Sonuç olarak ben ve kardeşim, şehirdeki çeşitli işletmelerden yatırım çekmek için Ruse için daha çok şey yapmayı planladığımızı söylemek istiyorum ancak bu aşamada bu konuda daha detaylı bilgi vermek istemiyorum. Gerçek şu ki Ruse sadece kalbimizde değil, aynı zamanda gelecekteki tüm projelerimizde yer alıyor.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Bu bağlamda, Ruse'deki Eski Konservatuar binası ve onu Bulgaristan'daki İlk Özel Müze yapma ile ilgili düşüncenize ne oldu?&nbsp;</strong></p>
                        <p>Müze bitirilecek. Şu anda biz bu projeyi gerçeğe dönüştürmek için tüm uygun adımları atıyoruz. Bu özel kültürel yapıyı yıllarca koruyacak ve tahrip edilmesine ve başka bir "dahi proje" ile yer değiştirilmesine izin vermeyecek bir proje. Biz bir AB programına başvuruyoruz ve beklememiz gerekiyor; hala, Bulgaristan'daki en modern müzeyi yapmak için gücümüz ve standartlarımız çerçevesinde her şeyi yaptığımıza inanıyorum. Açılışıyla birlikte Ruse şehrinin ruhunu canlandırma ve Bülgaristan'ın kültür başkenti olarak eski görkemine kavuşturma düşüncemizi tamamlayan başka bir taahüdümüzü yerine getirmiş olacağız.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Ruse Üniversitesi'nin Yönetim Kurulu üyesi olacağınız doğru mu?</strong></p>
                        <p>Evet, doğru. Sadece kardeşim Atanas değil, ben de Ruse “Angel Kanchev” Üniversitesi'nin Yönetim Kurulunun bir parçası olacağız. Bu bizim için büyük bir onurdur. Bu davet bana yeni rektör Prof. Dr. Velizara Pencheva, Ruse Belediye Meclisi Başkanı ve üniversitenin eski rektörü, yabancı diller bölümü başkanı CM Prof. Dr. Hristo Beloev tarafından yapıldı.<br />
                            Benim ve kardeşimin Üniversite ile ilgili ilginç geliştirme planları varken bu teklifi kabul etmememiz mümkün değildi. Bu yüzden, Belediye ve Ruse Üniversitesi ile yaptığımız kamu özel ortaklığımızdan edindiğimiz pozitif tecrübeyi pratiğe dökmeyi başaracağımıza inanıyorum. Eğitimde önde gelen bir merkez olan üniversite ve genel anlamda iyi eğitim, sadece şehrimiz ve iş sektörü için değil, aynı zamanda bölgenin bir bütün olarak gelişimi için en güçlü silahlardan bazılarıdır.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Başarılı işlerden ve büyük ölçekli projelerden ayrı olarak, Bobokovi ailesinin adı da ciddi yardım işleriyle ilişkilendiriliyor. Bunu bir görev olarak mı görüyorsunuz ve size getirisi nedir?</strong></p>
                        <p>Yardım işleri ve bağışlar, iş hayatı ile toplum arasında bağlantı kurma felsefemizin bir parçasıdır. Benim ve kardeşim için bu, daha çok aileden aldığımız bir değer ve herbirimiz ve hepimiz için bir görevdir. Bu nedenle, çocuklarımızı da bu doğrultuda eğitmeye çalışıyoruz ve göz önündeki kişiler olarak sorumluluğumuz çok daha büyüktür. Tüm bu yıllar boyunca ve bugün, kamuoyuna açıklamadan veya bilinmesine çaba göstermeden birçok farklı girişimi desteklemekten geri durmadık. Örnek olarak ve süreklilik sağlayarak, aynı zamanda köklerimizle bir bağımız olan, ülkemizdeki yardımseverlik geleneğini yeniden geri kazanabileceğimize içten inanıyoruz.</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PlamenRuseHaber;