import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PostArticle = ({ post }) => {
  const { id, image, content, username, createdAt, layout } = post;
  return (
    <Article>
      <ArticleLink to={`/post/${id}`}>
        <ArticleHeader>
          <ProfileImg src="/img/profile.png" alt="" />
          <Username>{username}</Username>
          <Created>{new Date(createdAt).toLocaleString()}</Created>
        </ArticleHeader>
        <Content col={layout.col} rev={layout.rev}>
          <Image src={image} alt="" />
          <p>{content}</p>
        </Content>
      </ArticleLink>
    </Article>
  );
};

export default PostArticle;

const Article = styled.article`
  padding: 20px 10px 25px;
  border-bottom: 1px solid #555;
  &:nth-child(odd) {
    background: #f5f5f5;
  }
  @media only screen and (max-width: 512px) {
    padding: 10px 0;
  }
`;

const ArticleLink = styled(Link)`
  display: block;
  transition: 0.3s all ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const Username = styled.span`
  font-weight: 500;
`;

const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Created = styled.span`
  color: #999;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: -0.1em;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${({ col, rev }) =>
    col ? 'column-reverse' : rev ? 'row-reverse' : 'row'};
  p {
    flex: 1;
    text-align: center;
    word-break: keep-all;
  }
  @media only screen and (max-width: 512px) {
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  margin: auto;
  width: calc(80vw - 50%);
  min-width: 300px;
  max-width: 450px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
  @media only screen and (max-width: 512px) {
    width: 100%;
    min-width: auto;
  }
`;
