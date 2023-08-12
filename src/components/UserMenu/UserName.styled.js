import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

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

export const User = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #222222;
  font-size: 26px;
  font-weight: 700;
`;
export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  color: #ff9900;
  font-size: 26px;
  font-weight: 700;
`;

export const AuthTrue = styled.div`
  width: 55%;
  display: flex;
  justify-content: space-between;
`;
