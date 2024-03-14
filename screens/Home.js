import { View,Text } from "react-native";
import UserList from "../UserList";

export default function Home(){
    return(
        <View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
            <UserList/>
        </View>
    )
}