import { AxiosResponse } from "axios";
import { SeveForm } from "../routes/Form";
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

export const getAllReferential = async () :Promise<Referential>=>{
    const response = await apiClient.get<Referential>('/auth/seve');
    return response.data;
}

export const getAllSeveDetails = async () :Promise<any>=>{
    const response = await apiClient.get<any>('/seve/view_all_seves');
    return response.data;
}

export const saveSeveDetails = async (payload:SeveForm) :Promise<AxiosResponse<SeveForm, any>>=>{
    const response = await apiClient.post<SeveForm>('/seve/submit',payload);
    return response;
}

