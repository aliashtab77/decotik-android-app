

import React from 'react';
import {
  Text,
  View
} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "./src/screens/home";


const stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name={'DECOTIK'} component={Home} options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor:'rgb(175,30,73)',

          },
          headerTintColor:'#fff',
          headerTitleStyle:{
            fontWeight:'bold'
          },
        }}/>
      </stack.Navigator>
    </NavigationContainer>
  )

}


export default App;
