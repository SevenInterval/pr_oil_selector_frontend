import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import PristaOil_Form from "../../../pdf/PristaOil_Form.docx"
import { saveAs } from "file-saver";


const BayilikHakkinda = () => {

    const downloadDocx = () => {
        saveAs(PristaOil_Form, "PristaOil_Form.docx")
    }

    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Bayilik Hakkinda</h1>
                    <div className="news-detail">
                        <ul className="images">
                        </ul>
                        <h3 className="hs-small">YOL ARKADAŞIMIZ OL KAZANCIN YAĞ GİBİ AKSIN!</h3>
                        <div className="date">12-09-2017</div>
                        <p>Uluslararası Enerji devi Chevron’nun Türkiye pazarındaki tek yetkili madeni yağ distribütörü Prista Oil® Holding; Texaco® ürünleri için pazar alanını genişletiyor.</p>
                        <p>&nbsp;</p>
                        <p>Dünya çapında faaliyet gösteren modern ve yenilikçi teknolojilere sahip Texaco madeni yağlarının Türkiye’deki yeni satış noktalarından biri olmak için siz de hemen başvurun.</p>
                        <p>&nbsp;</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Texaco Kimdir?</strong></p>
                        <p>1902’de Teksas’da doğan Texaco markası; 2000’lerin başında dünyaca ünlü diğer enerji devi Chevron ile aynı çatı altında birleşmiştir.</p>
                        <p>Bugün dünyanın dört bir yanında petrolden, madeni yağa, çeşitli kimyasallara ve jeotermal enerjiye kadar geniş bir ürün yelpazesinde hizmet veren marka; ürün kalitesi, yenilikçi üretim teknolojisi ve Amerika’daki pazar liderliği ile tanınmaktadır.</p>
                        <p>&nbsp;</p>
                        <p>Prista Oil Holding, Texaco markası altında belli ürünleri üreten lisanslı üreticisi olmasının yanı sıra, markanın Bulgaristan, Kazakistan, Kırgızistan, Romanya, Slovakya, Sırbistan, Tacikistan, Türkmenistan, Türkiye, Özbekistan, Ukrayna, Macaristan ve Çek Cumhuriyeti'ndeki yetkili distribütörüdür.</p>
                        <p>&nbsp;</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Neden Bayi Olmalıyım?</strong></p>
                        <p>Çünkü Texaco madeni yağları gerek ürün-servis kalitesi, gerekse Otomotiv Üretici Onayları (OEM) ile kendini alanında ispatlamış güven veren bir dünya markasıdır.</p>
                        <p>&nbsp;</p>
                        <p>Kazan-Kazandır ilkesi ile Türkiye’de yeniden yapılanmak için kollarını sıvayan firmamızın hedefi; siz yeni girişimcilerimizle birlikte uzun soluklu olarak yoluna devam etmektir.</p>
                        <p>&nbsp;</p>
                        <p>Eğer sizlerde böylesi bir dünya devinin desteği ve düşük bütçeyle yatırım yapıp bunun kısa sürede geri dönmesini istiyorsanız bizimle temasa geçebilirsiniz.</p>
                        <p>&nbsp;</p>
                        <p><strong style={{ fontFamily: "sans-serif" }}>Bayilik için son Başvuru Tarihi : 30.10.2017</strong></p>
                        <p>Bayilik Başvuru Koşulları için info@prista-oil.com.tr adresinden veya</p>
                        <p>0533 749 44 80 WhatsApp hattından bizlerle irtibata geçebilirsiniz.</p>
                        <p>&nbsp;</p>
                        <p>Prista Oil, Texaco Madeni Yağlarının Türkiye’deki tek yetkili distribütörüdür.</p>
                        <p>&nbsp;</p>
                        <p>
                            <strong style={{ fontFamily: "sans-serif" }}><em>Bayilik başvuru formunu doldurarak, </em></strong>
                            <Link to="mailto:info@prista-oil.com.tr"><strong style={{ fontFamily: "sans-serif", color: "#11a1d6" }}><em>info@prista-oil.com.tr </em></strong></Link>
                            <strong style={{ fontFamily: "sans-serif" }}><em>adresinden&nbsp; veya </em></strong><strong style={{ fontFamily: "sans-serif" }}><em>0533 749 44 80 WhatsApp&nbsp; hattından bizlerle irtibata&nbsp; geçebilirsin</em></strong><strong style={{ fontFamily: "sans-serif" }}><em>iz.&nbsp;</em></strong>
                            <Link to="" onClick={() => downloadDocx()} style={{ color: "#11a1d6" }}><u><strong style={{ fontFamily: "sans-serif" }}><em>PristaOil_Form</em></strong></u></Link></p>
                        <Link className="bback-button" to="/news/category/bayilik-hakkinda-1">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BayilikHakkinda;