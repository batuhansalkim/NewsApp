import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider';
import Color from '../Shared/Color';
import { Ionicons } from "@expo/vector-icons";
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import { useState, useEffect } from 'react';
import GlobalApi from '../Services/GlobalApi';
const Home = () => {
  const [newList, setNewList] = useState([]);

  useEffect(() => {
    getTopHeadline();
  }, []);

  const getTopHeadline = async () => {
    const result = (await GlobalApi.getTopHeadline).data;

    setNewList(result.articles);
  }
  return (
    <View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={styles.title}>BS News</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>
      <CategoryTextSlider />
      <TopHeadlineSlider newList={newList} />

      <HeadlineList newList={newList}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Color.primary,
  }
})