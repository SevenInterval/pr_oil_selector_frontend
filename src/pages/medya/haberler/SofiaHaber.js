import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { SofiaImage1, SofiaImage2, SofiaImage3 } from "../../../images/news";
import { Helmet } from "react-helmet-async";

const SofiaHaber = () => {
    return (
        <>
            <Helmet>
                <title>Sofia Car Motorsport, birkaç gün içinde başlayacak...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/sofia-car-motorsport-birkac-gun-icinde-baslayacak-olan-avrupa-gt4-serisinin-2016-sezonuna-sin-r1-gt4-ile-katilacaktir" />
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
                                    <li id="galley_image_26">
                                        <a data-fancybox="gallery" href={SofiaImage1}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaImage1} />
                                        </a>
                                    </li>
                                    <li id="galley_image_27">
                                        <a data-fancybox="gallery" href={SofiaImage2}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaImage2} />
                                        </a>
                                    </li>
                                    <li id="galley_image_28">
                                        <a data-fancybox="gallery" href={SofiaImage3}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaImage3} />
                                        </a>
                                    </li>
                                </FancyBox>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Sofia Car Motorsport, birkaç gün içinde başlayacak olan Avrupa GT4 serisinin 2016 sezonuna Sin R1 GT4 ile katılacaktır</span>
                            <div className="date">22-04-2016</div>
                            <p>Romanya'daki başarılı testlerden sonra Sofia Car Motorsport, birkaç gün içinde başlayacak olan Avrupa GT4 serisinin 2016 sezonuna Sin R1 GT4 ile katılacaktır</p>
                            <p>İlk Bulgar süper otomobili Alman pilotlar Hendrik Stihl ve Andreas Gyulden tarafından kullanılacaktır.</p>
                            <p>22-24 Nisan'da Monza'da (İtalya) gerçekleştirilecek ilk turu BNT HD TV'den canlı izleyin.</p>
                            <p>İlk yarış 23 Nisan'da başlayacak ve yerel saate göre 15:40'te BNT HD TV'de yayınlanacaktır.</p>
                            <p>İkinci yarış 24 Nisan Pazar günü yerel saate göre 12:10'da gerçekleştirilecektir.
                                <br />
                                <br />
                                <Link to="https://www.youtube.com/watch?v=mBjunc_UwIk" style={{ color: "#11a1d6" }}>https://www.youtube.com/watch?v=mBjunc_UwIk</Link>
                            </p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article >
            </div>
        </>
    )
}

export default SofiaHaber;