import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from 'styles/GlobalStyle';

import Layout from 'components/Layout';
import Home from 'pages/Home';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import MyInfo from 'pages/MyInfo';
import Notification from 'pages/Notification';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
