import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { Yunanistan1Image, Yunanistan2Image, Yunanistan3Image, Yunanistan4Image, Yunanistan5Image } from "../../../images/news";
import { Helmet } from "react-helmet-async";

const YunanistanHaber = () => {
    return (
        <>
            <Helmet>
                <title>Yunanistan'dan Prista Oil Yetkili Distribütörü Leonidas...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/yunanistan-dan-prista-oil-yetkili-distributoru-leonidas-leontopoulos-leo-lub-parts-yunan-yaris-sezonuna-katiliyor" />
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
                                    style={{ zIndex: 9999999 }}
                                >
                                    <li id="galley_image_51">
                                        <a data-fancybox="gallery" href={Yunanistan1Image}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={Yunanistan1Image} />
                                        </a>
                                    </li>
                                    <li id="galley_image_52">
                                        <a data-fancybox="gallery" href={Yunanistan2Image}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={Yunanistan2Image} />
                                        </a>
                                    </li>
                                    <li id="galley_image_53">
                                        <a data-fancybox="gallery" href={Yunanistan3Image}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={Yunanistan3Image} />
                                        </a>
                                    </li>
                                    <li id="galley_image_54">
                                        <a data-fancybox="gallery" href={Yunanistan4Image}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={Yunanistan4Image} />
                                        </a>
                                    </li>
                                    <li id="galley_image_55">
                                        <a data-fancybox="gallery" href={Yunanistan5Image}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={Yunanistan5Image} />
                                        </a>
                                    </li>
                                </FancyBox>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Yunanistan'dan Prista Oil Yetkili Distribütörü Leonidas Leontopoulos – LEO LUB & PARTS – Yunan Yarış Sezonuna Katılıyor</span>
                            <div className="date">29-06-2016</div>
                            <p>Leonidas Leontopoulos 1990 yılında yarışmaya başladı ve yarış kariyeri boyunca birçok 1.lik ve 2.lik derecesi kazandı. 2016 yılında Leonidas, Prista® markalı Peugeot 106 /1600CC 200HP aracıyla Grup A'daki Tepe Yarışlarına ve Parkur Yarışlarına katılacak.</p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article >
            </div>
        </>
    )
}

export default YunanistanHaber;