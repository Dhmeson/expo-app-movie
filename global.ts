export const COLORS = {
	blue100: "#368BCE",
	blue400: "#305D90",
	white: "#FFFFFF",
	background: "#09090F",
	gray200: "#51535D",
	gray100: "#A0A0A0",
};
export const STYLES = {
	paddingBase: 40,
};
interface itemBase {
	url: string;
	name: string;
	like: number;
	describe: string;
	trailer?: any;
	id: string | number;
	category: "movie" | "anime" | "serie";
}
export const LIST: itemBase[] = [
	{
		describe: "assssss",
		id: 1,
		like: 0,
		category: "movie",
		name: "piratas",
		url: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
	},
	{
		describe: "ssss",
		id: 12,
		like: 0,
		category: "movie",

		name: "piratas 2",
		url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
	{
		describe: "ssss",
		id: 123,
		like: 0,
		category: "anime",

		name: "piratas 2",
		url: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
	},
];
