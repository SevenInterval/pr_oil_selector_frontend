import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import GulfMarineImage from '../../images/gulfmarine.jpg';
import { Link } from "react-router-dom";

const GulfMarine = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarHakkimizda />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Hakkımızda / </span>
                    <span className="titleOfHeader">Ortaklarımız / </span>
                    <h1>Gulf Marine</h1>
                </div>
                <div className="page-article">
                    <p><img alt="gulfMarineImage" src={GulfMarineImage} style={{ height: "107px", width: "80px" }} /></p>
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
        </div >
    )
}

export default GulfMarine;