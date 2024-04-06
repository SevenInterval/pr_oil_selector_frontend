import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { TeodorNewImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const TeodorHaber = () => {
    return (
        <>
            <Helmet>
                <title>Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco ...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden" />
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
                                        <a data-fancybox="gallery" href={TeodorNewImage}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={TeodorNewImage} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!</span>
                            <div className="date">18-03-2024</div>
                            <p><em>Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden! </em></p>
                            <p><em>Hak ettiği Guinness Dünya Rekorlar Sertifikası artık onun elinde! </em></p>
                            <p><em>Teo'nun en son başarısı, 4 saat 18 dakika ve 54 saniye gibi etkileyici bir sürede tek başına 10 km yüzmek. </em></p>
                            <p><em>Teodor ile ilgili daha fazla bilgi almak, başarılarını öğrenmek ve desteklemek için burada: </em>
                                <Link to="https://www.facebook.com/TeodorTsvetkovTheDreamer" target="_blank" style={{ color: "#11a1d6" }}><em>https://www.facebook.com/TeodorTsvetkovTheDreamer</em></Link></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default TeodorHaber;