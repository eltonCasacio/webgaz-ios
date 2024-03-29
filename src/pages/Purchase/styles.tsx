import styled, {css} from 'styled-components/native';
import {theme} from '../../styles/theme';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const wFraction = width / width;
const hFraction = height / height;

export const Wrapper = styled.SafeAreaView`
  background-color: ${theme.Colors.Backgroud};
  justify-content: space-between;
  height: 100%;
`;

export const CardWrapper = styled.View``;

export const Text = styled.Text`
  color: ${theme.Colors.lightGray};
  font-size: ${hFraction * 16}px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const LitersTitle = styled.Text`
  color: ${theme.Colors.lightGray};
  font-size: 14px;
  padding-left: 2px;
  text-transform: uppercase;
`;

export const Card = styled.View`
  ${() => css`
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    border: solid 2px #a4a2a24d;
    margin: 5px ${wFraction * 15}px;
  `}
`;

export const CardTitle = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitleText = styled.Text`
  color: ${theme.Colors.lightGray};
  margin-left: 5px;
  font-size: ${hFraction * 16}px;
  padding: 5px 0;
`;

export const Divider = styled.View`
  border: solid 1px #a4a2a24d;
  width: 100%;
  margin: 10px 0;
`;

export const LitersPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 10px ${wFraction * 15}px;
`;

export const Liters = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LitersText = styled.View`
  margin-right: 10px;
`;

export const LitersInput = styled.TextInput`
  background-color: ${theme.Colors.BackgourndInput};
  border-radius: 5px;
  width: 48%;
  text-align: center;
  color: ${theme.Colors.White};
  font-size: 18px;
  height: 35px;
  padding: 0;
`;

export const Price = styled.Text`
  color: ${theme.Colors.White};
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;

export const Payment = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px ${wFraction * 15}px;
`;

export const PaymentText = styled.Text`
  color: ${theme.Colors.lightGray};
  font-size: 16px;
  margin-left: 3px;
`;

export const PaymentSelectWrapper = styled.View`
  background-color: ${theme.Colors.BackgourndInput};
  border-radius: 4px;
`;

export const PaymentDateText = styled.Text`
  color: ${theme.Colors.lightGray};
  font-size: 16px;
`;

export const PaymentDate = styled.TouchableOpacity`
  color: ${theme.Colors.lightGray};
`;

export const PaymentInputWrapper = styled.View`
  justify-content: space-between;
  width: 48%;
`;

export const PaymentInput = styled.TextInput`
  background-color: ${theme.Colors.BackgourndInput};
  /* border-radius: 2px; */
  width: 100%;
  text-align: center;
  color: ${theme.Colors.White};
  font-size: 18px;
`;

export const PaymentInputDate = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.Colors.BackgourndInput};
  border-radius: 4px;
  width: 100%;
  color: ${theme.Colors.White};
  padding: 10px;
`;

export const MessageFreight = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0 ${wFraction * 15}px;
`;

export const MessageFreightTitle = styled.Text`
  color: ${theme.Colors.warning};
  font-size: ${wFraction * 16}px;
  margin-top: 5%;
`;

export const MessageFreightMsg = styled.Text`
  color: ${theme.Colors.lightGray};
  font-size: 16px;
  text-align: center;
`;

export type RadioProps = {active: boolean};
export const RadioButton = styled.View<RadioProps>`
  ${({active = false}) => css`
    width: 20px;
    height: 20px;
    background-color: ${!active ? '#ffffff14' : '#ffffffb5'};
    border: solid 2px #fff;
    border-radius: 200px;
  `}
`;
