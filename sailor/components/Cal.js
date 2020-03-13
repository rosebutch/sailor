import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Calendar} from 'react-native-calendars';


const Cal = () => {

  // const dayPress = day => {
  //   test(day.dateString)
  // }

  // const monthChange = (month) => {
  //   console.log('month changed', month)
  // }

  return (
    <View style={styles.container}>
      <Calendar current={'2020-03-12'} onMonthChange={(month) => monthChange(month)} onDayPress={(day)=> dayPress(day)} />
    </View>
  );
}
export default Cal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

