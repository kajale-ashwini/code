import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet, TextInput, Button } from 'react-native';
import Cam from './Cam';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            address:'',
            id:'',
            isState:true
        }
       
         
    }
    render() {
        return (
            <SafeAreaView style={styles.bgcontainer}>
                <View>
                    <Cam/>
                </View>

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "name on card"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={this.state.name}
               onChangeText={(value) => this.setState({ name: value })}
               
               />

              <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={this.state.address}
               onChangeText={(value) => this.setState({ address: value })}
               
               />


              <TextInput style = {{borderWidth:1,height: 40,width:300,backgroundColor:'#E5E8E8' }}
               disabled
               underlineColorAndroid = "transparent"
               placeholder = "#34568"
              // placeholderTextColor = "#9a73ef"
               //autoCapitalize = "none"
               value={this.state.id}
               onChangeText={(value) => this.setState({ id: value })}
               
               />
            
             <View style={{marginTop:10}}>
             <Button 
                onPress={() => {
                    this.setState({ isState: false });
                  }}
                  title={
                    this.state.isState ? "Press me" : "Thank you!"
                  }
             />     
            </View> 
            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    bgcontainer: {
        flex: 1,
       // position: "relative",
        //margin: 10,
        //marginTop: 20,
        //alignSelf: "center",
        backgroundColor: "#ffffff",
        alignItems:'center',
        

    },
    input: {
        margin: 15,
        height: 40,
        width:300,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
   
})