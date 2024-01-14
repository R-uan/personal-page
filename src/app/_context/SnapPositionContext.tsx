"use client";
import { ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ContextInterface {
	CurrentPosition: number | null;
	SetCurrentPosition: React.Dispatch<SetStateAction<number>> | null;
}

const SnapPositionContext = createContext<ContextInterface | null>(null);

export default function SnapPositionProvider({ children }: { children: ReactNode }) {
	const [CurrentPosition, SetCurrentPosition] = useState(0);
	return (
		<SnapPositionContext.Provider value={{ CurrentPosition, SetCurrentPosition }}>
			{children}
		</SnapPositionContext.Provider>
	);
}

export function UseSnapPositionContext() {
	const CurrentSnapPositionContext = useContext(SnapPositionContext);
	if (CurrentSnapPositionContext == null) throw new Error("Snap Position Context is Null");
	return CurrentSnapPositionContext;
}
