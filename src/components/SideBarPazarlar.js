import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarPazarlar = (props) => {
    const [level1ShowName, setLevel1ShowName] = useState("ISTIRAKLER");

    useEffect(() => {
        if (props.title === "DISTRIBUTORLER") {
            setLevel1ShowName("DISTRIBUTORLER");
        }
    },[props])

    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/istirakler">İştirakler</NavLink>
                        <ul className={level1ShowName === "ISTIRAKLER" ? "sub show" : "sub"}>
                            <li>
                                <NavLink to="/bulgaristan-1">Bulgaristan</NavLink>
                            </li>
                            <li>
                                <NavLink to="/romanya-1">Romanya</NavLink>
                            </li>
                            <li>
                                <NavLink to="/macaristan-1">Macaristan</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cek-cumhuriyeti-1">Çek Cumhuriyeti</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sirbistan-1">Sırbistan</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ukrayna-1">Ukrayna</NavLink>
                            </li>
                            <li>
                                <NavLink to="/turkiye-1">Türkiye</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ozbekistan-1">Özbekistan</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rusya">Rusya</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/distributorler">Distribütörler</NavLink>
                        <ul className={level1ShowName === "DISTRIBUTORLER" ? "sub show" : "sub"}>
                            <li>
                                <NavLink to="/adana-1">Adana</NavLink>
                            </li>
                            <li>
                                <NavLink to="/denizli-1">Denizli</NavLink>
                            </li>
                            <li>
                                <NavLink to="/istanbul-1">İstanbul</NavLink>
                            </li>
                            <li>
                                <NavLink to="/izmir-1">İzmir</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarPazarlar;