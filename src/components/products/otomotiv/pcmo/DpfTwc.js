import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";

const DpfTwc = () => {
    return (
        <>
            <Helmet>
                <title>Prista Oil</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/yuksek-performansli-dpf-twc" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler catalog={true} />
            </div>
        </>

    )
}

export default DpfTwc;