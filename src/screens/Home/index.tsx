import { SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { COLORS, STYLES } from "../../../global";
import { YStack, H3, XStack, H5, Square } from "tamagui";
import { Star } from "@tamagui/lucide-icons";

import { DisplayUserInfo } from "../../components/DisplayUserInfo";
import { Search } from "../../components/Search";
import { Filters } from "../../components/Filters";
import { ScrollConteiner } from "../../components/ScrollConteiner";
import { useContext, useState } from "react";
import { Context } from "../../../App";
import { Trailer } from "../../components/Trailer";

export function Home() {
	const { category } = useContext(Context);
	const [id, setId] = useState(true);
	return (
		<SafeAreaView style={styles.conteiner}>
			{id ? (
				<YStack backgroundColor={COLORS.background} f={1} space={1}>
					<Trailer />
					<TouchableOpacity>
						<XStack
							bg={"gray"}
							h={50}
							ml={STYLES.paddingBase}
							mr={STYLES.paddingBase}
							borderRadius={5}
							ai={"center"}
							jc={"center"}>
							<H5 color={"white"} w={"80%"}>
								Add in yout list
							</H5>
							<Square ai={"center"}>
								<Star color='yellow' size={30} />
							</Square>
						</XStack>
					</TouchableOpacity>
				</YStack>
			) : (
				<YStack backgroundColor={COLORS.background} f={1} space={1}>
					<DisplayUserInfo />
					<Search />
					<Filters />
					<H3 color={"white"} ml={STYLES.paddingBase} mt={-30} mb={5}>
						{"Top " + category}
					</H3>
					<ScrollConteiner />
				</YStack>
			)}
		</SafeAreaView>
	);
}
