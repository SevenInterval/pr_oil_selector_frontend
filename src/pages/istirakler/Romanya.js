import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import F_icon from '../../images/F_icon.svg.png'

const Romanya = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarPazarlar />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Pazarlar / İştirakler / </span>
                    <h1>Romanya</h1>
                </div>
                <div className="page-article">
                    <p>
                        <strong style={{ fontFamily: "sans-serif" }}>Prista Oil Romania S.A.</strong><br />
                        14459 Bucharest<br />
                        169 Calea Floreasca<br />
                        tel: +40 021 4115517,&nbsp; + 40 0372734701<br />
                        fax: + 40 021 4115515/16/18<br />
                        <Link to="mailto:office@prista-oil.ro"><span style={{ color: "#5bb5e7" }}>office@prista-oil.ro</span></Link><br />
                        <Link to="http://www.prista-oil.ro/"><span style={{ color: "#5bb5e7" }}>www.prista-oil.ro</span></Link>
                    </p>

                    <p>
                        <Link to="https://www.facebook.com/PristaOilRomania/" target="_blank">
                            <img alt="facebokIcon" src={F_icon} />
                        </Link>
                    </p>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/21" title="romanyaMap" frameborder="0"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default Romanya;