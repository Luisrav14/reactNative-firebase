import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import UsersList from "./screens/UsersList";
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create User Screen" component={CreateUserScreen} />
      <Stack.Screen name="UsersList" component={UsersList} />
      <Stack.Screen name="User Detail Screen" component={UserDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
