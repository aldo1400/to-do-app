import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> sefsfsdfs</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#98FB98',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });