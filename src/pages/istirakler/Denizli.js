import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Denizli = () => {
    return (
        <>
            <Helmet>
                <title>Denizli</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/denizli-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"DISTRIBUTORLER"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / Distribütörler / </span>
                        <h1>Denizli</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>FÜZE AKÜ VE OTOMOTİV <br />
                            SAN.TİC.LTD.ŞTİ.</strong><br />
                            Sümer Mah. İzmir Bulvarı No:74 Denizli<br />
                            0258 2616310<br />
                            <Link to="http://www.fuzeaku.com" style={{ color: "#11a1d6" }}>www.fuzeaku.com</Link>
                        </p>
                        <p>&nbsp;</p>
                    </div>
                    <div className="col-md-6">&nbsp;</div>
                </article>
            </div>
        </>
    )
}

export default Denizli;