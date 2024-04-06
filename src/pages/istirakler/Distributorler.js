import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Distributorler = () => {
    return (
        <>
            <Helmet>
                <title>Distributorler</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/distributorler" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"DISTRIBUTORLER"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / </span>
                        <h1>Distribütörler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <div className="row cell-bg">
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/adana-1">Adana</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/denizli-1">Denizli</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/istanbul-1">İstanbul</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/izmir-1">İzmir</Link></div>
                            <div className="col-md-3 col-sm-3 col-xs-6">&nbsp;</div>
                        </div>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/45" title="distrFrame" frameBorder="0"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Distributorler;