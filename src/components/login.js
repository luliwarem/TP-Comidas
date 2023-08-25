import { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

const login = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={username}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  
  export default TextInputExample;