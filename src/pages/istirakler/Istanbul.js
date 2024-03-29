import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";

const Istanbul = () => {
    return (
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
    )
}

export default Istanbul;