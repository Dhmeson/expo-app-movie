import { XStack, YStack } from "tamagui";
import { COLORS, STYLES } from "../../global";
import { Film, BedDouble, VenetianMask } from "@tamagui/lucide-icons";
import { H5 } from "tamagui";
import { FiltersButton } from "./FilterButton";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Context } from "../context/ManagerContext";
export function Filters() {
	const { setCategory } = useContext(Context);
	return (
		<YStack
			h={150}
			backgroundColor={"#0e0f0e"}
			ml={STYLES.paddingBase}
			mr={STYLES.paddingBase}
			borderColor={COLORS.gray100}
			pl={12}
			mt={5}
			space={10}
			overflow='hidden'>
			<H5 color={"white"}>Filters</H5>
			<XStack w={"100%"} jc={"space-between"}>
				<FiltersButton describe='Movies'>
					<TouchableOpacity onPress={() => setCategory("Movie")}>
						<Film size={50} color='white' />
					</TouchableOpacity>
				</FiltersButton>

				<FiltersButton describe='Series'>
					<TouchableOpacity onPress={() => setCategory("Serie")}>
						<BedDouble size={50} color='white' />
					</TouchableOpacity>
				</FiltersButton>

				<FiltersButton describe='Animes'>
					<TouchableOpacity onPress={() => setCategory("Anime")}>
						<VenetianMask size={50} color='white' />
					</TouchableOpacity>
				</FiltersButton>
			</XStack>
		</YStack>
	);
}
