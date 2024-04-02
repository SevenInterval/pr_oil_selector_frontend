import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import FancyBox from "../../../components/FancyBox";
import { MonzaImage1, MonzaImage2, MonzaImage3, MonzaImage4, MonzaImage5 } from "../../../images/news";

const MonzaHaber = () => {
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
                                <li id="galley_image_29">
                                    <a data-fancybox="gallery" href={MonzaImage1}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonzaImage1} />
                                    </a>
                                </li>
                                <li id="galley_image_30">
                                    <a data-fancybox="gallery" href={MonzaImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonzaImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_31">
                                    <a data-fancybox="gallery" href={MonzaImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonzaImage3} />
                                    </a>
                                </li>
                                <li id="galley_image_32">
                                    <a data-fancybox="gallery" href={MonzaImage4}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonzaImage4} />
                                    </a>
                                </li>
                                <li id="galley_image_33">
                                    <a data-fancybox="gallery" href={MonzaImage5}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonzaImage5} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Monza taraftarları Bulgar takımını “Sofia Car Motorsport” ve aracın yaratıcısı Rosen Daskalov'u en iyi ekip ve aracı da pistteki en hızlı araç olarak anons ettiler</h3>
                        <div className="date">25-04-2016</div>
                        <p><em>Alternatördeki ani arıza, pilotluğunu Andreas Guelden'in yaptığı ikinci yarışın lideri olan Monza-Bulgar aracını birinci turda pistin dışına attı.</em></p>
                        <p>Serbest antrenman ve en iyi sıralama turlarında sonra takım, cezalarla birinci yarışa başladı - birinci yarışta ikincilikle sonuçlanan toplam 65 kg. ağırlık ile padokta 15 saniye. Pitten çıkarken yolu üstündeki beyaz çizgiyi ihlal etmesi sonucunda Sin R1 GT4, 30 saniyelik ceza aldı ve bundan dolayı 2. sırayı aldı. Sofia Car Motorsport, nihai sıralamada 8. sırada yer aldı.</p>
                        <p>Aynı anda iki diğer Sin R1 GT4 aracı Birmingham, Alabama'da Pirelli World Challenge pistinde yarışıyordu. Araçlar iki 1incilik aldı; birisi 4üncü ve diğer ise 5inci olarak sınıfının en hızlı araçları olduklarını kanıtladılar.</p>
                        <p>Bulgar spor tarihinde ilk kez Sofia Car Motorsport'un profesyonel takımı ve ilk Bulgar yarış ve karayolu araç üreticisi Sin Cars, Avrupa GT4 serisindeki en iyi takımlardan birisiyle ortak çalışarak Nuerburgring'deki Mathol Yarışında VLN serisi ile 24 saat yarıştı.</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Monza'dan dafa fazla resim için tıklayın: </strong><Link to="https://www.facebook.com/PristaOil/" style={{ color: "#11a1d6" }}><strong style={{ fontFamily: "sans-serif" }}>https://www.facebook.com/PristaOil/</strong></Link></p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article >
        </div >
    )
}

export default MonzaHaber;