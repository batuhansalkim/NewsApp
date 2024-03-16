import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Home from "./App/Screen/Home";
import HomeNavigator from "./App/Navigations/HomeNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 20,
  }
})