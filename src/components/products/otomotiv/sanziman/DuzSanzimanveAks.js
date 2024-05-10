import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage, Ypsae90140Image, Ypsae80w90Image
} from "../../../../images/products"

const DuzSanzimanveAks = () => {
    return (
        <>
            <Helmet>
                <title>Düz şanzıman ve aks</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/duz-sanziman-ve-aks" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"SANZIMAN"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ŞANZIMAN"} level3ShowName={"Düz şanzıman ve aks"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-duz-sanziman"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/duz-sanziman-ve-aks/prista-ep-sae-90-140-4"}
                            productLogo={Ypsae90140Image} productName={"Prista EP SAE 90/140"}
                            productText={"Prista® EP otomotiv dişli yağları kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünlerin ve külsüz kükürt fosfor tipi katkıların özel bir seçimi ile formüle edilmiştir. Bu yağlar, zorlu koşullarda ve azami yükler altında "}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/duz-sanziman-ve-aks/prista-ep-sae-80w-90-85w-90-85w-140-4"}
                            productLogo={Ypsae80w90Image} productName={"Prista EP SAE 80W-90/85W-90/ 85W-140"}
                            productText={"Prista® EP otomotiv dişli yağları kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünlerin ve külsüz kükürt fosfor tipi katkıların özel bir seçimi ile formüle edilmiştir. Bu yağlar, zorlu koşullarda ve azami yükler altında "}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/duz-sanziman-ve-aks/prista-gl4-sae-90-4"}
                            productLogo={BosImage} productName={"Prista GL4 SAE 90"}
                            productText={"Prista® GL-4 90 tek mevsim otomotiv dişli yağları kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünlerin ve külsüz kükürt fosfor tipi katkıların özel bir seçimi ile formüle edilmiştir. Prista® GL-4 90 otomotiv dişli yağı,"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default DuzSanzimanveAks;