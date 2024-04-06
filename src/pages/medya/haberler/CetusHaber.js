import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { CetusImage, CetusImage2 } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const CetusHaber = () => {
    return (
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
                                <li id="galley_image_14">
                                    <a data-fancybox="gallery" href={CetusImage}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={CetusImage} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Cetus HiPerSYN 46</span>
                        <div className="date">19-02-2014</div>
                        <p>
                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href={CetusImage2}>
                                    <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={CetusImage2} />
                                </a>
                            </FancyBox>
                        </p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default CetusHaber;