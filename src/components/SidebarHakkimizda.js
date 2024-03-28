import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBarHakkimizda = () => {
    const [level1ShowName, setLevel1ShowName] = useState("HAKKIMIZDA");
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === "/gulf-marine-7" || location.pathname === "/verila-7" || location.pathname === "/ergon-6") {
            setLevel1ShowName("ORTAKLAR");
        }
    }, [location])

    const showLevel1 = (levelName) => {
        setLevel1ShowName(levelName);
    }

    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/biz-kimiz" onClick={() => showLevel1("HAKKIMIZDA")}>Biz kimiz</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ortaklarimiz">Ortaklarımız</NavLink>
                        <ul class={level1ShowName === "ORTAKLAR" ? "sub show" : "sub"}>
                            <li>
                                <NavLink to="/gulf-marine-7" onClick={() => showLevel1("ORTAKLAR")}>Gulf Marine</NavLink>
                            </li>
                            <li>
                                <NavLink to="/verila-7" onClick={() => showLevel1("ORTAKLAR")}>Verila</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ergon-6" onClick={() => showLevel1("ORTAKLAR")}>Ergon</NavLink>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <NavLink to="/sirketin-sorumlulugu" onClick={() => showLevel1("HAKKIMIZDA")}>Şirketin sorumluluğu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gizlilik-politikasi" onClick={() => showLevel1("HAKKIMIZDA")}>Gizlilik politikası</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cerez-politikasi" onClick={() => showLevel1("HAKKIMIZDA")}>Çerez politikası</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarHakkimizda;