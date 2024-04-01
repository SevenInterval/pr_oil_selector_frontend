import { Link } from "react-router-dom";
import SidebarKalite from "../../components/SidebarKalite";

const BizimleTemasaGecin = () => {
    return (
        <div className="body_with_sidebar default">
            <SidebarKalite />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Kalite Yönetimi / </span>
                    <h1>Bizimle temasa geçin</h1>
                </div>
                <div className="page-article">
                    <p>
                        Email:
                        <Link to="mailto:iln@prista-oil.bg" style={{ color: "#11a1d6" }}> iln@prista-oil.bg</Link>
                    </p>
                    <p>Tel: +359 82&nbsp;815 127<br />
                        Fax:+359 82&nbsp;824 684
                    </p>
                </div>
            </article>
        </div>
    )
}

export default BizimleTemasaGecin;