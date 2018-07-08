import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList,ActivityIndicator } from 'react-native'
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
      {this.props.cargando &&
      <ActivityIndicator 
      size="large" 
       />
      }
        {/* <Text> Body</Text> */}
        {!this.props.cargando &&
        <FlatList
            data={this.props.tareas}
            renderItem={({item})=><Tarea item={item} eliminar={this.props.eliminar}/>}
        />
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#98FB98',
      
    },
  });