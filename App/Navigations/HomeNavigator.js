import {createStackNavigator} from "@react-navigation/stack"
import Home from "../Screen/Home";
import ReadNews from "../Screen/ReadNews";

const Stack =createStackNavigator();

export default function HomeNavigator(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="readNews" component={ReadNews}/>
        </Stack.Navigator>
    )
}