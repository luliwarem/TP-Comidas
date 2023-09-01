import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";
import { Formik } from "formik";
import { login } from "../services/loginClient";
import { useContextState } from "../contextSTate";


const Login = () => {

  const {contextState, setContextState} = useContextState();

  const onSubmitHandler = async (values) => {
    const token = await login(values);

    setContextState({ newValue: token, type: "SET_USER_TOKEN" });
    console.log(token)

  }
  

  return (
    <Formik initialValues={{ email: '', password: ''}} onSubmit={onSubmitHandler}>
      {({ handleSubmit, handleChange, handleBlur, values  }) => (
        <View>
          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Email"


          />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Password"


          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text>Ingresar</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
