import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../../SidebarUrunler";
import UrunlerBaslik from "../../UrunlerBaslik";
import UrunOzet from "../../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../../images/products"

const HidrolikYaglar = () => {
    return (
        <>
            <Helmet>
                <title>Hidrolik Yağlar</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/hidrolik-yaglar" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"MARIN"} level2ShowName={"YARDIMCIYAGLAR"} />
                <article>
                    <UrunlerBaslik level1ShowName={"MARİN YAĞLARI"} level2ShowName={"YARDIMCI YAĞLAR"} level3ShowName={"Hidrolik Yağlar"}
                        level1To={"/catalogue/sistem-yaglari"} level2To={"/catalogue/disli-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/hidrolik-yaglar/prista-mhv-8"}
                            productLogo={basicVarilKucukImage} productName={"Prista MHV"}
                            productText={"PRISTA® MHV hidrolik yağları pas, oksidasyon, korozyon önleyiciler ve aşınma önleyici maddeler ile polimetakrilat VII (Viskozite İndeksi İyileştirici) içeren oldukça etkili bir katkı maddesi ile harmanlanmış çok iyi demülsibilite ve "}
                            last={false} />
                    </ul>
                </article>
            </div>
        </>

    )
}

export default HidrolikYaglar;