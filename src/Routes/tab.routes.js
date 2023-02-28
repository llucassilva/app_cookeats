import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../Pages/Home";
import Mapa from "../Pages/Mapa";

const Tab = createBottomTabNavigator();

export default function TabRoute() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
  );
}
