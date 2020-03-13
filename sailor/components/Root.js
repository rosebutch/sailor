import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, ScrollView } from 'react-native';
import {Cal, SingleDay} from './index'

const Root = () => {
  return (
      <View style={styles.container}>
        <Text>Sailor 🌙</Text>
        <Cal />
        {/* <SingleDay /> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbols: {
    width: 300,
    height: 150
  },
  sailor: {
    color: '#888',
    fontSize: 30
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default Root
