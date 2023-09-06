import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList
} from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const BusquedaPlatos = () => {
  const { contextState, setContextState } = useContextState();
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const onChangeHandler = async (values) => {
    setBusqueda(values.nativeEvent.text);
    if (values.nativeEvent.text.length >= 2) {
      console.log(busqueda)
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${busqueda}&apiKey=16e51661dd5e48d3aabf05fb9a637d13`
      ); // acá hacemos la consulta de axios a la API
      console.log(response.data.results);
      setResultadosBusqueda(response.data.results);
    }
  };

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button>Agregar al M</Button>
    </View>
  );

  return (
    <View>
      <TextInput
        style={styles.input}
        onChange={onChangeHandler}
        placeholder="Busqueda"
      />
      <FlatList 
        data={resultadosBusqueda}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
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
  },
  container: {
    flex: 1,
  },
  item: {
    width: 330,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 15,
  },
});

export default BusquedaPlatos;
