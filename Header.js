import React, { Component } from 'react'
import { Text, View, StyleSheet , TextInput} from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> Header </Text> */}
        <TextInput 
        style={styles.texto}
        onChangeText={this.props.cambiarTexto}
        onSubmitEditing={this.props.agregar}
        value={this.props.texto}
        placeholder="escribe tu texto"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00FF00',
      justifyContent: 'center',
    },
    texto:{
        paddingHorizontal:16,
        fontSize:24
    }
  });