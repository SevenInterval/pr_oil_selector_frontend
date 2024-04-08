import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PristaRecLargeImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const PristaRecHaber = () => {
    return (
        <>
            <Helmet>
                <title>“PRISTA RECYCLING”, ÖZBEKİSTAN'DA ATIK YAĞLARIN GERİ...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/prista-recycling-ozbekistan-da-atik-yaglarin-geri-donusumu-icin-yuksek-teknolojili-bir-tesis-aciyor" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={PristaRecLargeImage} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">“PRISTA RECYCLING”, ÖZBEKİSTAN'DA ATIK YAĞLARIN GERİ DÖNÜŞÜMÜ İÇİN YÜKSEK TEKNOLOJİLİ BİR TESİS AÇIYOR</span>
                            <div className="date">16-05-2016</div>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Açılış töreni, Angren, Taşkent bölgesinde 18 Mayıs 2016'da gerçekleştirilecek. Törende kurdeleyi iki ülkenin başbakanı, Boyko Borissov ve Shavkat Mirziyoyev kesecek.</strong></p>
                            <p><strong style={{ fontFamily: "sans-serif" }}><em>Proje, Özbekistan Cumhurbaşkanının Kararnamesi ile kurulan müşterek girişim “Uz-Prista Recycling” çalışmasının bir sonucudur. %51 hisseyle Bulgar şirketi “Prista Recycling” ve %49 hisseyle “Uzbekneftegaz” şirketinin iştiraki olan “Uznefteproduct” tarafından oluşturulmuştur. Yeni Bulgar şirketi “Prista Recycling”in ana hissedarları ve yatırımcıları, Bobokov kardeşler ve Mandjukov ailesidir. </em></strong></p>
                            <p>Toplam yatırım 19 milyon USD civarındadır ve 50 yeni doğrudan iş ve ilgili faaliyetlerde 150 ek iş sağlayacaktır. Başarıyla tamamlanmış inşaat çalışmasının ve Özbekistan'daki tesisin lansmanının müdürü ise Ivaylo Mandjukov’dur.</p>
                            <p>Geri dönüşüm tesisinin kapasitesinin, yılda 40.000 ton atık yağın geri dönüşümüyle 30.000 ton baz motor yağı, 6000 tona kadar akaryakıt ve 4000 tona kadar asfalt akısı üretimi olması planlanıyor. Baz motor yağının %60'a kadarı Prista Oil'in Orta Asya ve Ukrayna'daki ham madde ihtiyaçları için ihraç edilecek ve kalanı ise “Uz-Prista” üretim programının bir parçası olarak kullanılacak. Akaryakıt ve asfalt akısı için ise, yerel bir tüketim pazarı mevcuttur.</p>
                            <p>Bulgar şirketi “Prista Recycling” bir teknoloji ortağı ve aynı zamanda herhangi bir benzeri olmayan, ilki Orta Asya ve CIS<Link to="http://www.tr.prista-oil.com/news/prista-recycling-opens-a-high-tech-plant-for-recycling-of-waste-oils-in-uzbekistan-5#_ftn1" title="" style={{ color: "#11a1d6" }}>[1]</Link> ülkelerinde kurulacak olan atık yağ yenilemeye yönelik tesis inşaatıyla ilgili teknoloji için Amerikan Patent Dairesi'nden alınan özel hakların sahibidir. Şirket, sadece yatırımcı olarak değil aynı zamanda ortak yüklenici olarak hareket etmekte ve projeye ilişkin tüm mühendislik faaliyetlerini organize etmektedir.</p>
                            <p>Atık yağ geri dönüşümüne yönelik yeni yüksek teknolojili tesis “Uz-Prista Recycling”in açılışı, tehlikeli maddelerin azaltılması ve ortadan kaldırılması yoluyla çevre kirliliğinin önlenmesini sağlayacak ve atık yağların yetkisiz bir şekilde doğaya atılmasını azaltmaya da yardımcı olacaktır. Bunlara ek olarak, Orta Asya cumhuriyetinde atık yağların yenilenmesi sonrasında bitmiş madeni yağların üretimi için ham madde de sağlayacaktır.</p>
                            <p>Yatırım, çevre üzerinde doğrudan pozitif bir etkiyle, atık yağların toplanması, taşınması ve depolanması yönünde yeni bir yaklaşımın hayata geçirilişinin başlangıcı olarak görülebilir. Bugüne kadar Özbekistan'da, doğrudan ekolojiyle ilgili hiçbir evrensel yaklaşım hayata geçirilmedi, işte bu nedenle Bulgar katkısı bölgede hayati bir rol oynamaktadır.</p>
                            <p>…………………………………………………………………………………………………</p>
                            <p><em>*Hatırlatmak isteriz ki “Prista” adı Özbekistan'da hâlihazırda iyi bilinmekte olup 2011'den bu yana 13,4 milyon USD sermayeli Özbek-Bulgar müşterek girişimi “Uz-Prista” ülkede faaliyet göstermektedir. Kuruluş oldukça kazançlıdır ve kurucu üyelerine kâr paylarını düzenli olarak ödemektedir. Şirket hissedarları, “Uzbekneftegaz” ulusal holding şirketinin ticari bir bölümü olan %49,9 hisseye sahip “UZbeknefteproduct” ve %50,1 hisseye sahip “Prista Oil Holding”, EAD, Bulgaristan'dır. </em></p>
                            <p><em>“Uz-Prista”, Özbekistan'da sentetik ve yarı sentetik yağların ilk ve tek üreticisi olmanın yanı sıra yüksek kalitede motor, şanzıman, endüstriyel ve diğer türdeki çeşitli madeni yağların ilk ve tek üreticisidir. </em></p>
                            <p><em>“Uz-Prista” ürünlerinin tüketicileri, savunma, ziraat, madencilik ve taş ocakçılığı, otomotiv endüstrisi ve diğer alanlardan ana endüstriyel üreticileri içermektedir.</em></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default PristaRecHaber;