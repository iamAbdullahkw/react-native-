import { StatusBar } from "expo-status-bar";
import { Square } from "native-base";
import { StyleSheet, Text, SafeAreaView } from "react-native";
export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Pep Pep</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "yellow",
  },
  text: {
    fontSize: "35%",
  },
});
