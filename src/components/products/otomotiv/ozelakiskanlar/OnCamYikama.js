import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage
} from "../../../../images/products"

const OnCamYikama = () => {
    return (
        <>
            <Helmet>
                <title>Ön cam yıkama sıvıları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/on-cam-yikama-sivilari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"OZELAKISKANLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ÖZEL AKIŞKANLAR"} level3ShowName={"Ön cam yıkama sıvıları"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/sogutma-sulari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/on-cam-yikama-sivilari/prista-screenwash-summer-4"}
                            productLogo={BosImage} productName={"Prista Screenwash Summer"}
                            productText={"Prista® yaz tipi ön cam yıkama sıvıları, denaturize etil alkol, su ve sürfaktan, “yağlama” bileşenleri, boya ve kokuların dikkatlice dengelenmiş bir seçimi formüle edilmiştir. Prista® yaz tipi ön cam yıkama sıvıları, araçların ön cam"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/on-cam-yikama-sivilari/prista-screenwash-winter-4"}
                            productLogo={BosImage} productName={"Prista Screenwash Winter"}
                            productText={"Prista® kış tipi ön cam yıkama sıvıları, denaturize etil alkol ve sürfaktan, “yağlama” bileşenleri, boya ve kokuların dikkatlice dengelenmiş bir seçimi formüle edilmiştir. Otomobillerin ön cam silecek suyu haznelerini donmaya karşı k"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default OnCamYikama;