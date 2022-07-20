import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  console.log(isLoggedIn);

  return (
    <header>
      <Navbar>
        <Link to="/">
          <img src="/img/logo.png" alt="메인 페이지로 가기" />
        </Link>
        <Menu>
          {isLoggedIn ? (
            <>
              {' '}
              <li>
                <Link to="/myinfo">내정보</Link>
              </li>
              <li>
                <Link to="/notification">알림</Link>
              </li>
              <li>로그아웃</li>
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
  align-items: center;
`;

const Menu = styled.div`
  display: flex;
  color: #555;
  gap: 15px;
  & li {
    transition: 0.1s color ease-in-out;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
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
