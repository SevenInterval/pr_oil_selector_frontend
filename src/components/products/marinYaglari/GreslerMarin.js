import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const GreslerMarin = () => {
    return (
        <>
            <Helmet>
                <title>GRESLER</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/gresler-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"GRESLER"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"GRESLER"} level1To={"/catalogue/sistem-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/gresler-1/prista-lithium-ep-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Lithium EP"}
                            productText={"Prista® Lithium EP çok amaçlı sürtünme önleyici gresler, uygun bir madeni baz yağ lityum 12-hidroksistearat sabunla kalınlaştırılarak ve uygun katkı maddeleri ilave edilerek imal edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/product/gresler-1/prista-lithium-lix-ep2-3"}
                            productLogo={basicVarilKucukImage} productName={"Prista Lithium LiX EP2"}
                            productText={"Prista® Lithium LiX EP 2, rafine yüksek viskoziteli  petrol bazlı yağ, sertleştirici olarak kompleks lityum sabun ve özel bir katkı maddesi ile imal edilmiştir. Yüksek yükler (suyun ve tuzların olduğu durumlar) ve sürekli azami yükle"}
                            last={true} />
                        <UrunOzet productUrl={"/product/gresler-1/prista-limo-2"}
                            productLogo={basicVarilKucukImage} productName={"Prista LiMo"}
                            productText={"Prista® LiMo çok amaçlı sürtünme önleyici gresler, uygun bir madeni baz yağ lityum 12-hidroksistearat sabunla kalınlaştırılarak ve uygun bir katkı maddesi ile 0.65 - 0.75 μm partikül boyutlu %3 oranında ayırıcı özelliği oldukça yükse"}
                            last={false} />
                        <UrunOzet productUrl={"/product/gresler-1/prista-k-g-2"}
                            productLogo={basicVarilKucukImage} productName={"Prista K-G"}
                            productText={"Prista® K-G grafit gresleri, madeni yağ bazlı bileşenler kalsiyum sabunu ile uygun şekilde kalınlaştırılarak ve 45 μm partikül boyutundan daha küçük %10 kuru grafit tozu eklenilerek elde edilmiştir."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default GreslerMarin;