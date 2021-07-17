import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Post from "./screens/Post";
import Home from "./screens/Home";
import React from "react";
import Details from "./screens/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            
            headerShown: false
            
          }}
          
        />
        <Stack.Screen name="Post" component={Post} options={{
            title: "Post",
            headerShown: false
            
            
          }} />
        <Stack.Screen name="Details" component={Details} options={{
            title: "Detalle",
            headerShown: false

            
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
