import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { COLORS } from "../../../global";

export function LoadingVideo() {
	const opacityValue = useRef(new Animated.Value(0.5)).current;

	useEffect(() => {
		const startAnimation = () => {
			Animated.loop(
				Animated.sequence([
					Animated.timing(opacityValue, {
						toValue: 0.3,
						duration: 500, // duração de 1 segundo para ir de 0 a 0.5
						useNativeDriver: false,
					}),
					Animated.timing(opacityValue, {
						toValue: 0.2,
						duration: 500, // duração de 1 segundo para ir de 0.5 a 0
						useNativeDriver: false,
					}),
				]),
			).start();
		};

		startAnimation();
	}, []);

	return (
		<Animated.View
			style={{
				width: "100%",
				height: 200,
				alignSelf: "center",
				backgroundColor: COLORS.gray100,
				position: "absolute",
				opacity: opacityValue,
				zIndex: 10,
			}}></Animated.View>
	);
}
