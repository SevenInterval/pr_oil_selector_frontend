import { Link } from "react-router-dom";
import SidebarKalite from "../../components/SidebarKalite";
import { Helmet } from "react-helmet-async";

const BizimleTemasaGecin = () => {
    return (
        <>
            <Helmet>
                <title>Bizimle temasa geçin</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/bizimle-temasa-gecin" />
            </Helmet>
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
        </>
    )
}

export default BizimleTemasaGecin;