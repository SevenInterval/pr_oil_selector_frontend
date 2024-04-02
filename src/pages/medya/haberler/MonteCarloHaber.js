import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { MonteCarloHaber1 } from "../../../images/news";
import { MonteCarloHaber2 } from "../../../images/news";
import { MonteCarloHaber3 } from "../../../images/news";
import { MonteCarloHaber4 } from "../../../images/news";
import { MonteCarloHaber5 } from "../../../images/news";
import { MonteCarloHaber6 } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";


const MonteCarloHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">

                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                                style={{ zIndex: 9999999 }}
                            >
                                <li id="galley_image_74">
                                    <a data-fancybox="gallery" href={MonteCarloHaber1}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber1} />
                                    </a>
                                </li>
                                <li id="galley_image_75">
                                    <a data-fancybox="gallery" href={MonteCarloHaber2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber2} />
                                    </a>
                                </li>
                                <li id="galley_image_76">
                                    <a data-fancybox="gallery" href={MonteCarloHaber3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber3} />
                                    </a>
                                </li>
                                <li id="galley_image_77">
                                    <a data-fancybox="gallery" href={MonteCarloHaber4}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber4} />
                                    </a>
                                </li>
                                <li id="galley_image_78">
                                    <a data-fancybox="gallery" href={MonteCarloHaber5}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber5} />
                                    </a>
                                </li>
                                <li id="galley_image_79">
                                    <a data-fancybox="gallery" href={MonteCarloHaber6}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={MonteCarloHaber6} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">SIN CARS İngiltere, yılın en görkemli etkinliklerinden biri olan ve her yıl ihtişamın başkenti Monte Carlo'da Prens II</h3>
                        <div className="date">20-04-2017</div>
                        <p>SIN CARS İngiltere, yılın en görkemli etkinliklerinden biri olan ve her yıl ihtişamın başkenti Monte Carlo'da Prens II. Albert tarafından  düzenlenen Top Marques Monaco'ya davet edildi. “Dünyanın en seçkin şovu” olarak adlandırılan etkinlik, en lüks araçları, yatları, saatleri ve mücevherleri bir araya getiriyor.</p>
                        <p>SIN R1 GT4 olarak daha sonra yerini alan SIN R1 550 street car modeli, 14-19 Nisan tarihlerinde Monte Carlo Casino'nun önünde görücüye çıktı.</p>
                        <p>&nbsp;</p>
                        <p>SIN R1&nbsp;550 modeli ayrıca&nbsp; 20-23 Nisan'da Monte Carlo'da düzenlenen ve&nbsp; lüksün bir parçası haline gelmiş&nbsp; Grimaldi Forum'a da katılacaktır.</p>
                        <p>&nbsp;</p>
                        <p><u>Avrupalı GT4 serisinin 2017 sezonu için yarış takvimi:</u></p>
                        <p>1-2 Nisan - Misano (İtalya)</p>
                        <p>6-7 Mayıs - Brands Hatch (İngiltere)</p>
                        <p>10-11 Haziran - Red Bull Ring (Avusturya)</p>
                        <p>15-16 Temmuz - Slovakia Ring (Slovakya)</p>
                        <p>19-20 Ağustos - Zandvoort (Hollanda)</p>
                        <p>16-17 Eylül - Nürburgring (Almanya)</p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default MonteCarloHaber;