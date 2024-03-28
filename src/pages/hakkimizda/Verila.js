import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import VerilaImage from '../../images/verila.jpg';
import { Link } from "react-router-dom";

const Verila = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarHakkimizda />
            <article>
                <div class="page-header">
                    <span className="titleOfHeader">Hakkımızda / </span>
                    <span className="titleOfHeader">Ortaklarımız / </span>
                    <h1>Verila</h1>
                </div>
                <div className="page-article">
                    <p><br />
                        <img alt="VerilaImage" src={VerilaImage} style={{ height: "48px", lineHeight: "20.8px", width: "200px" }} /><br />
                        &nbsp;
                    </p>
                    <p>Verila Lubricants, Orta ve Doğu Avrupa, Orta Doğu ve Kuzey Afrika'daki 20'den fazla ülkede faaliyet göstermektedir</p>
                    <p>Faaliyetleri:</p>
                    <p>&nbsp; &nbsp;• &nbsp;&nbsp;Üretim ve bilimsel araştırma<br />
                        &nbsp; &nbsp;• &nbsp;&nbsp;Yağ, soğutma suyu, teknik yağ ve diğer bir çok ürün alanlarında tasarlama ve geliştirme<br />
                        &nbsp; &nbsp;• &nbsp;&nbsp;Modern laboratuvar, deneyimli ve çok kalifiye uzmanlar ve araştırmacılar
                    </p>
                    <p>Ürün portföyü</p>
                    <p>&nbsp; &nbsp;• &nbsp;&nbsp;Geniş gres yelpazesi<br />
                        &nbsp;&nbsp;&nbsp;• &nbsp;&nbsp;Soğutma suları, fren sıvıları ve yıkama sıvıları<br />
                        &nbsp;&nbsp;&nbsp;• &nbsp;&nbsp;Köpük önleyiciler<br />
                        &nbsp;&nbsp;&nbsp;• &nbsp;&nbsp;Temizlik maddeleri<br />
                        &nbsp;&nbsp;&nbsp;• &nbsp;&nbsp;Buz çözücüler<br />
                        &nbsp;&nbsp;&nbsp;• &nbsp;&nbsp;Kişiye özel ürünler
                    </p>
                    <p>Daha fazla bilgi için: <Link to="http://www.verila-bg.com/en" target="_blank">http://www.verila-bg.com/en</Link></p>
                </div>
            </article >
        </div >
    )
}

export default Verila;