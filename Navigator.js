import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                title:"Anasayfa"
            }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
                title:"Profil"
            }}/>
        </Stack.Navigator>
    )
}