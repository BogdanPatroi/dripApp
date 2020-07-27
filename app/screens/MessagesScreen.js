import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import colors from "../config/colors";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

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
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
