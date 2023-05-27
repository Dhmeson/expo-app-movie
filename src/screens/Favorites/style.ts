import { StyleSheet } from "react-native";
import { COLORS } from "../../../global";
export const styles = StyleSheet.create({
	conteiner: {
		flex: 1,
		width: "100%",
		backgroundColor: "black",
		padding: 10,
	},
	infoBalance: {
		width: "100%",
		minHeight: 100,
		backgroundColor: COLORS.blue100,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		borderRadius: 10,
	},
	balanceText: {
		color: COLORS.white,
		fontSize: 30,
	},
	infoWallet: {
		width: "100%",
		marginTop: 20,
		minHeight: 100,
		backgroundColor: COLORS.blue100,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
		borderRadius: 10,
	},
	inputWalletDefault: {
		borderWidth: 1,
		borderColor: "white",
		width: "80%",
		padding: 5,
		borderRadius: 5,
		color: "white",
	},
	editView: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
		padding: 10,
	},
	textWallet: {
		fontSize: 30,
		color: "white",
		marginTop: 5,
	},
});
