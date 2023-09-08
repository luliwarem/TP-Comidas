import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const BusquedaPlatos = ({navigation}) => {
  const { contextState, setContextState } = useContextState();
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const onChangeHandler = async (values) => {
    setBusqueda(values.nativeEvent.text);
    if (values.nativeEvent.text.length >= 2) {
      console.log(busqueda);
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${busqueda}&apiKey=16e51661dd5e48d3aabf05fb9a637d13`
      ); // acá hacemos la consulta de axios a la API
      console.log(response.data.results);
      setResultadosBusqueda(response.data.results);
    }
  };

  const onPress = (id) => {
    async function getById(id) {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=16e51661dd5e48d3aabf05fb9a637d13`
      );
      console.log(response.data);
      setContextState({ newValue: response.data, type: "SET_MENU" });
    }
    getById(id);
  };

  const Item = ({ title, image, id }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: image }} />
      <TouchableOpacity style={styles.botoncito} onPress={() => onPress(id)}>
        Agregar al Menu
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChange={onChangeHandler}
        placeholder="Busqueda"
      />
      <FlatList
        data={resultadosBusqueda}
        renderItem={({ item }) => (
          <Item title={item.title} image={item.image} id={item.id} />
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.botoncito} onPress={()=>navigation.navigate("Home")}>
        <Text>Volver al menu!</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    width: 330,
    borderRadius: 20,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: 15,
    placeholderTextColor: "gray",
    marginTop:7
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
  },
  flatlist: {
  },
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
  title: {
    fontSize: 17,
    marginTop: 7,
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
    marginBottom: 10
  },
});

export default BusquedaPlatos;
