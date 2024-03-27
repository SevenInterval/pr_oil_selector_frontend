import { Link } from "react-router-dom";
import Slider1Jpeg from '../../images/thumb_2061_slider_basic.jpeg'
import Slider2 from '../../images/Slider2.png'
import Slider3 from '../../images/Slider3.jpeg'
import SliderPoint from '../../images/slider-point.png'
import SliderArrows from '../../images/slider-arrows.png'
import { useEffect, useState } from "react";

const Slider = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            changeActiveSlide(1);
        }, 6000)

        return () => clearInterval(interval)
    })

    const changeActiveSlide = (changeNumber) => {
        let slideNo = activeSlide;
        if (slideNo === 3 && changeNumber === 1) {
            setActiveSlide(1);
        }
        else if (slideNo === 1 && changeNumber === -1) {
            setActiveSlide(3);
        } else {
            setActiveSlide(activeSlide + changeNumber);
        }
    }

    return (
        <div className="grey-line">
            <div className="container">
                <div className="flexslider">
                    <div className="flex-viewport" style={{ overflow: "hidden", position: "relative" }}>
                        <ul className="slides" style={activeSlide === 1 ? { width: "1000%", transitionDuration: "0.6s", transform: "translate3d(-10%, 0px, 0px)" } :
                            activeSlide === 2 ? { width: "1000%", transitionDuration: "0.6s", transform: "translate3d(-20%, 0px, 0px)" } :
                                { width: "1000%", transitionDuration: "0.6s", transform: "translate3d(-30%, 0px, 0px)" }}>
                            <li className="clone" aria-hidden={true} style={{ width: "10%", float: "left", display: "block" }}>
                                <Link to="/verila-7">
                                    <img alt="Slider_verila.jpg" title="Slider_verila.jpg" src={Slider1Jpeg} width="980" height="406" draggable={false} />
                                </Link>
                            </li>
                            <li className={activeSlide === 1 ? "flex-active-slide" : ""} style={{ width: "10%", float: "left", display: "block" }}>
                                <Link to="/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi">
                                    <img alt="Slider.png" title="Slider.png" src={Slider2} width="980" height="406" draggable={false} />
                                </Link>
                            </li>
                            <li className={activeSlide === 2 ? "flex-active-slide" : ""} style={{ width: "10%", float: "left", display: "block" }}>
                                <Link to="/gulf-marine-7">
                                    <img alt="Slider_gulf.jpg" title="Slider_gulf.jpg" src={Slider3} width="980" height="406" draggable="false" />
                                </Link>
                            </li>
                            <li className={activeSlide === 3 ? "flex-active-slide" : ""} style={{ width: "10%", float: "left", display: "block" }}>
                                <Link to="/verila-7">
                                    <img alt="Slider_verila.jpg" title="Slider_verila.jpg" src={Slider1Jpeg} width="980" height="406" draggable={false} />
                                </Link>
                            </li>
                            <li className="clone" aria-hidden={true} style={{ width: "10%", float: "left", display: "block" }}>
                                <Link to="/news/tr-prista-oil-groupun-kurucu-ortagi-plamen-bobokov-plovdiv-paisii-hilendarski-universitesinde-ogrencilere-halka-acik-bir-konferans-verdi">
                                    <img alt="Slider.png" title="Slider.png" src={Slider2} width="980" height="406" draggable={false} />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ol className="flex-control-nav flex-control-paging">
                        <li><Link className={activeSlide === 1 ? "flex-active" : ""} onClick={() => setActiveSlide(1)} style={activeSlide === 1 ? { background: `url(${SliderPoint}) no-repeat  0 0px` } : { background: `url(${SliderPoint}) no-repeat  0 -31px` }}>1</Link></li>
                        <li><Link className={activeSlide === 2 ? "flex-active" : ""} onClick={() => setActiveSlide(2)} style={activeSlide === 2 ? { background: `url(${SliderPoint}) no-repeat  0 0px` } : { background: `url(${SliderPoint}) no-repeat  0 -31px` }}>2</Link></li>
                        <li><Link className={activeSlide === 3 ? "flex-active" : ""} onClick={() => setActiveSlide(3)} style={activeSlide === 3 ? { background: `url(${SliderPoint}) no-repeat  0 0px` } : { background: `url(${SliderPoint}) no-repeat  0 -31px` }}>3</Link></li>
                    </ol>

                    <ul className="flex-direction-nav">
                        <li className="flex-nav-prev">
                            <Link className="flex-prev" onClick={() => changeActiveSlide(-1)} to={"#"} style={{ background: `url(${SliderArrows}) no-repeat left top` }}>Previous</Link>
                        </li>
                        <li className="flex-nav-next">
                            <Link className="flex-next" onClick={() => changeActiveSlide(1)} to={"#"} style={{ background: `url(${SliderArrows}) no-repeat right bottom` }}>Next</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Slider;