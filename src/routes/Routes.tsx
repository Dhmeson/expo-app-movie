import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";

import { Favorites } from "../screens/Favorites";
import { Home as HomeIcon, UserCircle2, Star } from "@tamagui/lucide-icons";
import { COLORS } from "../../global";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();
export function Routes() {
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName='home'
				screenOptions={{
					tabBarActiveTintColor: "red",
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: false,
					headerShown: false,
					tabBarItemStyle: {
						backgroundColor: COLORS.background,
					},
				}}>
				<Screen
					name='home'
					component={Home}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<HomeIcon
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
				<Screen
					name='favorites'
					component={Favorites}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<Star
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
				<Screen
					name='tasks'
					component={Home}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<UserCircle2
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

/**
 * <NavigationContainer>
			<Navigator
				initialRouteName='home'
				screenOptions={{
					tabBarActiveTintColor: "red",
					tabBarHideOnKeyboard: true,
					tabBarShowLabel: false,
					headerShown: false,
					tabBarItemStyle: {
						backgroundColor: COLORS.background,
					},
				}}>
				<Screen
					name='home'
					component={Home}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<HomeIcon
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
				<Screen
					name='favorites'
					component={Favorites}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<Star
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
				<Screen
					name='tasks'
					component={Home}
					options={{
						tabBarIcon: ({ size, color, focused }) => (
							<UserCircle2
								size={focused ? 40 : 30}
								color={focused ? COLORS.white : COLORS.gray100}
							/>
						),
					}}
				/>
			</Navigator>
		</NavigationContainer>
 */
