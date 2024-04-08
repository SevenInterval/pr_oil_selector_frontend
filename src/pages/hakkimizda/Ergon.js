import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import ErgonImage from '../../images/ergon.jpg';
import { Helmet } from "react-helmet-async";

const Ergon = () => {
    return (
        <>
            <Helmet>
                <title>Ergon</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/ergon-6" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarHakkimizda title={"ORTAKLAR"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Hakkımızda / </span>
                        <span className="titleOfHeader">Ortaklarımız / </span>
                        <h1>Ergon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <br />
                            <img alt="ergonImage" title="ergonImg" src={ErgonImage} height={50} width={200} loading="eager" /><br />
                            &nbsp;
                        </p>
                        <p>1954'te kurulan ve Merkezi Jackson, Mississippi'de bulunan Ergon Inc.'nin 2,300'den fazla çalışanı var. Ergon, rafine ürünlerin gelişmiş bir ham petrol işlemcisi, nakliyatçısı ve pazarlayıcısı olarak faaliyet göstermektedir.</p>
                        <p>Prista Oil; Bosna Hersek, Bulgaristan, Kosova, Makedonya, Romanya, Sırbistan, Türkiye ve Karadağ bölgelerinde Egron® ürünlerin özel bir distribütörüdür.</p>
                    </div>
                </article >
            </div>
        </>
    )
}

export default Ergon;