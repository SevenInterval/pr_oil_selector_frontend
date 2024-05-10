import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage, longlife4Image, concentrate4Image, antifriz4Image
} from "../../../../images/products"

const SogutmaSulari = () => {
    return (
        <>
            <Helmet>
                <title>Soğutma suları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sogutma-sulari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"OZELAKISKANLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ÖZEL AKIŞKANLAR"} level3ShowName={"Soğutma suları"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/sogutma-sulari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/sogutma-sulari/prista-antifreeze-long-life-4"}
                            productLogo={longlife4Image} productName={"Prista Antifreeze Long Life"}
                            productText={"PRISTA® ANTIFREEZE LONG LIFE,  silikat içermeyen organik (mono- ve di-karboksilik) asitlerle geliştirilmiş etilen glikol ve katkı maddesi sistemi esaslı bir antifriz konsantrasyonudur. Bu ürün nitrat, amin ve fosfat gibi potansiyel z"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sogutma-sulari/prista-antifreeze-long-life-ready-to-use-4"}
                            productLogo={BosImage} productName={"Prista Antifreeze Long Life (ready-to-use)"}
                            productText={"PRISTA® Antifreeze LONG LIFE- ready for use,  organik (mono- ve di-karboksilik) asitlerle geliştirilmiş etilen glikol ve silikat içermeyen katkı maddesi esaslı, kullanıma hazır bir soğutma suyu/antifriz solüsyonudur. Bu ürün nitrat, "}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/sogutma-sulari/prista-antifreeze-concentrate-4"}
                            productLogo={concentrate4Image} productName={"Prista Antifreeze Concentrate"}
                            productText={"PRISTA® ANTIFREEZE-concentrate, etilen glikol ve organik (mono ve dikarboksilik) asit bazlı silikat içermeyen katkı maddeleri özenle seçilerek formüle edilmiş dört mevsim kullanıma yönelik bir antifriz konsantrasyonudur."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sogutma-sulari/prista-antifreeze-4"}
                            productLogo={antifriz4Image} productName={"Prista Antifreeze"}
                            productText={"PRISTA® ANTIFREEZE, etilen glikol ve organik (mono ve dikarboksilik) asit bazlı silikat içermeyen katkı maddeleri özenle seçilerek formüle edilmiş dört mevsim kullanıma yönelik bir soğutma suyu/antifriz konsantrasyonudur. PRISTA® ANT"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default SogutmaSulari;