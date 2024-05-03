import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const DisliYaglari = () => {
    return (
        <>
            <Helmet>
                <title>ENDÜSTRİYEL DİŞLİ YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/endustriyel-disli-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"ENDÜSTRİYEL DİŞLİ YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"ENDÜSTRİYEL DİŞLİ YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/endustriyel-disli-yaglari/prista-rolon-f-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Rolon F"}
                            productText={"PRISTA® ROLON F yağları, yüksek EP koruması ve termal kararlılığa ilave olarak yüksek seviyeli mikro oyulma direnci sağlayan külsüz kükürt-fosfor tipi katkı maddesi ile harmanlanmış çok kaliteli solventle rafine edilmiş ve hidroişlen"}
                            last={false} />
                        <UrunOzet productUrl={"/product/endustriyel-disli-yaglari/prista-rolon-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista Rolon"}
                            productText={"PRISTA® ROLON endüstriyel dişli yağları normal, orta ve yüksek kararlı yağ sıcaklıklarında çalışan ağır yüklü endüstriyel dişli tahrik ünitelerinin yağlanması için geliştirilmiştir."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default DisliYaglari;