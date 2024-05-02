import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Ypuhpd5w30Image, Ypuhpd10w40Image, YpbasicVarilImage
} from "../../../../images/products"

const HdmoDpfTwc = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek performanslı DPF & TWC uyumlu</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-dpf-twc-uyumlu" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"HDMO"} level3ShowName={"Yüksek performanslı DPF & TWC uyumlu"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-dpf-twc-uyumlu"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/yuksek-performansli-dpf-twc-uyumlu/prista-uhpd-5w-30-4"}
                            productLogo={Ypuhpd5w30Image} productName={"Prista UHPD 5W-30"}
                            productText={"Prista® UHPD 5W-30, en son uluslararası dizel egzos emisyon standardı Euro IV , Euro V ve Euro VI'e uygun olarak dizayn edilmiş ve ilgili dizel partikül filtreleri ile donatılmış ağır görev dizel motorların yağlanması için tasarlanmı"}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-dpf-twc-uyumlu/prista-uhpd-10w-40-4"}
                            productLogo={Ypuhpd10w40Image} productName={"Prista UHPD 10W-40"}
                            productText={"Prista® UHPD 10W-40, en son uluslararası dizel egzos emisyon standardı Euro IV , Euro V ve Euro VI'e uygun olarak dizayn edilmiş ve ilgili dizel partikül filtreleri ile donatılmış ağır görev dizel motorların yağlanması için tasarlanm"}
                            last={true} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-dpf-twc-uyumlu/prista-shpd-ls-10w-30-7"}
                            productLogo={YpbasicVarilImage} productName={"Prista SHPD LS 10W-30"}
                            productText={"Prista® SHPD LS 10W-30 is a new category, semi-synthetic engine oil of medium SAPS level, intended for moderately extended oil drain intervals. This oil complies with the requirements imposed by the heavy duty diesel engines bio-dies"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default HdmoDpfTwc;