import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    BosImage
} from "../../../images/products"

const Gresler = () => {
    return (
        <>
            <Helmet>
                <title>GRESLER</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/gresler" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"GRESLER"} />
                <article>
                    <UrunlerBaslik level1ShowName={"GRESLER"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-syntech-ep-2-4"}
                            productLogo={BosImage} productName={"PRISTA® Syntech EP 2"}
                            productText={"Çok uzun yeniden yağlama aralıkları, ulaşılması zor yağlama noktaları (örn. dar alanlar veya vantilatör tavanı) avantajlarıyla otomotiv ve endüstriyel uygulamalar için geliştirilmiş yüksek kaliteli sentetik EP uzun ömürlü yağ."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lithium-ep-2-5"}
                            productLogo={BosImage} productName={"PRISTA® Lithium EP 2"}
                            productText={"Otomotiv ve endüstriyel uygulamalarda, yüksek yükler ve 120⁰ C'ye kadar sıcaklıklarda çalışan kaymalı ve rulmanlı yatakların, pimlerin ve burçların genel yağlaması için uygun çok amaçlı aşırı basınç (EP) yağları."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lithium-2-5"}
                            productLogo={BosImage} productName={"PRISTA® Lithium 2"}
                            productText={"Normal yük ve 120°C'ye kadar sıcaklıklar altında çalışan, otomotiv ve endüstriyel uygulamalardaki kaymalı ve rulmanlı yatakların ve parçaların genel yağlanması için tasarlanmış çok amaçlı yağ."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-k-3-4"}
                            productLogo={BosImage} productName={"PRISTA® K-3"}
                            productText={"Güvenilir ve uygun maliyetli NLGI 3 çok amaçlı kalsiyum sabunlu kıvamlaştırıcı yağ. 60°C altı çalışma sıcaklıklarındaki hafif yük koşulları için iyi su direnci sağlar"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-li-complex-ep-2-ptfe-green-4"}
                            productLogo={BosImage} productName={"PRISTA®  Li Complex EP 2 PTFE Green"}
                            productText={"PTFE kuru yağlayıcı ve aşınmaya karşı en iyi korumayı sağlayan son teknoloji ürünü katkı maddeleri içeren ağır hizmet EP yağı."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-cs-complex-ep-2-1-5-7"}
                            productLogo={BosImage} productName={"Prista® CS Complex EP 2 /1.5"}
                            productText={"Prista® CS Complex EP, kalsiyum sülfonat kompleksi kalınlaştırıcı sistem ve yüksek viskoziteli aşırı hidroişlenmiş madeni baz yağ esaslı, yüksek performanslı, ağır görev tipi yağlama gresleridir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-li-complex-ep-2-hdvt-7"}
                            productLogo={BosImage} productName={"Prista® Li Complex EP 2 HDVT*"}
                            productText={"Prista® Li Complex EP 2 HDVT, lityum kompleksi kalınlaştırıcı ve ISO VG320'ye uygun aşırı hidroişlenmiş baz yağ esaslı, ağır görev tipi bir yağlama gresidir. Lityum kompleksi kalınlaştırıcı, ürünü özellikle yüksek sıcaklıklar olmak ü"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-li-complex-ep-2-7"}
                            productLogo={BosImage} productName={"Prista® Li Complex EP 2"}
                            productText={"Prista® Li Complex EP 2 gres oldukça rafine yüksek viskoziteli baz yağ, lityum kompleks sabunlu kalınlaştırıcı ve özel bir katkı maddesi grubu kullanılarak üretilmiştir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lithium-ep-7"}
                            productLogo={BosImage} productName={"Prista® Lithium EP"}
                            productText={"Prista® Lithium EP çok amaçlı sürtünme önleyici gresler, bir katkı maddeleri grubu ve lityum 12-hidroksistearat sabun içeren uygun bir madeni baz yağ ile kalınlaştırılarak imal edilmiştir."}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lithium-ep-0-00-7"}
                            productLogo={BosImage} productName={"Prista® Lithium EP 0/00"}
                            productText={"Prista® Lithium EP 0 ve Prista® Lithium EP 00, madeni baz yağ ve lityum 12-hidroksistearat sabunla kalınlaştırılarak ve uygun katkı maddeleri ilave edilerek imal edilen çok amaçlı, yarı akışkan, sürtünme önleyici greslerdir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-limo-ep-prista-r-limo-ep-2-g-7"}
                            productLogo={BosImage} productName={"Prista® LiMo EP & Prista® LiMo EP 2 G"}
                            productText={"Prista® LiMo EP ve Prista® LiMo EP 2 G çok amaçlı sürtünme önleyici gresler lityum 12-hidroksistearat sabun, uygun bir katkı maddesi ve 0,65 ila 0,75 μm partikül boyutlu %3 oranında yüksek dağıtıcı özelliğe sahip molibden disülfit (M"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lithium-7"}
                            productLogo={BosImage} productName={"Prista® Lithium"}
                            productText={"Prista® Lithium çok amaçlı sürtünme önleyici gresler, lityum 12-hidroksistearat sabun içeren madeni baz yağ ile kalınlaştırılarak ve uygun katkı maddelerinin eklenmesiyle imal edilmiştir."}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lica-7"}
                            productLogo={BosImage} productName={"Prista® LiCa"}
                            productText={"Prista® LiCa çok amaçlı lityum-kalsiyum gresler, çok yüksek su direnci gösterir ve yağlanan parçaları aşınma ve korozyona karşı mükemmel şekilde korur. Bu gresler, yüksek nemli ortamlarda orta düzeyli yükler altında çalışan kaymalı v"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-lica-ep-2-7"}
                            productLogo={BosImage} productName={"Prista® LiCa  EP 2"}
                            productText={"Çok amaçlı, aşırı basınçlı lityum ve kalsiyum kalınlaştırıcı gres Prista® LiCa EP 2, çok yüksek su direncini ve yağlanan parçaları aşınma ve korozyona karşı mükemmel şekilde korunmasını temin eder. Bu gres, çok nemli ortamlarda yükse"}
                            last={true} />
                        <UrunOzet productUrl={"/catalogue/gresler/prista-r-k-2-g-vs-prista-r-k-2-g-7"}
                            productLogo={BosImage} productName={"Prista® K-2-G VS* & Prista® K-2-G"}
                            productText={"Prista® K-2-G VS ve Prista® K-2-G suya karşı dirençli, kalsiyum sabunuyla kalınlaştırılmış yağlama gresleridir. Grafit tozunun eklenmesiyle oldukça yüksek EP özellikleri ve aşınma karşıtı güvenilir koruma sağlanır."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default Gresler;