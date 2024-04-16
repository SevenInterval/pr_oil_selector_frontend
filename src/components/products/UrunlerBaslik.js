import { Link } from "react-router-dom";
import PristaLogo from "../../images/pristaLogo.png"

const UrunlerBaslik = (props) => {
    const { level1ShowName, level2ShowName, level3ShowName } = props;
    return (
        <>
            <div className="page-header">
                <Link to="/catalogue/yuksek-performansli-dpf-twc">Ürünler</Link>
                {" / "}
                <Link to="/catalogue/yuksek-performansli-dpf-twc">PRISTA</Link>
                {" / "}
                <Link to="/catalogue/yuksek-performansli-dpf-twc">{level1ShowName}</Link>
                {" / "}
                <Link to="/catalogue/yuksek-performansli-dpf-twc">{level2ShowName}</Link>
                {" / "}
                <h1>{level3ShowName}</h1>
            </div>
            <div className="category-description">
                <div className="logo">
                    <img src={PristaLogo} alt='prLogo' title='pristaLogo' loading='eager' width={83} height={113} />
                </div>
                <div className="cell-left">
                    <ol>
                        <li>
                            <Link to="/prista-yaglari-danismani" target="_self">
                                <strong style={{ fontFamily: "sans-serif" }}>Prista Yağları Danışmanı:</strong> aracınız için doğru yağı bulabilirsiniz
                            </Link>
                        </li>
                        <li>
                            <Link to="http://online.prista-oil.com/PDSMSDS" target="_blank">
                                <strong style={{ fontFamily: "sans-serif" }}>Prista PDS'lerine ve MSDS'lerine</strong> inceleyebilirsiniz
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq/motor-yaglari" target="_self">
                                <strong style={{ fontFamily: "sans-serif" }}>Sıkça Sorulan Sorular:</strong> Ürünlerimiz hakkında daha fazla bilgi edinebilirsiniz
                            </Link>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default UrunlerBaslik;