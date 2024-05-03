import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const TurbinYaglari = () => {
    return (
        <>
            <Helmet>
                <title>TÜRBİN YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/turbin-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"TÜRBİN YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"TÜRBİN YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/turbin-yaglari/prista-tpx-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista Tpx"}
                            productText={"Prista® Tpx türbin yağları özel külsüz katkı maddesi ile harmanlanmış çok rafine, hidroişlenmiş yağ baz ürünlerinden formüle edilmiştir. Hazır haldeki bu yağlar çok iyi oksidasyon kararlığı, güvenilir korozyon direnci ve iyi aşınma ö"}
                            last={false} />
                        <UrunOzet productUrl={"/product/turbin-yaglari/prista-tps-32-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Tps -32"}
                            productText={"PRISTA® Tps-32 türbin yağı, çok etkili külsüz katkı maddesi ile harmanlanmış bozulmaya karşı çok yüksek direnç gösteren özenle seçilmiş rafine baz yağlarla formüle edilmiştir."}
                            last={true} />
                        <UrunOzet productUrl={"/product/turbin-yaglari/prista-tps-46-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Tps -46"}
                            productText={"PRISTA® Tps-46 türbin yağı, çok etkili külsüz katkı maddesi ile harmanlanmış bozulmaya karşı çok yüksek direnç gösteren özenle seçilmiş rafine baz yağlarla formüle edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/product/turbin-yaglari/prista-tps-ep-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista Tps EP"}
                            productText={"PRISTA® Tps/ EP türbin yağları, mükemmel oksidasyon kararlılığı, güvenilir korozyon koruması ve iyi  iyi aşınma özellikleri sunan özel, çok etkili külsüz katkı maddesi ile harmanlanmış, bozulmaya karşı çok yüksek direnç gösteren özen"}
                            last={true} />
                        <UrunOzet productUrl={"/product/turbin-yaglari/prista-tp-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Tp"}
                            productText={"PRISTA® Tp türbin yağları, yüksek oksidasyon kararlılığı, güvenilir korozyon koruması sağlayan çok etkili külsüz katkı maddesi ile harmanlanmış oldukça rafine baz ürünlerden formüle edilmiştir."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default TurbinYaglari;