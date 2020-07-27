import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import colors from "../config/colors";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1 title",
    description: "D1 description",
    image: require("../assets/bogdan.jpg"),
  },
  {
    id: 2,
    title: "T2 title",
    description: "D2 description",
    image: require("../assets/bogdan.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const HandleDelete = (message) => {
    // Delete the message from initialMessages array
    setMessages(messages.filter((m) => m.id !== message.id));
    // Call Backend
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => HandleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T2 title",
              description: "D2 description",
              image: require("../assets/bogdan.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
