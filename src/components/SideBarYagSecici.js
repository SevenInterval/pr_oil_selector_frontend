import { NavLink } from "react-router-dom";

const SideBarYagSecici = () => {
    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/prista-yaglari-danismani">Yağ Danışmanı</NavLink>
                        <ul className="sub show">
                            <li>
                                <NavLink to="/binek-araclar-1">Binek Araçlar</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hafif-ticari-araclar-1">Hafif Ticari Araçlar</NavLink>
                            </li>
                            <li>
                                <NavLink to="/kamyonlar-ve-otobusler">Kamyonlar ve Otobüsler</NavLink>
                            </li>
                            <li>
                                <NavLink to="/motosikletler-atv-ut">Motosikletler, ATV-UT</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tarimsal-ekipman">Tarımsal Ekipman</NavLink>
                            </li>
                            <li>
                                <NavLink to="/insaat-ve-madencilik">İnşaat ve Madencilik</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarYagSecici;