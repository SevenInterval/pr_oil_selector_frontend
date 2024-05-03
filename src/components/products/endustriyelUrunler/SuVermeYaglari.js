import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const SuVermeYaglari = () => {
    return (
        <>
            <Helmet>
                <title>SU VERME YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/su-verme-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"SU VERME YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"SU VERME YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/su-verme-yaglari/prista-mz-e-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MZ-E"}
                            productText={"PRISTA® MZ 22 E su verme yağı, metallerin soğuk suverme işlemi sıasında bir soğutma ortamı olarak tasarlanmıştır. İyi dengelenmiş katkı maddeleri perlit aralıklarında yüksek soğutma oranları ve martenzit aralıklarında ise düşük soğut"}
                            last={false} />
                        <UrunOzet productUrl={"/product/su-verme-yaglari/prista-mz-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MZ"}
                            productText={"PRISTA® MZ yağları çeşitli tipte ve içerikte çeliğin soğuk su verme işlemi için tasarlanmıştır.Bu ürünler özellikle yüksek ve düşük karbonlu çeliklerin toplu ve yüzey su verme işlemi için uygundur."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default SuVermeYaglari;