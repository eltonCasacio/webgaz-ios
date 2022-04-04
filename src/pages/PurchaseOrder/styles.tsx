import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  padding: 0 15px;
  background-color: ${theme.Colors.Backgroud};
`;

export const ScrollView = styled.ScrollView``;

export const Label = styled.Text`
  align-self: center;
  color: ${theme.Colors.White};
  font-size: 25px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 25px;
`;

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  margin: 0 3px 30px;
  border-radius: 5px;
  background-color: ${theme.Colors.secondary};
  border-color: ${theme.Colors.gray};
  border-width: 0.3px;
`;
export const SearchInput = styled.TextInput`
  width: 100%;
  color: ${theme.Colors.text};
  font-size: 18px;
`;
export const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 5px;
`;

export const Goback = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 20px;
`;

export const GobackText = styled.Text`
  color: ${theme.Colors.White};
  font-size: 14px;
`;
