import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { OrenburgImage2 } from "../../../images/news";
import { OrenburgImage3 } from "../../../images/news";
import { OrenburgNews } from "../../../images/news";

import FancyBox from "../../../components/FancyBox";


const OrenburgKonferansHaber = () => {
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
                            <a data-fancybox="gallery" href={OrenburgNews}>
<img title="n.jpg" alt="n.jpg" width="360" src={OrenburgNews} />
</a>
</FancyBox>
                    </li>
                    <li id="galley_image_183">
                                    <FancyBox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={OrenburgImage2}>
<img title="n.jpg" alt="n.jpg" width="360" src={OrenburgImage2} />
</a>
</FancyBox>
                    </li>
                    <li id="galley_image_183">
                                    <FancyBox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={OrenburgImage3}>
<img title="n.jpg" alt="n.jpg" width="360" src={OrenburgImage3} />
</a>
</FancyBox>
                    </li>
                    
                    
                            </ul>
                    <h3 className="hs-small">Rusya’nın Orenburg kentinde düzenlenen ilk teknik konferansta, Prista Oil Holding’in ürünlerle ilgili son inovasyonları tanıtıldı</h3>
            <div className="date">13-09-2017</div>
<p>24 Ağustos 2017 tarihinde, Orenburg kentinde, Rusya merkezli Prista Oil Holding’in resmi temsilcisi Inventum LLC’nin de desteğiyle, son kullanıcılar için ilk konferans düzenlendi. Etkinliğin ana amacı, Prista Oil’in yüksek teknoloji ürünü yağlarının sunduğu önemli avantajları tanıtmaktı .</p>
<p>Orenburg bölgesinde petrol ve doğal gaz sektörlerinde çalışan 30’u aşkın şirket ile tarım sektöründe ve  yolcu ve yük taşımacılığı filo işletmeciliği alanında faaliyet gösteren şirketler etkinliğe katıldı. Katılımcılar arasında mühendislik ve teknik bölümlerin başkanlarının yanı sıra şirketin üst düzey yöneticileri, yani işletmeleri, faaliyetteki ticari araçları ve özel ekipmanları için yağ satın alırken kilit kararları veren kişiler  de vardı.</p>
<p>Konferans, Prista® ürünlerinin Orenburg bölgesindeki distrübütörü Prima Oil  (Orenburg) ile birlikte Inventum LLC tarafından gerçekleştirildi.</p>
<p>Bu etkinlik, Prista® yağlama ürünleri gamındaki en son gelişmeleri sunmak ve müşteri odaklı bir şirket için çok önemli bir özellik arz eden ve olmazsa olmazı mahiyetindeki yeni teknik programları tanıtmak icin Rusya’da son kullanıcılara yönelik olarak düzenlenen ilk toplantıydı.</p>
  <Link className="bback-button" to="/news/">Geri</Link>
    </div>
                </div>
            </article>
        </div>
    )
}

export default OrenburgKonferansHaber;