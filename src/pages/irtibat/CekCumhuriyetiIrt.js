import { Link } from "react-router-dom";
import F_icon from '../../images/F_icon.svg.png'
import SideBarIrtibat from "../../components/SideBarIrtibat";

const CekCumhuriyetiIrt = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
                    <h1>Çek Cumhuriyeti</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil Czech s.r.o.</strong><br />
                        19000 Prague<br />
                        885/2a Špitálská St.<br />
                        tel: +420 266 799 150<br />
                        <Link to="mailto:objednavky@prista-oil.cz" style={{ color: "#11a1d6" }}>objednavky@prista-oil.cz</Link><br />
                        <Link to="http://www.prista-oil.cz/" style={{ color: "#11a1d6" }}>www.prista-oil.cz</Link>
                    </p>
                    <p>
                        <Link to="https://www.facebook.com/TexacoCZSK/" target="_blank">
                            <img alt="faceIcon" src={F_icon} />
                        </Link>
                    </p>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/23" frameborder="0" title="cekFrame"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default CekCumhuriyetiIrt;