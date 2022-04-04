import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../pages/Home';
import PurchaseScreen from '../pages/Purchase';
import PurchaseShipping from '../pages/PurchaseShipping';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';
import ProfileUser from '../pages/ProfileUser';
import PurchaseOrderDetails from '../pages/PurchaseOrderDetails';
import PurchaseOrder from '../pages/PurchaseOrder';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'none',
      }}>
      <AppStack.Screen name="home" component={HomeScreen} />
      <AppStack.Screen name="profile" component={ProfileUser} />
      <AppStack.Screen name="purchase" component={PurchaseScreen} />
      <AppStack.Screen name="shipping" component={PurchaseShipping} />
      <AppStack.Screen name="confirm" component={PurchaseConfirmation} />
      <AppStack.Screen name="purchase-order" component={PurchaseOrder} />
      <AppStack.Screen name="details" component={PurchaseOrderDetails} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
