import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import css from './AppBAr.module.css';
import { selectAuthentificated, selectToken } from 'redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk, refreshUserThunk } from 'redux/authOperations';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  React.useEffect(() => {
    if (!token) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch]);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <Box sx={{ flexGrow: 1 }} width="100%">
      <AppBar>
        <Toolbar className={css.toolbar}>
          <NavLink to="/">
            <button className={css.navButton}>Home</button>
          </NavLink>
          {authentificated ? (
            <div className={css.auth}>
              <NavLink to="/contacts">
                <button className={css.navButton}>Contacts</button>
              </NavLink>
              <NavLink to="/">
                <button className={css.navButton} onClick={handleLogOut}>
                  Log out
                </button>
              </NavLink>
            </div>
          ) : (
            <div className={css.auth}>
              <NavLink to="/register">
                <button className={css.navButton}>Sign up</button>
              </NavLink>

              <NavLink to="/login">
                <button className={css.navButton}>Log in</button>
              </NavLink>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
