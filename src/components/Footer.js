import Footer_bg from '../images/footer-bg-repeat-x.png'
import F_icon from '../images/F_icon.svg.png'
import Y_icon from '../images/youtubeImage.png'
import I_icon from '../images/instagramImage.png'
import L_icon from '../images/linkedinImage.png'
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer>
            <div className="top" style={{ backgroundImage: `url(${Footer_bg})` }}>
                <div className="container">
                    <h4 className="global-h">İrtibat</h4>
                    <div className="row">
                        <div className="span">
                            <h4>Bulgaristan</h4>
                            <div className="body">
                                <p>Prista Oil Holding HQ
                                    <br></br>
                                    1407 Sofia
                                    <br></br>
                                    20 Zlaten Rog St.
                                    <br></br>
                                    tel: + 359 2 9620110
                                    <br></br>
                                    fax: +359 2 8689476
                                    <br></br>
                                    <Link to="mailto:office@prista-oil.bg" style={{ color: "#979797" }} >office@prista-oil.bg</Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.com/" style={{ color: "#979797" }}>www.prista-oil.com</Link>
                                    <br></br>
                                </p>
                                <p>
                                    Prista Oil Blending Plant &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                    <br></br>
                                    7012 Ruse
                                    <br></br>
                                    46 Treti Mart Blvd.
                                </p>
                                <p>
                                    <Link to="https://www.facebook.com/PristaOil/" target="_blank">
                                        <img src={F_icon} alt='facebook' />
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Link to="https://www.youtube.com/channel/UCdijTVNCAy9gYh7--64NRNQ/featured" target="_blank">
                                        <img src={Y_icon} alt='youtube' />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="span">
                            <h4>Romanya</h4>
                            <div className="body">
                                <p>Prista Oil Romania S.A.
                                    <br></br>
                                    14459 Bucharest
                                    <br></br>
                                    169 Calea Floreasca
                                    <br></br>
                                    tel: +40 021 4115517, + 40 0372734701
                                    <br></br>
                                    fax: + 40 021 4115515/16/18
                                    <br></br>
                                    <Link to="mailto:office@prista-oil.ro" style={{ color: "#979797" }}> office@prista-oil.ro</Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.ro/" style={{ color: "#979797" }}> www.prista-oil.ro</Link>
                                    <br></br>
                                </p>
                                <p>
                                    <Link to="https://www.facebook.com/PristaOilRomania/" target="_blank" >
                                        <img src={F_icon} alt='facebook' />
                                    </Link>
                                </p>
                            </div>
                            <h4>Rusya</h4>
                            <div >
                                <p>
                                    LLC «Inventum»
                                    <br></br>
                                    Prospect Mira 101, building 1,
                                    <br></br>
                                    E / POM / K / OF 4 / l /14/61.
                                    <br></br>
                                    Moscow 129085
                                    <br></br>
                                    Russia
                                    <br></br>
                                </p>
                                <Link to="mailto:info@pristagroup.com" target="_blank" style={{ color: "#979797" }}>info@pristagroup.com
                                </Link>
                            </div>

                        </div>
                        <div className="span">
                            <h4>Macaristan</h4>
                            <div className="body">
                                <p>
                                    Prista Oil-Hungary Kft.
                                    <br></br>
                                    Gorgey utca 4.
                                    <br></br>
                                    H-1224 Budapest
                                    <br></br>
                                    tel: +3620 328 7486
                                    <br></br>
                                    <Link to="mailto:vevo.szolgalat@prista-oil.com" target="_blank" style={{ color: "#979797" }} >vevo.szolgalat@prista-oil.com
                                    </Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.hu/" target="_blank" style={{ color: "#979797" }}>www.prista-oil.hu
                                    </Link>
                                </p>
                                <p>
                                    <Link to="https://www.facebook.com/Texacokenoanyagok/" target="_blank" >
                                        <img src={F_icon} alt='facebook' />
                                    </Link>
                                </p>
                            </div>
                            <h4>Ukrayna</h4>
                            <div className="body">
                                <p>
                                    Prista Oil LLC
                                    <br></br>
                                    04070 Kyiv
                                    <br></br>
                                    10A Naberezhno-Khreschatytska St.
                                    <br></br>
                                    tel: +380 44 5940892
                                    <br></br>
                                    fax: + 380 44 5940893
                                    <br></br>
                                    <Link to="mailto:info@prista-oil.com.ua" target="_blank" style={{ color: "#979797" }}>info@prista-oil.com.ua
                                    </Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.com/" target="_blank" style={{ color: "#979797" }}>www.prista-oil.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="span">
                            <h4>Çek Cumhuriyeti</h4>
                            <div className="body">
                                <p>
                                    Prista Oil Czech s.r.o.
                                    <br></br>
                                    19000 Prague
                                    <br></br>
                                    885/2a Špitálská St.
                                    <br></br>
                                    tel: +420 266 799 150
                                    <br></br>
                                    <Link to="mailto:objednavky@prista-oil.cz" target="_blank" style={{ color: "#979797" }} >objednavky@prista-oil.cz
                                    </Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.cz/" target="_blank" style={{ color: "#979797" }} >www.prista-oil.cz
                                    </Link>
                                </p>
                                <p>
                                    <Link to="https://www.facebook.com/TexacoCZSK/" target="_blank" >
                                        <img src={F_icon} alt='facebook' />
                                    </Link>
                                </p>
                            </div>
                            <h4>Türkiye</h4>
                            <div clas="body">
                                <p>
                                    Prista Deniz Yağları Tic.Ltd.Şti.
                                    <br></br>
                                    Mahmutbey Mah. Taşoğcağı Yolu Cad.
                                    <br></br>
                                    No:3, Ağaoğlu My Office, Kat:18,
                                    <br></br>
                                    34218 Bağcılar , İstanbul
                                    <br></br>
                                    Tel: +90 212 465 20 05
                                    <br></br>
                                    Fax: +90 212 465 23 11
                                    <br></br>
                                    <Link to="mailto:info@prista-oil.com.tr" target="_blank" style={{ color: "#979797" }} >info@prista-oil.com.tr
                                    </Link>
                                </p>
                                <p>
                                    <Link to="https://www.instagram.com/pristaturkiye?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                                        <img src={I_icon} alt='instagram' />
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Link to="https://www.linkedin.com/company/prista-oil-t%C3%BCrkiye/" target="_blank">
                                        <img src={L_icon} alt='linkedinTr' style={{ height: "25px", width: "25px" }} />
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="span">
                            <h4>Sırbistan</h4>
                            <div className="body">
                                <p>
                                    Prista Oil AD Beograd
                                    <br></br>
                                    11070 Belgrade
                                    <br></br>
                                    65 Zorana Djindjica Blvd.
                                    <br></br>
                                    tel: +381 11 4075571
                                    <br></br>
                                    fax: +381 11 2606027
                                    <br></br>
                                    <Link to="mailto:office@prista-oil.rs" target="_blank" style={{ color: "#979797" }} >office@prista-oil.rs
                                    </Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.rs/" target="_blank" style={{ color: "#979797" }} >www.prista-oil.rs
                                    </Link>
                                </p>
                                <p>
                                    <Link to="https://www.facebook.com/PristaOilSerbia/" target="_blank" >
                                        <img src={F_icon} alt='facebook' />
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Link to="https://www.youtube.com/channel/UCFPY65-4ZLMlx-juJf9jPqg" target="_blank">
                                        <img src={Y_icon} alt='youtube' />
                                    </Link>
                                    &nbsp;&nbsp;
                                    <Link to="https://www.instagram.com/pristaoil_serbia/" target="_blank">
                                        <img src={I_icon} alt='instagram' />
                                    </Link>
                                </p>
                            </div>
                            <h4>Özbekistan</h4>
                            <div className="body">
                                <p>
                                    "Uz-Prista" JV LLC
                                    <br></br>
                                    100017 Tashkent
                                    <br></br>
                                    93-A Sharaf Rashidov ave.
                                    <br></br>
                                    tel: + 99 871 1206776
                                    <br></br>
                                    fax: +99 871 1206688
                                    <br></br>
                                    <Link to="mailto:info@prista-oil.uz" target="_blank" style={{ color: "#979797" }} >info@prista-oil.uz
                                    </Link>
                                    <br></br>
                                    <Link to="http://www.prista-oil.uz/" target="_blank" style={{ color: "#979797" }} >www.prista-oil.uz
                                    </Link>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <Link to="http://www.zashev.com" target="_blank">Web Design &amp; SEO by Zashev Design</Link>
                    <div>©2024 Prista Oil All rights reserved!</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;