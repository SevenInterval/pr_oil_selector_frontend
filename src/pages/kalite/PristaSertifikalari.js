import { Link } from "react-router-dom";
import SidebarKalite from "../../components/SidebarKalite";
import AqapImage from "../../images/AQAP 2022 EN.jpg"
import AqapPdf from "../../pdf/AQAP 2022 EN.pdf"
import EH9Image from "../../images/ЕН9.jpg"
import EH9Pdf from "../../pdf/ЕН_9.pdf"
import EH14Image from "../../images/ЕН14.jpg"
import EH14Pdf from "../../pdf/ЕН_14.pdf"
import EH45Image from "../../images/ЕН45.jpg"
import EH45Pdf from "../../pdf/ЕН_45.pdf"
import { Helmet } from "react-helmet-async";

const PristaSertifikalari = () => {
    return (
        <>
            <Helmet>
                <title>Prista sertifikaları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/prista-sertifikalari" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SidebarKalite />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Kalite Yönetimi / </span>
                        <h1>Prista sertifikaları</h1>
                    </div>
                    <div className="page-article">
                        <div className="row">
                            <div className="col-md-4" style={{ textAlign: "center" }}>
                                <Link to={AqapPdf} target="_blank">
                                    <img alt="aqap" src={AqapImage} title="aqapImage" loading="eager" height={311} width={220} />
                                </Link>
                                <br />
                                {" AQAP 2110"}
                            </div>
                            <div className="col-md-4" style={{ textAlign: "center" }}>
                                <Link to={EH9Pdf} target="_blank">
                                    <img alt="EH9" src={EH9Image} title="eh9Image" loading="eager" height={311} width={220} />
                                </Link>
                                <br />
                                {" ISO 9001 UKAS"}
                            </div>
                            <div className="col-md-4" style={{ textAlign: "center" }}>
                                <Link to={EH14Pdf} target="_blank">
                                    <img alt="EH14" src={EH14Image} title="eh14Image" loading="eager" height={311} width={220} />
                                </Link>
                                <br />
                                {" ISO 14001 UKAS"}
                            </div>
                        </div>
                        <p>&nbsp;</p>
                        <div className="row">
                            <div className="col-md-4" style={{ textAlign: "center" }}>
                                <Link to={EH45Pdf} target="_blank">
                                    <img alt="EH45" src={EH45Image} title="eh45Image" loading="eager" height={311} width={220} />
                                </Link>
                                <br />
                                {" ISO 45001 UKAS"}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default PristaSertifikalari;