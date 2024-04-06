import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { AdvertImage, BulgarYagImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import AdvertPdf from "../../../pdf/advert_pages_2.pdf"

const BulgarYagHaber = () => {
    return (
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
                                    <a data-fancybox="gallery" href={BulgarYagImage}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={BulgarYagImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Bulgar yağ üreticisi PRISTA OIL, Bulgaristan'daki Ruse tesisinde harmanlama teknolojisinin bir güncelleme programını başlattı.</span>
                        <div className="date">01-09-2015</div>
                        <p>Bulgar yağ üreticisi PRISTA OIL, Bulgaristan'daki Ruse tesisinde harmanlama teknolojisinin bir güncelleme programını başlattı.</p>
                        <p>GQOIL Innovation Europe Company tarafından tasarlanan yenilikçi harmanlama teknolojisi CCBL'nin endüstriyel testinin birinci aşaması Ekim 2015'te gerçekleştirildi.</p>
                        <p><img alt="advertImage" src={AdvertImage} style={{ height: "1050px", width: "750px" }} /></p>
                        <p><strong style={{ fontFamily: "sans-serif" }}><Link to={AdvertPdf} target="_blank" style={{ color: "#11a1d6" }}>BÜYÜTMEK İÇİN TIKLAYIN</Link></strong></p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BulgarYagHaber;