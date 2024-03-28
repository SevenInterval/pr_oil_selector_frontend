import VerilaJpeg from '../../images/home_gallery_verila.jpeg'
import ErgonJpeg from '../../images/home_gallery_ergon.jpeg'
import { Link } from "react-router-dom";
import SideBarHakkimizda from "../../components/SidebarHakkimizda";

const Ortaklarimiz = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarHakkimizda />
            <article>
                <div class="page-header">
                    <span className="titleOfHeader">Hakkımızda / </span>
                    <h1>Ortaklarımız</h1>
                </div>
                <div className="page-article">
                    <p>
                        <Link to="/verila-7">
                            <img alt="VerilaJpeg" src={VerilaJpeg} style={{ height: "100px", width: "119px" }} />
                        </Link> &nbsp;
                        <Link to="/ergon-6">
                            <img alt="ErgonJpeg" src={ErgonJpeg} style={{ height: "100px", width: "119px" }} />
                        </Link> &nbsp;&nbsp;
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Ortaklarimiz;