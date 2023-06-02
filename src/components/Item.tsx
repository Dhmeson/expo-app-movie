import { YStack } from "tamagui";
import { Image, TouchableOpacity } from "react-native";
import { H6 } from "tamagui";
import { useNavigation } from "@react-navigation/native";
interface props {
	url: string;
	describe: string;
}
export function Item({ describe, url }: props) {
	return (
		<YStack w={250}>
			<TouchableOpacity>
				<Image
					style={{ borderRadius: 10, height: "90%", width: "90%" }}
					source={{ uri: url }}
				/>
				<H6 color={"white"} mt={2} mb={2} h={"$1.5"} ml={2} width={"90%"}>
					{describe + "1111aaaaaaaaaaaaaaaa"}
				</H6>
			</TouchableOpacity>
		</YStack>
	);
}
