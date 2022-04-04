import styled, {css} from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  ${() => css`
    height: 100%;
    background-color: ${theme.Colors.Backgroud};
  `}
`;
