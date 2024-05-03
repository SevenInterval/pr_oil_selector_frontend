import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const SirkulasyonYaglari = () => {
    return (
        <>
            <Helmet>
                <title>SİRKÜLASYON YAĞLARI VE GENEL AMAÇLI YAĞLAR</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"SİRKÜLASYON YAĞLARI VE GENEL AMAÇLI YAĞLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"SİRKÜLASYON YAĞLARI VE GENEL AMAÇLI YAĞLAR"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-paper-machine-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Paper Machine"}
                            productText={"PRISTA® Paper Machine Yağları çok iyi oksidasyon kararlılığı, korozyon koruması sağlayan ve kullanım sırasında kapsolmuş havayı ve suyu kolayca dışarı vermek için mükemel sudan ayrılma ve hava ayrışma özellikleri olan gelişmiş katkı "}
                            last={false} />
                        <UrunOzet productUrl={"/product/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-circulating-oil-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Circulating Oil"}
                            productText={"PRISTA® sirkülasyon yağları, hadde makinalarında kullanıldığında oksidasyona ve tortu oluşumuna karşı yüksek direnç gösteren yüksek dereceli madeni yağlardır. Çok iyi oksidasyon kararlılığı, korozyon koruması sağlayan ve kullanım sır"}
                            last={true} />
                        <UrunOzet productUrl={"/product/sirkulasyon-yaglari-ve-genel-amacli-yaglar/prista-an-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista AN"}
                            productText={"PRISTA® AN endüstriyel yağlar, kaliteli solvent ile rafine edilmiş ve hidroişlenmiş naftenik ve parafinik-naftenik bazlı ürünler özenle seçilerek formüle edilmiştir. PRISTA® AN yağları, endüstriyel makinelerde, ekipmanlarda ve sistem"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default SirkulasyonYaglari;