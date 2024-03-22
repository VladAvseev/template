import axios, { AxiosResponse } from "axios";

export const baseURL = "server:";

axios.defaults.baseURL = baseURL;

export const apiGet = (
	url: string,
	params?: unknown): Promise<AxiosResponse> => {
	let queryString = '?';
	if (params) {
		for (let key of Object.keys(params)) {
			queryString += `${key}=${params[key]}&`;
		} 
	}
	const urlWithQuery = url + queryString.slice(0, queryString.length - 1);
	console.log(urlWithQuery);
	return axios.get(urlWithQuery);
}

export const apiPost = (
	url: string,
	params?: unknown,
): Promise<AxiosResponse> => {
	return axios.post(url, params).then((res) => res);
};

export const apiPut = (
	url: string,
	params?: unknown,
): Promise<AxiosResponse> => {
	return axios.put(url, params).then((res) => res);
};

export const apiDelete = (
	url: string,
	params?: unknown,
): Promise<AxiosResponse> => {
	return axios.delete(url, params as any).then((res) => res);
};