import React from "react";

import Main from "./components/Main";
import FullInfo from "./components/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Layout from "./components/Layout";
import Contacts from "./components/Contacts";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Layout"}
          component={Layout}
          options={{ title: "News App" }}
        />
        <Stack.Screen
          name={"Main"}
          component={Main}
          options={{
            title: "Main",
            headerStyle: {
              backgroundColor: "#ffffff",
            },
            headerTitleStyle: {
              fontSize: 28,
              fontWeight: 500,
            },
          }}
        />
        <Stack.Screen
          name={"FullInfo"}
          component={FullInfo}
          options={{ title: "FullInfo" }}
        />
        <Stack.Screen
          name={"Contacts"}
          component={Contacts}
          options={{ title: "Contacts" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
