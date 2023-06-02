import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import config from "./tamagui.config";
import { Routes } from "./src/routes/Routes";
import { ManagerContext } from "./src/context/ManagerContext";

export default function App() {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});
	if (!loaded) {
		return null;
	}
	return (
		<ManagerContext>
			<TamaguiProvider config={config}>
				<Routes />
			</TamaguiProvider>
		</ManagerContext>
	);
}
