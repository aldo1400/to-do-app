import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

class Tarea extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}> {this.props.item.texto} </Text>
        <Ionicons
        name="md-trash"
        size={24}
        color="grey"
        />
        
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    texto:{
        fontSize:24
    }
});
export default Tarea;