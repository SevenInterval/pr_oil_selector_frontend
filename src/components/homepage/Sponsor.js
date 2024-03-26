import { Link } from "react-router-dom";
import PristaJpeg from '../../images/home_gallery_basic.jpeg'
import GulfJpeg from '../../images/home_gallery_gulf.jpeg'
import VerilaJpeg from '../../images/home_gallery_verila.jpeg'
import ErgonJpeg from '../../images/home_gallery_ergon.jpeg'
import AdblueJpeg from '../../images/home_gallery_adblue.jpeg'

const Sponsor = () => {
    return (
        <div className="container">
            <ul className="home-gallery-scroll-horizontal">
                <li>
                    <Link href="/biz-kimiz">
                        <img alt="prista_oil.jpeg" title="prista_oil.jpeg" src={PristaJpeg} width="119" height="100" />
                    </Link>
                </li>
                <li>
                    <Link href="/gulf-marine-7">
                        <img alt="gulfmarine.jpeg" title="gulfmarine.jpeg" src={GulfJpeg} width="119" height="100" />
                    </Link>
                </li>
                <li>
                    <Link href="/verila-7">
                        <img alt="verila.jpeg" title="verila.jpeg" src={VerilaJpeg} width="119" height="100" />
                    </Link>
                </li>
                <li>
                    <Link href="/ergon-6">
                        <img alt="ergon.jpeg" title="ergon.jpeg" src={ErgonJpeg} width="119" height="100" />
                    </Link>
                </li>
                <li>
                    <Link href="/greenchem-7">
                        <img alt="adblue.jpeg" title="adblue.jpeg" src={AdblueJpeg} width="119" height="100" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sponsor;