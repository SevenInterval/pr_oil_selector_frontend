import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage, Ypstou4Image, Yputto3Image
} from "../../../../images/products"

const UttoStou = () => {
    return (
        <>
            <Helmet>
                <title>UTTO/STOU/TO-4</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/utto-stou-to-4-5" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"SANZIMAN"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ŞANZIMAN"} level3ShowName={"UTTO/STOU/TO-4"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-duz-sanziman"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/utto-stou-to-4-5/prista-r-stou-4"}
                            productLogo={Ypstou4Image} productName={"Prista® STOU"}
                            productText={"Prista® STOU Evrensel Üstün Traktör Yağları, STOU yağları tarafından gerektirilen tüm kompleks özellikleri yağlara uygulamak için kaliteli solvent ile rafine edilmiş, hidroişlenmiş sentetik baz ürünler ve özenle seçilmiş yüksek perfo"}
                            last={false} />
                        <UrunOzet productUrl={"/product/utto-stou-to-4-5/prista-r-utto-3"}
                            productLogo={Yputto3Image} productName={"Prista® UTTO"}
                            productText={"Prista® UTTO Evrensel Traktör Şanzıman Yağı, şanzıman/dişli kutularının, diferansiyellerin/güç aktarma organlarının, ıslak frenlerin & debriyaj ve hidrolik sistemlerinin yağlama gerekliliklerini karşılamak için çok kaliteli solvent i"}
                            last={true} />
                        <UrunOzet productUrl={"/product/utto-stou-to-4-5/prista-to-4-sae-10w-30-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista TO-4 SAE 10W /30"}
                            productText={"Prista® TO-4 powershift şanzıman yağları, çok kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünlerle ve mikro oyulmaya ve metal yorgunluğuna karşı üstün yatak koruması sağlayan özel aşınma önleyici katkılar ihtiva eden ço"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default UttoStou;