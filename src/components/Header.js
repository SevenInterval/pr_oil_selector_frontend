import { useState } from "react"
import SearchImage from '../images/search.png';
import MenuMobileImage from '../images/menu-mobile.png'
import PristaLogo from '../images/prista-oil-com.png'
import HeaderBg from '../images/header-bg.png'
import { Link, useNavigate } from "react-router-dom";
import UpImage from "../images/up.png";

const Header = () => {
    const [showSelectLanguage, setShowSelectLanguage] = useState(false);
    const [openTransparentMenu, setOpenTransparentMenu] = useState("close");
    const [openSearchForLtScreen, setOpenSearchForLtScreen] = useState(false);
    const [selectedNavbarId, setSelectedNavbarId] = useState("menu_2");
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const openMenu = (value) => {
        document.body.classList.add("no-scroll");
        setOpenTransparentMenu(value);
    }

    const closeMenu = (value) => {
        document.body.classList.remove("no-scroll");
        setOpenTransparentMenu(value);
    }

    const handleClick = (e, menuId) => {
        setSelectedNavbarId(menuId);
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        navigate("/site/search", { state: { searchItem: searchValue } })
        setSearchValue("");
    }

    return (
        <header style={{ backgroundImage: `url(${HeaderBg})` }}>
            <div className="container">
                <a onClick={e => handleClick(e, "menu_2")} href="/" className="logo" style={{ backgroundImage: `url(${PristaLogo})` }}>www.prista-oil.com</a>
                <div className="languages">
                    <div className="lang-body" onMouseEnter={() => setShowSelectLanguage(true)}
                        onMouseLeave={() => setShowSelectLanguage(false)}>
                        <div className="label">
                            <i>Select Language: </i>
                            <span >Turkey</span>
                        </div>
                        {showSelectLanguage &&
                            <ul>
                                <li>
                                    <a href="https://prista-oil.com/">Global EN</a>
                                </li>
                                <li>
                                    <a href="https://es.prista-oil.com/">Español</a>
                                </li>
                                <li>
                                    <a href="https://bg.prista-oil.com/">Bulgaria</a>
                                </li>
                                <li>
                                    <a href="https://prista-oil.cz/">Czech Republic</a>
                                </li>
                                <li>
                                    <a href="https://prista-oil.hu/">Hungary</a>
                                </li>
                                <li>
                                    <a href="https://prista-oil.ro/">Romania</a>
                                </li>
                                <li>
                                    <a href="https://ru.prista-oil.com/">Russia</a>
                                </li>
                                <li>
                                    <a href="https://prista-oil.rs/">Serbia</a>
                                </li>
                                <li>
                                    <a href="https://prista-oil.com.ua/">Ukrainian</a>
                                </li>
                                <li>
                                    <a href="https://uz.prista-oil.com/">Uzbekistan</a>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <ul>
                            <li><Link to="/faq/motor-yaglari">FAQ</Link></li>
                            <li><Link to="/sitemap">Sitemap</Link></li>
                        </ul>
                        <div className={!openSearchForLtScreen ? "form" : "form active"}>
                            <div className="form-button">
                                <i className={!openSearchForLtScreen ? "fa fa-search" : "fa fa-times"} aria-hidden={true} onClick={() => setOpenSearchForLtScreen(!openSearchForLtScreen)}></i>
                            </div>
                            <div className="form-container">
                                <form name="fw_search" onSubmit={(event) => handleSearch(event)}>
                                    <input type="submit" value="Submit" style={{ backgroundImage: `url(${SearchImage})` }} />
                                    <div id="fw_search">
                                        <div>
                                            <input type="text" id="fw_search_query" name="fw_search_value" value={searchValue} onChange={(event) => handleChange(event)} required="required" placeholder="Search" />
                                        </div>
                                        <input type="hidden" id="fw_search_searchKeyName" name="fw_search[searchKeyName]" value="project"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <nav>
                    <div className={"top-menu-container " + openTransparentMenu} >
                        <ul id="top-menu" className={"sf-menu"} style={{ right: (openTransparentMenu === "open") ? "0px" : "-270px", transition: "all 0.5s ease" }}>
                            <li className="mobile-close-button" >
                                <i className="fa fa-times-circle" onClick={() => closeMenu("false")} aria-hidden={true}></i>
                            </li>
                            <li id="menu_2" onClick={() => setSelectedNavbarId("menu_2")} className={selectedNavbarId === "menu_2" ? "level-0 active root-active" : "level-0"}>
                                <Link to="/">
                                    Giriş Sayfası
                                </Link>
                            </li>
                            <li id="menu_3" data-id="3" onClick={() => setSelectedNavbarId("menu_3")} className={selectedNavbarId === "menu_3" ? "level-0 active root-active" : "level-0"} >
                                <Link to="/catalogue/yuksek-performansli-dpf-twc" >
                                    Ürünler
                                </Link>
                                <ul className="child-list" id="menu-root-3" >
                                    <span className="upImage" style={{ backgroundImage: `url(${UpImage})` }}></span>
                                    <li id="menu_20" data-id="20" className=" level-1 ">
                                        <Link to="/catalogue/yuksek-performansli-dpf-twc"  >
                                            PRISTA
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li id="menu_4" data-id="4" onClick={() => setSelectedNavbarId("menu_4")} className={selectedNavbarId === "menu_4" ? "level-0 active root-active" : "level-0"} >
                                <Link to="/istirakler">
                                    Pazarlar
                                </Link>
                                <ul className="child-list" id="menu-root-4">
                                    <span className="upImage" style={{ backgroundImage: `url(${UpImage})` }}></span>
                                    <li id="menu_11" data-id="11" className=" level-1 ">
                                        <Link to="/istirakler">
                                            İştirakler
                                        </Link>
                                    </li>

                                    <li id="menu_12" data-id="12" className=" level-1 ">
                                        <Link to="/distributorler">
                                            Distribütörler
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu_5" data-id="5" onClick={() => setSelectedNavbarId("menu_5")} className={selectedNavbarId === "menu_5" ? "level-0 active root-active" : "level-0"}>
                                <Link to="/teknoloji-merkezi">
                                    Kalite Yönetimi
                                </Link>
                                <ul className="child-list" id="menu-root-30">
                                    <span className="upImage" style={{ backgroundImage: `url(${UpImage})` }}></span>
                                    <li id="menu_31" data-id="31" className=" level-1 ">
                                        <Link to="/teknoloji-merkezi">
                                            Teknoloji merkezi
                                        </Link>
                                    </li>

                                    <li id="menu_32" data-id="32" className=" level-1 ">
                                        <Link to="/laboratuvar-servisleri">
                                            Laboratuvar servisleri
                                        </Link>
                                    </li>

                                    <li id="menu_33" data-id="33" className=" level-1 ">
                                        <Link to="/prista-sertifikalari">
                                            Prista sertifikaları
                                        </Link>
                                    </li>

                                    <li id="menu_39" data-id="39" className=" level-1 ">
                                        <Link to="/bizimle-temasa-gecin">
                                            Bizimle temasa geçin
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li id="menu_6" data-id="6" onClick={() => setSelectedNavbarId("menu_6")} className={selectedNavbarId === "menu_6" ? "level-0 active root-active" : "level-0"}>
                                <Link to="/news/category/bayilik-hakkinda-1">
                                    Medya
                                </Link>
                                <ul className="child-list" id="menu-root-8">
                                    <span className="upImage" style={{ backgroundImage: `url(${UpImage})` }}></span>
                                    <li id="menu_45" data-id="45" className=" level-1 ">
                                        <Link to="/news/category/bayilik-hakkinda-1">
                                            Bayilik Hakkinda
                                        </Link>
                                    </li>

                                    <li id="menu_13" data-id="13" className=" level-1 ">
                                        <Link to="/news/category/haberler">
                                            Haberler
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li id="menu_7" data-id="7" onClick={() => setSelectedNavbarId("menu_7")} className={selectedNavbarId === "menu_7" ? "level-0 active root-active" : "level-0"}>
                                <Link to="/biz-kimiz">
                                    Hakkımızda
                                </Link>
                                <ul className="child-list" id="menu-root-1">
                                    <span className="upImage" style={{ backgroundImage: `url(${UpImage})` }}></span>
                                    <li id="menu_23" data-id="23" className=" level-1 ">
                                        <Link to="/biz-kimiz">
                                            Biz kimiz
                                        </Link>
                                    </li>

                                    <li id="menu_25" data-id="25" className=" level-1 ">
                                        <Link to="/ortaklarimiz">
                                            Ortaklarımız
                                        </Link>
                                    </li>

                                    <li id="menu_26" data-id="26" className=" level-1 ">
                                        <Link to="/sirketin-sorumlulugu">
                                            Şirketin sorumluluğu
                                        </Link>
                                    </li>

                                    <li id="menu_34" data-id="34" className=" level-1 ">
                                        <Link to="/gizlilik-politikasi">
                                            Gizlilik politikası
                                        </Link>
                                    </li>

                                    <li id="menu_35" data-id="35" className=" level-1 ">
                                        <Link to="/cerez-politikasi">
                                            Çerez politikası
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li id="menu_8" data-id="8" onClick={() => setSelectedNavbarId("menu_8")} className={selectedNavbarId === "menu_8" ? "level-0 active root-active" : "level-0"}>
                                <Link to="/harita">
                                    İrtibat
                                </Link>
                            </li>
                            <li id="menu_9" data-id="9" className="yellow_btn level-0 ">
                                <Link to="/distributorler">
                                    Nereden satın alabiliriz?
                                </Link>
                            </li>
                        </ul>
                        <div className="transparent-box"></div>
                    </div>
                </nav>
                <div className="buttons">
                    <div className="button-menu" onClick={() => openMenu("open")} style={{ backgroundImage: `url(${MenuMobileImage})` }}>.</div>
                </div>
            </div>
        </header>
    )
}

export default Header;