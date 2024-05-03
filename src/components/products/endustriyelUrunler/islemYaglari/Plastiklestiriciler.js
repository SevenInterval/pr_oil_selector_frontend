import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const Plastiklestiriciler = () => {
    return (
        <>
            <Helmet>
                <title>Plastikleştiriciler</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/plastiklestiriciler" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"ISLEMYAGLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"İŞLEM YAĞLARI"} level3ShowName={"Plastikleştiriciler"}
                        level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} level2To={"/catalogue/plastiklestiriciler"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/plastiklestiriciler/prista-pk-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista PK"}
                            productText={"Prista® PK plastikleştiriciler, mükemmel oksidasyon kararlılığı ve kauçuk parçalarla çok iyi uyumluluk gösteren çok kaliteli, oldukça rafine naftenik (Prista PK-4n) ve parafinik-naftenik (Prista PK-10, Prista PK-15, Prista PK-20 & Pr"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default Plastiklestiriciler;