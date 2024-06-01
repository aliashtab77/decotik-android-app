import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './src/screens/home';
import Home1 from "./src/screens/home2";
import Test from "./src/screens/test";

const Drawer = createDrawerNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={'DECOTIK'}>
        <Drawer.Screen
          name={'DECOTIK'}
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'rgb(175,30,73)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Drawer.Screen
          name={'DECOTIK2'}
          component={Home1}
          options={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: 'rgb(175,30,73)',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
