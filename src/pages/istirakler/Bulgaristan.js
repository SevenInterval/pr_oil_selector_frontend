import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import F_icon from '../../images/F_icon.svg.png'
import Y_icon from '../../images/youtubeImage.png'
import { Helmet } from "react-helmet-async";

const Bulgaristan = () => {
    return (
        <>
            <Helmet>
                <title>Bulgaristan</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/bulgaristan-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"ISTIRAKLER"}/>
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / İştirakler / </span>
                        <h1>Bulgaristan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    <strong style={{ fontFamily: "sans-serif" }}>Prista Oil Holding HQ</strong><br />
                                    1407 Sofia<br />
                                    20 Zlaten Rog St.<br />
                                    tel: + 359 2 9620110<br />
                                    fax: +359 2 8689476<br />
                                    <Link to="mailto:office@prista-oil.bg" style={{ lineHeight: "20.8px" }}><span style={{ color: "#5bb5e7" }}>office@prista-oil.bg</span></Link><br />
                                    <Link to="http://www.prista-oil.com/" style={{ lineHeight: "20.8px" }}><span style={{ color: "#5bb5e7" }}>www.prista-oil.com</span></Link></p>
                                <p>
                                    <Link to="https://www.facebook.com/PristaOil/" target="_blank">
                                        <img alt="facebookIcon" src={F_icon} title="fbIcon" loading='eager' width={25} height={25}/></Link>&nbsp;&nbsp;
                                    <Link to="https://www.youtube.com/channel/UCdijTVNCAy9gYh7--64NRNQ/featured" target="_blank">
                                        <img alt="youtubeIcon" src={Y_icon} title="ytIcon" loading='eager' width={25} height={25} />
                                    </Link>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <p>
                                    <strong style={{ fontFamily: "sans-serif" }}>Prista Oil Blending Plant</strong><br />
                                    7012 Ruse<br />
                                    46 Treti Mart Blvd.
                                </p>
                            </div>
                            <div className="col-md-4">&nbsp;</div>
                        </div>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/20" title="bulgaristanFrame" frameBorder="0"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Bulgaristan;