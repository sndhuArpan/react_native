import React from 'react';
import {Text,View, StyleSheet ,Image} from 'react-native';
import styles from './itemsstyle';


export default function ChatRoomItem({ chatroom }){
    return(
    <View style={styles.container}>
        <Image style={styles.image} source={{uri : chatroom.users[1].imageUri}}></Image>
        {chatroom.newMessage ?
          <View style={styles.newMessage} >
          <Text style={styles.newMessageText}>{chatroom.newMessage}</Text>
        </View>
        : null}
        <View style={styles.rightcontainer}>
        <View style={styles.row}>
        <Text style={styles.name}>{chatroom.users[1].name}</Text>
        <Text style={styles.lighttext}> 11:10AM </Text>
        </View>
        <Text numberOfLines={1} style={styles.lighttext}>{chatroom.lastMessage.content}</Text>
        </View>
      </View>
      );
}

