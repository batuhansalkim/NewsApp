import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import User from "./User";

export default function UserList() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            fetch("https://dummyjson.com/users").then((res) => res.json()).then((resq) => setUser(resq.users)).finally((e) => setLoading(false));
        })();
    }, []);

    return (
        <View style={{ width: "90%",paddingTop:10 }}>
            {loading ? <ActivityIndicator size={"large"} color={"#0D66FF"} /> : (
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={users}
                    keyExtractor={(e) => e.id}
                    renderItem={({item}) => <User data={item} />
                    }
                />
            )}
        </View>
    )
}



