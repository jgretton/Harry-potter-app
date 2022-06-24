import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
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

  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Character", { character: item })}
      >
        <View style={{ flexDirection: "row", height: "100%" }}>
          <Image
            source={{ uri: `${item.image}` }}
            style={{ width: 100, height: "100%", resizeMode: "contain" }}
          />
          <Text style={styles.title}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => <Item item={item} />;

  if (!apiData) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <FlatList data={apiData} renderItem={renderItem} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
