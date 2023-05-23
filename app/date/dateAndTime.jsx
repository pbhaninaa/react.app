import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../styles';

const DateAndTime = () => {
  const getCurrentTimeAndDate = () => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();
    const currentDateString = currentDate.toDateString();

    return { time: currentTime, date: currentDateString };
  };

  const { time, date } = getCurrentTimeAndDate();

  return (
    <View  >
      <Text style={Styles.headingStyle}>{time}</Text>
      <Text style={Styles.headingStyle}>{date.substring(4)}</Text>
    </View>
  );
};

export default DateAndTime;
