import { ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import IRepositories from "../_scripts/IRepositories";
import { RepositoriesTestData } from "../_scripts/RepositoriesTestData";
import FetchRepositories from "../_scripts/FetchRepositories";
import { error } from "console";

interface ExpectedContext {
	Repositories: IRepositories[] | null;
	setRepositories: React.Dispatch<SetStateAction<IRepositories[] | null>> | null;
}

const RepositoriesContext = createContext<ExpectedContext | null>(null);
export default function RepositoriesProvider({ children }: { children: ReactNode }) {
	const [Repositories, setRepositories] = useState<IRepositories[] | null>(null);
	async function Fetch() {
		try {
			const RepositoryData: IRepositories[] | null = await FetchRepositories();
			if (RepositoryData) setRepositories(RepositoryData);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		Fetch();
	}, []);
	return (
		<RepositoriesContext.Provider value={{ Repositories, setRepositories }}>
			{children}
		</RepositoriesContext.Provider>
	);
}

export function useRepositoriesContext() {
	const context = useContext(RepositoriesContext);
	if (context == null) throw new Error("Repositories context be nulling");
	return context;
}
