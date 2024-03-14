import { useEffect, useState } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { useRoute } from "@react-navigation/native";
import UserInfo from "./UserInfo";
export default function Profile() {
    const route = useRoute();
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const userId = route.params.userId;
            fetch(`https://dummyjson.com/users/${userId}`).then((res)=>res.json()).then((data)=>setUser(data)).finally((e)=>setLoading(false));
        })();
    }, [])
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            {loading ? <ActivityIndicator/>:(<UserInfo data={user}/>)}
        </View>
    )
}