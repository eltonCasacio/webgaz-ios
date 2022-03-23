import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/Home';
import PurchaseScreen from '../pages/Purchase';
import PurchaseShipping from '../pages/PurchaseShipping';
import PurchaseConfirmation from '../pages/PurchaseConfirmation';

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
      <AppStack.Screen
        name="pedido-transportadora"
        component={PurchaseShipping}
        options={{title: 'Informações da Transportadora'}}
      />
      <AppStack.Screen
        name="confirmar-pedido"
        component={PurchaseConfirmation}
        options={{title: 'Confirmar Pedido'}}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
