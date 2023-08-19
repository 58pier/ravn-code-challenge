import { Gender, People } from "./response.type";

export interface Data {
    nextUrl: string;
    data: PersonStructureInfo[];
}

export interface PersonStructureInfo {
    generalInfo: GeneralInfo;
    vehiclesInfo: string[];
}

export interface GeneralInfo {
    name:       string;
    race:       string;
    planet:     string;
    eye_color:  string;
    hair_color: string;
    skin_color: string;
    birth_year: string;
}

