import SideBar from "../../components/Sidebar";
import ErgonImage from '../../images/ergon.jpg';
import { Link } from "react-router-dom";

const Ergon = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBar />
            <article>
                <div class="page-header">
                    <span className="titleOfHeader">Hakkımızda / </span>
                    <span className="titleOfHeader">Ortaklarımız / </span>
                    <h1>Ergon</h1>
                </div>
                <div className="page-article">
                    <p>
                        <br />
                        <img alt="" src={ErgonImage} style={{ height: "50px", width: "200px" }} /><br />
                        &nbsp;
                    </p>
                    <p>1954'te kurulan ve Merkezi Jackson, Mississippi'de bulunan Ergon Inc.'nin 2,300'den fazla çalışanı var. Ergon, rafine ürünlerin gelişmiş bir ham petrol işlemcisi, nakliyatçısı ve pazarlayıcısı olarak faaliyet göstermektedir.</p>
                    <p>Prista Oil; Bosna Hersek, Bulgaristan, Kosova, Makedonya, Romanya, Sırbistan, Türkiye ve Karadağ bölgelerinde Egron® ürünlerin özel bir distribütörüdür.</p>
                </div>
            </article >
        </div >
    )
}

export default Ergon;