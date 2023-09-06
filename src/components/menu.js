import { useEffect, useState } from "react";
import { useContextState } from "../contextSTate";
import axios from "axios";
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
  console.log(contextState?.menu?.title)

  return (
    <>
    {contextState?.menu?.map (menu => (
      <Card>
        <Card.Content>
          <Text variant="titleLarge">{menu.title}</Text>

        </Card.Content>
        <Card.Cover source={{ uri: menu.image }} />
        <Card.Actions>
          <Button>Ver Detalle</Button>
          <Button>Eliminar</Button>
        </Card.Actions>
      </Card>
      ))}
    </>
  );
};

export default Menu;
