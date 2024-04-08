import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { CheckImage, Nspo1Image, Nspo2Image, Nspo3Image, Nspo4Image, Nspo5Image, Nspo6Image } from "../../../images/news";
import { Helmet } from "react-helmet-async";

const PristaNewHaber = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil, Yenilikçi Harmanlama Teknolojisi CCBL'yi Sunar</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/prista-oil-yenilikci-harmanlama-teknolojisi-ccbl-yi-sunar" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                        <div className="news-detail">
                            <ul className="images">
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">Prista Oil, Yenilikçi Harmanlama Teknolojisi CCBL'yi Sunar</span>
                            <div className="date">27-11-2015</div>
                            <p style={{ textAlign: "center" }}><span style={{ fontSize: "26px" }}><span style={{ color: "rgb(237, 125, 49)" }}><strong style={{ fontFamily: "sans-serif" }}>Prista Oil, Yenilikçi Harmanlama Teknolojisi CCBL'yi Sunar</strong></span></span></p>
                            <p style={{ textAlign: "center" }}><span style={{ fontSize: "26px" }}><span style={{ color: "rgb(0, 32, 96)" }}><strong style={{ fontFamily: "sans-serif" }}>11inci ICIS Pan Amerika Baz Yağlar ve Yağlayıcılar Konferansında</strong></span></span></p>
                            <p style={{ textAlign: "center" }}><span style={{ fontSize: "20px" }}><span style={{ color: "rgb(0, 32, 96)" }}>3-4 Ekim 2015</span></span></p>
                            <p style={{ textAlign: "center" }}>&nbsp;</p>
                            <p><span style={{ fontSize: "20px" }}><span style={{ color: "rgb(0, 32, 96)" }}><strong style={{ fontFamily: "sans-serif" }}>Kimler Katılmalı</strong></span></span></p>
                            <p><span style={{ fontSize: "16px" }}><strong style={{ fontFamily: "sans-serif" }}>11inci ICIS Pan Amerika Baz Yağlar ve Yağlayıcılar Konferansı şunlar için düzenlenmektedir:</strong></span></p>
                            <p style={{ textAlign: "center" }}>&nbsp;</p>
                            <table align="left" border="0" cellPadding="0" cellSpacing="4" style={{ width: "700px" }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" /></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Baz yağ üreticileri</span></p>
                                        </td>
                                        <td>
                                            <p>
                                                <span style={{ fontSize: "16px" }}>
                                                    <img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} />
                                                </span>
                                            </p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Gemi simsarları</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Katkı madde üreticileri ve tedarikçileri</span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Terminal işletmecileri</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Yağ harmanlayıcıları</span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Lojistik sağlayıcılar</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>OEM'ler</span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Danışmanlar</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Son müşteriler</span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Akademisyenler</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Tüccarlar, distribütörler ve tedarikçiler</span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Hükümet temsilcileri</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="checkImage" src={CheckImage} height={31} width={30} loading="eager" title="checkImage" style={{ lineHeight: "20.8px" }} /></span></p>
                                        </td>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}>Petrol ekonomistleri</span></p>
                                        </td>
                                        <td style={{ width: "40px" }}>
                                            <p>&nbsp;</p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong style={{ fontFamily: "sans-serif" }}>&nbsp;</strong></p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p><span style={{ fontSize: "16px" }}>2014'te 26 ülkeden 210 şirketi temsil eden 330'dan fazla delege 10uncu ICIS Pan Amerika Baz Yağlar ve Yağlayıcılar konferansına katıldı.</span></p>
                            <p><br />&nbsp;</p>
                            <p><span style={{ fontSize: "20px" }}><span style={{ color: "rgb(0, 32, 96)" }}><strong style={{ fontFamily: "sans-serif" }}>11inci ICIS Pan Amerika Baz Yağlar ve Yağlayıcılar Konferansından neler bekleyebilirsiniz?</strong></span></span></p>
                            <table border="0" cellPadding="0" cellSpacing="4" style={{ width: "700px" }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: "170px" }}>
                                            <p><img alt="nspo1Image" src={Nspo1Image} height={238} width={150} loading="eager" title="nspo1Image" /></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}><span style={{ color: "#002060" }}><strong style={{ fontFamily: "sans-serif" }}>Günlük işleriniz için dışarı çıkın ve gelecek yıl ve sonrası için strateji oluşturun. </strong></span>Grup üyelerinizle birlikte önde gelen endüstri uzmanları tarafından verilen ilgili endüstri seminerlerinde ve konferanslarda 2.5 gün geçirin ve eşsiz ağ kurma fırsatlarından yararlanın.</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="nspo2Image" height={237} width={150} loading="eager" title="nspo1Image" src={Nspo2Image} /></span></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}>Son 10 yılda verilen konferanslar ölçek ve kalite bakımından sürekli olarak büyümektedir.<span style={{ color: "#002060" }}><strong style={{ fontFamily: "sans-serif" }}> Her yıl daha fazla yüksek profilli oyuncu, önerilen olağanüstü öğrenme ve ağ fırsatlarından yararlanmak için bu etkinliklere akın etmektedir.</strong></span></span></p>

                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="nspo3Image" src={Nspo3Image} height={237} width={150} loading="eager" title="nspo3Image" /></span></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}><span style={{ color: "#002060" }}><strong style={{ fontFamily: "sans-serif" }}>2014 yılındaki konferans ABD, Kanada, Brezilya, Arjantin, Şili, Venezuela, Uruguay, Meksika, Kolombiya, Ekvator ve Porto Riko dahil 26 ülkeden ve Asya, Avrupa ve Afrika kıtalarından 330 delege ile tüm zamanların katılımcı rekorunu kırdı.</strong></span></span></p>

                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="nspo4Image" src={Nspo4Image} height={237} width={150} loading="eager" title="nspo4Image" /></span></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}>Değer zincirinden etkileyici oyuncularla 5 saati aşkın yerleşik ağ fırsatlarından yararlanın. Zaman kaybetmeden diğer delegelerle irtibata geçmeye ve toplantılarda yerinizi ayırmaya başlamak için bugün kaydınızı yapın.</span></p>

                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="nspo5Image" src={Nspo5Image} height={237} width={150} loading="eager" title="nspo5Image" /></span></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}><span style={{ color: "#002060" }}><strong style={{ fontFamily: "sans-serif" }}>Piyasanın en büyük ve en etkili şirketlerinden pazar ön görülerinden haberdar olun. </strong></span>2014 konferansı gündemini indirmek için buraya tıklayın.</span></p>

                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><span style={{ fontSize: "16px" }}><img alt="nspo6Image" src={Nspo6Image} height={237} width={150} loading="eager" title="nspo6Image" /></span></p>
                                        </td>
                                        <td>
                                            <p>&nbsp;</p>

                                            <p><span style={{ fontSize: "16px" }}><span style={{ color: "#002060" }}><strong style={{ fontFamily: "sans-serif" }}>Yarım günlük bir konferans ön oturumundan yararlanın. </strong></span>2015 seminer konusu yakında bildirilecektir.</span></p>

                                            <p>&nbsp;</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p><strong style={{ fontFamily: "sans-serif" }}>&nbsp;</strong></p>
                            <p style={{ textAlign: "center" }}><strong style={{ fontFamily: "sans-serif" }}>Daha fazla bilgi için aşağıdaki link'i tıklayın:&nbsp;</strong><br />
                                <strong style={{ fontFamily: "sans-serif", color: "#11a1d6" }}><Link to="http://www.icisconference.com/panambaseoils" target="_blank">http://www.icisconference.com/panambaseoils</Link></strong></p>
                            <p>&nbsp;</p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default PristaNewHaber;