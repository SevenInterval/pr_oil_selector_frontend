import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { BobokovImage2 } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const PlamenBobokovHaber = () => {
    return (
        <>
            <Helmet>
                <title>TR Prista Oil Group'un kurucu ortağı Plamen Bobokov, Plovdiv ...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                        <div className="news-detail">
                            <ul className="images">
                                <li id="galley_image_176">
                                    <FancyBox
                                        options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}
                                    >
                                        <a data-fancybox="gallery" href={BobokovImage2}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={BobokovImage2} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">TR Prista Oil Group'un kurucu ortağı Plamen Bobokov, Plovdiv "Paisii Hilendarski" Üniversitesi'nde öğrencilere halka açık bir konferans verdi</span>
                            <div className="date">20-07-2023</div>
                            <p>16 Mayıs 2023 tarihinde, Paisii Hilendarski'nin adını taşıyan Plovdiv Üniversitesi'nde "İnovasyon ve Girişimcilik" disiplini kapsamında "Bulgar Girişimcinin Karşılaştığı Zorluklar ve Güçlükler" başlıklı halka açık bir konferans düzenlendi. Konuyla ilgili konuk konuşmacı, Prista Oil Group'un kurucu ortağı, Prista Oil Holding EAD Yönetim Kurulu Başkanı, Monbat AD Yönetim Kurulu üyesi ve faaliyet alanı kültürel ve tarihi mirasın araştırılması ve korunması olan "Bobokov Kardeşler" Vakfı'nın kurucu ortağı Sayın Plamen Bobokov'du. Forum, Paisii Hilendarski Üniversitesi Felsefe ve Tarih Fakültesi Uygulamalı ve Kurumsal Sosyoloji Bölüm Başkanı ve Jean Monnet Mükemmeliyet Merkezi Başkanı Prof Dr. Ivan Chalakov'un nazik daveti ve girişimi üzerine düzenlenmiştir.</p>
                            <p>Konferansın tamamına ve aşağıdaki tartışma videosuna buradan ulaşabilirsiniz:</p>
                            <p><iframe frameBorder="0" height="315" src="https://www.youtube.com/embed/MSaJNLOyQzA" title="YouTube video player" width="100%"></iframe></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>

                        </div>

                    </div>
                </article>
            </div>
        </>
    )
}

export default PlamenBobokovHaber;