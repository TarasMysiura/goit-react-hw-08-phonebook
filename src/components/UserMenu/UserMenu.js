import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/authOperations';
import { selectUserData } from 'redux/selectors';
import { AuthTrue, Span, StyledNavLink, User } from './UserName.styled';

const UserMenu = () => {

  const userName = useSelector(selectUserData);

    const dispatch = useDispatch()
    
    const handleLogOut = () => {
      dispatch(logoutUserThunk());
    };
    return (
      <AuthTrue>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <User>Hi, <Span>{userName.name}</Span></User>
              <StyledNavLink to="/" onClick={handleLogOut}>
                Log out
              </StyledNavLink>
            </AuthTrue>


  );
}

export default UserMenu