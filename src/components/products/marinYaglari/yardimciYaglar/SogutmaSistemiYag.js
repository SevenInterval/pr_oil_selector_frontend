import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const SogutmaSistemiYag = () => {
    return (
        <>
            <Helmet>
                <title>Soğutma Sistemi Yağı</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sogutma-sistemi-yagi" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Soğutma Sistemi Yağı"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/sogutma-sistemi-yagi/prista-frigus-ha-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista Frigus HA"}
                            productText={"PRISTA® FRIGUS HA yağları, soğutucu gaz olarak amonyak ile çalışan buzdolaplarının ve soğutma cihazlarının yağlanması için önerilmektedir. PRISTA® FRIGUS HA buzdolabı kompresör yağları çok kaliteli solventle rafine edilmiş ve hidroiş"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default SogutmaSistemiYag;