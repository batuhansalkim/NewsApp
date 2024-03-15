import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>BS News</Text>
      <CategoryTextSlider/>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:"blue",
  }
})