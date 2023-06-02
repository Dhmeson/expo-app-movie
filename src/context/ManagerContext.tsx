import { createContext, useState } from "react";
interface ctxProps {
	category: "Movie" | "Anime" | "Serie";
	setCategory: React.Dispatch<
		React.SetStateAction<"Movie" | "Anime" | "Serie">
	>;
}
export const Context = createContext({} as ctxProps);
interface props {
	children: React.ReactNode;
}
export function ManagerContext({ children }: props) {
	const [category, setCategory] = useState<"Movie" | "Anime" | "Serie">(
		"Movie",
	);

	return (
		<Context.Provider value={{ category, setCategory }}>
			{children}
		</Context.Provider>
	);
}
