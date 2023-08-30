import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from "react-native";
import { Formik } from "formik";

const Login = () => {

  

  return (
    <Formik initialValues={{ username: '', password: ''}} onSubmit={(values) => console.log(values)}>
      {({ handleSubmit, handleChange, handleBlur, values  }) => (
        <View>
          <TextInput
            style={styles.input}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            placeholder="Username"


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
