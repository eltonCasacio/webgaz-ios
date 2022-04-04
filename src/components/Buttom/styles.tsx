import styled, {css} from 'styled-components/native';
import {theme} from '../../styles/theme';

export type WrapperParams = {
  color: 'ButtonDefault' | 'ButtonDanger' | 'ButtonConfirm';
};
export const Wrapper = styled.TouchableOpacity<WrapperParams>`
  ${({color}) => css`
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.Colors[color]};
    border-radius: 5px;
    margin: 15px 0;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    color: ${theme.Colors.White};
    font-size: 20px;
    text-align: center;
  `}
`;
