import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    BosImage
} from "../../../../images/products"

const GazMotorYaglari = () => {
    return (
        <>
            <Helmet>
                <title>GAZ MOTOR YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/gaz-motor-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"OTOMOTIV"} level2ShowName={"GAZ MOTOR YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"OTOMOTİV"} level2ShowName={"GAZ MOTOR YAĞLARI"} level1To={"/catalogue/yuksek-performansli-dpf-twc"}/>
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/gaz-motor-yaglari/prista-multigas-hd-15w-40-4"}
                            productLogo={BosImage} productName={"Prista Multigas HD 15W-40"}
                            productText={"Prista® Multigas HD 15W-40, kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve özel gelişmiş katkı teknolojisi özenle seçilerek formüle edilmiş çok kaliteli, çok mevsimli bir motor yağıdır."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default GazMotorYaglari;