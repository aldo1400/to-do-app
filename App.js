import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './Body';
import Header from './Header';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={tareas:[],texto:""}
  }

  establecerTexto=(value)=>{
    console.log(value);
    this.setState({texto:value});
  }

  agregarTarea=(tarea)=>{
    this.setState({
      tareas:[...this.state.tareas,tarea],
      texto:''
    });
    console.log(this.state.tareas.length);
    }
  render() {
    return (
      <View style={styles.container}>
        <Header 
        texto={this.state.texto}
        cambiarTexto={this.establecerTexto} 
        agregar={this.agregarTarea}/>
        <Text>{this.state.texto}</Text>
        <Body/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
