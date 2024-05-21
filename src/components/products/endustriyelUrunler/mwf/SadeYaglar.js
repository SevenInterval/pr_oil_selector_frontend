import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const SadeYaglar = () => {
    return (
        <>
            <Helmet>
                <title>Sade yağlar</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/sade-yaglar" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"MWF"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"MWF"} level3ShowName={"Sade yağlar"}
                        level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} level2To={"/catalogue/sade-yaglar"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-rezinol-hd-22-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Rezinol HD 22"}
                            productText={"Prista® Rezinol HD 22 kesme yağı mükemmel yağlama, aşınma önleme özellikleri ve güvenilir korozyon koruması sağlamak için çok etkili katkı maddesi ile harmanlanmış oldukça rafine madeni baz yağlardan formüle edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-rezinol-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Rezinol"}
                            productText={"Prista® Rezinol kesme yağları mükemmel yağlama, korozyon & aşınma önleme özellikleri sunan özel olarak seçilmiş katkı maddesi ile harmanlanmış oldukça rafine madeni baz yağlardan formüle edilmiştir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-c-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista C"}
                            productText={"Prista® C, çok iyi yağlama ve soğutma özellikleri olan ve aşınma ile korozyona karşı güvenilir koruma sağlayan çok etkili katkılarla harmanlanmış oldukça rafine madeni baz yağlardan formüle edilen kesme yağlarıdır."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-frezol-ep-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Frezol EP"}
                            productText={"Yakında"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-frezol-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Frezol"}
                            productText={"Prista® Frezol demir dışı metal (bakır, alüminyum vs.) kesme yağları oldukça etkili katkılarla harmanlanmış özel rafine baz yağlardan formüle edilerek mükemmel yağlama ve EP özellikleri sunar ve aşınma ile korozyona karşı güvenilir k"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-mpd-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MPD"}
                            productText={"Prista® MPD metal işleme yağları, mükemmel yağlama özellikleri ve aşınmaya & korozyona karşı iyi koruma sağlayan çok etkili bir katkı maddesi ile harmanlanmış, çok rafine parafinik-naftenik tipi baz yağlardan formüle edilmiştir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-ee-5-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista EE 5"}
                            productText={"Prista® EE 5 elektrik deşarj yağı, çok iyi oksidasyon kararlılığı ile aşınma ve korozyona koruması sağlayan çok etkili katkılarla harmanlanmış, oldukça rafine parafinik/naftenik tipi baz yağlar özenle seçilerek formüle edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/sade-yaglar/prista-honing-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista HONING"}
                            productText={"Prista® Honing, ıslatıcılar, oksidasyon önleyiciler ve özel kimyasal olarak aktif katkılarla harmanlanmış oldukça rafine, düşük viskoziteli hidroişlenmiş parafinik-naftenik tipi baz yağlar özenle seçilerek formüle edilmiş bir madeni "}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default SadeYaglar;