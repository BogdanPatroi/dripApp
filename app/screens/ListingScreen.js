import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import routes from "../navigation/routes";
import colors from "../config/colors";
import listingsApi from "../api/listings";

export default function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"€" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTIING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 17,
    backgroundColor: colors.light,
  },
});
