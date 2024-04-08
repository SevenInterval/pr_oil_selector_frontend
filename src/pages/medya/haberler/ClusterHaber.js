import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { RockinImageLarge } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";
import { Helmet } from "react-helmet-async";

const ClusterHaber = () => {
    return (
        <>
            <Helmet>
                <title>ROCKIN’ THE CLUSTER</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/news/rockin-the-cluster-5" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarMedya haber={true} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Media / </span>
                        <h1>Haberler&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                        <div className="news-detail">
                            <ul className="images">
                                <li id="galley_image_183">
                                    <FancyBox
                                        options={{
                                            Carousel: {
                                                infinite: false,
                                            },
                                        }}
                                    >
                                        <a data-fancybox="gallery" href={RockinImageLarge}>
                                            <img title="n.jpg" alt="n.jpg" width={360} height={270} loading="eager" src={RockinImageLarge} />
                                        </a>
                                    </FancyBox>
                                </li>
                            </ul>
                            <span style={{ verticalAlign: "sub", color: "#000" }} className="hs-small">ROCKIN’ THE CLUSTER</span>
                            <div className="date">03-10-2016</div>
                            <p>Ceco Anastasov (Executive Director Prista Oil Group) and Valentin Ionescu (Sales and Marketing Manager) visited the CEE Cluster. Their 3 days program included meetings with prospects, with the teams of Prista Czech, Slovakia and Hungary and a thorough analysis of the results. Sales in 2016 are growing, but not as much as it was planned.</p>
                            <p>„It was good to see positive examples – like the co-operation with DAF – that we can use also in other countries. However, sales people are often burried with tasks that should be out of their scope. It is limiting our potential to grow.” – said Mr. Ionescu after the meetings. „We have to liberate the time of sales people and let them focus on sales. Administration will be simplified according to the Group standards.”- added Tivadar Runtág (CEE Cluster Sales Manager).</p>
                            <p>&nbsp;</p>
                            <p>„We exploit new opportunities in synthetic and semi-synthetic markets. There’s no other way but to win - so let’s rock-n-roll!” – commented Ceco Anastasov.”</p>
                            <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    )
}

export default ClusterHaber;