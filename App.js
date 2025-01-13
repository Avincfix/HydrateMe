// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Log from './screens/Log';
import Premium from './screens/Premium';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function(notification) {
    console.log('NOTIFICATION:', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  requestPermissions: true,
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Log" component={Log} />
        <Stack.Screen name="Premium" component={Premium} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
