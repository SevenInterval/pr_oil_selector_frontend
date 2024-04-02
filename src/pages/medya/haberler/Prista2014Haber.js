import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { Prista2014LargeImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const Prista2014Haber = () => {
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
                                    <a data-fancybox="gallery" href={Prista2014LargeImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={Prista2014LargeImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Prista Oil, 2014 Çalışma Yılı Bölgesel Güvenlik ve Sağlık Yarışmasında birinci olmuştur</h3>
                        <div className="date">10-06-2015</div>
                        <p>Bölgesel Yönetim binası salonlarının birisinde kısa bir tören yapılarak 2014 Çalışma Yılı Bölgesel Güvenlik ve Sağlık Yarışmasında ilk üç sırayı alan şirketlere ödülleri verildi. Bu etkinlik, kazananlara ödüllerini veren vali yardımcısı Stanimir Stanchev başkanlığında çalışma şartları ile ilgili düzenli olarak gerçekleştirilen Bölgesel Konsey toplantısının bir parçasıydı.</p>
                        <p>Üçüncülüğü (20 puanla) Witte Automotive Company aldı ve sertifikası İnsan Kaynakları Müdürü Svetlana Zhekova tarafından alındı. İkincilik (24 puanla) BTB Bulgaria firmasına gitti ve başarı belgesi Proje Müdürü, Soyinka'ya takdim edildi. Prista Oil Holding 29 puanla birinciliği kazandı ve Valilik plaketi, Fabrika Müdürü Detelina Krasteva tarafından alındı.</p>
                        <p>Stanimir Stanchev tüm firmaları tebrik etti ve Ruse Bölgesindeki şirketlerin böyle güzel sonuçlar almasından dolayı mutlu olduğunu belirtti. Tüm firmalara aynı istekle çalışmaya devam etmelerini ve firmaların en yüksek hedeflerine ulaşmaları için gerekli potansiyele sahip olduklarına inandığını ifade etti.</p>
                        <p>Kaynak: topnovini.bg</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default Prista2014Haber;