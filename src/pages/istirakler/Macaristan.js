import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import F_icon from '../../images/F_icon.svg.png'
import { Helmet } from "react-helmet-async";

const Macaristan = () => {
    return (
        <>
            <Helmet>
                <title>Macaristan</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/macaristan-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / İştirakler / </span>
                        <h1>Macaristan</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <strong style={{ fontFamily: "sans-serif" }}>Prista Oil-Hungary Kft.</strong><br />
                            Gorgey utca 4.<br />
                            H-1224 Budapest<br />
                            tel: +3620 328 7486<br />
                            <Link to="mailto:vevo.szolgalat@prista-oil.com" style={{ color: "#11a1d6" }}>vevo.szolgalat@prista-oil.com</Link><br />
                            <Link to="http://www.prista-oil.hu/" style={{ color: "#11a1d6" }}>www.prista-oil.hu</Link>
                        </p>
                        <p>
                            <Link to="https://www.facebook.com/Texacokenoanyagok/" target="_blank">
                                <img alt="faceIcon" src={F_icon} />
                            </Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/22" frameborder="0" title="frameMacaristan"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Macaristan;