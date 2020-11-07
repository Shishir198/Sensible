{/* <View style={{margin:5,width : Dimensions.get('screen').width-20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            {/* <EvilIcons name="navicon" size={33} color="purple" /> */}
        //     <Text style={{fontSize:21,fontFamily:'sans-serif-medium',color:"purple"}}>Sensible</Text>
        //     <Ionicons  name="ios-search" size={28} color="purple"/>
        //     <Ionicons  name="ios-search" size={28} color="purple"/>
        // </View> */}
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList, Dimensions,TouchableHighlight,Image } from 'react-native';
import Card from './Card'
import data from './data'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { useFonts, Poppins } from '@expo-google-fonts/inter';


export default function Header()
{
    let [fontsLoaded] = useFonts({
        Poppins,
      });
    return(
        <View style={{margin:5,width : Dimensions.get('screen').width-20,
        flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>

            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                <Feather name="menu" size={24} color="purple" />
                <Text style={{color:"purple",fontSize:21,fontFamily:"sans-serif",marginLeft:10}}>2nd November</Text>
            </View>

            <View style={{width:70,flexDirection:"row",alignItems:"center",justifyContent:'space-between'}}>
                <Ionicons  name="ios-search" size={27} color="grey"/>
                <Image
                style={{width:30,height:30,borderRadius:15}}
                source={{uri : 
                "data:image/jpeg;base64,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"
                }}
                />
            </View>
         
        </View>
    )
}
{/* <Image 
style={{width:30,height:30,borderRadius:15}}
source={{url : "data:image/jpeg;base64,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"}}/> */}
