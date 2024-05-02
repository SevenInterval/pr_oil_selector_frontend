import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    Yp2textra4Image, Yp2tmix4Image, Ypr4t6Image, BosImage
} from "../../../../images/products"

const T24TYaglari = () => {
    return (
        <>
            <Helmet>
                <title>2T/4T YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/2t-4t-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"2T/4T YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTIV"} level2ShowName={"2T/4T YAĞLARI"} level1To={"/catalogue/yuksek-performansli-dpf-twc"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/2t-4t-yaglari/prista-2t-extra-4"}
                            productLogo={Yp2textra4Image} productName={"Prista 2T Extra"}
                            productText={"Prista® 2T Extra binek araç, motosiklet, motorlu bisiklet, moped, scooter, kızak, motorlu çapa makineleri, motorlu testereler gibi kurşunlu veya kurşunsuz benzin yakan iki zamanlı benzinli motorların \"ön karışımlı\" yağlanması için am"}
                            last={false} />
                        <UrunOzet productUrl={"/product/2t-4t-yaglari/prista-2t-mix-4"}
                            productLogo={Yp2tmix4Image} productName={"Prista 2T Mix"}
                            productText={"Prista® 2T Mix binek araç, motosiklet, motorlu bisiklet, moped, motorlu çapa makineleri, motorlu testerelerin vs. standart iki zamanlı, hava soğutmalı benzinli motorlarının  \"ön karışımlı\" yağlanması için amaçlanmış düşük küllü maden"}
                            last={true} />
                        <UrunOzet productUrl={"/product/2t-4t-yaglari/prista-r-4t-6"}
                            productLogo={Ypr4t6Image} productName={"Prista® 4T"}
                            productText={"Prista® 4T dört mevsim motor yağları, kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve en modern teknoloji ile üretilmiş yüksek performanslı katkı maddeleri özenle seçilerek formüle edilmiştir. Bu formülasyon, yüks"}
                            last={false} />
                        <UrunOzet productUrl={"/product/2t-4t-yaglari/prista-2t-outboard-4"}
                            productLogo={BosImage} productName={"Prista 2T-Outboard"}
                            productText={"Prista® 2T Outboard, dıştan takmalı motorların yağlanması için amaçlanmış çok güvenilir, iki zamanlı bir motor yağıdır. Üstün kaliteli madeni bazlı ürünler, çok etkili külsüz katkı maddeleri ve yüksek parlama noktalı solvent ile form"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default T24TYaglari;