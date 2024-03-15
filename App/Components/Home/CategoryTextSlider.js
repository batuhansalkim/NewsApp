import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Color from '../../Shared/Color';

const CategoryTextSlider = () => {
  const [active, setActive] = useState(1);

  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Bussines",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movie"
    }
  ]
  const onCategoryClick = (id) => {
    setActive(id);
  }
  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onCategoryClick(item.id)}>
            <Text style={
              item.id == active ? styles.selectnameText : styles.unSelecetnameText
            }>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default CategoryTextSlider

const styles = StyleSheet.create({
  selectnameText: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: "900",
    color: Color.primary
  },
  unSelecetnameText: {
    marginRight: 20,
    fontSize: 20,
    fontWeight: "700",
    color: Color.gray,
  }
})