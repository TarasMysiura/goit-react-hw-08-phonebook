import React from 'react';
import {
  Container,
  ImageGif,
  StyledNavLink,
  TextP1,
  TextP2,
  TitleH2,
} from './HomePage.styled';
import { useSelector } from 'react-redux';
import { selectAuthentificated, selectUserData } from 'redux/selectors';

const HomePage = () => {
  const authentificated = useSelector(selectAuthentificated);
  const userName = useSelector(selectUserData)

  return (
    <Container>
      {!authentificated ? (
        <div>
          <TitleH2>Welcome</TitleH2>
          <ImageGif
            src="https://usagif.com/wp-content/uploads/2021/4fh5wi/welcome-5.gif"
            alt="Welcome"
            width="300px "
          />
          <TextP1>Now you will exactly not forget your contacts!</TextP1>
          <TextP2>
            Please,&nbsp;
            <StyledNavLink to="/register">
              <b>Sign up</b>
            </StyledNavLink>
            &nbsp;or&nbsp;
            <StyledNavLink to="/login">
              <b>Log in</b>
            </StyledNavLink>
            &nbsp;to have access to the Phonebook!
          </TextP2>
        </div>
      ) : (
        <div>
          <TitleH2>Hi, {userName.name}</TitleH2>
          <ImageGif
            src="https://vgif.ru/gifs/130/vgif-ru-10226.gif"
            alt="Phone"
            width="300px "
          />
          <TextP1>Now you can view your contacts!</TextP1>
          <TextP2>
            Please, follow the link &nbsp;
            <StyledNavLink to="/contacts">
              <b>Contacts</b>
            </StyledNavLink>
            &nbsp;!
          </TextP2>
        </div>
      )}
    </Container>
  );
};

//

export default HomePage;
