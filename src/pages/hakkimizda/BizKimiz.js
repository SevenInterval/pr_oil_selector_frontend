import PristaImage1 from '../../images/pristaoil1.jpg'
import PristaImage2 from '../../images/pristaoil2.jpg'
import FancyBox from "../../components/FancyBox";
import SideBarHakkimizda from "../../components/SidebarHakkimizda";
import { Helmet } from "react-helmet-async";

const BizKimiz = () => {
    return (
        <>
            <Helmet>
                <title>Biz kimiz</title>
                <meta name="description"
                    content="PRISTA Oil Group is a holding company whose field of activity covers the following areas: Production of motor and industrial oils, greases and specialty fluids" />
                <link rel='canonical' href="/biz-kimiz" />
            </Helmet>
            <div className="body_with_sidebar default">
                <SideBarHakkimizda />
                <article>
                    <div className="page-header">
                        <span className="titleOfHeader">Hakkımızda / </span>
                        <h1>Biz kimiz&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <div className="page-article">
                        <p><strong style={{ fontFamily: "sans-serif" }}>Prista Oil Group</strong>, çalışma alanı aşağıdaki alanları kapsayan bir holdingdir:</p>
                        <p>&nbsp; &nbsp;• &nbsp;&nbsp;Tamamen Prista Oil Holding ve uluslararası iştirakçileri tarafından geliştirilen motor ve endüstriyel yağların,<br />
                            &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;greslerin ve özel akışkanların üretilmesi ve dağıtılması.<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;Akü – Monbat yapısı ile (Sofya Borsasının değerli hisse senetlerinden birisi)</p>
                        <p>Prista Oil Holding, Orta ve Doğu Avrupa, Orta Doğu, Orta Asya ve Kuzey Afrika'daki 45'tan fazla ülkede faaliyet gösteren lider Bulgar firmalarından birisidir.</p>
                        <p>Prista Oil'in üretim kapasiteleri en modern ve yenilikçi teknolojilere göre belirlenmekte ve geliştirilmektedir. Geniş ürün yelpazesi, Firmanın kendi araştırmalarının ve Chevron, Gulf Oil Marine gibi yağ ve kimya endüstrisinde dünya liderleriyle mükemmel işbirliğinin bir sonucudur.</p>
                        <p>Prista Oil'in Bulgaristan ve Özbekistan yağlar, gresler ve özel akışkanlar ürettiği kendisine ait fabrikaları bulunmaktadır.</p>
                        <p>Misyonumuz: işinizin sürdürülebilir şekilde büyümesi için şunları sunuyoruz:</p>
                        <p>&nbsp; &nbsp;• &nbsp;&nbsp;kişiye özel teknik çözümler<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;yağlama uzmanlığı<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;uygulama ile ilgili hizmetler<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;yağların, greslerin ve özel akışkanların geniş portföyü<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;rekabetçi ticari koşullar<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;yerel destek ve bölgesel ulaşılabilirlik<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;çevre koruma için gelişmiş kontrol sistemleri</p>
                        <p>Ekibimiz: 3 kıtada 9 ülkede 500 kişi</p>
                        <p>&nbsp; &nbsp;• &nbsp;&nbsp;AR-GE’de teknik uygulama uzmanları ve laboratuvarlar<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;Kalifiye üretim birimi çalışanları<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;Kendini işine adamış Kilit Müşteri Yöneticileri<br />
                            &nbsp; &nbsp;• &nbsp;&nbsp;Uzman Müşteri Hizmetleri Acenteleri</p>
                        <p>
                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <a data-fancybox="gallery" href={PristaImage1}>
                                    <img alt="pristaOil1" src={PristaImage1} height={245} width={370} loading='eager' title='pristaOil1'  />
                                </a>
                                &nbsp;
                                <a data-fancybox="gallery" href={PristaImage2}>
                                    <img alt="pristaOil2" src={PristaImage2} height={245} width={370} loading='eager' title='pristaOil2' />
                                </a>
                            </FancyBox>
                        </p>
                        <p>&nbsp;</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export default BizKimiz;