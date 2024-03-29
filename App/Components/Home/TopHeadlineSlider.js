import { FlatList, Text, StyleSheet, Image, TouchableOpacity, View, Dimensions } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Color from '../../Shared/Color';
import ReadNews from '../../Screen/ReadNews';
const TopHeadlineSlider = ({ newList }) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={newList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("readNews",{news:item})} style={{ width: Dimensions.get("screen").width * 0.80, marginRight: 15 }}>
            <Image source={{ uri: item.urlToImage }} style={{ height: Dimensions.get("screen").width * 0.77, borderRadius: 10 }} />
            <Text numberOfLines={3} style={{ marginTop: 10, fontSize: 23, fontWeight: "800" }}>{item.title}</Text>

            <Text style={{ marginTop: 5, color: Color.primary }}>{item?.source?.name}</Text>
          </TouchableOpacity>
        )}
      />

    </View>
  )
}

export default TopHeadlineSlider

const styles = StyleSheet.create({})