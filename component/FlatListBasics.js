import { ScrollView } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    paddingTop: 15,
    backgroundColor: "red",
  },
  item: {
    fontSize: 30,
    height: 100,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Text style={styles.item}> Pizza </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />
        <Text style={styles.item}> Burger </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />
        <Text style={styles.item}> Pizza </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />

        <Text style={styles.item}> Pizza </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />
        <Text style={styles.item}> Pizza </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />
        <Text style={styles.item}> Pizza </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzhEaz-ibDDJydKSbmMRpvCErYiwhhim19UE3d_wDXnW5HeRFGYkrVXWO-cfzZtlRd5M&usqp=CAU",
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FlatListBasics;
