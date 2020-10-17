import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions } from 'react-native';
import Card from './Card'
import data from './data'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
export default function Home() {

 
  const renderItem = ({ item }) => {
    return (
      <View style={{marginTop:5}}>
        <Card thumbnail={item.thumbnail} username = {item.username} user_dp = {item.user_dp}/>
       <Text style={{color:"white",height:1}}>.</Text>
      </View>
      

    );
  };
  return (
    <View style={styles.container}>
    <View style={{margin:5,width : Dimensions.get('screen').width-20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <EvilIcons name="navicon" size={30} color="black" />
        <Text style={{fontSize:22,fontFamily:'sans-serif-medium',color:"black"}}>Today's Issues</Text>
        <Ionicons  name="ios-search" size={25} color="black"/>
    </View>
   
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={renderItem,index => index.toString()}
    ListFooterComponent={
    <View>
      <Text style={{color:"white"}}>.</Text>
    </View>
    }
    />
   
    
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    
    backgroundColor: '#fff',
    alignItems: 'center',
    
    // justifyContent: 'space-between',
  },
});
