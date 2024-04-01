import { NavLink } from "react-router-dom";

const SidebarKalite = () => {
    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/teknoloji-merkezi" >Teknoloji merkezi</NavLink>
                    </li>
                    <li>
                        <NavLink to="/laboratuvar-servisleri">Laboratuvar servisleri</NavLink>
                    </li>                    
                    <li>
                        <NavLink to="/prista-sertifikalari">Prista sertifikaları</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bizimle-temasa-gecin">Bizimle temasa geçin</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SidebarKalite;