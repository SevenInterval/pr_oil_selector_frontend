import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";

const Distributorler = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarPazarlar title={"DISTRIBUTORLER"}/>
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Pazarlar / </span>
                    <h1>Distribütörler</h1>
                </div>
                <div className="page-article">
                    <div className="row cell-bg">
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/adana-1">Adana</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/denizli-1">Denizli</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/istanbul-1">İstanbul</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6"><Link to="/izmir-1">İzmir</Link></div>
                        <div className="col-md-3 col-sm-3 col-xs-6">&nbsp;</div>
                    </div>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/45" title="distrFrame" frameborder="0"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default Distributorler;