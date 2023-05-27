import { YStack } from "tamagui";
import { Image } from "react-native";
import { H6 } from "tamagui";
interface props {
	url: string;
	describe: string;
}
export function Item({ describe, url }: props) {
	return (
		<YStack w={250}>
			<Image
				style={{ borderRadius: 10 }}
				source={{
					width: 250,
					height: 250,
					uri: url,
				}}
			/>
			<H6 als={"center"} color={"white"} mt={2}>
				{describe}
			</H6>
		</YStack>
	);
}
