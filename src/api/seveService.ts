import { SeveForm } from "../components/Form";
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

export const getAllSeveDetails = async () :Promise<any>=>{
    const response = await apiClient.get<any>('/seve/view_all_seves');
    return response.data;
}

export const saveSeveDetails = async (payload:SeveForm) :Promise<SeveForm>=>{
    const response = await apiClient.post<SeveForm>('/seve/submit',payload);
    return response.data;
}

