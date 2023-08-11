import { styled } from 'styled-components';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const StyledNavLink = styled(NavLink)`
  background-color: transparent;
  text-decoration: none;
  border: none;
  font-family: 'Roboto', sans-serif;
  color: #edecdb;
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
  &.active {
    /* background-color: #fff; */
    color: #6a0933;
  }
`;

export const AuthTrue = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
`;

export const AuthFalse = styled.div`
  display: flex;
  gap: 20px;
`;
