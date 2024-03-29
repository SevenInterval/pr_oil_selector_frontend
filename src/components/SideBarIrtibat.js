import { NavLink } from "react-router-dom";

const SideBarIrtibat = () => {

    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/harita">HARİTA</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bulgaristan">Bulgaristan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/romanya">Romanya</NavLink>
                    </li>
                    <li>
                        <NavLink to="/macaristan">Macaristan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cek-cumhuriyeti">Çek Cumhuriyeti</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sirbistan">Sırbistan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ukrayna">Ukrayna</NavLink>
                    </li>
                    <li>
                        <NavLink to="/turkiye">Türkiye</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ozbekistan">Özbekistan</NavLink>
                    </li>
                    <li>
                        <NavLink to="/rusya-1">Rusya</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarIrtibat;