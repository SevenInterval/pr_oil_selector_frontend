import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Yp5w305w40Image, Yp10w40Image, Ypsb10w40Image
} from "../../../../images/products"

const YuksekPerformansli = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek Performanslı</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} level3ShowName={"Yüksek performanslı"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/yuksek-performansli/prista-ultra-5w-30-5w-40-4"}
                            productLogo={Yp5w305w40Image} productName={"Prista Ultra  5W-30/ 5W-40"}
                            productText={"Prista® Ultra çok mevsimli motor yağları, en gelişmiş yağlama teknolojisine göre harmanlanmış ve günümüzün binek, hafif ticari araçların ve kamyonetlerin motorlarını yağlamak için tasarlanmış tam sentetik ürünlerdir."}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli/prista-leader-10w-40-6"}
                            productLogo={Yp10w40Image} productName={"Prista Leader 10W-40"}
                            productText={"Prista® Leader TD 10W-40, eşsiz bileşime ve formülasyona sahip, yarı sentetik, çok dereceli bir motor yağıdır. Ürün, özel baz bileşenler ve gelişmiş katkı maddesi teknolojisi ile formüle edilmiştir ve bunun sonucunda elde edilen yağ,"}
                            last={true} />
                        <UrunOzet productUrl={"/product/yuksek-performansli/prista-super-benzin-10w-40-4"}
                            productLogo={Ypsb10w40Image} productName={"Prista Super Benzin 10W-40"}
                            productText={"Prista® Super Benzin 10W-40, modern benzinli motorların mevcut yağlama ihtiyaçlarını karşılamak için özel olarak geliştirilmiş yarı sentetik, çok mevsimli bir motor yağıdır. Dünyanın önde gelen firmaları tarafından sağlanan, kaliteli"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default YuksekPerformansli;