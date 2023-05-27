import { ScrollView, StyleSheet } from "react-native";
import { LIST } from "../../global";
import { Item } from "./Item";
export function ScrollConteiner() {
	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContent}
			horizontal={true}>
			{LIST.map((data) => {
				return (
					<Item key={data.id} describe={data.describe} url={data.url}></Item>
				);
			})}
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	scrollViewContent: {
		paddingLeft: 40,
		paddingRight: 80,
		flexDirection: "row",
		gap: 20,
	},
});
