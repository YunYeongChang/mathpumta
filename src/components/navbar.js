import React from 'react';
import styled from 'styled-components';
import logo from '../data/logo.png';

const Icon = styled.h2`
  padding: 0 5px;
  margin-right: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled.button`
  width: 100px;
  padding: 5px;
  margin: 0 4px;
`;

const NavBar = () => {
  return (
    <ButtonWrapper>
      <InnerWrapper>
        <Icon background={logo} width="120" height="80" alt="Mathpumta">
          Mathpumta
        </Icon>
        <NavButton>메인 페이지</NavButton>
        <NavButton>타이머</NavButton>
        <NavButton>정보</NavButton>
      </InnerWrapper>
      <NavButton>로그인</NavButton>
    </ButtonWrapper>
  );
};

export default NavBar;
