const fillYearList = (vehicleList) => {
    let minimumYear = vehicleList[0].yearFrom;
    let maximumYear = vehicleList[0].yearTo;

    vehicleList.forEach(vehicle => {
        if (vehicle.yearFrom && vehicle.yearFrom < minimumYear) {
            minimumYear = vehicle.yearFrom;
        }
        if (vehicle.yearTo && vehicle.yearTo > maximumYear) {
            maximumYear = vehicle.yearTo;
        }
    });

    let yearList = [];
    while (minimumYear <= maximumYear) {
        yearList.push(minimumYear);
        minimumYear++;
    }
    return yearList;
}

export default fillYearList;