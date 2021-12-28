import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Message({ message }) {
    
    const isMe =  message.user.id == 'u1'? false : true
    return (
        <View style={[messageStyle.receiveContainer,{backgroundColor : isMe ? 'grey' : 'blue'}, {marginLeft : isMe ? 'auto' : 10}]}>
            <Text style={{color : isMe ? 'black': 'white'}}> { message.content }</Text>
        </View>
    );
}

const messageStyle = StyleSheet.create({
receiveContainer:{
    backgroundColor: '#3872E9',
    padding:10,
    margin:10,
    borderRadius:10,
    width:'60%'
},

receiveText:{
    color:'white',
}
});