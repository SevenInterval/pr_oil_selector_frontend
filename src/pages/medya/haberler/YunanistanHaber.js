import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { Yunanistan1Image, Yunanistan2Image, Yunanistan3Image, Yunanistan4Image, Yunanistan5Image } from "../../../images/news";

const YunanistanHaber = () => {
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
                                <li id="galley_image_51">
                                    <a data-fancybox="gallery" href={Yunanistan1Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Yunanistan1Image} />
                                    </a>
                                </li>
                                <li id="galley_image_52">
                                    <a data-fancybox="gallery" href={Yunanistan2Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Yunanistan2Image} />
                                    </a>
                                </li>
                                <li id="galley_image_53">
                                    <a data-fancybox="gallery" href={Yunanistan3Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Yunanistan3Image} />
                                    </a>
                                </li>
                                <li id="galley_image_54">
                                    <a data-fancybox="gallery" href={Yunanistan4Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Yunanistan4Image} />
                                    </a>
                                </li>
                                <li id="galley_image_55">
                                    <a data-fancybox="gallery" href={Yunanistan5Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Yunanistan5Image} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Yunanistan'dan Prista Oil Yetkili Distribütörü Leonidas Leontopoulos – LEO LUB & PARTS – Yunan Yarış Sezonuna Katılıyor</h3>
                        <div className="date">29-06-2016</div>
                        <p>Leonidas Leontopoulos 1990 yılında yarışmaya başladı ve yarış kariyeri boyunca birçok 1.lik ve 2.lik derecesi kazandı. 2016 yılında Leonidas, Prista® markalı Peugeot 106 /1600CC 200HP aracıyla Grup A'daki Tepe Yarışlarına ve Parkur Yarışlarına katılacak.</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default YunanistanHaber;