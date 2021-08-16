import React, { Component } from 'react'
import { SafeAreaView, ScrollView, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Text, Button, Searchbar } from 'react-native-paper'
import Data from '../Json/Data';

export default class Hotel extends Component {
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
           // party:''
        }
    }

    updateSearch = (searchValue) => {
        this.setState({ searchValue });
        let array = Data.filter((item) => {
          if (
            item.title.match(searchValue) ||
            item.id.toString().match(searchValue) 
          )
            return true;
        });
        this.setState({ searchValue: array });
      //  this.listData();
        console.log("serach update: ", this.state.searchValue);

      };
    

   
    
    render() {
     
        return (
            <SafeAreaView style={styles.container}>
            <ScrollView style={{marginHorizontal:5}}>
            <Text style={styles.head}>Hotel Page</Text>
            <Text>Hello</Text>
            <Text style={{marginTop:10, fontSize:20}}>Find your Hotel</Text>

            <View style={{width:360, height:150, marginTop:20}}>
            <Searchbar 
             placeholder="Search"
             onChangeText={(searchValue) =>this.setState({searchValue})}
             value={this.state.searchValue}
           />
           </View>

           <View style={{flexDirection:'row', marginTop:-70,marginLeft:-20}}>
           <View style={{height:100, borderRadius:100}}>
            <Button mode="contained">Recommended</Button></View>

           <View style={{height:100, margin:5, marginTop:2}}>
           <Button  mode="contained">Popular</Button>
           </View>

           <View style={{height:100, margin:3}}>
           <Button  mode="contained">Top rates</Button>
           </View>

           </View>

           <View style={{flexDirection:'row', margin:10, marginTop:-35}}>
            <TouchableOpacity>
            <Image 
              style={styles.img}
              source={{uri: 'https://blog.staah.com/wp-content/uploads/2018/03/hotelsign-min.jpg'}}
           /></TouchableOpacity> 

             <View style={{margin:10, marginTop:-3}}>
             <TouchableOpacity>
             <Image 
              style={styles.img}
              source={{uri: 'https://images.assettype.com/fortuneindia%2F2018-08%2F06842889-5b9d-42c0-bd8b-c29dedf2b49b%2F88530637_H1_5_Swimming_Pool_CC2FCCSH.jpg?rect=0,283,10200,5738&w=1250&q=60'}}
            />
            </TouchableOpacity>
            </View>
            </View>
            
          <View style={{marginTop:10,width:140, alignSelf:'center'}}> 
          <Button mode="contained" onPress={this.updateSearch}>
            Search Now
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
    img:{
       width: 150, 
      height: 230,
      borderRadius:20
    }
    
})