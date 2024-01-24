import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import IRepositories from "../_scripts/IRepositories";
import { RepositoriesTestData } from "../_scripts/RepositoriesTestData";

interface ExpectedContext {
	Repositories: IRepositories[] | null;
	setRepositories: React.Dispatch<SetStateAction<IRepositories[]>> | null;
}

const RepositoriesContext = createContext<ExpectedContext | null>(null);
export default function RepositoriesProvider({ children }: { children: ReactNode }) {
	const [Repositories, setRepositories] = useState<IRepositories[]>(RepositoriesTestData);
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
