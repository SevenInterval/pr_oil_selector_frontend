import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PremiumImageLarge } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const PremiumHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">
                            <li id="galley_image_183">
                                <FancyBox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <a data-fancybox="gallery" href={PremiumImageLarge}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PremiumImageLarge} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Yeni Premium 1L şişe ve etiket tasarımı için Prista Oil yarışmasını Ulusal Sanat Akademisi'nden bir doktora adayı kazandı</h3>
                        <div className="date">13-06-2016</div>
                        <p>Endüstriyel tasarım programında doktora öğrencisi olan Zahari Ganchev, yeni Premium 1L şişe ve etiket için düzenlenen Prista Oil tasarım yarışmasını kazandı. İkincilik ödülünü, ikinci sınıf öğrencileri olan Denitza Ivanova ve Diana Kuncheva birlikte aldı. Konsept tasarımı doktora öğrencisi Maria Vassileva ise yarışmada üçüncü oldu.</p>
                        <p>Yarışma, NAA tarafından öğrencilere ve öğretim görevlilerine 2 ay önce duyurulmuştu. Şirket temsilcisi tarafından yarışmanın detaylarının açıklandığı bir ön görüşme toplantısı düzenlendi.</p>
                        <p>Ödül töreni, İcra Direktörü Mühendis Tsvetomir Anastasov yönetiminde Prista Oil'in Sofya'daki genel merkezinde gerçekleştirildi. Tsvetomir Anastasov, Endüstriyel tasarım departmanı başkanı Doçent Doktor Stanko Voikov'un şahsında akademi yönetimine şükranlarını sundu.</p>
                        <p>Prista Oil Holding İcra Direktörü, kazanan yarışmacılara bu konuda gösterdikleri bağlılıkları ve mükemmel performansları için teşekkür etti. “Bulgar alt-yüklenicilere görev vermede ve çözüm elde etmede daima fırsatların oluşmasını istedik ve bu fırsatların peşine düştük,” diyen Anastasov, sözlerini şöyle sürdürdü: “Yarışma, yağ sektöründeki şirketlerin her 10 yılda bir ürün paketlerini değiştirmek için benimsediği uygulamaya bir yanıt olarak başlatıldı.”</p>
                        <p>Yarışmanın birincisi olan Zahari Ganchev şunları söyledi: “Piyasada şimdiye kadar ortaya çıkan şeylerden büyük oranda farklı olmasına rağmen projemin dikkat çekeceğini düşündüm.” “Endüstriyel Tasarım” bölümünün doktora adayı son 5 yılda birçok etkinliğe katıldı ve bunlardan ikisinde birincilik ödülünü kazandı: Zagorka şişesinin tasarım yarışması ve Nescafe Dolce Gusto için “Eşsiz bir duygu için eşsiz bir tasarım” konulu tasarım yarışması.</p>
                        <p>Zahari Ganchev hakkında daha fazla bilgi için: <Link to="http://nha.bg/bg/stranica/zahari-cvetanov-ganchev-doktorant" style={{ color: "#11a1d6" }}>http://nha.bg/bg/stranica/zahari-cvetanov-ganchev-doktorant</Link></p>
                        <p>&nbsp;</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PremiumHaber;