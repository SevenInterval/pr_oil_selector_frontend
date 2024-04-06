import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Istanbul = () => {
    return (
        <>
            <Helmet>
                <title>İstanbul</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/istanbul-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"DISTRIBUTORLER"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / Distribütörler / </span>
                        <h1>İstanbul</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <strong style={{ fontFamily: "sans-serif" }}>ŞAHAP SARIYAR ENDÜSTRİYEL YAĞLAR</strong><br />
                            TORMAK SAN. SİT. 105. SOK. K BLOK NO: 24 BAŞAKŞEHİR –<br /> İSTANBUL<br />
                            0212 4861572<br />
                            <Link to="mailto:guleser@motec.com.tr" style={{ color: "#11a1d6" }}>guleser@motec.com.tr</Link>
                        </p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-6">&nbsp;</div>
                </article>
            </div>
        </>
    )
}

export default Istanbul;