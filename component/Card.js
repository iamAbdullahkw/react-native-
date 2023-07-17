import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ name, time, rating, image }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 30,
          color: "white",
        }}
      >
        name: {name} {"\n"}rating: {rating} {"\n"}delivery time: {time}
      </Text>
      <Image
        width={200}
        height={200}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
