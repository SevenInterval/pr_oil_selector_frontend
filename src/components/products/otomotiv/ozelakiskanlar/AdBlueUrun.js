import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    adblueImage
} from "../../../../images/products"

const AdBlueUrun = () => {
    return (
        <>
            <Helmet>
                <title>AdBlue®</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/adblue-r-6" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"OZELAKISKANLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ÖZEL AKIŞKANLAR"} level3ShowName={"AdBlue®"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/sogutma-sulari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/adblue-r-6/adblue-6"}
                            productLogo={adblueImage} productName={"AdBlue®"}
                            productText={"AdBlue®, özellikle otomotiv SCR katalitik konvertörü için geliştirilmiş yüksek kaliteli bir solüsyondur. AdBlue®, SCR katalitik konvertörüne enjekte edilerek tüm nitrojen oksitler (NOx) hemen zararsız nitrojene ve suya dönüştürülür."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default AdBlueUrun;