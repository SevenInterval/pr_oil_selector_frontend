import { Link } from "react-router-dom";
import F_icon from '../../images/F_icon.svg.png'
import SideBarIrtibat from "../../components/SideBarIrtibat";
import { Helmet } from "react-helmet-async";

const MacaristanIrt = () => {
    return (
        <>
            <Helmet>
                <title>Macaristan</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/macaristan" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarIrtibat />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">İrtibat / </span>
                        <h1>Macaristan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                <img alt="faceIcon" src={F_icon} height={25} width={25} loading="eager" title="faceIc" />
                            </Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/22" frameBorder="0" title="frameMacaristan"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default MacaristanIrt;