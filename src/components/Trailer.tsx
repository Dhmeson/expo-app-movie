import { XStack, H3, YStack, H5 } from "tamagui";
import { PlayCircle, Star } from "@tamagui/lucide-icons";
import { Video } from "expo-av";
import { View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
export function Trailer() {
	const [play, setPlay] = useState(false);
	function StartVideo() {
		setPlay(!play);
	}
	return (
		<YStack
			w={"100%"}
			h={"50%"}
			ai={"center"}
			jc={"center"}
			position='relative'>
			<TouchableOpacity
				onPress={StartVideo}
				style={{ width: "100%", height: "100%" }}>
				<Video
					source={require("../../assets/trailers/guardioes3.mp4")}
					rate={1.0}
					volume={1.0}
					isMuted={false}
					//resizeMode='cover'
					shouldPlay={play}
					//isLooping
					style={{ width: "100%", height: "100%" }}
				/>
			</TouchableOpacity>

			{!play && (
				<View style={{ position: "absolute" }}>
					<TouchableOpacity onPress={StartVideo}>
						<PlayCircle size={"$8"} color='white' />
					</TouchableOpacity>
				</View>
			)}
			<YStack pos={"absolute"} bottom={10}>
				<H3 color={"white"}>Money Heist : Part 5</H3>
				<XStack ai={"center"} jc={"center"} space={5}>
					<H5 color={"white"}>1000</H5>
					<Star color={"yellow"} />
				</XStack>
			</YStack>
		</YStack>
	);
}
