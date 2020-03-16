import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getSign } from '../astro'
import { horoscopeBank } from '../constants'

const ListedPlanet = props => {
  const {planet} = props

  const degree = planet.apparentLongitudeDms30.split('°')[0]

  const sign = getSign(planet.apparentLongitudeDd)

  const generateHoroscope = (sign, planet) => {
    return horoscopeBank.planet[planet] + horoscopeBank.sign[sign]
  }

  return (
    <View style={styles.container} >
      <Image source={props.icon} style={{width: 50, height: 50}} />
      <View>
        <Text style={styles.sign} >{planet.name} is at {degree}° {sign}: </Text>
        <Text>{generateHoroscope(sign, planet.name)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  sign: {
    fontWeight: '700'
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
  }
});

export default ListedPlanet
