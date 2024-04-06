import SideBarPazarlar from "../../components/SideBarPazarlar";
import { Helmet } from "react-helmet-async";

const Izmir = () => {
    return (
        <>
            <Helmet>
                <title>İzmir</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/izmir-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"DISTRIBUTORLER"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / Distribütörler / </span>
                        <h1>İzmir&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>İZATAMER OTO SERVİS MAKİNA SAN. TİC. LTD. ŞTİ</strong><br />
                            Alsancak 1494 Sk 23<br />
                            Konak İzmir<br />
                            0232 422 50 70</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Izmir;