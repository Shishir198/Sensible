import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Button,FlatList, Dimensions,Image } from 'react-native';
import Card from './Card'
import data from './data'
import { Ionicons,EvilIcons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation';
import { fromLeft } from 'react-navigation-transitions';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import Share from "react-native-share";
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function cardDetails(props)
{
    const [buttonStatus,setbuttonstatus] = useState({"agreed":0,"disagreed":0,"both":1})
   
    // useEffect(() => {
    //     if(agreed && !disagreed)
    //     {
    //         setShowBar(0)
    //     }
    //     else if(disagreed && !agreed)
    //     {
    //         setShowBar(0)
    //     }
    // },[agreed,disagreed])

    return(
        <View style={{flex:1}}>
        <ScrollView>
        <View style={{backgroundColor:"white"}}>
            <View style={{backgroundColor:"white",elevation:0}}>
                <Image
                    style={{width:Dimensions.get('screen').width ,
                    height:Dimensions.get('screen').height/2.8,

                    }}
                    source={{uri: props.route.params.image}}
                />
                {/* <Text>{props.route.params.title}</Text> */}
                
            </View>


            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                 
                {/* DATE */}

                <View style={{backgroundColor:"purple",width:70,
                height:20,marginLeft:5,marginTop:2,borderRadius:3,}}>

                    <Text style={{color:"white",fontWeight:"bold",textAlign:"center"}}>1st Nov</Text>
                </View>

                {/* Share Button */}
                <View style={{zIndex:5,elevation:10,backgroundColor:"white",width:40,
                height:40,borderRadius:20,position:"absolute",right:0,bottom:5,
                marginRight:10,alignItems:"center",justifyContent:"center"}}>
                   <Ionicons name="ios-share-alt" size={23} color="purple" />
                    
                </View>

                {/* BookMark Button */}
                <View style={{zIndex:5,elevation:10,backgroundColor:"white",width:40,
                height:40,borderRadius:20,position:"absolute",right:50,bottom:5,
                marginRight:10,alignItems:"center",justifyContent:"center"}}>
                  <MaterialIcons name="bookmark-border" size={24} color="purple" />
                    
                </View>

                
               
            </View>  


            <View style={{borderTopLeftRadius:10}}>
                <Text style={{fontSize:18,margin:5,fontFamily:"sans-serif-medium"}}>
                    Public college should be tuition free.Public college should be tuition free. Public college should be tuition free.
                   
                </Text>
                
            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginTop:5}}>


          {/* Display Picture of Publisher */}
            <Image
                style={{width:25,
                height:25,
                marginLeft:5,
                borderRadius : 15,
                borderWidth:0.5,
                borderColor : "black",
                }}
                
                source={{uri: props.route.params.user_dp }}
            /> 


            {/* Name of publisher */}

            <View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:"space-between",}}>
                <Text style={{color:"black",fontStyle:"italic",
                textDecorationLine:"underline",margin:5,fontFamily:"Roboto"}}>{props.route.params.username}
                </Text>
            </View>
            


          </View>
          
          {/* Description  */}
        <Text style={{padding:8,fontSize:16,fontFamily:"sans-serif-light"}}>


        Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
        
        Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.

The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.

