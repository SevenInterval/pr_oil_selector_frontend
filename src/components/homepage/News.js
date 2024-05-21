import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="grey-line">
            <div className="container">
                <div className="home-media-list">
                    <div className="media-object-left">
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                        <ul className="home-news-list">
                            <li>
                                <Link to="/news/harika-haberler-teodor-tsvetkovtan-bulgaristandaki-texaco-marka-elcimizden" >
                                    <span className="title">Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!</span>
                                    <span className="date">18-03-2024</span>
                                    <span className="text">
                                        Harika haberler Teodor Tsvetkov'tan - Bulgaristan'daki Texaco marka elçimizden!
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/news/prista-oil-holding-yaglayicilar-surdurulebilirlik-forumunun-bir-parcasiydi">
                                    <span className="title">Prista Oil Holding, Yağlayıcılar Sürdürülebilirlik Forumu’nun bir Parçasıydı.</span>
                                    <span className="date">01-03-2024</span>
                                    <span className="text">
                                        Kasım 2023 ayının sonlarına doğru, Prista Oil Holding, Yağlayıcı sanayinde sürdürülebilirlik uygulamalarını ilerlet
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