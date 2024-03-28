import { NavLink } from "react-router-dom";

const SideBarFaq = () => {
    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/faq/motor-yaglari">Motor yağları</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/binek-ve-hafif-ticari-araclar-icin-motor-yaglari">Binek ve hafif ticari araçlar için motor yağları</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/buyuk-ticari-araclar-icin-yaglar">Büyük ticari araçlar için yağlar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/sanziman-yaglari">Şanzıman yağları</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/sanziman-yaglari-otomatik-sanzimanlar">Şanzıman yağları - Otomatik şanzımanlar</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/antifriz-2">Antifriz</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/fren-hidroligi">Fren hidroliği</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/on-cam-yikama-sivisi">Ön cam yıkama sıvısı</NavLink>
                    </li>
                    <li>
                        <NavLink to="/faq/adblue-7">AdBlue</NavLink>
                    </li>
                </ul>
                <div class="aside-show-button">Faq Portfolio</div>
            </div>
        </aside>
    )
}

export default SideBarFaq;