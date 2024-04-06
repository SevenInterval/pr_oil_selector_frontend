import { Link } from "react-router-dom";
import SidebarKalite from "../../components/SidebarKalite";
import PdfImage from "../../images/SERTIFIKAT AKREDITACIA LAB.21.06.2022.ENGLISH.jpg"
import PdfAKREDITACIA from "../../pdf/SERTIFIKAT AKREDITACIA LAB.21.06.2022.ENGLISH.pdf"
import { Helmet } from "react-helmet-async";

const TeknolojiMerkezi = () => {
    return (
        <>
            <Helmet>
                <title>Teknoloji merkezi</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/teknoloji-merkezi" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SidebarKalite />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Kalite Yönetimi / </span>
                        <h1>Teknoloji merkezi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <Link to={PdfAKREDITACIA} target="_blank">
                                <img alt="akreditacia.21.06.2022" src={PdfImage} title="akredicImage" loading="eager" height={424} width={300}
                                    style={{ borderStyle: "solid", borderWidth: "1px", float: "right", marginLeft: "10px", marginRight: "10px" }} />
                            </Link>
                        </p>
                        <p>Petrol Ürünleri Test Laboratuvarı (PPTL), PRISTA OIL HOLDING EAD bünyesinde ayrı ve bağımsız bir birim olarak faaliyet göstermektedir.</p>
                        <p>1000 m2'lik bir alan üzerine kurulu Petrol Ürünleri Test Laboratuvarı, Ruse'deki yağ harmanlama tesisi içerisinde yer almaktadır. PPTL, farklı standart yöntemlere göre (BDS, BDS ISO, ASTM vb.) ürün testi için en modern test ekipmanına, izleme ve kontrol cihazlarına ve ölçme aygıtlarına sahiptir. Laboratuvar 1996 yılında kurulmuştur. 2003 yılından beri BDS EN ISO/IEC 17025'e göre akreditedir.</p>
                        <p>Şu anda PPTL, çeşitli viskozite dereceli ve performans seviyeli yağların testi ve örnek alımı için akreditasyona sahiptir; yağlama bazlı yağlar, yağlama yağları AN, dişli yağları, türbin yağları, hidrolik yağlar, kompresör yağları, şanzıman yağları, motor yağları, trafo yağları, uçak yağları, metal işleme yağları, fren hidrolikleri, soğutma suları (antifrizler).</p>
                        <p>PRISTA OIL HOLDING EAD Petrol Ürünleri Test Laboratuvarı, BDS EN ISO/IEC 17025:2018’e uygun olarak hizmet vermesinin yanı sıra, beyan edilen akreditasyon kapsamının bir parçası olan tüm faaliyetler için test ve örnek alma konusunda profesyonel ve uzman bir performans sağlar.</p>
                        <p>PPTL personelinin yaptığı çalışmaların en iyi değerlendirmesini, АSTM - Laboratuvarlar Arası Çapraz Kontrol Programları, SGS IIS (Laboratuvarlar Arası Çalışmalar Enstitüsü, Hollanda) tarafından düzenlenen uygunluk ve yeterlilik testi için laboratuvarlar arası karşılaştırma programlarındaki ve Chevron, Bulgar organizatörler vb. tarafından düzenlenen programlardaki mükemmel performansları göstermektedir.</p>
                        <p>Laboratuvar, yeni ürün geliştirme faaliyetlerine katılım sağlamakta ve kullanımdaki yağların izlenmesini gerçekleştirmektedir.</p>
                        <p>PPTL personeli PRISTA OIL HOLDING EAD'yi, ASTM (Amerikan Test ve Materyaller Topluluğu), BDS (Bulgar Standardizasyon Enstitüsü), TC 67, Bulgaristan Metrologlar Birliği ve diğer derneklerin kurumsal üyesi olarak temsil etmektedir.</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default TeknolojiMerkezi;