import { Link } from "react-router-dom";
import SideBarMedya from "../../../components/SidebarMedya";
import { PlemenImageLarge } from "../../../images/news";
import FancyBox from "../../../components/FancyBox";

const PlamenHaber = () => {
    return (
        <div className="body_with_sidebar default">
            <SideBarMedya haber={true} />
            <article>
                <div className="page-header">
                    <span className="titleOfHeader">Media / </span>
                    <h1>Haberler</h1>
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
                                    <a data-fancybox="gallery" href={PlemenImageLarge}>
                                        <img title="n.jpg" alt="n.jpg" width="360" src={PlemenImageLarge} />
                                    </a>
                                </FancyBox>
                            </li>
                        </ul>
                        <h3 className="hs-small">Plamen Bobokov was awarded the honor „Golden badge – Ruse“</h3>
                        <div className="date">05-05-2016</div>
                        <p>Today, on the eve of 6th of May – the festival of Ruse - the large industrialist and universally recognized patron of the arts Plamen Bobokov received a well-deserved recognition from his fellow citizens for his work of many years, his dignified and responsible attitude towards the city of Ruse, its benefit and progress, through the honor bestowed on him - “Golden badge – Ruse”.</p>
                        <p>“Everything you have done and keep on doing for the city of Ruse worthily places you among the Ambassadors of our city”, said the Mayer Plamen Stoilov at the award ceremony held in the building of Ruse Municipality. &nbsp;Tonight, at a solemn ceremony – concert organized at Dohodno zdanie, the Chairman of the Board of Directors of “Prista oil Group” will also be awarded the title “Revered citizen of Ruse” for his undisputed contribution to the economical, infrastructural and cultural development of Ruse as well as his continued generous charity work throughout the years. Along with the serious and sustainable international business, owned and managed jointly with his brother - Atanas Bobokov, Plamen Bobokov is also the person behind a number of noble undertakings, among which the construction and financing of the Christian center in the Kardjali monastery "Dormition of the Holy Virgin", the monument of the holy brothers Sts. Cyril and Methodius donated to the Bulgarian community in Odessa, the project of foundation Bobokovi brothers - "The magnificient Northwest” supporting the spiritual and cultural values, the reconstruction of the church “All the Saints” in Ruse, the international festival for contemporary art “Process – Space” which this year marks its 25th anniversary, and many others. Plamen Bobokov also made the dream of generations of citizens of Ruse come true – the building of “Bulstrad Arena” - the first private multifunctional hall in South East Europe, as part of a major project to revive the city of Ruse and transform it into a well-deserved center of attraction for cultural, sporting, public, congress and business events in the Danube region.&nbsp;</p>
                        <Link className="bback-button" to="/news/category/haberler">Geri</Link>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default PlamenHaber;