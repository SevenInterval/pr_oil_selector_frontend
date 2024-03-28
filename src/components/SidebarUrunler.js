import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBarUrunler = () => {
    const [level1ShowName, setLevel1ShowName] = useState("OTOMOTIV");
    const [level2ShowName, setLevel2ShowName] = useState("PCMO");

    const showLevel1 = (levelName) => {
        setLevel1ShowName(levelName);
        if (levelName === "OTOMOTIV") {
            setLevel2ShowName("PCMO")
        } else if (levelName === "MARIN") {
            setLevel2ShowName("ANAYAGLAR")
        }
    }

    const showLevel2 = (levelName) => {
        setLevel2ShowName(levelName);
    }

    return (
        <aside>
            <div className="cont-body">
                <ul className="product-list">
                    <li className="level-0 node-77 show">
                        <Link to="/catalogue/yuksek-performansli-dpf-twc" onClick={() => showLevel1("OTOMOTIV")}>PRISTA</Link>
                        <ul className="sub show">
                            <li className="level-1 node-97">
                                <Link to="/catalogue/yuksek-performansli-dpf-twc" onClick={() => showLevel1("OTOMOTIV")}>OTOMOTİV</Link>
                                <ul className={level1ShowName === "OTOMOTIV" ? "sub show" : "sub"}>
                                    <li className="level-2 node-98">
                                        <Link to="/catalogue/yuksek-performansli-dpf-twc" onClick={() => showLevel2("PCMO")}>PCMO</Link>
                                        <ul className={level2ShowName === "PCMO" ? "sub show" : "sub"}>
                                            <li className="level-3 node-99">
                                                <NavLink to="/catalogue/yuksek-performansli-dpf-twc">Yüksek performanslı DPF &amp; TWC</NavLink>
                                            </li>
                                            <li className="level-3 node-100">
                                                <NavLink to="/catalogue/yuksek-performansli">Yüksek performanslı</NavLink>
                                            </li>
                                            <li className="level-3 node-101">
                                                <NavLink to="/catalogue/ustun">Üstün</NavLink>
                                            </li>
                                            <li className="level-3 node-102">
                                                <NavLink to="/catalogue/standart">Standart</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="level-2 node-103">
                                        <Link to="/catalogue/yuksek-performansli-dpf-twc-uyumlu" onClick={() => showLevel2("HDMO")}>HDMO</Link>
                                        <ul className={level2ShowName === "HDMO" ? "sub show" : "sub"}>
                                            <li className="level-3 node-104">
                                                <NavLink to="/catalogue/yuksek-performansli-dpf-twc-uyumlu">Yüksek performanslı DPF &amp; TWC uyumlu</NavLink>
                                            </li>
                                            <li className="level-3 node-105">
                                                <NavLink to="/catalogue/yuksek-performansli-1">Yüksek performanslı</NavLink>
                                            </li>
                                            <li className="level-3 node-106">
                                                <NavLink to="/catalogue/ustun-1">Üstün</NavLink>
                                            </li>
                                            <li className="level-3 node-107">
                                                <NavLink to="/catalogue/standart-1">Standart</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-108">
                                        <NavLink to="/catalogue/gaz-motor-yaglari" onClick={() => showLevel2("GAZMOTOR")}>GAZ MOTOR YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-109">
                                        <NavLink to="/catalogue/2t-4t-yaglari" onClick={() => showLevel2("2T4T")}>2T/4T YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-110">
                                        <Link to="/catalogue/yuksek-performansli-duz-sanziman" onClick={() => showLevel2("SANZIMAN")}>ŞANZIMAN</Link>
                                        <ul className={level2ShowName === "SANZIMAN" ? "sub show" : "sub"}>
                                            <li className="level-3 node-111">
                                                <NavLink to="/catalogue/yuksek-performansli-duz-sanziman">Yüksek performanslı düz şanzıman</NavLink>
                                            </li>
                                            <li className="level-3 node-112">
                                                <NavLink to="/catalogue/yuksek-performansli-otomatik-sanziman">Yüksek performanslı otomatik şanzıman</NavLink>
                                            </li>
                                            <li className="level-3 node-113">
                                                <NavLink to="/catalogue/duz-sanziman-ve-aks">Düz şanzıman ve aks</NavLink>
                                            </li>
                                            <li className="level-3 node-114">
                                                <NavLink to="/catalogue/utto-stou-to-4-5">UTTO/STOU/TO-4</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-115">
                                        <Link to="/catalogue/sogutma-sulari" onClick={() => showLevel2("OZELAKISKANLAR")}>ÖZEL AKIŞKANLAR</Link>
                                        <ul className={level2ShowName === "OZELAKISKANLAR" ? "sub show" : "sub"}>
                                            <li className="level-3 node-116">
                                                <NavLink to="/catalogue/sogutma-sulari">Soğutma suları</NavLink>
                                            </li>
                                            <li className="level-3 node-117">
                                                <NavLink to="/catalogue/fren-hidrolikleri">Fren hidrolikleri</NavLink>
                                            </li>
                                            <li className="level-3 node-118">
                                                <NavLink to="/catalogue/on-cam-yikama-sivilari">Ön cam yıkama sıvıları</NavLink>
                                            </li>
                                            <li className="level-3 node-119">
                                                <NavLink to="/catalogue/adblue-r-6">AdBlue®</NavLink>
                                            </li>

                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className="level-1 node-120">
                                <Link to="/catalogue/hidrolik-ve-kizak-yaglari" onClick={() => showLevel1("ENDUSTRI")}>ENDÜSTRİYEL ÜRÜNLER</Link>
                                <ul className={level1ShowName === "ENDUSTRI" ? "sub show" : "sub"}>
                                    <li className="level-2 node-121">
                                        <NavLink to="/catalogue/hidrolik-ve-kizak-yaglari">HİDROLİK VE KIZAK YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-122">
                                        <NavLink to="/catalogue/kompresor-yaglari">KOMPRESÖR YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-123">
                                        <NavLink to="/catalogue/endustriyel-disli-yaglari">ENDÜSTRİYEL DİŞLİ YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-124">
                                        <NavLink to="/catalogue/turbin-yaglari">TÜRBİN YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-125">
                                        <NavLink to="/catalogue/transformator-yaglari">TRANSFORMATÖR YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-126">
                                        <NavLink to="/catalogue/sirkulasyon-yaglari-ve-genel-amacli-yaglar">SİRKÜLASYON YAĞLARI VE GENEL AMAÇLI YAĞLAR</NavLink>
                                    </li>
                                    <li className="level-2 node-127">
                                        <NavLink to="/catalogue/motorlu-testere-yaglari">MOTORLU TESTERE YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-128">
                                        <NavLink to="/catalogue/isi-transfer-yaglari">ISI TRANSFER YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-129">
                                        <NavLink to="/catalogue/su-verme-yaglari">SU VERME YAĞLARI</NavLink>
                                    </li>
                                    <li className="level-2 node-130">
                                        <Link to="/catalogue/sade-yaglar" onClick={() => showLevel2("MWF")}>MWF</Link>
                                        <ul className={level2ShowName === "MWF" ? "sub show" : "sub"}>
                                            <li className="level-3 node-131">
                                                <NavLink to="/catalogue/sade-yaglar">Sade yağlar</NavLink>
                                            </li>
                                            <li className="level-3 node-132">
                                                <NavLink to="/catalogue/suda-cozulebilir">Suda çözülebilir</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-133">
                                        <Link to="/catalogue/plastiklestiriciler" onClick={() => showLevel2("ISLEMYAGLARI")}>İŞLEM YAĞLARI</Link>
                                        <ul className={level2ShowName === "ISLEMYAGLARI" ? "sub show" : "sub"}>
                                            <li className="level-3 node-134">
                                                <NavLink to="/catalogue/plastiklestiriciler">Plastikleştiriciler</NavLink>
                                            </li>
                                            <li className="level-3 node-135">
                                                <NavLink to="/catalogue/kalip-ayirma-yaglari">Kalıp ayırma yağları</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-136">
                                        <NavLink to="/catalogue/sabit-gaz-motorlari">SABİT GAZ MOTORLARI</NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li className="level-1 node-137">
                                <NavLink to="/catalogue/gresler" onClick={() => showLevel1("GRESLER")}>GRESLER</NavLink>
                            </li>
                            <li className="level-1 node-141">
                                <Link to="/catalogue/sistem-yaglari" onClick={() => showLevel1("MARIN")}>MARİN YAĞLARI</Link>
                                <ul className={level1ShowName === "MARIN" ? "sub show" : "sub"}>
                                    <li className="level-2 node-142">
                                        <Link to="/catalogue/sistem-yaglari" onClick={() => showLevel2("ANAYAGLAR")}>ANA YAĞLAR</Link>
                                        <ul className={level2ShowName === "ANAYAGLAR" ? "sub show" : "sub"}>
                                            <li className="level-3 node-143">
                                                <NavLink to="/catalogue/sistem-yaglari">Sistem Yağları</NavLink>
                                            </li>
                                            <li className="level-3 node-144">
                                                <NavLink to="/catalogue/kovan-pistonlu-motor-yaglari">Kovan Pistonlu Motor Yağları</NavLink>
                                            </li>
                                            <li className="level-3 node-145">
                                                <NavLink to="/catalogue/silindir-yaglari">Silindir Yağları</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-146">
                                        <Link to="/catalogue/disli-yaglari" onClick={() => showLevel2("YARDIMCIYAGLAR")}>YARDIMCI YAĞLAR</Link>
                                        <ul className={level2ShowName === "YARDIMCIYAGLAR" ? "sub show" : "sub"}>
                                            <li className="level-3 node-147">
                                                <NavLink to="/catalogue/disli-yaglari">Dişli Yağları</NavLink>
                                            </li>
                                            <li className="level-3 node-148">
                                                <NavLink to="/catalogue/sogutma-sistemi-yagi">Soğutma Sistemi Yağı</NavLink>
                                            </li>
                                            <li className="level-3 node-149">
                                                <NavLink to="/catalogue/kompresor-yaglari-1">Kompresör Yağları</NavLink>
                                            </li>
                                            <li className="level-3 node-150">
                                                <NavLink to="/catalogue/isi-transfer-yagi">Isı Transfer Yağı</NavLink>
                                            </li>
                                            <li className="level-3 node-151">
                                                <NavLink to="/catalogue/turbin-yaglari-1">Türbin Yağları</NavLink>
                                            </li>
                                            <li className="level-3 node-152">
                                                <NavLink to="/catalogue/hidrolik-yaglar">Hidrolik Yağlar</NavLink>
                                            </li>
                                            <li className="level-3 node-153">
                                                <NavLink to="/catalogue/motor-yaglari">Motor Yağları</NavLink>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="level-2 node-154">
                                        <NavLink to="/catalogue/gresler-1">GRESLER</NavLink>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="aside-show-button">Product Portfolio</div>
        </aside>
    )
}

export default SideBarUrunler;