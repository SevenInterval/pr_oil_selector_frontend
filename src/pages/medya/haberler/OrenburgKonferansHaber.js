import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { OrenburgImage2 } from "../../../images/news";
import { OrenburgImage3 } from "../../../images/news";
import { OrenburgNews } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const OrenburgKonferansHaber = () => {
    return (
        <>
            <Helmet>
                <title>Rusya’nın Orenburg kentinde düzenlenen ilk teknik konferansta ...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/rusyanin-orenburg-kentinde-duzenlenen-ilk-teknik-konferansta-prista-oil-holdingin-urunlerle-ilgili-son-inovasyonlari-tanitildi" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                        <div className="news-detail">
                            <ul className="images">
                                <FancyBox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <li id="galley_image_97">
                                        <a data-fancybox="gallery" href={OrenburgNews}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={OrenburgNews} />
                                        </a>
                                    </li>
                                    <li id="galley_image_98">

                                        <a data-fancybox="gallery" href={OrenburgImage2}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={OrenburgImage2} />
                                        </a>
                                    </li>
                                    <li id="galley_image_99">

                                        <a data-fancybox="gallery" href={OrenburgImage3}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={OrenburgImage3} />
                                        </a>
                                    </li>
                                </FancyBox>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Rusya’nın Orenburg kentinde düzenlenen ilk teknik konferansta, Prista Oil Holding’in ürünlerle ilgili son inovasyonları tanıtıldı</span>
                            <div className="date">13-09-2017</div>
                            <p>24 Ağustos 2017 tarihinde, Orenburg kentinde, Rusya merkezli Prista Oil Holding’in resmi temsilcisi Inventum LLC’nin de desteğiyle, son kullanıcılar için ilk konferans düzenlendi. Etkinliğin ana amacı, Prista Oil’in yüksek teknoloji ürünü yağlarının sunduğu önemli avantajları tanıtmaktı .</p>
                            <p>Orenburg bölgesinde petrol ve doğal gaz sektörlerinde çalışan 30’u aşkın şirket ile tarım sektöründe ve  yolcu ve yük taşımacılığı filo işletmeciliği alanında faaliyet gösteren şirketler etkinliğe katıldı. Katılımcılar arasında mühendislik ve teknik bölümlerin başkanlarının yanı sıra şirketin üst düzey yöneticileri, yani işletmeleri, faaliyetteki ticari araçları ve özel ekipmanları için yağ satın alırken kilit kararları veren kişiler  de vardı.</p>
                            <p>Konferans, Prista® ürünlerinin Orenburg bölgesindeki distrübütörü Prima Oil  (Orenburg) ile birlikte Inventum LLC tarafından gerçekleştirildi.</p>
                            <p>Bu etkinlik, Prista® yağlama ürünleri gamındaki en son gelişmeleri sunmak ve müşteri odaklı bir şirket için çok önemli bir özellik arz eden ve olmazsa olmazı mahiyetindeki yeni teknik programları tanıtmak icin Rusya’da son kullanıcılara yönelik olarak düzenlenen ilk toplantıydı.</p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default OrenburgKonferansHaber;