import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const SilindirYaglari = () => {
    return (
        <>
            <Helmet>
                <title>Silindir Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/silindir-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"ANAYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"ANA YAĞLAR"} level3ShowName={"Silindir Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/sistem-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/silindir-yaglari/prista-marine-cm-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine CM"}
                            productText={"PRISTA® MARINE CM 50/70, tüm sıradan düşük devirli piston kafalı dizel marin motorlarında mükemmel etki sağlayan yeni, en son teknoloji ürünü katkı maddesi ile formüle edilmiş marin yağıdır. Katkı maddesi Bolnes,"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default SilindirYaglari;