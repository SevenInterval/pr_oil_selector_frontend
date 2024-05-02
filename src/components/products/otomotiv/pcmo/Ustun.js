import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Ustun15w4020w50Image
} from "../../../../images/products"

const Ustun = () => {
    return (
        <>
            <Helmet>
                <title>Üstün</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/ustun" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"PCMO"} level3ShowName={"Üstün"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/ustun/prista-leader-15w-40-20w-50-7"}
                            productLogo={Ustun15w4020w50Image} productName={"Prista Leader 15W-40/20W-50"}
                            productText={"Prista® Leader multigrade engine oils are especially developed to meet the current lubrication demands of the modern gasoline and diesel engines. They are formulated with a special selection of high quality solvent refined, hydrotrea"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default Ustun;