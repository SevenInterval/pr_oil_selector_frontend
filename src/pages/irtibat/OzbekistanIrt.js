import { Link } from "react-router-dom";
import SideBarIrtibat from "../../components/SideBarIrtibat";

const OzbekistanIrt = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
                    <h1>Özbekistan</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>"Uz-Prista" JV LLC</strong><br />
                        100017 Tashkent<br />
                        93-A Sharaf Rashidov ave.<br />
                        tel: + 99 871 1206776<br />
                        fax: +99 871 1206688<br />
                        <Link to="mailto:info@prista-oil.uz" style={{ color: "#11a1d6" }}>info@prista-oil.uz</Link><br />
                        <Link to="http://www.prista-oil.uz/" style={{ color: "#11a1d6" }}>www.prista-oil.uz</Link>
                    </p>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/27" title="ozbekistanFrame" frameborder="0"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default OzbekistanIrt;