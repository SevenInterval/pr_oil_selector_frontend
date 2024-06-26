import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { RuscukImageLarge, RuscukImage2, RuscukImage3, RuscukImage4 } from "../../../images/news";
import { Helmet } from "react-helmet-async";

const RuscukHaber = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil, Rusçuk'taki yıllık konseri için “Flamingo-98”...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/prista-oil-ruscuk-taki-yillik-konseri-icin-flamingo-98-dans-okulunu-destekliyor" />
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
                                    <li id="galley_image_56">
                                        <a data-fancybox="gallery" href={RuscukImageLarge}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={RuscukImageLarge} />
                                        </a>
                                    </li>
                                    <li id="galley_image_57">
                                        <a data-fancybox="gallery" href={RuscukImage2}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={RuscukImage2} />
                                        </a>
                                    </li>
                                    <li id="galley_image_58">
                                        <a data-fancybox="gallery" href={RuscukImage3}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={RuscukImage3} />
                                        </a>
                                    </li>
                                    <li id="galley_image_59">
                                        <a data-fancybox="gallery" href={RuscukImage4}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={RuscukImage4} />
                                        </a>
                                    </li>
                                </FancyBox>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Prista Oil, Rusçuk'taki yıllık konseri için “Flamingo-98” dans okulunu destekliyor</span>
                            <div className="date">29-06-2016</div>
                            <p>Konser, Rusçuk Üniversitesi Kaneff Merkezi'nde 22 Mayıs 2016, Pazar tarihinde gerçekleştirildi. Etkinlik iki bölüme ayrıldı. Coşkulu ebeveynler, alkışlar eşliğinde sahne performanslarının her birini hoş karşıladı.</p>
                            <p>“Flamingo 98”in kurucusu Sayın Nenov, “Yıllık ‘Flamingo 98’ konseri, geçtiğimiz yıl boyunca gerçekleştirilen çalışma için tüm çocuklara takdir getirdi,” diyerek sözlerini şöyle sürdürdü: “Dans okulumuzda, onlardan mükemmel olmalarını beklemeksizin, birçok dans türünde farklı yaş gruplarından yüzlerce çocukla çalışıyoruz. Çocuklar için en önemli şey, sahnedeki performanslarının onları harekete geçirmesi, onlara ilham vermesi ve yaratıcılık kazandırmasıdır.”</p>
                            <p>Şova 500'den fazla çocuk ve 1000'den fazla seyirci katıldı.</p>
                            <p>Etkinliğin sponsorlarından biri olan <strong style={{ fontFamily: "sans-serif" }}>Prista Oil</strong>, dans okulu müdürünün organize ettiği loto çekilişini sunmaktadır.</p>
                            <p><em>“Flamingo-98” Spor ve Dans Kulübü - Rusçuk, şu abda Ukrayna'nın balo dansı şampiyonu olan, Rusçuk'taki bir gençlik merkezinde balo dansı koçluğu yapan Alexander Smikovchuk tarafından 1979'da kurulmuş olup, şehirdeki en eski dans okullarından birinin halefidir.</em></p>
                            <p><em>1998'den günümüze kadar PR Müdürü Tsvetelin Nenov’un yönetimi altında bulunan okul, Rusçuk ve civarındaki çocuklar, öğrenciler ve yetişkinler için kapsamlı dans ve spor faaliyetleri geliştirmiştir ve hâlihazırda 500'den fazla üyeye sahiptir.</em></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article >
            </div>
        </>
    )
}

export default RuscukHaber;