import React, { Component } from 'react'
import { SafeAreaView, StyleSheet,View, Image,Text, Button} from 'react-native'

export default class Design extends Component {
    render() {
        return (
           <SafeAreaView style={styles.bgcontainer}>
               <View style={styles.first}>
               <Text style={{position:'absolute', top:30, left:130}}>Welcome</Text>
               <Image style={{height:60, width:60, borderRadius:230,
                alignItems:'left',margin:10,position:'relative',top:0}} source={require('../assets/nature.jpg')}/>
               </View>

               <View style={styles.second}>
               <Text style={styles.textStyle}>Transfer Funds</Text>
               <Image style={styles.imageStyle} source={require('../assets/trans.png')}/>
               </View>

               <View style={styles.second}>
               <Text style={styles.textStyle}>My cards</Text>
               <Image style={styles.imageStyle} source={require('../assets/card.png')}/>
               </View>

               <View style={styles.second}>
               <Text style={styles.textStyle}>Profile</Text>
               <Image style={styles.imageStyle} source={require('../assets/pro.png')}/>
               </View>

               <View style={styles.second}>
               <Text style={styles.textStyle}>Setting</Text>
               <Image style={styles.imageStyle} source={require('../assets/set.jpg')}/>
               </View>

               <View style={styles.secondView}>
               <Text style={{position:'absolute', top:30, left:130}}>How can we help you?</Text>
               <Image style={{height:60, width:60, borderRadius:230,
                alignItems:'left',margin:10,position:'relative'}} source={require('../assets/blu.png')}/>
               </View>

               <View style={{margin:10}}>
               <Button 
                  title="press me"
                 />
               </View>


           </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    bgcontainer:{
        flex: 1,
        position: "relative",
        marginTop: 30,
        //alignSelf: "center",
        backgroundColor: " #ffffff",
        alignItems:'center',
       
    },
    first:{
        width:350,         
        height:80,
        borderBottomWidth:1,
        borderColor:'#EAECEE',
    },
    secondView:{
        width:350,         
        height:70,
        borderRadius:40,
        backgroundColor:'#EBF5FB',
    },
    second:{
        width:350,         
        height:60,
        //borderBottomWidth:1,
    },
    imageStyle:{
        height:30, 
        width:30, 
        borderRadius:230,
        alignItems:'left',
        margin:10,
        position:'relative',
        
    },
    textStyle:{
        position:'absolute',
         top:30, 
         left:130, 
         justifyContent:'center'
    }
})
