import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage, Ypatfiii4Image, Yppristaatf4Image, Yppsf4Image
} from "../../../../images/products"

const YuksekPerformansliOtomatik = () => {
    return (
        <>
            <Helmet>
                <title>Yüksek performanslı otomatik şanzıman</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-otomatik-sanziman" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"SANZIMAN"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"ŞANZIMAN"} level3ShowName={"Yüksek performanslı otomatik şanzıman"}
                        level1To={"/catalogue/yuksek-performansli-dpf-twc"} level2To={"/catalogue/yuksek-performansli-duz-sanziman"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-r-atf-ii-m-4"}
                            productLogo={BosImage} productName={"PRISTA® ATF II M"}
                            productText={"Prista® ATF II M otomatik şanzıman yağı, özenle seçilmiş kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve özel olarak geliştirilmiş katkı sistemi ile formüle edilmiştir. Ürün kırmızı boyalıdır."}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-atf-iii-4"}
                            productLogo={Ypatfiii4Image} productName={"Prista ATF III"}
                            productText={"Prista® ATF III otomatik şanzıman yağı sıradışı baz yağlar, oldukça rafine baz ürünler ve özel olarak tasarlanmış katkı maddeleri kullanılarak formüle edilmiştir. Ürün kırmızı boyalıdır. Prista® ATF III, DEXRON III şanzıman yağının k"}
                            last={true} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-atf-4"}
                            productLogo={Yppristaatf4Image} productName={"Prista ATF"}
                            productText={"Prista® ATF otomatik şanzıman yağı, özenle seçilmiş kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve özel olarak geliştirilmiş karkı sistemi ile  formüle edilmiştir. Ürün kırmızı boyalıdır. Prista®  ATF, GM Dexron "}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-mhp-40a-4"}
                            productLogo={BosImage} productName={"Prista MHP 40A"}
                            productText={"Prista® MHP-40A, üreticileri tarafından GM Type A Suffix A performans seviyeli yağların kullanılması önerilen yol yapım, kaldırma ve off-road alet ve makinaların hidrodinamik şanzımanlarında çalışma sıvısı olarak amaçlanmış madeni ti"}
                            last={true} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-mhp-32-4"}
                            productLogo={BosImage} productName={"Prista MHP 32"}
                            productText={"Prista® MHP 32 Şanzıman/Hidrolik yağı, özenle seçilmiş kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve özel olarak tasarlanmış katkı maddesi ile  formüle edilmiştir.Prista® MHP 32 Voith değişken hızlı turbo kaplin"}
                            last={false} />
                        <UrunOzet productUrl={"/product/yuksek-performansli-otomatik-sanziman/prista-psf-4"}
                            productLogo={Yppsf4Image} productName={"Prista PSF"}
                            productText={"Prista® PSF kırmızı renkli hidrolik direksiyon yağı sıradışı baz yağlar, oldukça rafine baz ürünler ve özel olarak tasarlanmış katkı maddeleri kullanılarak formüle edilmiştir. Prista® PSF, günümüz binek araçların ve hafif ticari araç"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default YuksekPerformansliOtomatik;