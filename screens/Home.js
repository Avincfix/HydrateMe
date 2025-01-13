// screens/Home.js
import React from 'react';
import { View, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Home() {
 
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    checkStreak();
  }, []);
const checkStreak = async () => {
    const lastDate = await AsyncStorage.getItem('lastDate');
    const currentDate = new Date().toISOString().split('T')[0];
    if (lastDate !== currentDate) {
      // Calculate streak logic here
      setStreak(streak);
      await AsyncStorage.setItem('lastDate', currentDate);
    }
  };
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
