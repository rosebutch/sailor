import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ListedPlanet = (props) => {
  const { planet } = props
  return (
    <View style={styles.container}>
      {/* this will take planet as props from single day map, display an image, the name, and the current sign and degree */}
      <Image source={planet.imageUrl} style={styles.icon} />
      <Text>{planet.name} is at {planet.degree} {planet.sign}</Text>
      {/* potential future functionality: drop down with automatically generated meaning based on inputs */}
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
  icon: {
    width: 50,
    height: 50,
  },
});

export default ListedPlanet
