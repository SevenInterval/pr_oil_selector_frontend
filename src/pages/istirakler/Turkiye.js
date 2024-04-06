import { Link } from "react-router-dom";
import SideBarPazarlar from "../../components/SideBarPazarlar";
import I_icon from '../../images/instagramImage.png'
import L_icon from '../../images/linkedinImage.png'
import { Helmet } from "react-helmet-async";

const Turkiye = () => {
    return (
        <>
            <Helmet>
                <title>Türkiye</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/turkiye-1" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarPazarlar title={"ISTIRAKLER"}/>
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Pazarlar / İştirakler / </span>
                        <h1>Türkiye&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
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
                                <img src={I_icon} alt='instagramTr' title="inIcon" loading='eager' width={25} height={25}/>
                            </Link>&nbsp;&nbsp;
                            <Link to="https://www.linkedin.com/company/prista-oil-t%C3%BCrkiye/" target="_blank">
                                <img src={L_icon} alt='linkedinTr' title="lnIcon" style={{ height: "25px", width: "25px" }} loading='eager' width={25} height={25}/>
                            </Link>
                        </p>
                        <div className="iframe"><iframe src="//www.prista-oil.com/google/map/26" title="turkiyeFrame" frameBorder="0"></iframe></div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default Turkiye;