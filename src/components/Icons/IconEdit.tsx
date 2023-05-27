// icon:nano | Simple Icons https://simpleicons.org | SimpleIcons.org
import * as React from "react";
import { Image } from "react-native";
import { Asset } from "expo-asset";

interface imageProps {
	width: number;
	height: number;
}
function IconCopy({ height, width }: imageProps) {
	const nano = Asset.fromModule(
		require(`${"../../../assets/images/" + "copy.png"}`),
	).uri;

	return <Image source={{ uri: nano }} style={{ width, height }} />;
}

export default IconCopy;
