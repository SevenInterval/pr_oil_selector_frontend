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

const PristaSertifikalari = () => {
    return (
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
                                <img alt="aqap" src={AqapImage}
                                    style={{ height: "311px", width: "220px" }} />
                            </Link>
                            <br />
                            {" AQAP 2110"}
                        </div>
                        <div className="col-md-4" style={{ textAlign: "center" }}>
                            <Link to={EH9Pdf} target="_blank">
                                <img alt="EH9" src={EH9Image}
                                    style={{ height: "311px", width: "220px" }} />
                            </Link>
                            <br />
                            {" ISO 9001 UKAS"}
                        </div>
                        <div className="col-md-4" style={{ textAlign: "center" }}>
                            <Link to={EH14Pdf} target="_blank">
                                <img alt="EH14" src={EH14Image}
                                    style={{ height: "311px", width: "220px" }} />
                            </Link>
                            <br />
                            {" ISO 14001 UKAS"}
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="row">
                    <div className="col-md-4" style={{ textAlign: "center" }}>
                            <Link to={EH45Pdf} target="_blank">
                                <img alt="EH45" src={EH45Image}
                                    style={{ height: "311px", width: "220px" }} />
                            </Link>
                            <br />
                            {" ISO 45001 UKAS"}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PristaSertifikalari;