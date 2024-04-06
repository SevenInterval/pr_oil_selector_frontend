import SideBarMedya from "../../components/SidebarMedya";
import PristaNews from "../../images/news/pristaNews.jpg"
import Haber from "../../components/Haber";
import { Helmet } from "react-helmet-async";

const Bayilik = () => {
    return (
        <>
            <Helmet>
                <title>Bayilik Hakkında</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/category/bayilik-hakkinda-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Medya / </span>
                        <h1>Bayilik Hakkında</h1>
                    </div>
                    <ul className="objects-list-two-rows">
                        <Haber uri={"/news/yol-arkadasimiz-ol-kazancin-yag-gibi-aksin-1"}
                            gorsel={PristaNews} baslik={"YOL ARKADAŞIMIZ OL KAZANCIN YAĞ GİBİ AKSIN!"}
                            tarih={"12-09-2017"}
                            detay={"Uluslararası Enerji devi Chevron’nun Türkiye pazarındaki tek yetkili madeni yağ distribütörü Prista Oil® Holding; Texaco® ürünleri için pazar alanını genişletiyor."}
                            lastClassName={""} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default Bayilik;