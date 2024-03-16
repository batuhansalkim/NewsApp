import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import Color from "../../Shared/Color";
// import { FlatList } from "react-native-gesture-handler";

export default function HeadlineList({ newList }) {
  return (
    <View>
      <FlatList
        data={newList}
        renderItem={({ item }) => (

          <View >
            <TouchableOpacity style={{ marginTop: 15, display: "flex", flexDirection: "row" }}>
              <Image source={{ uri: item.urlToImage }} style={{ width: 130, height: 130, borderRadius: 10 }}
              />
              <View style={{ marginRight: 135, marginLeft: 10 }}>
                <Text numberOfLines={4} style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ color: Color.primary, marginTop: 6 }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
            <View style={{ height: 1, backgroundColor: Color.lightGray,marginTop:10,marginLeft:-20 }}></View>

          </View>

        )}
      />
    </View>
  )
}

// import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { FlatList } from 'react-native-gesture-handler'

// const HeadlineList = ({ newList }) => {

//   return (
//     <View>
//       <FlatList
//         data={newList}
//         renderItem={({ item }) => (
//           <TouchableOpacity>
//             <Image source={{uri:item.urlToImage}} style={{ width: 100, height: 100 }} />
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   )
// }

// export default HeadlineList

// const styles = StyleSheet.create({})