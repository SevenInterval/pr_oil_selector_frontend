import VerilaJpeg from '../../images/home_gallery_verila.jpeg'
import ErgonJpeg from '../../images/home_gallery_ergon.jpeg'
import { Link } from "react-router-dom";
import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import { Helmet } from "react-helmet-async";

const Ortaklarimiz = () => {
    return (
        <>
            <Helmet>
                <title>Ortaklarımız</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/ortaklarimiz" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarHakkimizda />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Hakkımızda / </span>
                        <h1>Ortaklarımız&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <Link to="/verila-7">
                                <img alt="VerilaJpeg" src={VerilaJpeg} height={100} width={119} loading='eager' title='VerilaJpeg' />
                            </Link> &nbsp;
                            <Link to="/ergon-6">
                                <img alt="ErgonJpeg" src={ErgonJpeg} height={100} width={119} loading='eager' title='ErgonJpeg' />
                            </Link> &nbsp;&nbsp;
                        </p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Ortaklarimiz;