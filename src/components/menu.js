import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Formik from "formik"

const Menu = () => {
  const { contextState, setContextState } = useContextState();
  const [busqueda, setBusqueda] = useState("")
  const [resultadosBusqueda, setResultadosBusqueda] = useState([])

/*   useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7f9c1771b87f49069460cb35d73b507c`
      ); // acá hacemos la consulta de axios a la API
      console.log(response.data.results);
      setResultadosBusqueda(response.data.results);
    }
    fetchData(); // ejecutamos la función de búsqueda de datos
  }, [busqueda]); */


  const onChangeHandler = async (values) => {
    setBusqueda(values)
    if(values.lenght >= 2){
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=7f9c1771b87f49069460cb35d73b507c`
          ); // acá hacemos la consulta de axios a la API
          console.log(response.data.results);
          setResultadosBusqueda(response.data.results);
    }
}

  

  return(
      <View>
        <TextInput
          style={styles.input}
          value={busqueda}
          onChange={onChangeHandler}
          placeholder="Busqueda"
        />
      </View>

  )
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
    }
})

export default Menu;
