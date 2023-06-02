import { XStack, YStack, H5, H6, Square, H3, Paragraph } from "tamagui";
import { Star, ArrowBigLeft } from "@tamagui/lucide-icons";
import { ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../../../global";
import { YoutubeVideo } from "../../components/YoutubeVideo";
import { useNavigation } from "@react-navigation/native";

export function Details() {
	const navigation = useNavigation();
	return (
		<YStack f={1} bg={COLORS.background}>
			<TouchableOpacity
				style={styles.arrowLeft}
				onPress={() => navigation.goBack()}>
				<Square pos={"absolute"} ml={5}>
					<ArrowBigLeft color='white' size={40} />
				</Square>

				<H6 color={"white"} f={1} textAlign='center'>
					Ir Ao Menu Inicial
				</H6>
			</TouchableOpacity>

			<ScrollView style={{ flex: 1 }}>
				<YoutubeVideo />
				<YStack width={"100%"} ai={"center"} jc={"center"}>
					<H5 color={"white"}>GUARDIOEs DA GALAXIA 3</H5>
					<XStack space={5}>
						<H6 color={"white"}>110000</H6>
						<Star color={"white"}></Star>
					</XStack>
					<TouchableOpacity style={{ width: "100%" }}>
						<XStack
							bg={"gray"}
							h={50}
							mt={5}
							ml={24}
							mr={24}
							borderRadius={5}
							ai={"center"}
							jc={"center"}>
							<H5 color={"white"} w={"80%"} fontWeight={"700"}>
								Adicione a sua lista
							</H5>
							<Square ai={"center"}>
								<Star color='yellow' size={30} />
							</Square>
						</XStack>
					</TouchableOpacity>
					<YStack pl={24} pr={24} mt={10}>
						<H3 color={COLORS.gray100} opacity={0.5}>
							Descrição
						</H3>
						<H6 color={"white"}>
							Após salvar o reino do mal e da destruição nas mãos do casal
							poderoso mais terrível de Exandria, Vox Machina deve salvar o
							mundo novamente - desta vez, de um sinistro grupo de dragões
							conhecido como Chroma Conclave. Após salvar o reino do mal e da
							destruição nas mãos do casal poderoso mais terrível de Exandria,
							Vox Machina deve salvar o mundo novamente - desta vez, de um
							sinistro grupo de dragões conhecido como Chroma Conclave.
						</H6>
					</YStack>
				</YStack>
			</ScrollView>
		</YStack>
	);
}
const styles = StyleSheet.create({
	arrowLeft: {
		width: "90%",
		flexDirection: "row",
		alignItems: "center",
		alignSelf: "center",
		borderRadius: 6,
		marginTop: 20,
		marginBottom: 5,
		padding: 5,
		height: 50,
		justifyContent: "space-around",
		backgroundColor: "blue",
	},
});
