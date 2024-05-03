import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const MotorYaglariYard = () => {
    return (
        <>
            <Helmet>
                <title>Motor Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/motor-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Motor Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/motor-yaglari/prista-shpd-vds-3-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista SHPD VDS-3"}
                            productText={"Prista® SHPD VDS-3 çok mevsimli motor yağları, kullanım sırasında üstün performans ve mükemmel dayanıklılık sağlamak için eşsiz kaliteli ve dikkatlice dengelenmiş solvent ile rafine edilmiş, hidroişlenmiş baz ürünler ve yüksek perfor"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default MotorYaglariYard;