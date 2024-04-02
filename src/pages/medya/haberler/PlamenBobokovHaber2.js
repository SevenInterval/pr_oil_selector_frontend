import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PlamenBobokovImage } from "../../../images/news";
import { PlamenBobokovImage2 } from "../../../images/news";
import { PlamenBobokovImage3 } from "../../../images/news";

import FancyBox from "../../../components/FancyBox";


const PlamenBobokovHaber2 = () => {
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
                                <li id="galley_image_69">
                                    <a data-fancybox="gallery" href={PlamenBobokovImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenBobokovImage} />
                                    </a>
                                </li>
                                <li id="galley_image_70">
                                    <a data-fancybox="gallery" href={PlamenBobokovImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenBobokovImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_71">
                                    <a data-fancybox="gallery" href={PlamenBobokovImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenBobokovImage3} />
                                    </a>
                                </li>
                            </FancyBox>
                            </ul>
                            <h3 className="hs-small">Plamen Bobokov, Ukrayna'dan "Onurlu Hizmet" ödülü aldı</h3>
                            <div className="date">05-01-2017</div>
                            <p>Ukrayna ve Bulgaristan arasındaki diplomatik ilişkilerin yenilenmesinin 25. yılını kutlayan törende önemli bir Bulgar sanayici, "Prista Oil Holding" EAD'nin sahibi ve Bulgaristan'ın Rusçuk şehrinde Ukrayna Fahri Konsolosu olan Plamen Bobokov, Ukrayna'dan "Onurlu Hizmet" ödülü aldı. Ukrayna'nın bu en üst düzeyli ödülü, Plamen Bobokov'a Bulgaristan'daki Ukrayna Tam Yetkili Büyükelçisi N. Baltazhi tarafından Bulgar Bilimler Akademisi Etnografya Müzesi'nde takdim edildi. Etkinlikte uzun zamandır beklenen "Profesör Mihajlo Ivanovic Parashchuk - Ukraynalı heykeltıraş ve önemli halk kişisi (1878-1963)" adlı belgesel derlemesi de gösterildi. Eleştirmenler belgeseli Ukrayna ve Bulgaristan arasındaki ikili ilişkilerin bir tür ansiklopedisi ve aynı zamanda daha geniş Avrupa bağlamında sosyal, siyasi ve kültürel yaşamın özgün bir kaydı olarak değerlendiriyor.</p>
                          
                          
                          <Link className="bback-button" to="/news/category/haberler">Geri</Link>

                    </div>

                </div>
            </article>
        </div>
    )
}

export default PlamenBobokovHaber2;