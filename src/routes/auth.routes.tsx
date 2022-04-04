import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ResetPassword from '../pages/ResetPassword';

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'none',
      }}>
      <AuthStack.Screen
        name="SignIn"
        component={Signin}
        options={{title: 'Entrar'}}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Criar Conta'}}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{title: 'Nova Senha'}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
