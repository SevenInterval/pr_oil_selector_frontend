import { Link } from "react-router-dom";
import SideBarIrtibat from "../../components/SideBarIrtibat";
import { Helmet } from "react-helmet-async";

const UkraynaIrt = () => {
    return (
        <>
            <Helmet>
                <title>Ukrayna</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/ukrayna" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarIrtibat />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">İrtibat / </span>
                        <h1>Ukrayna&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil LLC</strong><br />
                            04070 Kyiv<br />
                            10A Naberezhno-Khreschatytska St.<br />
                            tel: +380 44 5940892<br />
                            fax: + 380 44 5940893<br />
                            <Link to="mailto:info@prista-oil.com.ua" style={{ color: "#11a1d6" }}>info@prista-oil.com.ua</Link><br />
                            <Link to="http://www.prista-oil.com/" style={{ color: "#11a1d6" }}>www.prista-oil.com</Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/25" title="frameUkrayna" frameBorder="0"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default UkraynaIrt;