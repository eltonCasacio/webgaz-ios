import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import PurchaseScreen from '../pages/Purchase';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'none',
      }}>
      <AppStack.Screen name="Home" component={HomeScreen} />
      <AppStack.Screen name="Purchase" component={PurchaseScreen} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
