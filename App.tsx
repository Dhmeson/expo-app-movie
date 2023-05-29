import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import config from "./tamagui.config";
import { Routes } from "./src/routes/Routes";
import { createContext, useState } from "react";
interface ctxProps {
	category: "Movie" | "Anime" | "Serie";
	setCategory: React.Dispatch<
		React.SetStateAction<"Movie" | "Anime" | "Serie">
	>;
}
export const Context = createContext({} as ctxProps);

export default function App() {
	const colorScheme = useColorScheme();
	const [category, setCategory] = useState<"Movie" | "Anime" | "Serie">(
		"Movie",
	);
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});
	if (!loaded) {
		return null;
	}
	return (
		<Context.Provider value={{ category, setCategory }}>
			<TamaguiProvider config={config}>
				<Routes />
			</TamaguiProvider>
		</Context.Provider>
	);
}
