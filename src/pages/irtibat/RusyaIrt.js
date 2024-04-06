import { Link } from "react-router-dom";
import SideBarIrtibat from "../../components/SideBarIrtibat";

const RusyaIrt = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarIrtibat />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">İrtibat / </span>
                    <h1>Rusya</h1>
                </div>
                <div className="page-article">
                    <p><strong style={{ fontFamily: "sans-serif" }}>LLC «Inventum»</strong><br />
                        Prospect Mira 101, building 1,&nbsp;<br />
                        E / POM / K / OF 4 / l /14/61<br />
                        Moscow 129085<br />
                        Russia<br />
                        <Link to="mailto:info@pristagroup.com" style={{ color: "#11a1d6" }}>info@pristagroup.com</Link>
                    </p>
                    <div className="iframe"><iframe src="//www.prista-oil.com/google/map/51" title="rusyaFrame" frameBorder="0"></iframe></div>
                </div>
            </article>
        </div>
    )
}

export default RusyaIrt;