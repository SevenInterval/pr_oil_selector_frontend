import { useEffect, useRef, useState } from "react";
import { TailSpin } from 'react-loader-spinner';
import BackButtonImage from "../../images/back-button.png";
import CarImage from '../../images/car-side-solid.svg';
import VanImage from '../../images/van-shuttle-solid.svg';
import TruckImage from '../../images/truck-moving-solid.svg';
import MotorcycleImage from '../../images/motorcycle-solid.svg';
import TractorImage from '../../images/tractor-solid.svg';
import PickupImage from '../../images/person-digging-solid.svg';
import FancyBox from "../../components/FancyBox";
import { ypvds310w40Big, ypvds310w40Lt } from "../../images/products";
import { Link } from "react-router-dom";

const Recommendations = (props) => {
    const { vehicleId, handleVehicleId, categoryId } = props;
    const isFetchRecommend = useRef(true);
    const [loadingRecommend, setLoadingRecommend] = useState(false);
    const [componentList, setComponentList] = useState([]);
    const [vehicleValue, setVehicleValue] = useState({});
    const [activeComponent, setActiveComponent] = useState(null);

    useEffect(() => {
        if (isFetchRecommend.current) {
            fetchRecommendationsList(vehicleId);
            isFetchRecommend.current = false;
        }
    }, [vehicleId]);

    const fetchRecommendationsList = async (vehicleId) => {
        setLoadingRecommend(true);
        //Prod Url: `https://pristaoilapp.azurewebsites.net/rest/pristaoil/recommendations/vehicleid/`
        //Local Url: `http://localhost:8080/rest/pristaoil/recommendations/vehicleid/`
        await fetch(`http://localhost:8080/rest/pristaoil/recommendations/vehicleid/` + vehicleId, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                // eslint-disable-next-line no-unused-expressions
                data.recommendationDto && data.recommendationDto.components ? setComponentList(data.recommendationDto.components) : null;
                // eslint-disable-next-line no-unused-expressions
                data.recommendationDto && data.recommendationDto.vehicle ? setVehicleValue(data.recommendationDto.vehicle) : null;
                // eslint-disable-next-line no-unused-expressions
                data.recommendationDto && data.recommendationDto.components ? setActiveComponent(data.recommendationDto.components[0].code) : null;
                setLoadingRecommend(false);
                return data;
            })
            .catch((res, error) => {
                res.json(error);
                res.status(405).end();
                setLoadingRecommend(false);
            })
    }

    return (
        <>
            <div style={{ marginTop: "20px" }}>
                {loadingRecommend ?
                    <TailSpin
                        visible={true}
                        height="60"
                        width="60"
                        color="#ffdd00"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{ marginLeft: "40%", marginTop: "10%" }}
                        wrapperClass=""
                    /> :
                    <>
                        {vehicleValue &&
                            <div>
                                {categoryId === 1 && <span><img src={CarImage} alt='CarImage' title='CarImage' loading='eager' width={30} height={30} /></span>}
                                {categoryId === 2 && <span><img src={VanImage} alt='VanImage' title='VanImage' loading='eager' width={30} height={30} /></span>}
                                {categoryId === 3 && <span><img src={TruckImage} alt='TruckImage' title='TruckImage' loading='eager' width={30} height={30} /></span>}
                                {categoryId === 4 && <span><img src={MotorcycleImage} alt='MotorcycleImage' title='MotorcycleImage' loading='eager' width={30} height={30} /></span>}
                                {categoryId === 5 && <span><img src={TractorImage} alt='TractorImage' title='TractorImage' loading='eager' width={30} height={30} /></span>}
                                {categoryId === 6 && <span><img src={PickupImage} alt='PickupImage' title='PickupImage' loading='eager' width={30} height={30} /></span>}
                                <span><strong>&nbsp;&nbsp;{vehicleValue.brand}</strong> - {vehicleValue.type}</span>
                            </div>
                        }

                        {componentList &&
                            <>
                                <div className="componentDiv">
                                    <ul className="componentList">
                                        {componentList.map(component => {
                                            return (
                                                <li key={component.code}
                                                    className={component.code === activeComponent ? "componentListItem recActiveListItem" : "componentListItem"}
                                                    onClick={() => setActiveComponent(component.code)}>{component.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                {componentList.filter(component => component.code === activeComponent).map(component => {
                                    return (
                                        <div className="recommendedDiv">
                                            <h3>Prista Öneriyor</h3>
                                            <div className="product-detail">
                                                <div className="left">
                                                    <FancyBox
                                                        options={{
                                                            Carousel: {
                                                                infinite: false,
                                                            },
                                                        }}
                                                    >
                                                        <a data-fancybox="gallery" href={ypvds310w40Big} >
                                                            <img alt="productLogo" src={ypvds310w40Lt} height={196} width={150} loading='eager' title='productLogo' />
                                                        </a>
                                                    </FancyBox>
                                                </div>
                                                <div className="description">
                                                    <h2 className="hs-small">
                                                        {component.recommendedProduct && component.recommendedProduct.name ? component.recommendedProduct.name : " - "}
                                                    </h2>
                                                    <p>
                                                        <strong style={{ fontFamily: "sans-serif" }}>Tanım ve Uygulama</strong>
                                                    </p>
                                                    <p>{component.recommendedProduct && component.recommendedProduct.description ? component.recommendedProduct.description : " - "}</p><br />
                                                    <Link className="gl-link" to="/catalogue/yuksek-performansli-1/prista-shpd-vds-3-10w-40-4">
                                                        Ürün Detayını Görüntüle </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>

                        }

                        <div className="backButtonForUrunler" onClick={() => handleVehicleId(null)}>
                            <img src={BackButtonImage} alt="backButton" title="backButton" loading="eager" width={20} height={20}></img>
                            <span>&nbsp;Geri Dön</span>
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default Recommendations;