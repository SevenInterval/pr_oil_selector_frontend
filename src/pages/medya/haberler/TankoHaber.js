import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { PlamenRuseImage1, PlamenRuseImage2, PlamenRuseImage3 } from "../../../images/news";

const TankoHaber = () => {
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
                                <li id="galley_image_18">
                                    <a data-fancybox="gallery" href={PlamenRuseImage1}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenRuseImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_19">
                                    <a data-fancybox="gallery" href={PlamenRuseImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenRuseImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_20">
                                    <a data-fancybox="gallery" href={PlamenRuseImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlamenRuseImage3} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Plamen Bobokov ve mimar Tanko Serafimov'a (ölümünden sonra) "Ruse'nin saygın vatandaşı" unvanı verildi.</h3>
                        <div className="date">01-03-2016</div>
                        <p>“Prista Oil”in ortağı Plamen Bobokov ile mimar Tanko Serafimov (ölümünden sonra) Ruse'nin saygın vatandaşları unvanını aldı. Karar Danube'de Ruse Belediye Meclisi tarafından alındı.</p>
                        <p>Başkanların Konferansının amaçları belediye danışmanları tarafından alınan aday belirleme kriterlerinden belirtilenlerle aynıydı. Mimar Tanko Serafimov /1943-2013/ Bulgaristan'ın en seçkin mimarlarından biri, bir tasarımcı ve Atelier Serafimov Mimarları ekibinin başkanı, Mimarlık, İnşaat Mühendisliği ve Jeodezi Fakültesinde öğretim üyesi, arka arkaya iki dönem atanmış Bulgar Mimarlar Enstitüsü başkanı, "Yılın Binası" kategorisinde çok sayıda ödül alan ve Mimari alanında Sofya Şehir ödülü bulunan birisiydi. Ülke çapında çok sayıda bina tasarladı - ticaret merkezleri, bürolar, konutlar, oteller, spor merkezleri ve Ruse'deki yeni çok işlevli “BULSTRAD Arena”. Mimar &nbsp;Tanko Serafimov'un en son başarılarından birisi &nbsp;ulusal "2015Yılının Binası" yarışmasında "Spor altyapısı" kategorisindeki “BULSTRAD Arena” adaylığıydı.</p>
                        <p>Plamen Bobokov 31.10.1968 tarihinde Ruse'de doğdu. Ruse'de Metamatik Yüksek Okulu'ndan mezun oldu ve hukuk diplomasına sahiptir. 1992'den beri özel sektörde çalışmaktadır. 1993'te o ve kardeşi Atanas Bobokov “Prista Oil” şirketini kurdu..</p>
                        <p>Plamen Bobokov en cömert sanat patronlarından ve Bulgar geleneği, kültürü ve dilinin en büyük savunucularından birisidir. Yaptığı bağışlar Kardjali "Dormition of the Holy Virgin" manastırında bulunan fakirlere yardım için Hıristiyan merkezi binasını finanse etmek ve Odessa, Ukrayna'daki Bulgar topluluğuna yapılan bağışla dikilen Aziz Cyril ile Methodius kardeşler Anıtı için kullanıldı. Bobokovi kardeşler vakfının diğer bir işi de 2002 yılında başlanan "Muhteşem Kuzeybatı" manevi ve kültürel değerlerini destekleme projesidir. Bobokovi kardeşler vakıf aracılığıyla, Ruse'de Borissova Caddesinde bulunan eski Konservatuarda bir madeni para müzesi kurma niyetleri olduğunu bildirdiler. Plamen Bobokov en cümert patronlardan birisi, All the Saints Kuruluşunun yönetim kurulu üyesi ve Ruse'deki “All the Saints” kilisesinin yeniden yapılması düşüncesi savunucularındandır.</p>
                        <p>Son yıllarda Plamen Bobokov, Ruse Belediyesi ile birlikte Ruse vatandaşları tarafından onlarca yıldır beklenen Spor Merkezinin tamamlanması için çok çaba gösterdi. &nbsp;Bugün “BULSTRAD Arena”, Bulgaristan'da uluslararası, ulusal ve bölgesel kültür ve spor etkinlikleri için kullanılan en modern ve en işlevsel tesislerden birisidir. Arena'nın mimarisi Bulgaristan'daki kültürel ve sportif etkinliklerle ilgili yeni standartlar oluşturacak ve tesisin Avrupa standartlarına ve en son piyasa gerekliliklerine göre faaliyet göstermesini olanaklı kılacaktır. “BULSTRAD Arena”, ulusal "2015 Yılının Binası" yarışmasında "Spor altyapısı" kategorisinde ödül aldı. Sonraki birkaç yıl içinde bu tesisin çevresindeki alanın, şehrin inşaat faaliyetleri ile iş ve turizm alanındaki gelişimini tamamlamak üzere Plamen Bobokov'un yatırımları sayesinde üçüncü bir şehir merkezi olması beklenmektedir.&nbsp;</p>
                        <p>Ruse Belediye Meclisi ölümünden sonra mimar Tanko Serafomiv'a mimari alanındaki büyük başarılarından ve Ruse'daki altyapı çalışmalarına yaptığı katkılardan dolayı &nbsp;"Ruse'nin saygın vatandaşı" unvanını verdi. "Ruse'nin saygın vatandaşı" unvanı ayrıca, Ruse'nın ekonomik ve altyapı çalışmalarına yaptığı katkılardan ve Ruse belediyesine en yüksek bağışı yapanlardan birisi olduğundan dolayı Plamen Bobokov'a da verildi.</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default TankoHaber;