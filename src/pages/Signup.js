import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = () => {
    return false;
    alert('회원가입 성공! 환영합니다:)');
    navigate('/login');
  };

  return (
    <SignupSection>
      <h2>Signup</h2>
      <Form id="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <label htmlFor="id">아이디</label>
          <input
            type="email"
            id="id"
            placeholder="이메일 형식"
            autoComplete="off"
            {...register('email', {
              required: '* 이메일을 입력해주세요',
              pattern: /^\S+@\S+$/i,
            })}
          />
        </Row>
        {errors.email && <Error>{errors.email.message}</Error>}
        {errors.email && errors.email.type === 'pattern' && (
          <Error>* 잘못된 이메일 형식입니다.</Error>
        )}

        <Row>
          <label htmlFor="nickname">닉네임</label>
          <input
            type="nickname"
            id="nickname"
            placeholder="10글자 이하"
            autoComplete="off"
            {...register('nickname', {
              required: '* 닉네임을 입력해주세요',
              maxLength: 10,
            })}
          />
        </Row>
        {errors.nickname && <Error>{errors.nickname.message}</Error>}
        {errors.nickname && errors.nickname.type === 'maxLength' && (
          <Error>* 닉네임은 10자 이하입니다</Error>
        )}

        <Row>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="6글자 이상"
            autoComplete="off"
            {...register('password', {
              required: '* 비밀번호를 입력해주세요',
              minLength: 6,
            })}
          />
        </Row>
        {errors.password && <Error>{errors.password.message}</Error>}
        {errors.password && errors.password.type === 'minLength' && (
          <Error>* 비밀번호는 6자 이상입니다</Error>
        )}

        <Row>
          <label htmlFor="confirm-password">비밀번호 확인</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="비밀번호 확인"
            autoComplete="off"
            {...register('passwordConfirmation', {
              required: '* 비밀번호 확인을 입력해주세요',
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || '* 비밀번호가 일치하지 않습니다';
                },
              },
            })}
          />
        </Row>
        {errors.passwordConfirmation && (
          <Error>{errors.passwordConfirmation.message}</Error>
        )}
      </Form>

      <Button type="submit" form="signup-form" disabled={!isValid}>
        회원가입하기
      </Button>
    </SignupSection>
  );
};

export default Signup;

const SignupSection = styled.section`
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

const Error = styled.p`
  font-size: 14px;
  color: #6768ab;
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
