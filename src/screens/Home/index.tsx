import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { COLORS, STYLES } from "../../../global";
import { YStack, H3, XStack, H5, Square } from "tamagui";
import { DisplayUserInfo } from "../../components/DisplayUserInfo";
import { Search } from "../../components/Search";
import { Filters } from "../../components/Filters";
import { ScrollConteiner } from "../../components/ScrollConteiner";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ManagerContext";
import { Details } from "../Details/Details";
import {
	createStackNavigator,
	TransitionPresets,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();
export function Home() {
	const [opendetails, setOpenDetails] = useState(true);
	//const [detailsId, setDetailsId] = useState("");

	return (
		<SafeAreaView style={styles.conteiner}>
			<Stack.Navigator
				initialRouteName='HomePage'
				screenOptions={{
					headerShown: false,
					gestureEnabled: true,
					...TransitionPresets.SlideFromRightIOS,
					transitionSpec: {
						open: {
							animation: "timing",
							config: {
								duration: 300, // Ajuste o tempo da animação aqui (em milissegundos)
							},
						},
						close: {
							animation: "timing",
							config: {
								duration: 500, // Ajuste o tempo da animação aqui (em milissegundos)
							},
						},
					},
				}}>
				<Stack.Screen name='Details' component={Details} />
				<Stack.Screen name='HomePage' component={HomePage} />
			</Stack.Navigator>
		</SafeAreaView>
	);
}
function HomePage() {
	const { category } = useContext(Context);
	const navigation = useNavigation();

	const goDetailsPage = () => {
		navigation.navigate("Details");
	};

	return (
		<YStack backgroundColor={COLORS.background} f={1} space={1}>
			<DisplayUserInfo />
			<TouchableOpacity onPress={() => goDetailsPage()}>
				<H5>test</H5>
			</TouchableOpacity>
			<Search />
			<Filters />
			<H3 color={"white"} ml={STYLES.paddingBase} mt={-30} mb={5}>
				{"Top " + category}
			</H3>
			<ScrollConteiner />
		</YStack>
	);
}
