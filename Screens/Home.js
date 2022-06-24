import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";

import { fetchCharacters } from "../api/api";

function Home({ navigation }) {
  const [apiData, setApiData] = useState();

  const data_chatacters = async () => {
    const data = await fetchCharacters();

    const filter_data = data.slice(0, 10);

    setApiData(filter_data);
  };

  useEffect(() => {
    data_chatacters();
  }, []);

  const Item = ({ name, image }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <Image source={{ uri: `${image}` }} style={{ width: 50, height: 50 }} />
    </View>
  );

  const renderItem = ({ item }) => <Item name={item.name} image={item.image} />;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text> Hello</Text>

      <FlatList data={apiData} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
