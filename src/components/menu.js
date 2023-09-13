import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
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

  const Eliminar = () => {
    
  };
  const Item = ({ title, image, id, healthScore, pricePerServing }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>HealthScore: {healthScore} </Text>
      <Text>HealthScore: {pricePerServing} </Text>
      <TouchableOpacity style={styles.botoncito} onPress={() => Eliminar(id)}>
        Eliminar
      </TouchableOpacity>
      <TouchableOpacity style={styles.botoncito} onPress={() => onPress(id)}>
        Ver Detalle
      </TouchableOpacity>
    </View>
  );

  console.log(contextState?.menu);

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
    marginVertical: 5,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
});

export default Menu;
