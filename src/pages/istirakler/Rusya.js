import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Rusya = () => {
    return (
        <>
            <Helmet>
                <title>Rusya</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/rusya" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"ISTIRAKLER"}/>
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / İştirakler / </span>
                        <h1>Rusya&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>LLC «Inventum»</strong><br />
                            Prospect Mira 101, building 1,&nbsp;<br />
                            E / POM / K / OF 4 / l /14/61<br />
                            Moscow 129085<br />
                            Russia<br />
                            <Link to="mailto:info@pristagroup.com" style={{ color: "#11a1d6" }}>info@pristagroup.com</Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/51" title="rusyaFrame" frameBorder="0"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Rusya;