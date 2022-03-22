/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';

import * as S from './styles';

export default function Signin() {
  const logo_com_nome = require('../../assets/logo-com-nome.png');

  //   const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const [messageError, setMessageError] = useState<string>();

  return (
    <S.Wrapper>
      <S.LogoWrapper>{<S.Image source={logo_com_nome} />}</S.LogoWrapper>

      <S.Label>Login</S.Label>

      {messageError && <S.MessageError>{messageError}</S.MessageError>}

      <S.Form>
        <S.InputWrapper>
          <S.InputLabel>Nome do Usuário</S.InputLabel>
          <S.Input
            hasError={usernameError}
            onChangeText={text => setUsername(text)}
            value={username}
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputLabel>Senha</S.InputLabel>
          <S.Input
            hasError={passwordError}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </S.InputWrapper>

        <S.SignupForgotPassword>
          {/* <MyLink
            screen="ResetPassword"
            title="Esqueci minha senha"
            navigation={navigation}
          />

          <MyLink screen="SignUp" title="Cadastrar" navigation={navigation} /> */}
        </S.SignupForgotPassword>
      </S.Form>
      <S.Footer>
        {/* <Buttom color="buttonDefault" title="ENTRAR" callback={handleSignIn} /> */}
      </S.Footer>
    </S.Wrapper>
  );
}
