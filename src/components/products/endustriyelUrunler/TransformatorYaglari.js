import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const TransformatorYaglari = () => {
    return (
        <>
            <Helmet>
                <title>TRANSFORMATÖR YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/transformator-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"TRANSFORMATÖR YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"TRANSFORMATÖR YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/transformator-yaglari/prista-trafo-a-hosio-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Trafo A HOSIO"}
                            productText={"Prista® Trafo A HOSIO yalıtım yağı, fenolik tipi antioksidan eklenmiş, oldukça hidroişlenmiş naftenik yağdan formüle edilmiştir. Yalıtım ve ısı transfer ortamı olarak özel karakteristikli yağ gerektiren transformatörler, devre kesici"}
                            last={false} />
                        <UrunOzet productUrl={"/product/transformator-yaglari/prista-trafo-a-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Trafo A"}
                            productText={"Prista® Trafo A HOSIO yalıtım yağı, fenolik tipi antioksidan eklenmiş, oldukça hidroişlenmiş naftenik yağdan formüle edilmiştir. Yalıtım ve ısı transfer ortamı olarak özel karakteristikli yağ gerektiren transformatörler, devre kesici"}
                            last={true} />
                        <UrunOzet productUrl={"/product/transformator-yaglari/prista-trafo-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Trafo"}
                            productText={"Prista® Trafo, oldukça rafine naftenik tipi ham petrolden edilmiş katkılı bir yalıtım yağıdır. Yalıtım ve ısı transfer ortamı olarak yağ gerektiren transformatörler, devre kesiciler (anahtarlar) vs. gibi yüksek gerilimli elektrik don"}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default TransformatorYaglari;