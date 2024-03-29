import { Link } from "react-router-dom";
import F_icon from '../../images/F_icon.svg.png'
import SideBarIrtibat from "../../components/SideBarIrtibat";

const MacaristanIrt = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
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
    )
}

export default MacaristanIrt;