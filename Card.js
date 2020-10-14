import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Card(props) {
                          //red     
  const colors = ["green","#f76f6f","purple","brown","orange",]
  
  return (
    <View style={{width:Dimensions.get('screen').width -10,marginTop:10,
    height:Dimensions.get('screen').height/2.2,backgroundColor:"white",elevation:5,marginTop:10,
    borderBottomLeftRadius:20,borderTopLeftRadius:5,borderTopEndRadius:5,overflow: 'hidden',justifyContent:"space-between"}}>

     {/* Background Image */}
    <Image
        style={{width:Dimensions.get('screen').width ,
        height:Dimensions.get('screen').height/3.5,

        }}
        source={{uri: props.thumbnail}}
    />
{/* var item = items[Math.floor(Math.random() * items.length)];. */}
    <View style={{borderWidth:2.5,
    borderLeftColor:colors[Math.floor(Math.random() * colors.length)],borderEndColor:"white",
    borderTopColor:"white",borderBottomColor:"white"}}>
        <Text numberOfLines={2} ellipsizeMode="tail"  style={{fontFamily:"serif",
        marginLeft:7,fontSize:16,}}>
                
        Public college should be tuition free. Public college should be tuition free.
      
        
        </Text>
    </View>
    

    
    <View style={{flexDirection:"row",justifyContent:"space-between",bottom:0}}>

        <View style={{flexDirection:"row",alignItems:"center",}}>
          {/* Display Picture of Publisher */}
            <Image
                style={{width:30,
                height:30,
                margin:5,
                borderRadius : 15,
                borderWidth:1,
                borderColor : "black",
                }}
                
                source={{uri: props.user_dp }}
            /> 
            {/* Name of publisher */}
            <Text style={{color:"black",
            fontStyle:"italic",textDecorationLine:"underline"}}>{props.username}</Text>
          </View>


          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{margin:10,color:"green",fontWeight:'800'}}> 2 hrs ago</Text>
          </View>
    </View>

          
    
  </View>
  );
}
