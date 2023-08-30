import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TP Comidas</Text>
      <Login></Login>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10
  }
});
