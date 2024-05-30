import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBarHakkimizda = (props) => {
    const [level1ShowName] = useState(props.title);

    return (
        <aside>
            <div className="cont-body">
                <ul>
                    <li>
                        <NavLink to="/biz-kimiz">Biz kimiz</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ortaklarimiz">Ortaklarımız</NavLink>
                        <ul className={level1ShowName === "ORTAKLAR" ? "sub show" : "sub"}>
                            {/* <li>
                                <NavLink to="/gulf-marine-7" >Gulf Marine</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/verila-7" >Verila</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ergon-6" >Ergon</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cworks-6" >CWORKS</NavLink>
                            </li>

                        </ul>
                    </li>
                    <li>
                        <NavLink to="/sirketin-sorumlulugu" >Şirketin sorumluluğu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gizlilik-politikasi" >Gizlilik politikası</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cerez-politikasi" >Çerez politikası</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBarHakkimizda;