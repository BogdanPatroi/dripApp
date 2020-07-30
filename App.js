import React from "react";
import { Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Screen from "./app/components/Screen";

// Basic component
const Link = () => {
  // navigation for child
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    {/* // navigation for childs */}
    <Link />
  </Screen>
);
// Basic component
const TweetDetails = ({ route }) => (
  <Screen>
    <Text>
      TweetDetails
      {/* {route.params.id} */}
    </Text>
  </Screen>
);

// 1.
// Stack is an object
const Stack = createStackNavigator();
// Properties of Stack witch are React components:
//  Stack.Navigator;
//  Stack.Screen;

// 2.
const StackNavigator = () => (
  // 3.
  // Navigator:
  <Stack.Navigator initialRouteName="Tweet">
    {/* // 4. */}
    {/* with the screen components we can define our routes */}
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    // 5.
    // Import NavigationContainer to wrap up all of above in a container
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
