import { NavLink } from "react-router-dom";

const SideBarMedya = (props) => {
    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/news/category/bayilik-hakkinda-1" >Bayilik Hakkında</NavLink>
                    </li>
                    <li>
                        <NavLink className={props.haber ? "active" : ""} to="/news/category/haberler">Haberler</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarMedya;