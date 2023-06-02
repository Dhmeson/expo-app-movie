import { ScrollView, StyleSheet } from "react-native";
import { LIST } from "../../global";
import { Item } from "./Item";
import { useContext, useMemo } from "react";
import { Context } from "../context/ManagerContext";
export function ScrollConteiner() {
	const { category } = useContext(Context);
	const SCROLLDATA = useMemo(() => {
		let newList = LIST.filter((item) => {
			return item.category == category.toString();
		});
		if (!newList) return [];
		return newList;
	}, [category]);
	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContent}
			horizontal={true}>
			{SCROLLDATA.map((data) => {
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
