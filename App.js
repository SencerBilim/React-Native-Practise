import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/Counter';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import Reducer from './src/screens/Reducer';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Reducer" component={Reducer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
