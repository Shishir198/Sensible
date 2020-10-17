import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Card from './Card'
import data from './data'

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
    
    justifyContent: 'space-between',
  },
});
