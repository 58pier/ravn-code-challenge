import { Data, PersonStructureInfo } from "../types/data.type";
import { People, ResponseAPI } from "../types/response.type";
import { getPlanetaName, getSpeciesNames, getVehicleNames } from "./getRequests";

export const transformRequest = (response: ResponseAPI): Promise<Data> => {
    const { results, next } = response;
    const data: Data = {
        nextUrl: next,
        data: [],
    };

    const transformPromises = results.map((person) => transformPerson(person));

    return Promise.all(transformPromises).then((personInfos) => {
        data.data = personInfos;
        return data;
    });
};

export const transformPerson = (people: People): Promise<PersonStructureInfo> => {
    const {
        name,
        birth_year,
        eye_color,
        hair_color,
        skin_color,
        homeworld: planet,
        vehicles,
        species,
    } = people;

    const vehiclePromise = getVehicleNames(vehicles);
    const speciesPromise = getPersonSpecies(species);
    const planetPromise = getPlanetInfo(planet);

    return Promise.all([vehiclePromise, speciesPromise, planetPromise]).then(
        ([vehiclesInfo, personRace, planetInfo]) => {
        const person: PersonStructureInfo = {
            generalInfo:{
                name: {
                    label: 'Name',
                    value: name,
                },
                race: {
                    value: personRace,
                    label: 'Race'
                },
                planet: {
                    value: planetInfo,
                    label: "Planet"
                },
                eye_color:{
                    value: eye_color,
                    label: "Eye Color"
                },
                hair_color:{
                    value: hair_color,
                    label: "Hair Color"
                },
                skin_color:{
                    value: skin_color,
                    label: "Skin Color"
                },
                birth_year: {
                    value: birth_year,
                    label: "Birth Year"
                }

            },
            vehiclesInfo: vehiclesInfo,
        };
        return person;
        }
    );
};

const getPersonSpecies = (speciesUrls: string[]) => {
    if (speciesUrls.length === 0) {
        return Promise.resolve('Human');
    }
    return getSpeciesNames(speciesUrls);
};

const getPlanetInfo = (planetUrl: string): Promise<string> => {
    return getPlanetaName(planetUrl);
};

/*              {
                    label: 'Name',
                    value: name,
                },
                {
                    value: personRace,
                    label: 'Race'
                },
                {
                    value: planetInfo,
                    label: "Planet"
                },
                {
                    value: eye_color,
                    label: "Eye Color"
                },
                {
                    value: hair_color,
                    label: "Hair Color"
                },
                {
                    value: skin_color,
                    label: "Skin Color"
                },
                {
                    value: birth_year,
                    label: "Birth Year"
                } */