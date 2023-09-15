import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/login.js";
import Menu from "./src/components/Menu";
import BusquedaPlatos from "./src/components/BusquedaPlatos";
import DetallePlato from "./src/components/DetallePlato.js";
import { ContextProvider } from "./src/contextState.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="BusquedaPlatos"
            component={BusquedaPlatos}
            options={{ title: "Busqueda de Platos" }}
          />
          <Stack.Screen
            name="Home"
            component={Menu}
            options={{ title: "Menu" }}
          />
          <Stack.Screen
            name="DetallePlato"
            component={DetallePlato}
            options={{ title: "Detalle Plato" }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </ContextProvider>
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
