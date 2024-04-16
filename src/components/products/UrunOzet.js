import { Link } from "react-router-dom";

const UrunOzet = (props) => {
    const { productUrl, productLogo, productName, productText, last } = props;

    return (
        <li className={last ? "product-height last" : "product-height"}>
            <Link to={productUrl}>
                <span className="img-left">
                    <img src={productLogo} alt='urunLogo' title='urunLogo' loading='eager' width={108} height={179} />
                </span>
                <span className="body-oh">
                    <span className="title">{productName}</span>
                    <span className="text">{productText}</span>
                    <span className="read-more">daha</span>
                </span>
            </Link>
        </li>
    )
}

export default UrunOzet;