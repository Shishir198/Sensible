import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import cardDetails from './cardDetails'
import Card from './Card'


const HomeStack = createStackNavigator();
function HomeStackScreen() {
  
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="Card" component={Card} /> */}
      <HomeStack.Screen name="cardDetails" component={cardDetails} options={{
          tabBarVisible: false
        }} />
    </HomeStack.Navigator>
  );
}
function Threads() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Bookmarks() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Post() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function HallOFfame() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Updates') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home';
            }
            else if(route.name == "Threads"){
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            }
            else if (route.name === 'Bookmarks') {
              iconName = focused ? 'ios-bookmark' : 'ios-bookmark';
            }
            else if (route.name === 'Post') {
              iconName = focused ? 'ios-add-circle-outline' : 'ios-add-circle';
            }
            else if (route.name === 'Hall of Fame') {
              iconName = focused ? 'ios-flame' : 'ios-flame';
            }

            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={23} color={color} />;
          },
        })}
        // #ff007f
        // #ed2121
        // #211f1f
        tabBarOptions={{
          activeTintColor: '#211f1f',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Updates" component={HomeStackScreen} />
        <Tab.Screen name="Threads" component={Threads} />
        <Tab.Screen name="Post" component={Post} />
        <Tab.Screen name="Bookmarks" component={Bookmarks} />
        <Tab.Screen name="Hall of Fame" component={HallOFfame} />
      </Tab.Navigator>
    </NavigationContainer>
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
