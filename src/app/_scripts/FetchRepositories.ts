import axios, { AxiosResponse } from "axios";
import IRepositories from "./IRepositories";
import { config } from "dotenv";
config();

const BackendURL = process.env.BACK_ENDAPI || "http://localhost:3001/api/repositories";

export default async function FetchRepositories() {
	const Request: AxiosResponse = await axios.get(BackendURL);
	if (Request) {
		const Data: IRepositories[] = Request.data;
		return Data;
	} else return null;
}
