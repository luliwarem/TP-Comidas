import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/login.js";
import Platos from "./src/components/platos.js"

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>TP Comidas</Text>
        <Platos></Platos>
        <StatusBar style="auto" />
      </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});
