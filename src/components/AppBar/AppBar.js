import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/authOperations';
import { selectAuthentificated, selectToken } from 'redux/selectors';
import { AuthFalse, StyledNavLink, StyledToolbar } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  React.useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }} width="100%">
      <AppBar>
        <StyledToolbar>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <UserMenu />
          ) : (
            <AuthFalse>
              <StyledNavLink to="/register">Sign up</StyledNavLink>

              <StyledNavLink to="/login">Log in</StyledNavLink>
            </AuthFalse>
          )}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
