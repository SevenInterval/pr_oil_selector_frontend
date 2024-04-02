import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PieterImageLarge } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const PieterHaber = () => {
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
                                    <a data-fancybox="gallery" href={PieterImageLarge}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PieterImageLarge} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">PIETER CHRISTIAAN VAN ORANJE VE TIM CORONEL, SPA, BELÇİKA'DA SIN R1 GT4'Ü SÜRECEK</h3>
                        <div className="date">07-07-2016</div>
                        <p>Hollanda yarış ekibi pilotları Pieter Christiaan van Oranje ve Tim Coronel, Sofya otomobil motor sporları ekibine katılacak ve Circuit of Spa- Francorchamps, Belçika'da 8-9 Temmuz'da gerçekleştirilecek olan Avrupa GT4 serisinin dördüncü etabında Sin R1 GT4'ün direksiyonu başına geçecek.</p>
                        <p>Hollanda kraliyet ailesinin bir üyesi olan Pieter Christiaan Van Oranje, Zandvoort şampiyonasında Hendrik Still ile birlikte 2016'daki şampiyonada ikinci etapta ekibin bir parçası olduktan sonra Sin R1 GT4 deneyimi kazandı.</p>
                        <p>Motor sporları, Pieter Christiaan’ın bir tutkusu haline geldi. Kariyeri 2005 yılında başladı. GT4 sınıfında iki galibiyete ve çeşitli ikincilik ve üçüncülük derecelerine sahiptir. Pieter Christiaan, 2012 yılında von Tyres GT4 Kupasına, HD-Gerling Dutch GT ve GT4 Kupasına, AM sınıfına; 2012'de HDI-Gerling Dutch GT şampiyonasına katıldı ve 2014 yılında, BMW M3 GT4 ile PRO pilot Simon Knapp'la birlikte yarışı beşinci sırada tamamladı.</p>
                        <p>Takım arkadaşı Tim Coronel ise, 1994 yılında 22 yaşındayken Dutch Citroën AX Kupası ile yarış kariyerine başlayan Hollandalı bir sürücüdür. 2009'dan 2015'e kadar ikiz kardeşi Tom Coronel ile birlikte Dakar Rallisi’nde yarıştı. Son Dakar Rallisi’nde solo sınıfta birinci geldi ve buggy model aracıyla genel sıralamada 35.liğe yükseldi. Ayrıca Alfa Romeo 147 (Hollanda ve Avrupa) ve Porsche GT3 Kupası Mücadelesi Benelüks yarışlarına katıldı.</p>
                        <p>Tim Coronel, asıl hedefi olan Dakar Rallisi’ne odaklandıktan sonra, 2013 yılında Circuit Park Zandvoort'ta final yarışlarında GT4 araç kullandı. 2016 yılında ise, Pieter Christiaan van Oranje ile birlikte BMW M3 GT4'le Monza'daki (İtalya) sezonun ilk etabında Avrupa GT4 serisine dönüş yaptı.</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PieterHaber;