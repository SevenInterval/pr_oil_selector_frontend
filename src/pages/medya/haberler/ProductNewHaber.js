import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { ProductNewLargeImage, NewsHavolineImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const ProductNewHaber = () => {
    return (
        <>
            <Helmet>
                <title>Product News: Product Introduction</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/product-news-product-introduction-6" />
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
                                        <a data-fancybox="gallery" href={ProductNewLargeImage}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={ProductNewLargeImage} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Product News: Product Introduction</span>
                            <div className="date">13-03-2015</div>
                            <p><img alt="newHavolineImage" src={NewsHavolineImage} height={862} width={730} title="newHavolineImage" loading="eager" /></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default ProductNewHaber;