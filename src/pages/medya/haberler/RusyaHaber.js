import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { RusDistImage } from "../../../images/news";
import { RusDistImage2 } from "../../../images/news";
import { RusDistImage3 } from "../../../images/news";
import { RusDistImage4 } from "../../../images/news";
import { RusDistImage5 } from "../../../images/news";
import { RusDistImage6 } from "../../../images/news";

import FancyBox from "../../../components/FancyBox";


const RusyaHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
                    <div className="news-detail">
                        <ul className="images">
                            <FancyBox
                                options={{
                                    Carousel: {
                                        infinite: false,
                                    },
                                }}
                            >
                                <li id="galley_image_100">

                                    <a data-fancybox="gallery" href={RusDistImage}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage} />
                                    </a>
                                </li>
                                <li id="galley_image_101">

                                    <a data-fancybox="gallery" href={RusDistImage2}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage2} />
                                    </a>
                                </li>
                                <li id="galley_image_102">

                                    <a data-fancybox="gallery" href={RusDistImage3}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage3} />
                                    </a>
                                </li>
                                <li id="galley_image_103">

                                    <a data-fancybox="gallery" href={RusDistImage4}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage4} />
                                    </a>
                                </li>
                                <li id="galley_image_104">

                                    <a data-fancybox="gallery" href={RusDistImage5}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage5} />
                                    </a>
                                </li>
                                <li id="galley_image_105">

                                    <a data-fancybox="gallery" href={RusDistImage6}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={RusDistImage6} />
                                    </a>
                                </li>
                            </FancyBox>
                        </ul>
                        <h3 className="hs-small">Rusçuk, Bulgaristan’da 7 Eylül’de gerçekleşen PRISTA®’NIN RUSYA’DAKİ DİSTRİBÜTÖRLERİ İÇİN İLK KONFERANSINDA fikir ve deneyim alışverişi yapıldı</h3>
                        <div className="date">03-10-2017</div>
                        <p>7 Eylül 2017 tarihinde Bulgaristan’nın Rusçuk şehrinde Prista Oil ekibi, Prista Oil Holding’in Rusya’daki resmi temsilcisi olan Inventum distribütörleri için bir konferansa ev sahipliği yaptı.</p>

                        <p> Konferans, Rus distribütörler için  bu düzeyde yapılmış olan ilk toplantıydı. Etkinliğin asıl amacı Prista Oil’in üretim sistemini, Rus pazarına girme stratejisini, şirketin 2017 yılında gerçekleştirdiği faaliyetlerin sonuçlarını sunmak ve son ticari teklifleri tartışmaktı. Konferans boyunca katılımcılar kendi bölgelerine özgü detayları ortaya çıkararak Prista® yağlarının ve özel sıvılarının başarılı satış örneklerini paylaştılar. </p>
                        <p>Konferansta düzenlenen atölyenin önemi, Inventum’un Yönetici Müdürü Pavel Lisovsky tarafından da kabul gördü: </p>
                        <p> <em>“Şirketimizin öncelikli hedefi, Bulgaristan’daki son teknolojiyle, Rusçuk ve Sofya’daki fabrikalarda üretilen yüksek kalitede ürünleri sunmaktır. Şirketimizin kuruluşu başarıya giden ilk adımdır - Inventum deneyimli bir satış ekibine sahiptir ve müşterilerine teknik, pazarlamaya ilişkin ve bilgilendirici destek sağlamaktadır. Prista Oil Holding tarafından üretilen ürünlerin faydaları hakkında ortaklarımızı güncel olarak bilgilendirmek için bu tarz etkinlikler düzenlemeye devam edeceğiz.’’ </em></p>
                        <p>Diğer yandan, Prista Oil Holding Yönetim Kurulu üyesi ve hissedarı Milen Boychev, bütün katılımcılara teşekkür etti ve Rus pazarında Prista® ürünlerinin satışını geliştirmeye yönelik en büyük beklentileri belirtti: </p>
                        <p><em>“Bizimle çalışmayı seçen bütün ortaklarımıza teşekkür ederim! Rusya’da başarılı işler yapmak için çok büyük bir potansiyel görmekteyiz ve koyduğumuz hedefler için gayretle, adım adım ilerlemeye devam edeceğiz.’’</em></p>
                        <Link className="bback-button" to="/news/">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default RusyaHaber;