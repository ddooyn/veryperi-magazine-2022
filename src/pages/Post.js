import React from 'react';
import styled from 'styled-components';
import { Navigate } from 'react-router-dom';

import PostForm from 'components/PostForm';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';

const Post = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  if (!isLoggedIn) {
    alert('포스트 작성을 하려면 로그인이 필요합니다.');
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <PostSection>
      <h2>
        포스트<span>작성</span>
      </h2>
      <PostForm />
    </PostSection>
  );
};

export default Post;

const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin: -40px 0 10px;
    span {
      color: #6768ab;
    }
  }
`;
