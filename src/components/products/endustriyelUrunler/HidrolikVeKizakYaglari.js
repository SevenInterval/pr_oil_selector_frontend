import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const HidrolikVeKizakYaglari = () => {
    return (
        <>
            <Helmet>
                <title>HİDROLİK VE KIZAK YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/hidrolik-ve-kizak-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"HİDROLİK VE KIZAK YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"HİDROLİK VE KIZAK YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhv-plus-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHV Plus"}
                            productText={"Prista® MHV Plus, üstün kaliteli baz ürünlerle harmanlanmış hidrolik yağların yeni bir neslidir. Yağlarda kullanılan oldukça rafine baz ürünler, yüksek oksidasyon kararlılığına ve uzun performans ömrüne sahiptir. Pas, oksidasyon ve k"}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhv-7"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHV"}
                            productText={"PRISTA® MHV hidrolik yağları pas, oksidasyon, korozyon önleyiciler ve aşınma önleyici maddeler ile polimetakrilat VII (Viskozite İndeksi İyileştirici) içeren oldukça etkili bir katkı maddesi ile harmanlanmış çok iyi demülsibilite ve "}
                            last={true} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhm-plus-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHM Plus"}
                            productText={"Yakında"}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhm-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHM"}
                            productText={"PRISTA® MHM hidrolik yağlar pas, oksidasyon ve korozyon önleyiciler ile aşınma önleyici maddeler içeren oldukça etkili bir katkı maddesi ile harmanlanmış çok iyi demülsibilite ve hava ayrışma özellikleri olan yüksek rafine maddeni ba"}
                            last={true} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhm-b-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHM-b"}
                            productText={"PRISTA® MHM-b hidrolik yağlar pas, oksidasyon ve korozyon önleyiciler ile aşınma önleyici maddeler içeren oldukça etkili çinko ve diğer metaller ihtiva etmeyen bir katkı maddesi ile harmanlanmış çok iyi demülsibilite ve hava ayrışma "}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhm-d-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHM-D"}
                            productText={"PRISTA® MHM-D hidrolik yağlar, zorlu çalışma koşullarına maruz kalan hareketli parçaların ve mekanizmaların yağlanması için hidrostatik yağlama sistemlerinde ve sirkülasyon sistemlerinde kullanım için geliştirilmiştir. Geliştirilmiş "}
                            last={true} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-bio-mhm-46-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Bio MHM-46"}
                            productText={"PRISTA® Bio-MHM 46, TPM yağ asit esterleri ve pas & korozyon önleyicilerle aşınma önleme maddeleri içeren özel külsüz katkılar esaslı biyodereceli bir hidrolik yağdır."}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhl-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHL"}
                            productText={"PRISTA® MHL hidrolik yağlar oksidasyon, pas ve korozyon önleyiciler içeren çok etkili katkı maddesi ile harmanlanmış oldukça rafine maddeni bazlı ürünlerden formüle edilmiştir. PRISTA® MHL hidrolik yağlar, sürtünen parçaların ve meka"}
                            last={true} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-fd-5-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista FD 5"}
                            productText={"PRISTA® FD 5 dingil yağı, katkılarla harmanlanmış özenle seçilmiş rafine baz yağlarla formüle edilerek yağın oksidasyon kararlığı, pas & korozyon direnci ve aşınma önleme özellikleri iyileştirilmiştir. PRISTA® FD 5 dingil yağı, dü"}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mhe-40-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHE-40"}
                            productText={"PRISTA® MHE-40, ateşe dayanıklı, madeni hidrolik yağdır. Yüksek kaliteli solvent ile rafine edilmiş ve hidroişlenmiş baz ürünler ve yüksek performanslı katkı maddeleri özenle seçilerek formüle edilmiş olup yüksek emülsiyon kararlılığ"}
                            last={true} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-shock-absorber-oil-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista Shock Absorber Oil"}
                            productText={"PRISTA® amortisör yağı oldukça rafine baz yağlardan, çok kararlı Viskozite İndeksi İyileştiriciden ve pas, oksidasyon ve korozyon önleyiciler içeren katkı maddelerinden formüle edilmiştir. PRISTA® amortisör yağı binek, hafif ticar"}
                            last={false} />
                        <UrunOzet productUrl={"/product/hidrolik-ve-kizak-yaglari/prista-mnp-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MNP"}
                            productText={"Prista® MNP kızak yağları, mükemmel yağlama, aşınma önleme ve yapışma özellikleri ve güvenilir pas & oksidasyon ve korozyon koruması sunmak için etkili bir katkı maddesi ile harmanlanmış iyi demülsibilite ve hava ayrışma özelliklerin"}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default HidrolikVeKizakYaglari;