So, let’s suppose that you have done some brainstorming to develop your thesis. What else should you keep in mind as you begin to create paragraphs? Every paragraph in a paper should be:

Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph).
Clearly related to the thesis: The sentences should all refer to the central idea, or thesis, of the paper (Rosen and Behrens 119).
Coherent: The sentences should be arranged in a logical manner and should follow a definite plan for development (Rosen and Behrens 119).
Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).
        </Text>

       
        </View>

        <View style={{height:40}}>
            {/* Providing a white space for bottom buttons */}
            {/* To prevent overlapping bottom bar and description */}
        </View>

        </ScrollView>


        {buttonStatus.both?
                                        // Agree and Disagree button
        <View style={{elevation:10,backgroundColor:"white",
        width:Dimensions.get("screen").width,flexDirection:"row",
        height:40,position:"absolute",bottom:0,
        alignItems:"center",justifyContent:"space-around"}}>
           
           <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",}}>
               <TouchableWithoutFeedback onPress={() => {
                    setbuttonstatus({"agreed":1,"disagreed":0,"both":0})
                    }}>
                        <Entypo name="thumbs-up" size={24} color="green" />
                    </TouchableWithoutFeedback>
               
               <TouchableWithoutFeedback onPress={() => {
                    setbuttonstatus({"agreed":1,"disagreed":0,"both":0})
                    }}>
                    <Text style={{color:"green",fontSize:9}}>
                         Agree
                    </Text>
                </TouchableWithoutFeedback>
            </View>
                    





                                    {/* People Views */}

                <View style={{alignItems:"center",justifyContent:"center"}}>

                    <View>
                    <Ionicons name="ios-chatbubbles" size={24} color="purple" />
                    </View>

                    <View>
                            <Text style={{color:"purple",fontSize:9}}>
                                Views
                            </Text>
                    </View>
                        
                    
                </View>







                

            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",}}>
               
                <TouchableWithoutFeedback onPress={() => {
                   setbuttonstatus({"agreed":0,"disagreed":1,"both":0})
               }}>
                   <Entypo name="thumbs-down" size={24} color="red" />
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback onPress={() => {
                   setbuttonstatus({"agreed":0,"disagreed":1,"both":0})
               }}>
                <Text style={{color:"red",fontSize:9}}>
                   Disagree
                </Text>
                </TouchableWithoutFeedback>
            </View>
            
        </View> : null}
                   


         {buttonStatus.agreed ?  
         
        //  Only agreed
         <View style={{elevation:10,backgroundColor:"white",
        width:Dimensions.get("screen").width,flexDirection:"row",
        height:50,position:"absolute",bottom:0,
        alignItems:"center",justifyContent:"space-between"}}>
           
           <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <TouchableWithoutFeedback onPress={() => {
                        setbuttonstatus({"agreed":0,"disagreed":0,"both":1})
                    }}>
                    <MaterialIcons name="done" size={24} color="green" />
                </TouchableWithoutFeedback>
              
               <TouchableWithoutFeedback onPress={() => {
                   setbuttonstatus({"agreed":0,"disagreed":0,"both":1})
               }}>
                    <Text style={{color:"green",fontWeight:"bold",fontSize:15}}>
                        Agreed
                    </Text>
                </TouchableWithoutFeedback>
            </View>
            <View style={{alignItems:"center",justifyContent:"center",marginRight:30}}>

                    <View>
                    <Ionicons name="ios-chatbubbles" size={24} color="purple" />
                    </View>

                    <View>
                            <Text style={{color:"purple",fontSize:9}}>
                                Views
                            </Text>
                    </View>
                        
                    
                </View>
            
        </View>: null}
        

        {buttonStatus.disagreed?
        // disagreeed
        <View style={{elevation:10,backgroundColor:"white",
        width:Dimensions.get("screen").width,flexDirection:"row",
        height:50,position:"absolute",bottom:0,
        alignItems:"center",justifyContent:"space-between"}}>
           
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

                    <TouchableWithoutFeedback onPress={() => {
                        setbuttonstatus({"agreed":0,"disagreed":0,"both":1})
                        }}>
                        <Entypo name="circle-with-cross" size={24} color="red" />
                   </TouchableWithoutFeedback>
                
                    <TouchableWithoutFeedback onPress={() => {
                        setbuttonstatus({"agreed":0,"disagreed":0,"both":1})
                        }}>
                        <Text style={{color:"red",fontWeight:"bold",fontSize:15}}>
                        Disagreed
                        </Text>
                    </TouchableWithoutFeedback>
                
            </View>
            
        </View>: null}
      </View>
        
    )
}
