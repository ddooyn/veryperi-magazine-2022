import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useRecoilValue, useRecoilState } from 'recoil';
import { isLoggedInAtom, usernameAtom } from 'shared/atoms';
import { auth } from 'shared/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const [username, setUsername] = useRecoilState(usernameAtom);

  return (
    <header>
      <Navbar>
        <Link to="/">
          <img src="/img/logo.png" alt="메인 페이지로 가기" />
        </Link>
        <Menu>
          {isLoggedIn && username ? (
            <>
              <li>
                <Link to="/myinfo">{username}님 반갑습니다:)</Link>
              </li>
              <li>
                <Link to="/notification">알림</Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setUsername('');
                    signOut(auth);
                    alert('로그아웃 되었습니다 :)');
                  }}
                >
                  로그아웃
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </>
          )}
        </Menu>
      </Navbar>
      <Title>
        <span>VERY PERI</span>MAGAZINE
      </Title>
    </header>
  );
};

export default Header;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
`;

const Menu = styled.ul`
  display: flex;
  color: #555;
  gap: 15px;
  li {
    transition: 0.1s color ease-in-out;
    cursor: pointer;
    &:hover {
      color: #000;
    }
    button {
      font-size: inherit;
      color: inherit;
    }
  }
`;

const SubMenu = styled.ul`
  display: flex;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
  margin-bottom: 50px;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.3em;
  font-size: 5vw;
  font-weight: 500;
  span {
    font-size: 15px;
    line-height: 1.4em;
    letter-spacing: normal;
    font-weight: 400;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 52px;
  }
`;
