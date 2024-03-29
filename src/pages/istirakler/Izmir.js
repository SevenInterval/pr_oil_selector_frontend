import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";

const Izmir = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarPazarlar title={"DISTRIBUTORLER"} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Pazarlar / Distribütörler / </span>
                    <h1>İzmir</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>İZATAMER OTO SERVİS MAKİNA SAN. TİC. LTD. ŞTİ</strong><br />
                        Alsancak 1494 Sk 23<br />
                        Konak İzmir<br />
                        0232 422 50 70</p>
                </div>
            </article>
        </div>
    )
}

export default Izmir;