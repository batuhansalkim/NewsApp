import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const HeadlineList = ({ newList }) => {

  return (
    <View>
      <FlatList
        data={newList}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image source={{uri:item.urlToImage}} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default HeadlineList

const styles = StyleSheet.create({})