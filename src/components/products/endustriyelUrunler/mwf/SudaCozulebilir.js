import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const SudaCozulebilir = () => {
    return (
        <>
            <Helmet>
                <title>Suda çözülebilir</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/suda-cozulebilir" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"MWF"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"MWF"} level3ShowName={"Suda çözülebilir"}
                        level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} level2To={"/catalogue/sade-yaglar"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-synthilin-5-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Synthilin 5"}
                            productText={"Prista® Synthilin 5 poliglikol, sentetik asit ve diğer korozyon önleyici katkılar esaslı tem sentetik bir konsantrasyondur. Bu ürün borik asit ve aminler içerir ancak laktik asit ihtiva etmez."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-synthol-a-hw-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Synthol A-HW"}
                            productText={"Prista® Synthol A-HW, düşük aromatik içerikli baz yağlarla, borik asit, anyonik ve non-iyonik emülsiyonlaştırıcılar ile sarı metal pas & korozyon önleyicileri ve dengeleme maddeleriyle formüle edilmiş su ile karışabilen bir metal işl"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-synthol-a-sw-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Synthol A-SW"}
                            productText={"Prista® Synthol A-SW, düşük aromatik içerikli baz yağlarla, borik asit, anyonik ve non-iyonik emülsiyonlaştırıcılar ile sarı metal pas & korozyon önleyicileri ve dengeleme maddeleriyle formüle edilmiş su ile karışabilen bir metal işl"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-emulsin-extra-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Emulsin Extra"}
                            productText={"Prista® Emulsin Extra, düşük aromatik içerikli baz yağlarla ve borik asit, anyonik ve non-iyonik emülsiyonlaştırıcılar ile sarı metal pas & korozyon önleyicileriyle formüle edilmiş su ile karışabilen bir metal işleme yağıdır. Bu ürün"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-emulsol-ab-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Emulsol AB"}
                            productText={"Prista® Emulsol AB, suyla karıştırıldığında sütsü bir emülsiyon oluşturan oldukça kaliteli madeni yağ bazlı bir metal işleme yağıdır.  Çok iyi yağlama ve emülsiyon kararlılığı ile bakteri oluşumuna karşı direnç sağlayan ve iş aletler"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/suda-cozulebilir/prista-emulsol-b-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Emulsol B"}
                            productText={"Prista® Emulsol B, suyla karııştırıldığında sütsü emülsiyonlar oluşturan bir saf yağ konsantrasyonudur. Çok iyi yağlama ve emülsiyon kararlılığı ile bakteri oluşumuna karşı direnç sağlayan ve iş aletleri ile işlenen parçaları korozyo"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default SudaCozulebilir;