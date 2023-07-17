import { Button, Text } from "react-native";
import { NativeBaseProvider } from "native-base";
import Header from "./component/Header";
import FlatListBasics from "./component/FlatListBasics";
import Lisst from "./component/Lisst";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <FlatListBasics />
      {/* <Text>Hello </Text> */}
      <Lisst />
    </NativeBaseProvider>
  );
}
