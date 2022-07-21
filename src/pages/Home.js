import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from 'shared/atoms';
import { useSelector, useDispatch } from 'react-redux';
import PostArticle from 'components/PostArticle';

const Home = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const postList = useSelector((state) => state.post);
  console.log(postList);

  return (
    <section>
      <h2 hidden>메인 페이지 모든 포스트 보기</h2>
      {postList.map((post) => (
        <PostArticle key={post.id} post={post} />
      ))}
      {isLoggedIn ? (
        <PostBtn to="/post">
          <img src="img/addbtn.png" alt="글 작성 페이지로 가기" />
        </PostBtn>
      ) : null}
    </section>
  );
};

export default Home;

const PostBtn = styled(Link)`
  position: fixed;
  bottom: 15px;
  right: 25px;
`;
