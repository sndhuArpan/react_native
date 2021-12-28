import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      padding:10
      
    },
    rightcontainer:{
      flex: 1,
      justifyContent: 'center' 
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'space-between' 
     },
    image: {
      height :50,
      width:50,
      borderRadius:30,
      marginRight: 10
    },
    name: {
      fontSize : 18,
      color:'black',
      fontWeight:'bold'
    },
    lighttext: {
      fontSize : 15,
      color: 'grey'
    },
    newMessage: {
      backgroundColor:'#3872E9',
      width:20,
      height:20,
      borderRadius:10,
      borderWidth:1,
      borderColor:'white',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      top:10
    },
    newMessageText: {
      fontSize : 12,
      color: 'white'
    }
  });

  export default styles