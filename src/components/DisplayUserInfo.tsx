import { YStack, Avatar, H4, H2, XStack } from "tamagui";
import { COLORS, STYLES } from "../../global";

export function DisplayUserInfo() {
	return (
		<XStack
			h={100}
			mt={10}
			ai={"center"}
			jc={"space-between"}
			pl={STYLES.paddingBase}
			pr={STYLES.paddingBase}>
			<YStack ai={"center"}>
				<XStack space={2}>
					<H2 color={COLORS.gray100}>Hello,</H2>
					<H2 color={COLORS.white}>Dh</H2>
				</XStack>

				<H4 color={COLORS.gray100} fontStyle='italic' mt={-4}>
					Dhhsgh ggghg
				</H4>
			</YStack>
			<Avatar circular size='$5'>
				<Avatar.Image
					accessibilityLabel='Cam'
					src='https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80'
				/>
				<Avatar.Fallback backgroundColor='$blue10' />
			</Avatar>
		</XStack>
	);
}
