import { Link } from "react-router-dom";
import SideBarIrtibat from "../../components/SideBarIrtibat";

const Harita = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
                    <h1>HARİTA</h1>
                </div>
                <div className="page-article">
                    <div className="row cell-bg">
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/bulgaristan">Bulgaristan</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/romanya">Romanya</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/macaristan">Macaristan</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/cek-cumhuriyeti">Çek Cumhuriyeti</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/sirbistan">Sırbistan</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/ukrayna">Ukrayna</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/turkiye">Türkiye</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/ozbekistan">Özbekistan</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/rusya-1">Rusya</Link></div>
                    </div>
                    <p>
                        <strong style={{ fontFamily: "sans-serif" }}>Export Markets</strong><br />
                        Prista Oil Blending Plant<br />
                        Bulgaria<br />
                        7012 Ruse<br />
                        46 Treti Mart Blvd.<br />
                        Tel: <Link to="tel:+359 82 815 158" style={{ color: "#11a1d6" }}>+359 82 815 158</Link>
                    </p>
                    <div className="iframe">
                        <iframe src="//www.prista-oil.com/google/map/16" title="istiraklerIrtibat" frameBorder="0"></iframe>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Harita;