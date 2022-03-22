import styled, {css} from 'styled-components/native';
import {theme} from '../../../styles/theme';

export const Address = styled.View`
  width: 100%;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 25px;
`;

export const InputLabel = styled.Text`
  color: ${theme.Colors.White};
  margin-bottom: 2px;
  padding: 0 5px;
  font-size: 16px;
`;

type InputParams = {hasError?: boolean};
export const Input = styled.TextInput<InputParams>`
  ${({hasError = false}) => css`
    width: 100%;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 16px;
    color: ${theme.Colors.White};
    background-color: ${theme.Colors.BackgourndInput};
    border: ${hasError ? 'solid 1px #D27A7A' : 'none'};
  `}
`;

export const HorizontalDirection = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Street = styled(InputWrapper)`
  width: 70%;
`;

export const Number = styled(InputWrapper)`
  width: 25%;
`;

export const Telephone = styled(InputWrapper)`
  width: 55%;
`;

export const Cep = styled(InputWrapper)`
  width: 40%;
`;
