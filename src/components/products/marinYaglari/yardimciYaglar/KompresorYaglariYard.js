import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const KompresorYaglariYard = () => {
    return (
        <>
            <Helmet>
                <title>Kompresör Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/kompresor-yaglari-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Kompresör Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/kompresor-yaglari-1/prista-mvk-2-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista MVK-2"}
                            productText={"Yüksek oksidasyon kararlılığına, gelişmiş yağlama ve R&O koruma özelliklerine sahip yağlar gerektiren sirkülasyon veya karışık tip yağlama sistemleriyle donatılmış piston tipi kompresörlerin yağlanması için tasarlanmış katkılı kompre"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default KompresorYaglariYard;