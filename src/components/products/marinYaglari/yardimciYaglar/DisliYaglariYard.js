import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const DisliYaglariYard = () => {
    return (
        <>
            <Helmet>
                <title>Dişli Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/disli-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Dişli Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/disli-yaglari/prista-rolon-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista Rolon"}
                            productText={"PRISTAâ ROLON endüstriyel dişli yağları normal, orta ve yüksek kararlı yağ sıcaklıklarında çalışan ağır yüklü endüstriyel dişli tahrik ünitelerinin yağlanması için geliştirilmiştir. PRISTA® ROLON yağları, düz ve sarmal konik dişliler"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default DisliYaglariYard;