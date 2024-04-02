import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import Automechanika1Image from "../../../images/automechanika1.jpeg"
import Automechanika2Image from "../../../images/automechanika2.jpeg"
import Automechanika3Image from "../../../images/automechanika3.jpeg"

const AutomechanikaHaber = () => {
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
                                style={{ zIndex: 9999999}}
                            >
                                <li id="galley_image_63">
                                    <a data-fancybox="gallery" href={Automechanika1Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Automechanika1Image} />
                                    </a>
                                </li>
                                <li id="galley_image_64">
                                    <a data-fancybox="gallery" href={Automechanika2Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Automechanika2Image} />
                                    </a>
                                </li>
                                <li id="galley_image_65">
                                    <a data-fancybox="gallery" href={Automechanika3Image}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Automechanika3Image} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Automechanika Frankfurt 2016  Otomotiv Hizmet Sektöründe Dünyanın Önde Gelen Ticaret Fuarı Frankfurt am Main, 13-17 Eylül 2016</h3>
                        <div className="date">05-10-2016</div>
                        <div>
                            <p>
                                <strong style={{ fontFamily: "sans-serif" }}>
                                    <span style={{ fontSize: "24px", color: "#000000" }}>Prista Oil, rekor sayıdaki 4.820 sergiciden biriydi.</span>
                                </strong>
                            </p>
                            <p><strong style={{ fontFamily: "sans-serif" }}>170’i aşkın ülkeden 136.000 ziyaretçi ağırlandı.</strong></p>

                            <div>
                                <p>2016 yılının bağımsız satış sonrası hizmetlere yönelik dünyanın en büyük sergisinde ana konu, “Yarının Hizmetleri ve Mobilite” idi. 76 ülkeden 4.820 sergi sahibiyle bir rekor kırıldı; bunlar arasında sektörden, atölyelerden ve perakende alanından öncü oyuncular yer almaktaydı, bu sergi sahipleri, internet bağlantılı araçlar ön plana çıktıkça sektörün nasıl değiştiğini etkileyici bir sunumla ortaya koydu. Messe Frankfurt GmbH İcra Kurulu Üyesi Detlef Braun şunları söyledi: “Bu etkileyici rakamlarla birlikte Automechanika, otomotiv satış sonrası ürün ve hizmetlerinde dünyanın öncü platformu olarak konumunu güçlendirmeye devam ediyor. Hâlihazırda internete bağlı sayısız etkileyici araca ek olarak veri savaşı, ticaret fuarındaki önemli tartışma konularından biri oldu.” Bunun bir sonucu olarak Messe Frankfurt, 15 Eylül'de başlayan ve yakında Şangay ve Austin, Teksas'a da uğrayacak uluslararası bir yol şovu olan yeni formatı “Bağlı Mobilite”yi tanıttı. Uber Gelişmiş Teknoloji Merkezi'nde Güvenlik Müdürü olan Jeep hacker Chris Valasek de açılış konuşmacılarından biriydi. Valasek sunumunda, internet bağlantılı araçlardaki yazılım güvenliğinin muazzam önemine değindi.</p>
                                <p>Grubun Pazarlama ve Satış Direktörü Valentin Ionescu şunları söyledi: “Prista Oil için Automechanika, bir etkinlikten daha fazlası. Dünyanın dört bir yanından gelen müşterilerle buluşma ve onlara profesyonel bir ortamda en yeni ürünlerimizi tanıtma fırsatı sunan, bunun yanısıra onlarla ve otomotiv satış sonrası ürün ve hizmet alanlarındaki diğer ortaklarıyla ağ kurma şansı tanıyan, sektörün uluslararası buluşma noktası. Automechanika bize, bu önemli sektörlerde olan biten her şey hakkında kısa ama kapsamlı bir özet sunuyor.”&nbsp;</p>
                                <p>Automechanika Frankfurt, 11-15 Eylül 2018 tarihleri arasında 25. kez gerçekleştirilecek ve Messe Essen lisanslı REIFEN, Salon 12'de ilk kez görücüye çıkacak. Her iki ticaret fuarı da 2014 yılından bu yana Almanya dışında birlikte hareket ediyor ve gelecekte Birmingham'dan Şangay’a 14 ülkedeki 15 lokasyonda gerçekleştirilecek. 2017'de Ho Chi Minh şehrinde ilk kez görücüye çıkacaklar. Bu, hem lastik perakendecileri hem de atölyeler için kazançlı bir hamle, çünkü iki sektör de birlikte büyümeye devam ediyor.</p>
                                <p><strong style={{ fontFamily: "sans-serif" }}>Messe Frankfurt Hakkında</strong></p>
                                <p>Messe Frankfurt, yaklaşık 648 milyon euro satış rakamına ulaşan, 2.244 çalışana sahip, dünyanın önde gelen ticaret fuarı organizatörlerinden biridir. Messe Frankfurt Grubu, 175 ülkede müşterilerine hizmet sunan 30 bayi ve 55 uluslararası satış ortağından oluşan küresel bir ağdır. Messe Frankfurt etkinlikleri, dünyada yaklaşık 50 noktada gerçekleştirilmektedir. 2015 yılında Messe Frankfurt, yarıdan fazlası Almanya dışında gerçekleştirilen toplam 133 ticaret fuarı organize etti.</p>
                                <p>Toplam 592.127 metrekarelik bir alandan oluşan Messe Frankfurt sergi alanı, 10 sergi salonuyla hizmet vermektedir. Şirket ayrıca iki kongre merkezine sahiptir. Almanya'nın en popüler mekanlarından biri olan tarihi Festhalle, her türden etkinliğe ev sahipliği yapmaktadır.</p>
                                <p>Messe Frankfurt, yüzde 60 hissesi Frankfurt şehrine ve yüzde 40 hissesi Hesse Eyaleti'ne ait bir kamu şirketidir.</p>
                                <p>Daha fazla bilgi için lütfen web sayfamızı ziyaret edin: <Link to="http://www.messefrankfurt.com/" className="haberLink">www.messefrankfurt.com.</Link></p>
                                <p><em>Kaynak:</em> <em>Basın Bülteni, Dr. Ann-Katrin Klusak, Messe Frankfurt</em></p>
                            </div>
                            <Link className="bback-button" to="/news/">Geri</Link>
                        </div>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default AutomechanikaHaber;