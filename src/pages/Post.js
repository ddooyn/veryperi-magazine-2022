import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const Post = () => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'all',
  });

  const [imgName, setImgName] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const textRef = useRef('');
  const [typed, setTyped] = useState('내용을 입력하면 여기에 표시됩니다');
  const [layout, setLayout] = useState({
    col: false,
    rev: false,
  });

  const onTyping = () => {
    setTyped(textRef.current.value);
  };

  const previewImage = async (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgName(image.name);
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  const onSubmit = async (data) => {
    return;
  };

  return (
    <PostSection>
      <h2>
        포스트<span>작성</span>
      </h2>

      <PostForm onSubmit={handleSubmit(onSubmit)}>
        <Row className="row-img">
          <input
            id="file"
            type="file"
            accept="image/*"
            onChange={previewImage}
            hidden
          />
          <ImgNameLabel>
            <ImgNameInput
              type="text"
              placeholder="사진을 첨부해주세요"
              value={imgName}
              readOnly
            />
          </ImgNameLabel>
          <ImgAddBtn htmlFor="file">
            <label htmlFor="file">사진 선택</label>
          </ImgAddBtn>
        </Row>

        <Row>
          <h3>레이아웃 선택</h3>
          <Radios>
            <div>
              <input
                type="radio"
                name="layout"
                id="layout-a"
                defaultChecked
                onClick={() => setLayout({ col: false, rev: false })}
              />
              <label htmlFor="layout-a">사진/글(좌우)</label>
            </div>
            <div>
              <input
                type="radio"
                name="layout"
                id="layout-b"
                onClick={() => setLayout({ col: false, rev: true })}
              />
              <label htmlFor="layout-b">글/사진(좌우)</label>
            </div>
            <div>
              <input
                type="radio"
                name="layout"
                id="layout-c"
                onClick={() => setLayout({ col: true, rev: false })}
              />
              <label htmlFor="layout-c">글/사진(상하)</label>
            </div>
          </Radios>
        </Row>

        <Preview col={layout.col} rev={layout.rev}>
          <ImgLabel>{imgSrc && <img src={imgSrc} alt="" />}</ImgLabel>
          <p>{typed}</p>
        </Preview>

        <Row>
          <h3>포스트 내용</h3>
          <PostTextArea
            ref={textRef}
            onChange={onTyping}
            placeholder="포스트 내용을 입력하세요 :)"
            spellCheck="false"
          />
        </Row>
      </PostForm>
      <Button type="submit" disabled={!isValid}>
        게시글 작성하기
      </Button>
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

const PostForm = styled.form`
  width: 80vw;
  max-width: 760px;
  margin-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px 0 15px;
  &.row-img {
    margin-bottom: 30px;
    border-bottom: 1px solid #555;
  }
  label {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
  input {
    padding: 10px 0;
    border: none;
    outline: none;
    font-size: 16px;
    font-style: italic;
  }
`;

const ImgNameLabel = styled.label`
  flex: 1;
`;

const ImgNameInput = styled.input`
  width: 100%;
  color: #aaa;
`;

const ImgAddBtn = styled.button`
  margin-left: 5px;
  background: #222;
  color: #fff;
  label {
    width: 100%;
    height: 100%;
    padding: 11px 20px;
    cursor: pointer;
  }
`;

const ImgLabel = styled.label`
  display: block;
  overflow: hidden;
  width: 335px;
  height: 245px;
  border: 1px solid #aaa;
  border-radius: px;
  background: #f4f4f4 url(/img/noimage.png) center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Radios = styled.div`
  display: flex;
  gap: 15px;
  div {
    text-align: center;
  }
`;

const Preview = styled.div`
  display: flex;
  flex-direction: ${({ col, rev }) =>
    col ? 'column-reverse' : rev ? 'row-reverse' : 'row'};
  justify-content: space-around;
  align-items: center;
  p {
    width: 335px;
    text-align: center;
  }
`;

const PostTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-top: 12px;
  padding: 30px;
  border: 1px solid #aaa;
  background: none;
  font-size: 16px;
  outline: none;
  resize: none;
  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 20px 40px;
  background: #222;
  color: #fff;
  font-size: 16px;
  &:disabled {
    background: #ccc;
    cursor: default;
  }
`;
