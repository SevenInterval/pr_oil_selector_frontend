import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PristaOilHaberImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";


const PristaOilHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">
                            <li id="galley_image_73">
                                <FancyBox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <a data-fancybox="gallery" href={PristaOilHaberImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PristaOilHaberImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">PRISTA OIL ®,  MACARİSTAN'DAKİ HORVATH RUDOLF INTERTRANSPORT  FİRMASINA  TEXACO YAĞLARINI TEDARİK EDECEK</h3>
                        <div className="date">13-04-2017</div>
                    <p>Texaco markasının yetkili ithalatçısı Prista Oil-Hungary, geçtiğimiz günlerde Macaristan'ın en köklü lojistik şirketinin madeni yağ ihtiyacını  2017 yılı boyunca tedarik etmek üzere anlaştı. Böylece Horváth Rudolf Intertransport filosunun motorları ve diğer parçaları sembol haline gelen Texaco yağlarıyla korunacak.</p>
                    <p>Ülkenin en büyük  nakliye ve sevkiyat şirketi olan Horváth Rudolf Intertransport; Scania, Volvo ve Mercedes Benz kamyonlarından oluşan yaklaşık 300 araçlık bir filoya sahiptir.</p>
                    <p>Prista Oil-Hungary,  firmanın Macaristan'ın Hatvan kasabasındaki  tır parkına  üstün kaliteli Ursa motor ve dişli yağlarını temin edecektir.</p>
                    <p>Texaco yağları, ABD'li en büyük ikinci enerji şirketi ve dünyanın en büyük şirketlerinden biri olan Chevron Corporation tarafından geliştirilip üretilmektedir. Chevron markası,  üstün kaliteli baz yağlardan son derece ileri katkı maddelerine kadar  madeni yağların tüm bileşenlerini dünya çapındaki tedarik zinciri ağlarında kendisi üretmektedir. Avrupa'ya gönderilen nihai ürünler, Chevron'un Belçika'daki tesisinde harmanlanmaktadır. Prista Oil ise ürünleri doğrudan bu üretim tesisinden Macaristan'a ithal etmektedir. </p>
                    <p>Madeni yağ ve gres pazarında Orta ve Doğu Avrupa'da sektörün  en büyük üreticisi ve dağıtımcısı olan Prista Oil Holding, Avrupa ve Orta Asya'da 14 ülkede  faaliyet göstermektedir. Prista Oil,  kendi markası dışında aynı zamanda Texaco markalı Chevron ürünlerinin  de Orta ve Doğu Avrupa bölgesindeki tek yetkili ithalatçısıdır.</p>
                    
                     <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PristaOilHaber;