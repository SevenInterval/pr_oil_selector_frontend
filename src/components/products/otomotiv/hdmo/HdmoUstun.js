import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Yp15w4020w504Image, YpbasicVarilImage, Ypld15w40Image
} from "../../../../images/products"

const HdmoUstun = () => {
    return (
        <>
            <Helmet>
                <title>Üstün</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/ustun-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} level3ShowName={"Üstün"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc-uyumlu"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/ustun-1/prista-shpd-vds-3-15w-40-20w-50-4"}
                            productLogo={Yp15w4020w504Image} productName={"Prista SHPD VDS-3 15W-40/ 20W-50"}
                            productText={"Prista® SHPD VDS-3 çok mevsimli motor yağları, kullanım sırasında üstün performans ve mükemmel dayanıklılık sağlamak için eşsiz kaliteli ve dikkatlice dengelenmiş solvent ile rafine edilmiş, hidroişlenmiş baz ürünler ve yüksek perfor"}
                            last={false} />
                        <UrunOzet productUrl={"/product/ustun-1/prista-turbo-diesel-15w-40-20w-50-4"}
                            productLogo={YpbasicVarilImage} productName={"Prista Turbo Diesel 15W-40/ 20W-50"}
                            productText={"Prista® Turbo Diesel çok mevsimli motor yağları kaliteli solvent ile rafine edilmiş, hidroişlenmiş baz ürünler ve modern, yüksek performanslı gelişmiş katkı teknolojisi özenle seçilerek formüle edilmiştir.  Bu yağlar, orta ile ağır g"}
                            last={true} />
                        <UrunOzet productUrl={"/product/ustun-1/prista-r-leader-15w-40-20w-50-6"}
                            productLogo={Ypld15w40Image} productName={"Prista® Leader 15W-40/ 20W-50"}
                            productText={"Prista® Leader TD çok mevsimli motor yağları, günümüzde benzinli ve dizel motor üreticilerinin çoğu yağlama gerekliliklerini karşılayan ve bunun ötesine geçen kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve yüksek"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default HdmoUstun;