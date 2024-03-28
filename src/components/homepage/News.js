import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="grey-line">
            <div className="container">
                <div className="home-media-list">
                    <div className="media-object-left">
                        <h2>Haberler</h2>
                        <ul className="home-news-list">
                            <li>
                                <Link to="/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden" >
                                    <span class="title">Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!</span>
                                    <span class="date">18-03-2024</span>
                                    <span class="text">
                                        Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi">
                                    <span class="title">TR Prista Oil Group'un kurucu ortağı Plamen Bobokov, Plovdiv "Paisii Hilendarski" Üniversitesi'nde öğrencilere halka açı...</span>
                                    <span class="date">20-07-2023</span>
                                    <span class="text">
                                        16 Mayıs 2023 tarihinde, Paisii Hilendarski'nin adını taşıyan Plovdiv Üniversitesi'nde "İnovasyon ve Girişimcilik"
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;