import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const SistemYaglari = () => {
    return (
        <>
            <Helmet>
                <title>Sistem Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sistem-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"ANAYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"ANA YAĞLAR"} level3ShowName={"Sistem Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/sistem-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/sistem-yaglari/465"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine C"}
                            productText={"PRISTA® MARINE C motor yağları, dikkatlice dengelenmiş kaliteli baz yağlarla ve özellikle yüksek ekipman koruması için tasarlanmış, özenle seçilmiş katkı maddeleriyle formüle edilmiştir."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default SistemYaglari;