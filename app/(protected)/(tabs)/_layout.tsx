import Tabsicon from "@/components/Tabsicon";
import { colors } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function 
TabsLayout() {
return (<Tabs screenOptions={{
    tabBarInactiveTintColor: colors.dark,
    tabBarActiveTintColor: colors.yellow,
}}>
        <Tabs.Screen name="index" options={{ title: "Home",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="home"/> }} />

            
        <Tabs.Screen name="menu" options={{ title: "Menu",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="bars"/> }} />

            
        <Tabs.Screen name="more" options={{ title: "More",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="amazon"/> }} />

            
        <Tabs.Screen name="account" options={{ title: "Account",
            tabBarIcon: ({focused, size}) => <Tabsicon focused={focused} size={size} name="user"/> }} />
            </Tabs>)
}
