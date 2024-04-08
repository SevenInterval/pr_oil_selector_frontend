import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { SilverstoneImage1, SilverstoneImage2, SilverstoneImage3, SilverstoneImage4 } from "../../../images/news";
import { Helmet } from "react-helmet-async";

const SilverstoneHaber = () => {
    return (
        <>
            <Helmet>
                <title>Silverstone, 11-12 Haziran'daki dayanıklılık yarışında...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/silverstone-11-12-haziran-daki-dayaniklilik-yarisinda-avrupa-gt4-serisini-agirlayacak" />
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
                                    <li id="galley_image_46">
                                        <a data-fancybox="gallery" href={SilverstoneImage1}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SilverstoneImage1} />
                                        </a>
                                    </li>
                                    <li id="galley_image_47">
                                        <a data-fancybox="gallery" href={SilverstoneImage2}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SilverstoneImage2} />
                                        </a>
                                    </li>
                                    <li id="galley_image_48">
                                        <a data-fancybox="gallery" href={SilverstoneImage3}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SilverstoneImage3} />
                                        </a>
                                    </li>
                                    <li id="galley_image_49">
                                        <a data-fancybox="gallery" href={SilverstoneImage4}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SilverstoneImage4} />
                                        </a>
                                    </li>
                                </FancyBox>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Silverstone, 11-12 Haziran'daki dayanıklılık yarışında Avrupa GT4 serisini ağırlayacak</span>
                            <div className="date">10-06-2016</div>
                            <p>Avrupa GT4 serisinin üçüncü etabı, Avrupa'nın en önemli parkurlarından biri olan İngiltere'deki Silverstone'da gerçekleştirilecek.</p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>Avrupa GT4 serisi, motor sporları hayranlarına ilginç bir üç saatlik dayanıklılık yarışı sunuyor. Sofia Car Motorsport, Hendrik Stihl ve Andres Gyulden’in pilotluğunda Sin R1 GT4 ile bu mücadelede yer alacak.</strong></p>
                            <p>Silverstone, Büyük Britanya Formula 1 Grand Prix yarışına ev sahipliği yapan, İngiltere'deki en ünlü parkurdur. İkinci Dünya Savaşı'nda kullanılan eski bir havaalanının arazisine kurulan modern GP pisti, 5891 km uzunluğunda. Avrupa GT4 serisine katılan pilotlar ilk kez dayanıklılık yarışında mücadele edecek.</p>
                            <p>Sofia Car Motorsport, pilot Hendrick Stihl ve Andres Gyulden ile başlayan Avrupa GT4 serisinde güçlü bir sezon geçirdi. Pilotlar Monza ve Pau'daki ilk iki turda harika performans sergilediler. Artık her şey, bu hafta sonu Silverstone'da Sin R1 GT4 ile görücüye çıkmak için genç ve yetenekli sürücü Michael Epps'e bağlı. Karting yarışçısı ve turing otomobil yarışçısı olarak engin bir deneyime sahip olan Michael kariyerini artık GT şampiyonası ile sürdürme şansı yakaladı.</p>
                            <p>Sin R1 GT4'e, ikinci bir sezon için ekipte yarışan Hendrik Stihl de pilotluk edecek.</p>
                            <p>Silverstone'daki yarışma, sürücüler ve ekipler için gerçek bir mücadele olacak. Sezonun bu ilk dayanıklılık yarışında pilotlar, 3 saat boyunca becerilerini sergileyecek. Rekor sayıda katılımla 51 araç, Pazar günü başlangıç çizgisinde olacak.</p>
                            <p>Saat 00.50'de (Batı Avrupa zaman dilimi - WET GMT + 00) <Link to="http://gt4series.com/live/" style={{ color: "#11a1d6" }}>http://gt4series.com/live/</Link> üzerinden canlı izleyebilirsiniz.</p>
                            <p>&nbsp;</p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article >
            </div>
        </>
    )
}

export default SilverstoneHaber;