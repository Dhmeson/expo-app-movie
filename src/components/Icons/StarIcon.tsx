import React from "react";
import { View, StyleSheet } from "react-native";
import { Star } from "@tamagui/lucide-icons";

import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	Easing,
} from "react-native-reanimated";

interface props {
	focused: boolean;
}
export function AnimatedStar({ focused }: props) {
	const size = useSharedValue(focused ? 40 : 30);
	const config = {
		duration: 500,
		easing: Easing.bezier(0.5, 0.01, 0, 1),
	};
	const animatedStyle = useAnimatedStyle(() => {
		return {
			width: withTiming(size.value, config),
			backgroundColor: "transparente",
		};
	});

	return (
		<Animated.View style={[animatedStyle]}>
			<Star
				size={size.value}
				color={focused ? "white" : "gray"}
				style={[animatedStyle]}
			/>
		</Animated.View>
	);
}
