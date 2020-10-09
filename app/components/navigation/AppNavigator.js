import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Platform} from 'react-native';

import NewsList from "../lists/NewsList";
import Home from "../screens/Home";
import NewsDetails from "../screens/NewsDetails";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator  mode="modal"  screenOptions={{
       headerBackTitleVisible: false,
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: 'white',
      headerLeftContainerStyle:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:'rgba(92,90,91,0.7)',
        alignItems: 'center',
        marginLeft:10,
        paddingLeft: Platform.OS === 'android' ? 0 : 10 
        
      }
    }} >
      <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="newsdetails" component={NewsDetails} />
      <Stack.Screen name="newslist" component={NewsList}  />
    </Stack.Navigator>
  );
};

export default AppNavigator;
