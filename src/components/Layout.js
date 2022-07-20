import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';

const Layout = () => {
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
