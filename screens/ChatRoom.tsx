import React from "react";
import { View ,Text, FlatList, StyleSheet, Image } from "react-native";
import Message from "../components/Message/message";
import Chats from "../assets/dummy-data/Chats";

export default function(){
    const users = Chats.users
    const messages = Chats.messages
    return (
        <View>
            <View style = {styles.topContainer}>
                <Image style= {styles.imagestyle} source={{uri : users[0].imageUri}}></Image>
                <Text style = {styles.nameStyle} >{users[0].name}</Text>
            </View>
        <FlatList 
    data={messages}
    renderItem={ ({ item }) => <Message message = {item}></Message>}
    ></FlatList>
    </View>
    );

}


const styles = StyleSheet.create({
    topContainer :{
        backgroundColor : 'blue',
        height:'15%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    imagestyle:{
        height :50,
      width:50,
      borderRadius:30,
      marginRight: 10
    },
    nameStyle:{
        color : 'white',
        fontSize : 20,
        fontWeight : 'bold'
    }
});