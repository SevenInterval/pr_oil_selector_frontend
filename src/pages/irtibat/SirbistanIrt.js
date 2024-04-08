import { Link } from "react-router-dom";
import F_icon from '../../images/F_icon.svg.png'
import Y_icon from '../../images/youtubeImage.png'
import I_icon from '../../images/instagramImage.png'
import SideBarIrtibat from "../../components/SideBarIrtibat";
import { Helmet } from "react-helmet-async";

const SirbistanIrt = () => {
    return (
        <>
            <Helmet>
                <title>Sırbistan</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/sirbistan" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarIrtibat />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">İrtibat / </span>
                        <h1>Sırbistan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil AD Beograd</strong><br />
                            11070 Belgrade<br />
                            65 Zorana Djindjica Blvd.<br />
                            tel: +381 11 4075571<br />
                            fax: +381 11 2606027<br />
                            <Link to="mailto:office@prista-oil.rs" style={{ color: "#11a1d6" }}>office@prista-oil.rs</Link><br />
                            <Link to="http://www.prista-oil.rs/" style={{ color: "#11a1d6" }}>www.prista-oil.rs</Link>
                        </p>

                        <p>
                            <Link to="https://www.facebook.com/PristaOilSerbia/" target="_blank">
                                <img alt="faceSrb" src={F_icon} height={25} width={25} loading="eager" title="faceSrb" />
                            </Link>&nbsp;&nbsp;
                            <Link to="https://www.youtube.com/channel/UCFPY65-4ZLMlx-juJf9jPqg" target="_blank">
                                <img alt="youtubeSrb" src={Y_icon} height={25} width={25} loading="eager" title="youtubeSrb" />
                            </Link>&nbsp;&nbsp;
                            <Link to="https://www.instagram.com/pristaoil_serbia/" target="_blank">
                                <img alt="instaSrb" src={I_icon} height={25} width={25} loading="eager" title="youtubeSrb" />
                            </Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/24" frameBorder="0" title="srbFrame"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default SirbistanIrt;