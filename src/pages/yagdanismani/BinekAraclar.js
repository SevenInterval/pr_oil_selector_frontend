import { Helmet } from "react-helmet-async";
import SideBarYagSecici from "../../components/SideBarYagSecici";
import ModelSecici from "./ModelSecici";
import { useState } from "react";
import Recommendations from "./Recommendations";

const BinekAraclar = () => {
    const [vehicleIdValue, setVehicleIdValue] = useState(null);

    const handleVehicleId = (vehicleId) => {
        setVehicleIdValue(vehicleId);
    }

    return (
        <>
            <Helmet>
                <title>Binek Araçlar</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/binek-araclar-1" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarYagSecici />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Prista Yağları Danışmanı / </span>
                        <h1>Binek Araçlar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        {
                            vehicleIdValue ?
                                <Recommendations vehicleId={vehicleIdValue} handleVehicleId={handleVehicleId} categoryId={1}/>
                                :
                                <ModelSecici categoryId={1} handleVehicleId={handleVehicleId} />
                        }

                    </div>
                </article>
            </div>
        </>
    )
}

export default BinekAraclar;