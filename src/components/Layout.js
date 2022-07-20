import React, { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import { auth } from 'shared/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';

const Layout = () => {
  const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
  const toggleIsLoggedIn = useCallback(
    async (user) => (user ? setIsLoggedIn(true) : setIsLoggedIn(false)),
    [setIsLoggedIn]
  );

  useEffect(() => {
    onAuthStateChanged(auth, toggleIsLoggedIn);
  }, [toggleIsLoggedIn]);

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
`;
