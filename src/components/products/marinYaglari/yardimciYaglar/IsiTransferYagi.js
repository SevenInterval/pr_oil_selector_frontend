import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const IsiTransferYagi = () => {
    return (
        <>
            <Helmet>
                <title>Isı Transfer Yağı</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/isi-transfer-yagi" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Isı Transfer Yağı"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/product/isi-transfer-yagi/prista-mtl-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista MTL"}
                            productText={"PRISTA® MTL, oldukça rafine baz ürünler ve gelişmiş katkı maddeleriyle formüle edilmiştir. Bu yağ, dolaylı ısıtmalı cebri sirkülasyon sistemlerinde ısı transfer yağı olarak kullanım için tavsiye edilir."}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default IsiTransferYagi;