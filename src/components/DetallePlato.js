import { useContextState } from "../contextState";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const DetallePlato = ({ route, navigation }) => {
  const { contextState, setContextState } = useContextState();
  const [platoElegido, setPlatoElegido] = useState({});

  const onPress = () => {
    if (contextState?.menu?.length >= 4) {
      alert("Ha excedido la cantidad de platos maximos en el menu!");
      return;
    }
    if (
      platoElegido.vegan &&
      contextState?.menu?.filter((item) => item.vegan).length >= 2
    )
    {
      alert("Ha excedido la cantidad de platos veganos maximos en el menu!");
      return;
    }
    if (
      !platoElegido.vegan &&
      contextState?.menu?.filter((item) => !item.vegan).length >= 2
    )
    {
      alert("Ha excedido la cantidad de platos NO veganos maximos en el menu!");
      return;
    } 
    setContextState({ newValue: platoElegido, type: "SET_MENU" });

  };

  useEffect(() => {
    const id = route.params.id;
    async function getById(id) {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=16e51661dd5e48d3aabf05fb9a637d13`
      );
      setPlatoElegido(response.data);
    }
    getById(id);
  }, []);

  useEffect(() => {
    if(contextState.token == ""){
      alert("No hay token, por favor vuelva a iniciar sesion")
      navigation.navigate("Login")
    }
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{platoElegido.title}</Text>
      <Image style={styles.image} source={{ uri: platoElegido.image }}></Image>
      <Text style={styles.text}>Health Score: {platoElegido.healthScore}</Text>
      <Text style={styles.text}>Precio: {platoElegido.pricePerServing}</Text>
      <Text style={styles.text}>
        {" "}
        {platoElegido.vegan ? "Es" : "No es"} vegano
      </Text>
      <TouchableOpacity
        disabled={Boolean(
          contextState?.menu?.find((element) => platoElegido.id === element.id)
        )}
        style={styles.botoncito}
        onPress={() => onPress()}
      >
        <Text>Agregar al Menu</Text>
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
    marginTop: 7,
  },
  image: {
    width: 300,
    height: 240,
    resizeMode: "contain",
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
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    marginVertical: 5,
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
});

export default DetallePlato;
