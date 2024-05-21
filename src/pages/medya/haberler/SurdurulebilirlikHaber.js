import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { SurdurulebilirlikImage } from "../../../images/news";
import Slider4 from '../../../images/Slider4.jpeg'
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const SurdurulebilirlikHaber = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil Holding, Yağlayıcılar Sürdürülebilirlik Forumu’nun bir...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/prista-oil-holding-yaglayicilar-surdurulebilirlik-forumunun-bir-parcasiydi" />
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
                                        <a data-fancybox="gallery" href={Slider4}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SurdurulebilirlikImage} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Prista Oil Holding, Yağlayıcılar Sürdürülebilirlik Forumu’nun bir Parçasıydı.</span>
                            <div className="date">01-03-2024</div>
                            <p><em>&nbsp;Kasım 2023</em><em> ayının sonlarına doğru</em><em>, Prista Oil Holding, </em><em>Y</em><em>ağl</em><em>ayıcı</em><em> sanayi</em><em>n</em><em>de sürdürülebilirlik uygulamalarını ilerletmeye adanmış Berlin, Almanya’da düzenlenen çığır açan bir etkinlik olan Yağlayıcı Sürdürülebilirlik Forumu’na katıldı. </em></p>
                            <p><em>Green Deal ve 2050 yılına kadar “karbon nötrlüğü”ne ulaşma, etkinliğin ana konularından biriydi. Green Deal’in özel hedeflerinden biri, ekonominin sözde lineer modelini ortadan kaldırarak döngüsel ekonomi ve atık yönetiminin ardından gelen uygulamasıdır. </em></p>
                            <p><em>Ş</em><em>irketler </em><em>r</em><em>ekabetçi kalmak için, geri dönüştürülmüş baz yağların kullanımı gibi geri dönüşüm alternatifleri, karbon ayak izini göz önünde bulundurma ve sürekli olarak azaltma çabası, kullanım sırasındaki ürün faydalarını iyileştirme (uzatılmış kullanım ömrü, yakıt tasarrufu vb.), güvenli kimyasalların kullanımı (bu bağlamda REACH ve CLP yönergelerinde değişiklikler), ve AB’nin yeşil kamu alımları gibi birkaç ana alanda çalışmak zorundadır. </em></p>
                            <p><em>Kurumsal Sürdürülebilirlik Raporlama Direktifi’nin uygulanması ve çevresel, sosyal ve kurumsal uygulamaların tanıtımı, Prista Oil Holding’in bu yönde attığı ilk adımdır. Süreç, sosyal, yenilik, yönetişim, çevresel ve ekonomik yönlerin analizi olan bir sürdürülebilirlik değerlendirmesi hazırlığı ile 2024 yılının başlarında başladı. Şirketin hedefi, raporların yıl sonuna kadar denetlenmesini ve doğrulanmasını sağlamak ve sürekli iyileştirme ve yeni hedefler için bir plan geliştirmektir. Bunu yaparak Prista Oil, endüstri trendleriyle ayak uydurmakta ve önündeki zorluklara hazırlanmaktadır.</em></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default SurdurulebilirlikHaber;