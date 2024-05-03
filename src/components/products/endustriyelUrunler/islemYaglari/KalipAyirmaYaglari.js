import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const KalipAyirmaYaglari = () => {
    return (
        <>
            <Helmet>
                <title>Kalıp ayırma yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/kalip-ayirma-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"ISLEMYAGLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"İŞLEM YAĞLARI"} level3ShowName={"Kalıp ayırma yağları"}
                        level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} level2To={"/catalogue/plastiklestiriciler"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/kalip-ayirma-yaglari/prista-km-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista KM"}
                            productText={"PRISTA® KM kalıp ayırma yağları, katkılarla harmanlanmış oldukça rafine parafinik-naftenik baz ürünlerden formüle edilmiş, yağlara çok iyi yağlama, yapışma ve kalıp ayırma özellikleri katan ve kalıpları korozyondan güvenilir bir şeki"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default KalipAyirmaYaglari;