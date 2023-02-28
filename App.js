import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Pages/Home';
import Mapa from './src/Pages/Mapa';
import Receita from './src/Pages/Receita';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown:false
      }
      }>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Receita" component={Receita} />
        <Tab.Screen name="Mapa" component={Mapa} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
