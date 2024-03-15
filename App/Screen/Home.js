import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Color from '../Shared/Color';
import {Ionicons} from "@expo/vector-icons";
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

const Home = () => {
  return (
    <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={styles.title}>BS News</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <CategoryTextSlider/>
      <TopHeadlineSlider/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:"bold",
    color:Color.primary,
  }
})