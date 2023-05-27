import { YStack } from "tamagui";
import { H6 } from "tamagui";
interface props {
	children: React.ReactNode;
	describe: string;
}
export function FiltersButton({ children, describe }: props) {
	return (
		<YStack h={70} ai={"center"}>
			{children}
			<H6 color={"white"}>{describe}</H6>
		</YStack>
	);
}
