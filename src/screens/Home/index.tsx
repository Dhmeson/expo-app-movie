import { SafeAreaView } from "react-native";
import { styles } from "./style";
import { COLORS, STYLES } from "../../../global";
import { YStack, H3 } from "tamagui";
import { DisplayUserInfo } from "../../components/DisplayUserInfo";
import { Search } from "../../components/Search";
import { Filters } from "../../components/Filters";
import { ScrollConteiner } from "../../components/ScrollConteiner";

export function Home() {
	return (
		<SafeAreaView style={styles.conteiner}>
			<YStack backgroundColor={COLORS.background} f={1} space={5}>
				<DisplayUserInfo />
				<Search />
				<Filters />
				<H3 color={"white"} ml={STYLES.paddingBase} mt={-10} mb={5}>
					Top Movies
				</H3>
				<ScrollConteiner />
			</YStack>
		</SafeAreaView>
	);
}
