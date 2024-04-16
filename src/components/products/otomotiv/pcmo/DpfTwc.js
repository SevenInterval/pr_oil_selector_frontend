import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import { Dpf0w204Image, Dpfc50w20Image } from "../../../../images/products"

const DpfTwc = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek performanslı DPF & TWC</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-dpf-twc" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} level3ShowName={"Yüksek performanslı DPF & TWC"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/yuksek-performansli-dpf-twc/prista-r-ultra-v-0w-20-4"}
                            productLogo={Dpf0w204Image} productName={"PRISTA® Ultra V 0W-20"}
                            productText={"Prista® Ultra V 0W-20, VW-Audi 508 00/509 00 gerekliliklerini karşılamak için ileri teknoloji ürünü katkı maddeleriyle imal edilmiş tam sentetik, üstün performanslı, yakıt tasarruflu bir motor yağıdır."}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-dpf-twc/prista-ultra-c5-0w-20-7"}
                            productLogo={Dpfc50w20Image} productName={"Prista Ultra C5 0W-20"}
                            productText={"Prista®​​​​​​​ Ultra C5 0W-20 is a full synthetic lubricant based on carefully selected very high quality base oils, specially developed for the gasoline and diesel direct injection Volvo Engine Architecture (VEA) engines.  This prod"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default DpfTwc;