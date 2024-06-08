import { Helmet } from "react-helmet-async";
import SideBarYagSecici from "../../components/SideBarYagSecici";
import ModelSecici from "./ModelSecici";

const InsaatMadencilik = () => {
    return (
        <>
            <Helmet>
                <title>İnşaat ve Madencilik</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/insaat-ve-madencilik" />
            </Helmet>
            <div className="body_with_sidebar catalog">
                <SideBarYagSecici />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Prista Yağları Danışmanı / </span>
                        <h1>İnşaat ve Madencilik&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <ModelSecici categoryId={6} />
                    </div>
                </article>
            </div>
        </>
    )
}

export default InsaatMadencilik;