import React, { Component } from 'react'
import {SafeAreaView, View, Image, StyleSheet, ScrollView} from 'react-native'
import {Text, Button} from 'react-native-paper'

export default class Perfect extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}> 
              <Text style={styles.head}>Perfect screen</Text>
                <ScrollView style={{marginHorizontal: 10}}>

              <Image 
               style={styles.img}
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGrTYAWgeHAvIEQmIaOZaYsxIpP39U-4yDw&usqp=CAU'}}
             />
            

            <Text style={styles.txt1}>Perfect chat solution</Text>
           <Text style={styles.txt2}>Passing of any information on any screen</Text> 
           <Text style={{marginLeft:12, margin:4}}>any device instantly is made simple at its</Text>
           <Text style={{marginLeft:120, margin:4}}>sublime</Text>


          
            <View style={{marginTop:90,marginLeft:40,backgroundColor:'#6C3483', width:250, borderRadius:60,height:60}}>
              <Button onPress={() =>this.props.navigation.navigate('SignUp')}>
                <Text style={{color:'white', fontSize:10, alignItems:'center', justifyContent:'center'}}>Get started</Text>
              </Button>

             
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
        backgroundColor:'black', 
        alignItems:'center', 
        borderRadius:100
      }
})
