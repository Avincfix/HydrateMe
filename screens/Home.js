// screens/Home.js
import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

function Home() {
  const dailyGoal = 2000; // in ml
  const currentIntake = 1200; // in ml
  const progress = currentIntake / dailyGoal;

  return (
    <View>
      <Text>Daily Goal: {dailyGoal} ml</Text>
      <ProgressBar progress={progress} />
      <Text>Current Intake: {currentIntake} ml</Text>
    </View>
  );
}

export default Home;
