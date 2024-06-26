import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Istirakler = () => {
    return (
        <>
            <Helmet>
                <title>İştirakler</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href='/istirakler' />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"ISTIRAKLER"}/>
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / </span>
                        <h1>İştirakler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <div className="row cell-bg">
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/bulgaristan-1">Bulgaristan</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/romanya-1">Romanya</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/macaristan-1">Macaristan</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/cek-cumhuriyeti-1">Çek Cumhuriyeti</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/sirbistan-1">Sırbistan</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/ukrayna-1">Ukrayna</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/turkiye-1">Türkiye</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/ozbekistan-1">Özbekistan</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/rusya">Rusya</Link></div>
                        </div>
                        <div className="iframe">
                            <iframe src="//www.prista-oil.com/google/map/16" title="istirakler" frameBorder="0"></iframe>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Istirakler;