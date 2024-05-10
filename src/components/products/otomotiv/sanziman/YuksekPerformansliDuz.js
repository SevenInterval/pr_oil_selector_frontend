import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Yp75w8075w90Image
} from "../../../../images/products"

const YuksekPerformansliDuz = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek performanslı düz şanzıman</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-duz-sanziman" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"SANZIMAN"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ŞANZIMAN"} level3ShowName={"Yüksek performanslı düz şanzıman"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-duz-sanziman"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/yuksek-performansli-duz-sanziman/prista-ultragear-synthetic-75w-80-75w-90-4"}
                            productLogo={Yp75w8075w90Image} productName={"Prista Ultragear Synthetic 75W-80/  75W-90"}
                            productText={"Prista® Ultragear Synthetic otomotiv dişli yağları yüksek kaliteli hidroişlenmiş baz ürünlerin,  yüksek kaliteli sentetik baz ürünlerin ve külsüz kükürt fosfor tipi katkıların özel bir seçimi ile formüle edilmiştir.Bu yüksek kaliteli"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default YuksekPerformansliDuz;