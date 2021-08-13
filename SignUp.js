import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, Text, TextInput, RadioButton} from 'react-native-paper'
import DPicker from './DPicker';
import Opengallery from './Opengallery';
export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            checked:'first'
        }
    }
    render() {
        const {checked} = this.state
        return (
           <SafeAreaView style={styles.container}>
             <Text style={styles.head}>Sign Up</Text>
             <ScrollView style={{marginHorizontal:5}}>

            <Text>select picture</Text> 
            <View style={{marginTop:20,width:100, borderRadius:150,alignSelf:'center'}}>  
             <Button mode="contained" onPress={() =>this.props.navigation.navigate('Opencamera')}>
                camera
             </Button>
            </View>

            <View>  
            <Opengallery/>
            </View>
               
        
               <TextInput style={{margin:10, width:250}}
                label="Name"
                value={this.state.name}
                onChangeText={name =>this.setState({name})}
                theme={{
                    colors: {
                      background: "transparent",
                    },
                  }}
               />

              <View style={{marginTop:10}}>
                  <DPicker/>
              </View>

      
        <Text>Select gender</Text>
        <View style={{flexDirection:'row',marginTop:5}}>
        <Text style={styles.txt1}>Male</Text>
        <RadioButton 
         value="Yes"
         status={ checked === 'Yes' ? 'checked' : 'unchecked' }
         onPress={() => { this.setState({ checked: 'Yes' }); }}
         />
         <Text style={styles.txt1}>Female</Text>
         <RadioButton 
         value="No"
         status={ checked === 'No' ? 'checked' : 'unchecked' }
         onPress={() => { this.setState({ checked: 'No' }); }}/>
         </View>
    
             
             <View style={{marginTop:70, width:100, alignSelf:'center'}}>
             <Button mode="contained" onPress={() =>this.props.navigation.navigate('Hotel')}>
                SignUp
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
        //justifyContent:'center',
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
      img:{
        width: 200, 
        height: 200, 
        marginLeft:50,
        backgroundColor:'black', 
        alignItems:'center', 
        borderRadius:100
      }
    
})
