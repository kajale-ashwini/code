import React, { Component } from 'react'
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native'
import {connect} from 'react-redux';

class CounterApp extends Component {
    /*state={
        counter:0
    }

    increaseCounter = () =>{
       this.setState({counter: this.state.counter + 1})
    }

    decreaseCounter = () =>{
      this.setState({counter: this.state.counter - 1})
    }*/
    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', width:250, justifyContent:'space-around'}}>
                <TouchableOpacity onPress={() =>this.props.increaseCounter()}>
                    <Text style={{fontSize:20}}>Increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={()=>this.props.decreaseCounter()}>
                    <Text style={{fontSize:20}}>Decrease</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
       //increaseCounter:() => dispatch(increaseCounter()),
       //decreaseCounter:() => dispatch(decreaseCounter())

        increaseCounter:() => dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter:() => dispatch({type:'DECREASE_COUNTER'})
      
     


    }
}

export default connect(mapStateToProps)(CounterApp)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
