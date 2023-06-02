import { View } from "react-native";
import { useCallback, useState } from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import { COLORS } from "../../global";
import { LoadingVideo } from "./animations/LoadingVideo";
export function YoutubeVideo() {
	const [playing, setPlaying] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const onStateChange = useCallback((state: string) => {
		if (state === "ended") {
			setPlaying(false);
			console.log("video has finished playing!");
		}
	}, []);

	return (
		<View
			style={{
				width: "100%",
				height: 220,
				paddingLeft: 24,
				paddingRight: 24,
				marginTop: 20,
			}}>
			{!loaded && <LoadingVideo />}

			<YoutubePlayer
				height={250}
				play={playing}
				videoId={"iee2TATGMyI"}
				onChangeState={onStateChange}
				onReady={() => setLoaded(true)}
			/>
		</View>
	);
}
