import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Buy from '../../containers/app/Buy';
import Sell from '../../containers/app/Sell';
import Profile from '../../containers/app/Profile';
import MapScreen from '../../containers/app/MapScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';
import Buydetails from '../../containers/app/Buydetails';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()


const BuyStack=()=>{
  return (
    <Stack.Navigator>

      <Stack.Screen name="Buy" component={Buy} 
      options={{
        headerShown:false
      }}
      />

      <Stack.Screen name="Buydetails" component={Buydetails} 
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen 
        options={{tabBarIcon:()=> <Entypo size={30} name="home" color="black"/>}}
         name="Home" component={BuyStack} />
        <Tab.Screen 
        options={{tabBarIcon:()=> 
          <Ionicons
            size={30}
             name="add-circle"
             color="black"/>}}
        name="Sell" component={Sell}/>

        <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="face-profile" 
           color="black"/>}}
         name="Profile" component={Profile} />

    <Tab.Screen
        options={{tabBarIcon:()=> 
        <MaterialCommunityIcons
          size={30}
           name="map" 
           color="black"/>}}
         name="Map" component={MapScreen} />
      

      </Tab.Navigator>
  );
}
