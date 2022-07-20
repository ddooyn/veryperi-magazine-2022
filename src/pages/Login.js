import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDocs, where, query, collection } from 'firebase/firestore';
import { auth, db } from 'shared/firebase';
import { useSetRecoilState } from 'recoil';
import { usernameAtom } from 'shared/atoms';

const Login = () => {
  const navigate = useNavigate();
  const setUsername = useSetRecoilState(usernameAtom);
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async (data) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userDoc = await getDocs(
        query(collection(db, 'users'), where('userId', '==', user.user.uid))
      );
      await userDoc.forEach((user) => {
        setUsername(user.data().nickname);
      });

      alert('로그인 성공!');
      navigate('/');
    } catch (err) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다');
      setValue('email', '');
      setValue('password', '');
      setFocus('email');
      return;
    }
  };

  return (
    <LoginSection>
      <h2>Login</h2>
      <Form id="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <label htmlFor="id">아이디</label>
          <input
            type="email"
            id="id"
            placeholder="e-mail"
            autoComplete="off"
            {...register('email', {
              required: '* 이메일을 입력해주세요',
              pattern: /^\S+@\S+$/i,
            })}
          />
        </Row>

        <Row>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: '* 비밀번호를 입력해주세요',
              minLength: 6,
            })}
          />
        </Row>
      </Form>

      <Button type="submit" form="login-form" disabled={!isValid}>
        로그인하기
      </Button>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  padding-bottom: 30px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  border-bottom: 1px solid #555;
  label {
    display: inline-block;
    width: 100px;
  }
  input {
    padding: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    &::placeholder {
      padding: 0 5px;
      font-style: italic;
      text-align: right;
    }
  }
`;

const Button = styled.button`
  padding: 20px;
  background: #222;
  color: #fff;
  &:disabled {
    background: #ccc;
    cursor: default;
  }
`;
