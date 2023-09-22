import { useEffect, useState } from "react";
import { useContextState } from "../contextState";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Menu = () => {
  const { contextState, setContextState } = useContextState();
  
  const Eliminar = (id) => {
    setContextState({ newValue: id, type: "ELIMINAR_MENU" });
  };

    const Item = ({ title, image, id, healthScore, pricePerServing }) => (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.text}>HealthScore: {healthScore} </Text>
        <Text style={styles.text}>Price per Serving: {pricePerServing} </Text>
        <TouchableOpacity
          style={styles.botoncito}
          onPress={() => Eliminar(id)}
        >
          <Text>Eliminar</Text>
        </TouchableOpacity>
      </View>
    );

    useEffect(() => {
      if(contextState.token == ""){
        alert("No hay token, por favor vuelva a iniciar sesion")
        navigation.navigate("Login")
      }
    }, []);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={contextState?.menu}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            image={item.image}
            id={item.id}
            healthScore={item.healthScore}
            pricePerServing={item.pricePerServing}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.title}>Precio total: {contextState.menu.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerServing, 0)}</Text>
      <Text style={styles.title}>HealthScore promedio: {contextState.menu.reduce((accumulator, currentValue) => accumulator + currentValue.healthScore, 0)/(contextState.menu.length || 1)}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 15,
    marginVertical:5
  },

  title: {
    fontSize: 17,
    marginVertical: 15,
  },
  botoncito: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 10,
    fontFamily: "sans-serif",
    fontSize: 15,
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
});

export default Menu;
