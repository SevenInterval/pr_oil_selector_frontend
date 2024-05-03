import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const SabitGazMotorlari = () => {
    return (
        <>
            <Helmet>
                <title>SABİT GAZ MOTORLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sabit-gaz-motorlari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"SABİT GAZ MOTORLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"SABİT GAZ MOTORLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/sabit-gaz-motorlari/prista-gmk-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista GMK"}
                            productText={"Prista® GMK doğal gaz motor yağları, eşsiz oksidasyon kararlılığı, nitrasyon direnci ve termal kararlılık sağlayan gelişmiş teknoloji ürünü katkı maddesi ile harmanlanmış kaliteli solvent ile rafine edilmiş ve hidroişlenmiş parafinik"}
                            last={false} />
                        <UrunOzet productUrl={"/product/sabit-gaz-motorlari/prista-r-ngeo-40-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista® NGEO 40"}
                            productText={"Prista® NGEO 40 doğal gaz motor yağı, eşsiz oksidasyon kararlılığı, nitrasyon direnci ve termal kararlılık sağlayan en son nesil katkı maddesi ile harmanlanmış Grup II baz yağlardan formüle edilmiştir."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default SabitGazMotorlari;