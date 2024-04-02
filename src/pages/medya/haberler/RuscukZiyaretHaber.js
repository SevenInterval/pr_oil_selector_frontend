import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { RuscukHaberImage } from "../../../images/news";
import { RuscukHaberImage2 } from "../../../images/news";

import FancyBox from "../../../components/FancyBox";


const RuscukZiyaretHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">

                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                                style={{ zIndex: 9999999 }}
                            >
                                <li id="galley_image_66">
                                    <a data-fancybox="gallery" href={RuscukHaberImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RuscukHaberImage} />
                                    </a>
                                </li>
                                <li id="galley_image_67">
                                    <a data-fancybox="gallery" href={RuscukHaberImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RuscukHaberImage2} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                       <h3 className="hs-small">INTER CARS EKİBİ RUSÇUK, BULGARİSTAN'DAKİ PRISTA OIL KARIŞTIRMA TESİSİNİ ZİYARET ETTİ</h3>
                        <div className="date">19-10-2016</div>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil Ukrayna tarafından davet edilen Inter Cars şirketinin 15 üst düzey satış müdürü, 27-28 Eylül tarihlerinde Rusçuk şehrinde bulunan Prista Karıştırma Tesisini ziyaret etti</strong></p>
                        <p>Inter Cars Ukrayna 2000'de faaliyete başlamıştır ve bugün Ukrayna pazarında binek otomobil, kamyon ve van araçlara yönelik yedek parçaların en büyük distribütörlerinden biridir. Şirket ayrıca, Orta Doğu Avrupa'daki diğer Inter Cars S.A. Company iştirakleri arasında liderdir.</p>
                        <p>Son 16 yıl boyunca Inter Cars UA, 40.000'den fazla mevcut müşteriyle Ukrayna'da 25 ofislik bir ağ kurdu. Şirket portföyü, 400'ü aşkın üreticinin ürettiği 80.000'den fazla ürünle yaklaşık 1600 farklı markayı içermektedir.</p>
                        <p>Inter Cars portföyü, Avrupa ve Asya otomobillerini ve kamyonlarını tamir eden atölyelere sunulan alet ve ekipmanların yanı sıra binek otomobillere ve ağır iş araçlarına yönelik geniş yedek parça ve madeni yağ seçeneklerini içermektedir.</p>
                        <p>Ziyaretleri esnasında Inter Cars ekibi üyeleri önce tesis turuna katıldı, ardından Prista'nın üst düzey yöneticilerinden biri olan Prista Oil Holding İcra Direktörü Sayın Tsvetomir Anastasov ve Karıştırma Tesisi Direktörü Sayın Emil Dimov ile bir toplantı gerçekleştirdi. Her ikisi de, Prista Oil organizasyonu, Rusçuk karıştırma tesisinin geçmişi ve madeni yağ üretimine dair ilginç veri ve bilgileri paylaştı. Yöneticiler ayrıca Inter Cars ekibinin sorduğu soruları da yanıtladı. Toplantılar, oldukça açık ve dostane bir ortamda gerçekleşti.</p>
                        <p><em>Inter Car Satış Müdürü Konstantin Melnik, konuyla ilgili olarak şunları söyledi: “Müşteriyle ilk temasa geçen kişi olduğunuzda, ortağınız tarafından üretilen otomobil madeni yağlarına dair bilgilerinizi geliştirmek ve bu bilgileri profesyonel bir biçimde müşterilerinizle paylaşmak, başarınız için hayati öneme sahip.”</em></p>
                        <p>Inter Cars ekibi üyeleri ve Prista ekibi, tesis turunun ve toplantıların herkes için çok ilgi çekici ve faydalı olduğunu dile getirdi.<em> &nbsp;</em></p>
                        <p><em>Prista Oil Ukrayna Genel Müdürü Hayduk, “Bu tür etkinlikler organize ederek, ticari ortaklığımızın geliştirilmesinde bir sonraki adımı atıyoruz,” dedi.</em></p>
                      <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default RuscukZiyaretHaber;