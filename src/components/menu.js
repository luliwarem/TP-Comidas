import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
import {StyleSheet, View} from 'react-native'
import { Avatar, Button, Card, Text } from "react-native-paper";

const Menu = () => {

  const {contextState, setContextState} = useContextState()

 /* useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=7f9c1771b87f49069460cb35d73b507c`
      ); // acá hacemos la consulta de axios a la API
      console.log(response.data.results)
      setContextState({ newValue: response.data.results, type: "SET_PLATOS" });
    }
    fetchData(); // ejecutamos la función de búsqueda de datos
  }, []);*/


  console.log(contextState?.menu);

  return (
    <View style={styles.container}>
    {contextState?.menu?.map (m => (
      <Card>
        <Card.Content>
          <Text variant="titleLarge">{m.title}</Text>
          <Text variant="bodyMedium">HealthScore: {m.healthScore}</Text>
          <Text variant="bodyMedium">Price: {m.pricePerServing}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: m.image }} />
        <Card.Actions>
          <Button>Ver Detalle</Button>
          <Button>Eliminar</Button>
        </Card.Actions>
      </Card>
      ))}
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
});

export default Menu;
