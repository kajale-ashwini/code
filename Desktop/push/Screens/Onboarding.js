import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Image, ScrollView} from 'react-native'
import {Button, Text} from 'react-native-paper'
//import { styles } from "./styles";

export default class Onboarding extends Component {
    constructor(props){
        super(props);
        this.state={
         
        }
    }



    render(){
        return (
        <SafeAreaView style={styles.container}>
           <Text style={styles.head}>Onboarding Screen</Text>
           <ScrollView style={{marginHorizontal: 10}}>

           <Image 
              style={styles.img}
              source={{uri: 'https://2kceni4cuv0n2yx0s3ezy0bk-wpengine.netdna-ssl.com/wp-content/uploads/2021/04/Step-1-Onboarding-Timeline-05.png'}}
            />

           <Text style={styles.txt1}>Lets Start Chatting</Text>
           <Text style={styles.txt2}>Passing of any information on any screen</Text> 
           <Text>any device instantly is mode simple at its subline</Text>
           
           <View style={{flexDirection:'row',marginTop:170,height:70}}>
              <Button onPress={() =>this.props.navigation.navigate('Chat')}>
              Skip
              </Button>

             <View style={{height:70,marginLeft:130}}>
             <Button mode="contained" onPress={() =>this.props.navigation.navigate('Chat')}>
              Next
             </Button>
             </View>
           </View>


           
           </ScrollView>
          </SafeAreaView>
        )
    }

  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: "relative",
      margin: 10,
      alignItems:'center',
      justifyContent:'center',
     // backgroundColor: "pink",
    },
    head: {
      color: "#7a25fa",
      textAlign: "center",
      height: 40,
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      marginTop: 10,
      justifyContent: "center",
    },
    txt1:{
      fontSize:20,
      position:'relative',
      top:20,
      alignItems:'center',
      marginLeft:60
    },
    txt2:{
      marginTop:30, 
      fontSize:15,
      margin:10
    },
    img:{
      width: 200, 
      height: 200, 
      marginLeft:50,
     // backgroundColor:'black', 
      alignItems:'center', 
      borderRadius:100
    }
  })

  //marginTop:150

