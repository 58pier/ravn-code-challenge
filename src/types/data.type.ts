export interface Data {
    nextUrl: string;
    data: PersonStructureInfo[];
}

export interface PersonStructureInfo {
    generalInfo: GeneralInfo;
    vehiclesInfo: string[];
}

export interface GeneralInfo {
    name:       GeneralInfoItem;
    race:       GeneralInfoItem;
    planet:     GeneralInfoItem;
    eye_color:  GeneralInfoItem;
    hair_color: GeneralInfoItem;
    skin_color: GeneralInfoItem;
    birth_year: GeneralInfoItem;
}

export interface GeneralInfoItem {
    label: 'Name' | 'Race' | 'Planet' | 'Eye Color' | 'Hair Color' | 'Skin Color' | 'Birth Year';
    value: string;
}