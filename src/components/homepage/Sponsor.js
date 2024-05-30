import { Link } from "react-router-dom";
import PristaJpeg from '../../images/home_gallery_basic.jpeg'
//import GulfJpeg from '../../images/home_gallery_gulf.jpeg'
import VerilaJpeg from '../../images/home_gallery_verila.jpeg'
import ErgonJpeg from '../../images/home_gallery_ergon.jpeg'
import CworksJpg from '../../images/home_gallery_cworks.jpg'

const Sponsor = () => {
    return (
        <div className="container">
            <ul className="home-gallery-scroll-horizontal">
                <li>
                    <Link to="/biz-kimiz">
                        <img alt="prista_oil.jpeg" title="prista_oil.jpeg" src={PristaJpeg} width="119" height="100" loading='eager' />
                    </Link>
                </li>
                {/* <li>
                    <Link to="/gulf-marine-7">
                        <img alt="gulfmarine.jpeg" title="gulfmarine.jpeg" src={GulfJpeg} width="119" height="100" loading='eager' />
                    </Link>
                </li> */}
                <li>
                    <Link to="/verila-7">
                        <img alt="verila.jpeg" title="verila.jpeg" src={VerilaJpeg} width="119" height="100" loading='eager' />
                    </Link>
                </li>
                <li>
                    <Link to="/ergon-6">
                        <img alt="ergon.jpeg" title="ergon.jpeg" src={ErgonJpeg} width="119" height="100" loading='eager' />
                    </Link>
                </li>
                <li>
                    <Link to="/cworks-6">
                        <img alt="cworks.jpg" title="cworks.jpg" src={CworksJpg} width="119" height="100" loading='eager' />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sponsor;