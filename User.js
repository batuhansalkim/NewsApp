import { View, Text,Image, TouchableOpacity } from "react-native"
import {useNavigation} from "@react-navigation/native";

export default function User({ data }) {
    const nav = useNavigation();
    return (
        <TouchableOpacity onPress={()=>nav.navigate("Profile",{userId:data.id})}> 
            <View style={{ width: "90%", height: 80, padding: 5, margin: 2, flexDirection: "row" }}>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: "black" }} source={{ uri: data.image }} />
                </View>

                <View style={{ flex: 5, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                        {data.firstName} {data.lastName}
                    </Text>

                    <Text style={{ color: "gray", fontSize: 15 }}>{data.email}</Text>
                </View>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 40, height: 40, backgroundColor: "#BC85FF", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                        <Text >{data.age}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}