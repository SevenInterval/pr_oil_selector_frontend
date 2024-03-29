import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";

const Adana = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarPazarlar title={"DISTRIBUTORLER"} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Pazarlar / Distribütörler / </span>
                    <h1>Adana</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>ELCEN İŞ MAKİNELERİ SAN. VE TİC. A.Ş.</strong><br />
                        YEŞİLOBA MAH. SEMT 46257 SOK. 7/12 Z09 SEYHAN – ADANA<br />
                        0322 4295455<br />
                        <Link to="mailto:hursityilmaz@elcen.com.tr" style={{ color: "#11a1d6" }}>hursityilmaz@elcen.com.tr</Link>
                    </p>
                    <p>&nbsp;</p>
                </div>
                <div className="col-md-6">&nbsp;</div>
            </article>
        </div>
    )
}

export default Adana;