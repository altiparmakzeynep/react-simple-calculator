import React, { Component } from 'react';
import {StyleSheet,Text, View, TextInput, Button} from 'react-native';
import Header from './src/components/Header'
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      number1:'',
      number2:'',
      result:0
    }
   
  }

 sum = () => {
  const number1 = parseInt(this.state.number1);
  const number2 = parseInt(this.state.number2);

  const result = number1 + number2;

  this.setState({
    result:result
 })
}
  
  sub = () => {
    const number1 = parseInt(this.state.number1);
    const number2 = parseInt(this.state.number2);

    const result = number1 - number2;

    this.setState({
      result:result
    })
  }
  
  mul = () => {
    const number1 = parseInt(this.state.number1);
    const number2 = parseInt(this.state.number2);

    const result = number1 * number2;

    this.setState({
      result:result
    })
  }
  div = () =>{
    const number1 = parseInt(this.state.number1);
    const number2 = parseInt(this.state.number2);

    const result = number1 / number2;

    this.setState({
      result:result
    })
  }
  
  

  render(){
    return(
      <View style={styles.container}> 
        <Header header="Simple Calculator"></Header>
        <View style={styles.content}></View>
           <TextInput style={styles.input} 
                      placeholder="enter a number"
                      onChangeText={(text)=>{
                         this.setState({
                           number1:text
                         })
                      }}
                      value={this.state.number1}
           />
           <View style={styles.buttons}>
             <Button title="+"
                     onPress={this.sum}
                     color="pink"
                     >
             </Button>
             <Button title="-"
                     onPress={this.sub}
                     color="#30BDBD"
                     >
             </Button>
             <Button title="x"
                     onPress={this.mul}
                     color="#5ACE68">
             </Button>
             <Button title="/"
                     onPress={this.div}
                     color="#F9A051">
             </Button>
           </View>
             <TextInput style={styles.input} 
                      placeholder="enter a number"
                      onChangeText={(text)=>{
                         this.setState({
                           number2:text
                         })
                      }}
                      value={this.state.number2}
           />
            <Text style={styles.result}>Result:{this.state.result} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
  },
  content:{
    padding:20,
    justifyContent:"center",
    flexDirection:"column"
  },
  input:{
    height:50,
    color:"#000",
    fontSize:20
  },
  buttons:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
  result:{
    fontSize:35,
    color:"#A676C2"

  }
});

export default App;