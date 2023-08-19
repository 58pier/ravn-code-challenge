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
            generalInfo: {
            name,
            race: personRace,
            planet: planetInfo,
            eye_color,
            hair_color,
            skin_color,
            birth_year,
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
