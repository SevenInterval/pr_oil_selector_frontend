import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { DaimlerNewImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";


const DaimlerHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                    <ul className="images">
                                    <li id="galley_image_173">
                                    <FancyBox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={DaimlerNewImage}>
<img title="n.jpg" alt="n.jpg" width="360" src={DaimlerNewImage} />
</a>
</FancyBox>
                    </li>
                            </ul>
                    <h3 className="hs-small">1 Eylül 2021 tarihinde Daimler AG Grubu, Mercedes-Benz Group AG ve Daimler Truck AG olmak üzere iki şirkete ayrıldı.</h3>
            <div className="date">16-06-2023</div>
            <p>Mercedes-Benz Group AG, hafif hizmet araçları ve kamyonetler için teknik özellikler ve resmi onaylar üzerinde çalışmaya devam ediyor.</p>
            <p>Daimler Truck AG ise ağır hizmet araçlarının teknik özellikleri ve resmi onayları ile ilgileniyor. Artık yeni bir resmi onay sistemi - FRS (Fluid Release System) - oluşturulmuştur - <Link to="https://bevo.mercedes-benz-trucks.com/" target="_blank">https://bevo.mercedes-benz-trucks.com/</Link></p>
            <p>Yeni DTFR spesifikasyonlarına geçiş ve uygulama süreci 1 Nisan 2023 tarihinde başlamıştır.</p>
            <p>Tüm etiketler ve veri sayfaları 1 Kasım 2024 tarihine kadar DTFR terminolojisi ile güncellenecektir.</p>
            
            

  <Link className="bback-button" to="/news/">Geri</Link>
    </div>
                </div>
            </article>
        </div>
    )
}

export default DaimlerHaber;