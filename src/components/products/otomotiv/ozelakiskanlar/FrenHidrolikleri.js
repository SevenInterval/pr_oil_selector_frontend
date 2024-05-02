import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    dot4dot3Image
} from "../../../../images/products"

const FrenHidrolikleri = () => {
    return (
        <>
            <Helmet>
                <title>Fren hidrolikleri</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/fren-hidrolikleri" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"OZELAKISKANLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ÖZEL AKIŞKANLAR"} level3ShowName={"Fren hidrolikleri"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/sogutma-sulari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/fren-hidrolikleri/prista-dot-4-dot-3-4"}
                            productLogo={dot4dot3Image} productName={"Prista DOT-4/ DOT-3"}
                            productText={"PRISTA® DOT-3 & PRISTA® DOT-4 fren hidrolikleri polietilen glikol ester, korozyona ve oksidasyona karşı koruma sağlayan katkı maddeleri ve dengeleyicilerden oluşur. Bu fren hidrolikleri petrol bazlı fren hidrolikleriyle uyumlu değild"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default FrenHidrolikleri;