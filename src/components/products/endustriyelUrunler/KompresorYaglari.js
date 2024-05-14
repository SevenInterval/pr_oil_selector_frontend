import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const KompresorYaglari = () => {
    return (
        <>
            <Helmet>
                <title>KOMPRESÖR YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/kompresor-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"KOMPRESÖR YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"KOMPRESÖR YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/kompresor-yaglari/prista-r-compressor-synth-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista® Compressor Synth"}
                            productText={"PRISTA® Compressor Synth yağları, eşsiz sistem performansı ve tam koruma sağlamak için dizayn edilmiş gelişmiş PAO sentetik teknolojisi ve en son nesil katkı maddeleriyle formüle edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/kompresor-yaglari/prista-mvk-2-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista MVK 2"}
                            productText={"PRISTA® MVK-2 kompresör yağları yüksek oksidasyon kararlılığı, iyi yağlama özellikleri, pas&korozyon koruması, 140°C’ye kadar ve bazı durumlarda, kompresörün tipine ve çalışma koşullarına bağlı olarak 220°C’ye kadar dış hava sıcaklık"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/kompresor-yaglari/prista-mvk-1-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MVK 1"}
                            productText={"PRISTA® MVK-1 kompresör yağları düşük ve orta kapasiteli, 1000 kPa’nın altında dış hava basınçlı ve  140°C’ye kadar çıkış hava sıcaklık değerli döner ve piston tipi kompresörlerin yağlanması için tasarlanmıştır."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/kompresor-yaglari/prista-frigus-ha-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista Frigus HA"}
                            productText={"PRISTA® FRIGUS HA yağları, soğutucu gaz olarak amonyak ile çalışan buzdolaplarının ve soğutma cihazlarının yağlanması için önerilmektedir."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default KompresorYaglari;