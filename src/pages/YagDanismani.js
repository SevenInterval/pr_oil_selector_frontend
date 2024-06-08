import { Helmet } from "react-helmet-async";
import SideBarYagSecici from "../components/SideBarYagSecici";
import { Link } from "react-router-dom";
import CarImage from '../images/car-side-solid.svg';
import VanImage from '../images/van-shuttle-solid.svg';
import TruckImage from '../images/truck-moving-solid.svg';
import MotorcycleImage from '../images/motorcycle-solid.svg';
import TractorImage from '../images/tractor-solid.svg';
import PickupImage from '../images/person-digging-solid.svg';

const YagDanismani = () => {
    return (
        <>
            <Helmet>
                <title>Prista Yağları Danışmanı</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/prista-yaglari-danismani" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarYagSecici />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Prista Yağları Danışmanı / </span>
                        <h1>Kategoriler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <div className="row cell-bg">
                            <Link to="/binek-araclar-1">
                                <div className="yagSeciciKategoriler">
                                    <img src={CarImage} alt='CarImage' title='CarImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px"}}>Binek Araçlar</span>
                                </div>
                            </Link>

                            <Link to="/hafif-ticari-araclar-1">
                                <div className="yagSeciciKategoriler">
                                    <img src={VanImage} alt='VanImage' title='VanImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px" }}>Hafif Ticari Araçlar</span>
                                </div>
                            </Link>

                            <Link to="/kamyonlar-ve-otobusler">
                                <div className="yagSeciciKategoriler">
                                    <img src={TruckImage} alt='TruckImage' title='TruckImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px" }}>Kamyonlar ve Otobüsler</span>
                                </div>
                            </Link>

                            <Link to="/motosikletler-atv-ut">
                                <div className="yagSeciciKategoriler">
                                    <img src={MotorcycleImage} alt='MotorcycleImage' title='MotorcycleImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px" }}>Motosikletler, ATV-UT</span>
                                </div>
                            </Link>

                            <Link to="/tarimsal-ekipman">
                                <div className="yagSeciciKategoriler">
                                    <img src={TractorImage} alt='TractorImage' title='TractorImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px" }}>Tarımsal Ekipman</span>
                                </div>
                            </Link>

                            <Link to="/insaat-ve-madencilik">
                                <div className="yagSeciciKategoriler">
                                    <img src={PickupImage} alt='PickupImage' title='PickupImage' loading='eager' width={35} height={35} />
                                    <span style={{ paddingLeft: "12px" }}>İnşaat ve Madencilik</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default YagDanismani;