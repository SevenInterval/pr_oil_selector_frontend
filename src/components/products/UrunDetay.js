import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../SidebarUrunler";
import UrunlerBaslik from "./UrunlerBaslik";
import FancyBox from "../FancyBox";
import { Link } from "react-router-dom";
import PdsButtonImage from "../../images/pds_button.jpg"
import MsdsButtonImage from "../../images/msds_button.jpg"

const UrunDetay = (props) => {
    const { productName, productUrl, level1ShowName, level2ShowName, level1ShowNameBaslik, level2ShowNameBaslik, level3ShowNameBaslik, level1To, level2To,
        productImage, productBigImage, productDetail, productProvides, pdsLink, msdsLink, backUrl, msds2Link, pds2Link, pds3Link
    } = props.product;

    return (
        <>
            <Helmet>
                <title>{productName}</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href={productUrl} />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={level1ShowName} level2ShowName={level2ShowName} />
                <article>
                    <UrunlerBaslik level1ShowName={level1ShowNameBaslik} level2ShowName={level2ShowNameBaslik} level3ShowName={level3ShowNameBaslik}
                        level1To={level1To} level2To={level2To} />
                    <div className="product-detail">
                        <div className="left">
                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href={productBigImage} >
                                    <img alt="productLogo" src={productImage} height={196} width={150} loading='eager' title='productLogo' />
                                </a>
                            </FancyBox>
                        </div>
                        <div className="description">
                            <h2 className="hs-small">{productName}</h2>
                            <p>
                                <strong style={{ fontFamily: "sans-serif" }}>Tanım ve Uygulama</strong>
                            </p>
                            <p>{productDetail}</p>
                            {productProvides &&
                                <p>
                                    <strong style={{ fontFamily: "sans-serif" }}>Faydaları</strong>
                                </p>
                            }
                            {productProvides}
                            <p>
                                <strong style={{ fontFamily: "sans-serif" }}>
                                    {pdsLink &&
                                        <>
                                            <Link to={pdsLink} target="_blank">
                                                <img alt="pdsButton" src={PdsButtonImage} height={35} width={85} loading='eager' title='pdsButton' />
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;
                                        </>
                                    }
                                    {pds2Link &&
                                        <>
                                            <Link to={pds2Link} target="_blank">
                                                <img alt="pds2Button" src={PdsButtonImage} height={35} width={85} loading='eager' title='pdsButton' />
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;
                                        </>}
                                    {pds3Link &&
                                        <>
                                            <Link to={pds3Link} target="_blank">
                                                <img alt="pds3Button" src={PdsButtonImage} height={35} width={85} loading='eager' title='pdsButton' />
                                            </Link>
                                            &nbsp;&nbsp;&nbsp;
                                        </>}
                                    {msdsLink &&
                                        <Link to={msdsLink} target="_blank">
                                            <img alt="msdsButton" src={MsdsButtonImage} height={35} width={98} loading='eager' title='msdsButton' />
                                        </Link>
                                    }
                                    {msds2Link &&
                                        <>
                                            &nbsp;&nbsp;&nbsp;
                                            <Link to={msds2Link} target="_blank">
                                                <img alt="msds2Button" src={MsdsButtonImage} height={35} width={98} loading='eager' title='msdsButton' />
                                            </Link>
                                        </>}
                                </strong>
                            </p>
                            <div className="separator product-action-box">
                                <Link className="gl-link" to={backUrl}>
                                    &lt; Listeye geri dönününüz </Link>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default UrunDetay;