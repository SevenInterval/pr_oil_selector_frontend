import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage
} from "../../../../images/products"

const HdmoStandart = () => {
    return (
        <>
            <Helmet>
                <title>Standart</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/standart-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} level3ShowName={"Standart"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc-uyumlu"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/standart-1/prista-super-hd-15w-40-20w-50-9"}
                            productLogo={BosImage} productName={"Prista Super HD 15W-40/ 20W-50"}
                            productText={"Prista® Super HD çok mevsimli motor yağları eski model dizel ve benzinli motorlar için formüle edilmiştir. Bu yağlar, aşınmaya, korozyona ve tortu birikimine karşı azami motor koruması sağlamak için kaliteli solvent ile rafine edilmi"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default HdmoStandart;