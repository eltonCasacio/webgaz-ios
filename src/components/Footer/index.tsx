import React from 'react';
import {useLinkTo} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useAuth} from '../../contexts/auth';
import * as S from './styles';

export default function Footer() {
  const {signOut} = useAuth();
  const linkTo = useLinkTo();

  return (
    <S.Wrapper>
      <S.Menu onPress={() => linkTo('/home')}>
        <S.Image source={require('../../assets/home.png')} />
      </S.Menu>

      <S.Menu onPress={() => linkTo('/profile')}>
        <S.Image source={require('../../assets/userList.png')} />
      </S.Menu>

      <S.Menu onPress={() => linkTo('/purchase')}>
        <AntDesign name="shoppingcart" size={35} color="#fff" />
      </S.Menu>

      <S.Menu onPress={() => linkTo('/purchase-orde')}>
        <S.Image source={require('../../assets/pedidos.png')} />
      </S.Menu>

      <S.Menu onPress={signOut}>
        <S.Image source={require('../../assets/logout.png')} />
      </S.Menu>
    </S.Wrapper>
  );
}
