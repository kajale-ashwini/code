import React, { Component } from 'react'
import { Text, View,Picker, StyleSheet, SafeAreaView, Button } from 'react-native'

export default class FeeOverview extends Component {
    constructor(){
        super();
        this.state={
            status:'',
            stat:'',
            sta:'',
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.bgcontainer}>
               <Text style={styles.txt1}>Zone Status</Text>
                  <Picker style={styles.pickerStyle} 
                   selectedValue = {this.state.status} 
                   onValueChange ={ (itemValue,itemPosition) => {
                   this.setState({status: itemValue})
                  }}>
                 <Picker.Item label = "NG 1234" value = "Ng 1234" /> 
                  <Picker.Item label = "Monthly Card maintainance fee" value = "Monthly Card maintainance fee" />
                  <Picker.Item label = "USD 3" value = "USD 3" />
                  <Picker.Item label = "Next billing date" value = "Next billing date" />
                  <Picker.Item label = "Transaction fee for every transaction" value = "Transaction fee for every transaction" />
                 </Picker>


                 <Text style={styles.txt1}>Zone Status</Text>
                  <Picker style={styles.pickerStyle} 
                   selectedValue = {this.state.stat} 
                   onValueChange ={ (itemValue,itemPosition) => {
                   this.setState({stat: itemValue})
                  }}>
                 <Picker.Item label = "NG 1234" value = "Ng 1234" /> 
                  <Picker.Item label = "Monthly Card maintainance fee" value = "Monthly Card maintainance fee" />
                  <Picker.Item label = "USD 3" value = "USD 3" />
                  <Picker.Item label = "Next billing date" value = "Next billing date" />
                  <Picker.Item label = "Transaction fee for every transaction" value = "Transaction fee for every transaction" />
                 </Picker>

                 <Text style={styles.txt1}>Zone Status</Text>
                  <Picker style={styles.pickerStyle} 
                   selectedValue = {this.state.sta} 
                   onValueChange ={ (itemValue,itemPosition) => {
                   this.setState({sta: itemValue})
                  }}>
                 <Picker.Item label = "NG 1234" value = "Ng 1234" /> 
                  <Picker.Item label = "Monthly Card maintainance fee" value = "Monthly Card maintainance fee" />
                  <Picker.Item label = "USD 3" value = "USD 3" />
                  <Picker.Item label = "Next billing date" value = "Next billing date" />
                  <Picker.Item label = "Transaction fee for every transaction" value = "Transaction fee for every transaction" />
                 </Picker>
                 

                <View>
                 <Button
                  title="Press me"
                   //onPress={() => Alert.alert('Right button pressed')}
                />
                </View>

                 
            </SafeAreaView>
           
        )
    }
}
const styles = StyleSheet.create({
    bgcontainer: {
        flex: 1,
        position: "relative",
        margin: 10,
        marginTop: 40,
        //alignSelf: "center",
        backgroundColor: "#ffffff",
        alignItems:'center'
    },
    pickerStyle:{  
        height: 35,  
        color: '#344953',  
        width:280,
        justifyContent: 'center',  
        fontSize:15,
        margin:10
      },
      txt1:{
          marginRight:200
      }
})
