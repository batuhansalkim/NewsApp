import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Home from "./App/Screen/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    padding:20,
  }
})