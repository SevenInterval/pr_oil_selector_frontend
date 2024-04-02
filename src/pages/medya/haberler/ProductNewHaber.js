import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { ProductNewLargeImage, NewsHavolineImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const ProductNewHaber = () => {
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
                                    <a data-fancybox="gallery" href={ProductNewLargeImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={ProductNewLargeImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Product News: Product Introduction</h3>
                        <div className="date">13-03-2015</div>
                        <p><img alt="newHavolineImage" src={NewsHavolineImage} style={{ height: "862px", width: "730px" }} /></p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default ProductNewHaber;