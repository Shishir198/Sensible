import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions,TouchableHighlight } from 'react-native';
import Card from './Card'
import data from './data'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import Header from './Header'


export default function Home({navigation}) {
 
    const renderItem = ({ item }) => {
        return (
          <TouchableHighlight onPress={() =>navigation.navigate('cardDetails',

          {"image" : item.thumbnail,"title":"title","des" : "abcd",

          "user_dp":item.user_dp,"username":item.username}

          )}>


          <View style={{marginTop:5}}>
           
            <Card thumbnail={item.thumbnail}
             username = {item.username}
              user_dp = {item.user_dp}
               
              />
             
          </View>
          </TouchableHighlight>
    
        );
      };
      return (
        <View style={styles.container}>
        <Header/>
        {/* <Text style={{color:"white",height:4}}>.</Text> */}
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item,index) => index.toString()}
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
