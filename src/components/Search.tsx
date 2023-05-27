import { XStack } from "tamagui";
import { COLORS, STYLES } from "../../global";
import { Search as SearchIcon } from "@tamagui/lucide-icons";
import { Input } from "tamagui";
export function Search() {
	return (
		<XStack
			h={60}
			backgroundColor={"#0e0f0e"}
			ml={STYLES.paddingBase}
			mr={STYLES.paddingBase}
			borderRadius={20}
			borderWidth={1}
			borderColor={COLORS.gray100}
			ai={"center"}
			pl={12}
			mt={5}
			overflow='hidden'>
			<SearchIcon color='white' size={30} />
			<Input
				w={"100%"}
				borderWidth={0}
				color={"white"}
				placeholder='busque pelo nome'
				backgroundColor={"#0e0f0e"}
			/>
		</XStack>
	);
}
