
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Navigator from "./Navigator";
import { View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1 ,backgroundColor:"white"}}>
        <Navigator />
      </View>
    </NavigationContainer>
  )
}


