import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  Colors,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from './../components/styles';

// Colorsa
const { brand, darkLight, primary } = Colors;

const Welcome = () => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage resizeMode="cover" source={require('./../assets/splash.png')}></WelcomeImage>
        <WelcomeContainer>
          <PageTitle welcome={true}>Welcome Back!</PageTitle>
          <SubTitle welcome={true}>User</SubTitle>
          <SubTitle welcome={true}>yourname@gmail.com</SubTitle>
          <StyledFormArea>
            <Avatar resizeMode="cover" source={require('./../assets/splash.png')} />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
