import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const TurbinYaglariYard = () => {
    return (
        <>
            <Helmet>
                <title>Türbin Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/turbin-yaglari-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Türbin Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/turbin-yaglari-1/prista-tpx-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista TPx"}
                            productText={"PRISTA Tpx türbin yağları özel külsüz katkı maddesi ile harmanlanmış çok rafine, hidroişlenmiş baz yağ ürünlerinden formüle edilmiştir. Hazır haldeki bu yağlar çok iyi oksidasyon kararlığı, güvenilir korozyon direnci ve iyi aşınma ön"}
                            last={false} />
                        <UrunOzet productUrl={"/product/turbin-yaglari-1/prista-tps-ep-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista TPs EP"}
                            productText={"PRISTA Tps/ EP türbin yağları, mükemmel oksidasyon kararlılığı, güvenilir korozyon koruması ve iyi  iyi aşınma özellikleri sunan özel, çok etkili külsüz katkı maddesi ile harmanlanmış, bozulmaya karşı çok yüksek direnç gösteren özenl"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default TurbinYaglariYard;