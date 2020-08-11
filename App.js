import React, { Component } from 'react';
import {StyleSheet,Text, View, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      number1:'',
      number2:''
    }
  }
  render(){
    return(
      <View style={styles.container}> 
        <View style={styles.header}>
          <Text style={styles.headerText}>Simple Calculator</Text>
        </View>
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
                     onPress={()=>{}}
                     color="pink">
             </Button>
             <Button title="-"
                     onPress={()=>{}}
                     color="#30BDBD">
             </Button>
             <Button title="/"
                     onPress={()=>{}}
                     color="#5ACE68">
             </Button>
             <Button title="%"
                     onPress={()=>{}}
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
  header:{
    height:60,
    paddingTop:10,
    shadowColor:"#000",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#F1D96A"
  },
  headerText:{
    color:"#fff",
    fontSize:30,
    textAlign:"center"
  },
  input:{
    height:50,
  },
  buttons:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
  
  }
});

export default App;
