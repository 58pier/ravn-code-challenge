import { transformRequest } from "./requests.service";

export const fetchPeople = (url:string) => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => transformRequest(data))
        .then((dataPrepared) => {
            console.log(dataPrepared);
            return dataPrepared;
        });
};

export const getPlanetaName = (url:string) => {
    return fetch(url)
        .then((planetName) => planetName.json())
        .then((data) => {
            const { name } = data;
            return name;
        });
};

export const getVehicleNames = (vehiclesUrls:string[]):Promise<string[]> => {
    const promises = vehiclesUrls.map((url) =>
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const { name: vehicleName } = data;
                return vehicleName;
            })
    );

    return Promise.all(promises);
};


export const getSpeciesNames = (speciesUrls:string[]) => {
    const promises = speciesUrls.map((url) =>
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const { name: speciesName } = data;
                return speciesName;
            })
    );

    return Promise.all(promises).then((speciesNames) => speciesNames.join(', '));
};