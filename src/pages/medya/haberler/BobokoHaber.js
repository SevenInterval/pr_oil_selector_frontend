import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { BobokoImageLarge } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const BobokoHaber = () => {
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
                                    <a data-fancybox="gallery" href={BobokoImageLarge}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={BobokoImageLarge} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Plamen Bobokov, “Rusçuk Altın Nişan " ödülü ve “Rusçuk'un Saygıdeğer Vatandaşı” ünvanıyla ödüllendirildi</h3>
                        <div className="date">06-05-2016</div>
                        <p>6 Mayıs’ta gerçekleşen Rusçuk şehri festivalinin arifesinde, büyük sanayici ve dünyaca tanınmış sanat hamisi, Prista Oil'in sahibi Plamen Bobokov, kendi vatandaşlarından hak ettiği saygıyı görerek iki ödül ile onurlandırıldı. “Rusçuk’un Saygıdeğer Vatandaşı" ünvanı kendisine, Dohodno Zdanie'de önemli bir konserde, Tuna Nehri kıyısındaki şehrin Belediye Konseyi başkanı CM Prof. Dr. Bilim Tekn. Müh. Hristo Beloev tarafından verildi. Günün daha erken saatlerinde Rusçuk Belediye binasında resmi bir tören düzenlendi ve belediye başkanı Plamen Stoilov tarafından kendisine “Rusçuk Altın Nişan” ödülü verildi.</p>
                        <p>Bu yüksek dereceler, Plamen Bobokov'a cömert bağış çalışmalarının yanı sıra Rusçuk'un ekonomik, kültürel ve altyapı gelişimine yaptığı tartışmasız katkıları için de verildi.</p>
                        <p>Kardeşi Atanas Bobokov'la birlikte sahip olup yönettiği ciddi ve sürdürülebilir uluslararası ticari faaliyetlerle Plamen Bobokov, kardeşiyle birlikte ya da tek başına, aralarında Odessa'da Bulgar topluluğuna bağışlanan kutsal kardeşler Aziz Cyril ve Methodius'un heykelinin ve Kardjali “Hz. Meryem'in Ölümü” Manastırı'nın inşası ve finansmanı, Bobokov kardeşlerin vakfının ruhani ve kültürel değerleri destekleyen projesi “The Magnificent Northwest”, Rusçuk'taki “Tüm Azizler” kilisesinin rekonstrüksiyonu, bu yıl 25. yılını kutlayacak olan uluslararası çağdaş sanat festivali “Süreç – Uzay” ve diğer birçoğunun da bulunduğu birtakım yüce gönüllü girişimin arkasındaki kişidir. Bobokov kardeşler ayrıca, Rusçuk şehrini canlandırmaya ve şehri Tuna bölgesinde kültür, sanat, kamu, kongre ve ticaret etkinlikleri için hak edilen bir ilgi merkezine dönüştürmeye yönelik ana projenin bir parçası olarak, Rusçuk vatandaşlarının nesiller boyunca rüyası olan, Güney Doğu Avrupa'nın ilk özel çok fonksiyonlu salonu “Bulstrad Arenası”nın inşasını gerçekleştirdi.</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BobokoHaber;