import { Link } from "react-router-dom";
import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import CworksImage from '../../images/cworksLogo.png';
import CworkProductImage from '../../images/cworksProductImage.jpg';
import { Helmet } from "react-helmet-async";
import FancyBox from "../../components/FancyBox";

const Cworks = () => {
    return (
        <>
            <Helmet>
                <title>CWORKS</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/cworks-6" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarHakkimizda title={"ORTAKLAR"} />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Hakkımızda / </span>
                        <span className="titleOfHeader">Ortaklarımız / </span>
                        <h1>CWORKS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p>
                            <br />
                            <img alt="CworksImage" title="CworksImge" src={CworksImage} height={50} width={200} loading="eager" /><br />
                            &nbsp;
                        </p>
                        <p>1947'de Japonya'da kurulan uluslararası Toyota Tsusho Corporation'a ait yeni otomobil yedek parçaları, yağlar ve teknik sıvılar markası. İnsanlarla, toplumla ve Dünya ile birlikte yaşayan ve gelişen, müreffeh bir toplum yaratmak için değerler üreten bir şirkettir. Toyota Tsusho Corporation'ın kurumsal felsefesi
                            CWORKS otomobil yedek parçaları, orijinal parçaların üretildiği fabrikalarda üretilmektedir.<br /><br />
                            Yedek parçaların geliştirilmesi ve üretimine entegre bir yaklaşım, mühendisliği sırasında ortaya konan otomobilin özelliklerine mükemmel şekilde uyan bir ürün yaratılmasını sağlar. Her bir yedek parça Toyota için yüksek kalite kontrolüne sahiptir.
                            Ürün kalitesi Toyota Tsusho Corporation tarafından onaylanmıştır.</p>
                        <p>Prista Oil; Bosna Hersek, Bulgaristan, Kosova, Makedonya, Romanya, Sırbistan, Ukrayna, Çekya, Türkiye ve Karadağ bölgelerinde CWorks ürünlerinin özel bir distribütörüdür.</p>
                        <p>Daha fazla bilgi için: <Link to="https://cworks-parts.com/international" style={{ color: "#11a1d6" }} target="_blank">https://cworks-parts.com/international</Link></p>
                        <br />
                        <FancyBox
                            options={{
                                Carousel: {
                                    infinite: false,
                                },
                            }}
                        >
                            <a data-fancybox="gallery" href={CworkProductImage} >
                                <img alt="cworksProductImage" src={CworkProductImage} height={255} width={355} loading='eager' title='cworksProductImage' />
                            </a>
                        </FancyBox>
                    </div>
                </article >
            </div>
        </>
    )
}

export default Cworks;