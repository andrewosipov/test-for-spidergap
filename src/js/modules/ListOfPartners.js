function ListOfPartners(data, centralOffice) {
    const radiusEarth = 6371.210; // kilometers
    const maxDistance = 200; // kilometers
    const partdersData = data.map(item => {
        // rewrite array of offices
        item.offices = item.offices.map(office => {
            const newOffice = office;
            // rewrite coordinates
            newOffice.coordinates = {
                lat: newOffice.coordinates.split(',')[0],
                lng: newOffice.coordinates.split(',')[1]
            };
            newOffice.distance =
                Math.acos(
                    Math.sin(centralOffice.lat) * Math.sin(newOffice.coordinates.lat) +
                    Math.cos(centralOffice.lat) * Math.cos(newOffice.coordinates.lat) * Math.cos(centralOffice.lng - newOffice.coordinates.lng)
                ) * radiusEarth;
            return newOffice;
        });
        return item;
    });

    const result = [];
    partdersData.forEach(partner => {
        // select near offieces
        const filteredOffices = partner.offices.filter(office => {
            return office.distance <= maxDistance;
        });
        // if there are such offices insert them in result array
        if(filteredOffices.length) {
            const addresses = filteredOffices.map(office => (office.address));
            result.push({ company: partner.organization, offices: addresses.join(' | ') })
        }
    });
    // sort the result array by company name
    result.sort((companyA, companyB) => {
        return companyA.company.localeCompare(companyB.company);
    });
    // transform result array to Company: <> , offices: <>
    return result.map(company => (`Company: ${company.company}, offices: ${company.offices}`));
}