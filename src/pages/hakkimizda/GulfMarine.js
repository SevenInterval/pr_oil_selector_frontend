import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import GulfMarineImage from '../../images/gulfmarine.jpg';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GulfMarine = () => {
    return (
        <>
            <Helmet>
                <title>Gulf Marine</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/gulf-marine-7" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarHakkimizda />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Hakkımızda / </span>
                        <span className="titleOfHeader">Ortaklarımız / </span>
                        <h1>Gulf Marine&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><img alt="gulfMarineImage" src={GulfMarineImage} height={107} width={80} loading="eager" title="gulfImage" /></p>
                        <p>Gulf Oil Group International bünyesinde yer alan Gulf Oil Marine Limited, marin endüstrisine yönelik yağların üretiminde ve dağıtımında dünyanın önde gelen firmalarından birisidir. Firma müşterilerine çok sayıda yüksek kaliteli ürün sunmakta ve 900'den fazla limanda denizyolu taşımacılığı için uzman teknik servis sağlamaktadır.</p>
                        <p>Prista Oil; Bulgaristan, Romanya, Türkiye, Letonya, Litvanya, Estonya ve Finlandiya bölgelerinde GulfSea® ürünlerinin resmi distribütörüdür. Firma, bölgedeki tüm limanlara toplu ve ön paketli marin yağlarının hızlı ve güvenilir dağıtımını sağlamaktadır.</p>
                        <p>
                            <Link to="/catalogue/system-oils">
                                <span style={{ color: "#000000" }}>
                                    <strong style={{ fontFamily: "sans-serif" }}>View GulfSea® products</strong>
                                </span>
                                <span style={{ color: "#ff0000" }}>
                                    <strong style={{ fontFamily: "sans-serif" }}> here:</strong>
                                </span>
                            </Link>
                        </p>
                    </div>
                </article >
            </div>
        </>
    )
}

export default GulfMarine;