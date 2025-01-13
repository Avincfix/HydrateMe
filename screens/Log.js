// screens/Log.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Log() {
  const [amount, setAmount] = useState('');

  const addIntake = async () => {
    const date = new Date().toISOString().split('T')[0];
    let intake = await AsyncStorage.getItem(`intake_${date}`);
    intake = intake ? parseFloat(intake) + parseFloat(amount) : parseFloat(amount);
    await AsyncStorage.setItem(`intake_${date}`, intake.toString());
    setAmount('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter amount (ml)"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Add Intake" onPress={addIntake} />
    </View>
  );
}

export default Log;
