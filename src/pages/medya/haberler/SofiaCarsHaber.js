import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { SofiaCarsImage1, SofiaCarsImage2, SofiaCarsImage3 } from "../../../images/news";

const SofiaCarsHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                <li id="galley_image_15">
                                    <a data-fancybox="gallery" href={SofiaCarsImage1}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaCarsImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_16">
                                    <a data-fancybox="gallery" href={SofiaCarsImage2}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaCarsImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_17">
                                    <a data-fancybox="gallery" href={SofiaCarsImage3}>
                                        <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={SofiaCarsImage3} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">SIN Cars & Sofia Car Motorsport Yarışmasında PRO Sınıfında 2. ve Nihai Sınıflandırmada 3. Sıra</span>
                        <div className="date">07-10-2015</div>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil, 2015 102 GT4 Avrupa Serisi Yarışmasındaki SIN Araçları destekler</strong></p>
                        <p>2015 Yarışının 102 GT4 &nbsp;Avrupa Serisi sezonu, Stéphane Ratel Organizasyonu&nbsp;(SRO) tarafından gerçekleştirilen ve organize edilen bir spor araç şampiyonası olan GT4 &nbsp;Avrupa Serisinin sekizinci sezonudur. Sezon, 5 Nisan'da Paul Armagnac Pistinde başlayacak ve altı haftalık yarıştan sonra 26 Ekim'de Misano World Pistinde tamamlanacaktır</p>
                        <p>Yarışın son bir kaç turundaki çekişmeli mücadeleden sonra SIN R1 GT4, yarışı sınıfında ikinci olarak bitirdi!</p>
                        <p>Stéphane Ratel, SRO Group'un sahibi, tüm takımlara ve özellikle de SIN CARS ve KTM'ye teşekkür ederek "son yarışın, SIN CARS ve KTM gibi küçük şirketlerin yarışmayı ilginç hale getirebileceğini ve "büyük firmalar" için örnek olabileceğini gösterdiğini" ifade etti. Stéphane Ratel resmi olarak gelecek yıl SRO Group'un Avrupa GT4 serisini alacağını, Paul ve Silverstone yarışları gibi çok sayıda ilgi çekici etkinlik düzenleyeceğini belirtti. &nbsp;</p>
                        <p>Daha önce Misano World Circuit olarak adlandırılan ve 2006'dan önce ise Circuito Internazionale Santamonica olarak bilinen Misano World Circuit Marco Simoncelli, Santamonica bölgesindeki Misano Adriatico (Rimini İli) ilçesinin yakınında bulunan bir İtalyan yarış pistidir. İlk olarak 1969 yılında 3.488 kilometre uzunluğunda düşünülen pist, ilk olarak 1972 yılında yarışa ev sahipliği yaptı. 1993'te, pistin uzunluğu 4.064 kilometreye çıkarıldı.</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default SofiaCarsHaber;