import React, { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getPosts } from 'redux/modules/postSlice';
import { auth } from 'shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';

import Header from 'components/Header';

const Layout = () => {
  const dispatch = useDispatch();
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const toggleIsLoggedIn = useCallback(
    async (user) => (user ? setIsLoggedIn(true) : setIsLoggedIn(false)),
    [setIsLoggedIn]
  );

  useEffect(() => {
    onAuthStateChanged(auth, toggleIsLoggedIn);
  }, [toggleIsLoggedIn]);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Main>
      <Header />
      <Outlet />
    </Main>
  );
};

export default Layout;

const Main = styled.main`
  max-width: 960px;
  min-height: 80vh;
  margin: 50px auto;
  padding: 40px 60px;
  background: #fff;
  @media only screen and (max-width: 512px) {
    padding: 10px;
  }
`;
