import { View ,Text,Image} from "react-native";

export default function UserInfo({data}){
    return(
        <View style={{flex:1,backgroundColor:"white",alignItems:"center",}}>
            <Image style={{ width: 200, height: 200 }} source={{ uri: data.image }} />

            <View style={{backgroundColor:"blue", width:"80%",justifyContent:"center",alignItems:"center",borderRadius:30,marginTop:20}}>
                <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
                    {data.firstName} {data.lastName}
                </Text>
            </View>

            <View style={{backgroundColor:"gray",marginTop:15,width:"90%",height:"55%",alignItems:"center"}}>
                <Text>Kullanıcı Bilgileri</Text>

                <View style={{width:"100%",justifyContent:"center",alignItems:"center"}}>
                    <View style={{backgroundColor:"blue",marginBottom:5,margin:3}}>
                        <Text style={{color:"white",fontSize:22}}>{data.email}</Text>
                        <Text style={{color:"white",fontSize:22}}>Numara {data.phone}</Text>
                        <Text style={{color:"white",fontSize:22}}>Doğum Günü : {data.birthDate}</Text>
                    </View>
                    <View style={{backgroundColor:"yellow"}}>
                        <Text>{data.age}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}