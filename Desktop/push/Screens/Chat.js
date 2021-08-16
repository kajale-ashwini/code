import React, { Component } from 'react'
import {SafeAreaView, View, Image, StyleSheet, ScrollView} from 'react-native';
import { Text, Button } from 'react-native-paper';

export default class Chat extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <Text style={styles.head}>Chat screen</Text>
            <ScrollView style={{marginHorizontal: 10}}>

             <Image style={styles.img}
             source={{uri: 'https://i1.wp.com/blog.happyfox.com/wp-content/uploads/2020/05/Designing-Employee-Onboarding.png?resize=1200%2C900&ssl=1'}}
            />

          <Text style={styles.txt1}>Chat anywhere, anytime</Text>
           <Text style={styles.txt2}>A log free video chat connection between</Text> 
           <Text style={{marginLeft:12, margin:10}}>your users is easy on much everywhere</Text>
           <Text style={{marginLeft:80, margin:3}}>on any device</Text>
           
 
          <View style={{flexDirection:'row',marginTop:140,height:110}}>
              <Button onPress={() =>this.props.navigation.navigate('Perfect')}>
              Skip
              </Button>

             <View style={{height:110,marginLeft:130}}>
             <Button mode="contained" onPress={() =>this.props.navigation.navigate('Perfect')}>
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
        marginLeft:40,
        margin:10
      },
      txt2:{
        position:'relative',
        marginTop:20,
        fontSize:15,
        alignItems:'center'
      },
      img:{
        width: 200, 
        height: 200, 
        marginLeft:50,
        backgroundColor:'black', 
        alignItems:'center', 
        borderRadius:100
      }
})

//marginTop:120