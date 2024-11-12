import { CartIcon } from "@/components/Carticon";
import Tabsicon from "@/components/Tabsicon";
import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "react-native";

export default function 
TabsLayout() {
return (
    <>
    <StatusBar barStyle='light-content'/>

<Tabs screenOptions={{
    tabBarInactiveTintColor: colors.dark,
    tabBarActiveTintColor: colors.yellow,
    headerTintColor: colors.yellow,
    headerStyle: { backgroundColor: colors.dark },
    headerRight: () => <CartIcon/>,
    tabBarHideOnKeyboard: true,
}}>
        <Tabs.Screen name="index" options={{ title: "",
        tabBarLabel: "Home",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="home"/> }} />

            
        <Tabs.Screen name="menu" options={{ title: "",
            tabBarLabel: "Menu",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="bars"/> }} />

            
        <Tabs.Screen name="more" options={{ title: "",
            tabBarLabel: "More",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="amazon"/> }} />

            
        <Tabs.Screen name="account" options={{ title: "",
            tabBarLabel: "Account",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="user"/> }} />
            </Tabs>
            </>);
};
