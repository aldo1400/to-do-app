import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Body</Text>
        <FlatList
            data={this.props.tareas}
            renderItem={({item})=><Text>{item.texto}</Text>}
        />
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