import { Link } from "react-router-dom"

const Haber = (props) => {
    const { uri, gorsel, baslik, tarih, detay, lastClassName } = props;
    return (
        <li className={lastClassName}>
            <Link to={uri}>
                <span className="img">
                    <img src={gorsel} alt={gorsel + "_Image"} />
                </span>
                <span className="title">{baslik}</span>
                <span className="date">{tarih}</span>
                <span className="text">{detay}
                </span>
                <span className="read-more">daha</span>
            </Link>
        </li>
    )
}

export default Haber;