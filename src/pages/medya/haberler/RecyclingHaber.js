import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { RecyclingImage1, RecyclingImage2, RecyclingImage3, RecyclingImage4 } from "../../../images/news";

const RecyclingHaber = () => {
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
                                <li id="galley_image_42">
                                    <a data-fancybox="gallery" href={RecyclingImage1}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RecyclingImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_43">
                                    <a data-fancybox="gallery" href={RecyclingImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RecyclingImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_44">
                                    <a data-fancybox="gallery" href={RecyclingImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RecyclingImage3} />
                                    </a>
                                </li>
                                <li id="galley_image_45">
                                    <a data-fancybox="gallery" href={RecyclingImage4}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RecyclingImage4} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Prista Recycling Tesisi bugün Özbekistan'da açıldı</h3>
                        <div className="date">18-05-2016</div>
                        <p>20. uluslararası “Yağ ve Gaz Özbekistan” konferansı ve sergisi, Özbekistan'da yüksek teknolojili Bulgar “Prista Recycling” fabrikasının açılışıyla başladı</p>
                        <p>Bugün, 18.05.2016'da, Bulgaristan Başbakanı Boyko Borisov ve Özbekistan Başbakan Yardımcısı Gulomzhon Ibrahimov, hissedar Plamen Bobokov ve Ivaylo Mandjukov'un temsilcileri huzurunda Özbekistan'da yüksek teknolojili “Prista Recycling” geri dönüşüm tesisinin açılışını yaptı. &nbsp;</p>
                        <p>Bu proje, Özbekistan Cumhurbaşkanının bir kararnamesi ile “Uz-Prista Recycling” isimli müşterek girişimin bir sonucudur. %51 hisseyle Bulgar şirketi “Prista Recycling” ve “Uzbekneftegaz”ın iştirak şirketi olan, %49 hisseyle “Uznefteprodukt”tan oluşmaktadır. Yeni Bulgar şirketi “Prista Recycling” AD'nin ana hissedarları ve yatırımcıları Bobokov kardeşler ve Mandjukov ailesidir.</p>
                        <p>Tören, 20. uluslararası “Yağ ve Gaz Özbekistan” konferansı ve sergisinin başlangıcına damgasını vurdu. Forumun yıldönümü etkinliği, 26 ülkeden 200'ün üzerinde şirketin katılımıyla başkent Taşkent'te gerçekleştirildi. Bulgar-Özbek tesisi, Angren, Taşkent Bölgesi'nde yer almakta olup, açılışı doğrudan video bağlantısıyla gerçekleştirildi.</p>
                        <p>Başbakan Borisov açılışta şunları söyledi: “Bugün bile bir inovasyona tanık oluyoruz; tesise seyahat etmek yerine, çevrenin korunması, yağ geri dönüşümü ve üretimi ile yeni iş imkânlarına fırsat veren, enerji verimliliğinde bir Bulgar-Özbek yatırımıyla video bağlantısı aracılığıyla bugünkü konferansa bağlanmayı başardık.”</p>
                        <p>Tören esnasında Plamen Bobokov'un konuşması ise şöyleydi: “Sosyal sorumluluğa sahip bir şirket olarak, Prista Oil Holding ve özellikle ana hissedarlar olarak kardeşim ve ben, geleneksel yağ üretimimizde kullanılabilecek bir yağ geri dönüşümü işlemine yatırım yapmayı uzun bir süredir düşünüyorduk. Ticari ihtiyaçlarımızı karşılayan ve yatırım planımıza yön veren teknolojik bir çözüm aramak ve bulmak zaman aldı. Özbekistan'da böyle bir tesisi inşa etme kararı kesinlikle mantıklı, öncelikle şirketi Uz-Prista aracılığıyla Prista Oil, kendisini önde gelen bir lokal madeni yağ üreticisi yapmayı başarmıştır. Öte yandan Özbekistan pazarı, tesisin yağ geri dönüşümü ihtiyaçlarını karşılamaya yetecek kadar büyüktür.</p>
                        <p>‘Geri dönüşüm’ derken hedeflerimiz burada sona ermiyor! Asya'da ve Afrika'da yeterince büyük pazara ve tüketime sahip ülkelerde de benzer tesisler kurmayı planlıyoruz. Büyük sosyal etkisinin yanı sıra yatırımımız, yüksek kalitede lokal madeni yağ üretimi için taze baz yağ ve ihracat faaliyetleri için yüksek katma değerli ürünler sağlayacak.”</p>
                        <p>Tesisteki toplam yatırım miktarı yaklaşık 19 milyon Dolar olup, doğrudan 50 yeni uzman ve ilgili alanlarda ekstra 150 pozisyon için istihdam fırsatı yaratacak. Özbekistan'da başarılı bir şekilde tamamlanan inşaatın ve tesisin devreye alınmasından sorumlu yönetici Ivaylo Mandjukov'dur.</p>
                        <p>Geri dönüşüm tesisinin kapasitesinin, yılda 40.000 ton atık yağın geri dönüşümüyle 30.000 tona kadar taze baz yağ, 6000 ton dizel akaryakıt ve 4000 ton asfalt parçası üretimi olması planlanıyor. Taze baz yağın %60'a kadarı Prista Oil'in Orta Asya ve Ukrayna'daki ham madde ihtiyaçları için kullanılacak olup, kalan kısım “Uz-Prista” üretiminde kullanılacak. Dizel akaryakıt ve asfalt parçasının yerli pazarda satılması planlanıyor.</p>
                        <p>Bulgar “Prista Recycling” şirketi, benzeri olmayan yağ geri dönüşüm tesisleri kurmada Amerikan Patent Dairesi'nce korunan özel bir teknolojinin sahibidir. Bu teknoloji ilk kez Orta Asya ve CIS'te kullanılmıştır. Şirket, sadece yatırımcı olarak değil aynı zamanda ortak yüklenici olarak hareket etmekte ve tüm mühendislik projesini sağlamaktadır.</p>
                        <p>Atık yağlara yönelik yüksek teknolojili yeni “Uz-Prista Recycling” tesisinin devreye girmesi, çevre kirliliğinin azaltılmasını ve ortadan kaldırılmasını sağlamanın yanı sıra, atık yağın kontrolsüz bir şekilde doğaya atılmasını azaltmaya yardımcı olacak ve ülkede bitmiş yağların üretimine ham madde temin edecektir.</p>
                        <p>Yatırım, çevre üzerinde doğrudan pozitif bir etkiyle, atık yağların toplanması, taşınması ve depolanması yönünde yeni bir yaklaşımın hayata geçirilişinin başlangıcıdır. Bugün <u>Özbekistan'da</u> atık yağ yönetimine yönelik birleşik bir yaklaşım bulunmamaktadır, <u>bu nedenle de</u> Bulgar katkısı hayati öneme sahiptir.</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default RecyclingHaber;