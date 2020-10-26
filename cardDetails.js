import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button,FlatList, Dimensions } from 'react-native';
import Card from './Card'
import data from './data'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';
// import Share from "react-native-share";


export default function cardDetails()
{
   
   
        
    
    return(
        <View>
             <Button
                title="Share"
                onPress={() => ShareFunc()}
            />
        </View>
    )
}