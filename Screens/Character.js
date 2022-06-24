import React from "react";
import { View, Text, SafeAreaView, Image, Dimensions } from "react-native";

function Character(props) {
  const character = props.route.params.character;
  const { height, width } = Dimensions.get("window");

  console.log(character);

  if (!character) {
    return (
      <SafeAreaView>
        <Text> Loading....</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <View style={{ position: "relative" }}>
        <Image
          source={{ uri: `${character.image}` }}
          style={{
            width,
            height: "75%",
            resizeMode: "cover",
          }}
        />
        <Text>{character.name}</Text>
        <Text>{character.species}</Text>
      </View>
    );
  }
}

export default Character;
