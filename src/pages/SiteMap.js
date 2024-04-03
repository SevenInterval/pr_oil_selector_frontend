
const SiteMap = () => {
    return (
        <div className="container">
            <article>
                <h1 className="hs">Sitemap</h1>
                <ul className="sitemap-list-tree">
                    <li id="menu_2" data-id="2" className=" level-0 ">
                        <a href="/">
                            Giriş Sayfası
                        </a>
                    </li>

                    <li id="menu_3" data-id="3" className=" level-0 ">
                        <a href="/catalogue/yuksek-performansli-dpf-twc">
                            Ürünler
                        </a>
                        <ul className="child-list" id="menu-root-3">
                            <li id="menu_20" data-id="20" className=" level-1 ">
                                <a href="/catalogue/yuksek-performansli-dpf-twc">
                                    PRISTA
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li id="menu_4" data-id="4" className=" level-0 ">
                        <a href="/istirakler">
                            Pazarlar
                        </a>
                        <ul className="child-list" id="menu-root-4">
                            <li id="menu_11" data-id="11" className=" level-1 ">
                                <a href="/istirakler">
                                    İştirakler
                                </a>
                            </li>

                            <li id="menu_12" data-id="12" className=" level-1 ">
                                <a href="/distributorler">
                                    Distribütörler
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li id="menu_30" data-id="30" className=" level-0 ">
                        <a href="/teknoloji-merkezi">
                            Kalite Yönetimi
                        </a>
                        <ul className="child-list" id="menu-root-30">
                            <li id="menu_31" data-id="31" className=" level-1 ">
                                <a href="/teknoloji-merkezi">
                                    Teknoloji merkezi
                                </a>
                            </li>

                            <li id="menu_32" data-id="32" className=" level-1 ">
                                <a href="/laboratuvar-servisleri">
                                    Laboratuvar servisleri
                                </a>
                            </li>

                            <li id="menu_33" data-id="33" className=" level-1 ">
                                <a href="/prista-sertifikalari">
                                    Prista sertifikaları
                                </a>
                            </li>

                            <li id="menu_39" data-id="39" className=" level-1 ">
                                <a href="/bizimle-temasa-gecin">
                                    Bizimle temasa geçin
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li id="menu_8" data-id="8" className=" level-0 ">
                        <a href="/news/category/bayilik-hakkinda-1">
                            Medya
                        </a>
                        <ul className="child-list" id="menu-root-8">
                            <li id="menu_45" data-id="45" className=" level-1 ">
                                <a href="/news/category/bayilik-hakkinda-1">
                                    Bayilik Hakkinda
                                </a>
                            </li>

                            <li id="menu_13" data-id="13" className=" level-1 ">
                                <a href="/news/category/haberler">
                                    Haberler
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li id="menu_1" data-id="1" className=" level-0 ">
                        <a href="/biz-kimiz">
                            Hakkımızda
                        </a>
                        <ul className="child-list" id="menu-root-1">
                            <li id="menu_23" data-id="23" className=" level-1 ">
                                <a href="/biz-kimiz">
                                    Biz kimiz
                                </a>
                            </li>

                            <li id="menu_25" data-id="25" className=" level-1 ">
                                <a href="/ortaklarimiz">
                                    Ortaklarımız
                                </a>
                            </li>

                            <li id="menu_26" data-id="26" className=" level-1 ">
                                <a href="/sirketin-sorumlulugu">
                                    Şirketin sorumluluğu
                                </a>
                            </li>

                            <li id="menu_34" data-id="34" className=" level-1 ">
                                <a href="/gizlilik-politikasi">
                                    Gizlilik politikası
                                </a>
                            </li>

                            <li id="menu_35" data-id="35" className=" level-1 ">
                                <a href="/cerez-politikasi">
                                    Çerez politikası
                                </a>
                            </li>

                        </ul>
                    </li>

                    <li id="menu_10" data-id="10" className=" level-0 ">
                        <a href="/harita">
                            İrtibat
                        </a>
                    </li>

                    <li id="menu_43" data-id="43" className="yellow_btn level-0 ">
                        <a href="/distributorler">
                            Nereden satın alabiliriz?
                        </a>
                    </li>

                </ul>
            </article>
        </div>
    )
}

export default SiteMap;