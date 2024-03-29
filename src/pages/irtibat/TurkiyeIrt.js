import { Link } from "react-router-dom";
import I_icon from '../../images/instagramImage.png'
import L_icon from '../../images/linkedinImage.png'
import SideBarIrtibat from "../../components/SideBarIrtibat";


const TurkiyeIrt = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
                    <h1>Türkiye</h1>
                </div>
                <div className="page-article">
                    <p>
                        <strong style={{ fontFamily: "sans-serif" }}>Prista Deniz Yağları Tic.Ltd.Şti.</strong><br />
                        Mahmutbey Mah. Taşoğcağı Yolu Cad.<br />
                        No:3, Ağaoğlu My Office, Kat:18,<br />
                        34218 Bağcılar , İstanbul<br />
                        Tel: +90 212 465 20 05<br />
                        Fax: +90 212 465 23 11<br />
                        <Link to="mailto:info@prista-oil.com.tr" style={{ color: "#11a1d6" }}>info@prista-oil.com.tr</Link><br />
                        <Link to="http://www.prista-oil.com.tr/" style={{ color: "#11a1d6" }}>www.prista-oil.com.tr</Link>
                    </p>
                    <p>
                        <Link to="https://www.instagram.com/pristaturkiye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                            <img src={I_icon} alt='instagramTr' />
                        </Link>&nbsp;&nbsp;
                        <Link to="https://www.linkedin.com/company/prista-oil-t%C3%BCrkiye/" target="_blank">
                            <img src={L_icon} alt='linkedinTr' style={{ height: "25px", width: "25px" }} />
                        </Link>
                    </p>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/26" title="turkiyeFrame" frameborder="0"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default TurkiyeIrt;