import React from 'react';
import {
  Container,
  ImageGif,
  TextP1,
  TextP2,
  TitleH2,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <TitleH2>Welcome</TitleH2>
      <div></div>
      <ImageGif
        src="https://usagif.com/wp-content/uploads/2021/4fh5wi/welcome-5.gif"
        alt="Welcome"
        width="300px "
      />
      <TextP1>Now you will exactly not forget your contacts!</TextP1>
      <TextP2>
        Please,&nbsp;<b>Sign up</b>&nbsp;or&nbsp;<b>Log in</b>&nbsp;to have access to the Phonebook!
      </TextP2>
      {/* <Li></div> */}
    </Container>
  );
};

export default HomePage;
