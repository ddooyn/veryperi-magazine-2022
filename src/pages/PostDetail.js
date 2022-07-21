import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TiHeartFullOutline } from 'react-icons/ti';

const PostArticle = React.lazy(() => import('components/PostArticle'));

const PostDetail = () => {
  const postId = useParams().id;
  const post = useSelector((state) => state.post).filter(
    (p) => p.id === postId
  )[0];

  return (
    <PostSection>
      <h2>
        포스트<span>상세</span>
      </h2>
      <Suspense>
        <PostArticle post={post} />
      </Suspense>
      <PostNav>
        <li>수정</li>
        <li>삭제</li>
      </PostNav>
      <PostStatus rev={post.layout.rev}>
        <TiHeartFullOutline />
        <li>좋아요0개</li>
        <li>댓글0개</li>
      </PostStatus>
      <Row>
        <ImgNameInput
          type="text"
          id="comment"
          placeholder="댓글 내용을 입력하세요 :)"
          autoComplete="off"
        />
        <ImgAddBtn type="button">작성</ImgAddBtn>
      </Row>
    </PostSection>
  );
};

export default PostDetail;

const PostSection = styled.section`
  position: relative;
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
  article {
    position: relative;
    width: 100%;
  }
`;

const PostNav = styled.ul`
  position: absolute;
  display: flex;
  gap: 15px;
  top: 40px;
  right: 0;
  li {
    font-size: 15px;
    cursor: pointer;
    transition: 0.2s color ease;
    &:hover {
      color: #555;
    }
  }
`;

const PostStatus = styled.ul`
  position: absolute;
  bottom: 65px;
  left: ${({ rev }) => (rev ? '5px;' : '')};
  right: ${({ rev }) => (rev ? '' : '5px')};
  display: flex;
  align-items: center;
  margin: 10px auto 20px 0;
  gap: 10px;
  li {
    font-weight: 300;
    font-size: 15px;
    letter-spacing: -0.05em;
    color: #333;
  }
  svg {
    font-size: 30px;
    color: #aaa;
    cursor: pointer;
    &:active {
      color: #6768ab;
    }
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  input {
    padding: 16px;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;

const ImgNameInput = styled.input`
  flex: 1;
  color: #333;
  transition: 0.2s background ease-in-out;
  &:focus {
    background: #f5f5f5;
  }
`;

const ImgAddBtn = styled.button`
  padding: 16px 25px;
  background: #222;
  color: #fff;
  font-size: 16px;
`;
