import styled, {css} from 'styled-components/native';
import {theme} from '../../../styles/theme';

export const Wrapper = styled.View`
  flex: 1;
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
