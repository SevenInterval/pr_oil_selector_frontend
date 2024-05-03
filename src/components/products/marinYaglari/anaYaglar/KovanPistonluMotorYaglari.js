import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const KovanPistonluMotorYaglari = () => {
    return (
        <>
            <Helmet>
                <title>Kovan Pistonlu Motor Yağları</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/kovan-pistonlu-motor-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"ANAYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"ANA YAĞLAR"} level3ShowName={"Kovan Pistonlu Motor Yağları"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/sistem-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/kovan-pistonlu-motor-yaglari/prista-marine-d-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine D"}
                            productText={"PRISTA® MARINE D motor yağları Pielstick, MAN B&W, MAN Augsburg, New Sulzer Diesel, Wartsila vs. gibi çoğu orta devirli marin dizel motor üreticilerinin gerekliliklerini karşılamak için dikkatlice dengelenmiş, kaliteli solvent ile ra"}
                            last={false} />
                        <UrunOzet productUrl={"/product/kovan-pistonlu-motor-yaglari/prista-marine-ds-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine DS"}
                            productText={"PRISTA® MARINE DS motor yağları dikkatlice dengelenmiş, kaliteli solvent ile rafine edilmiş, hidroişlenmiş baz ürünler ve çok iyi temizleme & dağıtma özellikleri sergileyen katkı maddesi ile formüle edilmiştir. Formüle edilen bu yağl"}
                            last={true} />
                        <UrunOzet productUrl={"/product/kovan-pistonlu-motor-yaglari/prista-marine-s-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine S"}
                            productText={"PRISTA® MARINE S motor yağları, yüksek kaliteli baz ürünler ve gelişmiş temizleme özellikli uygun katkı maddeleri özenle seçilerek formüle edilmiştir. Bu yağlar, yüksek kükürt ve düşük asfalten reçinesi içerikli ağır artık yakıtlarla"}
                            last={false} />
                        <UrunOzet productUrl={"/product/kovan-pistonlu-motor-yaglari/prista-marine-st-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Marine ST"}
                            productText={"PRISTA® MARINE ST kovan pistonlu motor yağları denizcilik, güç üretimi ve endüstriyel uygulamalarda artık yakıtlarla çalışan orta devirli dizel motorlarda kullanım için tasarlanmıştır. Bu yağlar, yüksek kükürt ve düşük asfalten reçin"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default KovanPistonluMotorYaglari;