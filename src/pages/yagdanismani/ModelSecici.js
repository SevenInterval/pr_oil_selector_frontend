import { useEffect, useRef, useState } from "react";
import DropdownList from "react-widgets/DropdownList";
import fillYearList from "../../utility/fillYearList";

const ModelSecici = (props) => {
    const { categoryId, handleVehicleId } = props;

    const isFetchBrand = useRef(true);
    const [brandList, setBrandList] = useState([]);
    const [brandValue, setBrandValue] = useState(null);
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    const [loadingBrand, setLoadingBrand] = useState(false);

    const isFetchModel = useRef(false);
    const [modelList, setModelList] = useState([]);
    const [modelValue, setModelValue] = useState(null);
    const [selectedModelId, setSelectedModelId] = useState(null);
    const [loadingModel, setLoadingModel] = useState(false);

    const isFetchVehicle = useRef(false);
    const [vehicleList, setVehicleList] = useState([]);
    const [yearList, setYearList] = useState([]);
    const [yearValue, setYearValue] = useState(null);

    useEffect(() => {
        if (isFetchBrand.current) {
            fetchBrandList(categoryId);
            isFetchBrand.current = false;
        }
        if (isFetchModel.current) {
            fetchModelList(selectedBrandId);
            isFetchModel.current = false;
        }
        if (isFetchVehicle.current) {
            fetchVehicleList(selectedModelId);
            isFetchVehicle.current = false;
        }

    }, [categoryId, selectedBrandId, selectedModelId]);

    const fetchBrandList = async (categoryId) => {
        setLoadingBrand(true);
        //Prod Url: `https://pristaoilapp.azurewebsites.net/rest/pristaoil/brand/categoryid/`
        //Local Url: `http://localhost:8080/rest/pristaoil/brand/categoryid/`
        await fetch(`http://localhost:8080/rest/pristaoil/brand/categoryid/` + categoryId, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                // eslint-disable-next-line no-unused-expressions
                data.brandList ? setBrandList(data.brandList) : null;
                setLoadingBrand(false);
                return data;
            })
            .catch((res, error) => {
                res.json(error);
                res.status(405).end();
                setLoadingBrand(false);
            })
    }

    const fetchModelList = async (selectedBrandId) => {
        setLoadingModel(true);
        //Prod Url: `https://pristaoilapp.azurewebsites.net/rest/pristaoil/model/brandid/`
        //Local Url: `http://localhost:8080/rest/pristaoil/model/brandid/`
        await fetch(`http://localhost:8080/rest/pristaoil/model/brandid/` + selectedBrandId, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                // eslint-disable-next-line no-unused-expressions
                data.modelList ? setModelList(data.modelList) : null;
                setLoadingModel(false);
                return data;
            })
            .catch((res, error) => {
                res.json(error);
                res.status(405).end();
                setLoadingModel(false);
            })
    }

    const fetchVehicleList = async (selectedModelId) => {
        //Prod Url: `https://pristaoilapp.azurewebsites.net/rest/pristaoil/vehicle/modelid/`
        //Local Url: `http://localhost:8080/rest/pristaoil/vehicle/modelid/`
        await fetch(`http://localhost:8080/rest/pristaoil/vehicle/modelid/` + selectedModelId, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((data) => {
                // eslint-disable-next-line no-unused-expressions
                data.vehicleList ? setVehicleList(data.vehicleList) : null;
                data.vehicleList ? setYearList(fillYearList(data.vehicleList)) : setYearList([]);
                return data;
            })
            .catch((res, error) => {
                res.json(error);
                res.status(405).end();
            })
    }

    const changeBrand = (value) => {
        setBrandValue(value);
        setSelectedBrandId(value.brandId);
        setSelectedModelId(null);
        setModelValue(null);
        setVehicleList([]);
        setYearValue(null);
        setYearList([]);
        isFetchModel.current = true;
    }

    const changeModel = (value) => {
        setModelValue(value);
        setSelectedModelId(value.modelId);
        setYearValue(null);
        setYearList([]);
        isFetchVehicle.current = true;
    }

    const changeYear = (value) => {
        setYearValue(value);
    }

    return (
        <>
            <div style={{ marginTop: "20px" }}>
                <div style={{ width: "35%", display: "inline-block" }}>
                    <DropdownList
                        data={brandList}
                        value={brandValue}
                        textField='name'
                        placeholder="Marka"
                        busy={loadingBrand}
                        onChange={(value) => changeBrand(value)}

                    />
                </div>
                <div style={{ width: "35%", display: "inline-block", marginLeft: "12px" }}>
                    <DropdownList
                        data={modelList}
                        value={modelValue}
                        textField='model'
                        placeholder="Model"
                        busy={loadingModel}
                        disabled={selectedBrandId === null}
                        onChange={(value) => changeModel(value)}

                    />
                </div>
                <div style={{ width: "20%", display: "inline-block", marginLeft: "12px" }}>
                    <DropdownList
                        data={yearList}
                        value={yearValue}
                        placeholder="Yıl"
                        disabled={selectedModelId === null}
                        onChange={(value) => changeYear(value)}
                    />
                </div>
            </div>
            {(vehicleList.length > 0 && selectedModelId) ?
                <table border="1" cellPadding="0" cellSpacing="0" className="vehicleListTable" style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            <th className="vehicleListTableHeader" style={{ width: "30%"}}>Model</th>
                            <th className="vehicleListTableHeader" style={{ width: "30%"}}>Açıklama</th>
                            <th className="vehicleListTableHeader" style={{ width: "15%"}}>Yıl</th>
                            <th className="vehicleListTableHeader" style={{ width: "20%"}}></th>
                        </tr>
                        {vehicleList && vehicleList.filter(vehicle =>  !yearValue || (vehicle.yearFrom <= yearValue && vehicle.yearTo >= yearValue)).map(vehicle => {
                            return (
                                <tr className="vehicleListTableElement" onClick={() => handleVehicleId(vehicle.vehicleId)} key={vehicle.vehicleId}>
                                    <td className="vehicleListTableCell" >{modelValue.model ? modelValue.model : " - "}</td>
                                    <td className="vehicleListTableCell" >{vehicle.type ? vehicle.type : " - "}</td>
                                    <td className="vehicleListTableCell" >{vehicle.yearFrom} - {vehicle.yearTo}</td>
                                    <td className="vehicleListTableCell" >
                                        <button className="yellow-button-recommend" onClick={() => handleVehicleId(vehicle.vehicleId)}>Önerilen Yağlar &rsaquo;</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> :
                <div style={{ marginTop: "24px", height: "300px" }}>
                    <p>Listeden bir marka ve model seçiniz.</p>
                </div>
            }

        </>
    )
}

export default ModelSecici;