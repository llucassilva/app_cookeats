import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabRoute from './tab.routes';
import Receita from '../Pages/Receita';

const {Screen, Navigator} = createNativeStackNavigator();

export default function StackRoute() {
    return (
      <NavigationContainer>
        <Navigator initialRouteName='Tab'>
          <Screen  name="Tab" component={TabRoute}/>
          <Screen  name="Receita" component={Receita}/>
        </Navigator>
      </NavigationContainer>
    );
  }