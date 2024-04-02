import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { DaimlerNewImage } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";


const DaimlerHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">
                            <li id="galley_image_173">
                                <FancyBox
                                    options={{
                                        Carousel: {
                                            infinite: false,
                                        },
                                    }}
                                >
                                    <a data-fancybox="gallery" href={DaimlerNewImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={DaimlerNewImage} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">1 Eylül 2021 tarihinde Daimler AG Grubu, Mercedes-Benz Group AG ve Daimler Truck AG olmak üzere iki şirkete ayrıldı.</h3>
                        <div className="date">16-06-2023</div>
                        <p>Mercedes-Benz Group AG, hafif hizmet araçları ve kamyonetler için teknik özellikler ve resmi onaylar üzerinde çalışmaya devam ediyor.</p>
                        <p>Daimler Truck AG ise ağır hizmet araçlarının teknik özellikleri ve resmi onayları ile ilgileniyor. Artık yeni bir resmi onay sistemi - FRS (Fluid Release System) - oluşturulmuştur - <Link to="https://bevo.mercedes-benz-trucks.com/" target="_blank" style={{ color: "#11a1d6" }}>https://bevo.mercedes-benz-trucks.com/</Link></p>
                        <p>Yeni DTFR spesifikasyonlarına geçiş ve uygulama süreci 1 Nisan 2023 tarihinde başlamıştır.</p>
                        <p>Tüm etiketler ve veri sayfaları 1 Kasım 2024 tarihine kadar DTFR terminolojisi ile güncellenecektir.</p>
                        <table border="1" cellpadding="0" cellspacing="0" style={{ width: "642px" }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}><strong style={{ fontFamily: "sans-serif" }}>Old Daimler AG spesifikasyon</strong></p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}><strong style={{ fontFamily: "sans-serif" }}>New Daimler Truck Fluid Release (DTFR) spesifikasyon</strong></p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}><strong style={{ fontFamily: "sans-serif" }}>Yağ türü</strong></p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.2</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15B100</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Monograde service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.3</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15B110</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.5</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15B120</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.31</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15C100</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.51</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15C110</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.52</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15C120</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.61</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15C130</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 228.71</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15C140</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: "170px" }}>
                                        <p style={{ textAlign: "center" }}>MB 227.61</p>
                                    </td>
                                    <td style={{ width: "179px" }}>
                                        <p style={{ textAlign: "center" }}>DTFR 15D100</p>
                                    </td>
                                    <td style={{ width: "293px" }}>
                                        <p style={{ textAlign: "center" }}>Low SAPS multigrade service engine oils</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default DaimlerHaber;