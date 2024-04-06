import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Adana = () => {
    return (
        <>
            <Helmet>
                <title>Adana</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/adana-1" />
            </Helmet>
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
        </>
    )
}

export default Adana;