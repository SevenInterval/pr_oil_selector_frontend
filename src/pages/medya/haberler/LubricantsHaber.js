import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { LubricantsLargeImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const LubricantsHaber = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil, Bulgaristan'da tamamen yenilenmiş ve ...</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/prista-oil-bulgaristan-da-tamamen-yenilenmis-ve-buyutulmus-gres-tesisi-olan-verila-lubricants-i-acti" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                        <a data-fancybox="gallery" href={LubricantsLargeImage}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={LubricantsLargeImage} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Prista Oil, Bulgaristan'da tamamen yenilenmiş ve büyütülmüş gres tesisi olan VERILA LUBRICANTS'ı açtı.</span>
                            <div className="date">24-11-2014</div>
                            <p>Prista Oil, Bulgaristan'da tamamen yenilenmiş ve büyütülmüş gres tesisi olan VERILA LUBRICANTS'ı açtı. VERILA Şirketi, Prista Oil Holding bünyesinde yer alır. Ekonomi Bakanı Bozidar Lukarski ve Yönetim Kurulu Başkanı Plamen Bobokov, yenilenen tesisin önünde kurdele kesti.<br />
                                «Verila Lubricants» tesisi Soya'nın yakınında Verila Sanayi Bölgesinde Bulunuyor. 1.5 milyon Euro'yu bulan yatırım, geçmişi 1946 yılına dayanan Bulgar firmanın uzun yıllara dayanan deneyimini, itibarını ve geleneğini en modern teknolojilerle birleştirmesini sağlayacak ve böylece "Verila Lubricants"ın pazar fırsatlarını geliştirecek ve istihdamı artıracaktır.</p>
                            <p>&nbsp;</p>
                            <p>Bununla ilgili daha fazla resim görmek için aşağıdaki link'i tıklayın:</p>
                            <p><Link to="https://www.facebook.com/media/set/?set=a.10152824043292834.1073741825.142818832833&amp;type=3" style={{ margin: "0px", padding: "0px", outline: "none", color: "#11a1d6" }} target="_blank">https://www.facebook.com/media/set/?set=a.10152824043292834.1073741825.142818832833&amp;type=3</Link></p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default LubricantsHaber;