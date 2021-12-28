import {Text,View, StyleSheet ,Image , FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomItems/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  const chatroom1 = ChatRooms[0]
  const chatroom2 = ChatRooms[1]
  // return ChatRooms.map((chatroom) =>  { return (
  //   <View style={styles.chatPage}>
  //     <ChatRoomItem chatroom = {chatroom}></ChatRoomItem>
  //   </View>
  // );})
   return (
   <View style={styles.chatPage}>
    <FlatList 
    data={ChatRooms}
    renderItem={ ({ item }) => <ChatRoomItem chatroom = {item}></ChatRoomItem>}
    ></FlatList>
   </View>
   );
}
const styles = StyleSheet.create({
  chatPage:{
    backgroundColor:'white',
    flex: 1
  }
});


