import styled, {css} from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.View`
  ${() => css`
    align-items: center;
    background-color: ${theme.Colors.secondary};
    padding: 5px 15px;
    margin: 0 3px;
    margin-bottom: 10px;
    border-radius: 5px;

    border-color: ${theme.Colors.gray};
    border-width: 0.3px;
  `}
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom-color: ${theme.Colors.lightGray};
  border-bottom-width: 0.3px;
`;

export const Status = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;

  border-bottom-color: ${theme.Colors.lightGray};
  border-bottom-width: 0.3px;
`;

type StatusColorProps = {
  statusColor: string;
};
export const StatusColor = styled.View<StatusColorProps>`
  ${({statusColor}) => css`
    flex-direction: row;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    border-radius: 100px;
    background-color: ${statusColor};
  `}
`;

export const Description = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

export const Text = styled.Text`
  ${() => css`
    font-size: 16px;
    color: ${theme.Colors.text};
    padding: 10px 0;
  `}
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 0 10px;
`;

export const Details = styled.Image`
  width: 17px;
  height: 20px;
`;
