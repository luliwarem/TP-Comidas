import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";
import { Formik } from "formik";
import { login } from "../services/loginClient";
import { useContextState } from "../contextState";


const Login = ({navigation}) => {

  const {contextState, setContextState} = useContextState();

  const onSubmitHandler = async (values) => {
    const token = await login(values).catch(error=>alert("Error al ingrear! Complete los datos correctamente"))

    setContextState({ newValue: token, type: "SET_USER_TOKEN" });
    console.log(token)
    
    navigation.navigate("BusquedaPlatos")
  }

  const handleKeyPress = (event, values) => {
    if(event.key === 'Enter'){
      onSubmitHandler(values)    }
  }


  return (
    <View style={styles.container}>
    <Text style={styles.text}>TP - Comidas</Text>
    <Formik initialValues={{ email: '', password: ''}} onSubmit={onSubmitHandler} >
      {({ handleSubmit, handleChange, handleBlur, values  }) => (
        <View >
          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Email"
            onKeyPress={(e) => handleKeyPress(e, values)}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password"
            onKeyPress={(e) => handleKeyPress(e, values)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Ingresar</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
  text: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 10,
  },
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
  button: {
    alignItems: "center",
    padding: 15,
    paddingHorizontal: 80,
    borderRadius: 20,

    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});

export default Login;
