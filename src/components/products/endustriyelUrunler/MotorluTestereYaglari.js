import { Helmet } from "react-helmet-async";
import SideBarUrunler from "../../SidebarUrunler";
import UrunlerBaslik from "../UrunlerBaslik";
import UrunOzet from "../UrunOzet";
import {
    basicVarilKucukImage
} from "../../../images/products"

const MotorluTestereYaglari = () => {
    return (
        <>
            <Helmet>
                <title>MOTORLU TESTERE YAĞLARI</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/catalogue/motorlu-testere-yaglari" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarUrunler level1ShowName={"ENDUSTRI"} level2ShowName={"MOTORLU TESTERE YAĞLARI"} />
                <article>
                    <UrunlerBaslik level1ShowName={"ENDÜSTRİYEL ÜRÜNLER"} level2ShowName={"MOTORLU TESTERE YAĞLARI"} level1To={"/catalogue/hidrolik-ve-kizak-yaglari"} />
                    <ul className="objects-list-two-rows">
                        <UrunOzet productUrl={"/catalogue/motorlu-testere-yaglari/prista-mvr-multi-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MVR Multi"}
                            productText={"PRISTA® MVR MULTI motorlu testere zincir yağı, motorlu testerelerin zincirlerini yağlamak için tasarlanmıştır. Kesme aletine çok iyi yapışma özelliği katan katkı maddesi düşük alet aşınması ve düşük yağ tüketimi sunar.PRISTA® MVR M"}
                            last={false} />
                        <UrunOzet productUrl={"/catalogue/motorlu-testere-yaglari/prista-mvr-4"}
                            productLogo={basicVarilKucukImage} productName={"Prista MVR"}
                            productText={"PRISTA® MVR motorlu testere zincir yağı, motorlu testerelerin zincirlerini yağlamak için tasarlanmıştır. Kesme aletine çok iyi yapışma özelliği katan katkı maddesi düşük alet aşınması ve düşük yağ tüketimi sunar."}
                            last={true} />
                    </ul>
                </article>
            </div>
        </>
    )
}

export default MotorluTestereYaglari;