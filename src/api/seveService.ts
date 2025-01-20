import apiClient from "./axios";

export interface ReferentialObject{
    id:number;
    name:string;
    createdDate:string;
    updatedDate:string;
    amount?:string
}

export interface Referential {
    nakshatras:ReferentialObject[];
    gothras:ReferentialObject[];
    rashis:ReferentialObject[];
    seves:ReferentialObject[];
}

export const getAllSeve = async () :Promise<Referential>=>{
    const response = await apiClient.get<Referential>('/auth/seve');
    return response.data;
}

