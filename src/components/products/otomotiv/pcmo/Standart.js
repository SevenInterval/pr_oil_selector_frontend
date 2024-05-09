import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage
} from "../../../../images/products"

const Standart = () => {
    return (
        <>
            <Helmet>
                <title>Standart</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/standart" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"PCMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"PCMO"} level3ShowName={"Standart"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/standart/prista-super-hd-10w-40-4"}
                            productLogo={BosImage} productName={"Prista Super HD 10W-40"}
                            productText={"Prista® Super HD 10W-40 yarı sentetik, çok mevsimli motor yağı, eski modellerin dizel ve benzinli motorları için formüle edilmiştir. Bu yağ, aşınmaya, korozyona ve tortu birikimine karşı azami motor koruması sağlamak için kaliteli so"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default Standart;