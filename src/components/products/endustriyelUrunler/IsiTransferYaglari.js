import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const IsiTransferYaglari = () => {
    return (
        <>
            <Helmet>
                <title>ISI TRANSFER YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/isi-transfer-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"ISI TRANSFER YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"ISI TRANSFER YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/isi-transfer-yaglari/prista-supertherm-22-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Supertherm 22"}
                            productText={"PRISTA® SUPERTERM 22, ürüne çok iyi oksidasyon kararlılığı kazandıran çok etkili uygun bir katkı maddesi ile harmanlanmış API Grup III baz ürünlerler formüle edilmiş bir sentetik ısı transfer yağıdır."}
                            last={false} />
                        <UrunOzet productUrl={"/product/isi-transfer-yaglari/prista-mtl-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista MTL"}
                            productText={"PRISTA® MTL, oldukça rafine baz ürünler ve gelişmiş katkı maddeleriyle formüle edilmiştir. Bu yağ, dolaylı ısıtmalı cebri sirkülasyon sistemlerinde ısı transfer yağı olarak kullanım için tavsiye edilir."}
                            last={true} />
                        <UrunOzet productUrl={"/product/isi-transfer-yaglari/prista-eco-heat-fluid-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Eco Heat Fluid"}
                            productText={"Prista® Eco Heat Fluid, glikol esaslı en son nesil yenilikçi ısı transfer yağıdır.Bu ürün,  güneş enerji ve ısıtma sistemleri için optimum ısı iletkenliği ve donma & korozyon korunumu sunarak insan ve çevre üzerinde çok düşük etki "}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default IsiTransferYaglari;