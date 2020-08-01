import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from { transform: none; }
  to { transform: rotateY(360deg); }
`;

const Icon = styled.span`
  display: inline-block;
  font-size: 48px;
  animation: 2s linear infinite ${spin};
  transform-origin: center center;
`;

const Container = styled.div`
  padding: 100px;
  text-align: center;
`;

export default function Spinner({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Icon>
        <span role="img" aria-label="A spinning flag">
          🇳🇴
        </span>
      </Icon>
      {children && <p>{children}</p>}
    </Container>
  );
}
