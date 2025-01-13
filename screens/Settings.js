// screens/Settings.js
import React, { useState, useEffect } from 'react';
import { View, Picker, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PushNotification from 'react-native-push-notification';

function Settings() {
  const [reminderFrequency, setReminderFrequency] = useState(1);

  useEffect(() => {
    AsyncStorage.getItem('reminderFrequency').then(value => {
      if (value) setReminderFrequency(parseFloat(value));
    });
  }, []);

  const saveFrequency = async () => {
    await AsyncStorage.setItem('reminderFrequency', reminderFrequency.toString());
    PushNotification.cancelAllLocalNotifications();
    const frequency = reminderFrequency * 60 * 60 * 1000;
    PushNotification.localNotificationSchedule({
      message: "Time to drink water!",
      date: new Date(Date.now() + frequency),
      repeatType: 'time',
      repeatInterval: frequency,
    });
  };

  return (
    <View>
      <Picker
        selectedValue={reminderFrequency}
        onValueChange={setReminderFrequency}
      >
        <Picker.Item label="Every 1 hour" value={1} />
        <Picker.Item label="Every 2 hours" value={2} />
        <Picker.Item label="Every 3 hours" value={3} />
      </Picker>
      <Button title="Save" onPress={saveFrequency} />
    </View>
  );
}

export default Settings;
