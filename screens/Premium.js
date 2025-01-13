// screens/Premium.js
import React, { useEffect } from 'react';
import { RNIap } from 'react-native-iap';
import { View, Button, Text } from 'react-native';

const premiumProductIds = Platform.select({
  ios: ['com.hydrateme.premium'],
  android: ['com.hydrateme.premium'],
});

function Premium() {
  useEffect(() => {
    RNIap.initConnection();
  }, []);

  const purchasePremium = async () => {
    try {
      const purchase = await RNIap.buyProduct(premiumProductIds[0]);
      // Unlock premium features
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button title="Buy Premium" onPress={purchasePremium} />
    </View>
  );
}

export default Premium;
