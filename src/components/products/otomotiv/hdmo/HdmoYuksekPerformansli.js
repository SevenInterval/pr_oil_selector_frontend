import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Yptd10w40Image, Ypvds310w40Image, YpbasicVarilImage
} from "../../../../images/products"

const HdmoYuksekPerformansli = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek performanslı</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"HDMO"} level3ShowName={"Yüksek performanslı"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc-uyumlu"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/yuksek-performansli-1/prista-ultra-td-10w-40-4"}
                            productLogo={Yptd10w40Image} productName={"Prista Ultra TD 10W-40"}
                            productText={"Prista® Ultra TD 10W-40, uzun yağ değiştirme aralıklarında yüksek performans, mükemmel dayanıklılık ve kararlılık sağlamak için yüksek kaliteli baz bileşenlerle harmanlanmış ve özel olarak formüle edilmiş katkı maddeleriyle ve çok yü"}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-1/prista-shpd-vds-3-10w-40-4"}
                            productLogo={Ypvds310w40Image} productName={"Prista SHPD VDS-3 10W-40"}
                            productText={"Prista® SHPD VDS-3 10W-40 çok mevsimli motor yağı, kullanım sırasında üstün performans ve mükemmel dayanıklılık sağlamak için eşsiz kaliteli ve dikkatlice dengelenmiş solvent ile rafine edilmiş, hidroişlenmiş sentetik baz ürünler ve "}
                            last={true} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-1/prista-shpd-ls-15w-40-6"}
                            productLogo={YpbasicVarilImage} productName={"Prista SHPD LS 15W-40"}
                            productText={"Prista® Super SHPD 15W-40, normal uzunluktaki yağ değiştirme aralıkları için amaçlanmış orta SAPS seviyeli yeni bir motor yağı kategorisidir. Bu yağ, yeni motor yağı eğilimine göre API Grup II baz yağlar esaslı olup AB yönetmelikleri"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default HdmoYuksekPerformansli;