import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { PrTurkiyeImage1, PrTurkiyeImage2, PrTurkiyeImage3, PrTurkiyeImage4 } from "../../../images/news";

const PrTurkiyeHaber = () => {
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
                                style={{ zIndex: 9999999 }}
                            >
                                <li id="galley_image_22">
                                    <a data-fancybox="gallery" href={PrTurkiyeImage1}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={PrTurkiyeImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_23">
                                    <a data-fancybox="gallery" href={PrTurkiyeImage2}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={PrTurkiyeImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_24">
                                    <a data-fancybox="gallery" href={PrTurkiyeImage3}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={PrTurkiyeImage3} />
                                    </a>
                                </li>
                                <li id="galley_image_25">
                                    <a data-fancybox="gallery" href={PrTurkiyeImage4}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={PrTurkiyeImage4} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">PRISTA OIL TÜRKİYE, İSTANBUL'Kİ AUTOMECHANIKA TİCARET FUARINA KATILIYOR</span>
                        <div className="date">15-04-2016</div>
                        <p><em><strong style={{ fontFamily: "sans-serif" }}>Prista Oil ekibi, 07 - 10 Nisan 2016 tarihleri arasında gerçekleştirilen otomotiv endüstrisine yönelik Türkiye'nin önde gelen uluslararası ticaret fuarına katıldı.</strong></em></p>
                        <p>Dinamik Türk otomotiv piyasası iyi hazırlık ve kolay giriş koşulları gerektiriyor. Eğer bu hızla büyüyen piyasaya girmek veya Türkiye'deki mevcut işinizi büyütmek istiyorsanız, Automechanika İstanbul sizin için doğru platformdur. Türkiye ve Avrupa piyasalarındaki en önemli oyuncuları bir araya getiren bu fuar, Türkiye ve çevresindeki bölgeler için bir buluşma noktası olmuştur.</p>
                        <p>Bu Prista Oil Türkiye'nin ilk kez bir sergiye katılışıydı ancak Prista'nın standı çok ciddi ve büyük bir ilgi gördü. Automechanika Fuarı, yeni ithalat-ihracat fırsatları ve iş büyütme olanakları için önemli bir uluslararası platform işlevi gördü. Dünyanın dört bir yanından gelen ziyaretçiler Prista'nın standını ziyaret etti ve Prista &amp; Verila ürün protföyü ve çalışmaları hakkında bilgi aldı.</p>
                        <p>Prista Oil Türkiye Tedarik ve Pazarlama Müdürü Gülşen Öztürk; “Prista Oil, yağlarla ilgili iş çevresinde uluslararası bir platform olduğunu kanıtladı. Büyük ölçekte düzenlenen bu tip profesyonel bir organizasyona katılmaktan dolayı gururluyuz. Bize iyi fırsatlar yaratacağından eminim" dedi.&nbsp;</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default PrTurkiyeHaber;