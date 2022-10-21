import axios, { AxiosResponse } from "axios";
import Config from "./Config/Config";

export function GetUiApiUrl(endpoint: string): string {
    return `${Config.Api}${endpoint}`;
}

export function AxiosGet<T>(uiEndpoint: string): Promise<AxiosResponse<T>> {
    return axios.get<T>(GetUiApiUrl(uiEndpoint), { withCredentials: true });
}

export function AxiosPost<Request, Response>(uiEndpoint: string, data: Request): Promise<AxiosResponse<Response>> {
    return axios.post<Response>(GetUiApiUrl(uiEndpoint), data, { withCredentials: true });
}
