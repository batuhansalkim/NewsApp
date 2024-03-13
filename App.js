
import { View,Text,StyleSheet } from "react-native";
import User from "./User";
import UserList from "./UserList";

export default function App() {
  return (
    <View style={styles.container}>
      <UserList/>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems: "center", 
    paddingTop: 38,
  }
})
